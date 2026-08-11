# 1. Scalable JSON-LD Schema Architecture

* **Status**: Accepted
* **Date**: 2026-08-11
* **Context**: The site requires rich Google search snippets (LocalBusiness, BreadcrumbList, Service, WebPage) to rank effectively for local painting keywords across Lakewood Ranch, Sarasota, and Bradenton. Hardcoding static JSON-LD strings on every page is error-prone, duplicates NAP metadata, and fails to scale as new subpages, portfolio projects, and micro-services are added.

## Decision

We created a centralized schema utility module at `@/lib/seo/schema.ts` that acts as a typed JSON-LD factory:

1. **`getOrganizationSchema()`**: Dynamically constructs the `HomeAndConstructionBusiness` schema utilizing core business constants (`business`, `contact`, `serviceCities`).
2. **`getBreadcrumbSchema(items)`**: Converts an array of breadcrumb items into Google-compliant `BreadcrumbList` schema.
3. **`getServiceSchema(service)`**: Generates `Service` schema linking provider context back to the organization `@id`.
4. **`getWebPageSchema(title, description, url)`**: Generates structured `WebPage` metadata.

## Consequences

* **Pros**:
  * Single source of truth for business NAP, phone numbers, and service areas.
  * Adding Google-compliant JSON-LD to any new route takes 1 line of code.
  * Prevents syntax errors in script tags by using automated JSON stringification.
* **Cons**:
  * Requires maintaining `@/lib/data/content.ts` as the authoritative source for company information.
