import { cityPages } from "@/lib/data/cityPages";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
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

export const metadata: Metadata = {
  title: "Service Areas | 4 The Love of Color | Lakewood Ranch Painters",
  description: "View our comprehensive list of over 50 service areas across Lakewood Ranch, Sarasota, and Bradenton.",
};

const lakewoodVillages = [
  "lakewood-ranch", "the-lake-club", "country-club-east", "waterside", "esplanade", "esplanade-at-azario", 
  "lakewood-national", "star-farms", "lorraine-lakes", "del-webb", "cresswind", 
  "sweetwater", "sapphire-point", "greenbrook", "riverwalk", "summerfield", 
  "central-park", "mallory-park"
];

const sarasotaCoast = [
  "sarasota", "venice", "bird-key", "lido-key", "st.-armands", "siesta-key", "longboat-key", "casey-key", 
  "downtown-sarasota", "west-of-trail", "harbor-acres", "southside-village", 
  "cherokee-park", "oyster-bay", "the-meadows", "palmer-ranch", "prestancia", 
  "laurel-oak-estates", "founders-club"
];

// Everything else falls into Bradenton & Manatee

export default function LocationsHubPage() {
  const lwrGroup = cityPages
    .filter(p => lakewoodVillages.includes(p.slug))
    .sort((a, b) => a.city.localeCompare(b.city));

  const sarasotaGroup = cityPages
    .filter(p => sarasotaCoast.includes(p.slug))
    .sort((a, b) => a.city.localeCompare(b.city));

  const bradentonGroup = cityPages
    .filter(p => !lakewoodVillages.includes(p.slug) && !sarasotaCoast.includes(p.slug))
    .sort((a, b) => a.city.localeCompare(b.city));

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden">
      <Header />
      <main className="flex-1 bg-warm-bg">
        {/* Hero */}
        <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden border-b border-ink/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="mb-12">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Locations</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            <div className="max-w-3xl">
              <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">
                Where We Paint
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink font-bold mb-6 tracking-tight leading-tight">
                Service Areas across the Suncoast.
              </h1>
              <p className="text-lg lg:text-xl text-ink-muted leading-relaxed mb-8">
                From the master-planned villages of Lakewood Ranch to the coastal estates of Sarasota and the historic homes of Bradenton, we understand the specific architectural and environmental demands of your neighborhood.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#lakewood-ranch" className="text-sm font-bold uppercase tracking-widest bg-white border border-ink/10 px-6 py-3 rounded-[var(--radius)] hover:border-terracotta hover:text-terracotta transition-colors shadow-sm">
                  Lakewood Ranch
                </a>
                <a href="#sarasota" className="text-sm font-bold uppercase tracking-widest bg-white border border-ink/10 px-6 py-3 rounded-[var(--radius)] hover:border-terracotta hover:text-terracotta transition-colors shadow-sm">
                  Sarasota & Coast
                </a>
                <a href="#bradenton" className="text-sm font-bold uppercase tracking-widest bg-white border border-ink/10 px-6 py-3 rounded-[var(--radius)] hover:border-terracotta hover:text-terracotta transition-colors shadow-sm">
                  Bradenton
                </a>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        </section>

        {/* Grid Matrix */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              
              {/* Column 1: Lakewood Ranch */}
              <div id="lakewood-ranch" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-ink/10">
                  <MapPin className="w-6 h-6 text-terracotta" />
                  <h2 className="text-2xl font-serif font-bold text-ink">Lakewood Ranch</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {lwrGroup.map(city => (
                    <li key={city.slug}>
                      <Link 
                        href={`/locations/${city.slug}`}
                        className="group flex items-center justify-between p-3 rounded-[var(--radius)] hover:bg-warm-card border border-transparent hover:border-ink/5 transition-all"
                      >
                        <span className="text-sm font-semibold text-ink group-hover:text-terracotta transition-colors">
                          {city.city}
                        </span>
                        <ArrowRight className="w-4 h-4 text-ink/20 group-hover:text-terracotta transition-colors group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Sarasota & Coast */}
              <div id="sarasota" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-ink/10">
                  <MapPin className="w-6 h-6 text-terracotta" />
                  <h2 className="text-2xl font-serif font-bold text-ink">Sarasota & Coastal Keys</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {sarasotaGroup.map(city => (
                    <li key={city.slug}>
                      <Link 
                        href={`/locations/${city.slug}`}
                        className="group flex items-center justify-between p-3 rounded-[var(--radius)] hover:bg-warm-card border border-transparent hover:border-ink/5 transition-all"
                      >
                        <span className="text-sm font-semibold text-ink group-hover:text-terracotta transition-colors">
                          {city.city}
                        </span>
                        <ArrowRight className="w-4 h-4 text-ink/20 group-hover:text-terracotta transition-colors group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Bradenton */}
              <div id="bradenton" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-ink/10">
                  <MapPin className="w-6 h-6 text-terracotta" />
                  <h2 className="text-2xl font-serif font-bold text-ink">Bradenton & Manatee</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {bradentonGroup.map(city => (
                    <li key={city.slug}>
                      <Link 
                        href={`/locations/${city.slug}`}
                        className="group flex items-center justify-between p-3 rounded-[var(--radius)] hover:bg-warm-card border border-transparent hover:border-ink/5 transition-all"
                      >
                        <span className="text-sm font-semibold text-ink group-hover:text-terracotta transition-colors">
                          {city.city}
                        </span>
                        <ArrowRight className="w-4 h-4 text-ink/20 group-hover:text-terracotta transition-colors group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
