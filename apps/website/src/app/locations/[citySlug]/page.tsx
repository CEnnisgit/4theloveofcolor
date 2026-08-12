import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { contact } from "@/lib/data/content";
import { cityPages } from "@/lib/data/cityPages";
import { servicePages } from "@/lib/data/servicePages";
import { MapPin, Phone, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return cityPages.map((city) => ({
    citySlug: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ citySlug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const city = cityPages.find((c) => c.slug === resolvedParams.citySlug);
  if (!city) return {};

  return {
    title: city.title,
    description: city.metaDescription,
    alternates: {
      canonical: `/locations/${city.slug}`,
    },
    openGraph: {
      title: city.title,
      description: city.metaDescription,
      url: `https://www.fortheloveofcolor.com/locations/${city.slug}`,
    },
  };
}

export default async function CityHubPage({ params }: { params: Promise<{ citySlug: string }> }) {
  const resolvedParams = await params;
  const city = cityPages.find((c) => c.slug === resolvedParams.citySlug);

  if (!city) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Locations", item: "/locations/lakewood-ranch" },
    { name: city.city, item: `/locations/${city.slug}` },
  ]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "name": `4 The Love of Color Painting - ${city.city}`,
    "description": city.metaDescription,
    "url": `https://www.fortheloveofcolor.com/locations/${city.slug}`,
    "telephone": contact.phone,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${city.city}, ${city.county}, FL`
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, localBusinessSchema]).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main className="flex-1 pb-16 lg:pb-24">
        {/* City Hero */}
        <section className="px-4 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-20 max-w-7xl mx-auto flex flex-col items-start space-y-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{city.city}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta flex items-center gap-2">
            <MapPin className="w-4 h-4 text-terracotta" />
            {city.county} Service Area
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight max-w-4xl">
            {city.h1}
          </h1>

          <div className="max-w-3xl space-y-4 pt-2">
            {city.intro.map((p, i) => (
              <p key={i} className={`text-ink-muted leading-relaxed ${i === 0 ? 'text-xl font-medium text-ink' : 'text-base'}`}>
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Local Considerations */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="bg-white border border-ink/10 rounded-[var(--radius)] p-8 lg:p-12 shadow-sm space-y-8">
            <h2 className="font-serif text-3xl font-bold text-ink">
              Painting in {city.city}: Local Factors We Scope For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {city.considerations.map((item, i) => (
                <div key={i} className="bg-warm-card p-6 rounded-[var(--radius)] border border-ink/10 space-y-2">
                  <h3 className="font-bold text-ink text-lg flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-terracotta" />
                    {item.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services in this City Matrix */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-20 space-y-8">
          <div className="border-b border-ink/10 pb-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-2">
              Our Services in {city.city}
            </h2>
            <p className="text-ink-muted text-base">Select a service to view local specs, prep process, and pricing guidance.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((service) => (
              <Link
                key={service.slug}
                href={`/locations/${city.slug}/${service.slug}`}
                className="bg-white p-8 rounded-[var(--radius)] border border-ink/10 shadow-sm hover:shadow-md hover:border-terracotta transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta">
                    {city.city} • {service.serviceType}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-terracotta transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-ink-muted text-sm line-clamp-3 leading-relaxed">
                    {service.intro[0]}
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink group-hover:text-terracotta">
                  <span>View {city.city} Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Neighborhoods Served */}
        {city.areas && city.areas.length > 0 && (
          <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-20">
            <div className="bg-warm-card border border-ink/10 rounded-[var(--radius)] p-8 lg:p-12 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
                <MapPin className="w-6 h-6 text-terracotta" />
                Neighborhoods & Subdivisions We Serve in {city.city}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {city.areas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-ink">
                    <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="px-4 lg:px-8 max-w-4xl mx-auto text-center space-y-6 bg-ink text-white p-12 rounded-[var(--radius)] shadow-xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready to Paint Your {city.city} Home?
          </h2>
          <p className="text-white/80 text-base max-w-xl mx-auto leading-relaxed">
            {city.closing}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-[var(--radius)] hover:bg-[var(--color-terracotta-dark)] transition-all shadow-md w-full sm:w-auto"
            >
              Request Free Walkthrough
            </Link>
            <a
              href={contact.phoneHref}
              className="border border-white/20 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-[var(--radius)] flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              <span>Call {contact.phone}</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
