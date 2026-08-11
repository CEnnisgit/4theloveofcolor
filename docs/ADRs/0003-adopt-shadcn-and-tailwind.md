# 0003. Adopt shadcn/ui and Tailwind CSS

## Status
Accepted (2026-08-11)

## Context and Problem Statement
The legacy application utilized custom, raw CSS (`styles.css`) for all of its styling and component behavior. While effective for a small project, raw CSS scales poorly, requires significant maintenance for accessibility (e.g., managing ARIA states on custom dropdowns), and slows down UI iteration. We required a robust, modern styling solution that aligned with Next.js and accelerated development while retaining the ability to fully customize the aesthetic to avoid a "generic SaaS" look.

## Considered Options
*   **Keep Raw CSS:** High maintenance burden and low development velocity.
*   **CSS-in-JS (Styled Components/Emotion):** Performance overhead and clashing paradigms with Next.js App Router Server Components.
*   **Pre-built Component Library (Material UI, Chakra):** Extremely rigid, difficult to override styles to match specific branding, often results in cookie-cutter websites.
*   **Tailwind CSS + shadcn/ui:** Utility-first CSS combined with copy-paste component primitives that provide full control over markup and styling.

## Decision Outcome
Chosen option: **Tailwind CSS + shadcn/ui**. 
Tailwind eliminates the need to jump between CSS and TSX files and enforces strict design tokens via utility classes. `shadcn/ui` provides accessible (WAI-ARIA compliant) component primitives that we can own and modify. To ensure the site retains its premium, custom look (Terracotta/Gold colors, highly-rounded corners, Cormorant Garamond typography), we established a strict `DESIGN.md` standard. All `shadcn/ui` components must be modified upon installation to adhere to this design specification.

## Consequences
*   **Good, because** it provides a massive boost in development speed.
*   **Good, because** we get WAI-ARIA accessibility out of the box for complex components.
*   **Good, because** we retain 100% control over the markup and aesthetic, avoiding vendor lock-in.
*   **Bad, because** Tailwind's utility classes can clutter TSX markup, requiring discipline to extract highly-reused combinations into reusable components.
