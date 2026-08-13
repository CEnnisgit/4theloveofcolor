# Architectural Plan 4: Problem-Solution Pathways (Guides)

## The Problem
Right now, our site is entirely organized around *What We Do* (Our Features). We expect the user to already know they need "Exterior Painting."
However, much of the search volume in this industry comes from users researching a *Problem* before they decide on a *Solution*. For example, homeowners search "How often to repaint in Florida" or "Will the HOA fine me for faded paint?"
Competitors like Fleet Kleen are capturing this top-of-funnel traffic with aggressive educational blog clusters. We have a legacy `guidePages.ts` file, but it's not integrated into the new site.

## The Proposed Architecture

We need to build a **Guides & Resources Hub** that acts as our "Problem-Solution" pathway. This will intercept homeowners who are researching paint problems and funnel them toward our service pages.

### High-Value Content Pillars to Build
We will migrate and expand the legacy `guidePages.ts` into a `/guides/` directory. Based on competitor analysis, the highest-ROI topics are:

1. **The Cost Pathway:** "How much does it cost to paint a house in Sarasota in 2026?" (Addresses price anxiety, builds trust through transparency).
2. **The HOA Pathway:** "Lakewood Ranch HOA Painting Guidelines" (Positions us as the local experts who can get their colors approved).
3. **The Climate Pathway:** "Why Florida Stucco Cracks and How to Fix It" or "Paint vs. Pressure Washing for Salt Air."

### Technical Implementation
1. **Migrate Legacy Guides:** Move `guidePages.ts` into the new data structure.
2. **Dynamic Routing:** Build `app/guides/page.tsx` (the library index) and `app/guides/[slug]/page.tsx` (the article template).
3. **Internal Linking Engine:** The most important part of a guide is the CTA. The bottom of every guide must have a highly visible "Request a Walkthrough" CTA, and inline links directly to the relevant Service or Location page.
4. **FAQ Schema:** Implement `FAQPage` JSON-LD schema on these guides so Google can display our answers directly in the search results (position zero).

## Open Questions for Review
> [!IMPORTANT]
> 1. Should we call this section "Guides", "Resources", "Blog", or "Homeowner Hub"?
> 2. Are there any specific HOA regulations or common customer questions you get constantly over the phone that we should prioritize writing a guide for?
