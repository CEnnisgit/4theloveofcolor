import { type ReactNode, useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  type CityPage as CityPageData,
  cityPageBySlug,
  cityPages,
} from "./data/cityPages";
import {
  type ServicePage as ServicePageData,
  servicePageBySlug,
  servicePages,
} from "./data/servicePages";
import {
  type GuidePage as GuidePageData,
  guidePageBySlug,
  guidePages,
} from "./data/guidePages";
import { privacyLastUpdated, privacySections } from "./data/privacyPolicy";
import {
  type CityServicePage as CityServicePageData,
  cityServiceBySlugs,
  cityServicesForCity,
  cityServicesForService,
} from "./data/cityServicePages";
import {
  aboutCopy,
  business,
  contact,
  credentials,
  faqs,
  guarantees,
  homeFeatures,
  lakewoodRanchNeighborhoods,
  navItems,
  processSteps,
  projects,
  serviceCities,
  services,
  testimonials,
  whyUs,
} from "./data/siteContent";
import { useSeo } from "./seo";
import { Photo } from "./Photo";
import { useScrollReveal } from "./useScrollReveal";
import { useReviews } from "./useReviews";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  useScrollReveal();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-bg site-bg-top" />
      <div className="site-bg site-bg-bottom" />
      <ScrollToTop />
      <header className="topbar">
        <NavLink className="brand" to="/" onClick={closeMenu} aria-label="4 The Love of Color Painting home">
          <img
            className="brand-logo"
            src="/images/logo-emblem.png"
            alt="4 The Love of Color Painting logo"
            width={54}
            height={54}
          />
          <span className="brand-name">
            4 The Love of Color
            <small>Painting · Lakewood Ranch, FL</small>
          </span>
        </NavLink>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              to={item.path}
              onClick={closeMenu}
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
          <a className="button button-solid topbar-cta" href={contact.phoneHref} onClick={closeMenu}>
            Call {contact.phone}
          </a>
        </nav>
      </header>

      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:guideSlug" element={<GuideDetailPage />} />
          <Route
            path="/painters/:citySlug/:serviceSlug"
            element={<CityServicePage />}
          />
          <Route path="/painters/:citySlug" element={<CityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <p className="eyebrow">4 The Love of Color Painting</p>
        <p className="footer-copy">
          Family-owned interior &amp; exterior painters serving Lakewood Ranch,
          Sarasota, Bradenton &amp; the surrounding Suncoast of Florida.
        </p>
        <p className="footer-legal">
          &copy; {new Date().getFullYear()} 4 The Love of Color Painting. All rights reserved.
        </p>
      </div>
      <div className="footer-col">
        <h3>Explore</h3>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} end={item.path === "/"}>
            {item.label}
          </NavLink>
        ))}
        {/*
          Guides is listed here but not in the header menu. The footer link is
          what keeps the hub from being an orphan — a page with no internal
          links pointing at it is one Google has little reason to index.
        */}
        <NavLink to="/guides">Guides</NavLink>
        <NavLink to="/privacy">Privacy</NavLink>
      </div>
      <div className="footer-col">
        <h3>Areas served</h3>
        {cityPages.map((page) => (
          <NavLink key={page.slug} to={`/painters/${page.slug}`}>
            {page.city} painters
          </NavLink>
        ))}
      </div>
      <div className="footer-col">
        <h3>Get in touch</h3>
        <a href={contact.phoneHref}>{contact.phone}</a>
        <a href={contact.emailHref}>{contact.email}</a>
        <a href={contact.instagramHref} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <p className="footer-hours">{business.hours}</p>
      </div>
    </footer>
  );
}

/**
 * Renders a JSON-LD block inline, as part of the markup.
 *
 * Deliberately not a `useEffect` that appends to `document.head`: an effect
 * never runs during prerendering, so schema added that way is missing from the
 * HTML Google is served. Rendered inline it is present in the static file and
 * survives hydration. Position in the document does not matter — Google reads
 * JSON-LD from anywhere on the page.
 *
 * `<` is escaped so a stray "</script>" inside any string value cannot close
 * the block early.
 */
function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * The three proof points under the hero call-to-action.
 *
 * Only claims the site can actually back. The previous version hard-coded
 * "★★★★★ Locally trusted" and "Licensed & insured": the first renders a
 * five-star rating with no rating behind it, and the second is a verifiable
 * legal claim that `credentials` deliberately ships switched off. Both are
 * now derived, so turning the claim on means supplying the evidence.
 *
 * The star rating comes from the live Google reviews feed when it is
 * configured, which is the one place on the site where a real rating exists.
 */
