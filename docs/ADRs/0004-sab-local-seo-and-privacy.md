# 0004. Local SEO Privacy (SAB Pattern)

## Status
Accepted (2026-08-11)

## Context and Problem Statement
The legal registration for "4 THE LOVE OF COLOR LLC" points to a private residential address (Westbrook Circle, Bradenton, FL). Exposing this address publicly on the website or within the SEO structured data presents a severe privacy risk for the family-owned business. However, strong local SEO rankings require verifiable entity location data so Google can rank the business in local searches (e.g., "painters in Lakewood Ranch"). We needed a strategy to satisfy Google's local indexing algorithms without compromising the owner's home address.

## Considered Options
*   **Publish the Full Address:** Excellent for SEO, but violates privacy and exposes the home address.
*   **Omit All Location Data:** Protects privacy, but destroys any chance of ranking for local search intents, which is critical for a local contractor.
*   **Service Area Business (SAB) Schema:** Hides the physical address but broadcasts the service radius using `areaServed` in JSON-LD.

## Decision Outcome
Chosen option: **Service Area Business (SAB) Schema**. 
We implemented a strict SAB SEO strategy. The legal street address will not be published anywhere in the public HTML or JSON-LD. To manage this safely, we created an ignored `business-secrets.json` file to store the sensitive legal registration data locally (keeping it out of git entirely). The JSON-LD schema explicitly uses the `areaServed` property to broadcast the target regions (Lakewood Ranch, Sarasota, Bradenton). 

## Consequences
*   **Good, because** there is zero risk of exposing the owner's home address online or in the codebase.
*   **Good, because** it fully complies with Google Business Profile guidelines for businesses that travel to customers.
*   **Good, because** the JSON-LD payload is highly targeted to the exact affluent neighborhoods the business wants to rank in.
*   **Bad, because** SABs sometimes face a slight inherent ranking disadvantage against brick-and-mortar competitors with physical storefronts in the exact center of a search area.
