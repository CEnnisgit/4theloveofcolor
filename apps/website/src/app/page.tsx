"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const serviceBadges: Record<string, string[]> = {
  "interior-painting": ["Walls & Ceilings", "Crown & Trim", "Low-VOC / Zero-Odor", "Precision Masking"],
  "exterior-painting": ["Stucco & Trim", "UV-Resistant", "High-Pressure Wash", "5-Year Guarantee"],
  "cabinet-refinishing": ["HVLP Spray Finish", "Degrease & Degloss", "Factory-Smooth", "Durable Polyurethane"],
  "commercial-painting": ["Offices & Retail", "HOA Common Areas", "Flexible Hours", "Written Scope"],
};

export default function HomePage() {
  const [hoveredService, setHoveredService] = useState(macroServices[0]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#c2592e] selection:text-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#faf3e9]/90 border-b border-[#211711]/5 px-4 lg:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <Image
              src="/images/logo-emblem.png"
              alt="4 The Love of Color Emblem"
              width={48}
              height={48}
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-[#211711]">
                4 The Love of Color
              </span>
              <span className="text-xs text-[#6a594c] tracking-widest mt-1 uppercase font-semibold">
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
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#c2592e] text-white text-sm font-bold tracking-wide shadow-lg hover:bg-[#8e3d1c] hover:-translate-y-0.5 transition-all"
          >
            Call {contact.phone}
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* BEAT 1: Hero Section */}
        <section className="relative px-4 lg:px-8 py-20 lg:py-32 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="absolute top-0 right-0 -z-10 opacity-[0.03] pointer-events-none">
            <Image
              src="/images/logo.png"
              alt=""
              width={600}
              height={600}
              aria-hidden="true"
            />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c2592e]/10 text-[#c2592e] text-xs font-bold uppercase tracking-[0.2em]">
              <span>Painters in Lakewood Ranch &amp; Sarasota</span>
            </div>
            
            {/* SOLE H1 TAG ON THE PAGE */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#211711] leading-[1.05] tracking-tight">
              Color, finish, and detail work that make a home feel{" "}
              <span className="italic text-[#c2592e] underline decoration-[#d9a460]/40 underline-offset-8">
                intentionally renewed.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#6a594c] leading-relaxed max-w-2xl font-medium">
              Family-owned interior and exterior painting for homes and businesses across the Suncoast — designed to sharpen every space, protect against the Florida sun, and deliver a cleaner result from the first walkthrough to the last detail.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#c2592e] text-white text-base font-bold shadow-xl shadow-[#c2592e]/20 hover:bg-[#8e3d1c] hover:-translate-y-1 transition-all"
              >
                Get a Free Estimate
              </Link>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white border-2 border-[#211711]/10 text-[#211711] text-base font-bold shadow-sm hover:border-[#c2592e] hover:text-[#c2592e] transition-all"
              >
                Call {contact.phone}
              </a>
            </div>

            {/* Proof Badges */}
            <div className="pt-8 border-t border-[#211711]/10 flex flex-wrap items-center gap-8 text-sm font-bold tracking-wide text-[#6a594c]">
              <span className="flex items-center gap-2">
                <span className="text-[#d9a460] text-lg">★</span> 5.0 Google Reviews
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c2592e]" /> Free Estimates
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c2592e]" /> Family-Owned
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white bg-white">
              <Image
                src="/images/proj-exterior-white-2story.jpg"
                alt="Freshly painted two-story white home in Florida"
                width={640}
                height={520}
                priority
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 right-8 p-5 rounded-3xl backdrop-blur-xl bg-white/90 border border-white/50 shadow-xl">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#c2592e]">
                  Primary Service Area
                </p>
                <p className="text-base font-bold text-[#211711] mt-1">
                  {contact.serviceArea}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BEAT 2: Trust Strip */}
        <section className="bg-[#fffaf3] border-y border-[#211711]/5 py-12 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="font-serif text-2xl font-bold text-[#c2592e]">Family-Owned</p>
              <p className="text-sm font-medium text-[#6a594c]">Direct communication</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-2xl font-bold text-[#c2592e]">Careful Prep</p>
              <p className="text-sm font-medium text-[#6a594c]">Patch, sand &amp; mask</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-2xl font-bold text-[#c2592e]">Eco-Friendly</p>
              <p className="text-sm font-medium text-[#6a594c]">Low-VOC coatings</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-2xl font-bold text-[#c2592e]">Clean Crews</p>
              <p className="text-sm font-medium text-[#6a594c]">Site tidied every day</p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* OPTION 2: PREMIUM INTERACTIVE LIST (DARK MODE) */}
        {/* ========================================================= */}
        <section className="bg-[#211711] py-20 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c2592e]/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-[#d9a460]/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="mb-12">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl">
                Painting that improves how your home and business live.
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5 flex flex-col space-y-4">
                {macroServices.map((service, idx) => {
                  const isActive = hoveredService.slug === service.slug;
                  return (
                    <div 
                      key={service.slug}
                      className={`cursor-pointer transition-all duration-500 border-l-4 pl-6 py-2 ${isActive ? 'border-[#d9a460] opacity-100' : 'border-transparent opacity-40 hover:opacity-70'}`}
                      onMouseEnter={() => setHoveredService(service)}
                      onClick={() => setHoveredService(service)}
                    >
                      <h3 className="font-serif text-3xl font-bold text-white mb-1">
                        {service.title}
                      </h3>
                      
                      <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-gray-300 text-base mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {serviceBadges[service.slug]?.map(tag => (
                              <span key={tag} className="text-[10px] uppercase tracking-wider px-3 py-1 border border-white/20 rounded-full text-white/90 bg-white/5">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Mobile Image (Visible only on small screens inside the expanded area) */}
                          <div className="block lg:hidden mb-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-white/10">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <Link href="/services" className="inline-flex items-center text-[#d9a460] font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group">
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
                <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                  {macroServices.map((service) => (
                    <Image
                      key={service.slug}
                      src={service.image}
                      alt={service.title}
                      fill
                      className={`object-cover transition-opacity duration-1000 ${hoveredService.slug === service.slug ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211711]/90 via-[#211711]/20 to-transparent z-20 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* BEAT 4: Visual Proof / Showcase */}
        <section className="bg-[#fffaf3] py-32 px-4 lg:px-8 border-y border-[#211711]/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c2592e]">
                  Selected Work
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#211711] leading-[1.1] tracking-tight">
                  Homes and spaces painted with care, skill, and a family's pride.
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center text-sm font-bold text-[#c2592e] uppercase tracking-wide hover:text-[#8e3d1c] transition-colors whitespace-nowrap mb-2"
              >
                View all projects →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {homeFeatures.map((project, idx) => (
                <div
                  key={project.title}
                  className={`group rounded-[2.5rem] overflow-hidden bg-[#faf3e9] border border-[#211711]/5 shadow-lg ${
                    idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${idx === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 sm:p-10 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9a460]">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-[#211711]">
                      {project.title}
                    </h3>
                    <p className="text-lg text-[#6a594c] leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEAT 5: Empathy & Guarantees */}
        <section className="px-4 lg:px-8 py-32 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c2592e]">
                  Why 4 The Love of Color
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#211711] leading-[1.1] tracking-tight">
                  A more personal painting experience — built for the Gulf Coast.
                </h2>
              </div>
              <p className="text-lg text-[#6a594c] leading-relaxed font-medium">
                Homeowners here compare multiple quotes. The difference isn't just in the paint; it's in how your home is treated every single day of the job.
              </p>
              <div className="space-y-6 pt-6">
                {whyUs.map((item) => (
                  <div key={item.title} className="p-6 rounded-3xl bg-[#fffaf3] border border-[#211711]/5 shadow-sm">
                    <h3 className="font-serif text-2xl font-bold text-[#211711]">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#6a594c] mt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#fffaf3] p-10 sm:p-16 rounded-[3rem] border border-[#211711]/5 space-y-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[16rem] font-serif leading-none text-[#d9a460]/5 -translate-y-10 translate-x-10 pointer-events-none">
                G
              </div>
              
              <div className="relative z-10 space-y-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c2592e]">
                  Our Promises
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#211711] leading-[1.1] tracking-tight">
                  What you can hold us to — in writing, on every job.
                </h3>
              </div>

              <div className="relative z-10 grid sm:grid-cols-2 gap-x-10 gap-y-12">
                {guarantees.map((item, idx) => (
                  <div key={item.title} className="space-y-3">
                    <span className="font-serif text-4xl font-bold text-[#d9a460]/40">
                      0{idx + 1}.
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-[#211711]">
                      {item.title}
                    </h4>
                    <p className="text-base text-[#6a594c] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative z-10 p-6 rounded-2xl bg-[#c2592e] text-white space-y-2 shadow-lg shadow-[#c2592e]/20">
                <p className="font-bold text-lg tracking-wide">✓ Workmanship Guarantee</p>
                <p className="text-white/80 font-medium">We perform a thorough walkthrough with you before any final payment is requested. The job isn't done until you say it is.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BEAT 6: Our Process */}
        <section className="bg-[#fffaf3] py-32 px-4 lg:px-8 border-y border-[#211711]/5">
          <div className="max-w-7xl mx-auto text-center max-w-3xl mb-20 space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c2592e]">
              Our Process
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#211711] leading-[1.1] tracking-tight">
              From first call to final walkthrough.
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="bg-[#faf3e9] p-10 rounded-[2.5rem] border border-[#211711]/5 relative space-y-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <span className="inline-block text-5xl font-serif font-bold text-[#d9a460]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#211711]">
                  {step.title}
                </h3>
                <p className="text-base text-[#6a594c] leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BEAT 7: Service Area (Local SEO Optimization) */}
        <section className="px-4 lg:px-8 py-32 max-w-7xl mx-auto">
          <div className="bg-[#211711] text-white p-10 sm:p-16 lg:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#c2592e]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl space-y-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9a460]">
                Service Area
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Proudly serving Lakewood Ranch, Sarasota, and the Suncoast.
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
                Based in Lakewood Ranch, we paint homes and commercial properties throughout Manatee and Sarasota County.
              </p>

              <div className="pt-8 space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] font-bold text-[#d9a460]">
                  Cities Covered:
                </p>
                <div className="flex flex-wrap gap-3">
                  {serviceCities.map((city) => (
                    <span
                      key={city}
                      className="px-5 py-2.5 rounded-full bg-white/5 text-sm font-bold border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] font-bold text-[#d9a460]">
                  Lakewood Ranch Villages:
                </p>
                <p className="text-base text-gray-400 leading-relaxed font-medium">
                  {lakewoodRanchNeighborhoods.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BEAT 8: Social Proof / Testimonials */}
        <section className="bg-[#fffaf3] py-32 px-4 lg:px-8 border-t border-[#211711]/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c2592e]">
                What Clients Say
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#211711] leading-[1.1] tracking-tight">
                Real care, on every job.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#faf3e9] p-10 rounded-[2.5rem] border border-[#211711]/5 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="space-y-6">
                    <div className="text-[#d9a460] text-2xl tracking-widest">★★★★★</div>
                    <p className="text-lg text-[#211711] italic leading-relaxed font-medium">
                      "{item.quote}"
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#211711]/10">
                    <p className="text-sm font-bold text-[#211711] uppercase tracking-wide">{item.author}</p>
                    <p className="text-sm text-[#6a594c] mt-1">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEAT 9: Final Call to Action */}
        <section className="px-4 lg:px-8 py-32 max-w-7xl mx-auto text-center">
          <div className="bg-[#c2592e] text-white p-12 sm:p-20 rounded-[3rem] shadow-2xl space-y-10 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_0%,transparent_100%)] pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d9a460]">
                Ready to Start
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Get a free estimate for your next painting project.
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-medium">
                Tell us about your space and we'll get back to you with a clear, no-pressure written quote.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap justify-center gap-6 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#faf3e9] text-[#c2592e] text-lg font-bold shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300"
              >
                Request a Quote
              </Link>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-transparent border-[3px] border-white text-white text-lg font-bold hover:bg-white hover:text-[#c2592e] hover:scale-105 transition-all duration-300"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#211711] text-gray-300 border-t border-white/10 px-4 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
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