function HeroBadges() {
  const { data } = useReviews();
  const badges: string[] = [];

  if (data?.configured && data.rating && data.total) {
    badges.push(`★ ${data.rating.toFixed(1)} · ${data.total} Google reviews`);
  }

  badges.push("Free estimates");
  badges.push("Family-owned");

  if (credentials.liabilityCoverage || credentials.licenseNumber) {
    badges.push("Licensed & insured");
  }
  if (credentials.warranty) {
    badges.push(credentials.warranty);
  }

  return (
    <ul className="hero-badges">
      {badges.slice(0, 3).map((badge) => (
        <li key={badge}>{badge}</li>
      ))}
    </ul>
  );
}

function HomePage() {
  useSeo("/");

  return (
    <>
      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Painters in Lakewood Ranch &amp; Sarasota, FL</p>
          <h1 id="hero-title">
            Color, finish, and detail work that make a home feel intentionally renewed.
          </h1>
          <p className="lead">
            Family-owned interior and exterior painting for homes and businesses across
            the Suncoast — designed to sharpen every space, protect against the Florida
            sun, and deliver a cleaner result from the first walkthrough to the last detail.
          </p>
          <div className="hero-actions">
            <NavLink className="button button-solid" to="/contact">
              Get a Free Estimate
            </NavLink>
            <a className="button button-outline" href={contact.phoneHref}>
              Call {contact.phone}
            </a>
          </div>
          <HeroBadges />
        </div>
        <div className="hero-media">
          <Photo
            src="/images/proj-exterior-white-2story.jpg"
            alt="Freshly painted large two-story white Florida home with a three-car garage and paver driveway"
            width={720}
            height={584}
            sizes="(max-width: 900px) 100vw, 720px"
            priority
          />
          <div className="floating-panel">
            <span className="eyebrow">Serving</span>
            <p>{contact.serviceArea}</p>
          </div>
        </div>
      </section>

      <section className="section trust-strip" aria-label="What sets us apart">
        <p>Family-owned</p>
        <p>Careful prep</p>
        <p>Eco-friendly paint</p>
        <p>Clean, on-time crews</p>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">Painting that improves how your home and business live.</h2>
        </div>
        <div className="service-grid">
          {/*
            Deliberately the short form: heading and description only, with the
            bullets left to /services and the per-service pages. The home page
            and /services previously rendered identical cards and an identical
            FAQ, which measured at 36% text overlap — two of our own URLs
            competing for the same query. The home page introduces; the service
            pages carry the detail.
          */}
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>
                <NavLink to={`/services/${service.slug}`}>{service.title}</NavLink>
              </h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <NavLink className="button button-outline" to="/services">
            See all services
          </NavLink>
        </div>
      </section>

      <section className="section showcase" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">
            Homes and spaces painted with care, skill, and a family's pride in the work.
          </h2>
        </div>
        <div className="project-feature-grid">
          {homeFeatures.map((project, index) => (
            <article
              key={project.title}
              className={index === 0 ? "project-card featured" : "project-card"}
            >
              <Photo src={project.image} alt={project.alt} width={640} height={480} />
              <div className="project-copy">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-section" aria-labelledby="why-title">
        <div className="section-heading">
          <p className="eyebrow">Why 4 The Love of Color</p>
          <h2 id="why-title">A more personal painting experience — built for the Gulf Coast.</h2>
        </div>
        <div className="why-grid">
          {whyUs.map((item) => (
            <article key={item.title} className="why-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-grid" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow">Our process</p>
          <h2 id="process-title">From first call to final walkthrough.</h2>
        </div>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <article key={step.title} className="process-card">
              <span className="process-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <GuaranteesSection />

      <ServiceAreaSection />

      <CityLinks />

      <ReviewsSection />

      {/*
        The FAQ lives on /services, not here. It was rendering on both pages,
        which duplicated the copy and — worse — emitted the same FAQPage
        structured data under two different URLs. One question set, one page
        that owns it.
      */}

      <CtaBanner />
    </>
  );
}

/**
 * The four named promises, plus any hard credentials the owner has confirmed.
 *
 * Homeowners here collect three or four quotes and compare them side by side,
 * and the competitor who names their guarantees wins that comparison even when
 * the underlying work is equivalent. Each promise restates a commitment made
 * elsewhere on the site; the harder claims come from `credentials` and appear
 * only once filled in.
 */
function GuaranteesSection() {
  const confirmed = [
    credentials.warranty,
    credentials.liabilityCoverage &&
      `${credentials.liabilityCoverage} — certificate available on request`,
    credentials.licenseNumber && `License #${credentials.licenseNumber}`,
    credentials.paintBrands.length > 0 &&
      `${credentials.paintBrands.join(" & ")} coatings`,
    credentials.quoteTurnaround,
    credentials.handlesHoaApproval &&
      "We prepare your HOA / ARC color-approval paperwork",
    credentials.yearsInBusiness && `Painting the Suncoast ${credentials.yearsInBusiness.toLowerCase()}`,
  ].filter((item): item is string => Boolean(item));

  return (
    <section className="section guarantee-section" aria-labelledby="guarantee-title">
      <div className="section-heading">
        <p className="eyebrow">Our promises</p>
        <h2 id="guarantee-title">
          What you can hold us to — in writing, on every job.
        </h2>
      </div>
      <div className="guarantee-grid">
        {guarantees.map((item, index) => (
          <article key={item.title} className="guarantee-card">
            <span className="guarantee-number">0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      {confirmed.length > 0 && (
        <ul className="credential-list">
          {confirmed.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <span className="stars" aria-label={`${full} out of 5 stars`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

function ReviewsSection() {
  const { data } = useReviews();
  const live = data?.configured && data.reviews.length > 0;

  const items = live
    ? data!.reviews.slice(0, 6).map((r) => ({
        key: r.author + r.relativeTime,
        author: r.author,
        rating: r.rating,
        text: r.text,
        meta: ["Google", r.relativeTime].filter(Boolean).join(" · "),
        photo: r.photo,
      }))
    : testimonials.map((t) => ({
        key: t.quote,
        author: t.author,
        rating: 5,
        text: t.quote,
        meta: t.location,
        photo: null as string | null,
      }));

  return (
    <section className="section testimonial-section" aria-labelledby="reviews-title">
      <div className="section-heading reviews-heading">
        <p className="eyebrow">What clients say</p>
        <h2 id="reviews-title">Real care, on every job.</h2>
        {live && data!.rating != null && (
          <a
            className="google-rating"
            href={data!.url ?? "#"}
            target="_blank"
            rel="noreferrer"
          >
            <GoogleG />
            <strong>{data!.rating!.toFixed(1)}</strong>
            <Stars rating={data!.rating!} />
            {data!.total != null && <span>· {data!.total} Google reviews</span>}
          </a>
        )}
      </div>
      <div className="testimonial-grid">
        {items.map((item) => (
          <blockquote key={item.key} className="testimonial-card">
            <Stars rating={item.rating} />
            <p className="review-text">{item.text}</p>
            <footer>
              {item.photo && (
                <img
                  className="review-avatar"
                  src={item.photo}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              )}
              <span className="review-meta">
                <strong>{item.author}</strong>
                <span>{item.meta}</span>
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
      {live && data!.url && (
        <div className="section-cta">
          <a className="button button-outline" href={data!.url} target="_blank" rel="noreferrer">
            Read all reviews on Google
          </a>
        </div>
      )}
    </section>
  );
}

function ServiceAreaSection() {
  return (
    <section className="section service-area" aria-labelledby="area-title">
      <div className="section-heading">
        <p className="eyebrow">Service area</p>
        <h2 id="area-title">Proudly serving the Suncoast.</h2>
        <p className="lead">
          Based in Lakewood Ranch, we paint homes and businesses throughout Manatee and
          Sarasota County. If you don't see your town, call us — chances are we cover it.
        </p>
      </div>
      <ul className="city-grid">
        {serviceCities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
      {/*
        Homeowners in Lakewood Ranch search by village name far more than by
        "Lakewood Ranch", and those searches are near-zero competition compared
        with the city-level terms.
      */}
      <div className="neighborhood-block">
        <p className="eyebrow">Lakewood Ranch villages we cover</p>
        <p className="neighborhood-list">
          {lakewoodRanchNeighborhoods.join(" · ")}
        </p>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <JsonLd data={faqSchema} />
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-title">Answers before you call.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((f) => (
          <details key={f.question} className="faq-item">
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="section cta-banner">
      <div>
        <p className="eyebrow">Ready to start</p>
        <h2>Get a free estimate for your next painting project.</h2>
        <p className="lead">
          Tell us about your space and we'll get back to you with a clear, no-pressure quote.
        </p>
      </div>
      <div className="cta-actions">
        <NavLink className="button button-solid" to="/contact">
          Request a Quote
        </NavLink>
        <a className="button button-outline" href={contact.phoneHref}>
          Call {contact.phone}
        </a>
      </div>
    </section>
  );
}

function ServicesPage() {
  useSeo("/services");

  return (
    <PageShell
      eyebrow="Services"
      title="Painting services shaped around finish quality, durability, and the feel of your home."
      intro="Every project is treated as a visible upgrade to daily living — not just a maintenance task — and built to hold up to the Florida climate."
    >
      <div className="service-grid">
        {services.map((service, index) => (
          <article key={service.title} className="service-card service-card-large">
            <div>
              <span className="service-index">0{index + 1}</span>
              <h2>
                <NavLink to={`/services/${service.slug}`}>{service.title}</NavLink>
              </h2>
            </div>
            <p>{service.description}</p>
            <ul>
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <NavLink className="service-more" to={`/services/${service.slug}`}>
              More on {service.title.toLowerCase()} →
            </NavLink>
          </article>
        ))}
      </div>
      <ServiceAreaSection />
      <FaqSection />
      <CtaBanner />
    </PageShell>
  );
}

function ProjectsPage() {
  useSeo("/projects");

  return (
    <PageShell
      eyebrow="Projects"
      title="Finished spaces across interior, exterior, and detail work."
      intro="A look at the color, finish quality, and range of spaces we bring more care to — from everyday rooms to full exterior refreshes across the Suncoast."
    >
      <div className="project-gallery">
        {projects.map((project) => (
          <article key={project.title} className="project-gallery-card">
            <Photo src={project.image} alt={project.alt} width={640} height={480} />
            <div className="project-copy">
              <span>{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
      <CtaBanner />
    </PageShell>
  );
}

function AboutPage() {
  useSeo("/about");

  return (
    <PageShell
      eyebrow="About"
      title="A family painting business built around color confidence and a more personal experience."
      intro={aboutCopy.intro}
    >
      <section className="about-layout">
        <div className="about-copy">
          <p>{aboutCopy.body}</p>
          <div className="about-points">
            {whyUs.map((item) => (
              <article key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <Photo
          className="about-image"
          src="/images/proj-exterior-mediterranean.jpg"
          alt="Grand two-story white Mediterranean home freshly painted, framed by mature palms"
          width={560}
          height={700}
        />
      </section>
      <CtaBanner />
    </PageShell>
  );
}

function ContactPage() {
  useSeo("/contact");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("Interior painting");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    // Build the Netlify payload from the form itself so every field — including
    // the honeypot — is submitted, and the fields can never drift out of sync
    // with the markup.
    const params = new URLSearchParams({ "form-name": "estimate" });
    new FormData(e.currentTarget as HTMLFormElement).forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });

    try {
      // Delivery is Netlify Forms and nothing else: no backend, no monthly
      // cost, and no service that can be down when a lead arrives. Netlify
      // emails every submission to the address configured under
      // Site settings -> Forms -> Form notifications. If that notification is
      // not configured, submissions collect silently in the Netlify dashboard
      // and nobody is told — see LAUNCH.md.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!response.ok) {
        throw new Error("Something went wrong. Please try again, or call us at " + contact.phone + ".");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again, or call us at " + contact.phone + ".",
      );
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
  }

  return (
    <PageShell
      eyebrow="Contact"
      title="Get a free estimate — a simple, direct next step."
      intro="Share a few project details and we'll get right back to you. Prefer to talk? Call us anytime during business hours."
    >
      <section className="contact-layout">
        <div className="contact-card">
          <h2>Get in touch</h2>
          <a className="contact-line" href={contact.phoneHref}>
            <strong>Call</strong> {contact.phone}
          </a>
          <a className="contact-line" href={contact.emailHref}>
            <strong>Email</strong> {contact.email}
          </a>
          <a className="contact-line" href={contact.instagramHref} target="_blank" rel="noreferrer">
            <strong>Instagram</strong> @4theloveofcolorpainting
          </a>
          <p className="contact-meta">{business.hours}</p>
          <p className="contact-meta">Serving {contact.serviceArea}</p>
        </div>
        {submitted ? (
          <div className="contact-form contact-success">
            <p>Thank you! We received your inquiry and will be in touch soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} name="estimate">
            {/* Netlify honeypot — real people never see it, bots fill it in. */}
            <p hidden>
              <label>
                Don't fill this out<input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <label>
              Name
              <input
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Phone
              <input
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label>
              Project type
              <select
                name="project_type"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option>Interior painting</option>
                <option>Exterior painting</option>
                <option>Cabinets or specialty finishes</option>
                <option>Commercial painting</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>
              Tell us about the space
              <textarea
                name="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            {error && <p className="form-error">{error}</p>}
            <button className="button button-solid" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        )}
      </section>
    </PageShell>
  );
}

function NotFoundPage() {
  useSeo("/404");

  return (
    <section className="section notfound">
      <p className="eyebrow">404</p>
      <h1>We couldn't find that page.</h1>
      <p className="lead">
        It may have moved. Let's get you back to something useful.
      </p>
      <div className="hero-actions">
        <NavLink className="button button-solid" to="/">
          Back to Home
        </NavLink>
        <NavLink className="button button-outline" to="/contact">
          Get a Free Estimate
        </NavLink>
      </div>
    </section>
  );
}

type PageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <>
      <section className="page-hero section">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </section>
      <section className="section page-body">{children}</section>
    </>
  );
}

/**
 * Service × city page at /painters/:citySlug/:serviceSlug.
 *
 * Only the combinations listed in cityServicePages.ts exist. An unlisted pair
 * — /painters/venice/commercial-painting, say — renders the 404 rather than a
 * generated page, which is the mechanism that keeps this from becoming a
 * sixteen-page doorway grid. See the note at the top of that file.
 */
function CityServicePage() {
  const { citySlug, serviceSlug } = useParams();
  const page =
    citySlug && serviceSlug ? cityServiceBySlugs(citySlug, serviceSlug) : undefined;
  const city = citySlug ? cityPageBySlug(citySlug) : undefined;
  const service = serviceSlug ? servicePageBySlug(serviceSlug) : undefined;

  if (!page || !city || !service) {
    return <NotFoundPage />;
  }

  return <CityServiceBody page={page} city={city} service={service} />;
}

function CityServiceBody({
  page,
  city,
  service,
}: {
  page: CityServicePageData;
  city: CityPageData;
  service: ServicePageData;
}) {
  useSeo(`/painters/${page.citySlug}/${page.serviceSlug}`);

  const url = `${business.url}/painters/${page.citySlug}/${page.serviceSlug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name: `${service.name} in ${city.city}`,
    serviceType: service.serviceType,
    url,
    description: page.metaDescription,
    provider: { "@id": `${business.url}/#business` },
    areaServed: {
      "@type": "City",
      name: city.city,
      containedInPlace: { "@type": "AdministrativeArea", name: city.county },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: `${city.city} painters`,
        item: `${business.url}/painters/${page.citySlug}`,
      },
      { "@type": "ListItem", position: 3, name: service.name, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <NavLink to="/">Home</NavLink>
        <span aria-hidden="true">/</span>
        <NavLink to={`/painters/${page.citySlug}`}>{city.city}</NavLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{service.name}</span>
      </nav>

      <section className="page-hero section">
        <p className="eyebrow">
          {service.name} · {city.city}, {business.region}
        </p>
        <h1>{page.h1}</h1>
        {page.intro.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? "lead" : undefined}>
            {paragraph}
          </p>
        ))}
        <div className="hero-actions">
          <NavLink className="button button-solid" to="/contact">
            Get a Free Estimate
          </NavLink>
          <a className="button button-outline" href={contact.phoneHref}>
            Call {contact.phone}
          </a>
        </div>
      </section>

      <section className="section" aria-labelledby="cityservice-points-title">
        <div className="section-heading">
          <p className="eyebrow">What's different here</p>
          <h2 id="cityservice-points-title">
            {service.name} in {city.city}, specifically.
          </h2>
        </div>
        <div className="why-grid">
          {page.points.map((point) => (
            <article key={point.title} className="why-card">
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-area" aria-labelledby="cityservice-areas-title">
        <div className="section-heading">
          <p className="eyebrow">Where we work</p>
          <h2 id="cityservice-areas-title">Areas of {city.city} we cover.</h2>
        </div>
        <ul className="city-grid">
          {city.areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <ReviewsSection />

      <section className="section page-body">
        <p className="lead">{page.closing}</p>
        <p className="guide-crosslink">
          More detail on how we approach this work:{" "}
          <NavLink to={`/services/${page.serviceSlug}`}>
            {service.name.toLowerCase()}, step by step
          </NavLink>
          . Or see everything we do in{" "}
          <NavLink to={`/painters/${page.citySlug}`}>{city.city}</NavLink>.
        </p>
      </section>

      <CityServiceLinks
        citySlug={page.citySlug}
        cityName={city.city}
        excludeServiceSlug={page.serviceSlug}
      />
      <ServiceCityLinks
        serviceSlug={page.serviceSlug}
        excludeCitySlug={page.citySlug}
      />

      <CtaBanner />
    </>
  );
}

/**
 * Privacy policy at /privacy.
 *
 * Content lives in data/privacyPolicy.ts and describes what this site actually
 * does rather than a generic template — see the note at the top of that file.
 */
function PrivacyPage() {
  useSeo("/privacy");

  return (
    <PageShell
      eyebrow="Privacy"
      title="What we do with your information."
      intro="The short version: we use what you send us to get back to you about your project, and nothing else."
    >
      <p className="guide-crosslink">Last updated {privacyLastUpdated}.</p>
      {privacySections.map((section) => (
        <section key={section.heading} className="policy-section">
          <h2>{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="guide-paragraph">
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="policy-list">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <section className="policy-section">
        <h2>Getting in touch</h2>
        <p className="guide-paragraph">
          Questions about any of this, or want your details removed? Email{" "}
          <a href={contact.emailHref}>{contact.email}</a> or call{" "}
          <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
      </section>
    </PageShell>
  );
}

/** Guides hub. Keeps every guide one click from the nav and out of orphan status. */
function GuidesPage() {
  useSeo("/guides");

  return (
    <PageShell
      eyebrow="Guides"
      title="Straight answers to the questions people ask before they call a painter."
      intro="What things cost and why, how to read an estimate, and what Florida weather does to a finish — written from the work rather than from a keyword list."
    >
      <div className="service-grid">
        {guidePages.map((guide) => (
          <article key={guide.slug} className="service-card service-card-large">
            <h2>
              <NavLink to={`/guides/${guide.slug}`}>{guide.h1}</NavLink>
            </h2>
            <p>{guide.metaDescription}</p>
            <NavLink className="service-more" to={`/guides/${guide.slug}`}>
              Read the guide →
            </NavLink>
          </article>
        ))}
      </div>
      <CtaBanner />
    </PageShell>
  );
}

/**
 * Guide page at /guides/:guideSlug.
 *
 * Targets the research-stage searches — cost, comparison, timing — that come
 * before anyone is ready to call a painter.
 */
function GuideDetailPage() {
  const { guideSlug } = useParams();
  const page = guideSlug ? guidePageBySlug(guideSlug) : undefined;

  if (!page) {
    return <NotFoundPage />;
  }

  return <GuideDetailBody page={page} />;
}

function GuideDetailBody({ page }: { page: GuidePageData }) {
  useSeo(`/guides/${page.slug}`);

  const url = `${business.url}/guides/${page.slug}`;

  // Article, authored and published by the business itself. `dateModified`
  // comes from the content, not from the build — regenerating the site is not
  // a content change, and bumping the date to look fresh is exactly what
  // Google's spam guidance warns about.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline: page.h1,
    description: page.metaDescription,
    datePublished: page.published,
    dateModified: page.updated,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": `${business.url}/#business` },
    publisher: { "@id": `${business.url}/#business` },
    ...(page.image ? { image: [business.url + page.image] } : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.url}/` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${business.url}/guides` },
      { "@type": "ListItem", position: 3, name: page.name, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <NavLink to="/">Home</NavLink>
        <span aria-hidden="true">/</span>
        <NavLink to="/guides">Guides</NavLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{page.name}</span>
      </nav>

      <section className="page-hero section">
        <p className="eyebrow">Guide</p>
        <h1>{page.h1}</h1>
        {page.intro.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? "lead" : undefined}>
            {paragraph}
          </p>
        ))}
      </section>

      {page.image && (
        <section className="section service-hero-media">
          {/* priority: this is the LCP element on these pages, so it must not
              lazy-load. */}
          <Photo
            src={page.image}
            alt={page.imageAlt}
            width={1100}
            height={700}
            sizes="(max-width: 1180px) 100vw, 1100px"
            priority
          />
        </section>
      )}

      {page.sections.map((section) => (
        <section
          key={section.heading}
          className="section"
          aria-label={section.heading}
        >
          <div className="section-heading">
            <h2>{section.heading}</h2>
          </div>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="guide-paragraph">
              {paragraph}
            </p>
          ))}
          {section.points && (
            <div className="why-grid">
              {section.points.map((point) => (
                <article key={point.title} className="why-card">
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="section faq-section" aria-labelledby="guide-faq-title">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="guide-faq-title">Common questions about cost.</h2>
        </div>
        <div className="faq-list">
          {page.faqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section page-body">
        <p className="lead">{page.closing}</p>
        <RelatedGuides
          slugs={guidePages.map((g) => g.slug)}
          exclude={page.slug}
        />
      </section>

      <ServiceLinks />

      <CtaBanner />
    </>
  );
}

/**
 * Per-service page at /services/:serviceSlug.
 *
 * The /services hub introduces all four services; these pages are what a
 * search like "cabinet refinishing Lakewood Ranch" should land on. One page
 * cannot rank well for four different services at once, which is why the hub
 * links out rather than trying to carry them all.
 */
function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const page = serviceSlug ? servicePageBySlug(serviceSlug) : undefined;

  if (!page) {
    return <NotFoundPage />;
  }

  return <ServiceDetailBody page={page} />;
}

function ServiceDetailBody({ page }: { page: ServicePageData }) {
  useSeo(`/services/${page.slug}`);

  // Service, scoped to this page and pointing at the site-wide HousePainter
  // entity declared in index.html rather than redeclaring the business.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${business.url}/services/${page.slug}/#service`,
    name: page.name,
    serviceType: page.serviceType,
    url: `${business.url}/services/${page.slug}`,
    description: page.metaDescription,
    provider: { "@id": `${business.url}/#business` },
    areaServed: cityPages.map((city) => ({
      "@type": "City",
      name: city.city,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${business.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${business.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.name,
        item: `${business.url}/services/${page.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <NavLink to="/">Home</NavLink>
        <span aria-hidden="true">/</span>
        <NavLink to="/services">Services</NavLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{page.name}</span>
      </nav>

      <section className="page-hero section">
        <p className="eyebrow">{page.name}</p>
        <h1>{page.h1}</h1>
        {page.intro.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? "lead" : undefined}>
            {paragraph}
          </p>
        ))}
        <div className="hero-actions">
          <NavLink className="button button-solid" to="/contact">
            Get a Free Estimate
          </NavLink>
          <a className="button button-outline" href={contact.phoneHref}>
            Call {contact.phone}
          </a>
        </div>
      </section>

      {page.image && (
        <section className="section service-hero-media">
          {/* priority: this is the LCP element on these pages, so it must not
              lazy-load. */}
          <Photo
            src={page.image}
            alt={page.imageAlt}
            width={1100}
            height={700}
            sizes="(max-width: 1180px) 100vw, 1100px"
            priority
          />
        </section>
      )}

      <section className="section" aria-labelledby="service-includes-title">
        <div className="section-heading">
          <p className="eyebrow">What's covered</p>
          <h2 id="service-includes-title">What this work includes.</h2>
        </div>
        <ul className="city-grid">
          {page.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="service-process-title">
        <div className="section-heading">
          <p className="eyebrow">How it's done</p>
          <h2 id="service-process-title">The work, in order.</h2>
        </div>
        <div className="why-grid">
          {page.process.map((step, index) => (
            <article key={step.title} className="process-card">
              <span className="process-step">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="service-problems-title">
        <div className="section-heading">
          <p className="eyebrow">Common problems</p>
          <h2 id="service-problems-title">What people call us about.</h2>
        </div>
        <div className="why-grid">
          {page.problems.map((problem) => (
            <article key={problem.title} className="why-card">
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="service-timeline-title">
        <div className="section-heading">
          <p className="eyebrow">What to expect</p>
          <h2 id="service-timeline-title">Timing, and living with the work.</h2>
        </div>
        <div className="why-grid">
          <article className="why-card">
            <h3>How long it takes</h3>
            <p>{page.timeline}</p>
          </article>
          <article className="why-card">
            <h3>While we're working</h3>
            <p>{page.occupied}</p>
          </article>
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="service-faq-title">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="service-faq-title">{page.name} questions.</h2>
        </div>
        <div className="faq-list">
          {page.faqs.map((f) => (
            <details key={f.question} className="faq-item">
              <summary>{f.question}</summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <GuaranteesSection />

      <section className="section page-body">
        <p className="lead">{page.closing}</p>
        <RelatedGuides slugs={page.relatedGuides} />
      </section>

      <ServiceCityLinks serviceSlug={page.slug} />

      <ServiceLinks currentSlug={page.slug} />

      <CtaBanner />
    </>
  );
}

/**
 * Contextual links to guides that genuinely bear on the current page.
 *
 * Guides sit outside the main menu, so these links and the footer are most of
 * what makes them discoverable — to readers and to Google. Renders nothing
 * when a page has no relevant guide rather than padding out a list.
 */
function RelatedGuides({ slugs, exclude }: { slugs: string[]; exclude?: string }) {
  const guides = slugs
    .filter((slug) => slug !== exclude)
    .map((slug) => guidePageBySlug(slug))
    .filter((g): g is GuidePageData => Boolean(g));

  if (guides.length === 0) return null;

  return (
    <div className="guide-crosslink">
      <p>Worth a read before you decide:</p>
      <ul>
        {guides.map((guide) => (
          <li key={guide.slug}>
            <NavLink to={`/guides/${guide.slug}`}>{guide.h1}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Cross-links between service pages, so none is orphaned. */
function ServiceLinks({ currentSlug }: { currentSlug?: string }) {
  const others = servicePages.filter((page) => page.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="section city-links" aria-labelledby="service-links-title">
      <p className="eyebrow" id="service-links-title">
        Other services
      </p>
      <ul>
        {others.map((page) => (
          <li key={page.slug}>
            <NavLink to={`/services/${page.slug}`}>{page.name}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Per-city landing page at /painters/:citySlug.
 *
 * These exist to rank for "painters in <town>", which is how people actually
 * search. That only works if each page is genuinely about its town, so all the
 * substance comes from cityPages.ts rather than from a template with the name
 * swapped in — see the note at the top of that file.
 */
function CityPage() {
  const { citySlug } = useParams();
  const page = citySlug ? cityPageBySlug(citySlug) : undefined;

  // Unknown slug: render the 404 rather than an empty shell, so a mistyped or
  // stale city URL doesn't return a thin page with a 200.
  if (!page) {
    return <NotFoundPage />;
  }

  return <CityPageBody page={page} />;
}

function CityPageBody({ page }: { page: CityPageData }) {
  useSeo(`/painters/${page.slug}`);

  // Service + areaServed schema scoped to this city. The site-wide
  // HousePainter entity is declared in index.html; this references it rather
  // than redeclaring the business on every page.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "House Painting",
    provider: { "@id": `${business.url}/#business` },
    areaServed: {
      "@type": "City",
      name: page.city,
      containedInPlace: { "@type": "AdministrativeArea", name: page.county },
    },
    description: page.metaDescription,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <section className="page-hero section">
        <p className="eyebrow">
          Painting in {page.city}, {business.region}
        </p>
        <h1>{page.h1}</h1>
        {page.intro.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? "lead" : undefined}>
            {paragraph}
          </p>
        ))}
        <div className="hero-actions">
          <NavLink className="button button-solid" to="/contact">
            Get a Free Estimate
          </NavLink>
          <a className="button button-outline" href={contact.phoneHref}>
            Call {contact.phone}
          </a>
        </div>
      </section>

      <section className="section" aria-labelledby="city-considerations-title">
        <div className="section-heading">
          <p className="eyebrow">What's different here</p>
          <h2 id="city-considerations-title">
            What painting in {page.city} actually involves.
          </h2>
        </div>
        <div className="why-grid">
          {page.considerations.map((item) => (
            <article key={item.title} className="why-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-area" aria-labelledby="city-areas-title">
        <div className="section-heading">
          <p className="eyebrow">Where we work</p>
          <h2 id="city-areas-title">Areas of {page.city} we cover.</h2>
        </div>
        <ul className="city-grid">
          {page.areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <GuaranteesSection />

      <ReviewsSection />

      <section className="section page-body">
        <p className="lead">{page.closing}</p>
      </section>

      <CityServiceLinks citySlug={page.slug} cityName={page.city} />

      <CityLinks currentSlug={page.slug} />

      <CtaBanner />
    </>
  );
}

/**
 * Links from a city page down to the service × city pages that exist for it.
 *
 * Renders nothing when there are none, which is the normal case for most
 * cities — only a handful of combinations have enough genuinely local
 * substance to justify a page. See cityServicePages.ts.
 */
function CityServiceLinks({
  citySlug,
  cityName,
  excludeServiceSlug,
}: {
  citySlug: string;
  cityName: string;
  /** Set when rendered on one of these pages, so it cannot link to itself. */
  excludeServiceSlug?: string;
}) {
  const pages = cityServicesForCity(citySlug).filter(
    (page) => page.serviceSlug !== excludeServiceSlug,
  );
  if (pages.length === 0) return null;

  return (
    <section className="section city-links" aria-labelledby="city-service-links-title">
      <p className="eyebrow" id="city-service-links-title">
        In {cityName}, specifically
      </p>
      <ul>
        {pages.map((page) => {
          const service = servicePageBySlug(page.serviceSlug);
          if (!service) return null;
          return (
            <li key={`${page.citySlug}-${page.serviceSlug}`}>
              <NavLink to={`/painters/${page.citySlug}/${page.serviceSlug}`}>
                {service.name} in {cityName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/**
 * Links from a service page across to the cities where that service has its
 * own page. Same "render nothing if empty" rule.
 */
function ServiceCityLinks({
  serviceSlug,
  excludeCitySlug,
}: {
  serviceSlug: string;
  /** Set when rendered on one of these pages, so it cannot link to itself. */
  excludeCitySlug?: string;
}) {
  const pages = cityServicesForService(serviceSlug).filter(
    (page) => page.citySlug !== excludeCitySlug,
  );
  if (pages.length === 0) return null;

  return (
    <section className="section city-links" aria-labelledby="service-city-links-title">
      <p className="eyebrow" id="service-city-links-title">
        By area
      </p>
      <ul>
        {pages.map((page) => {
          const city = cityPageBySlug(page.citySlug);
          if (!city) return null;
          return (
            <li key={`${page.citySlug}-${page.serviceSlug}`}>
              <NavLink to={`/painters/${page.citySlug}/${page.serviceSlug}`}>
                {city.city}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** Cross-links between city pages, so each one is reachable and none is orphaned. */
function CityLinks({ currentSlug }: { currentSlug?: string }) {
  const others = cityPages.filter((page) => page.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="section city-links" aria-labelledby="city-links-title">
      <p className="eyebrow" id="city-links-title">
        Also serving
      </p>
      <ul>
        {others.map((page) => (
          <li key={page.slug}>
            <NavLink to={`/painters/${page.slug}`}>
              Painters in {page.city}, {business.region}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
