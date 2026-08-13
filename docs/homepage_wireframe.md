# Homepage Wireframe Breakdown

This document maps the structural React components that make up the Next.js homepage (`src/app/page.tsx`).

## ASCII Wireframe Visualization

```text
+-------------------------------------------------------------+
1. | [ Logo ] Brand Name                 Home  Services  [Call]  |
+-------------------------------------------------------------+
2. |  HERO SECTION                                               |
   |  [ Headline ] [ Lead Text ] [ Estimate ]                    |
   |  (Premium Asymmetric Image Panel)                           |
+-------------------------------------------------------------+
3. | TRUST STRIP                                                 |
   |  [ Family-owned ] [ Fully Insured ] [ Eco-friendly ]        |
+-------------------------------------------------------------+
4. | SERVICES SILOS                                              |
   |  [ Residential Pathway ]      [ Commercial Pathway ]        |
+-------------------------------------------------------------+
5. | SELECTED WORK                                               |
   |  [ Masonry Grid of Featured Projects ]                      |
+-------------------------------------------------------------+
6. | EMPATHY & GUARANTEES                                        |
   |  [ Pain Points Addressed ] + [ Hard Credentials/Warranty ]  |
+-------------------------------------------------------------+
7. | OUR PROCESS                                                 |
   |  [ 01 Estimate ] [ 02 Prep ] [ 03 Paint ] [ 04 Walkthrough ]|
+-------------------------------------------------------------+
8. | SERVICE AREA (SEO BLOCK)                                    |
   |  Cities Covered list + [ View All Locations CTA ]           |
+-------------------------------------------------------------+
9. | TESTIMONIALS                                                |
   |  [ ★★★★★ Review ]   [ ★★★★★ Review ]   [ ★★★★★ Review ]     |
+-------------------------------------------------------------+
10.| CALL TO ACTION                                              |
   |  Final pitch...                 [Request Quote]  [Call]     |
+-------------------------------------------------------------+
11.| FOOTER                                                      |
   |  Brand Info    Explore      Areas Served    Get in touch    |
+-------------------------------------------------------------+
```

---

## 1. Top Navigation Bar (`<Header />`)
- **Left:** Brand Emblem + Text.
- **Middle/Right:** Top-level Links (Home, Services, Projects, About, Contact). 
- *Note: Location dropdowns are strictly omitted to prevent SEO penalties.*

## 2. `<HeroSection />`
The most critical part of the page.
- **Left Column (Copy):** Eyebrow, H1, Lead Paragraph, CTA buttons.
- **Right Column (Media):** Large asymmetric image panel.

## 3. `<TrustStrip />`
A single-row grid placed directly below the hero containing quick value propositions (e.g., "Family-owned"). Lowers user defense mechanisms before scrolling.

## 4. `<ServicesSection />`
Splits the user journey into targeted silos (Residential vs. Commercial). 

## 5. `<SelectedWorkSection />`
A masonry grid displaying featured projects. Placed high on the page for visual proof.

## 6. `<EmpathyGuaranteesSection />`
Consolidates the "Why Choose Us" and "Guarantees" sections into a single block. Addresses customer fears (mess, disruption) while proving hard credentials (licensing, warranty).

## 7. `<ProcessSection />`
A step-by-step layout (Estimate -> Prep -> Paint -> Walkthrough) that makes doing business feel easy and risk-free.

## 8. `<ServiceAreaSection />`
Lists covered cities and explicitly routes to the Location Hub `/locations` via a CTA button. *City names are `<Link>` tags feeding SEO link juice down into the Matrix.*

## 9. `<TestimonialsSection />`
A grid of 5-star Google review cards featuring clamped text and reviewer avatars.

## 10. `<CallToActionSection />`
A bold banner at the bottom catching users who have scrolled the entire narrative arc.

## 11. `<Footer />`
A 4-column layout containing Brand info, Links, Areas Served (with active `<Link>` routing), and Contact Details.
