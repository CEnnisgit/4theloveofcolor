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
import { servicePages } from "@/lib/data/servicePages";
import { Phone, CheckCircle2, AlertTriangle, HelpCircle, Building2 } from "lucide-react";

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
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema ? [breadcrumbSchema, serviceSchema, faqSchema] : [breadcrumbSchema, serviceSchema]).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main className="flex-1 pb-16 lg:pb-24">
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
                    <BreadcrumbLink href="/commercial">Commercial</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{service.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta flex items-center gap-2">
              <Building2 className="w-4 h-4 text-terracotta" />
              Commercial & HOA • {service.serviceType}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
              {service.name.toLowerCase().startsWith("commercial")
                ? `${service.name} in Sarasota & Manatee County`
                : `Commercial ${service.name} in Sarasota & Manatee County`}
            </h1>
            
            <div className="space-y-4 pt-4">
              {service.intro.map((paragraph, index) => (
                <p key={index} className={`text-ink-muted leading-relaxed ${index === 0 ? 'text-lg sm:text-xl font-medium text-ink' : 'text-base'}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {service.image && (
            <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-[var(--radius)] overflow-hidden shadow-2xl bg-ink border border-ink/10">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </section>

        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-16 lg:space-y-24">
            
            {service.process && service.process.length > 0 && (
              <div className="space-y-10">
                <div className="border-b border-ink/10 pb-6">
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-3">
                    Commercial Execution Plan
                  </h2>
                  <p className="text-ink-muted text-lg">Minimal tenant disruption, clear scopes, and strict safety compliance.</p>
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

            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-10">
                <div className="border-b border-ink/10 pb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-ink" />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                      Commercial & HOA FAQs
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
                  <h3 className="font-serif text-2xl font-bold text-ink mb-6">Commercial Specs</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-ink block mb-2">Scheduling</span>
                      <p className="text-sm text-ink-muted font-medium">Off-hours, weekend & phased schedules available</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-ink block mb-2">Property Types</span>
                      <p className="text-sm text-ink-muted font-medium">HOA Communities, Retail, Office & Medical</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="font-bold text-ink mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    Commercial Guarantee
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-ink-muted">
                      <span className="text-terracotta font-bold mt-0.5">•</span>
                      <span>Written scope & guaranteed completion timeline</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-ink-muted">
                      <span className="text-terracotta font-bold mt-0.5">•</span>
                      <span>Full commercial liability & workers compensation coverage</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-ink-muted">
                      <span className="text-terracotta font-bold mt-0.5">•</span>
                      <span>Daily site cleanup & containment management</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 bg-ink text-white mt-auto">
                  <h4 className="font-serif text-xl font-bold mb-3">Request Commercial RFP</h4>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    Contact us for a detailed site walkthrough and written commercial bid.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href={`/contact?service=${service.slug}&type=commercial`}
                      className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 w-full rounded-[var(--radius)] hover:bg-[var(--color-terracotta-dark)] active:scale-[0.99] transition-all flex items-center justify-center text-center shadow-md"
                    >
                      Request Commercial Bid
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
