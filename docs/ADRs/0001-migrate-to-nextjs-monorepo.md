# 0001. Migrate to Next.js and Monorepo Architecture

## Status
Accepted (2026-08-11)

## Context and Problem Statement
The original codebase was a standard Vite/React Single Page Application (SPA). Because SPAs render content entirely on the client-side via JavaScript, they struggle heavily with Search Engine Optimization (SEO). For a local service business (Florida painting contractor) where ranking for local queries is critical to revenue, poor SEO is a severe liability. Additionally, the flat repository structure lacked scalability for future additions, such as backend services.

## Considered Options
*   **Keep Vite SPA:** Rely on Google's ability to crawl JS, which is slow, unreliable, and hurts First Contentful Paint (FCP).
*   **Migrate to Next.js (App Router):** Offers robust native SEO, metadata management, and static export capabilities.
*   **Migrate to Astro:** Excellent for static content, but less robust ecosystem for complex React-driven interactive UI components (shadcn/ui).

## Decision Outcome
Chosen option: **Migrate to Next.js (App Router) in a Monorepo.** 
Next.js provides the best balance of React ecosystem compatibility (crucial for our chosen UI library) and SEO performance. We restructured the repository into a monorepo format (using `apps/` and `crates/` directories) to future-proof the architecture. To deploy to our target hosting environment (Cloudflare Pages free tier), we configured Next.js with `output: 'export'` to generate pure static HTML/CSS/JS.

## Consequences
*   **Good, because** it drastically improves SEO indexability and FCP.
*   **Good, because** the monorepo structure allows for clean separation of concerns as the project scales.
*   **Bad, because** it increases initial build complexity.
*   **Bad, because** static export disables dynamic server-side rendering (SSR) features, though this is an acceptable trade-off for a brochure-style site with no database.
