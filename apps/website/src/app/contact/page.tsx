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
import { contact, business, lakewoodRanchNeighborhoods } from "@/lib/data/content";
import { EstimateForm } from "./EstimateForm";
import { ServiceAreaGrid } from "./ServiceAreaGrid";
import { Phone, Mail, Clock, MapPin, CheckCircle2, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Request an Estimate | 4 The Love of Color Painting",
  description:
    "Request a free, transparent estimate for interior, exterior, cabinet refinishing, or commercial painting in Lakewood Ranch, Sarasota, and Bradenton, FL.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact 4 The Love of Color Painting",
    description:
      "Get a fast, transparent written quote for interior or exterior painting in Lakewood Ranch and Sarasota, FL. Speak directly with the owners.",
    url: "https://www.fortheloveofcolor.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Contact", item: "/contact" },
  ]);

  const webPageSchema = getWebPageSchema(
    "Contact 4 The Love of Color Painting",
    "Request a detailed, transparent estimate for your residential or commercial painting project in Lakewood Ranch, Sarasota, Bradenton, or surrounding Florida Suncoast areas.",
    "/contact"
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      {/* Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Header />

      <main className="flex-1">
        {/* BEAT 1: Subpage Hero Section (Strictly NO section tags) */}
        <section className="px-4 lg:px-8 pt-10 pb-10 lg:pt-14 lg:pb-14 max-w-7xl mx-auto flex flex-col items-start w-full">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contact</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Request an Estimate or Consult
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl font-medium">
            Ready to refresh your home or property? Reach out by phone, email, or complete our estimate form below for a straightforward, detailed written quote with zero pressure.
          </p>
        </section>

        {/* BEAT 2: Direct Contact Cards (3-Column Block) */}
        <section className="px-4 lg:px-8 pb-12 lg:pb-16 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Direct Phone */}
            <div className="p-6 sm:p-8 border border-ink/10 rounded-[var(--radius)] bg-white space-y-3 shadow-sm hover:border-ink/20 transition-all">
              <div className="w-10 h-10 rounded-[var(--radius)] bg-terracotta/10 text-terracotta flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gold tracking-widest">Call Direct</p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-ink mt-1">
                  <a href={contact.phoneHref} className="hover:text-terracotta transition-colors">
                    {contact.phone}
                  </a>
                </p>
              </div>
              <p className="text-xs text-ink-muted flex items-center gap-1.5 pt-1 border-t border-ink/5">
                <Clock className="w-3.5 h-3.5 text-ink/40 shrink-0" />
                <span>{business.hours}</span>
              </p>
            </div>

            {/* Card 2: Email Us */}
            <div className="p-6 sm:p-8 border border-ink/10 rounded-[var(--radius)] bg-white space-y-3 shadow-sm hover:border-ink/20 transition-all">
              <div className="w-10 h-10 rounded-[var(--radius)] bg-terracotta/10 text-terracotta flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gold tracking-widest">Email Us Direct</p>
                <p className="font-serif text-base sm:text-lg font-bold text-ink truncate mt-1">
                  <a href={contact.emailHref} className="hover:text-terracotta transition-colors">
                    {contact.email}
                  </a>
                </p>
              </div>
              <p className="text-xs text-ink-muted flex items-center gap-1.5 pt-1 border-t border-ink/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#61bb46] shrink-0" />
                <span>Quick responses within 24 hours</span>
              </p>
            </div>

            {/* Card 3: Service Region */}
            <div className="p-6 sm:p-8 border border-ink/10 rounded-[var(--radius)] bg-white space-y-3 shadow-sm hover:border-ink/20 transition-all">
              <div className="w-10 h-10 rounded-[var(--radius)] bg-terracotta/10 text-terracotta flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gold tracking-widest">Service Region</p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-ink mt-1">Florida Suncoast</p>
              </div>
              <p className="text-xs text-ink-muted flex items-center gap-1.5 pt-1 border-t border-ink/5">
                <span>Lakewood Ranch, Sarasota, Bradenton</span>
              </p>
            </div>
          </div>
        </section>

        {/* Warm Section Divider */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="h-0.5 bg-ink/15 w-full" />
        </div>

        {/* BEAT 3: Estimate Request Form & Contact Hub */}
        <section id="estimate-form" className="px-4 lg:px-8 py-12 lg:py-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left (5 Cols): Direct Details & Lakewood Ranch Neighborhood Hub */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
                  Direct & Personal
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight">
                  Speak Directly with the Owners
                </h2>
                <blockquote className="p-4 bg-white border-l-4 border-terracotta rounded-r-[var(--radius)] text-sm sm:text-base text-ink italic font-serif leading-relaxed shadow-sm">
                  &ldquo;We walk every property with you and provide a clear, written quote that holds firm — no price hikes, no surprises.&rdquo;
                  <footer className="not-italic text-xs font-sans font-bold uppercase tracking-wider text-ink-muted mt-2">
                    — Edwin & Family, Founders
                  </footer>
                </blockquote>
              </div>

              {/* Response Time & Guarantees */}
              <div className="bg-white border border-ink/10 rounded-[var(--radius)] p-6 space-y-4 shadow-sm">
                <h3 className="text-xs uppercase font-bold tracking-wider text-ink flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-terracotta" />
                  <span>Our Service Commitments</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-ink-muted">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <span><strong className="text-ink">24-Hour Response:</strong> We answer every phone call and form submission promptly.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <span><strong className="text-ink">Firm Written Quote:</strong> Exact line-item pricing provided after the on-site walkthrough.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <span><strong className="text-ink">HOA Compliance:</strong> We verify community paint codes and color palettes across Lakewood Ranch.</span>
                  </li>
                </ul>
              </div>

              {/* Lakewood Ranch Served Neighborhoods */}
              <div className="bg-white border border-ink/10 rounded-[var(--radius)] p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-ink flex items-center gap-2">
                    <Award className="w-4 h-4 text-gold" />
                    <span>Lakewood Ranch Villages Served</span>
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-ink font-medium">
                  {lakewoodRanchNeighborhoods.map((village, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                      <span>{village}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-ink-muted pt-2 border-t border-ink/5">
                  Plus Sarasota, Bradenton, Palmetto, Parrish, Venice, and Osprey communities.
                </p>
              </div>
            </div>

            {/* Right (7 Cols): Interactive Estimate Form */}
            <div className="lg:col-span-7">
              <EstimateForm />
            </div>
          </div>
        </section>

        {/* Signature Mac 6-Stripe Rainbow Divider */}
        <div className="w-full grid grid-cols-6 h-2">
          <div className="bg-[#61bb46]" />
          <div className="bg-[#fdb827]" />
          <div className="bg-[#f5821f]" />
          <div className="bg-[#e03a3e]" />
          <div className="bg-[#963d97]" />
          <div className="bg-[#009dcf]" />
        </div>

        {/* BEAT 4: Interactive Lakewood Ranch & Suncoast Service Area Grid */}
        <section className="px-4 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto w-full">
          <ServiceAreaGrid />
        </section>
      </main>

      <Footer />
    </div>
  );
}
