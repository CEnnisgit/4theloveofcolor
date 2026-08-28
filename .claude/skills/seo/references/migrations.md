# Migrations and launches

Replacing an existing site, moving domains, or restructuring URLs. This is where a site
loses years of accumulated ranking in an afternoon.

## The principle

Google's ranking signals attach to **URLs**. A redirect carries them across. A 404 throws
them away. Every indexed URL on the old site is an asset, and every one you fail to map is
an asset destroyed.

## Before you change anything

Inventory what exists. You cannot preserve what you haven't listed.

1. **Old sitemap** — `oldsite.com/sitemap.xml`. Platform sites often expose several
   (`pages-sitemap.xml`, `blog-sitemap.xml`). Get them all.
2. **Search Console** — Pages report and Performance report. Every URL with impressions is
   a URL worth mapping. Export it.
3. **`site:olddomain.com`** — a rough view of what's actually indexed.
4. **Analytics** — top landing pages by organic entry over 12 months.
5. **Backlinks** — anything with external links pointing at it must redirect, no exceptions.

Produce an explicit **old URL → new URL** table. Every row is a decision. Commit it to the
repo as documentation, not just as config.

## Mapping rules

- **Same content, new URL → 301.** Permanent, server-side.
- **Content merged → 301 to the page that absorbed it.**
- **Content genuinely gone with no equivalent → 404 (or 410).** This is honest and correct.
  Do not redirect it to the homepage to avoid a 404.
- **Never bulk-redirect many old URLs to the homepage.** Google treats a mass redirect to
  one page as a soft 404 pattern, and it's itself a doorway signal.
- **Keep slugs where you can.** The cheapest migration is the one that doesn't move URLs.
- **No redirect chains.** Old → new, one hop. Chains bleed signal and slow crawls.

## Domain moves

If the domain itself changes:

- Use Search Console's **Change of Address** tool.
- Keep the old domain registered and redirecting for **at least a year**. Longer is better;
  it costs almost nothing.
- Redirect at the URL level, not the domain level — `old.com/services/painting` →
  `new.com/services/painting`, not everything to `new.com/`.
- Update the GBP website URL, all citations, and social profiles.

## The domain constant

Get this right before anything renders. The most expensive failure in the case study behind
this skill was ~1,019 pages built with canonicals, OG URLs, sitemap entries, and schema IDs
on a domain the business does not own.

**Checklist:**

- [ ] The origin is defined in exactly one place.
- [ ] It matches the domain that will actually serve the site, including `www` vs apex.
- [ ] `grep -rn "https://" src/ | grep -v ORIGIN_CONSTANT` returns nothing surprising.
- [ ] The built `sitemap.xml` and `robots.txt` show the right host.
- [ ] All other host variants (apex, `http://`, preview domains) 301 to the canonical one.
- [ ] No `localhost`, `.netlify.app`, `.vercel.app`, or staging host in the built output.

That last one belongs in the audit script as a hard failure.

## Launch sequence

Order matters — do the reversible things first.

1. **Build and audit.** Zero failures.
2. **Deploy to the production host on a preview URL.** Click through. View source.
3. **Verify the redirect rules fire** — test each old URL against the preview.
4. **Confirm the 404 returns a real 404 status**, not a 200. `curl -I`.
5. **Then** change DNS.
6. **Keep the old site running** until DNS has propagated everywhere.
7. **Search Console:** add and verify the property, submit the sitemap, use Change of
   Address if the domain moved.
8. **Update the GBP website URL** and the major citations.
9. **Watch for two weeks:** Coverage report for crawl errors and unexpected exclusions,
   Performance for query-level drops.

Expect a dip. A migration that's correctly executed usually recovers within weeks; one
that's missing redirects doesn't recover at all.

## Post-launch verification

```bash
curl -sI https://www.example.com/old-url          # expect 301 + correct Location
curl -sI https://www.example.com/definitely-missing # expect 404, not 200
curl -s  https://www.example.com/sitemap.xml | grep -c "<loc>"
curl -s  https://www.example.com/robots.txt
```

Then in Search Console, over the following month:

- **"Discovered – currently not indexed"** — Google found it and chose not to index. Nearly
  always a quality or thinness signal.
- **"Crawled – currently not indexed"** — Google fetched it and declined. Usually
  duplication; check whether it's in a near-duplicate cluster.
- **"Alternate page with proper canonical tag"** — expected for genuine variants, a red
  flag if it's happening to pages you meant to rank.

## Common failures, in order of how often they happen

1. Redirects written but never tested against the real old URLs.
2. An SPA catch-all returning 200 for everything, which silently swallows every redirect
   rule and turns all 404s into soft 404s.
3. The domain constant still pointing at a staging or placeholder host.
4. The sitemap left hand-written and now describing a site that no longer exists.
5. Trailing-slash inconsistency between canonical, sitemap, and internal links, producing
   two URLs per page.
6. GBP and citations never updated, so the highest-authority external links still point at
   the dead site.
