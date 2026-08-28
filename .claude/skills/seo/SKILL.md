---
name: seo
description: Build and audit sites that rank. Use when creating, migrating, or reviewing any public website or page — route/metadata design, canonicals, sitemaps, structured data, local SEO, programmatic/location pages, content quality, or a pre-launch check. Also use when asked "is the SEO good", "will this rank", or before pointing a domain at a new build.
---

# SEO for agents building sites

You are building a site that has to be found. This skill is the contract: what to
build, what never to ship, and how to prove it before anyone points a domain at it.

Read this file. Load a reference when you hit its subject — they are listed at the
bottom and each one is self-contained.

## The one rule that matters most

**Everything checkable must be checked by a script that fails the build.**

Every serious SEO defect in the case study behind this skill (`references/case-study.md`)
was invisible to a human clicking around a working site, and every one of them would have
been caught by thirty lines of Node. A 1,000-page site shipped with five URLs in its
sitemap, a sitewide footer link to a 404, and the wrong domain in every canonical — and
it looked perfect in the browser.

So: an agent that "did the SEO" but did not write and run an audit gate has not done the
SEO. Copy `scripts/seo-audit.mjs` from this skill into the project, wire it to the build
(`npm run build && npm run audit`), and make it exit non-zero on failure. Do that *early*
— it is the thing that keeps the rest of this document true six months from now.

## The model you should hold

Search is four stages, and you can only influence three of them from a codebase.

1. **Crawl.** Googlebot fetches URLs it discovered from links and sitemaps, subject to
   `robots.txt`. Blocked means never fetched — and a `noindex` on a robots-blocked page
   is never seen, so the page can still surface. Use one or the other, deliberately.
2. **Render.** Google runs your JavaScript in a headless Chromium, but on a *separate,
   later queue* than the initial fetch. Google's own guidance is that "server-side or
   pre-rendering is still a great idea… not all bots can run JavaScript." AI crawlers are
   mostly in the "cannot" column. **Ship real HTML.** Every fact below about head tags
   assumes the tag is in the served markup, not injected in an effect.
3. **Index + canonicalize.** Google clusters pages it considers duplicates and picks one
   representative. Your `rel=canonical` is a *strong hint*, not a command. Redirects are
   the strongest signal, canonical next, sitemap inclusion weakest. If your content is
   genuinely near-duplicate, Google will pick a representative regardless of what you
   declared, and the rest of the cluster simply won't rank.
4. **Rank + the AI layer.** Hundreds of signals, none of which you control directly. What
   you control: whether the page can be crawled, rendered, understood, and trusted. Since
   May 2026 Google's spam policies explicitly cover AI Overviews and AI Mode, so there is
   no separate "AI SEO" ruleset to game — same rules, extra surface.

Everything in this skill is downstream of that model.

## Non-negotiables

These are absolute. If a request conflicts with one, say so before building.

- **Never ship a canonical, OG URL, sitemap entry, or schema `@id` on a domain the site
  will not actually be served from.** Put the origin in exactly one constant. Import it
  everywhere. Never retype it.
- **Never generate pages by swapping a city or keyword into a template.** See
  `references/scale-and-duplication.md`. This is the single most tempting and most
  destructive thing an agent can do to a local site.
- **Never emit `aggregateRating` or `review` schema about your own business.** Google's
  LocalBusiness documentation restricts those properties to sites that review *other*
  businesses. Self-marked ratings are a manual-action risk.
- **Never put a claim in structured data that isn't visible on the page.** Schema must
  match rendered content.
- **Never invent a fact about the business** — warranty length, years in business, license
  number, crew size, price, "5-star rated". If it isn't confirmed, it doesn't ship. A
  fabricated trust claim is worse than a missing one, and trust is the load-bearing part
  of E-E-A-T.
- **Never link to a URL that does not resolve.** Especially from a header or footer, where
  one mistake becomes a sitewide mistake.
- **Never use `noindex` to fix duplication** you should fix with a canonical or a redirect,
  and never use `robots.txt` for canonicalization at all.

## Build order

Do it in this sequence. Each step depends on the one before.

### 1. One route table, as data

Before any page component exists, write the list of every indexable URL as a typed data
structure — path, title, description, optional OG image, optional `noIndex`.

