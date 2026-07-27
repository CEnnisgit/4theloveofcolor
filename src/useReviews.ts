import { useEffect, useState } from "react";

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  photo: string | null;
  authorUrl: string | null;
};

export type ReviewsData = {
  configured: boolean;
  rating: number | null;
  total: number | null;
  url: string | null;
  reviews: GoogleReview[];
};

/**
 * Where to read reviews from.
 *
 * With no CRM backend deployed we use the Netlify Function, which needs only
 * two environment variables in the Netlify dashboard. The function path is
 * requested directly rather than through an /api/* redirect, because the SPA
 * catch-all in `_redirects` is evaluated before `netlify.toml` and would
 * otherwise swallow it.
 *
 * If VITE_API_URL is set, the CRM API is deployed and owns this endpoint.
 */
const REVIEWS_ENDPOINT = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/reviews`
  : "/.netlify/functions/reviews";

/**
 * Fetches live Google reviews through a server-side proxy that keeps the
 * Google API key private. Returns `configured: false` (the default) whenever
 * the integration isn't set up or the request fails, so the UI can fall back
 * to curated reviews. Local `vite dev` has no function, so it always falls
 * back — that is expected.
 */
export function useReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch(REVIEWS_ENDPOINT)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json: ReviewsData) => {
        if (active) setData(json);
      })
      .catch(() => {
        if (active) setData(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { data, loading };
}
