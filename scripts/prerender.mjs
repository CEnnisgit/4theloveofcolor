/**
 * Build-time prerender: one real HTML file per route.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 * For every route in src/routes.ts it renders the React tree to a string,
 * drops it into the built index.html shell, injects that route's own head
 * tags, and writes dist/<path>/index.html.
 *
 * Why this exists, in one line: Google reads <title>, meta description and
 * rel=canonical from the HTML it is served, before running any JavaScript.
 * A single-page app that patches those tags in a useEffect ships every route
 * with the home page's canonical, which reads as "this page is a duplicate of
 * the home page" — so the city pages never get indexed on their own terms.
 *
 * Also emits sitemap.xml from the same table, so the sitemap cannot drift out
 * of sync with the pages that actually exist.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");

const { render, allRoutes, indexableRoutes } = await import(
  pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href
);

const ORIGIN = "https://4theloveofcolor.com";
const DEFAULT_OG_IMAGE = "/images/proj-exterior-white-2story.jpg";

/** Escape a string for use inside a double-quoted HTML attribute. */
const attr = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * Absolute URL for a route path.
 *
 * The trailing slash is the canonical form here, and it is not a style choice.
 * Every route is prerendered as `<path>/index.html`, and Netlify 301s a
 * directory path to its trailing-slash form -- so `/services/pressure-washing`
 * redirects to `/services/pressure-washing/`. Declaring the slashless URL as
 * canonical therefore pointed every page's canonical at a URL that redirects,
 * which is the weaker signal. Canonical and sitemap now both name the URL that
 * is actually served.
 */
const absolute = (path) => (path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}/`);

function headTagsFor(route) {
  const url = absolute(route.path);
  const image = ORIGIN + (route.image ?? DEFAULT_OG_IMAGE);
  const robots = route.noIndex ? "noindex, follow" : "index, follow";

  return [
    `<title>${attr(route.title)}</title>`,
    `<meta name="description" content="${attr(route.description)}" />`,
    `<link rel="canonical" href="${attr(url)}" />`,
    `<meta name="robots" content="${attr(robots)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${attr(route.title)}" />`,
    `<meta property="og:description" content="${attr(route.description)}" />`,
    `<meta property="og:url" content="${attr(url)}" />`,
    `<meta property="og:image" content="${attr(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(route.title)}" />`,
    `<meta name="twitter:description" content="${attr(route.description)}" />`,
    `<meta name="twitter:image" content="${attr(image)}" />`,
  ].join("\n    ");
}

/** dist/<path>/index.html, except the root, which is dist/index.html. */
function outputPathFor(routePath) {
  if (routePath === "/") return join(distDir, "index.html");
  return join(distDir, routePath.replace(/^\//, ""), "index.html");
}

const template = await readFile(join(distDir, "index.html"), "utf8");

if (!template.includes("<!--seo-->")) {
  throw new Error(
    "index.html is missing the <!--seo--> marker; head tags cannot be injected.",
  );
}
if (!template.includes('<div id="root"></div>')) {
  throw new Error(
    'index.html is missing an empty <div id="root"></div> to render into.',
  );
}

for (const route of allRoutes) {
  const appHtml = render(route.path);

  const html = template
    .replace("<!--seo-->", headTagsFor(route))
    .replace(
      '<div id="root"></div>',
      `<div id="root" data-prerendered="true">${appHtml}</div>`,
    );

  const outPath = outputPathFor(route.path);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf8");
  console.log(`  prerendered  ${route.path.padEnd(28)} -> ${outPath.slice(root.length + 1)}`);
}

// Netlify serves 404.html for any path with no matching file, with a real 404
// status. That is what stops a mistyped URL from returning 200 on a "page not
// found" screen — a soft 404, which Google treats as a quality problem.
const notFoundHtml = await readFile(outputPathFor("/404"), "utf8");
await writeFile(join(distDir, "404.html"), notFoundHtml, "utf8");
console.log("  wrote        404.html (served with a real 404 status)");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...indexableRoutes.map((route) =>
    ["  <url>", `    <loc>${absolute(route.path)}</loc>`, "  </url>"].join("\n"),
  ),
  "</urlset>",
  "",
].join("\n");

await writeFile(join(distDir, "sitemap.xml"), sitemap, "utf8");
console.log(`  wrote        sitemap.xml (${indexableRoutes.length} indexable URLs)`);
