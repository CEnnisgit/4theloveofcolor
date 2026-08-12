# 3. Service and Location Matrix Expansion

Date: 2026-08-11

## Status

Accepted

## Context

After presenting the granular micro-services and target locations to the business owner, we needed to refine our SEO architecture to match their exact operational capabilities and target demographics. The initial matrix included 4 broad city hubs and 9 services.

The business owner provided the following feedback:
- Services to drop: Epoxy, roof cleaning (soft wash), wood staining, and deck staining (low demand/infrequent).
- Services to keep/add: Core painting services, drywall/stucco repair, pressure washing (excluding roofs), popcorn ceiling removal, wallpaper removal, and paver cleaning.
- Locations to target: 48 specific hyper-local destinations, including master-planned villages in Lakewood Ranch (e.g., The Lake Club, Waterside), coastal keys (Siesta Key, Longboat Key), and Bradenton expansion zones (Parrish, Anna Maria Island). Anna Maria Island specifically needs to be split into three distinct towns for long-term SEO value.

## Decision

We are expanding the dynamic Next.js Static Site Generation (SSG) matrix to support 52 locations and 11 approved services. 

1. **Service Layer Updates (`servicePages.ts`)**:
   - Pruned `wood-staining` from the dataset.
   - Refined `pressure-washing` to explicitly exclude roof soft-washing.
   - Added three new micro-service schemas: `popcorn-ceiling-removal`, `wallpaper-removal`, and `paver-sealing`.

2. **Location Layer Updates (`cityPages.ts`)**:
   - Scaled from 4 core cities to 52 specific locales, organized internally by region (Lakewood Ranch Villages, Sarasota/Coast, Bradenton/Manatee).
   - This expands the static matrix to generate over 570+ highly specific, long-tail SEO landing pages (e.g., `/locations/the-lake-club/interior-painting`).

3. **UI / UX Impact (`Header.tsx` & `/locations/page.tsx`)**:
   - A dropdown menu cannot reasonably house 52 location links. We opted to list only the 4 primary hubs (Lakewood Ranch, Sarasota, Bradenton, Venice) in the Header dropdown, with a "View All Service Areas" link pointing to a dedicated, categorized `/locations` index page.

## Consequences

- **Positive:** Massive expansion of the SEO footprint. Capturing long-tail searches for highly affluent, specific neighborhoods (e.g., "cabinet refinishing in The Lake Club") without manual page creation overhead.
- **Positive:** UI remains clean and uncluttered by funneling users to a dedicated Locations hub page rather than stuffing the navigation bar.
- **Negative / Constraint:** Build times will increase slightly due to generating ~600 pages, but since we host on Cloudflare Pages (Free Tier allows 20,000 files per deployment), this is not an infrastructure concern.
