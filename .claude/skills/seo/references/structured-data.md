# Structured data

JSON-LD in a `<script type="application/ld+json">`. Not microdata, not RDFa.

## What actually earns a rich result in 2026

Shipping markup that no longer produces anything is wasted effort and, worse, it makes
people believe the SEO is further along than it is.

**Currently supported by Google** (the useful subset for most sites): Breadcrumb,
Organization, Local business, Article, Product and product snippet, Review snippet, Video,
Event, Job posting, Profile page, Discussion forum, Q&A pages, Recipe, Course, Dataset,
Fact check, Software app, Vacation rental, Speakable, Image metadata, Site names.

**FAQPage rich results were removed from Google Search in May 2026.** The rollout: results
stopped appearing 7 May 2026; the Search Console filter, report, and Rich Results Test
support were removed in June 2026; the API data in August 2026. The *schema type* is still
valid and other engines may still parse it — but budget nothing for it, and never design a
content architecture whose payoff depends on FAQ rich results.

**HowTo** rich results were retired earlier and are likewise gone.

If a plan says "we'll win FAQ snippets," that plan is out of date. Say so.

## The graph pattern

Define shared entities once, reference them everywhere. Don't re-inline the whole business
object on every page.

```ts
export const ORIGIN = "https://www.example.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HousePainter",              // most specific type that fits
  "@id": `${ORIGIN}/#organization`,
  name: "Example Painting",
  url: `${ORIGIN}/`,
  logo: `${ORIGIN}/images/logo.png`,
  image: `${ORIGIN}/images/hero.jpg`,
  telephone: "+15551234567",
  email: "hello@example.com",
  description: "...",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sarasota",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Sarasota" },
    { "@type": "City", name: "Bradenton" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: ["https://www.instagram.com/example"],
};
```

Then a service page references it rather than repeating it:

```ts
{
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cabinet Refinishing",
  serviceType: "Cabinet Refinishing",
  description: "...",
  url: `${ORIGIN}/services/cabinet-refinishing`,
  provider: { "@id": `${ORIGIN}/#organization` },   // reference, not a copy
  areaServed: [{ "@type": "City", name: "Sarasota" }],
}
```

Benefits: one place to fix a phone number, smaller pages, and a coherent entity graph
rather than a thousand disconnected business objects.

## LocalBusiness specifics

**Required:** `name`, `address` (a real `PostalAddress`).
**Recommended:** `telephone`, `url`, `openingHoursSpecification`, `geo` (5+ decimal places),
`priceRange`.

Pick the **most specific type** that fits — `HousePainter`, `Plumber`, `Electrician`,
`Dentist` — rather than bare `LocalBusiness`. The schema.org hierarchy has a long list.

**Do not emit `aggregateRating` or `review` about your own business.** Google's
documentation states these are "only recommended for sites that capture reviews about other
local businesses." Self-serving review markup is a documented manual-action risk. If you
want stars in results, they come from the Google Business Profile, not from your own JSON-LD.

**Service-area businesses** (no storefront customers visit): still provide `address` — it's
required — and use `areaServed` for the coverage. Suppress the address from the *visible*
page if the owner works from home, but keep the city/region truthful. Do not invent a
street address.

## Breadcrumbs

Worth shipping — one of the few markup types that reliably still changes the SERP display.
Must match the visible breadcrumb trail on the page.

```ts
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${ORIGIN}/services` },
    { "@type": "ListItem", position: 3, name: "Cabinet Refinishing", item: url },
  ],
}
```

## Rules

- **Schema must match visible content.** Marking up text that isn't rendered is a
  guidelines violation. That includes the "clever" move of appending a city name to a
  question in JSON-LD while displaying the un-suffixed question — it's a mismatch, it's
  detectable, and since the FAQ deprecation it buys nothing anyway.
- **Never mark up a claim you can't verify.** Same rule as page copy.
- **Escape `<` when serializing.** `JSON.stringify(schema).replace(/</g, "\\u003c")`
  prevents an early `</script>` from breaking the document.
- **One FAQPage per question set, sitewide.** If the same questions appear on two URLs, you
  have duplicate structured data under two canonicals. Pick the page that owns them.
- **Validate every block.** Parse it in the audit script; run the Rich Results Test on one
  page per template.
- **Don't ship markup for a rich result that no longer exists** just because it validates.
