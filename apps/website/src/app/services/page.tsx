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
  getBreadcrumbSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/lib/seo/schema";
import { contact } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Painting Services | Interior, Exterior & Cabinet Refinishing in Sarasota",
  description:
    "Explore our complete painting services in Lakewood Ranch, Sarasota, and Bradenton, FL. Premium interior walls, UV-resistant exterior coating, custom cabinet refinishing, and commercial painting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Painting & Refinishing Services | 4 The Love of Color Painting",
    description:
      "Interior, exterior, cabinet refinishing, and commercial painting across Lakewood Ranch, Sarasota, and Florida's Suncoast.",
    url: "https://www.fortheloveofcolor.com/services",
  },
};

interface ServiceDetail {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  prepSteps: string[];
  paintGrades: string;
  idealFor: string;
}

const macroServicesDetailed: ServiceDetail[] = [
  {
    title: "Interior Painting",
    slug: "interior-painting",
    tagline: "Smooth walls, crisp trim & low-VOC interior paints built for Florida living.",
    description:
      "Refresh your living spaces with rich color, clean cut-lines, and thorough wall preparation. We use low-VOC, washable paints that protect indoor air quality while standing up to daily family life.",
    image: "/images/proj-interior-bedroom.jpg",
    alt: "Master bedroom featuring warm greige walls, white crown molding, and tray ceiling",
    prepSteps: [
      "Floor and furniture masking with heavy-duty drop cloths and plastic sheeting",
      "Drywall nail hole filling, tape seam repairs, and light pole-sanding across all walls",
      "Stain-blocking bonding primer over water spots and repaired drywall",
      "Hand-caulking baseboard, crown molding, and door trim joints",
      "Two full finish coats for even coverage, rich color depth, and washable durability",
    ],
    paintGrades: "Sherwin-Williams Emerald® Interior Latex & Emerald® Urethane Trim Enamel",
    idealFor: "Bedrooms, kitchens, open living areas, tray ceilings, hallways, trim, and doors.",
  },
  {
    title: "Exterior Painting",
    slug: "exterior-painting",
    tagline: "Suncoast climate protection against intense UV, tropical salt air & summer storms.",
    description:
      "Florida exteriors face harsh conditions: relentless UV rays, humidity, sea salt air, and heavy summer rains. We protect your home's exterior stucco and trim using high-pressure washing, elastomeric crack sealing, and 100% acrylic coatings.",
    image: "/images/proj-exterior-modern.jpg",
    alt: "Single-story Florida home with crisp gray stucco finish and white trim",
    prepSteps: [
      "High-pressure power washing with eco-friendly cleaner to strip mildew, chalk, and salt residue",
      "Hand-scraping loose paint down to clean, solid stucco or wood and feather-sanding edges",
      "Elastomeric caulking applied to hairline stucco cracks and window/door perimeters",
      "Loxon® masonry primer sealing raw stucco and patch repairs",
      "Two coats of SW Duration® Exterior providing a flexible UV and rain barrier",
    ],
    paintGrades: "Sherwin-Williams Duration® Exterior Acrylic / Loxon® High-Build Primer",
    idealFor: "Single and multi-story stucco homes, coastal residences, soffits, fascia, lanais, front doors, and garage doors.",
  },
  {
    title: "Cabinet Refinishing",
    slug: "cabinet-refinishing",
    tagline: "A factory-smooth, hard-cured enamel spray finish without complete replacement.",
    description:
      "Refinish your existing wood or MDF cabinetry instead of tearing it out. We remove doors and drawer fronts, strip cooking oils, sand down to clean wood, and spray-apply multi-coat waterborne urethanes for a smooth, durable, non-yellowing finish.",
    image: "/images/proj-interior-room.jpg",
    alt: "Refinished custom kitchen cabinets showcasing a smooth white enamel spray finish",
    prepSteps: [
      "Careful door and drawer removal, labeling all hardware, and transport setup",
      "Deep degreasing and deglossing to remove kitchen oils, wax, and surface residue",
      "Thorough sanding down to clean bare wood so primer and topcoats bond permanently",
      "High-bond stain-blocking primer coats with intermediate fine sanding",
      "HVLP spray application in controlled containment for a brushmark-free finish",
    ],
    paintGrades: "Sherwin-Williams Gallery Series™ Waterborne Topcoat or Emerald® Urethane Enamel",
    idealFor: "Kitchen cabinets, bathroom vanities, island accents, and built-in entertainment units.",
  },
  {
    title: "Commercial Painting",
    slug: "commercial-painting",
    tagline: "Professional interior & exterior coatings scheduled around your business hours.",
    description:
      "Maintain a clean, professional look for your store, office, or HOA community without interrupting daily business. We offer flexible off-hours scheduling, clear written scopes, and commercial-grade coatings built for high foot traffic.",
    image: "/images/proj-exterior-mediterranean.jpg",
    alt: "Stately Mediterranean commercial property painted with durable exterior coatings",
    prepSteps: [
      "Commercial pressure washing, surface degreasing, and metal rust treatment",
      "Structural caulking for expansion joints, masonry cracks, and metal seams",
      "Rust-inhibitive primer and protective topcoats on railings and metal doors",
      "Safety barricades, drop-cloth containment, and dust management during work",
      "Flexible evening or weekend scheduling for zero disruption to your customers, tenants, or staff",
    ],
    paintGrades: "Sherwin-Williams SuperPaint® Commercial Latex & Loxon® Sealer",
    idealFor: "HOA clubhouses, perimeter walls, retail storefronts, office suites, and rental turnovers.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Services", item: "/services" },
  ]);

  const webPageSchema = getWebPageSchema(
    "Painting & Refinishing Services | 4 The Love of Color Painting",
    "Explore our complete painting services in Lakewood Ranch, Sarasota, and Bradenton, FL. Premium interior walls, UV-resistant exterior coating, custom cabinet refinishing, and commercial painting.",
    "/services"
  );

  const serviceSchemas = macroServicesDetailed.map((service) =>
    getServiceSchema({
      name: service.title,
      description: service.description,
      url: `/services#${service.slug}`,
      image: service.image,
    })
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden bg-warm-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema,
            webPageSchema,
            ...serviceSchemas,
          ]).replace(/</g, "\\u003c"),
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
                  <BreadcrumbPage>Services</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink leading-tight mb-4">
            Painting &amp; Refinishing Services
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl font-medium">
            From detailed interior room refreshes to weather-tested exterior coatings, explore our family-owned painting services built for Florida&apos;s Suncoast climate.
          </p>
        </section>

        {/* Service Cards Section */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full space-y-12">
          {macroServicesDetailed.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 bg-white border border-ink/10 rounded-[var(--radius)] overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Media Column */}
                <div
                  className={`lg:col-span-5 relative bg-warm-bg ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="h-full w-full relative min-h-[260px] lg:min-h-[380px]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                      {service.title}
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-wider text-terracotta">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Surface Prep Process */}
                  <div className="space-y-2 pt-4 border-t border-ink/10">
                    <span className="text-xs uppercase font-bold tracking-wider text-ink block">
                      Surface Prep &amp; Application Process:
                    </span>
                    <ul className="space-y-1.5">
                      {service.prepSteps.map((step, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-ink-muted flex items-start gap-2"
                        >
                          <span className="text-terracotta font-bold">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications Footer */}
                  <div className="pt-3 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                    <div>
                      <span className="font-bold text-ink">Specified System: </span>
                      <span className="text-ink-muted">{service.paintGrades}</span>
                    </div>

                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="bg-terracotta text-white font-bold uppercase tracking-widest text-[11px] h-10 px-5 rounded-[var(--radius)] hover:bg-[var(--color-terracotta-dark)] transition-colors inline-flex items-center justify-center shrink-0 w-full sm:w-auto"
                    >
                      Request Free Estimate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Clean Call To Action Section */}
        <section className="px-4 lg:px-8 pb-16 lg:pb-24 max-w-7xl mx-auto w-full">
          <div className="bg-ink text-white p-8 sm:p-12 rounded-[var(--radius)] shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Ready to transform your home or commercial space?
              </h2>
              <p className="text-sm text-white/80 font-medium">
                Schedule a free on-site walkthrough with Edwin and our family crew for a clear, written estimate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="bg-terracotta text-white font-bold text-xs uppercase tracking-widest h-11 px-7 hover:bg-white hover:text-ink transition-colors rounded-[var(--radius)] inline-flex items-center justify-center text-center"
              >
                Request Free Estimate
              </Link>
              <a
                href={contact.phoneHref}
                className="border border-white/30 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-widest h-11 px-5 rounded-[var(--radius)] inline-flex items-center justify-center text-center"
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
