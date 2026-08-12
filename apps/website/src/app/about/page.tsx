import type { Metadata } from "next";
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
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/seo/schema";
import { contact } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "About Us | Family-Owned Painters in Lakewood Ranch & Sarasota",
  description:
    "Learn about 4 The Love of Color, a family-owned painting company serving Florida's Suncoast. Founded by Edwin and run with his sons—no subcontractors, ironclad guarantees, and weather-tested paints.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About 4 The Love of Color Painting | Family-Owned Craftsmanship",
    description:
      "Family-owned interior and exterior painting serving Lakewood Ranch, Sarasota, and Bradenton, FL. Direct owner involvement and climate-tested protection.",
    url: "https://www.fortheloveofcolor.com/about",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "About", item: "/about" },
  ]);

  const webPageSchema = getWebPageSchema(
    "About Us | 4 The Love of Color Painting",
    "Learn about 4 The Love of Color, a family-owned painting company serving Florida's Suncoast. Built on empathy, clean job sites, clear communication, and uncompromised quality.",
    "/about"
  );

  const guarantees = [
    {
      title: "Written Fixed Price (No Hidden Fees)",
      description:
        "You receive a detailed written estimate after our walkthrough, and that exact number is what you pay. We never add surprise charges, and any scope changes must be approved by you first.",
    },
    {
      title: "Clean & Tidy Job Site Every Day",
      description:
        "We cover your floors, furniture, and landscaping before work starts. At the end of every workday, tools are organized, trash is removed, and your home is left clean and liveable.",
    },
    {
      title: "Final Walkthrough Before You Pay",
      description:
        "We inspect every room or exterior surface together when the work is finished. We touch up any detail you point out, and we never ask for final payment until you are 100% satisfied.",
    },
    {
      title: "Florida Climate-Tested Paints",
      description:
        "Intense Suncoast sun, humidity, and salt air require proven materials. We strictly use top-tier 100% acrylic paints (Sherwin-Williams Emerald® and Duration®) and elastomeric sealants built to endure Florida weather.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, webPageSchema]).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Header />

      <main className="flex-1">
        {/* Subpage Hero Section */}
        <section className="px-4 lg:px-8 pt-10 pb-8 lg:pt-14 lg:pb-10 max-w-7xl mx-auto flex flex-col items-start w-full">
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

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Built on Family, Care &amp; Craftsmanship
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl font-medium">
            A family-owned painting company serving Florida&apos;s Suncoast. Founded by Edwin and operated with his sons, delivering honest craftsmanship and owner involvement on every job.
          </p>
        </section>

        {/* Origin Story Split Section */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 shadow-2xl border border-ink/10 bg-warm-card rounded-[var(--radius)] overflow-hidden">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta block">
                  The Family Story
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink leading-tight">
                  Built on Family Pride and Doing the Job Right
                </h2>

                <p className="text-base text-ink-muted leading-relaxed font-medium">
                  Edwin started <strong className="text-ink font-semibold">4 The Love of Color</strong> with a simple standard: treat every home like our own, never rush prep work, and deliver clean, lasting results.
                </p>

                <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                  As his sons grew into the business, Edwin taught them the trade from the ground up—from thorough pressure washing to clear away salt air and mildew, to careful masking that protects your floors and trim. Today, Edwin and his sons work side-by-side on every Suncoast project.
                </p>
              </div>

              {/* Espresso No-Subcontractor Callout Card */}
              <div className="p-6 bg-ink text-white rounded-[var(--radius)] space-y-2 border border-white/10 shadow-md">
                <span className="text-xs uppercase font-bold tracking-wider text-gold block">
                  Family Direct
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  No Subcontractors—Ever
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                  We never hand your job off to third-party subcontractors. The family you meet during your estimate is the exact team on the ladders and walking the finished job with you.
                </p>
              </div>
            </div>

            {/* Right Media Column - Photo Placeholder Box */}
            <div className="lg:col-span-5 relative bg-ink flex flex-col justify-between">
              {/* Image Placeholder Box */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full w-full min-h-[300px] bg-ink/90 border-b border-white/10 flex items-center justify-center p-8 text-center">
                <div className="space-y-1">
                  <p className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
                    Photo Placeholder
                  </p>
                  <p className="font-serif text-lg font-medium text-gray-300">
                    Add family photo later
                  </p>
                </div>
              </div>

              {/* Founder Quote Footer */}
              <div className="p-6 sm:p-8 bg-ink text-white space-y-2 border-t border-white/10">
                <p className="font-serif text-base sm:text-lg font-bold italic text-white leading-snug">
                  &ldquo;Every house we paint carries our family name. That&apos;s why we never rush prep or compromise on finish quality.&rdquo;
                </p>
                <p className="text-xs text-gold uppercase tracking-wider font-bold">
                  — Edwin, Founder
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees Accordion Section */}
        <section className="px-4 lg:px-8 py-16 lg:py-24 bg-warm-bg border-t border-b border-ink/10 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta block">
                Ironclad Promises
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink leading-tight">
                What You Can Hold Us To in Writing
              </h2>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-medium">
                Trust is earned by making clear promises and keeping them. Here is what we guarantee in writing on every job across Lakewood Ranch, Sarasota, and Bradenton.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                {guarantees.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-ink/15 rounded-[var(--radius)] bg-warm-card px-6 py-1 shadow-sm hover:border-ink/30 transition-colors"
                  >
                    <AccordionTrigger className="text-base sm:text-lg font-bold text-ink hover:no-underline text-left py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-terracotta">0{index + 1}.</span>
                        <span>{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-1 pb-4 pl-8 font-medium">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Direct CTA Section */}
        <section className="px-4 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto w-full">
          <div className="bg-ink text-white p-8 sm:p-12 lg:p-16 rounded-[var(--radius)] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta block">
                Direct Owner Involvement
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                Work Directly With Our Family
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                Ready for a clear written estimate and direct family service? Contact Edwin today to schedule your free home walkthrough.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 px-7 hover:bg-[var(--color-terracotta-dark)] active:scale-[0.99] transition-all rounded-[var(--radius)] shadow-md inline-flex items-center justify-center text-center"
              >
                Request Free Estimate
              </Link>
              <a
                href={contact.phoneHref}
                className="border-2 border-white/40 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-[var(--radius)] inline-flex items-center justify-center text-center"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
