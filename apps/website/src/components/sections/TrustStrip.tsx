"use client";

import { motion } from "framer-motion";

export function TrustStrip() {
  return (
    <section className="bg-warm-bg border-y border-ink/10 py-8 sm:py-10 mb-16 lg:mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-6 lg:px-8 w-full"
      >
        {[
          { title: "Family-Owned" },
          { title: "Careful Prep" },
          { title: "Eco-Friendly Paint" },
          { title: "Clean On-Time Crews" },
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center justify-center text-center">
            <span className="font-serif text-base sm:text-lg md:text-xl font-bold text-ink">
              {item.title}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
