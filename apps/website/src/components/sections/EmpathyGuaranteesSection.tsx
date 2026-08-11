"use client";

import { whyUs, guarantees } from "@/lib/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function EmpathyGuaranteesSection() {
  return (
    <section className="px-4 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-24 max-w-7xl mx-auto flex flex-col items-start">
      <div className="w-48 sm:w-56 h-8 mb-8 lg:mb-10 flex items-center justify-center rounded-[var(--radius)] bg-ink text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-center">
        The Family Difference
      </div>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-ink leading-tight">
              Built for Florida homes & discerning owners.
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed font-medium">
              Homeowners compare multiple quotes. The real difference isn&apos;t just in the paint—it&apos;s how your home, schedule, and property are respected every day.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="w-full border-t border-ink/15">
            {whyUs.map((item, idx) => (
              <AccordionItem key={item.title} value={`item-${idx}`}>
                <AccordionTrigger>
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  {item.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="pt-2 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-widest text-ink/60">
            <span className="w-2 h-2 rounded-full bg-terracotta"></span>
            <span>Family Owned & Operated • Suncoast, FL</span>
          </div>
        </div>

        <div className="lg:col-span-7 bg-ink text-white p-7 md:p-10 rounded-sm shadow-xl flex flex-col justify-between overflow-hidden">
          <div className="space-y-7">
            <div className="space-y-2 border-b border-white/10 pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Ironclad Promises
              </p>
              <h3 className="font-serif text-xl md:text-3xl font-bold text-white">
                What you can hold us to in writing.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 pb-4">
              {guarantees.map((item, idx) => (
                <div key={item.title} className="space-y-1.5">
                  <span className="font-serif text-xl font-bold text-gold">0{idx + 1}.</span>
                  <h4 className="font-serif text-base md:text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-xs md:text-sm text-white/85 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="-mx-7 -mb-7 md:-mx-10 md:-mb-10 p-5 md:p-6 bg-terracotta text-white text-sm font-bold tracking-wide flex items-center gap-3.5 border-t border-white/10">
            <span className="text-2xl font-bold text-white">✓</span>
            <div>
              <p className="uppercase tracking-wider text-[10px] md:text-xs font-bold text-white/90">Workmanship Guarantee</p>
              <p className="font-normal text-xs md:text-sm text-white/95 mt-0.5">We don&apos;t ask for final payment until you&apos;ve personally inspected & approved every wall.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
