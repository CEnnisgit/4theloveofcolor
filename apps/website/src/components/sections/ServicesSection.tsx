"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { macroServices } from "@/lib/data/content";

const serviceBadges: Record<string, string[]> = {
  "interior-painting": ["Walls & Ceilings", "Crown & Trim", "Low-VOC / Zero-Odor", "Precision Masking"],
  "exterior-painting": ["Stucco & Trim", "UV-Resistant", "High-Pressure Wash", "5-Year Guarantee"],
  "cabinet-refinishing": ["HVLP Spray Finish", "Degrease & Degloss", "Factory-Smooth", "Durable Polyurethane"],
  "commercial-painting": ["Offices & Retail", "HOA Common Areas", "Flexible Hours", "Written Scope"],
};

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState(macroServices[0]);
  const wheelContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = wheelContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Stop page from scrolling

      if (scrollTimeout.current) return; // Throttle wheel events so it doesn't blast through instantly

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 400); // 400ms cooldown between scrolls

      setHoveredService((current) => {
        const currentIndex = macroServices.findIndex(s => s.slug === current.slug);
        if (e.deltaY > 0) {
          // scroll down -> next item
          const nextIndex = Math.min(currentIndex + 1, macroServices.length - 1);
          return macroServices[nextIndex];
        } else {
          // scroll up -> prev item
          const prevIndex = Math.max(currentIndex - 1, 0);
          return macroServices[prevIndex];
        }
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="bg-ink pt-12 lg:pt-16 pb-0 border-b border-white/5 relative overflow-hidden">
      {/* Retro Macintosh Rainbow Divider */}
      <div className="absolute top-0 left-0 w-full flex h-2 sm:h-3 z-30">
        <div className="flex-1 bg-[#61bb46]" /> {/* Green */}
        <div className="flex-1 bg-[#fdb827]" /> {/* Yellow */}
        <div className="flex-1 bg-[#f5821f]" /> {/* Orange */}
        <div className="flex-1 bg-[#e03a3e]" /> {/* Red */}
        <div className="flex-1 bg-[#963d97]" /> {/* Purple */}
        <div className="flex-1 bg-[#009dcf]" /> {/* Blue */}
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
          <div className="w-56 sm:w-64 h-10 flex items-center justify-center rounded-[var(--radius)] bg-terracotta text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-center">
            Our Services
          </div>
        </div>
        <div className="mb-8 lg:mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl">
            Painting that improves how your home and business live.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div ref={wheelContainerRef} className="lg:col-span-5 flex flex-col space-y-4">
            {macroServices.map((service) => {
              const isActive = hoveredService.slug === service.slug;
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

                      {/* Mobile Image (Visible only on small screens inside the expanded area) */}
                      <div className="block lg:hidden mb-6 relative aspect-[16/10] rounded-sm overflow-hidden shadow-lg border border-white/10">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <Link href="/services" className="inline-flex items-center text-gold font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:text-white transition-colors group">
                        Explore {service.title} 
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Desktop Image (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-32">
            <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-sm overflow-hidden shadow-2xl border border-white/10">
              {macroServices.map((service) => (
                <Image
                  key={service.slug}
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover brightness-105 contrast-105 transition-opacity duration-1000 ${hoveredService.slug === service.slug ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent z-20 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Elegant Static Bar (Property Types) */}
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
