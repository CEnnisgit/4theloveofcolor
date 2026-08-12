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
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  getBreadcrumbSchema,
  getServiceSchema,
  getWebPageSchema,
} from "@/lib/seo/schema";
import { contact, business } from "@/lib/data/content";
import {
  CheckCircle2,
  ShieldCheck,
  Paintbrush,
  Sparkles,
  Sun,
  Droplets,
  Phone,
  ArrowRight,
  Home,
  Building2,
  Wrench,
  FileText,
  Layers,
  Award,
  Clock,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Painting Services | Interior, Exterior & Cabinet Refinishing in Sarasota",
  description:
    "Explore our complete macro painting services in Lakewood Ranch, Sarasota, and Bradenton, FL. Premium interior walls, UV-resistant exterior coating, custom cabinet refinishing, and commercial painting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Macro & Specialized Painting Services | 4 The Love of Color Painting",
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
  badges: string[];
  prepSteps: string[];
  paintGrades: string;
  idealFor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const macroServicesDetailed: ServiceDetail[] = [
  {
    title: "Interior Painting",
    slug: "interior-painting",
    tagline: "Flawless walls, ceilings & trim engineered for clean indoor air and Florida humidity.",
    description:
      "Transform the rooms you live in every day with rich color, razor-sharp lines, and uncompromised surface preparation. Florida heat and air conditioning create humidity shifts that stress interior drywall joints. We use zero-VOC, washable paint formulas that protect indoor air quality while standing up to scrubbing and daily family life.",
    image: "/images/proj-interior-bedroom.jpg",
    alt: "Master bedroom featuring warm greige walls, white crown molding, and tray ceiling",
    badges: ["Low-VOC / Zero-VOC", "Scrub-Resistant", "SW Emerald® Interior"],
    icon: Home,
    prepSteps: [
      "Full floor and furniture masking with heavy-duty drop cloths and sealed plastic film",
      "Drywall nail hole filling, tape seam repairs, and light pole-sanding across all walls",
      "Stain-blocking bonding primer over water spots, repaired drywall, and bare wood",
      "Hand-caulking all baseboard, crown molding, and door trim joints with acrylic sealants",
      "Two full finish coats applied for flawless opacity, crisp cut-lines, and even sheen",
    ],
    paintGrades:
      "Sherwin-Williams Emerald® Interior Latex & Emerald® Urethane Trim Enamel (or Benjamin Moore Aura®)",
    idealFor:
      "Bedrooms, kitchens, open living areas, tray ceilings, hallways, trim, doors, and accent walls.",
  },
  {
    title: "Exterior Painting",
    slug: "exterior-painting",
    tagline: "Suncoast climate protection against intense UV, tropical salt air & summer storms.",
    description:
      "Florida exterior paint faces harsh conditions: relentless UV rays, tropical humidity, sea salt spray, and heavy afternoon rains. We deliver complete exterior stucco, siding, and trim painting built around high-pressure washing, elastomeric crack repair, and 100% acrylic moisture-barrier coatings.",
    image: "/images/proj-exterior-modern.jpg",
    alt: "Single-story Florida home with crisp gray stucco finish and white garage trim",
    badges: ["Weather-Rated", "UV & Salt Shield", "SW Duration® Exterior"],
    icon: Sun,
    prepSteps: [
      "High-pressure power washing with eco-friendly cleaner to strip mildew, chalk, and salt residue",
      "Hand-scraping loose paint down to sound substrate and feather-sanding all paint edges",
      "Elastomeric masonry caulking applied to hairline stucco cracks and window/door perimeters",
      "Loxon® high-build masonry primer sealing raw stucco, patch repairs, and porous surfaces",
      "Two coats of SW Duration® or Emerald® Exterior providing a flexible UV & rain barrier",
    ],
    paintGrades:
      "Sherwin-Williams Duration® Exterior Acrylic / Loxon® High-Build Primer (or Benjamin Moore Regal® Select)",
    idealFor:
      "Stucco residences, coastal estates, soffits, fascia, lanais, pool cages, front doors, and garage doors.",
  },
  {
    title: "Cabinet Refinishing",
    slug: "cabinet-refinishing",
    tagline: "A factory-smooth, hard-cured enamel spray finish without complete cabinet replacement.",
    description:
      "Save tens of thousands of dollars by refinishing your existing wood or MDF cabinetry instead of tearing it out. We remove doors and drawer fronts, strip cooking grease, sand down to sound wood, and apply multi-coat waterborne urethanes via spray application for a factory-smooth, non-yellowing, hard-cured finish.",
    image: "/images/proj-interior-room.jpg",
    alt: "Refinished custom kitchen cabinets showcasing a smooth white enamel spray finish",
    badges: ["Factory Spray Finish", "Hard-Cured Enamel", "SW Gallery Series™"],
    icon: Sparkles,
    prepSteps: [
      "Complete door and drawer front disassembly, hardware indexing, and transport preparation",
      "Heavy-duty chemical degreasing and deglossing to strip cooking oils and surface residue",
      "Multi-stage mechanical sanding down to clean substrate for maximum adhesion keying",
      "High-bond stain-blocking primer coats applied with intermediate fine sanding passes",
      "HVLP spray application in controlled containment for a silky, brushmark-free finish",
    ],
    paintGrades:
      "Sherwin-Williams Gallery Series™ Waterborne Topcoat or Emerald® Urethane Enamel",
    idealFor:
      "Kitchen cabinets, bathroom vanities, island accents, built-in entertainment units, and mudrooms.",
  },
  {
    title: "Commercial Painting",
    slug: "commercial-painting",
    tagline: "Professional interior & exterior coatings scheduled around your business hours.",
    description:
      "Maintain a pristine corporate image for your store, office, or HOA community without disturbing customers, tenants, or daily operations. We offer flexible night and weekend scheduling, written scope specifications, and commercial-grade coatings designed to withstand heavy foot traffic and outdoor weather exposure.",
    image: "/images/proj-exterior-mediterranean.jpg",
    alt: "Stately Mediterranean commercial estate painted with commercial-grade exterior coatings",
    badges: ["HOA & ARB Compliant", "Off-Hours Scheduling", "High-Traffic Coatings"],
    icon: Building2,
    prepSteps: [
      "Commercial pressure washing, concrete surface degreasing, and metal rust treatment",
      "Structural polyurethane caulking for expansion joints, masonry cracks, and metal seams",
      "Rust-inhibitive metal primer and protective topcoats on commercial railings and doors",
      "Pedestrian safety barriers, drop-cloth containment, and dust management during work",
      "Off-hours or weekend execution scheduled to ensure uninterrupted trading hours",
    ],
    paintGrades:
      "Sherwin-Williams SuperPaint® Commercial Latex, Loxon® Sealer, ProMar® 200 HP",
    idealFor:
      "HOA clubhouses & perimeter walls, retail storefronts, office suites, medical clinics, and rental turnovers.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Services", item: "/services" },
  ]);

  const webPageSchema = getWebPageSchema(
    "Macro & Specialized Painting Services | 4 The Love of Color Painting",
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

      <main className="flex-1 space-y-16 lg:space-y-24 pb-16 lg:pb-24">
        {/* Subpage Hero Section (Beat 1 - Strict Hero Rules: Breadcrumbs -> H1 -> Lead text) */}
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
                  <BreadcrumbPage>Services</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6 max-w-4xl">
            Macro &amp; Specialized Painting Services
          </h1>
          <p className="text-base sm:text-xl text-ink-muted leading-relaxed max-w-3xl font-medium">
            From comprehensive interior transformations and weather-rated exterior protection to custom cabinet refinishing and commercial spaces, explore our complete painting systems built specifically for Florida&apos;s Suncoast climate.
          </p>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="h-0.5 bg-ink/30 w-full" />
        </div>

        {/* Beat 2: Deep-Dive Macro Service Cards & Specifications */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full space-y-16 lg:space-y-24">
          {macroServicesDetailed.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 space-y-8"
              >
                <Card className="bg-white border border-ink/10 rounded-[var(--radius)] shadow-sm overflow-hidden p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Media Column */}
                    <div
                      className={`lg:col-span-5 relative bg-ink ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="h-full w-full relative min-h-[300px] lg:min-h-[440px]">
                        <AspectRatio ratio={4 / 3} className="h-full w-full">
                          <Image
                            src={service.image}
                            alt={service.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            className="object-cover"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent lg:hidden" />
                        <div className="absolute bottom-4 left-4 right-4 lg:hidden flex flex-wrap gap-2">
                          {service.badges.map((badgeText) => (
                            <Badge
                              key={badgeText}
                              className="bg-terracotta text-white font-bold text-[10px] uppercase tracking-wider rounded-[var(--radius)] shadow-sm"
                            >
                              {badgeText}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        {/* Desktop Badges */}
                        <div className="hidden lg:flex flex-wrap items-center gap-2">
                          <div className="w-8 h-8 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta mr-1">
                            <ServiceIcon className="w-4 h-4" />
                          </div>
                          {service.badges.map((badgeText) => (
                            <Badge
                              key={badgeText}
                              variant="secondary"
                              className="bg-terracotta/10 text-terracotta font-bold text-[10px] uppercase tracking-wider rounded-[var(--radius)] border-0"
                            >
                              {badgeText}
                            </Badge>
                          ))}
                        </div>

                        <h2 className="font-serif text-2xl sm:text-4xl font-bold text-ink leading-tight">
                          {service.title}
                        </h2>
                        <p className="text-xs sm:text-sm uppercase font-bold tracking-[0.15em] text-terracotta font-sans">
                          {service.tagline}
                        </p>
                        <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </div>

                      {/* Surface Prep Checklist */}
                      <div className="space-y-3 pt-4 border-t border-ink/10">
                        <p className="text-xs uppercase font-bold tracking-[0.2em] text-ink">
                          Surface Prep &amp; Application Standard:
                        </p>
                        <ul className="grid grid-cols-1 gap-2.5">
                          {service.prepSteps.map((step) => (
                            <li
                              key={step}
                              className="text-xs sm:text-sm text-ink-muted flex items-start gap-2.5 font-medium"
                            >
                              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Paint Grade & Ideal For Spec Callouts */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-warm-bg border border-ink/10 rounded-[var(--radius)] text-xs text-ink-muted">
                        <div>
                          <span className="font-bold text-ink block mb-0.5 uppercase tracking-wider text-[11px]">
                            Specified Paint Systems:
                          </span>
                          <span className="font-medium">{service.paintGrades}</span>
                        </div>
                        <div>
                          <span className="font-bold text-ink block mb-0.5 uppercase tracking-wider text-[11px]">
                            Recommended Scope:
                          </span>
                          <span className="font-medium">{service.idealFor}</span>
                        </div>
                      </div>

                      {/* Trigger Quote Button */}
                      <div className="pt-2">
                        <Link
                          href={`/contact?service=${service.slug}`}
                          className="inline-flex items-center justify-center gap-2 bg-terracotta text-white font-bold text-xs uppercase tracking-widest px-6 h-12 rounded-[var(--radius)] hover:bg-ink transition-colors shadow-sm w-full sm:w-auto"
                        >
                          <span>Request Free {service.title} Quote</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="h-0.5 bg-ink/30 w-full" />
        </div>

        {/* Beat 3.5: Suncoast Quality & Paint Engineering Guarantee Grid */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta">
              Product &amp; Material Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
              Why Our Paint Systems Hold Up on the Suncoast
            </h2>
            <p className="text-base text-ink-muted font-medium leading-relaxed">
              Florida sun, coastal salt air, and heavy tropical rain break down lower-grade paints in less than 36 months. Here is how we engineer long-term durability into every coat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border border-ink/10 rounded-[var(--radius)] p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                <Sun className="w-5 h-5" />
              </div>
              <CardTitle className="font-serif text-xl font-bold text-ink">
                UV &amp; Heat Resistance
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                Sherwin-Williams Emerald® and Duration® feature 100% acrylic cross-linking resins that reflect intense UV radiation and prevent fading or chalking.
              </CardDescription>
            </Card>

            <Card className="bg-white border border-ink/10 rounded-[var(--radius)] p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                <Droplets className="w-5 h-5" />
              </div>
              <CardTitle className="font-serif text-xl font-bold text-ink">
                Mildew &amp; Salt Shield
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                Advanced antimicrobial additives prevent black algae and mildew growth caused by high Gulf Coast humidity and morning ocean condensation.
              </CardDescription>
            </Card>

            <Card className="bg-white border border-ink/10 rounded-[var(--radius)] p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <CardTitle className="font-serif text-xl font-bold text-ink">
                Elastomeric Flexibility
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                Our exterior masonry primers and sealants expand and contract with Florida stucco temperature shifts, preventing hairline water infiltration.
              </CardDescription>
            </Card>

            <Card className="bg-white border border-ink/10 rounded-[var(--radius)] p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-[var(--radius)] bg-warm-bg border border-ink/10 flex items-center justify-center text-terracotta">
                <Sparkles className="w-5 h-5" />
              </div>
              <CardTitle className="font-serif text-xl font-bold text-ink">
                Clean Indoor Air Quality
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium">
                We specify low-VOC and zero-VOC paints so you can sleep in your home the night after interior painting with zero heavy paint fumes.
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="h-0.5 bg-ink/30 w-full" />
        </div>

        {/* Beat 3: Interactive Surface Prep & Process Walkthrough (Accordion) */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-terracotta">
                  Meticulous Workflow
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight">
                  Step-by-Step Prep &amp; Execution Breakdown
                </h2>
                <p className="text-base text-ink-muted leading-relaxed font-medium">
                  Prep work makes up 70% of a lasting paint job. Explore our specific step-by-step workflow for each service category to see how we protect your home and ensure flawless adhesion.
                </p>
              </div>

              <div className="p-6 bg-white border border-ink/10 rounded-[var(--radius)] space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-terracotta shrink-0" />
                  <h3 className="font-serif text-lg font-bold text-ink">
                    Craftsmanship Guarantee
                  </h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed font-medium">
                  We don&apos;t cut corners on sanding, caulking, or masking. Every surface is prepared to manufacturer specifications before topcoats are applied.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-ink/10 rounded-[var(--radius)] p-6 sm:p-10 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-ink/10 pb-4">
                Service Process Walkthroughs
              </h3>

              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                <AccordionItem value="item-0" className="border-b border-ink/10 py-2">
                  <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-serif text-lg font-bold text-terracotta">
                        01.
                      </span>
                      <span>Interior Wall &amp; Trim Prep Workflow</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-2 pl-9 space-y-3 font-medium">
                    <p>
                      Our interior process is built around protection and perfection. Before any paint container is opened, we lay down heavy-duty floor runner film and drop cloths. All furniture is centralized and covered in clean plastic sheeting.
                    </p>
                    <p>
                      Next, we patch nail holes, smooth drywall tape seams, sand wall surfaces for paint bite, and apply stain-blocking primer over water spots. All baseboards, crown molding, and window casings are hand-caulked with precision before applying two coats of SW Emerald® Interior.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1" className="border-b border-ink/10 py-2">
                  <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-serif text-lg font-bold text-terracotta">
                        02.
                      </span>
                      <span>Exterior Power Washing &amp; Stucco Sealing</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-2 pl-9 space-y-3 font-medium">
                    <p>
                      Exterior painting begins with high-pressure washing using eco-friendly cleaning agents to remove dirt, chalk, algae, and salt buildup. Once dry, we scrape loose paint down to sound substrate and feather-sand all edges.
                    </p>
                    <p>
                      Hairline stucco cracks are filled with elastomeric masonry patch, and window/door perimeter seams are sealed with polyurethane caulk. We apply Loxon® alkali-resistant primer over bare stucco followed by two coats of SW Duration® acrylic finish.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-ink/10 py-2">
                  <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-serif text-lg font-bold text-terracotta">
                        03.
                      </span>
                      <span>Cabinet Disassembly &amp; HVLP Spray Process</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-2 pl-9 space-y-3 font-medium">
                    <p>
                      Cabinet doors and drawer fronts are carefully removed, indexed, and transported to our dedicated spraying setup. The remaining cabinet frames inside your home are sealed inside plastic containment walls with negative-air ventilation.
                    </p>
                    <p>
                      Surfaces are thoroughly degreased, sanded down to clean substrate, and primed with high-adhesion shellac or urethane primer. We spray multiple coats of SW Gallery Series™ waterborne topcoat, performing fine intermediate sanding for a hard-cured, factory-smooth enamel finish.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b-0 py-2">
                  <AccordionTrigger className="text-lg sm:text-xl hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-serif text-lg font-bold text-terracotta">
                        04.
                      </span>
                      <span>Commercial &amp; Off-Hours Scheduling</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-ink-muted leading-relaxed pt-2 pl-9 space-y-3 font-medium">
                    <p>
                      Commercial projects require strict coordination to minimize operational downtime. We start with a comprehensive site assessment and clear written proposal covering scope, timeline, and exact safety protocols.
                    </p>
                    <p>
                      We offer evening, night, and weekend shift work to keep your doors open to customers. Safety barricades, dust containment, and low-VOC paints keep your commercial facility safe and clean throughout the job.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Retro Macintosh 6-Stripe Rainbow Accent Bar (DESIGN.md Rule) */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="w-full flex h-2 sm:h-2.5 overflow-hidden rounded-[var(--radius)]">
            <div className="flex-1 bg-[#61bb46]" />
            <div className="flex-1 bg-[#fdb827]" />
            <div className="flex-1 bg-[#f5821f]" />
            <div className="flex-1 bg-[#e03a3e]" />
            <div className="flex-1 bg-[#963d97]" />
            <div className="flex-1 bg-[#009dcf]" />
          </div>
        </div>

        {/* Beat 4: Direct Call to Action Section */}
        <section className="px-4 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="bg-ink text-white p-8 sm:p-12 lg:p-16 rounded-[var(--radius)] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta font-sans">
                Direct Owner Involvement
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Ready to transform your home or commercial space?
              </h2>
              <p className="text-base text-gray-300 font-medium leading-relaxed">
                Schedule a free, no-pressure on-site walkthrough with Edwin and his sons. Get a clear written estimate with guaranteed pricing and zero hidden fees.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-gray-300 font-medium">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>{business.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-gold" />
                  <span>Serving Lakewood Ranch, Sarasota &amp; Bradenton</span>
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
