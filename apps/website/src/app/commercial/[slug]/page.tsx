import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schema";
import { servicePages } from "@/lib/data/servicePages";
import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return servicePages
    .filter((s) => s.persona === "commercial" || s.persona === "both")
    .map((service) => ({
      slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicePages.find(
    (s) => s.slug === resolvedParams.slug && (s.persona === "commercial" || s.persona === "both")
  );
  if (!service) return {};

  return {
    title: `${service.name} for Commercial Properties | 4 The Love of Color`,
    description: service.metaDescription,
    alternates: {
      canonical: `/commercial/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `https://www.fortheloveofcolor.com/commercial/${service.slug}`,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default async function CommercialServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicePages.find(
    (s) => s.slug === resolvedParams.slug && (s.persona === "commercial" || s.persona === "both")
  );

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Commercial Services", item: "/commercial" },
    { name: service.name, item: `/commercial/${service.slug}` },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.metaDescription,
    url: `/commercial/${service.slug}`,
    image: service.image || "/images/logo.png",
  });

  const faqSchema = service.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema ? [breadcrumbSchema, serviceSchema, faqSchema] : [breadcrumbSchema, serviceSchema]).replace(/</g, "\\u003c"),
        }}
      />
      <ServicePageLayout service={service} persona="commercial" />
      <Footer />
    </>
  );
}
