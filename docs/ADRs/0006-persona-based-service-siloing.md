# 0006: Persona-Based Service Siloing

## Context
Our original architecture grouped all services under a single, flat `/services/[slug]` route. This created a generic experience where homeowners and commercial property managers were forced to sift through the same list, despite having entirely different buying journeys, priorities, and constraints.

## Decision
We decided to eliminate the generic `/services` hub and implement strict persona-based siloing by splitting the architecture into two distinct routes:
1. `/residential/[slug]` - Tailored strictly to homeowners.
2. `/commercial/[slug]` - Tailored strictly to businesses, HOAs, and property managers.

## Consequences
- **Positive:** We can now tailor the messaging, imagery, and CTAs to the specific persona. For example, residential pages emphasize trust and cleanliness, while commercial pages emphasize timelines and minimal operational disruption.
- **Positive:** Easier internal linking logic and cleaner user navigation.
- **Negative:** We had to update the `servicePages.ts` data structure to include a `persona` tag (`residential`, `commercial`, or `both`) and refactor the routing logic across the application.
