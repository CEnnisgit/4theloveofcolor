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
    "Learn about 4 The Love of Color, a family-owned painting company serving Florida's Suncoast. Founded by Edwin and run with his sons—no subcontractors, ironclad guarantees, and weather-rated coatings.",
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
      title: "Written Price Held (No Hidden Add-Ons)",
      description:
        "You receive a complete, detailed written quote after our initial on-site walkthrough. That agreed price is the final price. Scope modifications are only ever made with your explicit prior consent in writing.",
    },
    {
      title: "Daily Site Tidying & Floor Protection",
      description:
        "We protect floors, furniture, and landscaping with heavy-duty drop cloths and plastic sheeting. At the end of every work day, tools are organized, trash is removed, and your home is left clean and accessible.",
    },
    {
      title: "Walkthrough Before Final Payment",
      description:
        "We conduct a detailed room-by-room or exterior walkthrough together upon project completion. We touch up any detail you flag, and we do not request final payment until you are 100% satisfied.",
    },
    {
      title: "Weather-Rated Gulf Coast Coatings",
      description:
        "Florida sun and sea salt humidity demand superior paint engineering. We strictly specify top-tier 100% acrylic paints (Sherwin-Williams Emerald® / Duration®) and elastomeric sealants selected specifically for Suncoast durability.",
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
        <section className="px-4 lg:px-8 pt-10 pb-8 lg:pt-14 lg:pb-12 max-w-7xl mx-auto flex flex-col items-start w-full">
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
            A more personal painting experience—built specifically for Florida&apos;s Suncoast. Founded by Edwin and operated alongside his sons with direct owner accountability on every job.
          </p>
        </section>

        {/* Origin Story Section */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink leading-tight">
                Founded on Pride, Care &amp; Uncompromising Discipline
              </h2>

              <p className="text-base text-ink-muted leading-relaxed font-medium">
                Edwin founded <strong className="text-ink font-semibold">4 The Love of Color</strong> with a straightforward belief: homeowners deserve a transparent, personal painting service where craftsmanship and respect come first.
              </p>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                As his sons grew into the trade, Edwin passed down every standard he established—from the pressure washing required for Florida&apos;s salt air to the double-masking discipline that protects floors and hardware. Today, father and sons work side-by-side on Suncoast job sites.
              </p>

              {/* Zero-Subcontractor Callout */}
              <div className="p-6 bg-white border border-ink/10 rounded-[var(--radius)] space-y-2 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-ink">
                  Our Zero-Subcontractor Policy
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  We never subcontract your project to third-party crews. The family you talk to during your free estimate is the exact crew standing on the ladders and completing the walkthrough with you.
                </p>
              </div>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-5">
              <div className="border border-ink/10 rounded-[var(--radius)] bg-white overflow-hidden shadow-sm">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/proj-exterior-white-2story.jpg"
                    alt="Florida Suncoast home painted by 4 The Love of Color"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6 bg-ink text-white space-y-2">
                  <p className="font-serif text-base font-bold italic text-white leading-snug">
                    &ldquo;Every house we paint carries our family name. That&apos;s why we never rush prep or compromise on finish quality.&rdquo;
                  </p>
                  <p className="text-xs text-gold uppercase tracking-wider font-bold">
                    — Edwin, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="px-4 lg:px-8 py-12 lg:py-16 bg-white border-t border-b border-ink/10 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta">
                Ironclad Promises
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink leading-tight">
                What You Can Hold Us To in Writing
              </h2>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                We believe trust is earned through explicit standards. These four core commitments apply to every single job we perform across Lakewood Ranch, Sarasota, and Bradenton.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-3">
                {guarantees.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-ink/10 rounded-[var(--radius)] bg-warm-bg px-5 py-1"
                  >
                    <AccordionTrigger className="text-base sm:text-lg font-bold text-ink hover:no-underline text-left">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-terracotta">0{index + 1}.</span>
                        <span>{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-1 pb-3 pl-8 font-medium">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Direct CTA */}
        <section className="px-4 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto w-full">
          <div className="bg-ink text-white p-8 sm:p-12 rounded-[var(--radius)] shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Work Directly With Our Family
              </h2>
              <p className="text-sm text-gray-300">
                Ready for a painting consultation built on clear communication and lasting quality? Contact Edwin and the crew today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 px-7 hover:bg-white hover:text-ink transition-colors rounded-[var(--radius)] inline-flex items-center justify-center text-center"
              >
                Request Free Estimate
              </Link>
              <a
                href={contact.phoneHref}
                className="border border-white/30 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-[var(--radius)] inline-flex items-center justify-center text-center"
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
