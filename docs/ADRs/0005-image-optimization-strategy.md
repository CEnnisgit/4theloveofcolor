# 0005. Image Optimization Strategy (next/image)

## Status
Accepted (2026-08-11)

## Context and Problem Statement
The website heavily relies on high-quality, authentic photography (both interior and exterior project shots) to build trust and demonstrate craftsmanship. In the legacy Vite site, images were manually optimized into multiple resolutions (`-480.webp`, `-768.webp`, `-1200.webp`) and served using standard HTML `<img>` and `<picture>` tags. While functional, managing responsive image sizes manually is error-prone, scales poorly as the portfolio grows, and complicates the developer experience. We needed a frictionless way to guarantee perfect image performance and responsive delivery.

## Considered Options
*   **Manual Optimization (`<picture>` tags):** Retain the legacy method. Highly performant but tedious to maintain.
*   **Third-Party Image CDN (Cloudinary/Imgix):** Excellent feature set, but introduces unnecessary ongoing costs and external dependencies for a relatively small portfolio.
*   **Next.js `<Image>` component:** Native, highly automated, and enforces best practices (lazy loading, CLS prevention).

## Decision Outcome
Chosen option: **Next.js `<Image>` component**. 
We decided to adopt the native Next.js `<Image>` component (`next/image`) for all visual assets. All original branding and project photos will be stored directly in `apps/website/public/images/`. Developers must exclusively use `next/image` rather than standard HTML `<img>` tags. Because the site is statically exported (`output: 'export'`) to Cloudflare Pages, the default on-demand Node.js image optimization API will not work. Therefore, we will rely on a custom loader or static build-time optimization plugin (e.g., `next-export-optimize-images`) to handle the compression and formatting ahead of deployment.

## Consequences
*   **Good, because** it automatically generates modern formats (WebP/AVIF) and responsive `srcset` arrays.
*   **Good, because** it forces lazy loading and reserves spatial layout, guaranteeing near-perfect Core Web Vitals (CLS/LCP).
*   **Bad, because** utilizing `output: 'export'` means we must configure additional tooling to optimize images at build-time rather than leveraging Next.js's default on-demand server processing.
