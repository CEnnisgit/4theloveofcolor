# Local SEO

For any business that serves a geographic area. Read this before building a site whose
customers search "near me".

## The thing to say out loud first

**The website is not the biggest lever.** In the local pack, the Google Business Profile
is. Commonly cited weightings put GBP signals around a third of local ranking, with
on-page around a fifth, reviews and links in the mid-teens each, and behavioral and
citation signals making up the rest.

A perfect site with an empty GBP loses to a mediocre site with 200 reviews. If you build
the site and don't tell the owner this, you have set them up to conclude that SEO doesn't
work.

## Google's three pillars

Google states the local algorithm rests on:

- **Relevance** — how well the business matches the query. Driven by GBP completeness,
  primary and secondary categories, listed services, and the site's own content.
- **Distance** — proximity between the searcher and the business. **You cannot optimize
  this.** Stop trying; it's the reason a competitor two miles closer outranks you for a
  query typed from their street.
- **Prominence** — how well-known and trusted the business is. Reviews, citation
  consistency, links, brand mentions, overall web presence.

Since distance is fixed, everything you *can* do is relevance and prominence.

**Service-area businesses** — trades, mobile services, anyone without a storefront —
depend even more heavily on prominence, because Google has no customer-visited address to
measure proximity from. For these, reviews and real local content do most of the work.

## What lives outside the repo

Hand this list to the owner as a checklist. It is not your job to do it and it is your job
to say it.

1. **Claim and complete the Google Business Profile.** Correct primary category — this is
   one of the highest-leverage single fields in local SEO. Add secondary categories,
   service list, service areas, hours, phone, website URL, and a real description.
2. **Photos.** Real ones, geotagged where possible, added continuously rather than once.
3. **Reviews.** Volume, recency, rating, and *replies*. Ask every satisfied customer,
   every time, with a direct link. This is the highest-return activity available to a
   local business and it costs nothing.
4. **NAP consistency.** Name, Address, Phone identical everywhere — GBP, website, Yelp,
   Facebook, Apple Maps, trade directories. Inconsistency is a real prominence drag.
5. **Local citations** in directories that matter for the trade, not bulk-bought lists.
6. **Local links.** Suppliers, trade bodies, chamber of commerce, local press, sponsored
   teams, contractors they subcontract for. A dozen of these beat a thousand directory
   links.
7. **GBP Posts and Q&A**, kept alive.

## What the site should do

### Prove the service area honestly

- Name the areas in body copy where it's natural, not in a stuffed block. Google's
  keyword-stuffing policy explicitly names "blocks of text that list cities and regions."
- One page per *primary* area, hand-written. Two to five of these, not fifty. See
  `scale-and-duplication.md`.
- Embed a map only where it aids a real visitor.

### NAP in crawlable HTML

Phone as a `tel:` link, address as text (not an image), in the footer on every page, and
identical to the GBP entry character for character.

### Local proof

This is where a local site is won or lost, and it's the part that can't be generated:

- Project photos with real locations and real captions
- Named neighborhoods and developments the business actually works in
- Genuine local constraints — HOA palettes, coastal exposure, building era, permit
  processes, local climate failure modes
- Real reviews rendered as text on the page (not just an embedded widget — widgets are
  often unindexable)

### Structured data

`LocalBusiness` (most specific subtype) with real `PostalAddress`, `areaServed`,
`openingHoursSpecification`, `telephone`, `sameAs` to social profiles. **No self-serving
`aggregateRating`.** See `structured-data.md`.

### Conversion, which is also a ranking signal

Behavioral signals feed prominence. A page that gets clicked and doesn't get bounced is
doing SEO work:

- Phone number tappable and visible without scrolling on mobile
- One obvious primary action per page
- A short form that doesn't ask for a life story
- Fast load — local searches skew mobile and impatient

## The content that actually wins for local trades

Ranked by return, for a small business with limited content budget:

1. **Service pages**, one per service, written by someone who knows the work.
2. **Cost and comparison guides.** "What does exterior painting cost in Sarasota", "cabinet
   refinishing vs replacement", "how often to repaint in Florida". These rank, they attract
   people at the exact moment of intent, they get cited by AI assistants, and they carry
   zero duplication risk because each is a genuinely different question.
3. **Primary city pages**, hand-written, few.
4. **Project write-ups** with real photos, real problems, real solutions.

Note that (2) is where most local sites underinvest and where most of the winnable traffic
is. A hundred templated city pages is the expensive way to lose; ten real guides is the
cheap way to win.

## Measuring it

- **Google Business Profile Insights** — calls, direction requests, website clicks. This
  is the number the owner actually cares about.
- **Search Console** — queries, impressions, position. Filter to branded vs non-branded.
- **Local rank tracking is location-dependent**, so a single "we rank #1" claim is
  meaningless without saying where the search was run from. Be honest about this with
  clients; ranking varies block to block.
