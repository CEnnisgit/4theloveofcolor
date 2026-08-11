"use client";

import { testimonials } from "@/lib/data/content";

export function TestimonialsSection() {
  return (
    <section className="pt-10 pb-0 px-4 lg:px-8 bg-warm-bg border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex justify-center mb-6">
          <div className="w-52 sm:w-60 h-9 flex items-center justify-center rounded-[var(--radius)] bg-ink text-white text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-center">
            What Clients Say
          </div>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Real care, on every job.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-ink/10 flex flex-col justify-between"
            >
              <div className="space-y-3 mb-6">
                <div className="text-gold text-sm tracking-widest">★★★★★</div>
                <p className="text-sm sm:text-base text-ink leading-relaxed font-medium">
                  &quot;{item.quote}&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-ink/10">
                <p className="text-xs font-bold text-ink uppercase tracking-wide">{item.author}</p>
                <p className="text-xs text-ink-muted mt-0.5">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
