#!/usr/bin/env node
/**
 * Portable SEO gate. Audits a built static site and exits non-zero on failure.
 *
 * This exists because every serious SEO defect is invisible in a browser. A site
 * can look perfect and still ship 1,000 canonicals pointing at the wrong domain,
 * a sitemap listing five of a thousand pages, and a 404 in the footer of every
 * page. Those are the failures that cost rankings, and they are all detectable
 * from the built output in a few hundred lines.
 *
 * Usage:
 *   node scripts/seo-audit.mjs --dir dist --origin https://www.example.com
 *   node scripts/seo-audit.mjs --dir out  --origin https://www.example.com --min-words 200
 *
 * Or set it up once in package.json:
 *   "audit": "node scripts/seo-audit.mjs --dir dist --origin https://www.example.com"
 *   "build": "... && npm run audit"
 *
 * Supports both common static layouts:
 *   dist/about/index.html   (directory-per-route)
 *   out/about.html          (file-per-route, e.g. Next.js export)
 *
 * Exit codes: 0 = pass (warnings allowed), 1 = one or more failures.
 */

import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

// --- config ------------------------------------------------------------------

const arg = (flag, fallback) => {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};

const DIR = path.resolve(arg("--dir", "dist"));
const ORIGIN = arg("--origin", "").replace(/\/$/, "");
const MIN_WORDS = Number(arg("--min-words", 250));
const TITLE_MAX = Number(arg("--title-max", 65));
const DESC_MAX = Number(arg("--desc-max", 165));
/** Hosts that must never appear in built output. */
const FORBIDDEN_HOSTS = /localhost|127\.0\.0\.1|\.netlify\.app|\.vercel\.app|\.pages\.dev|\.local\b/;

if (!ORIGIN) {
  console.error("error: --origin is required, e.g. --origin https://www.example.com");
  process.exit(2);
}
if (!existsSync(DIR)) {
  console.error(`error: build directory not found: ${DIR}`);
  process.exit(2);
}

const failures = [];
const warnings = [];
const fail = (page, msg) => failures.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

// --- collect -----------------------------------------------------------------

/** Directories that hold build artifacts, not pages. */
const SKIP_DIRS = new Set(["_next", "_astro", "assets", "static", "node_modules"]);

async function collect(dir = DIR, pages = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) await collect(full, pages);
    } else if (entry.name.endsWith(".html")) {
      const rel = path.relative(DIR, full).split(path.sep).join("/");
      const url =
        rel === "index.html"
          ? "/"
          : "/" + rel.replace(/\/index\.html$/, "").replace(/\.html$/, "");
      pages.push({ url, html: await readFile(full, "utf8") });
    }
  }
  return pages;
}

/**
 * Decode the entities a renderer emits. Without this, length checks are wrong in
 * a way that matters: "&" serialises to "&amp;", so a 62-character title measures
 * as 67 and gets flagged for a truncation that will never happen. Google counts
 * rendered characters, so the audit has to as well.
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

const allPages = await collect();
/** 404 pages are prerendered but are not destinations. */
const isErrorPage = (url) => url === "/404" || url === "/_not-found";
const pages = allPages.filter((p) => !isErrorPage(p.url));

if (pages.length === 0) {
  console.error(`error: no HTML pages found under ${DIR}`);
  process.exit(2);
}

// --- per page ----------------------------------------------------------------

const titles = new Map();
const canonicals = new Map();
const internalLinks = new Set();

