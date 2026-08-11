"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  business,
  contact,
  guarantees,
  homeFeatures,
  lakewoodRanchNeighborhoods,
  macroServices,
  processSteps,
  serviceCities,
  testimonials,
  whyUs,
} from "@/lib/data/content";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, Building2, Store } from "lucide-react";

const serviceBadges: Record<string, string[]> = {
  "interior-painting": ["Walls & Ceilings", "Crown & Trim", "Low-VOC / Zero-Odor", "Precision Masking"],
  "exterior-painting": ["Stucco & Trim", "UV-Resistant", "High-Pressure Wash", "5-Year Guarantee"],
  "cabinet-refinishing": ["HVLP Spray Finish", "Degrease & Degloss", "Factory-Smooth", "Durable Polyurethane"],
  "commercial-painting": ["Offices & Retail", "HOA Common Areas", "Flexible Hours", "Written Scope"],
};

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(macroServices[0]);
  
  const wheelContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = wheelContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Stop page from scrolling

      if (scrollTimeout.current) return; // Throttle wheel events so it doesn't blast through instantly

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 400); // 400ms cooldown between scrolls

      setHoveredService((current) => {
        const currentIndex = macroServices.findIndex(s => s.slug === current.slug);
        if (e.deltaY > 0) {
          // scroll down -> next item
          const nextIndex = Math.min(currentIndex + 1, macroServices.length - 1);
          return macroServices[nextIndex];
        } else {
          // scroll up -> prev item
          const prevIndex = Math.max(currentIndex - 1, 0);
          return macroServices[prevIndex];
        }
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#c2592e] selection:text-white overflow-x-hidden">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#faf3e9]/90 border-b border-[#211711]/5 px-6 lg:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <Image
              src="/images/logo-emblem.png"
              alt="4 The Love of Color Emblem"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-xl leading-none text-[#211711]">
                4 The Love of Color
              </span>
              <span className="text-[9px] sm:text-xs text-[#6a594c] tracking-widest mt-1 uppercase font-semibold">
                Painting · Lakewood Ranch, FL
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-[#211711] tracking-wide">
            <Link href="/" className="text-[#c2592e]">
              Home
            </Link>
            <Link href="/services" className="hover:text-[#c2592e] transition-colors">
              Services
            </Link>
            <Link href="/projects" className="hover:text-[#c2592e] transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-[#c2592e] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#c2592e] transition-colors">
              Contact
            </Link>
          </nav>

          <a
            href={contact.phoneHref}
            className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-sm bg-[#c2592e] text-white text-sm font-bold tracking-wide shadow-lg hover:bg-[#8e3d1c] hover:-translate-y-0.5 transition-all"
          >
            Call {contact.phone}
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* BEAT 1: Hero Section */}
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
            <div className="w-fit inline-block px-3.5 py-1.5 rounded-full bg-[#c2592e]/10 text-[#c2592e] text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em]">
              <span>Painters in Lakewood Ranch &amp; Sarasota</span>
            </div>
            
            {/* SOLE H1 TAG ON THE PAGE */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-[#211711] leading-[1.1] sm:leading-[1.05] tracking-tight">
              Color, finish, and detail work that make a home feel{" "}
              <span className="italic text-[#c2592e] underline decoration-[#d9a460]/40 underline-offset-8">
                intentionally renewed.
              </span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-xl text-[#6a594c] leading-relaxed max-w-2xl font-medium">
              Interior and exterior painting for homes and businesses across the Suncoast — designed to sharpen every space, protect against the Florida sun, and deliver a cleaner result from the first walkthrough to the last detail.
            </p>

            <div className="flex flex-row w-full gap-3 pt-1 sm:pt-3">
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center px-3 sm:px-8 py-3.5 sm:py-4 rounded-sm bg-[#c2592e] text-white text-xs sm:text-base font-bold shadow-xl shadow-[#c2592e]/20 hover:bg-[#8e3d1c] hover:-translate-y-1 transition-all text-center leading-tight"
              >
                Get a Free Estimate
              </Link>
              <a
                href={contact.phoneHref}
                className="flex-1 inline-flex items-center justify-center px-3 sm:px-8 py-3.5 sm:py-4 rounded-sm bg-white border border-[#211711]/15 text-[#211711] text-xs sm:text-base font-bold shadow-sm hover:border-[#c2592e] hover:text-[#c2592e] transition-all text-center leading-tight"
              >
                Call {contact.phone}
              </a>
            </div>

            {/* Proof Badges Strip */}
            <div className="pt-4 sm:pt-6 flex flex-row flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-medium text-[#6a594c] tracking-wide w-full">
              <div className="flex items-center gap-1.5 justify-center whitespace-nowrap">
                <span className="text-[#d9a460] text-xs sm:text-sm">★</span>
                <span className="text-[#211711] font-bold">5.0 Google Reviews</span>
              </div>
              <div className="w-1 h-1 rounded-sm bg-[#211711]/20" />
              <span className="whitespace-nowrap">No Subcontractors</span>
              <div className="w-1 h-1 rounded-sm bg-[#211711]/20" />
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
              <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-sm overflow-hidden shadow-2xl border border-[#211711]/5">
                <Image
                  src="/images/proj-exterior-white-2story.jpg"
                  alt="Freshly painted two-story white home exterior in Florida"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Secondary Overlap (Landscape Detail) */}
              <div className="absolute bottom-0 left-0 w-[65%] h-[45%] rounded-sm overflow-hidden shadow-xl border-4 border-[#fffaf3]">
                <Image
                  src="/images/proj-exterior-modern.jpg"
                  alt="Modern exterior painting detail"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* No context box here. Let the photography breathe. */}
            </div>
          </motion.div>
        </section>

        {/* BEAT 2: Trust Strip (Editorial Hairline Border Bar) */}
        <section className="border-y border-[#211711]/10 py-8 sm:py-10 mb-16 lg:mb-24">
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
                <span className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#211711]">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* OPTION 2: PREMIUM INTERACTIVE LIST (DARK MODE) */}
        {/* ========================================================= */}
        <section className="bg-[#211711] pt-16 lg:pt-20 pb-0 border-b border-white/5 relative overflow-hidden">
          {/* Retro Macintosh Rainbow Divider */}
          <div className="absolute top-0 left-0 w-full flex h-2 sm:h-3 z-30">
            <div className="flex-1 bg-[#61bb46]" /> {/* Green */}
            <div className="flex-1 bg-[#fdb827]" /> {/* Yellow */}
            <div className="flex-1 bg-[#f5821f]" /> {/* Orange */}
            <div className="flex-1 bg-[#e03a3e]" /> {/* Red */}
            <div className="flex-1 bg-[#963d97]" /> {/* Purple */}
            <div className="flex-1 bg-[#009dcf]" /> {/* Blue */}
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c2592e]/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-[#d9a460]/5 blur-[120px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10"
          >
            <div className="mb-8 lg:mb-12">
              <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-[#d9a460] mb-3">
                Our Services
              </p>
              
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl">
                Painting that improves how your home and business live.
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div ref={wheelContainerRef} className="lg:col-span-5 flex flex-col space-y-4">
                {macroServices.map((service, idx) => {
                  const isActive = hoveredService.slug === service.slug;
                  return (
                    <div 
                      key={service.slug}
                      className={`cursor-pointer transition-all duration-500 border-l-4 pl-4 sm:pl-6 py-2 ${isActive ? 'border-[#d9a460] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                      onMouseEnter={() => setHoveredService(service)}
                      onClick={() => setHoveredService(service)}
                    >
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 transition-colors">
                        {service.title}
                      </h3>
                      
                      <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3 sm:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                            {serviceBadges[service.slug]?.map(tag => (
                              <span key={tag} className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 border border-white/20 rounded-full text-white/90 bg-white/5">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Mobile Image (Visible only on small screens inside the expanded area) */}
                          <div className="block lg:hidden mb-6 relative aspect-[16/10] rounded-sm overflow-hidden shadow-lg border border-white/10">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <Link href="/services" className="inline-flex items-center text-[#d9a460] font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:text-white transition-colors group">
                            Explore {service.title} 
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Desktop Image (Hidden on mobile) */}
              <div className="hidden lg:block lg:col-span-7 sticky top-32">
                <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-sm overflow-hidden shadow-2xl border border-white/10">
                  {macroServices.map((service) => (
                    <Image
                      key={service.slug}
                      src={service.image}
                      alt={service.title}
                      fill
                      className={`object-cover brightness-105 contrast-105 transition-opacity duration-1000 ${hoveredService.slug === service.slug ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211711]/40 via-transparent to-transparent z-20 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Elegant Static Bar (Property Types) */}
          <div className="w-full border-t border-white/10 mt-16 lg:mt-24 py-6 sm:py-8 bg-[#211711] flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-12 text-white/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-bold px-4 text-center">
              <span className="hover:text-white transition-colors duration-500 cursor-default">Luxury Homes</span>
              <span className="text-[#c2592e] opacity-50 hidden sm:inline">✦</span>
              <span className="text-[#c2592e] opacity-50 sm:hidden">•</span>
              <span className="hover:text-white transition-colors duration-500 cursor-default">HOA Communities</span>
              <span className="text-[#c2592e] opacity-50 hidden sm:inline">✦</span>
              <span className="text-[#c2592e] opacity-50 sm:hidden">•</span>
              <span className="hover:text-white transition-colors duration-500 cursor-default">Commercial Facilities</span>
            </div>
          </div>
        </section>

        {/* BEAT 4: Visual Proof / Showcase */}
        <section className="bg-[#fffaf3] py-12 lg:py-16 px-4 lg:px-8 border-y border-[#211711]/5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
              <div className="max-w-2xl space-y-3">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c2592e]">
                  Our Project Portfolio
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#211711] leading-[1.1] tracking-tight">
                  Homes we've painted across the Suncoast.
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#211711] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#c2592e] transition-colors rounded-sm shadow-md whitespace-nowrap mb-1"
              >
                View all projects →
              </Link>
            </div>

            <div className="mt-8">
              <Carousel className="w-full relative group" opts={{ loop: true }}>
                <CarouselContent>
                  {/* Slide 1 */}
                  <CarouselItem>
                    <div className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-[#211711] overflow-hidden group rounded-sm shadow-xl border border-[#211711]/5">
                      <Image src="/images/proj-exterior-modern.jpg" alt="Lakewood Ranch Modern Exterior" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white max-w-2xl">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#d9a460] mb-2 md:mb-3">Exterior Painting</p>
                        <h4 className="font-serif text-2xl md:text-5xl font-bold mb-2">Lakewood Ranch Modern</h4>
                        <p className="text-white/80 text-sm md:text-base hidden sm:block pr-24">A complete elastomeric coating system applied by our family crew to protect this luxury estate against the harsh Florida sun.</p>
                      </div>
                    </div>
                  </CarouselItem>
                  {/* Slide 2 */}
                  <CarouselItem>
                    <div className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-[#211711] overflow-hidden group rounded-sm shadow-xl border border-[#211711]/5">
                      <Image src="/images/proj-interior-bedroom.jpg" alt="Interior Details" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white max-w-2xl">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#d9a460] mb-2 md:mb-3">Interior Detailing</p>
                        <h4 className="font-serif text-2xl md:text-5xl font-bold mb-2">Crown Molding & Detail</h4>
                        <p className="text-white/80 text-sm md:text-base hidden sm:block pr-24">Flawless lines and ultra-smooth finishes. We treat every interior repaint like it's our own home.</p>
                      </div>
                    </div>
                  </CarouselItem>
                  {/* Slide 3 */}
                  <CarouselItem>
                    <div className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-[#211711] overflow-hidden group rounded-sm shadow-xl border border-[#211711]/5">
                      <Image src="/images/proj-exterior-white-2story.jpg" alt="HOA Community Phase" fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 text-white max-w-2xl">
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#d9a460] mb-2 md:mb-3">HOA Scale</p>
                        <h4 className="font-serif text-2xl md:text-5xl font-bold mb-2">Community Transformation</h4>
                        <p className="text-white/80 text-sm md:text-base hidden sm:block pr-24">Executing large-scale multi-family painting projects with a spotless worksite and zero disruption to the residents.</p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex items-center gap-2 md:gap-4 z-10">
                  <CarouselPrevious className="static transform-none bg-black/40 text-white hover:bg-[#c2592e] hover:text-white border-none rounded-sm shadow-sm transition-colors backdrop-blur-md w-10 h-10 md:w-12 md:h-12" />
                  <CarouselNext className="static transform-none bg-black/40 text-white hover:bg-[#c2592e] hover:text-white border-none rounded-sm shadow-sm transition-colors backdrop-blur-md w-10 h-10 md:w-12 md:h-12" />
                </div>
              </Carousel>
            </div>
          </motion.div>
        </section>

        {/* BEAT 5: Empathy & Guarantees */}
        <section className="px-4 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2592e] mb-2">
                  The Family Difference
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#211711]">
                  Built for Florida homes & discerning owners.
                </h2>
              </div>

              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {whyUs.map((item, idx) => (
                  <AccordionItem key={item.title} value={`item-${idx}`} className="border-b border-[#211711]/10">
                    <AccordionTrigger className="font-serif text-lg font-bold text-[#211711] hover:text-[#c2592e]">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[#6a594c] leading-relaxed">
                      {item.text}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="lg:col-span-7 bg-[#211711] text-white p-8 md:p-12 rounded-sm shadow-2xl space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9a460] mb-2">
                  Ironclad Promises
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                  What you can hold us to in writing.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guarantees.map((item, idx) => (
                  <div key={item.title} className="space-y-2">
                    <span className="font-serif text-xl font-bold text-[#d9a460]">0{idx + 1}.</span>
                    <h4 className="font-serif text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-white/70 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#c2592e] text-white rounded-sm text-sm font-bold tracking-wide">
                ✓ Workmanship Guarantee: We don't ask for final payment until you've inspected & approved every wall.
              </div>
            </div>
          </div>
        </section>

        {/* BEAT 6: Our Process */}
        <section className="bg-[#fffaf3] py-16 lg:py-32 px-4 lg:px-8 border-y border-[#211711]/5">
          <div className="max-w-7xl mx-auto text-center max-w-3xl mb-12 sm:mb-20 space-y-4 sm:space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c2592e]">
              Our Process
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#211711] leading-[1.1] tracking-tight">
              From first call to final walkthrough.
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="bg-[#faf3e9] p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-[#211711]/5 relative space-y-4 sm:space-y-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <span className="inline-block text-4xl sm:text-5xl font-serif font-bold text-[#d9a460]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#211711]">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6a594c] leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* BEAT 7: Service Area (Local SEO Optimization) */}
        <section className="px-4 lg:px-8 py-16 lg:py-32 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#211711] text-white p-6 sm:p-12 lg:p-24 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-br from-[#c2592e]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl space-y-6 sm:space-y-8">
              <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-[#d9a460]">
                Service Area
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                Proudly serving Lakewood Ranch, Sarasota, and the Suncoast.
              </h2>
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed font-medium">
                Based in Lakewood Ranch, we paint homes and commercial properties throughout Manatee and Sarasota County.
              </p>

              <div className="pt-6 sm:pt-8 space-y-4">
                <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] font-bold text-[#d9a460]">
                  Cities Covered:
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {serviceCities.map((city) => (
                    <span
                      key={city}
                      className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 text-xs sm:text-sm font-bold border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 sm:pt-8 space-y-4">
                <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] font-bold text-[#d9a460]">
                  Lakewood Ranch Villages:
                </p>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
                  {lakewoodRanchNeighborhoods.join(" · ")}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* BEAT 8: Social Proof / Testimonials */}
        <section className="bg-[#fffaf3] py-16 lg:py-32 px-4 lg:px-8 border-t border-[#211711]/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-4 sm:space-y-6">
              <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c2592e]">
                What Clients Say
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#211711] leading-[1.1] tracking-tight">
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
                  className="bg-[#faf3e9] p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-[#211711]/5 flex flex-col justify-between space-y-6 sm:space-y-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-[#d9a460] text-xl sm:text-2xl tracking-widest">★★★★★</div>
                    <p className="text-base sm:text-lg text-[#211711] italic leading-relaxed font-medium">
                      "{item.quote}"
                    </p>
                  </div>
                  <div className="pt-4 sm:pt-6 border-t border-[#211711]/10">
                    <p className="text-xs sm:text-sm font-bold text-[#211711] uppercase tracking-wide">{item.author}</p>
                    <p className="text-xs sm:text-sm text-[#6a594c] mt-1">{item.location}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* BEAT 9: Final Call to Action */}
        <section className="px-4 lg:px-8 py-16 lg:py-32 max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#c2592e] text-white p-8 sm:p-16 lg:p-20 rounded-[2rem] sm:rounded-[3rem] shadow-2xl space-y-8 sm:space-y-10 max-w-5xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_0%,transparent_100%)] pointer-events-none" />
            
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-[#d9a460]">
                Ready to Start
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                Get a free estimate for your next painting project.
              </h2>
              <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-medium">
                Tell us about your space and we'll get back to you with a clear, no-pressure written quote.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#faf3e9] text-[#c2592e] text-base sm:text-lg font-bold shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300"
              >
                Request a Quote
              </Link>
              <a
                href={contact.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-transparent border-[3px] border-white text-white text-base sm:text-lg font-bold hover:bg-white hover:text-[#c2592e] hover:scale-105 transition-all duration-300"
              >
                Call {contact.phone}
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#211711] text-gray-300 border-t border-white/10 px-4 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <p className="font-serif text-3xl font-bold text-white">
              4 The Love of Color
            </p>
            <p className="text-sm leading-relaxed text-gray-400 font-medium">
              Family-owned interior &amp; exterior painters serving Lakewood Ranch, Sarasota, Bradenton &amp; the surrounding Suncoast of Florida.
            </p>
            <p className="text-sm text-gray-500 pt-4">
              © {new Date().getFullYear()} 4 The Love of Color LLC. All rights reserved.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9a460]">
              Explore
            </p>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9a460]">
              Areas Served
            </p>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              {serviceCities.slice(0, 6).map((city) => (
                <li key={city}>{city} painters</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9a460]">
              Get In Touch
            </p>
            <div className="space-y-[#3 border-white] text-sm font-medium">
              <p>
                <a href={contact.phoneHref} className="hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={contact.emailHref} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </p>
              <p className="text-gray-400 pt-4">{business.hours}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
