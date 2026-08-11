"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/content";

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-32 px-4 lg:px-8 bg-warm-bg border-y border-ink/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">What Clients Say</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink leading-tight">
            Real care, on every job.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 lg:p-12 border border-ink/10 flex flex-col justify-between"
            >
              <div className="space-y-6 mb-12">
                <div className="text-gold text-sm tracking-widest">★★★★★</div>
                <p className="text-lg text-ink leading-relaxed font-medium">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-ink/10">
                <p className="text-sm font-bold text-ink uppercase tracking-wide">{item.author}</p>
                <p className="text-sm text-ink-muted mt-1">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
