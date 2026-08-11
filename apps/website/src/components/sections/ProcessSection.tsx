"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data/content";

export function ProcessSection() {
  return (
    <section className="bg-warm-card py-16 lg:py-24 px-4 lg:px-8 border-y border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">Our Process</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight">
              From first call to final walkthrough.
            </h2>
            <p className="text-base text-ink-muted leading-relaxed">
              We eliminate the guesswork. Here is exactly what happens when you work with 4 The Love of Color.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex group"
              >
                {/* Column 1: The Flawless Timeline Track */}
                <div className="w-10 md:w-16 shrink-0 flex flex-col items-center">
                  {/* Top Line Segment */}
                  <div className={`w-[2px] bg-ink/20 flex-grow ${idx === 0 ? "opacity-0" : ""}`} />
                  
                  {/* The Node Dot */}
                  <motion.div 
                    whileInView={{ scale: [1, 1.25, 1], backgroundColor: "var(--color-terracotta)" }}
                    viewport={{ once: false, amount: 0.8 }}
                    className="w-4 h-4 rounded-full bg-ink border-2 border-warm-card shadow-sm transition-colors duration-500 shrink-0 z-10" 
                  />
                  
                  {/* Bottom Line Segment */}
                  <div className={`w-[2px] bg-ink/20 flex-grow ${idx === processSteps.length - 1 ? "opacity-0" : ""}`} />
                </div>

                {/* Column 2: Content Box with Symmetric Padding for perfect vertical alignment */}
                <div className="flex-grow py-8 md:py-10 border-b border-ink/10 group-last:border-b-0 pl-2 sm:pl-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-terracotta leading-none mb-2">
                    Phase 0{idx + 1}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-ink-muted leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
