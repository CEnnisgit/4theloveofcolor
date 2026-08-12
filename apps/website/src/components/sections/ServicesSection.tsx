"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCategories } from "@/lib/data/content";
import { servicePageBySlug } from "@/lib/data/servicePages";
import { StockPhotoWatermark } from "@/components/ui/StockPhotoWatermark";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");
  
  // Filter categories based on active tab
  const filteredCategories = serviceCategories.filter(c => c.persona === activeTab);
  const [hoveredCategory, setHoveredCategory] = useState(filteredCategories[0]);
  
  const wheelContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Reset hovered category when tab changes
  useEffect(() => {
    setHoveredCategory(serviceCategories.filter(c => c.persona === activeTab)[0]);
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

      setHoveredCategory((current) => {
        const currentFiltered = serviceCategories.filter(c => c.persona === activeTab);
        const currentIndex = currentFiltered.findIndex(c => c.id === current.id);
        
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
                {filteredCategories.map((category) => {
                  const isActive = hoveredCategory?.id === category.id;
                  return (
                    <div 
                      key={category.id}
                      className={`cursor-pointer transition-all duration-500 border-l-4 pl-4 sm:pl-6 py-2 ${isActive ? 'border-gold opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                      onMouseEnter={() => setHoveredCategory(category)}
                      onClick={() => setHoveredCategory(category)}
                    >
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 transition-colors">
                        {category.title}
                      </h3>
                      
                      <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3 sm:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                            {category.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                            {category.services.map(slug => {
                              const page = servicePageBySlug(slug);
                              if (!page) return null;
                              return (
                                <span key={slug} className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 border border-white/20 rounded-full text-white/90 bg-white/5 whitespace-nowrap">
                                  {page.name}
                                </span>
                              );
                            })}
                          </div>

                          <div className="block lg:hidden mb-6 relative aspect-[16/10] rounded-sm overflow-hidden shadow-lg border border-white/10">
                            <Image
                              src={category.image}
                              alt={category.title}
                              fill
                              className="object-cover"
                            />
                            <StockPhotoWatermark />
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
              {filteredCategories.map((category) => (
                <div key={category.id} className={`absolute inset-0 transition-opacity duration-1000 ${hoveredCategory?.id === category.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    priority={hoveredCategory?.id === category.id}
                    className="object-cover brightness-105 contrast-105"
                  />
                  <StockPhotoWatermark />
                </div>
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