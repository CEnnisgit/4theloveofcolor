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
 * Fetches live Google reviews from our backend proxy (/api/reviews).
 * Returns `configured: false` (the default) whenever the integration isn't
 * set up or the request fails, so the UI can fall back to curated reviews.
 */
export function useReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const base = import.meta.env.VITE_API_URL || "";
    fetch(`${base}/api/reviews`)
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
