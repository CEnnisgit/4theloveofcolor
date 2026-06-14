import { useEffect } from "react";
import { business } from "./data/siteContent";

type SeoProps = {
  title: string;
  description: string;
  /** Path only, e.g. "/services". Defaults to "/". */
  path?: string;
  image?: string;
};

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
 * Per-route SEO: sets <title>, meta description, canonical URL, and
 * Open Graph / Twitter tags on navigation. Works in an SPA because Google
 * renders client-side JS; the static fallbacks live in index.html.
 */
export function useSeo({ title, description, path = "/", image }: SeoProps) {
  useEffect(() => {
    const url = business.url + (path === "/" ? "" : path);
    const ogImage = image
      ? business.url + image
      : business.url + "/images/proj-exterior-white-2story.jpg";

    document.title = title;
    setMeta("name", "description", description);
    setLink("canonical", url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", "website");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
  }, [title, description, path, image]);
}
