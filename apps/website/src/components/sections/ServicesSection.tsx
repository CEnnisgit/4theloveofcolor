"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { macroServices } from "@/lib/data/content";

const serviceBadges: Record<string, string[]> = {
  "interior-painting": ["Walls & Ceilings", "Crown & Trim", "Low-VOC / Zero-Odor", "Precision Masking"],
  "exterior-painting": ["Stucco & Trim", "UV-Resistant", "High-Pressure Wash", "5-Year Guarantee"],
  "cabinet-refinishing": ["HVLP Spray Finish", "Degrease & Degloss", "Factory-Smooth", "Durable Polyurethane"],
  "commercial-painting": ["Offices & Retail", "HOA Common Areas", "Flexible Hours", "Written Scope"],
  "stucco-repair": ["Crack Repair", "Elastomeric Coating", "Waterproofing", "Pressure Wash"],
  "drywall-repair": ["Patching", "Texture Matching", "Smooth Finish", "Fast Turnover"],
};

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");
  
  // Filter services based on active tab
  const filteredServices = macroServices.filter(s => s.persona === activeTab);
  const [hoveredService, setHoveredService] = useState(filteredServices[0]);
  
  const wheelContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Reset hovered service when tab changes
  useEffect(() => {
    setHoveredService(macroServices.filter(s => s.persona === activeTab)[0]);
  }, [activeTab]);

  useEffect(() => {
    const container = wheelContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (scrollTimeout.current) return;

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 400);

      setHoveredService((current) => {
        const currentFiltered = macroServices.filter(s => s.persona === activeTab);
        const currentIndex = currentFiltered.findIndex(s => s.slug === current.slug);
        
        if (e.deltaY > 0) {
          const nextIndex = Math.min(currentIndex + 1, currentFiltered.length - 1);
          return currentFiltered[nextIndex];
        } else {
          const prevIndex = Math.max(currentIndex - 1, 0);
          return currentFiltered[prevIndex];
        }
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeTab]);

  return (
    <section className="bg-ink pt-12 lg:pt-16 pb-0 border-b border-white/5 relative overflow-hidden">
      {/* Retro Macintosh Rainbow Divider */}
      <div className="absolute top-0 left-0 w-full flex h-2 sm:h-2.5 z-30">
        <div className="flex-1 bg-[#61bb46]" />
        <div className="flex-1 bg-[#fdb827]" />
        <div className="flex-1 bg-[#f5821f]" />
        <div className="flex-1 bg-[#e03a3e]" />
        <div className="flex-1 bg-[#963d97]" />
        <div className="flex-1 bg-[#009dcf]" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-terracotta/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gold/5 blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="w-full flex justify-start mb-6">
          <div className="w-52 sm:w-60 h-9 flex items-center justify-center rounded-[var(--radius)] bg-terracotta text-white text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-center">
            Our Services
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 lg:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl">
            Painting that improves how your home and business live.
          </h2>
          
          {/* Persona Tabs */}
          <div className="flex bg-white/5 p-1 rounded-[var(--radius)] border border-white/10 shrink-0 self-start lg:self-end">
            <button 
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-2.5 rounded-[var(--radius)] text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === "residential" ? "bg-terracotta text-white" : "text-white/50 hover:text-white"}`}
            >
              Homeowners
            </button>
            <button 
              onClick={() => setActiveTab("commercial")}
              className={`px-6 py-2.5 rounded-[var(--radius)] text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === "commercial" ? "bg-terracotta text-white" : "text-white/50 hover:text-white"}`}
            >
              Commercial & HOAs
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div ref={wheelContainerRef} className="lg:col-span-5 flex flex-col space-y-4">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-4"
              >
                {filteredServices.map((service) => {
                  const isActive = hoveredService?.slug === service.slug;
                  return (
                    <div 
                      key={service.slug}
                      className={`cursor-pointer transition-all duration-500 border-l-4 pl-4 sm:pl-6 py-2 ${isActive ? 'border-gold opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                      onMouseEnter={() => setHoveredService(service)}
                      onClick={() => setHoveredService(service)}
                    >
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 transition-colors">
                        {service.title}
                      </h3>
                      
                      <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3 sm:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                            {serviceBadges[service.slug]?.map(tag => (
                              <span key={tag} className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 border border-white/20 rounded-full text-white/90 bg-white/5">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="block lg:hidden mb-6 relative aspect-[16/10] rounded-sm overflow-hidden shadow-lg border border-white/10">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <Link href={`/${activeTab}`} className="inline-flex items-center text-gold font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:text-white transition-colors group">
                            Explore {activeTab === "residential" ? "Residential" : "Commercial"} Services 
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="hidden lg:block lg:col-span-7 sticky top-32">
            <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-sm overflow-hidden shadow-2xl border border-white/10 bg-black/50">
              {filteredServices.map((service) => (
                <Image
                  key={service.slug}
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={hoveredService?.slug === service.slug}
                  className={`object-cover brightness-105 contrast-105 transition-opacity duration-1000 ${hoveredService?.slug === service.slug ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent z-20 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full border-t border-white/10 mt-16 lg:mt-24 py-6 sm:py-8 bg-ink flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-12 text-white/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-bold px-4 text-center">
          <span className="hover:text-white transition-colors duration-500 cursor-default">Luxury Homes</span>
          <span className="text-terracotta opacity-50 hidden sm:inline">✦</span>
          <span className="text-terracotta opacity-50 sm:hidden">•</span>
          <span className="hover:text-white transition-colors duration-500 cursor-default">HOA Communities</span>
          <span className="text-terracotta opacity-50 hidden sm:inline">✦</span>
          <span className="text-terracotta opacity-50 sm:hidden">•</span>
          <span className="hover:text-white transition-colors duration-500 cursor-default">Commercial Facilities</span>
        </div>
      </div>
    </section>
  );
}
