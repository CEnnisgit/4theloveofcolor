import type { Metadata } from "next";
import Image from "next/image";
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
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo/schema";
import { contact } from "@/lib/data/content";
import { cityPages } from "@/lib/data/cityPages";
import { servicePages } from "@/lib/data/servicePages";
import { Phone, CheckCircle2, AlertTriangle, HelpCircle, MapPin } from "lucide-react";

export function generateStaticParams() {
  const paramsList: { citySlug: string; serviceSlug: string }[] = [];
  for (const city of cityPages) {
    for (const service of servicePages) {
      paramsList.push({
        citySlug: city.slug,
        serviceSlug: service.slug,
      });
    }
  }
  return paramsList;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string; serviceSlug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const city = cityPages.find((c) => c.slug === resolvedParams.citySlug);
  const service = servicePages.find((s) => s.slug === resolvedParams.serviceSlug);
  if (!city || !service) return {};

  const title = `${service.name} in ${city.city}, FL | 4 The Love of Color`;
  const description = `${service.name} in ${city.city}, FL (${city.county}). High-grade coatings, surface prep, and written estimates.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${city.slug}/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.fortheloveofcolor.com/locations/${city.slug}/${service.slug}`,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default async function CityServiceMatrixPage({
  params,
}: {
  params: Promise<{ citySlug: string; serviceSlug: string }>;
}) {
  const resolvedParams = await params;
  const city = cityPages.find((c) => c.slug === resolvedParams.citySlug);
  const service = servicePages.find((s) => s.slug === resolvedParams.serviceSlug);

  if (!city || !service) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Locations", item: "/locations/lakewood-ranch" },
    { name: city.city, item: `/locations/${city.slug}` },
    { name: service.name, item: `/locations/${city.slug}/${service.slug}` },
  ]);

  const serviceSchema = getServiceSchema({
    name: `${service.name} in ${city.city}, FL`,
    description: service.metaDescription,
    url: `/locations/${city.slug}/${service.slug}`,
    image: service.image || "/images/logo.png",
  });

  const faqSchema = service.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": `${faq.question} (Serving ${city.city})`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema ? [breadcrumbSchema, serviceSchema, faqSchema] : [breadcrumbSchema, serviceSchema]).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main className="flex-1 pb-16 lg:pb-24">
        {/* Asymmetric Hero Header */}
        <section className="px-4 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
            <div className="mb-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={`/locations/${city.slug}`}>{city.city}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{service.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta flex items-center gap-2">
              <MapPin className="w-4 h-4 text-terracotta" />
              {city.city}, FL • {service.serviceType}
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
              {service.name} in {city.city}, Florida
            </h1>
            
            <div className="space-y-4 pt-4">
              <p className="text-lg sm:text-xl font-medium text-ink leading-relaxed">
                Looking for professional {service.name.toLowerCase()} in {city.city}? We specialize in {city.county} homes and properties, delivering thorough preparation, flexible scheduling, and written price guarantees.
              </p>
              {service.intro.map((paragraph, index) => (
                <p key={index} className="text-ink-muted text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {service.image && (
            <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-[var(--radius)] overflow-hidden shadow-2xl bg-ink border border-ink/10">
              <Image
                src={service.image}
                alt={`${service.name} in ${city.city}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </section>

        {/* Content Grid */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-16 lg:space-y-24">
            
            {/* Local Considerations Box */}
            <div className="bg-white p-8 rounded-[var(--radius)] border border-ink/10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
                <MapPin className="w-5 h-5 text-terracotta" />
                Why {service.name} Matters in {city.city}
              </h2>
              <div className="space-y-4 text-ink-muted leading-relaxed text-sm sm:text-base">
                {city.considerations.map((c, i) => (
                  <div key={i} className="border-b border-ink/5 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-bold text-ink mb-1">{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Focus Areas */}
            {service.process && service.process.length > 0 && (
              <div className="space-y-10">
                <div className="border-b border-ink/10 pb-6">
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
                    Our {service.name} Process
                  </h2>
                  <p className="text-ink-muted text-lg">Every step is engineered to withstand {city.city}&apos;s weather and sun exposure.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {service.process.map((step, i) => (
                    <div key={i} className="bg-warm-card p-8 rounded-[var(--radius)] border border-ink/10 shadow-sm flex flex-col gap-4 group hover:border-terracotta/50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-ink text-xl mb-2">{step.title}</h3>
                        <p className="text-ink-muted leading-relaxed text-sm sm:text-base">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Questions */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-10">
                <div className="border-b border-ink/10 pb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-ink" />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                      {city.city} Homeowner Questions
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-warm-card p-6 sm:p-8 rounded-[var(--radius)] border border-ink/10 space-y-3">
                      <h3 className="font-bold text-ink text-lg">{faq.question}</h3>
                      <p className="text-ink-muted leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white border border-ink/10 rounded-[var(--radius)] shadow-lg overflow-hidden flex flex-col">
                <div className="p-8 bg-warm-card border-b border-ink/10">
                  <h3 className="font-serif text-2xl font-bold text-ink mb-6">{city.city} Project Dossier</h3>
                  <div className="space-y-4 text-sm text-ink-muted">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-ink block mb-1">Service Area</span>
                      <p className="font-medium text-ink">{city.city}, {city.county}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-ink block mb-1">Neighborhoods</span>
                      <p className="line-clamp-2">{city.areas.join(", ")}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-ink text-white">
                  <h4 className="font-serif text-xl font-bold mb-3">Schedule a {city.city} Walkthrough</h4>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    Free on-site estimate in {city.city}. No obligation, written price guarantee.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href={`/contact?city=${city.slug}&service=${service.slug}`}
                      className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 w-full rounded-[var(--radius)] hover:bg-[var(--color-terracotta-dark)] active:scale-[0.99] transition-all flex items-center justify-center text-center shadow-md"
                    >
                      Request Free Estimate
                    </Link>
                    <a
                      href={contact.phoneHref}
                      className="border border-white/20 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-12 w-full rounded-[var(--radius)] flex items-center justify-center text-center gap-2 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {contact.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