for (const { url, html } of pages) {
  const isNoIndex = /<meta name="robots"[^>]*content="[^"]*noindex/i.test(html);

  // head
  const title = attr(html, /<title[^>]*>([^<]*)<\/title>/);
  if (!title) fail(url, "no <title>");
  else {
    if (title.length > TITLE_MAX)
      warn(url, `title is ${title.length} chars, likely rewritten by Google`);
    if (titles.has(title)) fail(url, `duplicate title, shared with ${titles.get(title)}`);
    else titles.set(title, url);
    // Doubled brand: the same trailing segment appearing twice.
    const segs = title.split("|").map((s) => s.trim()).filter(Boolean);
    if (segs.length > 2) {
      const last = segs[segs.length - 1].toLowerCase();
      for (const s of segs.slice(0, -1)) {
        const a = s.toLowerCase();
        if (a && (last.startsWith(a) || a.startsWith(last)))
          fail(url, `title repeats the brand: "${title}"`);
      }
    }
  }

  const desc = attr(html, /<meta name="description"[^>]*content="([^"]*)"/);
  if (!desc) fail(url, "no meta description");
  else if (desc.length > DESC_MAX)
    warn(url, `description is ${desc.length} chars, may be truncated`);

  const canonical = attr(html, /<link rel="canonical"[^>]*href="([^"]*)"/);
  if (!canonical) fail(url, "no canonical");
  else {
    if (!canonical.startsWith("https://")) fail(url, "canonical is not absolute");
    if (!canonical.startsWith(ORIGIN))
      fail(url, `canonical is on the wrong origin: ${canonical}`);
    const expected = url === "/" ? `${ORIGIN}/` : ORIGIN + url;
    if (canonical.replace(/\/$/, "") !== expected.replace(/\/$/, ""))
      fail(url, `canonical is ${canonical}, expected ${expected}`);
    if (!isNoIndex) {
      const key = canonical.replace(/\/$/, "");
      if (canonicals.has(key))
        fail(url, `canonical collides with ${canonicals.get(key)}`);
      else canonicals.set(key, url);
    }
  }

  if (!/<html[^>]+lang=/i.test(html)) fail(url, "missing html lang");
  if (!/<meta property="og:title"/i.test(html)) fail(url, "no Open Graph title");
  if (!/<meta name="viewport"/i.test(html)) fail(url, "no viewport meta");

  // body
  const h1s = all(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g);
  if (h1s.length === 0) fail(url, "no <h1>");
  if (h1s.length > 1) fail(url, `${h1s.length} <h1> elements, expected 1`);

  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text.split(" ").filter(Boolean).length;
  if (!isNoIndex && words < MIN_WORDS)
    fail(url, `only ~${words} words of rendered text — thin`);

  // images
  for (const tag of html.match(/<img [^>]*>/g) || []) {
    if (!/\salt=/.test(tag)) fail(url, `img without alt: ${tag.slice(0, 70)}`);
    if (!/\swidth=/.test(tag) || !/\sheight=/.test(tag))
      warn(url, `img without width/height (layout shift risk): ${tag.slice(0, 70)}`);
  }

  // structured data
  for (const block of all(
    html,
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  )) {
    try {
      JSON.parse(block.replace(/\\u003c/g, "<"));
    } catch (e) {
      fail(url, `invalid JSON-LD: ${e.message}`);
    }
  }

  // leakage
  if (FORBIDDEN_HOSTS.test(html)) fail(url, "references localhost / a preview domain");

  for (const href of all(html, /href="(\/[^"#?]*)"/g))
    internalLinks.add(href.replace(/\/$/, "") || "/");
}

// --- sitewide ----------------------------------------------------------------

const pageUrls = new Set(pages.map((p) => p.url));

const sitemapPath = path.join(DIR, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  fail("sitemap.xml", "missing");
} else {
  const sitemap = await readFile(sitemapPath, "utf8");
  const locs = all(sitemap, /<loc>([^<]*)<\/loc>/g);

  for (const loc of locs) {
    if (!loc.startsWith(ORIGIN)) {
      fail("sitemap.xml", `lists ${loc}, which is on the wrong origin`);
      continue;
    }
    const rel = loc.replace(ORIGIN, "") || "/";
    const normalized = rel === "/" ? "/" : rel.replace(/\/$/, "");
    if (!pageUrls.has(normalized))
      fail("sitemap.xml", `lists ${loc}, which has no built page`);
    const page = pages.find((p) => p.url === normalized);
    if (page && /<meta name="robots"[^>]*content="[^"]*noindex/i.test(page.html))
      fail("sitemap.xml", `lists ${loc}, which is noindex`);
  }

  const inSitemap = new Set(
    locs.map((l) => {
      const rel = l.replace(ORIGIN, "") || "/";
      return rel === "/" ? "/" : rel.replace(/\/$/, "");
    }),
  );
  for (const { url, html } of pages) {
    if (/<meta name="robots"[^>]*content="[^"]*noindex/i.test(html)) continue;
    if (!inSitemap.has(url)) fail("sitemap.xml", `missing indexable page ${url}`);
  }
}

