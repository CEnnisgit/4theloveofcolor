import Image from "next/image";
import Link from "next/link";
import { business, contact, serviceCities } from "@/lib/data/content";

import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { EmpathyGuaranteesSection } from "@/components/sections/EmpathyGuaranteesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-warm-bg/90 border-b border-ink/5 px-6 lg:px-8 py-4 transition-all">
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
              <span className="font-serif font-bold text-base sm:text-xl leading-none text-ink">
                4 The Love of Color
              </span>
              <span className="text-[9px] sm:text-xs text-ink-muted tracking-widest mt-1 uppercase font-semibold">
                Painting · Lakewood Ranch, FL
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-ink tracking-wide">
            <Link href="/" className="text-terracotta">
              Home
            </Link>
            <Link href="/services" className="hover:text-terracotta transition-colors">
              Services
            </Link>
            <Link href="/projects" className="hover:text-terracotta transition-colors">
              Projects
            </Link>
            <Link href="/about" className="hover:text-terracotta transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-terracotta transition-colors">
              Contact
            </Link>
          </nav>

          <a
            href={contact.phoneHref}
            className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-sm bg-terracotta text-white text-sm font-bold tracking-wide shadow-lg hover:bg-[var(--color-terracotta-dark)] hover:-translate-y-0.5 transition-all"
          >
            Call {contact.phone}
          </a>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <SelectedWorkSection />
        <EmpathyGuaranteesSection />
        <ProcessSection />
        <ServiceAreaSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>

      {/* Retro Macintosh Rainbow Divider */}
      <div className="w-full flex h-2 sm:h-3 z-30">
        <div className="flex-1 bg-[#61bb46]" /> {/* Green */}
        <div className="flex-1 bg-[#fdb827]" /> {/* Yellow */}
        <div className="flex-1 bg-[#f5821f]" /> {/* Orange */}
        <div className="flex-1 bg-[#e03a3e]" /> {/* Red */}
        <div className="flex-1 bg-[#963d97]" /> {/* Purple */}
        <div className="flex-1 bg-[#009dcf]" /> {/* Blue */}
      </div>

      {/* Footer */}
      <footer className="bg-ink text-gray-300 border-t border-white/10 px-4 lg:px-8 py-12 lg:py-20">
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Areas Served
            </p>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              {serviceCities.slice(0, 6).map((city) => (
                <li key={city}>{city} painters</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
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
