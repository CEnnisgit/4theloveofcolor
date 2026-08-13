# Philosophical Spec: The Local Authority Landing Page

## The Core Philosophy
The location pages (`/locations/[citySlug]/[serviceSlug]`) are the ultimate "Bottom of Funnel" landing pages. 
When a user arrives here, they didn't just type "painting company." They typed something highly specific like *"cabinet refinishing lakewood ranch"*. 

**Their State of Mind:** High intent, ready to buy, but highly skeptical. 
**The Industry Problem:** 99% of painting contractors use automated SEO software to generate "doorway pages." These pages take one generic block of text and robotically swap out the city name 50 times (e.g., *"We are the best painters in [City]. If you need [City] painters, call our [City] team!"*). Humans instantly recognize this as spam, and Google increasingly penalizes it.

**Our Goal:** To create a page that feels like a bespoke, handcrafted love letter to that specific city, while seamlessly leveraging the high-end `ServicePageLayout.tsx` we already built for the main site. It must prove **Local Authenticity** and **Artisan Authority**.

---

## The Spec Wireframe (Top to Bottom)

Since we are reusing the `ServicePageLayout.tsx`, the left 30% of the screen will feature our sticky navigation menu, ensuring the user can easily hop between services. The right 70% of the screen will flow as follows:

### 1. The "Local Authority" Hero
* **Visuals:** The asymmetric hero layout we established, featuring a massive, premium photo of the service.
* **Copy:** `[Service Name] in [City Name], FL`. 
* **The Hook:** A dynamic subtitle that immediately establishes local presence. (e.g., *"Bringing meticulous craftsmanship to the homes of [City Name]."*).
* **Trust Badges:** A subtle banner below the hero indicating licensing, insurance, or "Serving Manatee & Sarasota Counties."

### 2. The "Climate & Architecture" Context (The Anti-Spam section)
*Instead of just saying "we paint houses here," we want to prove we understand the specific environmental and architectural needs of the region.*
* **Content:** A brief, highly authoritative paragraph that intersects the service with Florida's reality. 
* **Example:** *"Whether it's combating intense UV fading, sealing against salt air, or navigating strict HOA color palettes, our exterior applications are engineered specifically for the Gulf Coast climate."*
* **Why it works:** This is pure E-E-A-T (Experience, Expertise, Authority, Trust). It shows we are local experts, not a national lead-generation algorithm.

### 3. The "Proven Process" Grid
* **What it is:** We will re-use the 4-step process grid we built for the main service pages.
* **Why it works:** It proves that we don't just "wing it." We have a rigid, professional system that guarantees a flawless finish every time.

### 4. The Local Portfolio (Masonry Grid)
* **What it is:** A masonry grid of stunning photos related to the specific service. 
* **The Twist:** We will add subtle captions to the photos that reference the region (e.g., *"Recent cabinet restoration in a nearby community"*).

### 5. The "Homeowner Questions" (Our New FAQs!)
* **What it is:** This is where we inject the incredible, audited FAQ batches we generated last night. 
* **The Magic:** As we established, the header above this section will dynamically read **"[City Name] Homeowner Questions"**, and the hidden JSON-LD schema will dynamically append `(Serving [City Name])` for Google's bots. The answers themselves will remain the pristine, matrix-safe, "Artisan Authority" responses.

### 6. The Local Call-to-Action
* **Visuals:** A dark, high-contrast block (Ink or Terracotta).
* **Copy:** *"Ready to transform your [City Name] property? Let's schedule a walkthrough."*

---

## Open Questions for You:
1. **The Hero Image:** Currently, the location pages try to pull a specific image from the `servicePages.ts` database. If one isn't found, it falls back to the generic logo. Are you okay with us using the high-quality photos from the main service pages as the hero images for these local pages?
2. **The "Climate Context" Section:** Do you want me to write a dynamic paragraph for this section that adapts slightly based on whether the service is Interior, Exterior, or Prep? (e.g. Interior focuses on humidity and lifestyle, Exterior focuses on sun and salt).
3. **Approval:** Does this structural wireframe align with the premium aesthetic you want for the location pages?
