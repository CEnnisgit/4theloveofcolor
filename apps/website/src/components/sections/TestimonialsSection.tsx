"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/content";

export function TestimonialsSection() {
  return (
    <section className="bg-warm-card py-16 lg:py-32 px-4 lg:px-8 border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-4 sm:space-y-6">
          <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-terracotta">
            What Clients Say
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-ink leading-[1.1] tracking-tight">
            Real care, on every job.
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-warm-bg p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-ink/5 flex flex-col justify-between space-y-6 sm:space-y-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="text-gold text-xl sm:text-2xl tracking-widest">★★★★★</div>
                <p className="text-base sm:text-lg text-ink italic leading-relaxed font-medium">
                  &quot;{item.quote}&quot;
                </p>
              </div>
              <div className="pt-4 sm:pt-6 border-t border-ink/10">
                <p className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wide">{item.author}</p>
                <p className="text-xs sm:text-sm text-ink-muted mt-1">{item.location}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
