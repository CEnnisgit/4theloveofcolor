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
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "About Us | Family-Owned Painters in Lakewood Ranch & Sarasota",
  description:
    "Learn about 4 The Love of Color, a family-owned painting company serving Florida's Suncoast. Built on empathy, clean job sites, clear communication, and uncompromised quality.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About 4 The Love of Color Painting",
    description:
      "Family-owned interior and exterior painting serving Lakewood Ranch, Sarasota, and Bradenton, FL.",
    url: "https://www.fortheloveofcolor.com/about",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "About", item: "/about" },
  ]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
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
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Pill Tag */}
          <div className="w-52 sm:w-60 h-9 mb-6 flex items-center justify-center rounded-[var(--radius)] bg-ink text-white text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-center">
            Our Story
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Built on Family, Care &amp; Craftsmanship
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl font-medium">
            We are a family-owned painting contractor serving Florida&apos;s Suncoast with a commitment to treating every home with respect, discipline, and intentional care.
          </p>
        </section>

        {/* Content Placeholder for Phase 2 Full Buildout */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="p-8 sm:p-12 border border-ink/10 rounded-[var(--radius)] bg-warm-bg text-center space-y-4">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
              The Family Difference
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Full Story &amp; Values Showcase Coming in Phase 2
            </h2>
            <p className="text-sm text-ink-muted max-w-xl mx-auto leading-relaxed">
              We are detailing our family story, core guarantees, Florida climate expertise, and high-standard preparation processes.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
