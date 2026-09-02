/**
 * Automated SEO gate over the prerendered build.
 *
 * Checks the things that are objectively checkable from the built output, so
 * "the site is SEO-ready" is a measurement rather than an opinion — and so a
 * future change cannot quietly undo the work. Exits non-zero on any failure,
 * which makes it usable as a CI step.
 *
 * It cannot check the things that actually decide local rankings — Google
 * Business Profile completeness, review count, proximity, whether the domain
 * is even pointed here. Those are listed in LAUNCH.md and are not the
 * website's job.
 *
 * Usage:  npm run build && npm run audit
 */

import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
const ORIGIN = "https://4theloveofcolor.com";

const failures = [];
const warnings = [];
const fail = (page, msg) => failures.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

/** Every prerendered page, as { url, html }. */
async function collectPages(dir = DIST, pages = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectPages(full, pages);
    } else if (entry.name === "index.html") {
      const rel = path.relative(DIST, path.dirname(full)).split(path.sep).join("/");
      pages.push({ url: "/" + rel, html: await readFile(full, "utf8") });
    }
  }
  return pages;
}

/**
 * Decode the handful of entities the renderer emits. Without this, length
 * checks are wrong in a way that matters: "&" serialises to "&amp;" and an
 * apostrophe to "&#x27;", so a 62-character title measures as 67 and gets
 * flagged for a truncation that will never happen. Google counts the rendered
 * characters, so the audit has to as well.
 */
const decode = (s = "") =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&#x2F;/g, "/")
    .replace(/&nbsp;/g, " ");

const attr = (html, re) => {
  const m = html.match(re);
  return m ? decode(m[1]) : undefined;
};
const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);

const pages = (await collectPages()).map((p) => ({
  ...p,
  url: p.url === "/." || p.url === "/" ? "/" : p.url,
}));

const titles = new Map();
const canonicals = new Map();
const internalLinks = new Set();

