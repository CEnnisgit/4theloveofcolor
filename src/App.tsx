import { type ReactNode, useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  type CityPage as CityPageData,
  cityPageBySlug,
  cityPages,
} from "./data/cityPages";
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
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
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

function HomePage() {
  useSeo("/");

  return (
    <>
      <section className="hero section" aria-labelledby="hero-title">
        <img className="hero-logo-bg" src="/images/logo.png" alt="" aria-hidden="true" />
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
          <ul className="hero-badges">
            <li>★★★★★ Locally trusted</li>
            <li>Free estimates</li>
            <li>Licensed &amp; insured</li>
          </ul>
        </div>
        <div className="hero-media">
          <Photo
            src="/images/proj-exterior-white-2story.jpg"
            alt="Freshly painted large two-story white Florida home with a three-car garage and paver driveway"
            width={720}
            height={560}
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
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
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

      <FaqSection />

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
              <h2>{service.title}</h2>
            </div>
            <p>{service.description}</p>
            <ul>
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
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

      <CityLinks currentSlug={page.slug} />

      <CtaBanner />
    </>
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
