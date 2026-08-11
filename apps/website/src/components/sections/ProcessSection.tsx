"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/data/content";

export function ProcessSection() {
  return (
    <section className="bg-warm-bg pt-10 pb-16 lg:pt-14 lg:pb-24 px-4 lg:px-8 border-y border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex justify-start mb-8">
          <div className="w-56 sm:w-64 h-10 flex items-center justify-center rounded-[var(--radius)] bg-ink text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-center">
            Our Process
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-24">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight">
              From first call to final walkthrough.
            </h2>
            <p className="text-base text-ink-muted leading-relaxed mb-12 lg:pr-12">
              We eliminate the guesswork. Here is exactly what happens when you work with 4 The Love of Color.
            </p>
            <div className="pt-4 hidden lg:flex justify-center w-full opacity-75 mix-blend-multiply lg:pr-16">
              <Image
                src="/images/logo.png"
                alt="4 The Love of Color Logo"
                width={400}
                height={400}
                className="w-full max-w-sm drop-shadow-sm object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col relative pl-5 md:pl-6">
            {/* Retro Macintosh Rainbow Divider (Vertical) */}
            <div className="absolute top-4 bottom-4 left-0 w-1.5 sm:w-2 flex flex-col opacity-90 shadow-sm">
              <div className="flex-1 bg-[#61bb46]" /> {/* Green */}
              <div className="flex-1 bg-[#fdb827]" /> {/* Yellow */}
              <div className="flex-1 bg-[#f5821f]" /> {/* Orange */}
              <div className="flex-1 bg-[#e03a3e]" /> {/* Red */}
              <div className="flex-1 bg-[#963d97]" /> {/* Purple */}
              <div className="flex-1 bg-[#009dcf]" /> {/* Blue */}
            </div>

            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex group"
              >
                {/* Content Box */}
                <div className="flex-grow py-8 md:py-12 border-b border-ink/10 group-last:border-b-0 pl-2">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif text-2xl md:text-3xl font-black text-ink/30">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink">
                      {step.title}
                    </h3>
                  </div>
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
