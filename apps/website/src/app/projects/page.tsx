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
  title: "Our Project Portfolio | Recent Painting Work in Sarasota & Lakewood Ranch",
  description:
    "Explore our gallery of completed interior and exterior painting projects across Lakewood Ranch, Sarasota, and Bradenton, FL. Real craftsmanship, clean lines, and long-lasting finishes.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Project Portfolio | 4 The Love of Color Painting",
    description:
      "Explore our gallery of completed interior and exterior painting projects across Lakewood Ranch and Sarasota, FL.",
    url: "https://www.fortheloveofcolor.com/projects",
  },
};

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Projects", item: "/projects" },
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
                  <BreadcrumbPage>Projects</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Pill Tag */}
          <div className="w-52 sm:w-60 h-9 mb-6 flex items-center justify-center rounded-[var(--radius)] bg-ink text-white text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-center">
            Portfolio
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Our Projects &amp; Craftsmanship
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl font-medium">
            Explore recent interior, exterior, and custom finish projects completed for homeowners and businesses across Lakewood Ranch, Sarasota, and the Suncoast.
          </p>
        </section>

        {/* Content Placeholder for Phase 1 Full Buildout */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="p-8 sm:p-12 border border-ink/10 rounded-[var(--radius)] bg-warm-bg text-center space-y-4">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
              Portfolio Gallery
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Full Project Showcase Coming in Phase 1
            </h2>
            <p className="text-sm text-ink-muted max-w-xl mx-auto leading-relaxed">
              We are assembling a filterable gallery featuring before-and-after transformations, exterior weather-coating case studies, and fine cabinet refinishing work.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
