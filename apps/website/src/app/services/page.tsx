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
  title: "Painting Services | Interior, Exterior & Cabinet Refinishing in Sarasota",
  description:
    "Explore our complete painting services in Lakewood Ranch, Sarasota, and Bradenton, FL. Premium interior walls, UV-resistant exterior coating, custom cabinet refinishing, and commercial painting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Painting & Refinishing Services | 4 The Love of Color Painting",
    description:
      "Interior, exterior, cabinet refinishing, and commercial painting across Lakewood Ranch, Sarasota, and Florida's Suncoast.",
    url: "https://www.fortheloveofcolor.com/services",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Services", item: "/services" },
  ]);

  const webPageSchema = getWebPageSchema(
    "Painting & Refinishing Services | 4 The Love of Color Painting",
    "Explore our complete painting services in Lakewood Ranch, Sarasota, and Bradenton, FL. Premium interior walls, UV-resistant exterior coating, custom cabinet refinishing, and commercial painting.",
    "/services"
  );

  const serviceSchemas = servicePages.map((service) =>
    getServiceSchema({
      name: service.name,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      image: service.image || "/images/logo.png",
    })
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

      <main className="flex-1">
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
                  <BreadcrumbPage>Services</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Painting &amp; Refinishing Services
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl font-medium">
            From detailed interior room refreshes to weather-tested exterior coatings, explore our family-owned painting services built for Florida&apos;s Suncoast climate.
          </p>
        </section>

        {/* Elegant Hub Menu */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {servicePages.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col bg-warm-card border border-ink/10 rounded-[var(--radius)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {service.image && (
                <div className="relative h-64 w-full overflow-hidden bg-ink">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
              )}
              
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-3 block">
                  {service.name}
                </span>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ink mb-4 leading-tight">
                  {service.h1.replace(" in Lakewood Ranch & Sarasota.", "")}
                </h2>
                <p className="text-ink-muted leading-relaxed text-sm mb-8 flex-1">
                  {service.intro[0]}
                </p>
                
                <div className="flex items-center text-ink font-bold text-xs uppercase tracking-widest group-hover:text-terracotta transition-colors mt-auto">
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Rich Dark Espresso CTA Section */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="bg-ink text-white p-8 sm:p-12 lg:p-16 rounded-[var(--radius)] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
                Direct Family Service
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                Ready to transform your home or commercial space?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                Schedule a free on-site walkthrough with Edwin and our family crew for a clear, written estimate with zero pressure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 px-7 hover:bg-[var(--color-terracotta-dark)] active:scale-[0.99] transition-all rounded-[var(--radius)] shadow-md inline-flex items-center justify-center text-center"
              >
                Request Free Estimate
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
