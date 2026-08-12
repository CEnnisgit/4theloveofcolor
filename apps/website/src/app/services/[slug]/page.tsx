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
import { Phone, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = servicePages.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `https://www.fortheloveofcolor.com/services/${service.slug}`,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicePages.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Services", item: "/services" },
    { name: service.name, item: `/services/${service.slug}` },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.name,
    description: service.metaDescription,
    url: `/services/${service.slug}`,
    image: service.image || "/images/logo.png",
  });

  // Basic FAQ Schema if faqs exist
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
        {/* Breadcrumb & Hero Header */}
        <section className="px-4 lg:px-8 pt-10 pb-12 max-w-5xl mx-auto flex flex-col items-start w-full">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/services">Services</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{service.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta block">
              {service.serviceType}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
              {service.h1}
            </h1>
            
            <div className="space-y-4 pt-4">
              {service.intro.map((paragraph, index) => (
                <p key={index} className={`text-ink-muted leading-relaxed ${index === 0 ? 'text-lg sm:text-xl font-medium text-ink' : 'text-base'}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Optional Hero Image */}
        {service.image && (
          <section className="px-4 lg:px-8 pb-16 max-w-7xl mx-auto w-full">
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-[var(--radius)] overflow-hidden shadow-xl bg-ink border border-ink/10">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          </section>
        )}

        {/* Content Grid */}
        <section className="px-4 lg:px-8 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content Column */}
          <div className="md:col-span-8 space-y-16">
            
            {/* The Process Section */}
            {service.process && service.process.length > 0 && (
              <div className="space-y-8">
                <h2 className="font-serif text-3xl font-bold text-ink border-b border-ink/10 pb-4">
                  How we do the work
                </h2>
                <div className="space-y-8">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-warm-card border border-ink/10 flex items-center justify-center font-bold text-terracotta text-sm shadow-sm mt-1">
                        {i + 1}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-ink text-lg">{step.title}</h3>
                        <p className="text-ink-muted leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* The Problems Section */}
            {service.problems && service.problems.length > 0 && (
              <div className="space-y-8 pt-8">
                <h2 className="font-serif text-3xl font-bold text-ink border-b border-ink/10 pb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-terracotta" />
                  Signs you need this done
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.problems.map((problem, i) => (
                    <div key={i} className="bg-warm-card p-6 rounded-[var(--radius)] border border-ink/10 shadow-sm space-y-3">
                      <h3 className="font-bold text-ink">{problem.title}</h3>
                      <p className="text-sm text-ink-muted leading-relaxed">{problem.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-8 pt-8">
                <h2 className="font-serif text-3xl font-bold text-ink border-b border-ink/10 pb-4 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-ink" />
                  Common Questions
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="space-y-2">
                      <h3 className="font-bold text-ink">{faq.question}</h3>
                      <p className="text-ink-muted leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8">
            
            {/* What's Included Card */}
            <div className="bg-white border border-ink/10 p-6 lg:p-8 rounded-[var(--radius)] shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-ink">What&apos;s Included</h3>
              <ul className="space-y-3">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-muted font-medium">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span className="leading-tight pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-warm-card border border-ink/10 p-6 lg:p-8 rounded-[var(--radius)] shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-ink">Quick Facts</h3>
              
              <div className="space-y-4">
                {service.timeline && (
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-ink block mb-1">Timeline</span>
                    <p className="text-sm text-ink-muted">{service.timeline}</p>
                  </div>
                )}
                {service.occupied && (
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-ink block mb-1">While we work</span>
                    <p className="text-sm text-ink-muted">{service.occupied}</p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Sidebar Widget */}
            <div className="bg-ink p-6 lg:p-8 rounded-[var(--radius)] shadow-lg space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white leading-tight">Ready for a clear estimate?</h3>
              <p className="text-white/80 text-sm">We don&apos;t do rough guesses over the phone. We walk the project, assess the surfaces, and give you a written price.</p>
              
              <div className="space-y-3 pt-2">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 w-full rounded-[var(--radius)] hover:bg-[var(--color-terracotta-dark)] active:scale-[0.99] transition-all flex items-center justify-center text-center shadow-md"
                >
                  Request Walkthrough
                </Link>
                <a
                  href={contact.phoneHref}
                  className="border-2 border-white/20 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-12 w-full rounded-[var(--radius)] flex items-center justify-center text-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {contact.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Closing Thoughts */}
        {service.closing && (
          <section className="px-4 lg:px-8 pt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl font-serif text-ink italic leading-relaxed">
              &quot;{service.closing}&quot;
            </p>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
