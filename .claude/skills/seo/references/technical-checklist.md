# Technical checklist

The per-page and per-site contract. Everything here is machine-checkable, and
`scripts/seo-audit.mjs` checks most of it.

## Per page

### Head

| Tag | Rule |
|---|---|
| `<title>` | Present, unique sitewide, 50–60 chars **as rendered**, distinguishing words first, brand once at the end |
| `<meta name="description">` | Present, unique, 120–158 chars, written for the click |
| `<link rel="canonical">` | Present, absolute, self-referencing, no trailing slash except root |
| `<meta name="robots">` | `index, follow` — or `noindex, follow` on pages that must stay out |
| `<html lang>` | Set |
| `<meta name="viewport">` | `width=device-width, initial-scale=1` |
| `og:title` / `og:description` / `og:url` / `og:image` / `og:type` | All present; `og:url` matches canonical |
| `twitter:card` | `summary_large_image` plus title, description, image |

**Check rendered, not source.** Frameworks with title templates append a suffix. The only
length that matters is the one in the built HTML.

### Body

- Exactly **one `<h1>`**, and it describes the page — not the brand.
- Heading hierarchy descends without skipping (`h1` → `h2` → `h3`).
- Main content present in served HTML, not injected client-side.
- Every `<img>` has `alt`. Decorative images get `alt=""`, not a missing attribute.
- Every `<img>` has explicit `width` and `height` (or CSS `aspect-ratio`) — this is the
  main CLS lever.
- The LCP image is **not** lazy-loaded. Everything below the fold is.
- No link to a URL that doesn't resolve.

### Status codes

- Real pages: `200`.
- Missing pages: `404` with a genuine 404 status and a useful page.
- Moved pages: `301`.
- Temporary: `302`, and rarely.
- **No SPA catch-all returning 200 for unknown URLs.** A soft 404 is a quality problem and
  it also silently breaks your redirect rules.

## Per site

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml
```

- Absolute sitemap URL.
- Never `Disallow` a page you want de-indexed — allow the crawl and serve `noindex`.
- Never `Disallow` CSS or JS needed to render the page.
- AI crawlers: decide deliberately, document the decision. Training bots (`GPTBot`,
  `CCBot`, `ClaudeBot`, `Google-Extended`) and retrieval bots (`OAI-SearchBot`,
  `Claude-SearchBot`, `PerplexityBot`, `ChatGPT-User`) are separate. For a business that
  wants to be found, allow the retrieval bots.

### sitemap.xml

- **Generated from the route table.** Never hand-written.
- Absolute URLs on the production origin.
- Indexable pages only — no `noindex`, no redirects, no 404s.
- `lastmod` only if it's truthful. A build-time `new Date()` on every URL every deploy is
  noise and is treated as such.
- Split at 50,000 URLs / 50MB into a sitemap index. If you're near that on a small
  business site, the problem is the page count, not the sitemap.

### Origin

One constant. Imported everywhere. Used by canonical, OG URL, sitemap, robots, and every
schema `@id`.

```ts
export const ORIGIN = "https://www.example.com";
```

Decide `www` vs apex and http vs https **once**, redirect all other variants to it with
301s, and never type the domain literal anywhere else in the codebase. Grep for `https://`
before shipping — every hit outside that constant is a bug waiting to happen.

### Headers

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Cache-Control: public, max-age=31536000, immutable   # hashed assets
Cache-Control: public, max-age=604800, must-revalidate # images
```

## The audit gate

Copy `scripts/seo-audit.mjs` into the project, add `"audit": "node scripts/seo-audit.mjs"`,
and run it after every build. It fails on:

- Missing or duplicate title; missing description; missing, relative, wrong, or colliding
  canonical
- Missing `html lang`, viewport, or OG title
- Missing or multiple `h1`
- Rendered text under a word threshold (thin page)
- `<img>` without `alt`; warns on missing dimensions
- Invalid JSON-LD
- References to `localhost` or a preview domain
- Sitemap listing a URL with no page, or omitting an indexable page
- An indexable page with no internal links pointing at it (orphan)
- An internal link that doesn't resolve to a page or a redirect rule
- Missing `404.html` or `robots.txt`; `robots.txt` not declaring the sitemap

It warns on over-length titles and descriptions rather than failing, because occasionally a
long title is the right call. Everything else is a failure.

**Run it in CI**, not just locally. The whole point is that it catches the regression
someone introduces in six months.

## Quick manual checks the script can't do

- `view-source:` on three pages — confirm head tags are in the raw HTML.
- Google Rich Results Test on one page per template.
- PageSpeed Insights on the homepage and one deep page, mobile.
- Search `site:yourdomain.com` after launch to see what's actually indexed.
- Google Search Console: submit the sitemap, then watch Coverage for "Discovered – not
  indexed" (usually a quality signal) and "Crawled – not indexed" (usually duplication).
