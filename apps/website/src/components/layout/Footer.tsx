import Link from "next/link";
import { business, contact, serviceCities } from "@/lib/data/content";

export function Footer() {
  return (
    <>
      {/* Retro Macintosh Rainbow Divider */}
      <div className="w-full flex h-2 sm:h-3 z-30">
        <div className="flex-1 bg-[#61bb46]" /> {/* Green */}
        <div className="flex-1 bg-[#fdb827]" /> {/* Yellow */}
        <div className="flex-1 bg-[#f5821f]" /> {/* Orange */}
        <div className="flex-1 bg-[#e03a3e]" /> {/* Red */}
        <div className="flex-1 bg-[#963d97]" /> {/* Purple */}
        <div className="flex-1 bg-[#009dcf]" /> {/* Blue */}
      </div>

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
                <li key={city}>
                  <Link href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors">
                    {city} painters
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Get In Touch
            </p>
            <div className="space-y-3 text-sm font-medium">
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
    </>
  );
}
