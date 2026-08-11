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
import { contact, business } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Contact Us | Get an Estimate for Painting in Sarasota & Lakewood Ranch",
  description:
    "Request a detailed, transparent estimate for your residential or commercial painting project in Lakewood Ranch, Sarasota, Bradenton, or surrounding Florida Suncoast areas.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact 4 The Love of Color Painting",
    description:
      "Get a fast, transparent quote for interior or exterior painting in Lakewood Ranch and Sarasota, FL.",
    url: "https://www.fortheloveofcolor.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Contact", item: "/contact" },
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
                  <BreadcrumbPage>Contact</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Request an Estimate or Consult
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl font-medium">
            Ready to talk about your home or property? Reach out by phone, email, or send us a message below for a straightforward, detailed quote.
          </p>
        </section>

        {/* Contact Info & Form Placeholder for Phase 3 Full Buildout */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 border border-ink/10 rounded-[var(--radius)] bg-white space-y-2">
              <p className="text-xs uppercase font-bold text-gold tracking-widest">Call Us Direct</p>
              <p className="font-serif text-xl font-bold text-ink">
                <a href={contact.phoneHref} className="hover:text-terracotta transition-colors">
                  {contact.phone}
                </a>
              </p>
              <p className="text-xs text-ink-muted">{business.hours}</p>
            </div>

            <div className="p-6 border border-ink/10 rounded-[var(--radius)] bg-white space-y-2">
              <p className="text-xs uppercase font-bold text-gold tracking-widest">Email Us</p>
              <p className="font-serif text-lg sm:text-xl font-bold text-ink truncate">
                <a href={contact.emailHref} className="hover:text-terracotta transition-colors">
                  {contact.email}
                </a>
              </p>
              <p className="text-xs text-ink-muted">Quick responses within 24 hours</p>
            </div>

            <div className="p-6 border border-ink/10 rounded-[var(--radius)] bg-white space-y-2">
              <p className="text-xs uppercase font-bold text-gold tracking-widest">Service Region</p>
              <p className="font-serif text-xl font-bold text-ink">Florida Suncoast</p>
              <p className="text-xs text-ink-muted">Lakewood Ranch, Sarasota, Bradenton</p>
            </div>
          </div>

          <div className="p-8 sm:p-12 border border-ink/10 rounded-[var(--radius)] bg-warm-bg text-center space-y-4">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-gold">
              Interactive Estimate Form
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Full Estimate Request Form Coming in Phase 3
            </h2>
            <p className="text-sm text-ink-muted max-w-xl mx-auto leading-relaxed">
              We are building a multi-step estimate request form allowing homeowners to select service type, upload property photos, and choose preferred timeline.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
