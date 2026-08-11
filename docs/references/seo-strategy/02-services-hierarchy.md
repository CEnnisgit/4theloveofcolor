# Services SEO Hierarchy Strategy

## Core Philosophy
To maximize organic search traffic for specific services (e.g., "cabinet refinishing in Lakewood Ranch") while avoiding keyword cannibalization and visual clutter on the homepage, we will implement a strict hierarchical site architecture for our services.

## The Three-Tier Hierarchy

### Tier 1: The Homepage (The Hook)
*   **URL:** `/`
*   **Strategy:** The homepage will *only* list the macro categories (Interior Painting, Exterior Painting, Cabinet Refinishing, Commercial).
*   **Execution:** We will use short, punchy summaries (2-3 sentences max) with a "See all services" call to action. We will intentionally *exclude* the granular bullet points (e.g., "baseboards, trim, stucco repair") from the homepage to prevent it from ranking for long-tail service keywords instead of the dedicated service pages.

### Tier 2: The Services Hub
*   **URL:** `/services`
*   **Strategy:** This page acts as the central directory for all offerings. It provides slightly more detail than the homepage (including the bulleted lists of specific tasks) but its primary SEO function is to distribute PageRank (link juice) to the individual service subpages.
*   **Execution:** A list or grid of large cards where every service has a prominent "More on [Service]" link pointing to Tier 3.

### Tier 3: Dedicated Service Subpages (The SEO Net)
*   **URLs:** `/services/interior-painting`, `/services/exterior-painting`, `/services/cabinet-refinishing`, etc.
*   **Strategy:** These are our "money pages" for specific search intents. A user searching for "cabinet painters near me" should land directly on the `/services/cabinet-refinishing` subpage, *not* the homepage.
*   **Execution:** Each subpage will contain:
    *   Targeted H1 and H2 tags specific to that exact service.
    *   Granular details, materials used, and specific pain points solved.
    *   A dedicated FAQ section for *that specific service* (with `FAQPage` JSON-LD schema injected).
    *   Relevant photos showcasing only that service.

## Avoid Duplicate Content (Cannibalization)
Historically, the legacy site rendered the identical Service Cards and identical FAQs on both the homepage and the `/services` page. This creates ~36% text overlap, causing our own URLs to compete against each other in Google search results. By adhering strictly to this 3-tier hierarchy, each URL has a unique, clearly defined purpose for Google's crawler.
