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

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#c2592e] selection:text-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#faf3e9]/80 border-b border-[#211711]/10 px-4 lg:px-8 py-3 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo-emblem.png"
              alt="4 The Love of Color Emblem"
              width={44}
              height={44}
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-none text-[#211711]">
                4 The Love of Color
              </span>
              <span className="text-xs text-[#6a594c] tracking-wide">
                Painting · Lakewood Ranch, FL
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#211711]">
            <Link href="/" className="text-[#c2592e] font-semibold">
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
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#c2592e] text-white text-sm font-medium shadow-md hover:bg-[#8e3d1c] hover:-translate-y-0.5 transition-all"
          >
            Call {contact.phone}
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* BEAT 1: Hero Section */}
        <section className="relative px-4 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* Subtle logo watermark background */}
          <div className="absolute top-0 right-0 -z-10 opacity-5 pointer-events-none">
            <Image
              src="/images/logo.png"
              alt=""
              width={500}
              height={500}
              aria-hidden="true"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c2592e]/10 text-[#c2592e] text-xs font-semibold uppercase tracking-wider">
              <span>Painters in Lakewood Ranch &amp; Sarasota, FL</span>
            </div>
            
            {/* SOLE H1 TAG ON THE PAGE */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#211711] leading-[1.15] tracking-tight">
              Color, finish, and detail work that make a home feel{" "}
              <span className="italic text-[#c2592e] underline decoration-[#d9a460]/40 underline-offset-8">
                intentionally renewed.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#6a594c] leading-relaxed max-w-2xl">
              Family-owned interior and exterior painting for homes and businesses across the Suncoast — designed to sharpen every space, protect against the Florida sun, and deliver a cleaner result from the first walkthrough to the last detail.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#c2592e] text-white text-base font-semibold shadow-lg shadow-[#c2592e]/20 hover:bg-[#8e3d1c] hover:-translate-y-0.5 transition-all"
              >
                Get a Free Estimate
              </Link>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white border border-[#211711]/15 text-[#211711] text-base font-semibold shadow-sm hover:border-[#c2592e] hover:text-[#c2592e] transition-all"
              >
                Call {contact.phone}
              </a>
            </div>

            {/* Proof Badges */}
            <div className="pt-6 border-t border-[#211711]/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-[#6a594c]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#d9a460]">★</span> 5.0 Google Reviews
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2592e]" /> Free Estimates
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2592e]" /> Family-Owned &amp; Operated
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image
                src="/images/proj-exterior-white-2story.jpg"
                alt="Freshly painted two-story white home in Florida"
                width={640}
                height={520}
                priority
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Glassmorphism Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl backdrop-blur-md bg-white/85 border border-white/50 shadow-lg">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#c2592e]">
                  Primary Service Area
                </p>
                <p className="text-sm font-medium text-[#211711] mt-0.5">
                  {contact.serviceArea}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BEAT 2: Trust Strip */}
        <section className="bg-[#fffaf3] border-y border-[#211711]/10 py-8 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="font-serif text-xl font-bold text-[#c2592e]">Family-Owned</p>
              <p className="text-xs text-[#6a594c]">Direct communication, no subcontractors</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-xl font-bold text-[#c2592e]">Careful Prep</p>
              <p className="text-xs text-[#6a594c]">Pressure wash, patch, sand &amp; mask</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-xl font-bold text-[#c2592e]">Eco-Friendly</p>
              <p className="text-xs text-[#6a594c]">Low-VOC weather-rated coatings</p>
            </div>
            <div className="space-y-1">
              <p className="font-serif text-xl font-bold text-[#c2592e]">Clean Crews</p>
              <p className="text-xs text-[#6a594c]">Site tidied at the end of every day</p>
            </div>
          </div>
        </section>

        {/* BEAT 3: Services Overview (Macro Categories Only for SEO Hierarchy) */}
        <section className="px-4 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c2592e]">
              Services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211711]">
              Painting that improves how your home and business live.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {macroServices.map((service) => (
              <div
                key={service.slug}
                className="bg-[#fffaf3] rounded-3xl p-8 border border-[#211711]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#211711]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6a594c] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#211711]/5">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-sm font-semibold text-[#c2592e] hover:text-[#8e3d1c] group"
                  >
                    Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BEAT 4: Visual Proof / Showcase */}
        <section className="bg-[#fffaf3] py-20 px-4 lg:px-8 border-y border-[#211711]/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#c2592e]">
                  Selected Work
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211711] mt-2">
                  Homes and spaces painted with care, skill, and a family's pride.
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center text-sm font-semibold text-[#c2592e] hover:underline"
              >
                View all project photos →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {homeFeatures.map((project, idx) => (
                <div
                  key={project.title}
                  className={`group rounded-3xl overflow-hidden bg-[#faf3e9] border border-[#211711]/10 shadow-md ${
                    idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c2592e]">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#211711]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#6a594c] leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEAT 5: Empathy & Guarantees */}
        <section className="px-4 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c2592e]">
                Why 4 The Love of Color
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211711]">
                A more personal painting experience — built for the Gulf Coast.
              </h2>
              <p className="text-base text-[#6a594c] leading-relaxed">
                Homeowners here compare multiple quotes. The difference isn't just in the paint; it's in how your home is treated every single day of the job.
              </p>
              <div className="space-y-4 pt-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="p-4 rounded-2xl bg-[#fffaf3] border border-[#211711]/5">
                    <h3 className="font-serif text-lg font-bold text-[#211711]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6a594c] mt-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#fffaf3] p-8 lg:p-10 rounded-3xl border border-[#211711]/10 space-y-8 shadow-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#c2592e]">
                  Our Promises
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#211711] mt-1">
                  What you can hold us to — in writing, on every job.
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {guarantees.map((item, idx) => (
                  <div key={item.title} className="space-y-2">
                    <span className="font-serif text-2xl font-bold text-[#c2592e]/40">
                      0{idx + 1}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#211711]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#6a594c] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#c2592e]/5 border border-[#c2592e]/20 text-xs text-[#6a594c] space-y-1">
                <p className="font-semibold text-[#c2592e]">✓ Workmanship Guarantee</p>
                <p>We perform a thorough walkthrough with you before any final payment is requested.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BEAT 6: Our Process */}
        <section className="bg-[#fffaf3] py-20 px-4 lg:px-8 border-y border-[#211711]/10">
          <div className="max-w-7xl mx-auto text-center max-w-2xl mb-14 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c2592e]">
              Our Process
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211711]">
              From first call to final walkthrough.
            </h2>
          </div>

          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="bg-[#faf3e9] p-8 rounded-3xl border border-[#211711]/10 relative space-y-4"
              >
                <span className="inline-block text-3xl font-serif font-bold text-[#c2592e]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#211711]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6a594c] leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BEAT 7: Service Area (Local SEO Optimization) */}
        <section className="px-4 lg:px-8 py-20 max-w-7xl mx-auto">
          <div className="bg-[#211711] text-white p-8 sm:p-12 lg:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d9a460]">
                Service Area
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Proudly serving Lakewood Ranch, Sarasota, and the Suncoast.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Based in Lakewood Ranch, we paint homes and commercial properties throughout Manatee and Sarasota County.
              </p>

              <div className="pt-4 space-y-3">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#d9a460]">
                  Cities Covered:
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceCities.map((city) => (
                    <span
                      key={city}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-medium border border-white/10"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#d9a460]">
                  Lakewood Ranch Villages:
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {lakewoodRanchNeighborhoods.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BEAT 8: Social Proof / Testimonials */}
        <section className="bg-[#fffaf3] py-20 px-4 lg:px-8 border-t border-[#211711]/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c2592e]">
                What Clients Say
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211711]">
                Real care, on every job.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#faf3e9] p-8 rounded-3xl border border-[#211711]/10 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="text-[#d9a460] text-lg">★★★★★</div>
                    <p className="text-sm text-[#211711] italic leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#211711]/10">
                    <p className="text-xs font-bold text-[#211711]">{item.author}</p>
                    <p className="text-xs text-[#6a594c]">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEAT 9: Final Call to Action */}
        <section className="px-4 lg:px-8 py-20 max-w-7xl mx-auto text-center">
          <div className="bg-[#c2592e] text-white p-10 sm:p-16 rounded-[2.5rem] shadow-xl space-y-6 max-w-4xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#faf3e9]/80">
              Ready to Start
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Get a free estimate for your next painting project.
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto">
              Tell us about your space and we'll get back to you with a clear, no-pressure written quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#faf3e9] text-[#c2592e] text-base font-bold shadow-lg hover:bg-white transition-all"
              >
                Request a Quote
              </Link>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white/10 transition-all"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#211711] text-gray-300 border-t border-white/10 px-4 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <p className="font-serif text-xl font-bold text-white">
              4 The Love of Color Painting
            </p>
            <p className="text-xs leading-relaxed text-gray-400">
              Family-owned interior &amp; exterior painters serving Lakewood Ranch, Sarasota, Bradenton &amp; the surrounding Suncoast of Florida.
            </p>
            <p className="text-xs text-gray-500 pt-2">
              © {new Date().getFullYear()} 4 The Love of Color Painting. All rights reserved.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d9a460]">
              Explore
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d9a460]">
              Areas Served
            </p>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {serviceCities.slice(0, 6).map((city) => (
                <li key={city}>{city} painters</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d9a460]">
              Get In Touch
            </p>
            <div className="space-y-2 text-xs">
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
              <p className="text-gray-400">{business.hours}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
