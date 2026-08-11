---
colors:
  primary: "#c2592e" # Terracotta / Warm Orange (main brand accent)
  primaryDeep: "#8e3d1c" # Darker terracotta for hover states
  secondary: "#d9a460" # Gold (for trust badges, stars, accents)
  background: "#faf3e9" # Warm off-white
  surface: "#fffaf3" # Paper-like surface for cards
  textPrimary: "#211711" # Deep warm ink
  textSecondary: "#6a594c" # Muted warm gray/brown
  border: "rgba(74, 47, 26, 0.12)" # Soft warm border
typography:
  fontFamily:
    sans: ["Manrope", "system-ui", "sans-serif"]
    heading: ["Cormorant Garamond", "serif"]
  baseFontSize: "16px"
spacing:
  base: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "64px"
radii:
  sm: "8px"
  md: "16px"
  lg: "22px"
  xl: "30px"
  full: "9999px"
shadows:
  sm: "0 6px 20px rgba(85, 46, 20, 0.08)"
  md: "0 22px 60px rgba(85, 46, 20, 0.14)"
  lg: "0 32px 80px rgba(85, 46, 20, 0.20)"
---

# Design System Specification

This document serves as the single source of truth for the visual design and UX principles of the **4theloveofcolor** painting business website. 

> [!IMPORTANT]
> As an AI agent, you must strictly adhere to the tokens defined in the YAML frontmatter and the principles outlined below when generating any UI code. Do not use generic arbitrary values.

## 1. Brand Identity & Vibe
- **Warm & Trustworthy:** The brand uses a very warm, earthy palette (terracotta, gold, off-whites) to evoke the feeling of a premium, friendly, and reliable home service.
- **Classic Meets Modern:** The use of a serif font (`Cormorant Garamond`) for headings brings a classic, upscale feel, while the highly rounded corners (`radii: lg/xl`) and `Manrope` body font keep it approachable and modern.
- **Depth & Lighting:** The design relies on warm, tinted shadows to lift cards (`surface`) off the slightly darker background (`background`).

## 2. Component Guidelines
- **Buttons:** Primary calls to action should utilize a gradient or solid fill of `primary` to `primaryDeep` with a pill shape (`radius: full`) and a pronounced warm shadow.
- **Cards & Surfaces:** Testimonials, project showcases, and service lists should be housed in cards using the `surface` color, `lg` border radius (22px), and a subtle `sm` shadow.
- **Typography Hierarchy:** 
  - Main Hero / Section Headings: `Cormorant Garamond` (large, tight tracking).
  - Eyebrows / Labels: `Manrope` (uppercase, wide letter-spacing, small font size, `primary` color).
  - Body: `Manrope` with a comfortable line-height (1.6) and `textSecondary` color.

## 3. Micro-Animations & Interaction
- **Hover States:** Interactive elements must respond physically (e.g., slight negative Y translation `transform: translateY(-4px)`) and increase shadow depth.
- **Scroll Reveals:** Content should gently fade and slide up (`translateY(20px)` to `0`) as the user scrolls down the page.

## 4. Implementation Rules
- Always map these design tokens to Tailwind CSS utility classes by configuring `tailwind.config.ts`. 
- Ensure `shadcn/ui` components are heavily customized to match the high border radii and warm colors defined here (the default shadcn look is too "SaaS/Dashboard" for this brand).
