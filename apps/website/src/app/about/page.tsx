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
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/seo/schema";
import { contact } from "@/lib/data/content";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Sun,
  Leaf,
  Phone,
  ArrowRight,
  ClipboardCheck,
  Home,
  HeartHandshake,
} from "lucide-react";

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

      <main className="flex-1 space-y-16 lg:space-y-24 pb-16 lg:pb-24">
        {/* Subpage Hero Section (Beat 1) */}
        <section className="px-4 lg:px-8 pt-10 pb-4 lg:pt-14 lg:pb-6 max-w-7xl mx-auto flex flex-col items-start w-full">
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

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6 max-w-4xl">
            Built on Family, Care &amp; Craftsmanship
          </h1>
          <p className="text-base sm:text-xl text-ink-muted leading-relaxed max-w-3xl font-medium">
            A more personal painting experience—built specifically for
            Florida&apos;s Suncoast. Founded by Edwin and operated alongside his
            sons, we deliver uncompromised surface preparation, clean job
            sites, and direct owner involvement on every project.
          </p>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="h-0.5 bg-ink/30 w-full" />
        </div>

        {/* Beat 2: The Family Origin Story */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta">
                  The Family Story
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                  Founded on Pride, Care &amp; Uncompromising Discipline
                </h2>
              </div>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-medium">
                Edwin founded{" "}
                <strong className="text-ink font-semibold">
                  4 The Love of Color
                </strong>{" "}
                with a straightforward belief: homeowners deserve a transparent,
                personal painting service where craftsmanship and respect come
                first.
              </p>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                As his sons grew into the trade, Edwin passed down every
                standard he established—from the meticulous pressure washing
                required for Florida&apos;s salt air to the double-masking
                discipline that protects floors and hardware. Today, father and
                sons work side-by-side on Suncoast job sites.
              </p>

              {/* Zero-Subcontractor Policy Callout */}
              <div className="p-6 bg-white border border-ink/15 rounded-[var(--radius)] space-y-3 shadow-sm">
                <div className="flex items-center gap-3 text-terracotta">
                  <ShieldCheck className="w-6 h-6 shrink-0" />
                  <h3 className="font-serif text-lg font-bold text-ink">
                    Our Zero-Subcontractor Policy
                  </h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed font-medium">
                  We never subcontract your project to third-party crews. The
                  family you talk to during your free estimate is the exact crew
                  standing on the ladders, managing the job site, and
                  completing the final walkthrough with you.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden border border-ink/10 rounded-[var(--radius)] bg-white shadow-md">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <Image
                    src="/images/proj-exterior-white-2story.jpg"
                    alt="Florida Suncoast estate painted by 4 The Love of Color family crew"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6 bg-ink text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-terracotta text-white font-bold text-[10px] uppercase tracking-wider rounded-[var(--radius)]">
                      Family-Owned Craft
                    </Badge>
                    <span className="text-xs text-gold font-bold uppercase tracking-wider">
                      Suncoast, FL
                    </span>
                  </div>
                  <p className="font-serif text-base font-bold text-white leading-snug">
                    &ldquo;Every house we paint carries our family name. That&apos;s
                    why we never rush prep or compromise on finish
                    quality.&rdquo;
                  </p>
                  <p className="text-xs text-gray-300 font-medium">
                    — Edwin, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="h-0.5 bg-ink/30 w-full" />
        </div>

        {/* Beat 3: The 4 Core Pillars */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta">
              Our Foundation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              The 4 Pillars of Our Craft
            </h2>
            <p className="text-base text-ink-muted font-medium leading-relaxed">
              How we structure every project to give homeowners total peace of
              mind, lasting finish quality, and complete confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <Card className="bg-white border border-ink/10 rounded-[var(--radius)] shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                    <Users className="w-6 h-6" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-terracotta/10 text-terracotta font-bold text-[10px] uppercase tracking-wider rounded-[var(--radius)]"
                  >
                    Pillar 01
                  </Badge>
                </div>
                <CardTitle className="font-serif text-2xl font-bold text-ink">
                  Family-Owned &amp; Operated
                </CardTitle>
                <CardDescription className="text-sm text-ink-muted leading-relaxed font-medium">
                  Edwin and his sons manage and execute every project. You get
                  direct owner accountability, honest answers, and zero
                  rotating subcontractors from day one to sign-off.
                </CardDescription>
              </div>
              <div className="pt-4 border-t border-ink/10 text-xs font-bold uppercase tracking-wider text-ink/70 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta" />
                <span>Direct Owner Communication</span>
              </div>
            </Card>

            {/* Pillar 2 */}
            <Card className="bg-white border border-ink/10 rounded-[var(--radius)] shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                    <Sun className="w-6 h-6" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-terracotta/10 text-terracotta font-bold text-[10px] uppercase tracking-wider rounded-[var(--radius)]"
                  >
                    Pillar 02
                  </Badge>
                </div>
                <CardTitle className="font-serif text-2xl font-bold text-ink">
                  Florida Climate Prep
                </CardTitle>
                <CardDescription className="text-sm text-ink-muted leading-relaxed font-medium">
                  Gulf Coast heat, humidity, and salt air destroy poorly prepped
                  paint. We use high-pressure washing, elastomeric sealants,
                  and moisture-tested primers built to endure Florida weather.
                </CardDescription>
              </div>
              <div className="pt-4 border-t border-ink/10 text-xs font-bold uppercase tracking-wider text-ink/70 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta" />
                <span>Weather-Rated Specifications</span>
              </div>
            </Card>

            {/* Pillar 3 */}
            <Card className="bg-white border border-ink/10 rounded-[var(--radius)] shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-terracotta/10 text-terracotta font-bold text-[10px] uppercase tracking-wider rounded-[var(--radius)]"
                  >
                    Pillar 03
                  </Badge>
                </div>
                <CardTitle className="font-serif text-2xl font-bold text-ink">
                  Eco-Friendly Low-VOC Coatings
                </CardTitle>
                <CardDescription className="text-sm text-ink-muted leading-relaxed font-medium">
                  We prioritize premium low-VOC and zero-VOC paints
                  (Sherwin-Williams Emerald, Benjamin Moore Aura) that protect
                  indoor air quality for your family and pets without
                  compromising scrub resistance.
                </CardDescription>
              </div>
              <div className="pt-4 border-t border-ink/10 text-xs font-bold uppercase tracking-wider text-ink/70 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta" />
                <span>Safe for Kids, Pets &amp; Air Quality</span>
              </div>
            </Card>

            {/* Pillar 4 */}
            <Card className="bg-white border border-ink/10 rounded-[var(--radius)] shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-terracotta/10 text-terracotta font-bold text-[10px] uppercase tracking-wider rounded-[var(--radius)]"
                  >
                    Pillar 04
                  </Badge>
                </div>
                <CardTitle className="font-serif text-2xl font-bold text-ink">
                  Clean &amp; Respectful Crews
                </CardTitle>
                <CardDescription className="text-sm text-ink-muted leading-relaxed font-medium">
                  We treat your home with total respect. We mask all floors and
                  furniture, keep noise controlled, and perform a full site
                  cleanup at the end of every work day so your home stays
                  livable.
                </CardDescription>
              </div>
              <div className="pt-4 border-t border-ink/10 text-xs font-bold uppercase tracking-wider text-ink/70 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-terracotta" />
                <span>Daily Site Tidying Guarantee</span>
              </div>
            </Card>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="h-0.5 bg-ink/30 w-full" />
        </div>

        {/* Beat 4: What You Can Hold Us To (Accordion) */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta">
                  Ironclad Guarantees
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight">
                  What You Can Hold Us To in Writing
                </h2>
                <p className="text-base text-ink-muted leading-relaxed font-medium">
                  We believe trust is earned through clear boundaries and
                  explicit standards. These four core commitments apply to every
                  job we perform across Lakewood Ranch, Sarasota, and Bradenton.
                </p>
              </div>

              <div className="p-6 bg-white border border-ink/10 rounded-[var(--radius)] space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-6 h-6 text-terracotta shrink-0" />
                  <h3 className="font-serif text-lg font-bold text-ink">
                    Written Protection Guarantee
                  </h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed font-medium">
                  Every detail, paint brand, sheen, prep step, and cost
                  breakdown is documented in writing before work begins. No
                  verbal ambiguity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-ink/10 rounded-[var(--radius)] p-6 sm:p-10 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-ink/10 pb-4">
                The 4 Family Guarantees
              </h3>

              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                <AccordionItem value="item-0" className="border-b border-ink/10 py-2">
                  <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-serif text-lg font-bold text-terracotta">
                        01.
                      </span>
                      <span>Written Price Held (No Hidden Add-Ons)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-2 pl-9 font-medium">
                    You receive a complete, detailed written quote after our
                    initial on-site walkthrough. That agreed price is the final
                    price. Scope modifications are only ever made with your
                    explicit prior consent in writing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1" className="border-b border-ink/10 py-2">
                  <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-serif text-lg font-bold text-terracotta">
                        02.
                      </span>
                      <span>Daily Site Tidying &amp; Floor Protection</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-2 pl-9 font-medium">
                    We protect floors, furniture, and landscaping with
                    heavy-duty drop cloths and plastic sheeting. At the end of
                    every work day, tools are organized, trash is removed, and
                    your home is left clean and accessible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-ink/10 py-2">
                  <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-serif text-lg font-bold text-terracotta">
                        03.
                      </span>
                      <span>Walkthrough Before Final Payment</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-2 pl-9 font-medium">
                    We conduct a detailed room-by-room or exterior walkthrough
                    together upon project completion. We touch up any detail
                    you flag, and we do not request final payment until you are
                    100% satisfied.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b-0 py-2">
                  <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-serif text-lg font-bold text-terracotta">
                        04.
                      </span>
                      <span>Weather-Rated Gulf Coast Coatings</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-2 pl-9 font-medium">
                    Florida sun and sea salt humidity demand superior paint
                    engineering. We strictly specify top-tier 100% acrylic
                    paints and elastomeric sealants selected specifically for
                    Suncoast durability.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="h-0.5 bg-ink/30 w-full" />
        </div>

        {/* Beat 5: Direct Call to Action */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="bg-ink text-white p-8 sm:p-12 lg:p-16 rounded-[var(--radius)] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Work Directly With Our Family
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Experience the Family Difference on Your Next Project
              </h2>
              <p className="text-base text-gray-300 font-medium leading-relaxed">
                Ready for a painting consultation built on clear communication,
                clean job sites, and lasting Gulf Coast quality? Talk directly
                with Edwin and his sons today.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-gray-300 font-medium">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-gold" />
                  <span>Serving Lakewood Ranch, Sarasota &amp; Suncoast</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 px-8 hover:bg-white hover:text-ink transition-colors rounded-[var(--radius)] shadow-md inline-flex items-center justify-center text-center gap-2"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={contact.phoneHref}
                className="border border-white/30 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-[var(--radius)] inline-flex items-center justify-center text-center gap-2"
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
