"use client";

import { motion } from "framer-motion";
import { serviceCities, lakewoodRanchNeighborhoods } from "@/lib/data/content";

export function ServiceAreaSection() {
  return (
    <section className="px-4 lg:px-8 py-16 lg:py-32 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="bg-ink text-white p-6 sm:p-12 lg:p-24 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-br from-[var(--color-terracotta)]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-6 sm:space-y-8">
          <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Service Area
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
            Proudly serving Lakewood Ranch, Sarasota, and the Suncoast.
          </h2>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed font-medium">
            Based in Lakewood Ranch, we paint homes and commercial properties throughout Manatee and Sarasota County.
          </p>

          <div className="pt-6 sm:pt-8 space-y-4">
            <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] font-bold text-gold">
              Cities Covered:
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {serviceCities.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 text-xs sm:text-sm font-bold border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 sm:pt-8 space-y-4">
            <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] font-bold text-gold">
              Lakewood Ranch Villages:
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
              {lakewoodRanchNeighborhoods.join(" · ")}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
