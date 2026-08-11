"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SelectedWorkSection() {
  return (
    <section className="bg-warm-bg pt-10 pb-12 lg:pt-14 lg:pb-16 px-4 lg:px-8 border-y border-ink/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="w-full flex justify-start mb-6">
          <div className="w-48 sm:w-56 h-8 flex items-center justify-center rounded-[var(--radius)] bg-ink text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-center">
            Our Project Portfolio
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-[1.1] tracking-tight">
              Homes we&apos;ve painted across the Suncoast.
            </h2>
          </div>
        </div>

        <div className="mt-8">
          <Carousel className="w-full relative group" opts={{ loop: true }}>
            <CarouselContent>
              {/* Slide 1 */}
              <CarouselItem>
                <div className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-ink overflow-hidden group rounded-sm shadow-xl border border-ink/5">
                  <Image src="/images/proj-exterior-modern.jpg" alt="Lakewood Ranch Modern Exterior" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white max-w-2xl">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gold mb-2 md:mb-3">Exterior Painting</p>
                    <h4 className="font-serif text-2xl md:text-5xl font-bold mb-2">Lakewood Ranch Modern</h4>
                    <p className="text-white/80 text-sm md:text-base hidden sm:block pr-24">A complete elastomeric coating system applied by our family crew to protect this luxury estate against the harsh Florida sun.</p>
                  </div>
                </div>
              </CarouselItem>
              {/* Slide 2 */}
              <CarouselItem>
                <div className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-ink overflow-hidden group rounded-sm shadow-xl border border-ink/5">
                  <Image src="/images/proj-interior-bedroom.jpg" alt="Interior Details" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white max-w-2xl">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gold mb-2 md:mb-3">Interior Detailing</p>
                    <h4 className="font-serif text-2xl md:text-5xl font-bold mb-2">Crown Molding & Detail</h4>
                    <p className="text-white/80 text-sm md:text-base hidden sm:block pr-24">Flawless lines and ultra-smooth finishes. We treat every interior repaint like it&apos;s our own home.</p>
                  </div>
                </div>
              </CarouselItem>
              {/* Slide 3 */}
              <CarouselItem>
                <div className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-ink overflow-hidden group rounded-sm shadow-xl border border-ink/5">
                  <Image src="/images/proj-exterior-white-2story.jpg" alt="HOA Community Phase" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white max-w-2xl">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gold mb-2 md:mb-3">HOA Scale</p>
                    <h4 className="font-serif text-2xl md:text-5xl font-bold mb-2">Community Transformation</h4>
                    <p className="text-white/80 text-sm md:text-base hidden sm:block pr-24">Executing large-scale multi-family painting projects with a spotless worksite and zero disruption to the residents.</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex items-center gap-2 md:gap-4 z-10">
              <CarouselPrevious className="static transform-none bg-black/40 text-white hover:bg-terracotta hover:text-white border-none rounded-sm shadow-sm transition-colors backdrop-blur-md w-10 h-10 md:w-12 md:h-12" />
              <CarouselNext className="static transform-none bg-black/40 text-white hover:bg-terracotta hover:text-white border-none rounded-sm shadow-sm transition-colors backdrop-blur-md w-10 h-10 md:w-12 md:h-12" />
            </div>
          </Carousel>
        </div>

        <div className="mt-10 lg:mt-12 flex justify-center w-full">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-ink text-white text-sm font-bold uppercase tracking-widest hover:bg-terracotta transition-colors rounded-[var(--radius)] shadow-md whitespace-nowrap"
          >
            View all projects →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
