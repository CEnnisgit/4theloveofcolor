# Launch & growth checklist

Everything the site needs that can't be done from the codebase. Ordered by
impact, not by effort.

---

## 1. Deploy the site (blocks everything else)

The site is finished and building clean, but `4theloveofcolorpainting.com`
still serves the old Wix site. Until that changes, none of the work in this
repo is doing anything.

1. **Connect Netlify** — netlify.com → *Add new site* → *Import from GitHub* →
   `CEnnisgit/4theloveofcolor`. Build settings come from `netlify.toml`; don't
   override them.
2. **Turn on form notifications** — *Site settings → Forms → Form
   notifications → Add notification → Email notification*, sent to
   `4theloveofcolorpainting@gmail.com`.

   **This step is not optional.** The contact form delivers through Netlify
   Forms. Without a notification configured, submissions land silently in the
   Netlify dashboard and nobody is told a lead came in.
3. **Test the form** on the temporary `*.netlify.app` URL and confirm the email
   arrives. Do this *before* touching DNS.
4. **Point the domain** — the domain is registered through Wix, so change its
   DNS there to Netlify's. Set `www.4theloveofcolorpainting.com` as the primary
   domain in Netlify; every canonical URL in the code uses the `www.` form.
5. **Keep Wix running** until DNS has propagated and the new site resolves.
   Cancel the subscription only after that.

---

## 2. Switch on live Google reviews

The business has 10+ real Google reviews. The site currently shows hard-coded
testimonials instead, because the live-review integration has no credentials.
This is the cheapest credibility win available.

Set two environment variables in *Netlify → Site settings → Environment
variables*:

| Variable | Where it comes from |
| --- | --- |
| `GOOGLE_PLACE_ID` | Google's Place ID Finder, or the Business Profile URL |
| `GOOGLE_PLACES_API_KEY` | Google Cloud Console → enable **Places API (New)** → create an API key |

Restrict the key to the Places API before saving it anywhere.

Once both are set, `netlify/functions/reviews.mjs` serves the live rating,
review count, and up to five reviews, cached 12h at the CDN. With either
variable missing the site falls back to the curated testimonials — so a
missing key degrades quietly rather than showing an empty section.

Detail: `GOOGLE_REVIEWS_SETUP.md` in the `4theloveofcolorpainting-api` repo.

---

## 3. Confirm the trust claims with Edwin

`src/data/siteContent.ts` has a `credentials` block that ships **switched
off**. Each field appears on the site only once it holds a real value. These
are deliberately left empty rather than guessed at: an advertised warranty is
an enforceable promise, and an insurance figure or license number is a
verifiable claim.

Ask Edwin for each, then fill it in:

- [ ] `warranty` — what does he actually stand behind? (e.g. a 2-year
      workmanship warranty). Competitors here advertise 10 years; matching that
      without meaning it is worse than saying nothing.
- [ ] `liabilityCoverage` — the figure on the certificate of insurance.
- [ ] `licenseNumber` — Florida contractor registration, if held.
- [ ] `paintBrands` — only brands actually used. Naming one implies a supplier
      relationship.
- [ ] `quoteTurnaround` — only if the crew can genuinely hold it. A missed
      same-day-quote promise costs more than never making it.
- [ ] `handlesHoaApproval` — **the biggest opportunity on this list.** Lakewood
      Ranch is almost entirely HOA communities that require colour approval
      before work starts. No local competitor advertises handling that
      paperwork. If Edwin will do it, set this `true` and it becomes a real
      differentiator. If not, leave it `false`.
- [ ] `yearsInBusiness` — needs the real founding year.

The four named guarantees in `guarantees` are already live. Each one restates a
commitment made elsewhere on the site, so none is a new promise — but Edwin
should still read them and confirm he's happy standing behind the wording.

---

## 4. A 941 phone number — parked

**Deferred by the owner (2026-07-27). Not a launch blocker; skip this section
until someone asks for it.** Noted here only so the reasoning isn't lost.

The site lists `(917) 584-0069` — a New York City area code on a Florida
business. A homeowner comparing three local quotes reads that as "not local",
and it weakens the local-search signal too.

A 941 number with forwarding costs a few dollars a month. When you have one,
update `business.phone` and `business.phoneHref` in `src/data/siteContent.ts`,
plus `telephone` in the JSON-LD block in `index.html`, and the Google Business
Profile. Keep the 917 forwarding so nothing in circulation breaks.

---

## 5. Reviews are the growth engine

For residential painting, most inbound comes through the Google local map
pack rather than the website. Review count and recency are the largest input
you control.

The crew-facing version of this is one habit: **text every finished job the
same day with the Google review link.** Four jobs a week at a 40% response
rate is about seven reviews a month.

Get the short review link from the Google Business Profile app: *Ask for
reviews* → copy link. It looks like `https://g.page/r/…/review`.

---

## 6. Photograph before, not just after

All ten project photos in `public/images/` are finished-state. Before/after
pairs convert better than either alone and are the strongest organic social
content in this trade.

It costs nothing but a habit: one wide shot of each elevation or room before
prep starts, from the same spot as the after shot. Same angle matters more
than photo quality.

---

## 7. Later, in this order

1. **Google Local Services Ads** — appears above the map pack, pay-per-lead.
   Worth it *after* the review count is solid, not before. Paying to send
   traffic to thin social proof wastes the spend.
2. **More city pages** — Palmetto, Parrish, Osprey. Read the note at the top
   of `src/data/cityPages.ts` first: each page needs genuinely specific
   content, and a copy-paste with the name changed will rank worse than no
   page at all.
3. **Service × city pages** — e.g. cabinet refinishing in Lakewood Ranch.
   Same rule applies.
4. **A cabinet refinishing page.** Highest-margin work in residential
   painting ($3–8k tickets, low material cost) and currently one mention on
   the whole site.

---

## Reference

- **Frontend** — this repo. React 18 + TS + Vite, deploys to Netlify.
- **CRM API** — `../4theloveofcolorpainting-api`. Express + SQLite, targets
  Railway. **Not deployed, and not needed.** The site works fully without it.
  If it is deployed later, set `VITE_API_URL` in Netlify and leads will mirror
  into it automatically — the contact form already handles this, and swallows
  CRM failures so an outage can never show a customer an error.
- **iOS app** — `../4theloveofcolorpainting-ios`. SwiftUI CRM client. Depends
  on the API above, so it needs that deployed first.
