# 4 The Love of Color Painting — Website

Marketing website for 4 The Love of Color Painting, a family-owned interior &
exterior painting company serving **Lakewood Ranch, Sarasota & the Suncoast (FL)**.

Built with **React 18 + TypeScript + Vite**. Deployed to **Netlify**.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # type-checks + builds to dist/
npm run preview    # preview the production build
```

## Project layout

- `src/App.tsx` — all marketing pages (Home, Services, Projects, About, Contact) + the reviews section
- `src/data/siteContent.ts` — all copy, contact info, services, FAQs, curated reviews
- `src/styles.css` — single stylesheet (warm terracotta design system)
- `src/seo.ts` — per-page `<title>` / meta / canonical (SEO)
- `src/useReviews.ts` — fetches live Google reviews from the backend (`/api/reviews`)
- `src/useScrollReveal.ts` — scroll-in animations (progressive enhancement)
- `src/Photo.tsx` — `<picture>` wrapper serving WebP with JPEG fallback
- `src/admin/` — admin CRM dashboard (separate from the marketing site)
- `public/images/` — optimized photos (+ `original/` backups; re-run `npm run optimize-images`)

## Backend

The contact form and live Google reviews talk to a separate Express API
(`4theloveofcolorpainting-api`). Set `VITE_API_URL` to its URL in a `.env` file
(or Netlify env vars). Without it, the contact form posts to a relative path and
the reviews section falls back to curated reviews.

## Images

Source photos live in `public/images/original/`. Run `npm run optimize-images`
to regenerate the web-sized JPEG + WebP variants.

## SEO

LocalBusiness + FAQ structured data in `index.html`, `public/sitemap.xml`,
`public/robots.txt`, geo meta tags, and per-route titles/descriptions.
