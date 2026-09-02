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
      /**
       * Never hide what is already on screen.
       *
       * `.hero-copy` and `.hero-media` are above the fold, so applying the
       * hidden state to them produced: paint visible -> JS hides -> observer
       * fires -> fade back in. That is a visible flash, and it delays Largest
       * Contentful Paint, because an element at opacity 0 does not count as
       * painted. LCP is a Core Web Vitals ranking signal, so the animation was
       * costing exactly what the rest of this codebase works to protect.
       *
       * Elements already in the viewport at init are left alone entirely;
       * everything below the fold still animates as before.
       */
      const box = el.getBoundingClientRect();
      const alreadyVisible = box.top < window.innerHeight && box.bottom > 0;
      if (alreadyVisible) continue;

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
