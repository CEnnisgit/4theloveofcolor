# 2. Macro Service Routing & Navigation Strategy

* **Status**: Accepted
* **Date**: 2026-08-11
* **Context**: Filling the global header with long drop-down menus listing every individual painting micro-service (cabinet spraying, drywall patching, lanai cage painting) creates visual clutter, degrades mobile UX, and dilutes the Sharp Editorial brand aesthetic.

## Decision

1. **Header Minimalism**: The primary navigation header remains strictly uncluttered with top-level links: `Home`, `Services`, `Projects`, `About`, `Contact`.
2. **Macro-Services Homepage Highlight**: The homepage presents 4 distinct **Macro Service Categories** (Interior Painting, Exterior Painting, Cabinet Refinishing, Commercial Painting).
3. **Dedicated Subpage Routing**: Each macro service card links to `/services`, where full micro-service offerings, surface prep guides, and targeted local SEO headers live.

## Consequences

* **Pros**:
  * Clean, high-contrast, editorial header navigation.
  * Mobile-friendly header with clear tap targets.
  * Targeted SEO landing page (`/services`) optimized for local keyword clusters without overloading the home page navigation bar.
* **Cons**:
  * Users seeking a hyper-specific sub-service must click through to `/services` or `/contact`.
