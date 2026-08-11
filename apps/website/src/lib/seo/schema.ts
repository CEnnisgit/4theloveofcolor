import { business, contact, serviceCities } from "@/lib/data/content";

const BASE_URL = "https://www.fortheloveofcolor.com";

/**
 * Global Organization / HomeAndConstructionBusiness Schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${BASE_URL}/#organization`,
    "name": "4 THE LOVE OF COLOR LLC",
    "alternateName": "4 The Love of Color Painting",
    "url": BASE_URL,
    "telephone": contact.phone,
    "email": contact.email,
    "logo": `${BASE_URL}/images/logo.png`,
    "image": `${BASE_URL}/images/logo.png`,
    "description":
      "Family-owned interior and exterior painting for homes and businesses across Lakewood Ranch, Sarasota, and the Suncoast of Florida.",
    "priceRange": "$$",
    "areaServed": serviceCities.map((city) => ({
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": "Florida",
      },
    })),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "08:00",
      "closes": "18:00",
    },
    "knowsAbout": [
      "Interior Painting",
      "Exterior Painting",
      "Cabinet Refinishing",
      "Commercial Painting",
      "Color Consultation",
      "Pressure Washing",
    ],
  };
}

export interface BreadcrumbItemSchema {
  name: string;
  item: string;
}

/**
 * Scalable BreadcrumbList Schema Generator
 */
export function getBreadcrumbSchema(items: BreadcrumbItemSchema[]) {
  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": BASE_URL,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": item.item.startsWith("http") ? item.item : `${BASE_URL}${item.item}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement,
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  image?: string;
}

/**
 * Scalable Service Schema Generator
 */
export function getServiceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@id": `${BASE_URL}/#organization`,
    },
    "url": service.url.startsWith("http") ? service.url : `${BASE_URL}${service.url}`,
    "image": service.image ? (service.image.startsWith("http") ? service.image : `${BASE_URL}${service.image}`) : undefined,
    "areaServed": serviceCities.map((city) => ({
      "@type": "City",
      "name": city,
    })),
  };
}

/**
 * WebPage Schema Generator
 */
export function getWebPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url.startsWith("http") ? url : `${BASE_URL}${url}`,
    "isPartOf": {
      "@id": `${BASE_URL}/#website`,
    },
  };
}
