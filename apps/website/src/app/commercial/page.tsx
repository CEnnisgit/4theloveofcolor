import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
import {
  getBreadcrumbSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/lib/seo/schema";
import { contact } from "@/lib/data/content";
import { servicePages } from "@/lib/data/servicePages";
import { Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Painting Services | HOA & B2B Painters in Sarasota",
  description:
    "Professional commercial painting and refinishing for property managers, HOAs, and businesses across Lakewood Ranch, Sarasota, and Bradenton.",
  alternates: {
    canonical: "/commercial",
  },
  openGraph: {
    title: "Commercial Painting Services | 4 The Love of Color Painting",
    description:
      "Reliable, on-time commercial painting services tailored for property managers and business owners across Florida's Suncoast.",
    url: "https://www.fortheloveofcolor.com/commercial",
  },
};

export default function CommercialServicesPage() {
  const commercialServices = servicePages.filter((s) => s.persona === "commercial" || s.persona === "both");
  const coreServices = commercialServices.filter((s) => s.category === "core");
  const maintenanceServices = commercialServices.filter((s) => s.category !== "core");

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Commercial Services", item: "/commercial" },
  ]);

  const webPageSchema = getWebPageSchema(
    "Commercial Painting Services | 4 The Love of Color Painting",
    "Professional commercial painting and refinishing for property managers, HOAs, and businesses across Lakewood Ranch, Sarasota, and Bradenton.",
    "/commercial"
  );

  const serviceSchemas = commercialServices.map((service) =>
    getServiceSchema({
      name: service.name,
      description: service.metaDescription,
      url: `/commercial/${service.slug}`,
      image: service.image || "/images/logo.png",
    })
  );

  const renderServiceCard = (service: typeof commercialServices[0]) => (
    <Link
      key={service.slug}
      href={`/commercial/${service.slug}`}
      className="group flex flex-col bg-warm-card border border-ink/10 rounded-[var(--radius)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {service.image && (
        <div className="relative h-48 w-full overflow-hidden bg-ink">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl font-bold text-ink mb-3 leading-tight">
          {service.name}
        </h3>
        <p className="text-ink-muted leading-relaxed text-sm mb-6 flex-1 line-clamp-3">
          {service.intro[0]}
        </p>
        
        <div className="flex items-center text-ink font-bold text-xs uppercase tracking-widest group-hover:text-terracotta transition-colors mt-auto">
          <span>View Details</span>
          <ArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema,
            webPageSchema,
            ...serviceSchemas,
          ]).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main className="flex-1 pb-16 lg:pb-24">
        {/* Subpage Hero Section */}
        <section className="px-4 lg:px-8 pt-10 pb-8 lg:pt-14 lg:pb-12 max-w-7xl mx-auto flex flex-col items-start w-full">
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Commercial Services</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Services for Businesses & HOAs
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl font-medium">
            We understand the demands of commercial properties. We deliver durable finishes, strict safety protocols, and minimal disruption to your tenants or operations.
          </p>
        </section>

        {/* Core Commercial Painting */}
        {coreServices.length > 0 && (
          <section className="px-4 lg:px-8 pb-12 max-w-7xl mx-auto w-full">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ink mb-6 border-b border-ink/10 pb-4">
              Core Commercial Painting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {coreServices.map(renderServiceCard)}
            </div>
          </section>
        )}

        {/* Property Maintenance & Prep */}
        {maintenanceServices.length > 0 && (
          <section className="px-4 lg:px-8 pb-12 max-w-7xl mx-auto w-full">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ink mb-6 border-b border-ink/10 pb-4">
              Property Maintenance &amp; Prep
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {maintenanceServices.map(renderServiceCard)}
            </div>
          </section>
        )}

        {/* Rich Dark Espresso CTA Section */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="bg-ink text-white p-8 sm:p-12 lg:p-16 rounded-[var(--radius)] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
                Professional B2B Painting
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                Need a reliable contractor for your property?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                Schedule a site walkthrough to discuss your timeline, specs, and requirements. We provide detailed, written bids tailored to your operational needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 px-7 hover:bg-[var(--color-terracotta-dark)] active:scale-[0.99] transition-all rounded-[var(--radius)] shadow-md inline-flex items-center justify-center text-center"
              >
                Request Bid Walkthrough
              </Link>
              <a
                href={contact.phoneHref}
                className="border-2 border-white/40 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-[var(--radius)] inline-flex items-center justify-center text-center flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {contact.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
