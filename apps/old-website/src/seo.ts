import { useEffect } from "react";
import { business } from "./data/siteContent";
import { routeByPath } from "./routes";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Keeps the document head correct during *client-side* navigation.
 *
 * This is the second half of the SEO story, not the first. The head tags that
 * matter for indexing are written into each route's static HTML at build time
 * by `scripts/prerender.mjs`, because that is what Google reads before it
 * renders any JavaScript. This hook only handles what happens after a visitor
 * clicks a link and no new document is fetched — so the tab title and the
 * canonical stay honest for anyone (or anything) inspecting the live DOM.
 *
 * Metadata comes from `routes.ts` so the two paths can never disagree.
 */
export function useSeo(path: string) {
  const route = routeByPath(path);

  useEffect(() => {
    if (!route) return;

    const url = business.url + (route.path === "/" ? "" : route.path);
    const ogImage =
      business.url + (route.image ?? "/images/proj-exterior-white-2story.jpg");

    document.title = route.title;
    setMeta("name", "description", route.description);
    setLink("canonical", url);

    setMeta("name", "robots", route.noIndex ? "noindex, follow" : "index, follow");

    setMeta("property", "og:title", route.title);
    setMeta("property", "og:description", route.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", "website");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", route.title);
    setMeta("name", "twitter:description", route.description);
    setMeta("name", "twitter:image", ogImage);
  }, [route]);
}
