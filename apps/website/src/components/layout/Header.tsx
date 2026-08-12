"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/lib/data/content";
import { ChevronDown, MapPin, Sparkles, Building2, Paintbrush, ArrowRight } from "lucide-react";
import { servicePages } from "@/lib/data/servicePages";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const residentialServices = servicePages.filter((s) => s.persona === "residential" || s.persona === "both");
  const commercialServices = servicePages.filter((s) => s.persona === "commercial" || s.persona === "both");

  const locationsList = [
    { name: "Lakewood Ranch (HQ)", href: "/locations/lakewood-ranch" },
    { name: "Sarasota", href: "/locations/sarasota" },
    { name: "Bradenton", href: "/locations/bradenton" },
    { name: "Venice", href: "/locations/venice" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-warm-bg/90 border-b border-ink/5 px-6 lg:px-8 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          <Image
            src="/images/logo-emblem.png"
            alt="4 The Love of Color Emblem"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-xl leading-none text-ink">
              4 The Love of Color
            </span>
            <span className="text-[9px] sm:text-xs text-ink-muted tracking-widest mt-1 uppercase font-semibold">
              Painting · Lakewood Ranch, FL
            </span>
          </div>
        </Link>

        {/* Clean 5-Item Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide">
          
          {/* Home */}
          <Link
            href="/"
            className={pathname === "/" ? "text-terracotta" : "text-ink hover:text-terracotta transition-colors"}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 py-2 ${
                pathname.includes("/residential") || pathname.includes("/commercial") || pathname.includes("/services")
                  ? "text-terracotta"
                  : "text-ink hover:text-terracotta transition-colors"
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeDropdown === "services" && (
              <div className="absolute top-full left-0 w-[550px] bg-white border border-ink/10 rounded-[var(--radius)] shadow-xl p-5 grid grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2 duration-200">
                
                {/* Residential Silo */}
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-3">
                    <span className="text-sm font-bold text-ink">
                      For Homeowners
                    </span>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-4">
                    {/* Interior Solutions */}
                    <div>
                      <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-widest text-terracotta block mb-1">
                        Interior Solutions
                      </span>
                      {residentialServices.filter(s => s.category === "interior").map(s => (
                        <Link
                          key={s.slug}
                          href={`/residential/${s.slug}`}
                          className="px-2 py-1.5 rounded-[var(--radius)] text-[13px] font-semibold text-ink-muted hover:bg-warm-card hover:text-ink transition-colors block"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>

                    {/* Exterior Solutions */}
                    <div>
                      <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-widest text-terracotta block mb-1">
                        Exterior Solutions
                      </span>
                      {residentialServices.filter(s => s.category === "exterior").map(s => (
                        <Link
                          key={s.slug}
                          href={`/residential/${s.slug}`}
                          className="px-2 py-1.5 rounded-[var(--radius)] text-[13px] font-semibold text-ink-muted hover:bg-warm-card hover:text-ink transition-colors block"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink/5">
                    <Link href="/residential" className="text-xs font-bold text-terracotta hover:text-ink transition-colors flex items-center px-2">
                      View All Residential <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>

                {/* Commercial Silo */}
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-3">
                    <span className="text-sm font-bold text-ink">
                      For Businesses
                    </span>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-4">
                    {/* Core Commercial */}
                    <div>
                      <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-widest text-terracotta block mb-1">
                        Core Commercial
                      </span>
                      {commercialServices.filter(s => s.category === "core").map(s => (
                        <Link
                          key={s.slug}
                          href={`/commercial/${s.slug}`}
                          className="px-2 py-1.5 rounded-[var(--radius)] text-[13px] font-semibold text-ink-muted hover:bg-warm-card hover:text-ink transition-colors block"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>

                    {/* Maintenance & Prep */}
                    <div>
                      <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-widest text-terracotta block mb-1">
                        Maintenance & Prep
                      </span>
                      {commercialServices.filter(s => s.category !== "core").map(s => (
                        <Link
                          key={s.slug}
                          href={`/commercial/${s.slug}`}
                          className="px-2 py-1.5 rounded-[var(--radius)] text-[13px] font-semibold text-ink-muted hover:bg-warm-card hover:text-ink transition-colors block"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink/5">
                    <Link href="/commercial" className="text-xs font-bold text-terracotta hover:text-ink transition-colors flex items-center px-2">
                      View All Commercial <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("locations")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/locations"
              className={`flex items-center gap-1 py-2 ${
                pathname.includes("/locations")
                  ? "text-terracotta"
                  : "text-ink hover:text-terracotta transition-colors"
              }`}
            >
              <span>Locations</span>
              <ChevronDown className="w-4 h-4" />
            </Link>

            {activeDropdown === "locations" && (
              <div className="absolute top-full left-0 w-64 bg-white border border-ink/10 rounded-[var(--radius)] shadow-xl p-3 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                <span className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-ink-muted border-b border-ink/5 mb-1">
                  Primary Hubs
                </span>
                {locationsList.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 rounded-[var(--radius)] text-xs font-semibold text-ink hover:bg-warm-card hover:text-terracotta transition-colors flex items-center gap-2"
                  >
                    <MapPin className="w-3.5 h-3.5 text-terracotta" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                <div className="w-full h-px bg-ink/5 my-1"></div>
                <Link
                  href="/locations"
                  className="px-3 py-2 rounded-[var(--radius)] text-xs font-bold text-white bg-ink hover:bg-terracotta transition-colors flex items-center justify-center gap-2 mt-1"
                >
                  View All 50+ Service Areas
                </Link>
              </div>
            )}
          </div>

          {/* Guides */}
          <Link
            href="/guides"
            className={pathname.includes("/guides") ? "text-terracotta" : "text-ink hover:text-terracotta transition-colors"}
          >
            Guides
          </Link>

          {/* Projects */}
          <Link
            href="/projects"
            className={pathname === "/projects" ? "text-terracotta" : "text-ink hover:text-terracotta transition-colors"}
          >
            Projects
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={pathname === "/about" ? "text-terracotta" : "text-ink hover:text-terracotta transition-colors"}
          >
            About
          </Link>

        </nav>

        {/* Call CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-[var(--radius)] border border-ink/20 text-ink text-xs uppercase tracking-widest font-bold hover:bg-ink hover:text-white transition-colors"
          >
            Estimate
          </Link>

          <a
            href={contact.phoneHref}
            className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius)] bg-terracotta text-white text-xs uppercase tracking-widest font-bold shadow-md hover:bg-[var(--color-terracotta-dark)] hover:-translate-y-0.5 transition-all"
          >
            Call {contact.phone}
          </a>
        </div>

      </div>
    </header>
  );
}
