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

   The build now prerenders a static HTML file per route, so there is no SPA
   catch-all redirect any more. Unmatched URLs serve `404.html` with a real
   404. If you ever re-add a `/* /index.html 200` rule, every mistyped URL
   goes back to returning 200 on a "page not found" screen, and the
   `/about-us` redirect below stops firing.
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

### The Wix URLs Google already has

The current Wix site publishes eight URLs in its sitemap. Four carry across
unchanged, one is redirected in `public/_redirects`, and three have no
equivalent here yet:

| Wix URL | After cutover |
| --- | --- |
| `/` | same |
| `/services` | same |
| `/projects` | same |
| `/contact` | same |
| `/about-us` | **301 → `/about`** (in `public/_redirects`) |
| `/privacy-policy` | 404 — no page yet |
| `/terms-and-conditions` | 404 — no page yet |
| `/accessibility-statement` | 404 — no page yet |

The three 404s are a loose end rather than a blocker. A privacy policy is the
one worth writing rather than redirecting: the contact form collects a name,
email, phone number and message, so the site genuinely needs one.

After DNS moves, submit the sitemap in Google Search Console
(`https://www.4theloveofcolorpainting.com/sitemap.xml`) and use *URL
Inspection* on one city page to confirm Google sees its own canonical rather
than the home page's.

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

Two claims that *were* hard-coded have been removed until credentials back
them (2026-08-05): the "Licensed & insured" badge under the hero, and the
FAQ answer "we're fully insured". The FAQ question is now generated from
`credentials` — fill in `liabilityCoverage` or `licenseNumber` and it comes
back automatically, with the real figures in it. It matters more than usual
here because that answer renders into FAQPage structured data, so an
unverified version was asserting something unconfirmed to Google in
machine-readable form.

**Open question for Edwin:** the three testimonials in `testimonials`
(siteContent.ts) each display a five-star rating. If those quotes are real
customer feedback, they can stay. If they were written as placeholder copy,
they need to go — fabricated reviews are the one thing in this space that
carries a real penalty. Switching on the live Google reviews (§2 above)
replaces them with genuine ones and makes the question moot.

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
   Same rule applies, and it is a higher bar than it looks: such a page has
   to say something true of *that service in that city* that neither parent
   page already says.
4. ~~A cabinet refinishing page.~~ Done — `/services/cabinet-refinishing`,
   along with per-service pages for interior, exterior and commercial work.
   See `src/data/servicePages.ts`.

---

## 8. Photograph a cabinet job

`/services/cabinet-refinishing` is the highest-margin service on the site and
it is the one page with **no photograph**, because every image in
`public/images/` is an exterior or a room. The page deliberately renders
without a hero image rather than borrowing an unrelated interior shot, which
would imply work we cannot evidence.

One refinished kitchen, photographed before and after from the same spot, is
the single most valuable photo the business could take right now. Set
`image` and `imageAlt` on the `cabinet-refinishing` entry in
`src/data/servicePages.ts` once it exists.

---

## Reference

- **Frontend** — this repo. React 18 + TS + Vite, prerendered to static HTML,
  deploys to Netlify. This is the whole product.
- **Leads** — Netlify Forms only, delivered by email. No backend, no monthly
  cost, nothing that can be down when a lead arrives.
- **CRM** — dropped (2026-08-05). The `4theloveofcolorpainting-api` and
  `4theloveofcolorpainting-ios` repos still exist on disk but nothing in this
  site references them, and the admin dashboard has been removed from the
  build. Reviving that path is a deliberate decision, not a config change.

## Build

`npm run build` runs four steps: typecheck, client bundle, server bundle, then
`scripts/prerender.mjs`, which writes one HTML file per route from the table in
`src/routes.ts` plus `sitemap.xml` and `404.html`.

**Adding an indexable page means adding it to `src/routes.ts`.** A route that
is missing from that table still works when clicked, but it is never
prerendered — so it ships the shell's markup, is absent from the sitemap, and
Google sees it as a copy of whatever the shell contains. That is the failure
this build step exists to prevent.
