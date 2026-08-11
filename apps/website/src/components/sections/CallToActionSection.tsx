"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contact } from "@/lib/data/content";

export function CallToActionSection() {
  return (
    <section className="px-4 lg:px-8 py-16 lg:py-32 max-w-7xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="bg-terracotta text-white p-8 sm:p-16 lg:p-20 rounded-[2rem] sm:rounded-[3rem] shadow-2xl space-y-8 sm:space-y-10 max-w-5xl mx-auto relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_0%,transparent_100%)] pointer-events-none" />
        
        <div className="relative z-10 space-y-4 sm:space-y-6">
          <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Ready to Start
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
            Get a free estimate for your next painting project.
          </h2>
          <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Tell us about your space and we&apos;ll get back to you with a clear, no-pressure written quote.
          </p>
        </div>
        
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-warm-bg text-terracotta text-base sm:text-lg font-bold shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Request a Quote
          </Link>
          <a
            href={contact.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-transparent border-[3px] border-white text-white text-base sm:text-lg font-bold hover:bg-white hover:text-terracotta hover:scale-105 transition-all duration-300"
          >
            Call {contact.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
