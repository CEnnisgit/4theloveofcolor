/**
 * GET /.netlify/functions/reviews
 *
 * Serves live Google reviews for the marketing site. Ported from the CRM API's
 * /api/reviews route so the site no longer needs that backend deployed just to
 * show its own Google rating.
 *
 * The Google API key stays server-side here — it is never shipped to the
 * browser. Requires two environment variables set in the Netlify dashboard:
 *
 *   GOOGLE_PLACE_ID        the business's Google Place ID
 *   GOOGLE_PLACES_API_KEY  a Places API (New) key
 *
 * When either is missing, or Google fails, the response is
 * `{ configured: false }` and the site falls back to its curated testimonials.
 * That means an unconfigured or broken integration degrades quietly instead of
 * showing a visitor an empty reviews section.
 *
 * Plain .mjs rather than TypeScript on purpose: it keeps the function outside
 * the site's `tsc -b` build and needs no extra dependency.
 */

// Google's terms allow caching Places data for up to 30 days; 12h keeps the
// rating fresh while making quota use negligible. Served via CDN cache headers
// so the function itself rarely runs.
const CACHE_SECONDS = 12 * 60 * 60;

const UNCONFIGURED = {
  configured: false,
  rating: null,
  total: null,
  url: null,
  reviews: [],
};

const FIELD_MASK = [
  'rating',
  'userRatingCount',
  'googleMapsUri',
  'reviews.rating',
  'reviews.text',
  'reviews.relativePublishTimeDescription',
  'reviews.authorAttribution',
  'reviews.publishTime',
].join(',');

function json(payload, { cache } = {}) {
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      // Unconfigured/error responses must not be cached for long, or fixing the
      // env vars would appear to have no effect for half a day.
      'Cache-Control': cache
        ? `public, max-age=0, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`
        : 'public, max-age=0, s-maxage=60',
    },
  });
}

async function fetchFromGoogle(placeId, apiKey) {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
    {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': FIELD_MASK,
      },
    },
  );

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Google Places error ${res.status}: ${body.slice(0, 300)}`);
  }

  const data = await res.json();

  const reviews = (data.reviews ?? [])
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? 'Google reviewer',
      rating: typeof r.rating === 'number' ? r.rating : 5,
      text: r.text?.text ?? '',
      relativeTime: r.relativePublishTimeDescription ?? '',
      photo: r.authorAttribution?.photoUri ?? null,
      authorUrl: r.authorAttribution?.uri ?? null,
    }))
    .filter((r) => r.text.trim().length > 0)
    // Lead with the strongest reviews, then most recent.
    .sort((a, b) => b.rating - a.rating);

  return {
    configured: true,
    rating: typeof data.rating === 'number' ? data.rating : null,
    total: typeof data.userRatingCount === 'number' ? data.userRatingCount : null,
    url: data.googleMapsUri ?? null,
    reviews,
  };
}

export default async () => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return json(UNCONFIGURED);
  }

  try {
    return json(await fetchFromGoogle(placeId, apiKey), { cache: true });
  } catch (err) {
    console.error('[reviews] Google fetch failed:', err);
    return json(UNCONFIGURED);
  }
};
