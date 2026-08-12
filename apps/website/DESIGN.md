---
colors:
  primary: "#c2592e" # Terracotta / Warm Orange (main brand accent)
  primaryDark: "#a34521" # Darker terracotta for hover states
  secondary: "#c5a059" # Gold (for trust badges, stars, accents)
  background: "#faf7f2" # Warm off-white canvas (bg-warm-bg)
  ink: "#211711" # Deep warm ink black (bg-ink / text-ink)
  inkMuted: "#6a594c" # Muted warm brown/gray text (text-ink-muted)
  border: "rgba(33, 23, 17, 0.10)" # Crisp border (border-ink/10)
  rainbowStripe:
    green: "#61bb46"
    yellow: "#fdb827"
    orange: "#f5821f"
    red: "#e03a3e"
    purple: "#963d97"
    blue: "#009dcf"
typography:
  fontFamily:
    sans: ["Libre Franklin", "system-ui", "sans-serif"] # --font-sans
    heading: ["Playfair Display", "serif"] # --font-heading
  baseFontSize: "16px"
radii:
  default: "0.125rem" # 2px sharp corners (--radius: 0.125rem)
  button: "0.125rem" # 2px sharp buttons (rounded-sm)
  card: "0.125rem" # 2px sharp card containers (rounded-[var(--radius)])
---

# Sharp Editorial Design System Specification

This document serves as the **single source of truth** for the visual design, typography, color rules, component guidelines, and UX principles of the **4 The Love of Color Painting** web application.

> [!IMPORTANT]
> All AI subagents and UI developers MUST strictly adhere to the tokens and rules defined in this specification. Do not introduce arbitrary rounded corners, non-standard colors, or ad-hoc button shapes.

---

## 1. Brand Identity & Aesthetic: "Sharp Editorial"
- **High-Contrast Minimal & Clean**: High contrast between rich deep warm ink (`#211711`), warm bone canvas (`#FAF7F2`), and terracotta accents (`#C2592E`).
- **Sharp Geometry (2px Radius Discipline)**: We do **NOT** use heavy bubble rounded corners (`rounded-2xl`, `rounded-full` on cards/buttons). All cards, modals, buttons, badges, and containers use crisp 2px corners (`--radius: 0.125rem` / `rounded-sm`).
- **Typography Hierarchy**:
  - Headings & Display: `Playfair Display` serif (`font-serif`, tight tracking, bold).
  - Body & Micro-copy: `Libre Franklin` sans (`font-sans`, readable, clean).

---

## 2. Component & Layout Rules

### Section Headers & Navigation
- **Homepage Section Tags**: `w-52 sm:w-60 h-9`, `bg-ink text-white`, `text-[11px] sm:text-[13px]`, `font-bold uppercase tracking-[0.2em]`, `rounded-[var(--radius)]`.
- **Subpage Heroes**: Subpages do **NOT** use section tags. Subpage heroes flow directly from the breadcrumb trail -> `H1` title -> lead paragraph.
- **Header Navigation**: Clean and uncluttered with macro links only (`Home`, `Services`, `Projects`, `About`, `Contact`). Active link highlighted in `text-terracotta`.
- **Breadcrumbs**: Standard Shadcn UI Breadcrumbs (`Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`) paired with dynamic `BreadcrumbList` JSON-LD schema.

### Dividers & Section Borders
- **Warm-to-Warm Section Dividers**: Thin 2px dark ink lines (`h-0.5 bg-ink/30`).
- **Key Brand Section Transitions**: Retro Macintosh 6-stripe rainbow bar (`#61bb46`, `#fdb827`, `#f5821f`, `#e03a3e`, `#963d97`, `#009dcf`) at `h-2 sm:h-2.5` (or `h-2 sm:h-3`).

### Cards & Containers
- Testimonial cards, project portfolio items, service cards, and info boxes use `bg-transparent` or `bg-warm-bg` with `border border-ink/10` and `rounded-[var(--radius)]` (2px). We DO NOT use pure stark white (`bg-white`) for containers as it clashes with the earthy, warm aesthetic.
- Testimonials on `warm-bg` use `bg-transparent` to blend seamlessly into the warm background.

### Buttons & Call-to-Actions
- Primary CTA: `bg-terracotta text-white font-bold rounded-sm shadow-md hover:bg-[var(--color-terracotta-dark)]`.
- Secondary CTA / Ghost Button: `bg-transparent text-ink border-2 border-ink font-bold rounded-sm hover:bg-ink hover:text-white`.

---

## 3. SEO & Structured Data Guidelines
- Every subpage must include dynamic JSON-LD scripts generated via `@/lib/seo/schema.ts` (`getBreadcrumbSchema`, `getServiceSchema`, etc.).
- Every subpage must declare complete Next.js `metadata` (title, description, canonical URL, openGraph).
