# Onboarding Walkthrough

Welcome to the **4 The Love of Color** codebase. This guide serves as a high-level map of our architecture. For deep dives, follow the referenced documentation.

## 1. Tech Stack Migration
*Reference: `docs/ADRs/0001-migrate-to-nextjs-monorepo.md` & `0002-standardize-on-pnpm.md`*

**The Old Website:** The legacy codebase was a Vite/React Single Page Application (SPA) using `npm`. SPAs run purely on client-side JS, which severely harms local SEO indexing (a massive liability for a Florida painting contractor). Furthermore, `npm` is currently plagued by extreme security threats and supply-chain attacks, making it a liability.

**The New Architecture:**
* **Next.js & Monorepo:** We restructured into a monorepo (`apps/website`) and migrated to Next.js App Router configured with `output: 'export'`. This allows us to pre-render the entire site (760+ pages) into pure, blazingly fast HTML/CSS that Google can index instantly. It deploys statically to Cloudflare Pages.
* **Strict `pnpm` Standardization:** We strictly enforce the use of `pnpm` across the workspace. This completely mitigates the supply-chain vulnerabilities of `npm`, prevents phantom dependencies, and provides incredibly fast workspace hoisting. The legacy `npm` sandbox (`apps/old-website`) was explicitly isolated.

## 2. Homepage Anatomy
The homepage (`src/app/page.tsx`) is not just a collection of links; it is designed as a rigid, 11-step psychological funnel moving users from brand discovery to conversion.

* **Structural Wireframe:** See `docs/homepage_wireframe.md` for the exact component-by-component ASCII breakdown (Hero, Trust Strip, Service Silos, etc.).
* **Psychological Narrative:** See `docs/homepage_story_beat_map.md` for the strategic reasoning behind the layout (e.g., placing Visual Proof *before* Process to build desire).
* **Header Constraints:** The global header strictly omits all location and micro-service dropdown menus. We do this to prevent visual clutter and avoid Google penalizing the header as a spammy "doorway" structure. Users access locations via the homepage CTA or Footer. *(Reference: `docs/adr/0002-macro-service-routing-and-navigation.md`)*

## 3. Taxonomy Discovery (Services)

**Foundational Approach & Competitive Research:** 
Before structuring our database of services (`src/lib/data/servicePages.ts`), we conducted extensive competitive research to understand how other painting contractors organized their conceptual domains. Most competitors lazily dump all services onto a single page, treating a homeowner and an HOA property manager as the same audience.
* *References:* For deep context on our taxonomy logic, see `docs/competitive_intelligence_report.md`, `docs/architecture_plan_1_taxonomy.md`, and `docs/architecture_plan_2_granularity.md`.

**Persona Siloing (The Architectural Decision):**
*Reference: `docs/ADRs/0006-persona-based-service-siloing.md`*
Based on our research, we made the architectural decision to explicitly decouple "crossover" services (e.g., Stucco Repair, Paver Sealing, Drywall Repair) into strictly `residential` and `commercial` entities. A homeowner cares about "protecting landscaping," whereas a property manager cares about "multi-story boom lifts." By forcing every service into a specific persona silo, we allow for hyper-targeted copywriting that speaks directly to the user's specific anxieties.

**The SEO Impact:**
This persona siloing acts as a massive multiplier for our SEO strategy. By physically decoupling the services, we prevent Google from flagging our pages for "duplicate content." It also guarantees that our targeted keywords and JSON-LD structured data perfectly match the search intent of the user (e.g., ranking for "Commercial Stucco Repair" vs. "Residential Stucco Repair"), funneling high-intent traffic to highly-converting pages.

## 4. Locations (The Geographic Strategy)

**Competitive Intelligence & Planning:**
Similar to our service taxonomy, our approach to Locations began with deep competitive research (`docs/competitive_intelligence_report.md`). We found that most competitors utilize extremely spammy "doorway pages" that degrade user experience and risk Google penalties. From this research, we derived strict architectural plans for our geographic footprint (`docs/architecture_plan_3_geographic.md`) and built a highly bespoke, UX-first wireframe for location pages (`docs/architecture_plan_5_locations_wireframe.md`) to prove *Local Authenticity* and *Artisan Authority*.

**The SEO-Driven Location Matrix:**
*References: `docs/ADRs/0008-seo-driven-location-matrix.md` & `docs/adr/003-service-and-location-matrix-expansion.md`*
To scale our local reach across Lakewood Ranch, Sarasota, and the Suncoast without manually hardcoding pages, we architected an SEO-Driven Location Matrix. The site programmatically generates hundreds of highly-specific landing pages using the `[citySlug]/[serviceSlug]` dynamic routing. We expanded the underlying data layer to feed this matrix seamlessly.

**Strategic SEO Positioning:**
By combining the rigorous UX standards of our architectural plans with the programmatic scale of the Location Matrix, we achieve unparalleled long-tail capture. We avoid keyword-stuffing the UI by injecting dynamic, hyper-local JSON-LD schema (LocalBusiness + FAQ) directly into the headers of these pages. This structure captures hyper-specific, bottom-of-funnel search intent (e.g., "cabinet refinishing in Lakewood Ranch") while preserving the premium, editorial aesthetic of the brand.

## 5. The Master SEO Funnel

Because our entire architecture was driven by the need to capture Local Service Area traffic without relying on third-party lead generators, our SEO strategy acts as the connective tissue between every decision made above.

The ecosystem functions as a three-stage funnel:

**1. Top-of-Funnel (ToFU) - Educational Guides**
*References: `docs/ADRs/0009-content-funnel-architecture.md`*
To capture users actively researching problems (e.g., "why is my stucco peeling?"), we built a dynamic `/guides/` hub. These guides intercept users early in the buying cycle and aggressively link back to Bottom-of-Funnel service pages.

**2. Middle-of-Funnel (MoFU) - Service Hierarchy**
*References: `docs/references/seo-strategy/02-services-hierarchy.md` & `docs/faq_strategy.md`*
Our broad service pages (`/services/[slug]`) act as the parent anchors. These pages host our massive portfolio and in-depth process breakdowns. Crucially, they host our Fact-Based FAQs, which are written specifically to eliminate psychological friction (Cost -> Disruption -> Fear) and adhere to a strict Zero Hallucination rule.

**3. Bottom-of-Funnel (BoFU) - The Location Matrix & Structured Data**
*References: `docs/content_marketing_seo_strategy.md`, `docs/references/seo-strategy/03-duplicate-content-and-templating.md`, & `docs/adr/0001-scalable-json-ld-schema-architecture.md`*
When a user is ready to hire (e.g., "cabinet refinishing in Lakewood Ranch"), they land on our programmatic Location Matrix pages. Because these pages share boilerplate content, we avoid duplicate content penalties by ensuring the top 25% of the page (Intros & Local Considerations) is highly localized.
Furthermore, we inject localized, dynamic `LocalBusiness` and `FAQPage` JSON-LD schemas into the headers of these pages. This invisible structured data feeds Google exactly what it wants to award rich snippets, without visually cluttering our premium UI.
