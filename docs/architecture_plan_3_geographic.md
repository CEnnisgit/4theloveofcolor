# Architectural Plan 3: The Geographic Matrix

## The Problem
Right now, our services exist in a vacuum. We have `/services/exterior-painting`, but we don't have `/services/lakewood-ranch/exterior-painting`. 
In local service SEO, the searcher's intent is almost always bound to their geography (e.g., "house painters Sarasota"). CertaPro is dominating the map because they have 16+ dedicated city landing pages. Our legacy site had `cityPages` and `cityServicePages` data, but we haven't built the architecture to support it yet.

## The Proposed Architecture

We need to build a **Geographic Matrix** — an intersection where every Core Service gets a dedicated, highly optimized landing page for every Target City.

### The Two-Tiered Geo Architecture

**Tier 1: The City Hub Pages**
These pages act as the "storefront" for a specific town.
- `/locations/lakewood-ranch` (Title: *Painting Contractor in Lakewood Ranch, FL*)
- `/locations/sarasota`
- `/locations/bradenton`

**Tier 2: The City-Service Intersection (The Matrix)**
These pages are hyper-targeted for long-tail, high-intent local searches.
- `/locations/lakewood-ranch/exterior-painting` (Title: *Exterior House Painters in Lakewood Ranch, FL*)
- `/locations/lakewood-ranch/cabinet-refinishing`
- `/locations/sarasota/cabinet-refinishing`

### Technical Implementation
1. **Migrate Legacy Data:** Move the `cityPages.ts` and `cityServicePages.ts` files from the old codebase into the new `apps/website/src/lib/data/` structure.
2. **Dynamic Routing:** Build two new Next.js dynamic route templates:
   - `app/locations/[citySlug]/page.tsx`
   - `app/locations/[citySlug]/[serviceSlug]/page.tsx`
3. **SSG Generation:** Use `generateStaticParams` to cross-multiply our list of cities by our list of services, statically generating 20-30 lightning-fast local landing pages at build time.
4. **Geo-Schema:** Inject `Service` schema onto these pages that includes the exact `areaServed` property (with geo-coordinates and zip codes).

## Open Questions for Review
> [!IMPORTANT]
> 1. Which 3 cities are the absolute highest priority for you? (e.g., Sarasota, Lakewood Ranch, Bradenton, Venice, Siesta Key?) We will generate those first.
> 2. The legacy `cityServicePages.ts` copy might be a bit outdated. Are you okay with me generating refreshed, highly-optimized copy for the intersections (e.g., Lakewood Ranch + Cabinets) based on the new brand voice?
