# Case study: two branches of this repo, measured

A real comparison, measured on 2026-08-28 by building both branches and auditing the
output. It is the best teaching material in this skill because every failure below looked
completely fine in a browser.

## The two builds

| | `main` | `dev` |
|---|---|---|
| Stack | Vite + React, SSR bundle, custom prerender script | Next.js 16 App Router, `output: "export"` |
| Pages built | 26 | 1,021 |
| Indexable pages | 25 | 1,019 |
| URLs in sitemap | 25 | **5** |
| Median body words | ~1,030 | 593 |
| Median title length | 58 chars | **98 chars** |
| Automated SEO gate | yes, passing | none |

`dev` contains all of `main` plus 73 commits. It is not a competing branch — it's the
successor, with the old site archived at `apps/old-website/`.

## What `dev` got right

Worth stating clearly, because the failure list below is longer and would otherwise be
misleading. Across all 1,021 built pages:

- 0 missing titles, descriptions, canonicals, or OG tags
- 0 pages without an `h1`; 0 with more than one
- 0 images missing `alt`
- 0 invalid JSON-LD blocks
- 0 pages under 250 words
- 0 orphan pages

And the structured-data architecture is genuinely better than `main`'s. `dev` centralizes
schema in `src/lib/seo/schema.ts` with an `@id`-addressed Organization node that service
and breadcrumb schemas *reference* rather than re-inline. `main` hardcodes one
`LocalBusiness` blob into `index.html`. `dev` is the correct pattern.

The lesson is not "the new branch is bad." It is that **a build can pass every per-page
check and still be unshippable**, because the failures that matter most are site-level and
configuration-level.

## What was broken, and what it teaches

### 1. Every canonical on a domain the business doesn't own

All 1,019 pages declared canonicals, OG URLs, sitemap entries, and schema `@id`s on
`www.fortheloveofcolor.com`. The business domain, per `LAUNCH.md` on the same branch, is
`www.4theloveofcolorpainting.com`.

The literal was retyped in `layout.tsx`, `schema.ts`, `sitemap.ts`, `robots.ts`, and inline
in several page files.

> **Rule:** one origin constant, imported everywhere, never retyped. Audit for any built
> output referencing a host other than the production origin.

### 2. A sitemap with 5 URLs for a 1,019-page site

`sitemap.ts` was a hand-written array of five paths — and one of them, `/services`, didn't
exist on that branch, so the sitemap's only job was to list four real pages and one 404.
1,015 indexable pages were absent.

> **Rule:** generate the sitemap from the route table. Audit both directions — every
> sitemap URL resolves, every indexable page appears.

### 3. Doubled brand in every title

The root layout set `title.template = "%s | 4 The Love of Color Painting"`, and the page
titles already ended in `| 4 The Love of Color`. Result, on all 1,019 pages:

```
Exterior painting in Sarasota, FL | 4 The Love of Color | 4 The Love of Color Painting
```

95 characters. Median across the site: 98. Titles over ~70 characters get rewritten by
Google close to 100% of the time, so the branch had effectively surrendered control of
every title on the site. `main`'s median was 58.

> **Rule:** measure rendered title length, never source length. A title template and a
> page title that both carry the brand is a silent, sitewide defect.

### 4. A 404 in the sitewide footer

`Footer.tsx` linked to `/services`, which doesn't exist on `dev` — the services section was
split into `/residential` and `/commercial`. Every one of 1,021 pages linked to a 404.

Two more footer links, `/locations/palmetto` and `/locations/osprey`, 404'd because the
footer derived slugs from a `serviceCities` array that didn't match the actual `cityPages`
data.

> **Rule:** audit that every internal link resolves to a built page or a redirect rule. A
> broken link in shared chrome is a sitewide error.

### 5. A hub page canonicalized to the homepage

`/locations/page.tsx` was the only page missing `alternates.canonical`. In Next.js App
Router, a page without it inherits the root layout's — which was `/`. The service-area hub
told Google it was a duplicate of the homepage.

> **Rule:** every page carries an explicit self-referencing canonical. Audit for two
> indexable pages sharing one.

### 6. The location matrix

936 of the 1,021 pages were city × service combinations: 53 cities × 18 services. Of the 53
city datasets, 48 were template-filled — same "local considerations", same closing
paragraph, same meta description shape, with the city name substituted.

Measured 8-gram Jaccard overlap on rendered text:

| Pair | Overlap |
|---|---|
| `dev`: two templated villages, same service | **76.2%** |
| `dev`: two templated city landing pages | **61.1%** |
| `dev`: two Tier-1 cities, same service | 51.0% |
| `main`: two hand-written city × service pages | **25.5%** |
| `main`: two hand-written city landing pages | 36.1% |

`main` wrote 6 city × service pages by hand and measured 25.5%. `dev` generated 936 and
measured 76.2%. That is the whole argument in two numbers.

Also on `dev`: `drywall-repair` has `persona: "both"`, so it builds at both
`/residential/drywall-repair` and `/commercial/drywall-repair` — 76.8% overlap, two
self-referencing canonicals, two pages competing for one query.

> **Rule:** see `scale-and-duplication.md`. Measure overlap before shipping, not after.

### 7. Betting on a deprecated rich result

`docs/references/seo-strategy/03-duplicate-content-and-templating.md` on `dev` describes
appending `(Serving Sarasota)` to FAQ questions inside JSON-LD while displaying the
un-suffixed question, calling it "a brilliant programmatic SEO strategy to win local FAQ
rich snippets" and noting it "could be flagged" as a structured-data mismatch.

Two problems. It *is* a mismatch — schema must match visible content. And **FAQ rich
results were removed from Google Search in May 2026**, so the payoff no longer exists on
any of the 936 pages carrying the markup.

> **Rule:** verify that a rich result still exists before building architecture around it.
> Check the current Search Gallery, not your training data.

### 8. Regressions dropped in the migration

Present on `main`, absent on `dev`: the Wix 301 redirects (`/about-us` → `/about`,
`/privacy-policy` → `/privacy`), the privacy page itself, `PostalAddress` and `sameAs` in
the business schema, geo meta tags, responsive image variants, and the audit script. There
was also no deploy configuration at the repo root at all — the README said Cloudflare
Pages, `LAUNCH.md` said Netlify, and the only `netlify.toml` left was inside the archived
old site.

> **Rule:** a migration inventory is a checklist of what the old build did, not just a list
> of what the new build does. See `migrations.md`.

## The meta-lesson

Nine defects. Every one was invisible in a browser. Every one would have been caught by
`main`'s `scripts/seo-audit.mjs`, which is 200 lines of Node and which `dev` didn't carry
across.

`main` scored 26 pages audited, 25 in the sitemap, **all checks passed**.

The difference between the branches is not knowledge — whoever wrote `dev` clearly knows
more about Next.js metadata than the `main` author did. The difference is that `main` had a
gate and `dev` didn't.

**Write the gate first.**

## Fix order, if you're picking this up

Roughly ascending effort, descending severity:

1. Origin constant → one file, imported everywhere (fixes #1)
2. Remove the brand from page titles or from the layout template (fixes #3)
3. Generate `sitemap.ts` from `cityPages` + `servicePages` + static routes (fixes #2)
4. Fix the footer links; derive city links from `cityPages` (fixes #4)
5. Add `alternates.canonical` to `/locations` (fixes #5)
6. Port `seo-audit.mjs`, adapt it to `out/`, wire to CI — this catches 1–5 forever
7. Re-add redirects, privacy page, schema address and `sameAs` (fixes #8)
8. Decide on the matrix with the owner (#6), and drop the FAQ suffix trick (#7)
