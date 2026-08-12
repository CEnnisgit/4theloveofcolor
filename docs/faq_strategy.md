# Fact-Based SEO FAQ Strategy

This document governs how 4 The Love of Color generates and implements Frequently Asked Questions across the website. FAQs are not filler content; they are targeted SEO assets designed to capture localized "People Also Ask" (PAA) search traffic and eliminate psychological friction for potential clients.

## 1. The Factual Accuracy Rule (Zero Hallucination)
* **No AI Inference:** AI agents and content writers are strictly forbidden from inferring service guarantees (e.g., warranties, timelines, after-hours policies, cost ranges).
* **Source of Truth:** Every FAQ answer must be directly traceable to client interviews, `business-secrets.json`, or explicitly provided directives. If a specific detail is unknown, the FAQ must either be omitted or direct the user to contact the team for a custom assessment.

## 2. The Localized SEO Rule (Bypassing Giants)
Generic FAQs (e.g., "How much does painting cost?") are highly saturated by national lead-generation sites (Angi, HomeAdvisor). To rank locally, FAQs must be long-tail and hyper-localized.
* **Bad FAQ:** "How much does it cost to paint a house?"
* **Good FAQ:** "How much does it cost to paint a stucco house in Lakewood Ranch?"
* **Implementation:** We write base questions targeting regional factors (Florida humidity, stucco, HOA rules) in `servicePages.ts`, and our Next.js architecture dynamically injects the specific city name (e.g., Sarasota, Bradenton) into the FAQ schema on the location matrix pages.

## 3. The Psychological Ordering Rule
FAQs must be ordered on the page based on what creates the most friction for a homeowner to pick up the phone:
1. **The Cost/ROI Question:** The elephant in the room. Even if we cannot give a fixed price, we must explain *how* the cost is calculated (e.g., square footage, prep required, paint tier) and offer a free written estimate. Transparency builds immediate trust.
2. **The Disruption Question:** Timelines, living arrangements, moving furniture. Alleviating the fear of living in a construction zone.
3. **The Quality/Fear Question:** Addressing durability, peeling, Florida weather, and guarantees.

## 4. The Repeatable Batch Workflow (SOP)
To ensure we can scale this across all services without losing quality or bottlenecking, we use a repeatable batch process:

**Step 1: The AI Research Phase**
* The AI Assistant identifies a "Batch" of 3-4 related services (e.g., "The Commercial Batch").
* The AI searches Google for localized "People Also Ask" (PAA) snippets for each service.
* The AI drafts 3 questions per service, strictly ordered by the Psychological Ordering Rule (Cost/ROI -> Disruption -> Quality/Fear).
* The AI presents the blank questionnaire to the human strategist.

**Step 2: The AI Fact-Finding Phase**
* The AI Assistant researches standard high-end painting practices in Florida (or pulls from existing project documentation) to draft the answers.
* The AI drafts short, 2-3 sentence authentic answers. 
* *Crucial:* If a cost question is asked, the answer must explain *how* the cost is calculated (square footage, prep, materials) rather than giving fixed prices.
* The AI presents the completed Q&A pairs to the human strategist for review.

**Step 3: The Human Approval & AI Injection Phase**
* The human strategist reviews the drafted answers and approves them (or requests tweaks).
* The AI Assistant injects the approved answers into `apps/website/src/lib/data/servicePages.ts`.
* The Next.js architecture automatically generates the JSON-LD FAQ schema and localized strings for all city pages on the next build.
