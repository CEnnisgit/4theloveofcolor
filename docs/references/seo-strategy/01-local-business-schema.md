# SEO & JSON-LD Strategy

## Local Business / Service Area Business (SAB) Optimization

To ensure **4theloveofcolor** ranks correctly for local SEO in Florida without compromising the owner's privacy, we must configure the JSON-LD structured data specifically for a **Service Area Business (SAB)**.

### Critical Constraints
- **NO Public Address:** The official registered LLC address (Bradenton, FL) is a home address. Google Business Profile and JSON-LD guidelines require that if a business does not receive customers at its address, the physical street address **must be hidden**. 
- **Focus on Service Areas:** Instead of a fixed location, the SEO structured data will declare an `areaServed` property covering the explicit target regions.

### Public Business Information (For Footer & JSON-LD)
* **Domain:** `fortheloveofcolor.com`
* **Phone:** (917) 584-0069
* **Email:** 4theloveofcolorpainting@gmail.com
* **Hours:** Mon–Sat, 8am–6pm
* **Primary Target:** Lakewood Ranch, FL
* **Surrounding Target (Suncoast):** Sarasota, Bradenton, Palmetto, Parrish, Venice, Osprey.

### Example SAB JSON-LD Schema
When we build the Next.js `layout.tsx` or `page.tsx`, we will inject this script into the `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "4 THE LOVE OF COLOR LLC",
  "alternateName": "4 The Love of Color Painting",
  "url": "https://www.fortheloveofcolor.com",
  "telephone": "+19175840069",
  "email": "4theloveofcolorpainting@gmail.com",
  "image": "https://www.fortheloveofcolor.com/images/logo.png",
  "areaServed": [
    {
      "@type": "City",
      "name": "Lakewood Ranch",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Sarasota",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    },
    {
      "@type": "City",
      "name": "Bradenton",
      "containedInPlace": {
        "@type": "State",
        "name": "Florida"
      }
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
}
```
*Note: Because we are an SAB, the `address` field is intentionally omitted from the schema.*
