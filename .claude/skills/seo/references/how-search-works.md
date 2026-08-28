# How search works, mechanically

The parts you can influence from a codebase, and the parts you cannot.

## Crawl

Googlebot builds a frontier of URLs from links it has seen and sitemaps you submit, then
fetches them subject to `robots.txt`.

**`robots.txt` controls fetching, not indexing.** This distinction causes more damage than
any other technical misunderstanding:

- A page blocked in `robots.txt` is never fetched. If it also carries `noindex`, Google
  never sees the `noindex`.
- A blocked page can still appear in results — as a bare URL with no snippet — if other
  pages link to it.
- To keep a page out of the index, **allow the crawl and serve `noindex`.**
- To canonicalize duplicates, use `rel=canonical` or a redirect. Never `robots.txt`.

**Crawl budget** is only a real constraint on large or slow sites. A 30-page site does not
have a crawl budget problem. A 1,000-page site with 900 near-duplicates has one it created
itself: crawl attention spent re-fetching pages that will never rank is attention not spent
on the ones that could.

## Render

Googlebot fetches the HTML, extracts links, and queues the page for rendering in a headless
Chromium — on a **separate, later queue**. JavaScript-dependent content is therefore
indexed with a delay, and only if the render succeeds.

Google's own position: *"server-side or pre-rendering is still a great idea because it
makes your website faster for users and crawlers, and not all bots can run JavaScript."*

That last clause is doing a lot of work in 2026. Most AI retrieval crawlers do not execute
JavaScript at all. A client-rendered page can be visible to Google and invisible to
Perplexity and ChatGPT's retrieval.

**Consequence for the build:** head tags injected in a `useEffect` are the second half of
the story at best. Google may pick them up on the render pass; it may also index the
pre-render state, in which case every route ships whatever was in the HTML shell. If that
shell contains one hard-coded canonical, every page on your site has just declared itself a
duplicate of that one URL. This is the highest-severity failure mode in SPA SEO and it is
completely silent.

Other JS-specific rules:

- Use the History API for routing, not URL fragments — Googlebot can't reliably resolve
  fragment routes.
- Serve real status codes. An SPA that returns 200 with a "not found" screen is a soft 404.
- Content behind an interaction (click to expand, infinite scroll) may not be indexed. If
  it matters, put it in the initial HTML.

## Index and canonicalize

Google groups pages it considers duplicates into a cluster and picks one representative;
the rest become alternates that rarely surface.

Signals, strongest to weakest:

1. **Redirects.** A 301 is the strongest statement that a URL has moved.
2. **`rel=canonical`.** A strong hint. Not binding.
3. **Sitemap inclusion.** Weak on its own; useful in combination.
4. **Internal linking.** Consistently linking one variant reinforces it.

Rules that follow:

- Canonical must be **absolute**, not relative.
- Every page carries a **self-referencing** canonical. Don't leave it to inference.
- Never let two indexable pages share a canonical unless you mean one to disappear.
- Never let a framework's default canonical leak onto a page that forgot to set its own —
  in Next.js App Router, a page without `alternates.canonical` inherits the root layout's,
  which is usually `/`. That silently canonicalizes the page to the homepage.
- Link internally to the canonical URL, never to a variant that redirects.

**Google may override you.** If the pages really are near-identical, the declared canonical
loses to Google's own clustering. Canonical tags are not a way to keep duplicate pages
alive; they are a way to declare intent among genuinely necessary variants.

**Index bloat** is the accumulation of low-value indexed URLs — tag pages, filter
permutations, near-duplicates, paginated archives. It dilutes site-level quality
assessment. Fewer, better URLs is nearly always the right direction.

## Rank

Hundreds of signals; Google publishes none of the weights. What is worth knowing:

- **The helpful-content assessment is site-wide and continuous.** It moved into core
  ranking in March 2024 and no longer runs as discrete updates. A section of thin pages
  affects the whole domain's assessment, and recovery is gradual rather than switch-like.
- **E-E-A-T is not a score**, it's a framing of what quality raters look for: Experience,
  Expertise, Authoritativeness, Trustworthiness. Google states trust is the most important
  and the others feed it.
- **Core Web Vitals are one input into page experience**, not a dominant factor. They break
  ties between comparable pages. LCP < 2.5s, INP < 200ms, CLS < 0.1, at the 75th percentile
  of real users over 28 days.
- **Links still matter**, and for a small local business the realistic sources are the
  local ones: suppliers, trade associations, chambers of commerce, local press, community
  sponsorships, and the businesses they subcontract with. Not directories bought in bulk.

## The AI layer

Google AI Overviews and AI Mode pull from Google's index — so classic indexing is the
prerequisite, and Google's spam policies were formally extended to cover them in May 2026.
There is no separate ruleset to exploit.

The other engines differ in ways that matter for the build:

- **Perplexity** runs its own crawler (`PerplexityBot`) against its own index.
- **ChatGPT** retrieves via search infrastructure plus `OAI-SearchBot` / `ChatGPT-User`.
- Most of these do not execute JavaScript.

What earns citation is not a trick: a clear answer near the top of the page, factual
density, a crawlable static document, and corroboration elsewhere on the web. A page
ranking #4 can be the one an assistant cites if it answers the question most cleanly.

Two practical implications:

1. **Static HTML is now doubly load-bearing** — it's the difference between being citable
   and being invisible to a whole class of engines.
2. **Answer-first writing wins twice.** The paragraph that earns a featured snippet is the
   same paragraph that gets quoted in an AI answer.

`llms.txt` is a proposed convention listing your key pages for LLM crawlers. It is not
standardized and not widely honored. It is cheap to publish and reasonable to include; do
not represent it to a client as something that will move rankings.
