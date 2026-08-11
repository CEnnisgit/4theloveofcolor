"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contact } from "@/lib/data/content";

export function HeroSection() {
  return (
    <section className="relative px-6 lg:px-8 pt-12 lg:pt-16 pb-12 lg:pb-16 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      <div className="absolute top-0 right-0 lg:top-8 lg:right-auto lg:-left-48 -z-10 opacity-[0.07] pointer-events-none">
        <Image
          src="/images/logo.png"
          alt=""
          width={600}
          height={600}
          aria-hidden="true"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-7 space-y-5 sm:space-y-7"
      >
        <div className="w-fit inline-block px-3.5 py-1.5 rounded-full bg-[var(--color-terracotta)]/10 text-terracotta text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em]">
          <span>Painters in Lakewood Ranch & Sarasota</span>
        </div>
        
        {/* SOLE H1 TAG ON THE PAGE */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-ink leading-[1.1] sm:leading-[1.05] tracking-tight">
          Color, finish, and detail work that make a home feel{" "}
          <span className="italic text-terracotta underline decoration-[var(--color-gold)]/40 underline-offset-8">
            intentionally renewed.
          </span>
        </h1>

        <p className="text-sm sm:text-lg lg:text-xl text-ink-muted leading-relaxed max-w-2xl font-medium">
          Interior and exterior painting for homes and businesses across the Suncoast — designed to sharpen every space, protect against the Florida sun, and deliver a cleaner result from the first walkthrough to the last detail.
        </p>

        <div className="flex flex-row w-full gap-3 pt-1 sm:pt-3">
          <Link
            href="/contact"
            className="flex-1 inline-flex items-center justify-center px-3 sm:px-8 py-3.5 sm:py-4 rounded-sm bg-terracotta text-white text-xs sm:text-base font-bold shadow-xl shadow-[var(--color-terracotta)]/20 hover:bg-[var(--color-terracotta-dark)] hover:-translate-y-1 transition-all text-center leading-tight"
          >
            Get a Free Estimate
          </Link>
          <a
            href={contact.phoneHref}
            className="flex-1 inline-flex items-center justify-center px-3 sm:px-8 py-3.5 sm:py-4 rounded-sm bg-white border border-ink/15 text-ink text-xs sm:text-base font-bold shadow-sm hover:border-[var(--color-terracotta)] hover:text-terracotta transition-all text-center leading-tight"
          >
            Call {contact.phone}
          </a>
        </div>

        {/* Proof Badges Strip */}
        <div className="pt-4 sm:pt-6 flex flex-row flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-medium text-ink-muted tracking-wide w-full">
          <div className="flex items-center gap-1.5 justify-center whitespace-nowrap">
            <span className="text-gold text-xs sm:text-sm">★</span>
            <span className="text-ink font-bold">5.0 Google Reviews</span>
          </div>
          <div className="w-1 h-1 rounded-sm bg-ink/20" />
          <span className="whitespace-nowrap">No Subcontractors</span>
          <div className="w-1 h-1 rounded-sm bg-ink/20" />
          <span className="whitespace-nowrap">Free Estimates</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="lg:col-span-5 relative mt-2 sm:mt-6 lg:mt-0"
      >
        <div className="relative w-full h-[320px] sm:h-[500px] group">
          {/* Primary Anchor (Exterior Portrait) */}
          <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-sm overflow-hidden shadow-2xl border border-ink/5">
            <Image
              src="/images/proj-exterior-white-2story.jpg"
              alt="Freshly painted two-story white home exterior in Florida"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Secondary Overlap (Landscape Detail) */}
          <div className="absolute bottom-0 left-0 w-[65%] h-[45%] rounded-sm overflow-hidden shadow-xl border-4 border-[var(--color-warm-card)]">
            <Image
              src="/images/proj-exterior-modern.jpg"
              alt="Modern exterior painting detail"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
