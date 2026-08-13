# SEO Strategy: Duplicate Content, Templating, & Scalability

This document explains the calculated architectural trade-offs made to generate the 700+ page Location Matrix without triggering Google's duplicate content penalties or doorway page filters.

## 1. The "Duplicate Content Penalty" Reality
It is a common misconception that Google strictly "penalizes" websites for duplicate content. In reality, Google typically applies a **filtering effect**: if it sees 50 identical pages, it simply picks one to rank and ignores the rest. 

However, in Local SEO (Service Area Businesses), spinning up 50 pages that are 100% identical except for swapping the city name (e.g., "Painters in Sarasota" vs "Painters in Bradenton") *can* trigger a manual penalty for creating spammy **"Doorway Pages."** 

Our architecture beats this by ensuring the "top 25%" of our core pages are highly unique, localized assets, which provides enough weight to carry the duplicated boilerplate components at the bottom of the page.

## 2. Local Considerations: Unique vs. Templated
To balance high-quality SEO with programmatic scale, the data layer (`src/lib/data/cityPages.ts`) is split into two distinct tiers:

### Tier 1: The Core Regional Hubs (100% Unique)
For the major anchor cities—**Sarasota, Bradenton, Venice, and Lakewood Ranch**—every single word of the intro and the "Local Considerations" is handcrafted and completely unique.
* **Sarasota:** Focuses on 1950s mid-century architecture, salt air west of the Trail, and pre-1978 lead paint.
* **Bradenton:** Focuses on older block siding, peeling paint, and repair-heavy jobs.
* **Lakewood Ranch:** Focuses on strict HOA palettes, newer block-and-stucco construction, and west-facing sun fading.

Because the data is unique, Google views these pages as highly relevant, standalone local assets.

### Tier 2: The Micro-Villages (Templated Duplication)
To cast a massive long-tail net, we expanded the matrix to include 40+ specific sub-neighborhoods (e.g., *The Lake Club, Waterside, Country Club East*). 
* **The Strategy:** These pages rely on a programmatic template: *"As a premier neighborhood in Lakewood Ranch, [Village Name] features stunning homes... We specialize in repainting block-and-stucco construction typical of [Village Name]."*
* **The Risk:** These village pages are largely duplicated text. Google will not penalize the site, but it may choose to "fold" or ignore some of these village pages if it doesn't consider them unique enough from the main Lakewood Ranch page. This is an accepted "cast a wide net" SEO play.

## 3. The FAQs (100% Duplicated)
The 3 FAQs that appear at the bottom of a location page (e.g., `/locations/sarasota/cabinet-refinishing`) are **exactly the same** 3 FAQs that appear on any other city's page for that service.

**Why this is safe:**
Because the FAQs sit at the very bottom of the page, beneath the highly unique Tier 1 local content (such as Sarasota's lead paint warnings and neighborhood lists), Google evaluates the *page as a whole* as unique. The duplicated FAQs are treated as standard boilerplate (similar to a footer or a navigation menu), which Google expects and ignores when calculating "duplicate content."

## 4. The JSON-LD Schema Localization 
While the visible UI text for the FAQs is duplicated, we use a programmatic trick to localize the invisible JSON-LD structured data.

* **In the visible UI:** We render the raw question: `<h3>How much does cabinet refinishing cost?</h3>`
* **In the invisible JSON-LD Schema:** We dynamically append the city name to the question string: `"name": "How much does cabinet refinishing cost? (Serving Sarasota)"`

**The Trade-off:** This is a brilliant programmatic SEO strategy to win local FAQ rich snippets. However, it creates a "Structured Data Mismatch." Google's guidelines require that schema data exactly matches visible UI text. If audited manually by Google, this invisible injection could be flagged. 
