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
  title: "Contact Us | Request a Free Estimate | 4 The Love of Color Painting",
  description:
    "Request a free, transparent estimate for interior, exterior, cabinet refinishing, or commercial painting in Lakewood Ranch, Sarasota, and Bradenton, FL.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact 4 The Love of Color Painting",
    description:
      "Get a fast, transparent written estimate for interior or exterior painting in Lakewood Ranch and Sarasota, FL.",
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
            Request a Free Estimate
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl font-medium">
            Call, email, or complete the form below. We&apos;ll discuss your project and provide a clear, written estimate with zero obligation.
          </p>
        </section>

        {/* Main Contact Section - Split Espresso & Warm Editorial Card */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 shadow-2xl border border-ink/10 bg-warm-card rounded-[var(--radius)] overflow-hidden">
            
            {/* Left Column: Rich Dark Espresso Brown Anchor */}
            <div className="lg:col-span-5 bg-ink text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta block">
                  Get In Touch
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-white">
                  Let&apos;s talk about your space.
                </h2>
                <p className="text-sm text-gray-300 font-medium leading-relaxed">
                  Have a question or ready to schedule your walkthrough? Reach out directly to Edwin and our family team.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold block mb-1">
                    Call Direct
                  </span>
                  <a
                    href={contact.phoneHref}
                    className="font-serif text-2xl font-bold text-white hover:text-terracotta transition-colors"
                  >
                    {contact.phone}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">{business.hours}</p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold block mb-1">
                    Email
                  </span>
                  <a
                    href={contact.emailHref}
                    className="font-medium text-white hover:text-terracotta transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold block mb-1">
                    Service Area
                  </span>
                  <p className="text-white font-semibold">
                    Lakewood Ranch, Sarasota, Bradenton
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Parrish, Palmetto, Venice, Osprey &amp; Suncoast
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-1.5">
                <h3 className="font-serif text-base font-bold text-white">
                  Our Family Guarantee
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-medium">
                  Edwin and his sons handle your walkthrough and stand behind the estimate. No subcontractors, no surprise fees.
                </p>
              </div>
            </div>

            {/* Right Column: Warm Editorial Form Container */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 bg-warm-card flex flex-col justify-center space-y-6">
              <div className="border-b border-ink/10 pb-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                  Request Your Free Estimate
                </h2>
                <p className="text-xs sm:text-sm text-ink-muted mt-1 font-medium">
                  Fill out your details below and we will respond within 24 hours.
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
                      className="w-full bg-white border border-ink/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink placeholder:text-ink/40 outline-none transition-all"
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
                      className="w-full bg-white border border-ink/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink placeholder:text-ink/40 outline-none transition-all"
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
                      placeholder="name@example.com"
                      className="w-full bg-white border border-ink/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink placeholder:text-ink/40 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-ink block">
                      City or Neighborhood
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="e.g. Lakewood Ranch"
                      className="w-full bg-white border border-ink/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink placeholder:text-ink/40 outline-none transition-all"
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
                    className="w-full bg-white border border-ink/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 text-sm rounded-[var(--radius)] h-11 px-3.5 text-ink outline-none transition-all cursor-pointer"
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
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about the project — rooms to paint, exterior condition, cabinet count, or preferred timeline..."
                    className="w-full bg-white border border-ink/20 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 text-sm rounded-[var(--radius)] p-3.5 text-ink placeholder:text-ink/40 outline-none transition-all resize-y min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-[var(--radius)] hover:bg-[var(--color-terracotta-dark)] active:scale-[0.99] transition-all shadow-md cursor-pointer"
                >
                  Send Estimate Request
                </button>

                <p className="text-xs text-ink-muted text-center pt-1 font-medium">
                  Zero obligation • Your information is private and never shared.
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
