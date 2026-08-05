/**
 * The site's route table — one source of truth for every indexable URL.
 *
 * Two things read this file, and that is the whole point:
 *
 *   1. The page components, via `useSeo`, to update the document head when a
 *      visitor navigates client-side.
 *   2. `scripts/prerender.mjs`, to write a real static HTML file per route at
 *      build time, with that route's own <title>, description, and canonical
 *      already in the served markup.
 *
 * Step 2 is not a nicety. Google reads `rel=canonical` from the HTML it is
 * served, before it renders any JavaScript, and treats a JS-injected canonical
 * as a weak hint at best. When every route shipped the same index.html, every
 * page declared itself a duplicate of the home page — which is the fastest
 * known way to keep the city pages out of the index entirely.
 *
 * So: a route that is not in this list does not get prerendered, and a page
 * that is not prerendered is one Google will see as a copy of the home page.
 * Add new indexable routes here first.
 */

import { cityPages } from "./data/cityPages";

export type RouteMeta = {
  /** URL path, no trailing slash except the root. */
  path: string;
  title: string;
  description: string;
  /** Open Graph image path, relative to the site root. */
  image?: string;
  /**
   * Keep out of the index and out of the sitemap. Used for the 404 page,
   * which must never be presented as a real destination.
   */
  noIndex?: boolean;
};

/** The fixed marketing pages. */
export const staticRoutes: RouteMeta[] = [
  {
    path: "/",
    title:
      "House Painters in Lakewood Ranch & Sarasota, FL | 4 The Love of Color Painting",
    description:
      "Family-owned interior & exterior painters serving Lakewood Ranch, Sarasota, Bradenton & the Suncoast. Free estimates, eco-friendly paint, finish quality you can see.",
  },
  {
    path: "/services",
    title:
      "Painting Services — Interior, Exterior & Cabinets | Lakewood Ranch & Sarasota, FL",
    description:
      "Interior painting, exterior painting, cabinet refinishing, and commercial painting across Lakewood Ranch, Sarasota & Bradenton. Free estimates from a family-owned crew.",
  },
  {
    path: "/projects",
    title: "Painting Projects & Gallery | 4 The Love of Color Painting, Sarasota FL",
    description:
      "See interior, exterior, commercial, and detail painting projects from 4 The Love of Color Painting across the Lakewood Ranch and Sarasota area.",
  },
  {
    path: "/about",
    title:
      "About Us — Family-Owned Painters in Lakewood Ranch, FL | 4 The Love of Color",
    description:
      "Founded by Edwin Ennis and run with his sons, 4 The Love of Color Painting brings family craftsmanship and eco-friendly materials to homes across the Sarasota Suncoast.",
  },
  {
    path: "/contact",
    title: "Contact & Free Estimates | 4 The Love of Color Painting, Lakewood Ranch FL",
    description:
      "Request a free painting estimate in Lakewood Ranch, Sarasota or Bradenton. Call (917) 584-0069 or send a message — family-owned, fast, and friendly.",
  },
];

/** City landing pages, derived from the city data rather than restated here. */
export const cityRoutes: RouteMeta[] = cityPages.map((page) => ({
  path: `/painters/${page.slug}`,
  title: page.title,
  description: page.metaDescription,
}));

/**
 * The 404 page. Prerendered so the served 404 document is real HTML rather
 * than an empty shell, but marked noIndex and kept out of the sitemap.
 */
export const notFoundRoute: RouteMeta = {
  path: "/404",
  title: "Page Not Found | 4 The Love of Color Painting",
  description:
    "That page couldn't be found. Explore our painting services or get a free estimate in Lakewood Ranch & Sarasota, FL.",
  noIndex: true,
};

/** Every route the prerenderer should emit a file for. */
export const allRoutes: RouteMeta[] = [
  ...staticRoutes,
  ...cityRoutes,
  notFoundRoute,
];

/** Everything that belongs in the sitemap: indexable routes only. */
export const indexableRoutes: RouteMeta[] = allRoutes.filter((r) => !r.noIndex);

export const routeByPath = (path: string) =>
  allRoutes.find((route) => route.path === path);
