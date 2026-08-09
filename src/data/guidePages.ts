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
   * genuinely changes — bumping it to look fresh is exactly the behavior
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
      "We get asked this all the time, and the honest answer is that nobody can price your house properly over the internet. Two houses on the same street, same square footage, can come in miles apart — it all depends on what shape the walls are in underneath.",
      "What we can do is walk you through what moves the number. That way, when you've got a few quotes side by side, you can see why they're different instead of guessing. It's the same explanation we'd give you standing in your driveway.",
    ],
    sections: [
      {
        heading: "What actually drives the price",
        body: [
          "Painters price from surface area, condition and access. Floor area barely matters — a single-story home with tall ceilings and a lot of trim can carry more paintable surface than a larger two-story with plain walls.",
        ],
        points: [
          {
            title: "Surface area, not floor area",
            text: "Wall and ceiling area is what actually gets painted. High ceilings, vaulted rooms and lots of trim all add surface that never shows up in a square-footage number.",
          },
          {
            title: "Condition of what's already there",
            text: "The single biggest variable, and the one you cannot see from a photograph. A sound exterior needs washing and coating. A chalked, cracked, previously badly prepared one needs stabilizing first, and that is most of the labor.",
          },
          {
            title: "Stories and access",
            text: "Second-story work means ladders, staging or lifts, and slower, safer working. Landscaping tight against the wall, pool cages, screened lanais and narrow side returns all cost time.",
          },
          {
            title: "Repairs found during prep",
            text: "Cracked stucco, caulk joints that have given up, drywall damage. A straight quote either separates these out or flags them as an estimate, because nobody can price a repair they haven't opened up yet.",
          },
          {
            title: "How far the color is moving",
            text: "Dark to light is the expensive direction. A deep color going white can need extra coats regardless of what the product claims, and that is real material and real labor.",
          },
          {
            title: "Number of coats, honestly stated",
            text: "Two coats over sound existing color is typical. Anything less is a refresh, not a repaint, and it should be described that way on the quote.",
          },
          {
            title: "Trim, doors and detail",
            text: "Trim work is slow, hand-worked and priced per foot of edge rather than per wall. Crown molding, wainscoting, shutters, and a house full of six-panel doors all move the number more than people expect.",
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
        heading: "What makes one quote different from another",
        body: [
          "If three quotes come back and one is a lot lower, it usually isn't because that company buys paint cheaper. Paint is a smaller part of the bill than most people expect. Most of it is time, and most of the time is prep.",
          "So when the numbers are far apart, it's normally because the quotes cover different amounts of work — washing the walls and letting them dry, filling and sealing cracks, priming patches and stains, and putting on a genuine second coat. Those are the parts you can't see once the job is done.",
          "That's not us saying the cheaper painter is cutting corners. It's that you're probably looking at two different jobs with only the totals shown, and it's worth knowing which one you're buying.",
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
            text: "Walls only, or walls plus trim, doors, ceilings, soffits, garage door and front door? What's left out is where quotes differ most.",
          },
          {
            title: "What preparation is specified",
            text: "Washing, scraping, sanding, crack repair, caulking, priming — named individually, not summarized as \"prep as required\".",
          },
          {
            title: "How many coats, of what",
            text: "The product and the number of coats should both be written down. \"Two coats of a quality paint\" is not a specification.",
          },
          {
            title: "How repairs are handled",
            text: "Whether stucco and surface repairs are included, left out, or estimated — and what happens if more turns up once work starts.",
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
        heading: "Questions worth asking",
        body: [
          "None of these are trick questions, and any painter worth hiring will be happy to answer them. Ask us the same ones.",
        ],
        points: [
          {
            title: "Have you actually seen the house?",
            text: "A price given over the phone or from a photo is a guess, and guesses get revised once someone is standing in front of the wall. Ask for a walkthrough before a number.",
          },
          {
            title: "What's the deposit, and what does it cover?",
            text: "A deposit is normal — paint and materials get bought before the first day, and on a bigger job that is real money up front. Ours scales with the size of the job. The fair question is what it covers and what the rest of the schedule looks like, not whether there is one at all.",
          },
          {
            title: "Is the price good for more than today?",
            text: "A discount that disappears this afternoon is a sales tactic. Take the time you need — a repaint is not a perishable good.",
          },
          {
            title: "Can I see it in writing?",
            text: "A written scope protects both of us. It is what we point at if there is ever a disagreement about what was included, and it means nobody is relying on remembering a driveway conversation.",
          },
          {
            title: "Who's responsible if something gets damaged?",
            text: "Worth knowing before anyone starts, whoever you hire. Ask what happens if a fixture, a floor, or a plant gets caught.",
          },
        ],
      },
      {
        heading: "When repainting is cheaper than waiting",
        body: [
          "Exterior paint in Florida is doing a protective job, not a decorative one. Once a coating has genuinely failed — chalking heavily, peeling, cracks open to the substrate — water starts reaching the material behind it.",
          "At that point what you're paying for isn't paint any more. It's stucco repair, and in the worst cases water that has got somewhere expensive. Repainting while the finish is just looking tired costs less than repainting after it has actually failed.",
          "Worth a look once a year: chalk that comes off on your hand, cracks opening up in the stucco, caulk pulling away around the windows and doors, and color that's noticeably faded on the west and south walls.",
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
          "Ours is, and there is no obligation attached to it. We walk the property with you, talk through surfaces and colors, and send a written scope and price.",
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
