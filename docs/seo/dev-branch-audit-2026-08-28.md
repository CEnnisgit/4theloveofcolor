# SEO audit: `dev` vs `main`

Measured 2026-08-28 by building both branches and auditing the built output.
Reproduce with `.claude/skills/seo/scripts/seo-audit.mjs`.

## Headline

| | `main` | `dev` |
|---|---|---|
| Stack | Vite + React, prerendered | Next.js 16 App Router, static export |
| Pages built | 26 | 1,021 |
| URLs in sitemap | 25 | **5** |
| Median title length | 58 chars | **98 chars** |
| Median body words | ~1,030 | 593 |
| Audit result | **0 failures** | **2,035 failures** |

The 2,035 figure is `dev` audited against *its own* declared domain — it is not
inflated by the domain problem. Audited against the real business domain it is 4,081.

Both numbers collapse to **six root causes**. Nearly all of it is a handful of
constants, not a thousand separate mistakes.

## `dev` is not bad work

Worth saying first, because the list below is long. Across all 1,021 pages `dev` has
zero missing titles, descriptions, canonicals or OG tags; zero pages without an `h1`
or with more than one; zero images missing `alt`; zero invalid JSON-LD; zero pages
under 250 words; zero orphans.

Its structured-data architecture is genuinely better than `main`'s — a central
`schema.ts` with an `@id`-addressed Organization node that other schemas reference
instead of re-inlining. `main` hardcodes one business blob into `index.html`.

The gap between the branches isn't knowledge. It's that `main` had an automated audit
wired to its build and `dev` didn't carry it across.

## The six root causes

### 1. Wrong domain in every canonical — 1,019 pages

All canonicals, OG URLs, sitemap entries and schema `@id`s point at
`www.fortheloveofcolor.com`. Per `LAUNCH.md` on the same branch, the business domain
is `www.4theloveofcolorpainting.com`.

Retyped in `layout.tsx`, `schema.ts`, `sitemap.ts`, `robots.ts` and inline in several
page files.

**Fix:** one exported `ORIGIN` constant, imported everywhere. ~30 minutes.

### 2. Sitemap lists 5 URLs out of 1,019

`src/app/sitemap.ts` is a hand-written array of five paths. One of them, `/services`,
doesn't exist on this branch — so the sitemap lists four real pages and one 404, and
omits 1,015 indexable pages including every location and service page.

**Fix:** generate from `cityPages` + `servicePages` + the static routes. ~1 hour.

### 3. Brand appears twice in every title — 1,014 pages

The root layout sets `title.template = "%s | 4 The Love of Color Painting"` and the
page titles already end in `| 4 The Love of Color`:

```
Exterior painting in Sarasota, FL | 4 The Love of Color | 4 The Love of Color Painting
```

95 characters. Titles over ~70 chars are rewritten by Google close to 100% of the
time, so control of every title on the site is currently forfeited. `main`'s median
is 58.

**Fix:** drop the brand from the page titles, keep the template. ~30 minutes.

### 4. Three broken internal links, one of them sitewide

`Footer.tsx` links to `/services` — a 404 on this branch, since services were split
into `/residential` and `/commercial`. That's a broken link on all 1,021 pages.

`/locations/palmetto` and `/locations/osprey` also 404: the footer derives slugs from
a `serviceCities` array that doesn't match `cityPages`.

**Fix:** point the footer at `/residential`, derive city links from `cityPages`.
~20 minutes.

### 5. `/locations` canonicalizes to the homepage

It's the only page missing `alternates.canonical`, so it inherits the root layout's
`/`. The service-area hub currently tells Google it's a duplicate of the homepage and
cannot be indexed on its own terms.

**Fix:** one line. ~5 minutes.

### 6. The location matrix — 936 pages

53 cities × 18 services. Of the 53 city datasets, 48 are template-filled: identical
"local considerations", identical closing paragraph, city name substituted.

Measured 8-gram overlap on rendered text:

| Pair | Overlap |
|---|---|
| Two templated villages, same service | **76.2%** |
| Two templated city landing pages | 61.1% |
| Two hand-written cities, same service (`main`) | **25.5%** |

Separately, `drywall-repair` has `persona: "both"`, so it publishes at both
`/residential/drywall-repair` and `/commercial/drywall-repair` — 76.8% overlap, two
self-canonicals, two pages competing for one query.

This one is **not a bug** — it's a documented strategic bet, in
`docs/references/seo-strategy/03-duplicate-content-and-templating.md`. It needs a
decision, not a patch. See `.claude/skills/seo/references/scale-and-duplication.md`
for the full argument; the short version is that the realistic outcome isn't a
penalty, it's that Google clusters the 936 and shows one, while the site-wide quality
signal drags down the genuinely good service pages and guides.

## Also dropped in the migration

Present on `main`, missing on `dev`:

- The Wix 301 redirects (`/about-us` → `/about`, `/privacy-policy` → `/privacy`).
  Without these, the URLs Google has indexed for the current site 404 at cutover.
- The privacy page itself.
- `PostalAddress` and `sameAs` (Instagram) in the business schema.
- Geo meta tags.
- Responsive image variants — the `-480/-768/-1200.webp` files exist in `public/` but
  nothing references them, and `next.config.ts` sets `images.unoptimized`. 25 images
  ship without `width`/`height`.
- `scripts/seo-audit.mjs`.

And there is **no deploy configuration at the repo root**. The README says Cloudflare
Pages, `LAUNCH.md` says Netlify, and the only `netlify.toml` is inside the archived
`apps/old-website/`.

## One thing that changed under the project

`docs/references/seo-strategy/03-duplicate-content-and-templating.md` describes
appending `(Serving Sarasota)` to FAQ questions inside the JSON-LD while displaying
the un-suffixed question, to win FAQ rich snippets.

**FAQ rich results were removed from Google Search on 7 May 2026**, with Search
Console reporting retired in June and the API data in August. The 936 pages carrying
FAQPage markup can no longer earn what it was built for. The markup is harmless to
leave, but the suffix trick should go — it's a schema/visible-content mismatch that
now buys nothing.

## Suggested order

1. `ORIGIN` constant (#1)
2. Title template (#3)
3. Footer links (#4)
4. `/locations` canonical (#5)
5. Generate the sitemap (#2)
6. **Port the audit script and wire it to CI** — this locks 1–5 shut permanently
7. Redirects, privacy page, schema address, image dimensions
8. Decide on the matrix with the owner (#6); drop the FAQ suffix

Items 1–5 are roughly half a day. Item 6 is the one that matters in the long run.

## Reproducing

```bash
# main
npm ci && npm run build
node .claude/skills/seo/scripts/seo-audit.mjs \
  --dir dist --origin https://www.4theloveofcolorpainting.com

# dev
cd apps/website && pnpm install && pnpm build
node ../../.claude/skills/seo/scripts/seo-audit.mjs \
  --dir out --origin https://www.4theloveofcolorpainting.com
```