for (const { url, html } of pages) {
  const isNoIndex = /<meta name="robots" content="noindex/.test(html);

  // --- head ---------------------------------------------------------------
  const title = attr(html, /<title>([^<]*)<\/title>/);
  if (!title) fail(url, "no <title>");
  else if (title.length > 65) warn(url, `title is ${title.length} chars, may be truncated`);
  if (title) {
    if (titles.has(title)) fail(url, `duplicate title, shared with ${titles.get(title)}`);
    else titles.set(title, url);
  }

  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!desc) fail(url, "no meta description");
  else if (desc.length > 165) warn(url, `description is ${desc.length} chars, may be truncated`);

  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  if (!canonical) fail(url, "no canonical");
  else {
    if (!canonical.startsWith("https://")) fail(url, "canonical is not absolute");
    const expected = url === "/" ? `${ORIGIN}/` : ORIGIN + url;
    if (canonical !== expected) fail(url, `canonical is ${canonical}, expected ${expected}`);
    if (!isNoIndex) {
      if (canonicals.has(canonical)) fail(url, `canonical collides with ${canonicals.get(canonical)}`);
      else canonicals.set(canonical, url);
    }
  }

  if (!/<html lang="en">/.test(html)) fail(url, "missing html lang");
  if (!/<meta property="og:title"/.test(html)) fail(url, "no Open Graph title");
  if (!/<meta name="viewport"/.test(html)) fail(url, "no viewport meta");

  // --- body ---------------------------------------------------------------
  const h1s = all(html, /<h1[^>]*>(.*?)<\/h1>/gs);
  if (h1s.length === 0) fail(url, "no <h1>");
  if (h1s.length > 1) fail(url, `${h1s.length} <h1> elements, expected 1`);

  // Main content must exist in the served HTML, not arrive via JavaScript.
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text.split(" ").length;
  if (!isNoIndex && words < 250) fail(url, `only ~${words} words of rendered text — thin`);

  if (!/data-prerendered="true"/.test(html)) fail(url, "not prerendered");

  // --- images -------------------------------------------------------------
  for (const tag of html.match(/<img [^>]*>/g) || []) {
    if (!/\salt="/.test(tag)) fail(url, `img without alt: ${tag.slice(0, 70)}`);
    if (!/\swidth="/.test(tag) || !/\sheight="/.test(tag))
      warn(url, `img without width/height (layout shift risk): ${tag.slice(0, 70)}`);
  }

  // --- structured data ----------------------------------------------------
  for (const block of all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(block.replace(/\\u003c/g, "<"));
    } catch (e) {
      fail(url, `invalid JSON-LD: ${e.message}`);
    }
  }

  // --- leakage ------------------------------------------------------------
  if (/localhost|127\.0\.0\.1|netlify\.app|\.local\b/.test(html))
    fail(url, "references localhost / preview domain");

  // --- collect internal links for the orphan check ------------------------
  for (const href of all(html, /href="(\/[^"#?]*)"/g)) internalLinks.add(href.replace(/\/$/, "") || "/");
}

// --- sitewide ---------------------------------------------------------------
const sitemap = await readFile(path.join(DIST, "sitemap.xml"), "utf8");
const sitemapUrls = all(sitemap, /<loc>([^<]*)<\/loc>/g);
const pageUrls = new Set(pages.map((p) => p.url));

for (const loc of sitemapUrls) {
  const rel = loc.replace(ORIGIN, "") || "/";
  const normalized = rel === "/" ? "/" : rel.replace(/\/$/, "");
  if (!pageUrls.has(normalized)) fail("sitemap.xml", `lists ${loc} which has no prerendered page`);
  const page = pages.find((p) => p.url === normalized);
  if (page && /<meta name="robots" content="noindex/.test(page.html))
    fail("sitemap.xml", `lists ${loc} which is noindex`);
}

for (const { url, html } of pages) {
  if (/<meta name="robots" content="noindex/.test(html)) continue;
  const abs = url === "/" ? `${ORIGIN}/` : ORIGIN + url;
  if (!sitemapUrls.includes(abs)) fail("sitemap.xml", `missing indexable page ${url}`);
}

if (!existsSync(path.join(DIST, "404.html"))) fail("dist", "no 404.html");
if (!existsSync(path.join(DIST, "robots.txt"))) fail("dist", "no robots.txt");
const robots = await readFile(path.join(DIST, "robots.txt"), "utf8");
if (!robots.includes("Sitemap:")) fail("robots.txt", "does not declare the sitemap");

// Orphans: an indexable page nothing links to is one Google has little reason
// to index, however good it is.
for (const { url, html } of pages) {
  if (url === "/" || /<meta name="robots" content="noindex/.test(html)) continue;
  if (!internalLinks.has(url)) fail(url, "orphan — no internal links point to it");
}

// Internal links must resolve to a real page or a redirect rule.
const redirects = existsSync(path.join(DIST, "_redirects"))
  ? (await readFile(path.join(DIST, "_redirects"), "utf8"))
      .split("\n")
      .filter((l) => l.trim() && !l.trim().startsWith("#"))
      .map((l) => l.trim().split(/\s+/)[0])
  : [];

for (const link of internalLinks) {
  if (pageUrls.has(link) || redirects.includes(link)) continue;
  if (existsSync(path.join(DIST, link.replace(/^\//, "")))) continue;
  fail("internal links", `${link} does not resolve`);
}

// --- report -----------------------------------------------------------------
console.log(`\nAudited ${pages.length} prerendered pages, ${sitemapUrls.length} in the sitemap.\n`);

if (warnings.length) {
  console.log(`${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ~ ${w}`);
  console.log("");
}

if (failures.length) {
  console.log(`${failures.length} FAILURE(S):`);
  for (const f of failures) console.log(`  x ${f}`);
  console.log("");
  process.exit(1);
}

console.log("All checks passed.");
console.log("Note: this covers the website only. Google Business Profile,");
console.log("reviews and the domain pointing here are in LAUNCH.md.\n");
