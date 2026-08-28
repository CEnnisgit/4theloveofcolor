# Programmatic pages, duplication, and the doorway line

Read this **before** generating pages from data, not after. Undoing a thousand bad pages
is far more expensive than not making them.

## The temptation

You have 18 services and 53 towns. Multiplying them gives 954 URLs, each with a title
containing a real search phrase. It costs one nested loop. It looks like leverage.

It is the most reliable way an agent can damage a small business's search presence.

## What Google's policies actually say

Two spam policies apply, and both name this pattern directly.

**Doorway abuse** — "Sites or pages created to rank for specific, similar search queries"
that "lead users to intermediate pages that aren't as useful as the final destination."
The listed examples include *"multiple domain names targeted at specific regions or cities
that funnel users to one page"* and *"generating pages to funnel visitors into the actual
usable or relevant portion of a site."*

**Scaled content abuse** — "Many pages generated for the primary purpose of manipulating
search rankings and not helping users," explicitly including *"using generative AI tools to
generate many pages without adding value for users."*

And note what sits under **keyword stuffing**: *"blocks of text that list cities and
regions."* The "we serve Sarasota, Bradenton, Venice, Palmetto, Parrish, Osprey…" block is
named in the policy.

Since May 2026 these policies apply to AI Overviews and AI Mode as well as classic results,
so there is no surface where the tactic is safe.

## What actually happens (the realistic outcome)

A manual penalty is the tail risk, not the base case. The base case is duller and still
bad:

1. Google clusters the near-identical pages and picks one representative. The other 900
   are not penalized — they are simply never shown. You built 954 pages and got the
   ranking value of about one.
2. The site-wide quality assessment, folded into core ranking since March 2024, notices
   that most of the domain is thin. That signal is site-wide and continuous, so it drags
   the pages that *were* good — your genuinely-written service pages and guides now rank
   worse than they did before you added the matrix.
3. Crawl attention spreads across a thousand low-value URLs instead of concentrating on
   the twenty that could convert.

Point 2 is the one people miss. The downside isn't "the new pages don't work." It's "the
new pages make the old pages worse."

## The test

Before generating page N from a template, answer this:

> **What is on this page that could not be on the sibling page, and would a customer in
> this town notice if it were missing?**

If the answer is "the town name," you do not have a page. Delete the template.

Concrete version — a real local page contains at least two of:

- A named neighborhood, development, HOA, or street the business actually works in
- A constraint specific to the place: architectural era, building material, an ordinance,
  a climate exposure, a permit process
- A real job done there, with what it involved
- A review or photo from that location

Generated adjectives don't count. "Beautiful homes," "discerning homeowners," and "unique
architectural character" are the tells that a template wrote the page.

## Measuring it, not guessing

Do not eyeball this. Shingle-compare the rendered text of sibling pages:

```js
const shingles = (s, n = 8) => {
  const w = s.toLowerCase().split(/\s+/);
  const set = new Set();
  for (let i = 0; i + n <= w.length; i++) set.add(w.slice(i, i + n).join(" "));
  return set;
};
const jaccard = (a, b) => {
  const A = shingles(a), B = shingles(b);
  let hits = 0;
  for (const x of A) if (B.has(x)) hits++;
  return hits / (A.size + B.size - hits);
};
```

Run it on the visible text of the two most similar sibling pages, with nav and footer
stripped if you want a pure body signal.

| Overlap | Read |
|---|---|
| **< 30%** | Genuinely distinct pages. Ship. |
| **30–50%** | Shared scaffolding, distinct substance. Acceptable; watch it. |
| **50–70%** | Templated. Google will cluster most of these. Cut the page count. |
| **> 70%** | Same page with a find-and-replace. Do not ship. |

For calibration, both from the case study in this skill: two hand-written city × service
pages measured **25.5%**. Two template-generated ones measured **76.2%**.

## The scaling ladder

Add a rung only when the one below it is genuinely full.

1. **One page per service.** Written properly, 800–1,500 words, real process detail. Five
   of these beat five hundred of anything else.
2. **One page per *primary* city** — the two to five places the business actually works
   most. Each hand-written, each containing local specifics that could not be swapped.
3. **City × service, only where both the city and the service are already proven**, and
   only where you have distinct material for that combination. Three to ten pages, not a
   Cartesian product.
4. **Guides and answers.** Uncapped, because each one is a genuinely different question.
   This is where a small site should spend its content budget — "what does exterior
   painting cost in Sarasota" is a real query with a real answer, and it can rank without
   any duplication risk at all.

Most local businesses never legitimately need rung 3. Nearly all of them underuse rung 4.

## If you inherit a matrix

You may be asked to work on a site that already has one. Don't unilaterally delete a
thousand pages — that's the owner's call. Do this instead:

1. **Measure and report.** Run the overlap test, give real numbers, name the page count.
2. **Propose keeping the tier that earns it** — the hand-written cities — and consolidating
   the rest into their parent city page or service page.
3. **301 the removed URLs** to the nearest genuinely useful page. Never 404 them in bulk,
   and never redirect them all to the homepage — a mass redirect to one page is itself a
   doorway signal.
4. **Fix the sitemap** to list only what survives.
5. Expect recovery to be gradual. The site-wide signal reassesses continuously; there is
   no switch.

## The honest framing for the client

They asked for a thousand pages because they were told page count is how you win. Give
them the real trade:

> A thousand near-identical pages will get about the ranking value of one, and will make
> your genuinely good pages rank worse. Twenty pages that each say something true and
> specific will outrank all of it. The work is the same; the distribution is different.
