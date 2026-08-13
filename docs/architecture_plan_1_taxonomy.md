# Architectural Plan 1: Hierarchical Persona Taxonomy

## The Problem
Currently, our taxonomy is "flat". The navigation and URL structure treats `Interior Painting` (a service) and `Commercial Painting` (a customer persona) as sibling concepts. 
- `/services/interior-painting`
- `/services/exterior-painting`
- `/services/cabinet-refinishing`
- `/services/commercial-painting`

This mixes the "What" with the "Who." A B2B property manager looking for commercial exterior painting does not want to wade through residential cabinet refinishing content.

## The Proposed Architecture

We need to establish two distinct silos at the top of the domain architecture: **Residential** and **Commercial**. Services will then be nested underneath the appropriate persona.

### New URL Structure

**Residential Silo:**
- `/residential/` (Hub page tailored to homeowners)
- `/residential/interior-painting`
- `/residential/exterior-painting`
- `/residential/cabinet-refinishing`

**Commercial Silo:**
- `/commercial/` (Hub page tailored to property managers, HOAs, and businesses)
- `/commercial/interior-painting`
- `/commercial/exterior-painting`
- `/commercial/hoa-multi-family`

### Technical Implementation
1. **Data Restructuring:** We will modify `apps/website/src/lib/data/servicePages.ts` to include a `persona: 'residential' | 'commercial' | 'both'` flag for each service.
2. **Dynamic Routing Update:** We will change the Next.js routing from `/app/services/[slug]` to two parallel dynamic routes: `/app/residential/[slug]` and `/app/commercial/[slug]`.
3. **Navigation Overhaul:** The main header will drop the generic "Services" dropdown in favor of two distinct paths: "For Homeowners" and "For Businesses/HOAs".

## Open Questions for Review
> [!IMPORTANT]
> 1. Do you agree with removing the generic `/services/` URL prefix in favor of `/residential/` and `/commercial/`?
> 2. Currently, our legacy data only has one generic "Commercial Painting" page. If we split this out, we'll need to write new copy for Commercial Interior and Commercial Exterior. Are you okay with me generating that baseline copy based on competitor research?