if (!existsSync(path.join(DIR, "404.html"))) fail("build", "no 404.html");

const robotsPath = path.join(DIR, "robots.txt");
if (!existsSync(robotsPath)) {
  fail("build", "no robots.txt");
} else {
  const robots = await readFile(robotsPath, "utf8");
  if (!robots.includes("Sitemap:")) fail("robots.txt", "does not declare the sitemap");
  if (!robots.includes(ORIGIN)) fail("robots.txt", "sitemap URL is on the wrong origin");
}

// Orphans: an indexable page nothing links to is one Google has little reason to index.
for (const { url, html } of pages) {
  if (url === "/" || /<meta name="robots"[^>]*content="[^"]*noindex/i.test(html)) continue;
  if (!internalLinks.has(url)) fail(url, "orphan — no internal links point to it");
}

// Internal links must resolve to a real page, a real file, or a redirect rule.
const redirectSources = [];
for (const file of ["_redirects", "netlify.toml", "vercel.json"]) {
  const p = path.join(DIR, file);
  const root = path.resolve(file);
  const src = existsSync(p) ? p : existsSync(root) ? root : null;
  if (!src) continue;
  const body = await readFile(src, "utf8");
  for (const line of body.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const m = t.match(/^(\/\S*)/) || t.match(/"?(?:from|source)"?\s*[:=]\s*"(\/[^"]*)"/);
    if (m) redirectSources.push(m[1]);
  }
}

for (const link of internalLinks) {
  if (pageUrls.has(link) || redirectSources.includes(link)) continue;
  if (existsSync(path.join(DIR, link.replace(/^\//, "")))) continue;
  if (existsSync(path.join(DIR, link.replace(/^\//, "") + ".html"))) continue;
  fail("internal links", `${link} does not resolve`);
}

// --- report ------------------------------------------------------------------

const sitemapCount = existsSync(sitemapPath)
  ? all(await readFile(sitemapPath, "utf8"), /<loc>([^<]*)<\/loc>/g).length
  : 0;

console.log(`\nAudited ${pages.length} pages, ${sitemapCount} in the sitemap.`);
console.log(`Origin: ${ORIGIN}\n`);

/**
 * Group by the shape of the message rather than listing every instance. A site
 * with one systemic bug produces thousands of identical failures, and an
 * unreadable wall of them hides the three other bugs underneath.
 */
function summarize(items, marker) {
  const groups = new Map();
  for (const item of items) {
    const [page, ...rest] = item.split(": ");
    const msg = rest.join(": ");
    // Normalize away URLs, quoted strings and numbers so instances collapse.
    const key = msg
      .replace(/https?:\/\/\S+/g, "<url>")
      .replace(/"[^"]*"/g, "<text>")
      .replace(/<img\b[\s\S]*/i, "<img ...>")
      .replace(/(^|\s)\/\S*/g, "$1<path>")
      .replace(/\d+/g, "N")
      .replace(/<[a-z]*$/i, "")
      .trim();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ page, msg });
  }
  const sorted = [...groups.entries()].sort((a, b) => b[1].length - a[1].length);
  for (const [key, instances] of sorted) {
    console.log(`  ${marker} ${instances.length}x  ${key}`);
    for (const { page, msg } of instances.slice(0, 3)) {
      console.log(`        ${page}: ${msg.slice(0, 120)}`);
    }
    if (instances.length > 3) console.log(`        ...and ${instances.length - 3} more`);
  }
}

if (warnings.length) {
  console.log(`${warnings.length} warning(s), grouped:`);
  summarize(warnings, "~");
  console.log("");
}

if (failures.length) {
  console.log(`${failures.length} FAILURE(S), grouped:`);
  summarize(failures, "x");
  console.log("");
  process.exit(1);
}

console.log("All checks passed.");
console.log("Note: this covers the website only. Google Business Profile, reviews,");
console.log("links and the domain pointing here are outside the codebase.\n");
