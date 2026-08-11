import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schema";
import { macroServices } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Painting Services | Interior, Exterior & Cabinet Refinishing in Sarasota",
  description:
    "Explore our complete painting services in Lakewood Ranch, Sarasota, and Bradenton, FL. Premium interior walls, UV-resistant exterior coating, custom cabinet refinishing, and commercial painting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Painting Services | 4 The Love of Color Painting",
    description:
      "Interior, exterior, cabinet refinishing, and commercial painting across Florida's Suncoast.",
    url: "https://www.fortheloveofcolor.com/services",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Services", item: "/services" },
  ]);

  const serviceSchemas = macroServices.map((service) =>
    getServiceSchema({
      name: service.title,
      description: service.description,
      url: `/services#${service.slug}`,
      image: service.image,
    })
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, ...serviceSchemas]).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main className="flex-1">
        {/* Subpage Hero Section */}
        <section className="px-4 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16 max-w-7xl mx-auto flex flex-col items-start w-full">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Services</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Pill Tag */}
          <div className="w-52 sm:w-60 h-9 mb-6 flex items-center justify-center rounded-[var(--radius)] bg-ink text-white text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-center">
            Our Services
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Macro &amp; Specialized Painting Services
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl font-medium">
            From comprehensive interior transformations to exterior climate protection and custom cabinet refinishing, explore how we approach every project on the Suncoast.
          </p>
        </section>

        {/* Macro Services Grid Stub */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {macroServices.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="p-8 border border-ink/10 rounded-[var(--radius)] bg-white space-y-4 shadow-sm"
              >
                <span className="text-xs uppercase font-bold text-terracotta tracking-widest">
                  Macro Service
                </span>
                <h2 className="font-serif text-2xl font-bold text-ink">{service.title}</h2>
                <p className="text-sm text-ink-muted leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="p-8 sm:p-12 border border-ink/10 rounded-[var(--radius)] bg-warm-bg text-center space-y-4">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
              Service Deep-Dives
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Full Micro-Service Deep Dives Coming in Phase 4
            </h2>
            <p className="text-sm text-ink-muted max-w-xl mx-auto leading-relaxed">
              We are expanding each macro service category with individual surface prep guides, paint grade options (Sherwin-Williams Emerald / Benjamin Moore Aura), warranty details, and local climate resistance specs.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
