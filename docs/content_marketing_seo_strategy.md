# Content Marketing & SEO Strategy: The Funnel Framework

This document formalizes the strategy behind our content architecture. Our website is engineered to capture users at two distinct stages of their buying journey using a targeted "Funnel Framework."

## 1. The Funnel Framework

### Bottom-of-the-Funnel (BoFU): High-Intent Traffic
* **The Audience:** These users already know exactly what they need and are actively looking for someone to hire.
* **Their Search Queries:** "Exterior painters near me," "Lakewood Ranch cabinet refinishing," "Sarasota commercial painters."
* **Our Capture Mechanism:** **The Services & Locations Hubs.**
* **The Strategy:** Our 660+ localized service pages (`/locations/lakewood-ranch/cabinet-refinishing`) act as an SEO dragnet. Because these users are ready to buy, these pages are highly transactional, focusing on trust, process, and a clear "Request a Walkthrough" CTA.

### Top-of-the-Funnel (ToFU): Research & Problem-Aware Traffic
* **The Audience:** These users have a problem, but they aren't necessarily looking for a painter yet. They are researching solutions, diagnosing symptoms, or budgeting.
* **Their Search Queries:** "Why is my exterior paint peeling in Florida?", "How much does it cost to paint a house?", "Can you paint over popcorn ceilings?"
* **Our Capture Mechanism:** **The Guides Hub (`/guides`).**
* **The Strategy:** We answer their questions authoritatively to build trust, and then *funnel* them down to our BoFU pages by presenting our services as the ultimate solution to their problem.

---

## 2. Philosophy for Selecting Top-of-Funnel Guides

When deciding what guides to write in the future, do not write generic "fluff" articles (e.g., "Top 10 Paint Colors for 2026"). Instead, use the following framework to ensure every piece of content drives revenue:

> **The High-ROI Content Checklist**
> 1. **The Pain Point:** Does this address a specific problem a homeowner is experiencing right now?
> 2. **The Florida Factor:** Can we localize the answer? (e.g., addressing salt air, high humidity, HOA rules, or stucco).
> 3. **The Cost Anxiety:** Does this help demystify pricing? (Transparency builds immense trust before they even pick up the phone).
> 4. **The Bridge:** Does this topic naturally lead to one of our core services?

### Content Pillars to Focus On:
1. **The Diagnostic Pillar:** "Why is X happening?" (e.g., *Why Florida Stucco Cracks and How to Fix It*). Bridges to our repair and prep services.
2. **The Cost/ROI Pillar:** "Is X worth it?" (e.g., *Refinishing Cabinets vs. Replacing*). Bridges to our high-margin interior services.
3. **The Regulatory Pillar:** "Am I allowed to do X?" (e.g., *Lakewood Ranch HOA Painting Guidelines*). Bridges to our exterior services.

---

## 3. The Process for Extending the Guides Hub

This system is built to scale. As the business grows, the client will want to add more ToFU guides to capture new search queries. 

### Content Requirements for a New Guide
To ensure the guide performs well on Google and converts readers into leads, it must include:
* **Targeted H1 & Title:** A clear, search-friendly title.
* **The Answer (Up Front):** Answer the user's question directly in the first two paragraphs. Google rewards content that doesn't bury the lede.
* **Internal Linking:** The guide *must* contain inline links to relevant BoFU pages (e.g., linking the word "cabinet refinishing" to `/services/cabinet-refinishing`).
* **The Bottom CTA:** Every guide must end with a clear transition from education to action, prompting the user to request a walkthrough.

### Technical Implementation (For the Developer)
Adding a new guide requires zero structural changes to the codebase. It is entirely data-driven:

1. **Open the Data File:** Navigate to `apps/website/src/lib/data/guidePages.ts`.
2. **Add a New Object:** Duplicate an existing guide object and fill in the new content:
   ```typescript
   {
     slug: "new-guide-url",
     title: "SEO Meta Title Here",
     metaDescription: "A short summary for Google.",
     h1: "The Main Headline",
     content: [
       "Paragraph 1 goes here...",
       "Paragraph 2 goes here..."
     ],
     relatedServices: ["exterior-painting"] // This automatically builds the bridge to BoFU pages!
   }
   ```
3. **Deploy:** The moment this file is updated, Next.js will automatically generate the new static page at `/guides/new-guide-url`, inject the proper SEO Schema (JSON-LD), and update the sitemap.
