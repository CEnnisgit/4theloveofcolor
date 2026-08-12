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
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { contact } from "@/lib/data/content";
import { guidePages } from "@/lib/data/guidePages";
import { Phone, CheckCircle2, HelpCircle, BookOpen } from "lucide-react";

export function generateStaticParams() {
  return guidePages.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const guide = guidePages.find((g) => g.slug === resolvedParams.slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `https://www.fortheloveofcolor.com/guides/${guide.slug}`,
      images: guide.image ? [{ url: guide.image }] : [],
    },
  };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const guide = guidePages.find((g) => g.slug === resolvedParams.slug);

  if (!guide) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Guides", item: "/guides" },
    { name: guide.name, item: `/guides/${guide.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.h1,
    "description": guide.metaDescription,
    "datePublished": guide.published,
    "dateModified": guide.updated,
    "author": {
      "@type": "Organization",
      "name": "4 The Love of Color Painting"
    },
    "publisher": {
      "@type": "Organization",
      "name": "4 The Love of Color Painting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.fortheloveofcolor.com/images/logo.png"
      }
    }
  };

  const faqSchema = guide.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guide.faqs.map(faq => ({
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
          __html: JSON.stringify(faqSchema ? [breadcrumbSchema, articleSchema, faqSchema] : [breadcrumbSchema, articleSchema]).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main className="flex-1 pb-16 lg:pb-24">
        {/* Header */}
        <section className="px-4 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-16 max-w-4xl mx-auto flex flex-col items-start space-y-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/guides">Guides</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{guide.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-terracotta" />
            Florida Painting Guide
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink leading-tight">
            {guide.h1}
          </h1>

          <div className="space-y-4 pt-2 border-b border-ink/10 pb-8 w-full">
            {guide.intro.map((p, i) => (
              <p key={i} className={`text-ink-muted leading-relaxed ${i === 0 ? 'text-lg sm:text-xl font-medium text-ink' : 'text-base'}`}>
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Hero Image */}
        {guide.image && (
          <section className="px-4 lg:px-8 max-w-4xl mx-auto mb-16">
            <div className="relative h-[300px] sm:h-[450px] rounded-[var(--radius)] overflow-hidden shadow-xl bg-ink border border-ink/10">
              <Image
                src={guide.image}
                alt={guide.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          </section>
        )}

        {/* Guide Content */}
        <section className="px-4 lg:px-8 max-w-4xl mx-auto space-y-16">
          {guide.sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-ink border-b border-ink/10 pb-4">
                {section.heading}
              </h2>
              {section.body.map((p, i) => (
                <p key={i} className="text-ink-muted text-base sm:text-lg leading-relaxed">
                  {p}
                </p>
              ))}

              {section.points && section.points.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {section.points.map((pt, i) => (
                    <div key={i} className="bg-white p-6 rounded-[var(--radius)] border border-ink/10 shadow-sm space-y-2">
                      <h3 className="font-bold text-ink text-base flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0" />
                        {pt.title}
                      </h3>
                      <p className="text-ink-muted text-sm leading-relaxed">{pt.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* FAQs */}
          {guide.faqs && guide.faqs.length > 0 && (
            <div className="space-y-8 pt-8">
              <div className="border-b border-ink/10 pb-4 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-terracotta" />
                <h2 className="font-serif text-3xl font-bold text-ink">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-6">
                {guide.faqs.map((faq, i) => (
                  <div key={i} className="bg-warm-card p-6 sm:p-8 rounded-[var(--radius)] border border-ink/10 space-y-2">
                    <h3 className="font-bold text-ink text-lg">{faq.question}</h3>
                    <p className="text-ink-muted text-base leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Closing & CTA */}
          <div className="bg-ink text-white p-10 rounded-[var(--radius)] text-center space-y-6 shadow-xl mt-16">
            <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-white/90">
              &quot;{guide.closing}&quot;
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