Everything downstream reads from it: the page components, the static generation, the
sitemap, the audit. Metadata that lives in a data file cannot drift out of sync with the
sitemap, because they are the same source. Metadata hand-written per page always drifts.
That is not a prediction; it's what happened in the case study.

Derive route entries from your content data (`services.map(...)`) rather than restating
them. A page that isn't in the table doesn't get built, and a page that isn't built can't
be linked — which is exactly the failure mode you want.

### 2. Render to static HTML

Next.js App Router with `generateStaticParams` and `output: "export"`, Astro, a Vite SSG
step, plain HTML — the framework is irrelevant, the output is not. Requirements:

- Per-route `<title>`, `<meta name="description">`, `<link rel="canonical">` in the
  **served** markup.
- Absolute canonical, self-referencing, no trailing slash except root, one per page.
- A real `404` with a real 404 status. No SPA catch-all that returns 200 for unknown
  URLs — that is a soft 404 and Google treats it as a site-quality problem.
- `<html lang>`, `<meta name="viewport">`, OG and Twitter tags.

### 3. Titles and descriptions that survive contact with the SERP

- **Title: 50–60 characters.** Titles over ~70 characters get rewritten by Google close to
  100% of the time; at 51–55 characters the rewrite rate is around 40%. Over the limit,
  you don't have a long title — you have no title.
- **Put the distinguishing words first.** `Cabinet Refinishing in Sarasota, FL | Brand`,
  not `Brand | Services | Cabinet Refinishing`.
- **Brand appears exactly once**, at the end, and only if it fits. If your framework
  appends a title template, do not also put the brand in the page title. Check the
  rendered output, not the source — this is a classic doubling bug.
- **Description: 120–158 characters.** Write it as ad copy for the click, not a keyword
  list. Google rewrites ~62% of descriptions anyway; the point is to be worth quoting.
- **Every title on the site must be unique.** Audit it.

### 4. Internal linking

Rank the site's URLs by importance and make link depth match. Target: nothing important
more than three clicks from the homepage.

- Hub-and-spoke, bidirectional: hub links to every spoke, every spoke links back to its
  hub, spokes cross-link to 2–3 genuine siblings.
- **Contextual links beat nav links.** A link from inside a paragraph about stucco to the
  stucco guide carries topical meaning; a link in a 60-item footer does not.
- **No orphans.** Any indexable page with zero internal links pointing at it is a page
  Google has little reason to index. Audit for this.
- Link to canonical URLs, never to a variant that redirects.

### 5. Structured data

Emit JSON-LD, not microdata. Use an `@id`-addressed graph: define the Organization once
with `"@id": "https://origin/#organization"`, then have every other node *reference* it
(`"provider": {"@id": "https://origin/#organization"}`) instead of re-inlining the whole
business object per page.

What actually earns a rich result in 2026 is a short list — Breadcrumb, Organization /
LocalBusiness, Article, Product, Review snippet, Video, Event, Job posting, and a handful
more. **FAQPage rich results were removed from Google Search in May 2026** and the Search
Console reporting for them was retired in June and August 2026. The markup is still valid
and other engines may still parse it, but do not budget effort for FAQ rich results and do
not build an architecture whose payoff depends on them.

Details, required properties, and the local-business specifics: `references/structured-data.md`.

### 6. Sitemap and robots

- **The sitemap is generated from the route table.** Never hand-maintained. A hand-written
  array is a lie waiting to happen.
- Every indexable page in it; nothing else. No `noindex` URLs, no redirects, no 404s.
- Absolute URLs on the real origin.
- `robots.txt` allows crawling and declares the sitemap absolutely.
- Audit both directions: every sitemap URL resolves to a built page, and every built
  indexable page appears in the sitemap.

For AI crawlers, decide deliberately and write it down. Training bots (`GPTBot`, `CCBot`,
`ClaudeBot`, `Google-Extended`) and retrieval/search bots (`OAI-SearchBot`,
`Claude-SearchBot`, `PerplexityBot`, `ChatGPT-User`) are separate agents, so a site can
opt out of training while staying eligible for AI-search citations. For a small business
that wants customers, **allow the retrieval bots** — that's how you get cited in answers.
Note that `robots.txt` compliance is voluntary; it's a norm, not a control.

### 7. Performance

Core Web Vitals are a real but modest ranking input — a tiebreaker between comparable
pages, not a lever that outranks relevance. Thresholds, at the 75th percentile of real
users: **LCP < 2.5s, INP < 200ms, CLS < 0.1.**

