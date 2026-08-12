# 0008: SEO-Driven Location Matrix Architecture

## Context
Service-Area Businesses (SABs) like local painters acquire the vast majority of their traffic through highly specific, localized long-tail searches (e.g., "Lakewood Ranch cabinet refinishing"). Relying on a single "Locations" page or a few broad service pages is insufficient to rank against competitors who build localized landing pages.

## Decision
We decided to programmatically generate a massive Local SEO Matrix. We cross-multiplied our ~12 services with our 52 target cities to generate over 600 highly specific, static pages during build time. 

The routing structure is:
`/locations/[citySlug]/[serviceSlug]`

## Consequences
- **Positive:** We now have exact-match landing pages for every possible local search query (e.g., `/locations/lakewood-ranch/cabinet-refinishing`).
- **Positive:** Using Next.js SSG (`generateStaticParams`), all 664 pages compile into pure static HTML, ensuring sub-100ms load times and perfect SEO scores.
- **Negative:** Increases build time slightly (by about 4-5 seconds).
- **Negative:** Requires careful handling of canonical tags and unique content generation to avoid Google penalizing us for duplicate content.
