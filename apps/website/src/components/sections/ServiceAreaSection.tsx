"use client";

import { serviceCities, lakewoodRanchNeighborhoods } from "@/lib/data/content";

export function ServiceAreaSection() {
  return (
    <section className="bg-ink text-white pt-16 pb-20 lg:pt-20 lg:pb-32 border-b border-white/5 relative overflow-hidden">
      {/* Retro Macintosh Rainbow Divider */}
      <div className="absolute top-0 left-0 w-full flex h-2 sm:h-2.5 z-30">
        <div className="flex-1 bg-[#61bb46]" /> {/* Green */}
        <div className="flex-1 bg-[#fdb827]" /> {/* Yellow */}
        <div className="flex-1 bg-[#f5821f]" /> {/* Orange */}
        <div className="flex-1 bg-[#e03a3e]" /> {/* Red */}
        <div className="flex-1 bg-[#963d97]" /> {/* Purple */}
        <div className="flex-1 bg-[#009dcf]" /> {/* Blue */}
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="w-full flex justify-start mb-8">
          <div className="w-52 sm:w-60 h-9 flex items-center justify-center rounded-[var(--radius)] bg-terracotta text-white text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-center">
            Service Area
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Typography */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Proudly serving Lakewood Ranch & Sarasota.
            </h2>
            <p className="text-lg text-gray-400 font-medium max-w-md leading-relaxed">
              We bring our meticulous craftsmanship and premium eco-friendly coatings directly to your neighborhood across the Suncoast.
            </p>
          </div>
          
          {/* Right Side: Structured Pills */}
          <div className="pt-8 lg:pt-0 lg:pl-12 lg:border-l border-white/10">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-gold mb-6">Cities Covered</h3>
            <div className="flex flex-wrap gap-3 mb-16">
              {serviceCities.map((city) => (
                <span key={city} className="px-4 py-2 bg-white/5 text-white text-sm font-bold border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                  {city}
                </span>
              ))}
            </div>
            
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-gold mb-6">Lakewood Ranch Villages</h3>
            <div className="flex flex-wrap gap-x-2 gap-y-3">
              {lakewoodRanchNeighborhoods.map((hood) => (
                <span key={hood} className="text-gray-400 text-sm font-medium after:content-['·'] after:ml-2 last:after:content-['']">
                  {hood}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
