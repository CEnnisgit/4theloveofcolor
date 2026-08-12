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
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/seo/schema";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Project Portfolio | Recent Painting Work in Sarasota & Lakewood Ranch",
  description:
    "Explore our gallery of completed interior, exterior, and cabinet refinishing projects across Lakewood Ranch, Sarasota, and Bradenton, FL. Real craftsmanship, clean lines, and long-lasting finishes.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Project Portfolio | 4 The Love of Color Painting",
    description:
      "Explore our gallery of completed interior and exterior painting projects across Lakewood Ranch, Sarasota, and Bradenton, FL.",
    url: "https://www.fortheloveofcolor.com/projects",
  },
};

export default function ProjectsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Projects", item: "/projects" },
  ]);

  const webPageSchema = getWebPageSchema(
    "Our Project Portfolio | 4 The Love of Color Painting",
    "Explore our gallery of completed interior, exterior, and cabinet refinishing projects across Lakewood Ranch, Sarasota, and Bradenton, FL.",
    "/projects"
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, webPageSchema]).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main className="flex-1 pb-16 lg:pb-24">
        {/* Subpage Hero Section - Strictly Obeying DESIGN.md Rules (No Section Tags) */}
        <section className="px-4 lg:px-8 pt-10 pb-10 lg:pt-14 lg:pb-12 max-w-7xl mx-auto flex flex-col items-start w-full">
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

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Our Projects &amp; Craftsmanship
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl font-medium">
            Real Suncoast homes, finished with care, skill, and family pride. Explore recent interior transformations, weather-rated exterior paint systems, and custom cabinet refinishing across Lakewood Ranch, Sarasota, and Bradenton.
          </p>
        </section>

        {/* Interactive Client Portfolio Section */}
        <ProjectsClient />
      </main>

      <Footer />
    </div>
  );
}
