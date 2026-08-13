# Architectural Plan 2: Granularity & Hierarchy

## The Problem
While we successfully established the two primary silos (**Residential** and **Commercial**), the pages within those silos are completely flat. 

Right now, if a homeowner visits the `/residential` hub, they see a grid of 10 identical service cards:
- Interior Painting
- Exterior Painting
- Cabinet Refinishing
- Popcorn Removal
- Wallpaper Removal
- Drywall Repair
- Stucco Repair
- Paver Sealing
- Pressure Washing
- Color Consultation

This creates choice paralysis and a cluttered UX. It elevates a minor prep service like "Wallpaper Removal" to the exact same visual hierarchy as "Interior Painting", which is our core moneymaker.

## How Competitors Handle This
Top competitors (like CertaPro and Fleet Kleen) do not flood their hubs with a flat list. Instead, they group services into **Core Categories** and **Specialty/Prep Services**, or they organize by **Physical Domain** (Interior vs. Exterior).

## The Proposed Hierarchy

We will update both the **Residential** and **Commercial** hub pages to visually group the services, breaking them out of a single massive grid.

### Residential Hub Layout (`/residential`)

**1. Interior Solutions** (Core focus on the inside of the home)
- Interior Painting (Hero card)
- Cabinet Refinishing
- Popcorn Ceiling Removal
- Wallpaper Removal
- Drywall Repair & Patching

**2. Exterior Solutions** (Core focus on the outside of the home)
- Exterior Painting (Hero card)
- Stucco Repair & Sealing
- Pressure Washing & Soft Wash
- Paver Cleaning & Sealing

**3. Planning & Prep**
- Professional Color Consultation

### Commercial Hub Layout (`/commercial`)

**1. Core Commercial Painting**
- Commercial Exterior Painting
- Commercial Interior Painting

**2. Property Maintenance & Prep**
- Stucco Repair & Sealing
- Drywall Repair & Patching
- Pressure Washing

## Technical Implementation

1. **Update `servicePages.ts`**: We will add a new property to the `ServicePage` type called `category: 'interior' | 'exterior' | 'specialty'`.
2. **Tag Existing Data**: We will retroactively tag all 10 services with their respective categories.
3. **Refactor Hub Pages**: We will rewrite `/residential/page.tsx` and `/commercial/page.tsx`. Instead of iterating over `servicePages.map()` and rendering a single CSS grid, we will filter by `category` and render distinct UI sections for "Interior Solutions", "Exterior Solutions", etc.

> [!IMPORTANT]
> **User Review Required**: Does this nested hierarchy (Interior vs Exterior vs Specialty) make sense to you? If you approve, I will update the data layer and refactor the hub pages immediately.
