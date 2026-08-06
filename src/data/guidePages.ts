/**
 * Guides at /guides/<slug>.
 *
 * These target the questions people search *before* they are ready to call —
 * cost, comparison, timing. That traffic converts more slowly than "painters
 * near me", but it arrives with no competitor already in the frame, and the
 * cost queries in particular are almost entirely unanswered by painting
 * companies in this market. Most either ignore them or gate a number behind a
 * form, which is why the results are dominated by national lead-generation
 * sites that have never painted anything.
 *
 * HARD RULE — NO INVENTED PRICES.
 *
 * There are no dollar figures anywhere in this file, and none may be added
 * without Edwin approving current numbers. A published price is a quote: it
 * sets an expectation the crew has to honour or explain away on the driveway,
 * and a made-up range would do that damage on every job it touched. What we
 * can do honestly — and what actually helps someone comparing three quotes —
 * is explain what moves the number and how to read an estimate. That is also
 * what the search is really asking.
 *
 * If Edwin later approves real ranges, add them as a `ranges` field with a
 * date and a plain statement of what they cover.
 */

export type GuideSection = {
  heading: string;
  /** Paragraphs of body copy. */
  body: string[];
  /** Optional labelled points rendered as cards under the section. */
  points?: { title: string; text: string }[];
};

export type GuidePage = {
  /** URL segment: /guides/<slug> */
  slug: string;
  /** Short label for cards, breadcrumbs and cross-links. */
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  /** Opening paragraphs. The first renders as the lead. */
  intro: string[];
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  /**
   * Real dates, for Article schema. `updated` changes only when the content
   * genuinely changes — bumping it to look fresh is exactly the behaviour
   * Google's spam guidance calls out, and it fools nobody.
   */
  published: string;
  updated: string;
  image: string | null;
  imageAlt: string;
  closing: string;
};