The wins that matter, in order: responsive images with explicit `width`/`height` and
modern formats; don't ship a megabyte of hero JPEG; every `<img>` gets `alt`; lazy-load
below the fold and never lazy-load the LCP element; keep third-party scripts near zero.
INP is the most-failed metric — it's usually a main-thread problem, so watch hydration
cost on interactive pages.

### 8. Content

This is the part that decides whether you rank, and the part agents are worst at.

The bar: **would this page exist if search engines didn't?** Google's helpful-content
assessment has been folded into core ranking since March 2024 and runs continuously as a
site-wide signal. That means a stack of thin pages doesn't just fail to rank — it drags
the whole domain, and recovery is gradual.

Rules for agents specifically, because these are our failure modes:

- **Write from specifics or don't write.** A page about painting in a coastal town should
  contain something true about salt air, or about that town's housing stock, that could
  not appear on a page about an inland suburb. If you don't have that fact, you don't have
  a page — you have padding.
- **Never fabricate to fill a section.** A shorter honest page beats a longer invented one.
  If the template has a slot you can't fill truthfully, delete the slot.
- **Answer the question in the first two sentences**, then support it. This serves readers,
  featured snippets, and AI citation simultaneously.
- **Demonstrate first-hand experience.** For a service business that means real project
  detail, real constraints, real failure modes — the things only someone who has done the
  work would know. Of the four E-E-A-T letters, trust is the one that carries the others.
- **Flag every unverified claim to the human.** Maintain a list of facts you were asked to
  assert but could not confirm, and surface it rather than quietly writing around it.

Depth guidance: `references/content-quality.md`.

## Before you hand it over

Run the gate, then check the things a script can't:

- [ ] Audit script passes with zero failures.
- [ ] Origin constant matches the domain that will actually serve the site.
- [ ] View source on three pages — title, description, canonical present in raw HTML.
- [ ] Rendered title lengths, not source lengths. Check for doubled brand.
- [ ] Sitemap URL count ≈ indexable page count.
- [ ] Rich Results Test on one page of each template.
- [ ] Redirects exist for every URL the old site had indexed. See `references/migrations.md`.
- [ ] Report to the human: unverified claims, pages you judged thin, decisions you made
      that they should overrule if they disagree.

State plainly what you did *not* verify. "The site passes its own audit" is a true and
useful claim. "The SEO is perfect" is not a claim anyone can make — rankings depend on
competitors, links, reviews, and proximity, none of which live in a repo.

## What is not in the repo

Say this out loud to whoever you're building for, because they will otherwise think the
website is the whole job. For a local business, the Google Business Profile is the single
largest ranking factor in the local pack — bigger than the website. Reviews, categories,
service areas, and citation consistency live outside the codebase. A perfect site with an
empty GBP loses to a mediocre site with 200 reviews.

`references/local-seo.md` has the full division of labor.

## References

| File | Load when |
|---|---|
| `references/how-search-works.md` | You need the mechanics: crawl budget, rendering queue, canonical clustering, index bloat |
| `references/technical-checklist.md` | Implementing or reviewing head tags, status codes, robots, sitemaps |
| `references/structured-data.md` | Writing JSON-LD; deciding what markup is worth shipping |
| `references/local-seo.md` | The site serves a geographic area; local pack, GBP, service-area businesses |
| `references/scale-and-duplication.md` | Generating more than a handful of pages from data. **Read before, not after.** |
| `references/content-quality.md` | Writing or reviewing page copy; E-E-A-T; AI-citation |
| `references/migrations.md` | Replacing an existing site, changing domains, restructuring URLs |
| `references/case-study.md` | A worked example: two real branches of this repo, measured |
| `references/sources.md` | Checking whether a claim in here is still true. **Read before relying on any deprecation or threshold.** |
| `scripts/seo-audit.mjs` | Copy into the project and wire to the build |

## A note on staleness

This skill was researched on 2026-08-28. SEO guidance rots, and the failure mode is
specific: an agent working from stale training data confidently builds for a rich result
that no longer exists. That is exactly what happened in the case study.

Before you build architecture that depends on a deprecation, a threshold, or a supported
feature, check `references/sources.md` and verify against Google's own docs. Treat your
training data as a hypothesis about SEO, never as the answer.
