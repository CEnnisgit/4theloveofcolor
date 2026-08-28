# Sources and staleness

SEO guidance rots. This file records where the load-bearing claims in this skill came
from and when, so a future agent can tell what needs rechecking.

**Researched: 2026-08-28.**

## Recheck before trusting

These are the claims most likely to change. Verify against primary sources before
building architecture that depends on them.

| Claim | Source | Verified |
|---|---|---|
| FAQ rich results removed from Google Search | [Search Engine Journal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/); absent from the Search Gallery | 2026-08-28 |
| Supported rich result types | [Search Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) | 2026-08-28 |
| Spam policies cover AI Overviews and AI Mode (doc update 2026-05-15) | [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies); [PPC Land](https://ppc.land/google-spam-policies-now-officially-cover-ai-overviews-and-ai-mode-in-search/) | 2026-08-28 |
| Doorway / scaled content / keyword stuffing definitions | [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies) (page last updated 2026-08-28) | 2026-08-28 |
| Core Web Vitals thresholds: LCP < 2.5s, INP < 200ms, CLS < 0.1 at p75 | [corewebvitals.io](https://www.corewebvitals.io/core-web-vitals) | 2026-08-28 |
| Titles > 70 chars rewritten ~100% of the time; 51–55 chars ~40% | [Zyppy title tag study](https://zyppy.com/title-tags/meta-title-tag-length/) | 2026-08-28 |
| Meta description ~158 chars desktop / ~120 mobile; ~62% rewritten | [SiteGrade](https://sitegrade.io/en/quick-answers/meta-description-title-tag-correct-lengths-2026/) | 2026-08-28 |
| `aggregateRating` restricted to sites reviewing *other* businesses | [LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) | 2026-08-28 |
| Helpful content system folded into core ranking, March 2024, continuous | [Amsive](https://www.amsive.com/insights/seo/googles-helpful-content-update-ranking-system-what-happened-and-what-changed-in-2024/); [GSQi](https://www.gsqi.com/marketing-blog/google-march-2024-core-update-helpful-content-system/) | 2026-08-28 |
| Local ranking pillars: relevance, distance, prominence | [BrightLocal](https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/) | 2026-08-28 |
| GBP ~32% of local ranking weight; SABs lean on prominence | [PinMeTo](https://www.pinmeto.com/blog/local-seo-ranking-factors-2026/) | 2026-08-28 |
| Canonical signal strength: redirect > rel=canonical > sitemap | [Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) | 2026-08-28 |
| Google renders JS on a separate later queue; pre-rendering still recommended | [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | 2026-08-28 |
| AI crawler split: training vs retrieval bots are separate agents | [AuditAE](https://auditae.app/blog/ai-crawlers-explained); [Alice Labs](https://alicelabs.ai/en/insights/ai-crawler-management) | 2026-08-28 |
| Click depth ≤ 3; pillar-cluster bidirectional linking | [Digital Applied](https://www.digitalapplied.com/blog/internal-linking-strategy-2026-large-site-architecture-guide) | 2026-08-28 |

## Primary sources, always prefer these

Google Search Central is the only authority on Google's own rules. When third-party
guidance conflicts with it, Google wins.

- [Search Essentials](https://developers.google.com/search/docs/essentials)
- [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [How Search works](https://developers.google.com/search/docs/fundamentals/how-search-works)
- [Structured data Search Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google Business Profile Help](https://support.google.com/business)
- [web.dev — Core Web Vitals](https://web.dev/vitals/)

## How to recheck

Before a project that leans on any of the above:

1. Open the Search Gallery and confirm the rich result you're planning still exists.
2. Open the spam policies page and read the definition of anything you're scaling.
3. Check the "last updated" date at the foot of each Google doc.
4. Do not trust your training data on deprecations. FAQ rich results were removed in
   May 2026; an agent working from an older snapshot will confidently build for them.

## Things that are stable

Less likely to change; safe to rely on without rechecking every time:

- Ship real HTML rather than depending on client-side rendering
- One self-referencing absolute canonical per page
- Generate the sitemap from the same source as the routes
- Unique title and description per page
- One `h1` per page, real heading hierarchy
- `alt` on every image, dimensions to prevent layout shift
- 301 every URL that had traffic or links during a migration
- Don't fabricate claims about a business
- Fewer, better pages beat more, thinner ones