export const guidePages: GuidePage[] = [
  {
    slug: "house-painting-cost-lakewood-ranch-sarasota",
    name: "What house painting costs here",
    title:
      "What House Painting Costs in Lakewood Ranch & Sarasota, FL | 4 The Love of Color Painting",
    metaDescription:
      "What actually drives the price of an interior or exterior repaint in Lakewood Ranch, Sarasota and Bradenton — and how to compare three painting quotes that look different for good reasons.",
    h1: "What house painting actually costs in Lakewood Ranch & Sarasota.",
    intro: [
      "Nobody can give you an accurate price for painting your house over the internet, and you should be wary of anyone who tries. Two houses on the same street with the same square footage can differ by a factor of two, entirely because of what is happening to the surfaces underneath the old coat.",
      "What we can do is tell you exactly what moves the number, so that when you have three quotes on the table you can see why they differ instead of guessing. In this market the cheapest quote is very often the one that has left out the preparation — and preparation is the part that decides whether you are repainting again in four years or in twelve.",
    ],
    sections: [
      {
        heading: "What actually drives the price",
        body: [
          "Painters price from surface area, condition and access. Floor area barely matters — a single-storey home with tall ceilings and a lot of trim can carry more paintable surface than a larger two-storey with plain walls.",
        ],
        points: [
          {
            title: "Surface area, not floor area",
            text: "Wall and ceiling area is what gets coated. High ceilings, vaulted spaces, deep soffits and heavily trimmed rooms all add surface that never shows up in a square-footage figure.",
          },
          {
            title: "Condition of what's already there",
            text: "The single biggest variable, and the one you cannot see from a photograph. A sound exterior needs washing and coating. A chalked, cracked, previously badly prepared one needs stabilising first, and that is most of the labour.",
          },
          {
            title: "Storeys and access",
            text: "Second-storey work means ladders, staging or lifts, and slower, safer working. Landscaping tight against the wall, pool cages, screened lanais and narrow side returns all cost time.",
          },
          {
            title: "Repairs found during prep",
            text: "Stucco cracking, wood rot at soffit and fascia, failed caulk joints, drywall damage. Honest quotes separate these out or flag them as provisional, because nobody can price rot they have not yet opened up.",
          },
          {
            title: "How far the colour is moving",
            text: "Dark to light is the expensive direction. A deep colour going white can need extra coats regardless of what the product claims, and that is real material and real labour.",
          },
          {
            title: "Number of coats, honestly stated",
            text: "Two coats over sound existing colour is typical. Anything less is a refresh, not a repaint, and it should be described that way on the quote.",
          },
          {
            title: "Trim, doors and detail",
            text: "Trim work is slow, hand-worked and priced per foot of edge rather than per wall. Crown moulding, wainscoting, shutters, and a house full of six-panel doors all move the number more than people expect.",
          },
          {
            title: "Occupied or empty",
            text: "Working around furniture, pets and people is slower than working in an empty house. Not dramatically — but it is real, and it is why a pre-move-in repaint is usually the cheapest time to do it.",
          },
          {
            title: "Product grade",
            text: "Coatings vary widely in price and in how long they hold up under Florida UV and humidity. This is a genuine choice, not an upsell, and the quote should say which product it assumes.",
          },
        ],
      },
      {
        heading: "Why the cheap quote is cheap",
        body: [
          "When three quotes come back and one is dramatically lower, it is almost never because that company found a way to buy paint cheaper. Materials are a modest share of a repaint. Labour is the rest, and labour is preparation.",
          "The steps that get quietly removed to reach a lower number are the invisible ones: washing and letting the surface dry, opening and bridging stucco cracks rather than coating over them, replacing rotten wood instead of painting it, spot-priming stains and repairs, and applying a genuine second coat. None of those are visible on handover day. All of them are visible in year three.",
          "This is the honest reason to be careful with a low quote — not that the company is dishonest, but that you are very likely comparing two different scopes of work and being shown only the totals.",
        ],
      },
      {
        heading: "How to compare three painting quotes properly",
        body: [
          "Put them side by side and check that each one answers the same questions. Where a quote is silent, ask — the answer is usually more informative than the number.",
        ],
        points: [
          {
            title: "What surfaces are included",
            text: "Walls only, or walls plus trim, doors, ceilings, soffits, fascia, garage door, front door? Exclusions are where quotes diverge most.",
          },
          {
            title: "What preparation is specified",
            text: "Washing, scraping, sanding, crack repair, caulking, priming — named individually, not summarised as \"prep as required\".",
          },
          {
            title: "How many coats, of what",
            text: "The product and the number of coats should both be written down. \"Two coats of a quality paint\" is not a specification.",
          },
          {
            title: "How repairs are handled",
            text: "Whether rot and stucco repair are included, excluded, or priced provisionally — and what happens if more is found once work starts.",
          },
          {
            title: "Who moves and protects what",
            text: "Furniture, wall hangings, floor protection, landscaping. Cheap in money, expensive in goodwill when it is assumed rather than agreed.",
          },
          {
            title: "What happens at the end",
            text: "Whether there is a walkthrough before final payment, and whether anything you point out gets fixed before you settle up.",
          },
        ],
      },
      {
        heading: "Things that should make you pause",
        body: [
          "None of these are automatically disqualifying, but each one is worth a direct question before you sign anything.",
        ],
        points: [
          {
            title: "A price with no walkthrough",
            text: "A number quoted from a phone call or a photo is a guess. It will be revised on site, and the revision only ever goes one way.",
          },
          {
            title: "A large deposit up front",
            text: "Some deposit is normal on a larger job. A demand for most of the money before work starts is not.",
          },
          {
            title: "Pressure to decide today",
            text: "A discount that expires this afternoon is a sales tactic, not a price. Painting is not a perishable good.",
          },
          {
            title: "No written scope",
            text: "If what is being done is not written down, there is nothing to hold anyone to — including you, if a disagreement comes up later.",
          },
          {
            title: "Cash-only, no paperwork",
            text: "Worth understanding who exactly is responsible if something is damaged, and what recourse exists if the finish fails.",
          },
        ],
      },
      {
        heading: "When repainting is cheaper than waiting",
        body: [
          "Exterior paint in Florida is doing a protective job, not a decorative one. Once a coating has genuinely failed — chalking heavily, peeling, cracks open to the substrate — water starts reaching the material behind it.",
          "At that point the cost of waiting is no longer the cost of paint. It is stucco repair, wood replacement, and in the worst cases moisture that has travelled somewhere expensive. A repaint scheduled while the coating is merely tired is straightforwardly cheaper than one scheduled after it has failed.",
          "The signals worth checking once a year: chalk that comes off on your hand, hairline cracking on stucco elevations, caulk that has pulled away from window and door perimeters, soft wood at soffit and fascia, and noticeably faded colour on the west and south walls.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why won't you just tell me a price per square foot?",
        answer:
          "Because it would be wrong often enough to be useless. Per-square-foot pricing assumes surfaces are in comparable condition, and in this market they are not — two identical floorplans can differ enormously depending on how the last repaint was prepared. A number quoted before anyone has looked at your walls gets revised on site, and the revision is never downward.",
      },
      {
        question: "Is a written estimate free?",
        answer:
          "Ours is, and there is no obligation attached to it. We walk the property with you, talk through surfaces and colours, and send a written scope and price.",
      },
      {
        question: "Does painting the interior and exterior together cost less?",
        answer:
          "Usually somewhat, because setup, travel and scheduling are shared across one larger job rather than repeated. Whether it is worth doing at once depends on whether both genuinely need it — bundling work you do not need yet is not a saving.",
      },
      {
        question: "What is the cheapest time of year to have painting done?",
        answer:
          "Scheduling matters less here than in markets with a real winter, since exterior work runs most of the year. The bigger cost lever is timing around your own circumstances: an empty house between tenants or before a move-in is faster to paint than an occupied one.",
      },
      {
        question: "Should I buy the paint myself to save money?",
        answer:
          "Generally no. Materials are a smaller share of the total than most people assume, and supplying your own moves responsibility for the product onto you — if a coating fails because it was the wrong one for the surface, that becomes your problem rather than the painter's.",
      },
    ],
    published: "2026-08-06",
    updated: "2026-08-06",
    image: "/images/proj-exterior-stone.jpg",
    imageAlt:
      "Tan single-story Florida home with stone accents and an arched entry, freshly repainted, with a paver driveway",
    closing:
      "The fastest way to turn all of this into an actual number for your house is a walkthrough. We will look at the surfaces, tell you what they need, and put it in writing — including the parts you could reasonably leave until next year.",
  },
];

export const guidePageBySlug = (slug: string) =>
  guidePages.find((page) => page.slug === slug);
