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
import { guidePages } from "@/lib/data/guidePages";
import { BookOpen, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Painting Guides & Homeowner Resources | 4 The Love of Color",
  description: "Honest answers to real Florida painting questions: cost factors, stucco peeling, cabinet refinishing vs replacement, and repainting frequency.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <Header />

      <main className="flex-1 pb-16 lg:pb-24">
        {/* Hero Header */}
        <section className="px-4 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-20 max-w-7xl mx-auto flex flex-col items-start space-y-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Guides & Resources</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-terracotta" />
            Homeowner Knowledge Base
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight max-w-4xl">
            Painting Guides & Straight Answers
          </h1>

          <p className="text-ink-muted text-lg sm:text-xl max-w-3xl leading-relaxed">
            Everything you need to know before hiring a painter in Lakewood Ranch & Sarasota: pricing drivers, stucco prep, cabinet decisions, and maintenance schedules.
          </p>
        </section>

        {/* Guides Grid */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidePages.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="bg-white rounded-[var(--radius)] border border-ink/10 shadow-sm hover:shadow-lg hover:border-terracotta transition-all group overflow-hidden flex flex-col"
              >
                {guide.image && (
                  <div className="relative h-64 w-full bg-ink">
                    <Image
                      src={guide.image}
                      alt={guide.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-terracotta">
                      Published {guide.published}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink group-hover:text-terracotta transition-colors leading-snug">
                      {guide.h1}
                    </h2>
                    <p className="text-ink-muted text-base line-clamp-3 leading-relaxed">
                      {guide.intro[0]}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink group-hover:text-terracotta">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Quick Link Banner */}
        <section className="px-4 lg:px-8 max-w-5xl mx-auto bg-warm-card border border-ink/10 p-10 rounded-[var(--radius)] text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6 text-ink" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-ink">Have a specific question about your home?</h2>
          <p className="text-ink-muted text-base max-w-xl mx-auto leading-relaxed">
            We walk every property in person to give you an accurate, itemized written estimate.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[var(--radius)] bg-terracotta text-white font-bold text-xs uppercase tracking-widest hover:bg-[var(--color-terracotta-dark)] transition-all shadow-md"
            >
              Request Free Walkthrough
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
