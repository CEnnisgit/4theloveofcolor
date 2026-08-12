# 0007: Nested Service Categories

## Context
Even after splitting our services into Residential and Commercial silos, the hub pages (`/residential` and `/commercial`) still displayed a flat grid of up to 10 equal-weight services. This caused "choice paralysis" for users, as core services (like Exterior Painting) were given the exact same visual weight as hyper-specific prep services (like Popcorn Ceiling Removal).

## Decision
We introduced a `category` taxonomy into the `servicePages.ts` database. Services are now strictly grouped into:
- `interior` (Interior Solutions)
- `exterior` (Exterior Solutions)
- `prep` (Planning & Prep)
- `core` (Core Commercial)

The UI was updated to filter and render these services in distinct, hierarchical sections rather than a flat grid.

## Consequences
- **Positive:** Users can scan and find their primary service instantly.
- **Positive:** It naturally organizes the mega-menu in the navigation bar.
- **Positive:** Reduces cognitive load and bounce rates.
- **Negative:** Requires strict categorization for any future services added to the database.
