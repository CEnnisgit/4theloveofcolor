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
import { contact, business } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Contact Us | Get an Estimate | 4 The Love of Color Painting",
  description:
    "Request a free, transparent estimate for interior, exterior, cabinet refinishing, or commercial painting in Lakewood Ranch, Sarasota, and Bradenton, FL.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact 4 The Love of Color Painting",
    description:
      "Get a fast, transparent written quote for interior or exterior painting in Lakewood Ranch and Sarasota, FL.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, webPageSchema]).replace(/</g, "\\u003c"),
        }}
      />

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 lg:px-8 pt-10 pb-8 lg:pt-14 lg:pb-12 max-w-7xl mx-auto flex flex-col items-start w-full">
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
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl font-medium">
            Reach out by phone, email, or complete the form below. We will talk through your project and provide a clear, written quote with zero pressure.
          </p>
        </section>

        {/* Main Contact Section */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Info & Callouts */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Direct Box */}
              <div className="bg-white border border-ink/10 rounded-[var(--radius)] p-6 sm:p-8 space-y-6 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-ink border-b border-ink/10 pb-4">
                  Get In Touch
                </h2>

                <div className="space-y-4 text-sm font-medium">
                  <div>
                    <span className="text-xs uppercase font-bold text-terracotta tracking-wider block mb-1">
                      Direct Phone
                    </span>
                    <a
                      href={contact.phoneHref}
                      className="font-serif text-xl sm:text-2xl font-bold text-ink hover:text-terracotta transition-colors"
                    >
                      {contact.phone}
                    </a>
                    <p className="text-xs text-ink-muted mt-1">{business.hours}</p>
                  </div>

                  <div className="pt-3 border-t border-ink/5">
                    <span className="text-xs uppercase font-bold text-terracotta tracking-wider block mb-1">
                      Email
                    </span>
                    <a
                      href={contact.emailHref}
                      className="font-medium text-ink hover:text-terracotta transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="pt-3 border-t border-ink/5">
                    <span className="text-xs uppercase font-bold text-terracotta tracking-wider block mb-1">
                      Service Region
                    </span>
                    <p className="text-ink font-semibold">
                      Lakewood Ranch, Sarasota, Bradenton
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">
                      Palmetto, Parrish, Venice, Osprey &amp; Florida Suncoast
                    </p>
                  </div>
                </div>
              </div>

              {/* Owner Promise Box */}
              <div className="p-6 bg-white border border-ink/10 rounded-[var(--radius)] space-y-3 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-ink">
                  Direct Owner Involvement
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed font-medium">
                  Edwin and his sons handle your walkthrough and stand behind the quote. No rotating subcontractors and no unexpected price changes.
                </p>
              </div>
            </div>

            {/* Right Column: Clean Estimate Request Form */}
            <div className="lg:col-span-7 bg-white border border-ink/10 rounded-[var(--radius)] p-6 sm:p-10 shadow-sm">
              <div className="mb-6 pb-4 border-b border-ink/10">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                  Request Your Free Quote
                </h2>
                <p className="text-xs sm:text-sm text-ink-muted mt-1">
                  Fill out your details and we will respond within 24 hours.
                </p>
              </div>

              <form
                name="estimate-request"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/contact?submitted=true"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="estimate-request" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you are human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-ink block">
                      Full Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-warm-bg border border-ink/15 focus:border-terracotta focus:bg-white text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-ink block">
                      Phone Number <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(941) 555-0199"
                      className="w-full bg-warm-bg border border-ink/15 focus:border-terracotta focus:bg-white text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-ink block">
                      Email Address <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      className="w-full bg-warm-bg border border-ink/15 focus:border-terracotta focus:bg-white text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-ink block">
                      Property Location / City
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="e.g. Lakewood Ranch, Sarasota"
                      className="w-full bg-warm-bg border border-ink/15 focus:border-terracotta focus:bg-white text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Service Needed
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="w-full bg-warm-bg border border-ink/15 focus:border-terracotta focus:bg-white text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink outline-none transition-colors"
                  >
                    <option value="Interior Painting">Interior Painting</option>
                    <option value="Exterior Painting">Exterior Painting</option>
                    <option value="Cabinet Refinishing">Cabinet Refinishing</option>
                    <option value="Commercial Painting">Commercial Painting</option>
                    <option value="Full Refresh">Full Interior &amp; Exterior</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Project Details &amp; Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about the project — rooms to paint, exterior condition, cabinet count, or preferred timeline..."
                    className="w-full bg-warm-bg border border-ink/15 focus:border-terracotta focus:bg-white text-sm rounded-[var(--radius)] p-3.5 text-ink outline-none transition-colors resize-y min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-[var(--radius)] hover:bg-[var(--color-terracotta-dark)] transition-colors shadow-sm cursor-pointer"
                >
                  Send Estimate Request
                </button>

                <p className="text-xs text-ink-muted text-center pt-2">
                  Zero obligation • Your information stays private and is only used to contact you.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
