import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Elements that should gently fade/rise into view as the user scrolls.
const SELECTORS = [
  ".hero-copy",
  ".hero-media",
  ".trust-strip p",
  ".section-heading",
  ".service-card",
  ".project-card",
  ".why-card",
  ".process-card",
  ".testimonial-card",
  ".city-grid li",
  ".faq-item",
  ".about-copy",
  ".about-image",
  ".contact-card",
  ".contact-form",
  ".cta-banner",
].join(",");

/**
 * Progressive-enhancement scroll reveal. The base `.reveal` (hidden) state is
 * only applied via JS, so crawlers and no-JS visitors always see full content.
 * Honors prefers-reduced-motion. Re-runs on route change.
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTORS)
    );
    if (!("IntersectionObserver" in window) || els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    // Small per-group stagger for a more polished cascade.
    let lastParent: Element | null = null;
    let stagger = 0;
    for (const el of els) {
      el.classList.add("reveal");
      const parent = el.parentElement;
      if (parent !== lastParent) {
        stagger = 0;
        lastParent = parent;
      } else {
        stagger = Math.min(stagger + 70, 280);
      }
      el.style.setProperty("--reveal-delay", `${stagger}ms`);
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);
}
