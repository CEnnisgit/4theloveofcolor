import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServicePage } from "@/lib/data/servicePages";
import { Header } from "@/components/layout/Header";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";
import { StockPhotoWatermark } from "@/components/ui/StockPhotoWatermark";

interface ServicePageLayoutProps {
  service: ServicePage;
  persona: "residential" | "commercial";
}

export function ServicePageLayout({ service, persona }: ServicePageLayoutProps) {
  // Trust badges change based on persona
  const trustBadges = persona === "residential" ? [
    { icon: <Award className="w-6 h-6" />, label: "Family-Owned" },
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Eco-Friendly Paint" },
    { icon: <CheckCircle2 className="w-6 h-6" />, label: "Clean On-Time Crews" },
    { icon: <Clock className="w-6 h-6" />, label: "Careful Prep" }
  ] : [
    { icon: <ShieldCheck className="w-6 h-6" />, label: "Fully Licensed & Insured" },
    { icon: <CheckCircle2 className="w-6 h-6" />, label: "Zero Resident Disruption" },
    { icon: <Clock className="w-6 h-6" />, label: "Off-Hours Scheduling" }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden">
      <Header />

      <main className="flex-1 w-full flex flex-col">
        {/* 1. The Immersive Hero (bg-ink/60 overlay) */}
        <section className="relative w-full h-[600px] flex flex-col justify-end pb-16 px-4 lg:px-8 bg-ink text-warm-bg">
          {service.image ? (
            <div className="absolute inset-0 z-0">
              <Image
                src={service.image}
                alt={service.imageAlt || service.h1}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/70" />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 bg-ink">
              <StockPhotoWatermark />
            </div>
          )}

          <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start gap-4">
            <Breadcrumb>
              <BreadcrumbList className="text-warm-bg/70">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-warm-bg">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${persona}`} className="hover:text-warm-bg capitalize">
                    {persona}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-warm-bg font-bold">{service.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-4xl">
              {service.h1}
            </h1>
            
            <div className="flex gap-4 mt-6">
              <Link 
                href="/contact"
                className="bg-terracotta text-white font-bold px-8 py-4 rounded-[var(--radius)] hover:bg-[#a34521] transition-colors"
              >
                {persona === "residential" ? "Request a Free Walkthrough" : "Request a Commercial Bid"}
              </Link>
              <a 
                href="tel:941-555-0198" 
                className="bg-transparent text-warm-bg border-2 border-warm-bg font-bold px-8 py-4 rounded-[var(--radius)] hover:bg-warm-bg hover:text-ink transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. The Approach Bar (bg-ink) */}
        <section className="bg-ink w-full py-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 text-secondary">
                {badge.icon}
                <span className="font-bold text-warm-bg uppercase tracking-wider text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. The Empathy Block (bg-warm-bg) */}
        <section className="bg-warm-bg w-full py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                {persona === "residential" 
                  ? "We know the horror stories of messy crews and peeling paint." 
                  : "We know Property Managers don't have time to babysit contractors."}
              </h2>
              <div className="h-1.5 w-24 bg-terracotta rounded-[var(--radius)]" />
            </div>
            <div className="flex flex-col gap-6 text-ink-muted text-lg sm:text-xl leading-relaxed">
              {service.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 4. The Process Timeline */}
        <section className="bg-ink text-warm-bg w-full py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-warm-bg mb-4">Our Proven Process</h2>
              <p className="text-warm-bg/70 text-lg">No skipped steps. No compromises.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.slice(0, 4).map((step, idx) => (
                <Card key={idx} className="bg-warm-bg border-none rounded-[var(--radius)] flex flex-col shadow-sm">
                  <CardHeader>
                    <div className="w-10 h-10 bg-transparent text-ink font-bold flex items-center justify-center rounded-[var(--radius)] mb-4 border border-ink/20">
                      {idx + 1}
                    </div>
                    <CardTitle className="font-serif text-xl text-ink leading-snug">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-ink-muted leading-relaxed">
                    {step.text}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Specs & Details (Bento Box Area - Simplified for now per user request) */}
        <section className="bg-warm-bg w-full py-16 lg:py-24 text-ink">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-ink mb-6">
                What the Job Covers
              </h2>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-ink/20 text-ink bg-transparent rounded-[var(--radius)] px-4 py-1.5 text-sm">
                  Premium Materials
                </Badge>
                <Badge variant="outline" className="border-ink/20 text-ink bg-transparent rounded-[var(--radius)] px-4 py-1.5 text-sm">
                  Full Insurance
                </Badge>
                <Badge variant="outline" className="border-ink/20 text-ink bg-transparent rounded-[var(--radius)] px-4 py-1.5 text-sm">
                  5-Year Warranty
                </Badge>
              </div>
              <p className="text-ink-muted text-lg leading-relaxed">
                {service.occupied}
              </p>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 bg-transparent border border-ink/10 rounded-[var(--radius)] p-8 sm:p-10">
              <h3 className="font-bold uppercase tracking-wider text-sm text-terracotta mb-6 border-b border-ink/10 pb-4">
                Inclusions
              </h3>
              <ul className="space-y-4">
                {service.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-terracotta shrink-0" />
                    <span className="text-ink/90 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. FAQ Accordion (bg-warm-bg) */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="bg-warm-bg w-full py-16 lg:py-24 border-t border-ink/10">
            <div className="max-w-3xl mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink">Common Questions</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-ink/10">
                    <AccordionTrigger className="text-left font-bold text-lg text-ink hover:no-underline hover:text-terracotta transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-ink-muted text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}
