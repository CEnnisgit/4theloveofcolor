/**
 * Per-service landing pages at /services/<slug>.
 *
 * The `/services` page covers all four services in a paragraph each, which is
 * the right shape for a visitor browsing but the wrong shape for search: one
 * page cannot be the best answer for "cabinet refinishing Lakewood Ranch" and
 * "exterior house painters Sarasota" at the same time. One page per service,
 * each answering the questions that service actually raises.
 *
 * Same rule as cityPages.ts: substance or nothing. A service page that just
 * restates the summary from /services is a page competing with its own hub for
 * the same query, which helps neither.
 *
 * NOTHING HERE MAY ASSERT A FACT ABOUT THE BUSINESS THAT ISN'T VERIFIED.
 * The process detail below describes how this kind of work is properly done —
 * scope, sequence, what goes wrong when steps are skipped. Warranty lengths,

 * paint brands, prices, turnaround promises and crew sizes are business
 * claims: they live in `credentials` in siteContent.ts and render only once
 * Edwin has confirmed them.
 */

export type ServiceFaq = { question: string; answer: string };

export type ServicePage = {
  /** URL segment: /services/<slug> */
  slug: string;
  /** Whether this service applies to residential, commercial, or both. */
  persona?: "residential" | "commercial" | "both";
  /** Structural category for grouped layouts. */
  category?: "interior" | "exterior" | "prep" | "core";
  /** Short label for nav, cards and breadcrumbs. */
  name: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  title: string;
  metaDescription: string;
  h1: string;
  /** Opening paragraphs. First one renders as the lead. */
  intro: string[];
  /** What the job actually covers. */
  includes: string[];
  /** The work, in order. This is where the value is demonstrated. */
  process: { title: string; text: string }[];
  /** Problems customers arrive with, and what they mean. */
  problems: { title: string; text: string }[];
  /** Honest scheduling expectations, ranges not promises. */
  timeline: string;
  /** Living in the house while the work happens. */
  occupied: string;
  /** Service-specific questions. Feeds FAQPage schema on the page. */
  faqs: ServiceFaq[];
  /** Hero image path, or null where we have no honest photo of this work yet. */
  image: string | null;
  imageAlt: string;
  closing: string;
  /**
   * Slugs from guidePages.ts to link at the foot of this page.
   *
   * Contextual links, not a related-posts widget: a link from the exterior
   * page to the stucco-peeling guide is useful to the reader and tells Google
   * the two pages are about the same thing. Guides are out of the main menu,
   * so these links plus the footer are most of what keeps them discoverable.
   */
  relatedGuides: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "cabinet-refinishing",
    persona: "residential",
    category: "interior",
    name: "Cabinet refinishing",
    serviceType: "Kitchen cabinet refinishing",
    title: "Cabinet Refinishing, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription:
      "Cabinet refinishing for Lakewood Ranch and Sarasota kitchens — properly cleaned, primed and sprayed to a finish that survives daily use.",
    h1: "Kitchen cabinet refinishing in Lakewood Ranch & Sarasota.",
    intro: [
      "Refinishing the cabinets you already have costs a fraction of replacing them, and in most kitchens around here the boxes are in much better shape than the finish makes them look. If they're solid and the layout works for you, what you don't like is usually the color and the wear — and that's something we can fix.",
      "It's also the job where doing it right matters most. Cabinets get touched, wiped and knocked more than anything else in the house, so a finish that wasn't prepped properly starts chipping at the door edges within months. There's no patching that — it has to come back off and start over.",
    ],
    includes: [
      "Doors, drawer fronts, face frames and cabinet boxes",
      "Kitchen islands, pantry and built-in cabinetry",
      "Bathroom vanities and laundry-room cabinetry",
      "Bookcases, built-in shelving and other feature joinery",
      "Hardware removal and refit, or fitting new hardware you supply",
    ],
    process: [
      {
        title: "Everything comes off and gets numbered",
        text: "We take off the doors, drawer fronts and hardware and number every piece so it goes back exactly where it came from. Doors that get swapped around never hang quite right afterwards.",
      },
      {
        title: "Cleaning off the grease",
        text: "Every kitchen has a film of cooking grease on the cabinets, worst around the stove — you usually can't see it, but paint won't stick to it. We degrease everything, then sand off the shine so the primer has something to grab.",
      },
      {
        title: "The right primer for your cabinets",
        text: "Thermofoil, laminate, oak and already-painted wood each need a different primer. This is the one decision that makes or breaks how long the finish lasts, and it's the step that gets skipped most often because you can't see it once the job's done.",
      },
      {
        title: "Filling and sanding",
        text: "Dings and old handle holes get filled. If you have oak, the grain will show through the paint unless we fill and sand it flat first — some folks like that texture and some don't expect it, so it's worth deciding together up front.",
      },
      {
        title: "Sprayed, not brushed",
        text: "We spray the doors and drawer fronts rather than brushing them in place, and sand lightly between coats. You can spot a brushed cabinet door from across the room — sprayed, it looks new.",
      },
      {
        title: "Letting it harden before we hang them",
        text: "Cabinet finishes can be handled fairly quickly but keep hardening for a while after that. We'll hang the doors once they're safe to handle and tell you when you can go back to normal — stacking dishes against a finish that hasn't hardened is how the first chips happen.",
      },
    ],
    problems: [
      {
        title: "Peeling at the door edges and around handles",
        text: "Almost always means the last coat went on over grease or a shiny factory finish without proper cleaning and priming. Touching it up won't hold — those spots need taking back and building up again.",
      },
      {
        title: "Yellowed or ambered white cabinets",
        text: "Some older white finishes turn yellow over the years, worst where the daylight hits. It's the old finish itself, not dirt, so cleaning won't touch it. Refinishing will.",
      },
      {
        title: "Sticky or tacky surfaces long after painting",
        text: "Usually wall paint that got used on cabinets. Wall paint is made to stay a little soft so it can flex — cabinets need something that actually hardens.",
      },
      {
        title: "Doors that stick or no longer close flush",
        text: "Usually paint built up around the hinges from a previous job done without taking the doors off. Easy to put right while everything is off anyway.",
      },
    ],
    timeline:
      "A typical kitchen runs several days to a couple of weeks depending on door count, substrate and how much filling is needed — the drying and curing between coats sets the pace more than the painting does. You get a realistic range in the written estimate, based on your kitchen rather than an average.",
    occupied:
      "The kitchen stays usable for most of the job. Doors and drawer fronts leave for finishing, so you have open shelving and working drawers in the meantime; boxes and face frames are done in place with the surrounding area masked and protected. The disruptive stretch is short, and we will tell you which days it falls on before we start.",
    faqs: [
      {
        question: "How much does it cost to refinish kitchen cabinets?",
        answer:
          "We price cabinet refinishing based on the total number of doors and drawer fronts, rather than square footage. The final cost depends on whether the doors are standard flat panels or intricate raised panels that require more detailed hand-sanding.",
      },
      {
        question:
          "How long does the cabinet refinishing process take, and can we use our kitchen?",
        answer:
          "The timeline depends on the size of your kitchen and the number of doors. Because we remove the doors and drawer fronts to spray them in a dedicated area, your kitchen remains largely usable during the process, minimizing disruption to your daily routine.",
      },
      {
        question: "Will the new finish chip or peel easily?",
        answer:
          "No. We use a high-adhesion bonding primer followed by a 2K (two-part) polyurethane coating that chemically hardens. This creates a factory-like, hyper-durable finish that resists scratching, moisture, and daily kitchen wear far better than standard trim paint.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "If you are weighing refinishing against replacement, the walkthrough is the fastest way to settle it. We will look at the boxes, the doors and the current finish and tell you plainly which one your kitchen justifies — including when the answer is replacement.",
    relatedGuides: [
      "refinishing-cabinets-vs-replacing",
      "house-painting-cost-lakewood-ranch-sarasota",
    ],
  },
  {
    slug: "interior-painting",
    persona: "residential",
    category: "interior",
    name: "Interior painting",
    serviceType: "Interior residential painting",
    title: "Interior House Painters, Lakewood Ranch | 4 The Love of Color",
    metaDescription:
      "Interior painters for Lakewood Ranch and Sarasota homes — walls, ceilings, trim and doors, with low-odor paint and careful protection.",
    h1: "Interior house painting in Lakewood Ranch & Sarasota.",
    intro: [
      "Interior painting gets looked at up close, in daylight, by the people who live there. The line where the wall meets the ceiling, the edge along the baseboard, whether a long wall looks even — that's what you notice a week later, and it comes from the prep and the hand doing it more than from the paint.",
      "There's one job we do more than any other around here: the first repaint of a newer home. Builders spray one thin coat of flat paint that marks easily and can't be wiped clean. Swapping that for a proper washable finish is the biggest improvement most newer houses can get.",
    ],
    includes: [
      "Walls, ceilings, trim, baseboards, doors and door frames",
      "Whole-home repaints and single rooms",
      "Accent walls and color changes",
      "Crown molding, wainscoting and feature joinery",
      "Condo and apartment interiors, including HOA-scheduled buildings",
    ],
    process: [
      {
        title: "Cover everything first",
        text: "Furniture into the middle of the room and covered, floors protected wall to wall, fixtures and hardware masked off. Everything after this makes dust, so it gets done first rather than worked around.",
      },
      {
        title: "Fix what fresh paint would show up",
        text: "Nail pops, screw holes, little cracks and knocked corners get filled and sanded flat. New paint doesn't hide a flaw, it shows it off — something you'd stopped noticing on a tired wall jumps out on a fresh one.",
      },
      {
        title: "Caulk the gaps that have opened up",
        text: "Trim, baseboards and crown pull away from the wall a little as a house settles. Those gaps are what make a room look unfinished, and filling them is the difference between painted and properly done.",
      },
      {
        title: "Prime the patches and any stains",
        text: "Water marks and every spot of filler get primed before color goes on. Skip it and they show through as dull patches, and no amount of extra coats will cover them.",
      },
      {
        title: "Cut in and roll",
        text: "Edges cut in by hand, walls rolled so the texture stays even, and as many coats as it actually takes. Going from a dark color to a light one usually needs more than two, whatever the can says.",
      },
      {
        title: "Put the room back together",
        text: "Hardware back on, furniture back where it was, floors clear and everything tidied up — at the end of every day, not just the last one.",
      },
    ],
    problems: [
      {
        title: "Builder-grade flat that will not wash",
        text: "Standard on newer homes here. Scuffs and handprints won't wipe off, and rubbing at them leaves a shiny patch instead. The fix is a washable finish, not more of the same.",
      },
      {
        title: "Recurring bathroom and laundry marks",
        text: "Spotting that keeps coming back in a bathroom or laundry is usually as much about airflow as paint. The right finish helps, but if the room isn't clearing the moisture it'll come back eventually.",
      },
      {
        title: "Ceiling stains that come back",
        text: "A stain that comes back through fresh paint either still has a leak behind it or was never sealed with a stain-blocking primer. Painting it again without sorting that out is paying twice.",
      },
      {
        title: "Patches that flash in daylight",
        text: "Patches that got filled but never primed soak up paint differently from the wall around them, so they show as dull spots when the light comes across. That's a prep problem, not the paint.",
      },
    ],
    timeline:
      "Single rooms are usually a day or two. Whole-home interiors typically run one to two weeks depending on square footage, ceiling height, how much trim there is, and the amount of repair work. Color changes across a wide gap — dark to white especially — add coats and therefore days.",
    occupied:
      "Most of our interior work happens in homes people are living in. We work room by room where that suits you, keep low-VOC and low-odor products as the default so rooms stay usable, and protect and restore each space rather than treating the whole house as a site. Pets and working-from-home schedules are worth mentioning at the walkthrough so the sequence can be planned around them.",
    faqs: [
      {
        question: "How much does it cost to paint the interior of a house?",
        answer:
          "Interior pricing is calculated based on floor square footage, the height of the ceilings, and the amount of trim or doors included. We provide a line-itemized estimate so you see exactly what you are paying for, from baseboards to vaulted ceilings.",
      },
      {
        question: "Do I need to move all my furniture before you arrive?",
        answer:
          "We ask that you clear small items, breakables, and electronics. Our crew will handle moving heavy furniture to the center of the room and covering it completely with fresh plastic before any prep work begins.",
      },
      {
        question: "What kind of paint do you use for high-traffic areas?",
        answer:
          "For living rooms and hallways, we use premium scuff-resistant finishes that can be easily wiped clean without losing their sheen. For bathrooms and kitchens, we specify mildew-resistant coatings designed to handle high humidity.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Whether it is one room or the whole house, the walkthrough is free and we will be straight with you about what the surfaces need — including where you can spend less.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"],
  },
  {
    slug: "exterior-painting",
    persona: "residential",
    category: "exterior",
    name: "Exterior painting",
    serviceType: "Exterior residential painting",
    title: "Exterior House Painters, Lakewood Ranch | 4 The Love of Color",
    metaDescription:
      "Exterior painters for Lakewood Ranch, Sarasota and Bradenton. Pressure washing, stucco crack repair and coatings built for Florida sun.",
    h1: "Exterior house painting in Lakewood Ranch & Sarasota.",
    intro: [
      "Out here an exterior repaint is protection first and looks second. Sun, summer rain, humidity and salt air are working on your walls year round, and the paint is most of what stands between them and the block underneath.",
      "That means the prep matters more than anything. Washing, filling cracks, sealing and priming are what decide whether a finish lasts — and they're the parts you can't see once the job is done.",
    ],
    includes: [
      "Stucco, block and siding",
      "Trim, soffits, garage doors and front doors",
      "Gables, arches and decorative detail",
      "Lanais, pool cages and railings",
      "HOA communities and multi-property exteriors",
    ],
    process: [
      {
        title: "Wash it down and let it dry",
        text: "Dirt, mildew and chalky old paint all stop new paint sticking. We wash the house and give it time to dry — putting paint on a damp wall is how you end up with blisters.",
      },
      {
        title: "Fill the cracks",
        text: "Little cracks in stucco are normal down here, since the block moves with the heat. We fill and seal them before any color goes on so they don't come back through your new paint.",
      },
      {
        title: "Seal around the windows and doors",
        text: "Old caulk pulls away over time, and that's where water gets in. We cut out what's failed and reseal it. It's as much about keeping the house dry as it is about how it looks.",
      },
      {
        title: "Prime where it's needed",
        text: "Bare stucco, patched spots and any stains get primed first. Not the whole house out of habit — just where the wall actually needs it.",
      },
      {
        title: "Paint, with the sun in mind",
        text: "West and south walls take the worst of the afternoon sun and fade first, so we use coatings rated for it. That's especially true with deeper colors, where one wall going light stands out.",
      },
    ],
    problems: [
      {
        title: "Paint peeling or blistering off stucco",
        text: "Usually moisture behind the paint, or a coat that went on over a dirty wall. Repainting without sorting out the cause just buys you a couple of years.",
      },
      {
        title: "Cracks showing up again",
        text: "The crack got painted over instead of filled. Stucco moves, so a crack that wasn't properly sealed opens right back up along the same line.",
      },
      {
        title: "Chalk that comes off on your hand",
        text: "The old paint has broken down in the sun. Nothing new will stick to it until it's washed off properly, and it's the most common reason a repaint fails early around here.",
      },
      {
        title: "Rust stains running down the wall",
        text: "More common closer to the water, where salt gets at screws and railings. It needs treating and priming, or it bleeds straight back through the new paint.",
      },
    ],
    timeline:
      "Most houses run a few days to a couple of weeks, depending on size, how many stories, and what shape the walls are in. Weather sets the real pace — we'd rather lose an afternoon to a storm than put paint on a wet wall.",
    occupied:
      "Exterior work hardly affects you at all. We need to get around the house, the driveway clear where we're working, and the sprinklers off on whichever side we're on. Keep the windows shut on that side for the day and otherwise carry on as normal.",
    faqs: [
      {
        question: "How do you calculate the cost to paint a house exterior?",
        answer:
          "Exterior pricing depends on the linear footage of the walls, the amount of stucco repair needed, and whether we are painting the soffits and fascia. The bulk of the investment goes into the prep work—trenching, pressure washing, and sealing—before a drop of paint is applied.",
      },
      {
        question: "How long does it take to paint a house exterior?",
        answer:
          "The timeline depends on the size of the home and the extent of stucco repair required. Weather is the biggest variable; we closely monitor the forecast and will pause work rather than risk applying coatings to a damp wall.",
      },
      {
        question:
          "Do you assist with getting exterior paint colors approved by our HOA?",
        answer:
          "Yes. Most master-planned communities require board approval before work begins. We can walk you through the approved palettes and provide the exact color codes needed for your HOA submission.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Exterior quotes are hard to compare because the preparation is where they differ and it is the part nobody itemizes. Ask us what we would do to your walls before any color goes on — the answer is the quote.",
    relatedGuides: [
      "why-paint-peels-off-stucco",
      "how-often-to-repaint-a-florida-house",
      "house-painting-cost-lakewood-ranch-sarasota",
    ],
  },
  {
    slug: "drywall-repair",
    persona: "both",
    category: "interior",
    name: "Drywall repair & patching",
    serviceType: "Drywall Repair",
    title: "Drywall Repair & Patching, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription:
      "Professional drywall repair, patching, water damage remediation, and texture matching in Lakewood Ranch and Sarasota, FL.",
    h1: "Drywall repair & patching in Lakewood Ranch & Sarasota.",
    intro: [
      "Fresh paint will only ever look as smooth as the drywall beneath it. Dents, nail pops, door handle holes, and settled cracks interrupt the finish and catch the light.",
      "We patch, feather, and match wall textures before priming so repaired areas blend seamlessly into the surrounding wall.",
    ],
    includes: [
      "Nail pop and screw hole patching",
      "Door handle wall damage repair",
      "Stress crack tape and joint compound repair",
      "Water damage sheetrock replacement",
      "Orange peel and knock-down texture matching",
    ],
    process: [
      {
        title: "Damage assessment and cut back",
        text: "Loose or water-damaged drywall is cut out clean to solid studs or sound drywall backing.",
      },
      {
        title: "Backing and joint taping",
        text: "New drywall patches are secured with backing wood, mesh taped, and coated with joint compound.",
      },
      {
        title: "Feathering and texture matching",
        text: "Multiple thin coats are feathered out and matched to surrounding wall texture (knockdown, orange peel, or smooth).",
      },
      {
        title: "Stain-blocking primer",
        text: "Patches receive a dedicated stain-blocking primer so joint compound doesn't flash or bleed through final paint coats.",
      },
    ],
    problems: [
      {
        title: "Cracks opening up along seams",
        text: "Usually settled house movement. Joint tape must be replaced and mudded properly rather than just filled with spackle.",
      },
      {
        title: "Water stains bleeding back",
        text: "Water spots must be completely sealed with shellac or oil-based stain blocker after fixing the moisture source.",
      },
    ],
    timeline:
      "Small patches take a single visit; multi-room drywall repair runs 1 to 2 days prior to painting.",
    occupied:
      "Dust containment measures and vacuum-assisted sanding are used to keep your home clean.",
    faqs: [
      {
        question: "Can you match knockdown or orange peel textures?",
        answer:
          "Yes, we spray and trowel custom textures to match existing Florida wall finishes.",
      },
      {
        question: "Do you repair water-damaged drywall?",
        answer:
          "We replace soft or swollen drywall once the plumbing or roof leak has been resolved.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "We fix the underlying wall flaws before painting so your room looks brand new.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"],
  },
  {
    slug: "stucco-repair",
    persona: "residential",
    category: "exterior",
    name: "Stucco repair & sealing",
    serviceType: "Stucco Repair",
    title: "Stucco Repair & Sealing, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription:
      "Expert stucco crack repair, patching, and elastomeric sealing for Lakewood Ranch, Sarasota, and Bradenton homes.",
    h1: "Stucco repair & sealing in Lakewood Ranch & Sarasota.",
    intro: [
      "Florida block-and-stucco homes naturally expand and contract in high heat, creating hairline cracks. Left unsealed, driving summer rain enters these cracks and causes paint to blister and peel.",
      "Our stucco repair process bridges hairline cracks with flexible masonry sealants and matches surrounding stucco texture before applying weather-rated exterior paint.",
    ],
    includes: [
      "Hairline stucco crack elastomeric sealing",
      "Spalling and chunked stucco patch repair",
      "Window and door perimeter caulking renewal",
      "Efflorescence cleaning and masonry sealing",
      "Custom stucco texture matching",
    ],
    process: [
      {
        title: "Pressure cleaning and loose stucco removal",
        text: "We wash away chalk, dirt, and loose stucco down to sound masonry.",
      },
      {
        title: "V-grooving and crack sealing",
        text: "Cracks are opened slightly and filled with high-grade elastomeric sealant designed for Florida sun.",
      },
      {
        title: "Texture patch matching",
        text: "Masonry patch mix is applied to match dash, knockdown, or smooth stucco finishes.",
      },
      {
        title: "Alkali-resistant priming",
        text: "Fresh masonry patches receive an alkali-resistant sealer to neutralize PH levels before painting.",
      },
    ],
    problems: [
      {
        title: "Stucco bubbling or flaking off",
        text: "Moisture trapped behind non-breathable paint. The area must be opened, dried, sealed, and repainted with breathable masonry coatings.",
      },
      {
        title: "White chalky powder on walls (Efflorescence)",
        text: "Water pulling salts out of the concrete block. Requires acid neutralization and sealing.",
      },
    ],
    timeline:
      "Stucco prep and curing adds 1 to 2 days to a standard exterior paint schedule.",
    occupied:
      "All work takes place outside; window shut notices are provided for pressure washing days.",
    faqs: [
      {
        question: "Why did the stucco crack on my house?",
        answer:
          "Stucco cracks are incredibly common due to thermal expansion and normal house settling. If water gets behind the stucco, the wooden lath swells, causing further cracking. We identify the root cause before patching.",
      },
      {
        question:
          "How much time does stucco repair add to an exterior paint job?",
        answer:
          "Stucco prep and curing adds extra time to a standard exterior paint schedule. We must ensure the elastomeric sealants and masonry patches are completely dry before any paint is applied.",
      },
      {
        question: "Do you just paint over the stucco cracks to hide them?",
        answer:
          "Never. Paint is too thin to bridge a structural crack. We v-groove the crack to open it up, apply an elastomeric patching compound that flexes with the house, and then apply a high-build masonry primer before top-coating.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Protect your stucco investment with proper crack repair before water penetrates your home.",
    relatedGuides: [
      "why-paint-peels-off-stucco",
      "how-often-to-repaint-a-florida-house",
    ],
  },
  {
    slug: "color-consultation",
    persona: "residential",
    category: "prep",
    name: "Color consultation",
    serviceType: "Color Consultation",
    title:
      "Professional Color Consultation, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription:
      "In-home color consultation for interior and exterior painting in Lakewood Ranch and Sarasota. HOA palette assistance and sample testing.",
    h1: "Professional color consultation in Lakewood Ranch & Sarasota.",
    intro: [
      "Choosing the right paint color can feel overwhelming. Colors look completely different on a tiny swatch in store lighting than they do across a wide stucco wall under direct Florida sunlight.",
      "We help you navigate undertones, light exposure, room flow, and HOA community palette restrictions to find colors you will love for years.",
    ],
    includes: [
      "In-home or on-site lighting and flow assessment",
      "Large-format color swatch testing on real surfaces",
      "HOA approved community color book matching",
      "Interior room-to-room color coordination",
      "Sheen selection guidance for high-use areas",
    ],
    process: [
      {
        title: "Lighting and architecture walk",
        text: "We review room orientation, natural light angles, flooring, and existing fixed architectural elements.",
      },
      {
        title: "Sample swatch placement",
        text: "We apply real paint test samples to walls so you can view them at morning, noon, and evening light.",
      },
      {
        title: "HOA submission documentation",
        text: "For exterior projects, we prepare exact color code listings required for HOA board architectural review.",
      },
      {
        title: "Final selection and specification",
        text: "Once the perfect colors and sheens are chosen, we document the exact formulas for our painters to ensure zero mix-ups on day one.",
      },
    ],
    problems: [
      {
        title: "Paint looks purple or green on the wall",
        text: "Gray and greige paints have hidden undertones that reveal themselves under Florida sunlight. Proper testing prevents surprises.",
      },
    ],
    timeline: "Color consultations run 60 to 90 minutes on site.",
    occupied: "Scheduled at your convenience in your home.",
    faqs: [
      {
        question: "How much does a color consultation cost?",
        answer:
          "If you have already contracted us for a full exterior or large interior paint job, our professional color consultation is included in the project. For standalone consultations, we charge a flat fee based on the scope of the design.",
      },
      {
        question: "Do you paint sample swatches on the wall for us to see?",
        answer:
          "Yes. Small paper chips are deceiving. We paint large, physical drawdowns directly on the exterior walls so you can see exactly how the color changes throughout the day in direct sunlight versus shade.",
      },
      {
        question: "Will the colors you recommend comply with our HOA rules?",
        answer:
          "Yes. We regularly work within master-planned communities and will cross-reference your choices with the community's approved palette book to ensure your selection is fully compliant before you submit it for board approval.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Take the guesswork out of color selection with expert in-home guidance.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"],
  },
  {
    slug: "pressure-washing",
    persona: "residential",
    category: "exterior",
    name: "Pressure washing & soft wash",
    serviceType: "Pressure Washing",
    title:
      "Pressure Washing & Soft Wash, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription:
      "Professional exterior pressure washing, soft wash cleaning, driveway cleaning, and prep washing in Lakewood Ranch and Sarasota.",
    h1: "Pressure washing & soft wash in Lakewood Ranch & Sarasota.",
    intro: [
      "Florida humidity creates prime conditions for green algae, black mildew, and salt accumulation on home exteriors, lanai decks, and driveways.",
      "We use soft-wash low-pressure techniques with eco-friendly cleaning solutions to safely remove organic growth without damaging delicate stucco or paint.",
    ],
    includes: [
      "Exterior stucco and siding soft wash",
      "Driveway, sidewalk, and paver pressure cleaning",
      "Lanai cage, pool deck, and screen enclosure washing",
      "Pre-paint deep surface decontamination",
    ],
    process: [
      {
        title: "Plant and property protection",
        text: "Landscaping and delicate plants are pre-rinsed and protected before cleaning solutions are applied.",
      },
      {
        title: "Eco-friendly detergent application",
        text: "Mildew-killing solutions break down organic growth without aggressive high pressure.",
      },
      {
        title: "Low-pressure gentle rinse",
        text: "Surfaces are rinsed clean, leaving stucco, stone, and trim sanitized and bright.",
      },
      {
        title: "Post-wash inspection",
        text: "We walk the property to ensure all stubborn stains are gone and surfaces are perfectly prepped for paint or sealing.",
      },
    ],
    problems: [
      {
        title: "Black streaks on stucco",
        text: "High pressure alone damages surfaces; soft wash chemical treatment kills the spores at the root.",
      },
    ],
    timeline: "Most residential exterior wash jobs take half a day.",
    occupied:
      "All work is exterior. Windows must remain closed during cleaning.",
    faqs: [
      {
        question:
          "Why should I hire a professional pressure washer instead of doing it myself?",
        answer:
          "Professional soft washing uses specialized eco-friendly chemicals to kill mold and algae at the root, rather than just blasting the surface layer away. High-pressure consumer machines frequently cause expensive damage by blasting holes in stucco, which is a costly mistake for homes.",
      },
      {
        question:
          "Will the pressure washing chemicals kill my plants or grass?",
        answer:
          "No. We thoroughly pre-soak all surrounding landscaping with fresh water before applying any cleaning solutions, and we rinse the plants again afterward. We also cover delicate ornamentals with tarps to ensure they are protected from overspray.",
      },
      {
        question: "How often should I have my house exterior washed?",
        answer:
          "Due to high humidity and intense sun, we recommend a low-pressure soft wash every 12 to 18 months. This prevents algae and salt buildup from prematurely breaking down your exterior paint.",
      },
    ],
    image: null,
    imageAlt: "",
    closing: "Keep your home's exterior clean, bright, and mildew-free.",
    relatedGuides: ["how-often-to-repaint-a-florida-house"],
  },
  {
    slug: "popcorn-ceiling-removal",
    persona: "residential",
    category: "interior",
    name: "Popcorn ceiling removal",
    serviceType: "Ceiling Refinishing",
    title:
      "Popcorn Ceiling Removal in Lakewood Ranch & Sarasota | 4 The Love of Color",
    metaDescription:
      "Professional popcorn ceiling removal, re-texturing, and painting. Dust-controlled process to modernize your Florida home's interior.",
    h1: "Popcorn ceiling removal in Lakewood Ranch & Sarasota.",
    intro: [
      "Nothing dates a home's interior quite like an acoustic popcorn ceiling. Beyond the dated aesthetic, they catch dust, cast shadows that make rooms feel shorter, and are impossible to clean or patch properly.",
      "Removing it is the single most transformative upgrade you can make to an older Florida home. We scrape the texture clean, repair the drywall underneath, apply a modern knockdown or smooth finish, and paint it bright white to open up the room.",
    ],
    includes: [
      "Acoustic texture scraping and removal",
      "Ceiling drywall joint taping and skim coating",
      "Modern knockdown, orange peel, or smooth finish application",
      "Stain-blocking primer application",
      "Bright white flat ceiling paint",
    ],
    process: [
      {
        title: "Extensive containment and masking",
        text: "Floors and walls are completely draped in plastic. We create a sealed environment because the removal process creates significant mess.",
      },
      {
        title: "Wetting and scraping",
        text: "The texture is misted with water to soften the bond, then carefully scraped away by hand to expose the bare drywall.",
      },
      {
        title: "Skim coating and repair",
        text: "The underlying drywall joints are almost never finished properly under popcorn. We tape, mud, and skim the joints flat.",
      },
      {
        title: "Re-texturing and painting",
        text: "We apply a modern texture (or full smooth skim coat), prime it to seal the mud, and finish with a dead-flat ceiling white.",
      },
    ],
    problems: [
      {
        title: "Testing for asbestos in older homes",
        text: "Homes built before 1978 may contain asbestos in the acoustic texture. We require testing on older properties before any scraping begins.",
      },
    ],
    timeline:
      "A whole-home removal, re-texture, and paint usually takes 4 to 6 days.",
    occupied:
      "Because of the required containment and dust, it is highly recommended the home is vacant or you have alternative accommodations during the messy scraping phase.",
    faqs: [
      {
        question:
          "Is it cheaper to remove popcorn ceilings or just paint over them?",
        answer:
          "Painting over popcorn ceilings is cheaper in the short term, but we strongly advise against it for Florida homes due to humidity. Paint makes the acoustic texture nearly impossible to scrape off later without severely damaging the drywall underneath, and it does not fix the dated look.",
      },
      {
        question:
          "How long does popcorn ceiling removal take, and is it messy?",
        answer:
          "Removing acoustic texture is an inherently messy process, but we drape your walls and floors completely in plastic to contain the mess. The timeline depends on your home's square footage, and we highly recommend the home is vacant during the scraping phase.",
      },
      {
        question:
          "Will the ceiling be perfectly smooth after the popcorn is gone?",
        answer:
          "Acoustic texture hides drywall imperfections. Once removed, we must float the joints and apply a new texture (like knockdown or orange peel) to create a seamless finish. We can achieve a perfectly smooth Level 5 finish, but it requires significantly more joint compound and labor.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Ready to instantly modernize your home? We handle the entire messy process so you don't have to.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"],
  },
  {
    slug: "wallpaper-removal",
    persona: "residential",
    category: "interior",
    name: "Wallpaper removal",
    serviceType: "Wallpaper Removal",
    title:
      "Wallpaper Removal Services in Lakewood Ranch & Sarasota | 4 The Love of Color",
    metaDescription:
      "Expert wallpaper stripping, glue removal, drywall repair, and repainting to refresh your interior walls.",
    h1: "Wallpaper removal in Lakewood Ranch & Sarasota.",
    intro: [
      "Taking down old wallpaper is rarely as simple as peeling it off. When walls aren't properly sized or primed before hanging, the adhesive bonds directly to the drywall paper, tearing the wall apart when removed.",
      "We professionally steam and strip old paper, meticulously scrub away the residual glue, repair the damaged drywall, and seal the wall with an oil-based primer so the new paint finish is flawless.",
    ],
    includes: [
      "Wallpaper scoring, steaming, and stripping",
      "Adhesive and paste scrubbing/removal",
      "Skim coating torn drywall paper",
      "Oil-based sealing to lock down residual glue",
      "Final interior wall painting",
    ],
    process: [
      {
        title: "Scoring and steaming",
        text: "We score the paper and use commercial steamers or enzymatic removers to safely break the glue bond without gouging the wall.",
      },
      {
        title: "Glue extraction",
        text: "Every trace of paste must be washed off the wall. Leftover glue will reactivate when wet paint hits it, causing a cracked, failed finish.",
      },
      {
        title: "Skim coating and patching",
        text: "Any torn drywall paper or gouges are skimmed with joint compound and sanded flat.",
      },
      {
        title: "Oil-based primer",
        text: "The bare wall is sealed with a stain-blocking oil or shellac primer to create a hard barrier between the old wall and new paint.",
      },
    ],
    problems: [
      {
        title: "Paint cracking and alligatoring over old wallpaper",
        text: "This happens when someone paints directly over wallpaper glue. The water in the paint reactivates the paste. The fix requires oil-priming and skimming.",
      },
    ],
    timeline:
      "Wallpaper removal is unpredictable. A single bathroom might take a day; a whole house could take a week just to prep.",
    occupied:
      "We mask the floors and work cleanly, so the home can remain occupied.",
    faqs: [
      {
        question: "How do you price wallpaper removal?",
        answer:
          "Wallpaper removal is priced by the square footage of the room and the number of layers. It is highly unpredictable; if the original walls weren't primed properly before the paper was hung, it requires significantly more labor and drywall skimming to repair the torn facing paper.",
      },
      {
        question: "Is my house going to be a mess during the removal?",
        answer:
          "We score the paper and use chemical enzymes or steam to dissolve the glue, which can be messy. However, we aggressively protect your baseboards and floors with heavy plastic and clean up the glue residue daily.",
      },
      {
        question: "Can't you just paint directly over the old wallpaper?",
        answer:
          "If the paper is firmly bonded with zero lifting seams, it can sometimes be sealed with oil primer and painted. However, the moisture in standard wall paint combined with Florida humidity can reactivate the old glue, causing the finish to crack or bubble, which is why we always recommend professional removal for our clients.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Don't spend your weekend fighting with a scraper and torn drywall. Let us strip the paper and prep the walls properly.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"],
  },
  {
    slug: "paver-sealing",
    persona: "residential",
    category: "exterior",
    name: "Paver cleaning & sealing",
    serviceType: "Paver Sealing",
    title:
      "Paver Cleaning & Sealing in Lakewood Ranch & Sarasota | 4 The Love of Color",
    metaDescription:
      "Restore and protect your driveway or pool deck with professional paver cleaning, re-sanding, and sealing in Lakewood Ranch.",
    h1: "Paver cleaning & sealing in Lakewood Ranch & Sarasota.",
    intro: [
      "Brick pavers fade, sink, and grow weeds when their protective seal breaks down. In the Florida sun and heavy summer rains, unsealed pavers quickly lose their rich color and structural sand joints.",
      "We deep clean your pavers, re-sand the joints to stabilize the blocks, and apply a premium commercial-grade sealer to enhance the color and protect against UV rays, oil spills, and weed growth.",
    ],
    includes: [
      "Driveway and walkway paver sealing",
      "Pool deck and lanai paver restoration",
      "Deep pressure washing and algae removal",
      "Joint re-sanding for stability",
      "Clear, wet-look, or natural finish sealing",
    ],
    process: [
      {
        title: "Deep cleaning and weed removal",
        text: "We pressure wash the pavers using a surface cleaner to remove algae, dirt, and old failing sealer.",
      },
      {
        title: "Joint re-sanding",
        text: "Once dry, we sweep fresh silica sand into the joints to lock the pavers in place and prevent shifting.",
      },
      {
        title: "Flood-coat sealing",
        text: "We apply a heavy flood coat of premium water-based or solvent-based sealer to harden the sand joints and protect the brick surface.",
      },
      {
        title: "Curing and final inspection",
        text: "We ensure the sealer has bonded evenly without hazing, and block off the area so it cures safely for 24 to 48 hours.",
      },
    ],
    problems: [
      {
        title: "Cloudy or white hazy pavers",
        text: "Caused by trapped moisture under cheap sealer, or applying sealer before the pavers were fully dry. We can strip failed sealer and restore the finish.",
      },
    ],
    timeline:
      "Cleaning happens on day one. Re-sanding and sealing happens on day two once completely dry.",
    occupied: "Driveways cannot be driven on for 24-48 hours after sealing.",
    faqs: [
      {
        question: "How much does it cost to seal a paver driveway?",
        answer:
          "Pricing is calculated strictly by the square footage of the hardscape. The estimate includes deep cleaning, heavy chemical degreasing, re-sanding the joints for stability, and applying two coats of commercial-grade sealer.",
      },
      {
        question:
          "How long does it take to seal pavers, and when can I drive on them?",
        answer:
          "The process requires multiple phases: deep cleaning first, followed by re-sanding and sealing once the pavers are completely dry. After sealing, the surface must fully cure before driving any vehicles on it.",
      },
      {
        question: "Will the sealer make my pool deck slippery?",
        answer:
          "Standard sealers can become slick when wet. For pool decks and high-traffic walkways, we broadcast a specialized SharkGrip polymer additive into the final coat to provide a slip-resistant texture without changing the look of the pavers.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Protect your expensive paver investment and bring the color back to life.",
    relatedGuides: ["how-often-to-repaint-a-florida-house"],
  },
  {
    slug: "commercial-interior-painting",
    persona: "commercial",
    category: "core",
    name: "Commercial interior painting",
    serviceType: "Commercial Interior Painting",
    title:
      "Commercial Interior Painters, Sarasota & Bradenton | 4 The Love of Color",
    metaDescription:
      "Commercial interior painters for Suncoast offices, storefronts, and restaurants. Scheduled around trading hours with minimal disruption.",
    h1: "Commercial interior painting in Lakewood Ranch & Sarasota.",
    intro: [
      "Interior commercial painting is judged on disruption as much as on the finish. The constraint is that the work has to happen around trading hours, tenants, or a handover date that will not move.",
      "We scope the job in writing, work off-hours if required, and use low-odor, fast-drying coatings so your business never misses a beat.",
    ],
    includes: [
      "Offices, medical suites and retail storefronts",
      "Restaurants and hospitality interiors",
      "Property-management rental turnovers",
      "Corridors, stairwells and shared public spaces",
      "Drywall patching and scuff-resistant coatings",
    ],
    process: [
      {
        title: "Walk it and write the scope",
        text: "Every surface in and out of scope is listed explicitly. Ambiguity in a commercial scope always surfaces later as a dispute about what was included.",
      },
      {
        title: "Schedule around your operation",
        text: "Evenings, weekends, phased sections, or between tenancies — whatever keeps the business running. We plan the sequence so no area is out of use longer than agreed.",
      },
      {
        title: "Contain and protect",
        text: "Work areas separated from areas in use, floors protected, and routes kept safe for staff and customers. On a live site, this is a safety requirement, not just a courtesy.",
      },
      {
        title: "Coat with durability weighted first",
        text: "Corridors and public areas need finishes that clean up and survive contact. A surface that cannot be wiped down looks worse within a year than one chosen for wear.",
      },
    ],
    problems: [
      {
        title: "Turnover windows that are too short",
        text: "Rental turnarounds run to fixed dates. The honest conversation is about what is genuinely achievable in the window rather than agreeing to it and then missing it.",
      },
      {
        title: "Corridors that scuff instantly",
        text: "Usually the wrong product for the traffic. High-contact shared areas need a washable, harder-wearing scuff-resistant finish.",
      },
    ],
    timeline:
      "Determined by square footage and availability. We offer accelerated schedules and off-hours crews for critical path handovers.",
    occupied:
      "We specialize in phased, occupied interior painting. Zero-VOC paints mean tenants can return the next morning without lingering paint fumes.",
    faqs: [
      {
        question: "How do you price commercial interior painting projects?",
        answer:
          "Commercial pricing is highly dependent on logistics. The cost factors in total square footage, the height of the ceilings, necessary drywall patching, and whether the work must be performed during premium off-hours to avoid disrupting your business operations.",
      },
      {
        question:
          "Can you paint our retail space at night while we are closed?",
        answer:
          "Yes. We offer flexible off-hours and weekend scheduling to ensure zero disruption to your trading hours. Our crews arrive after closing, complete their phase, and leave the space perfectly clean before you open.",
      },
      {
        question:
          "Are your commercial painting crews fully licensed and insured?",
        answer:
          "Yes. We carry comprehensive liability and workers' compensation insurance required for commercial properties. We provide our Certificate of Insurance (COI) and W-9 directly to your property management team before any work begins.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Don`'t let painting disrupt your cash flow. Ask us about our off-hours painting schedule.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"],
  },
  {
    slug: "commercial-exterior-painting",
    persona: "commercial",
    category: "core",
    name: "Commercial exterior painting",
    serviceType: "Commercial Exterior Painting",
    title:
      "Commercial Exterior Painters, Sarasota & Bradenton | 4 The Love of Color",
    metaDescription:
      "Commercial exterior painting and waterproofing for retail plazas, warehouses, and standalone businesses across the Suncoast.",
    h1: "Commercial exterior painting & waterproofing.",
    intro: [
      "A deteriorating exterior sends the wrong message to your customers before they even walk through the door. In Florida, commercial buildings are under constant assault from UV rays, salt air, and driving rain.",
      "We provide heavy-duty exterior washing, rust-inhibition, masonry sealing, and high-performance elastomeric coatings that protect your building`'s structural integrity and curb appeal.",
    ],
    includes: [
      "Standalone retail and strip malls",
      "Warehouses, tilt-wall, and industrial buildings",
      "Stucco repair and elastomeric waterproofing",
      "Metal roof and corrugated siding coatings",
      "Safety line striping and curb painting",
    ],
    process: [
      {
        title: "Deep cleaning and degreasing",
        text: "Commercial exteriors collect heavy exhaust soot and grease. We use industrial-grade detergents and hot water pressure washing to prep the surface.",
      },
      {
        title: "Rust treatment and masonry sealing",
        text: "Exposed rebar, failing lintels, and rust bleeds are treated with rust inhibitors. Stucco cracks are routed and sealed with elastomeric compounds.",
      },
      {
        title: "High-build waterproofing",
        text: "We apply thick, weather-rated architectural coatings designed to stretch with thermal expansion and bridge hairline cracks over time.",
      },
      {
        title: "Traffic and safety management",
        text: "We coordinate with property managers to block off parking zones, protect vehicles from overspray, and manage boom lift safety perimeters.",
      },
    ],
    problems: [
      {
        title: "Failing tilt-wall joints and caulk",
        text: "Failed expansion joints let water into the building envelope. We cut out the old material and apply 50-year commercial urethane sealants.",
      },
      {
        title: "Rust bleeding through block",
        text: "Requires grinding down to the rebar, treating with rust converter, and patching with high-strength mortar before painting.",
      },
    ],
    timeline:
      "Weather and scale dictate commercial exterior timelines. We provide a detailed Gantt chart for multi-week projects.",
    occupied:
      "All work is exterior. We communicate daily with site managers to ensure tenant parking and entrances remain accessible.",
    faqs: [
      {
        question:
          "How do you calculate the cost for a commercial exterior repaint?",
        answer:
          "We provide detailed, itemized bids based on linear footage, the height of the building, the amount of required boom lift equipment, and the extent of masonry and expansion joint repair required before painting.",
      },
      {
        question:
          "How do you protect pedestrian traffic while painting a commercial building?",
        answer:
          "Safety is our priority. We establish strict safety perimeters, use caution tape and barricades, and phase the project to ensure safe, unimpeded access to your entrances for tenants and customers.",
      },
      {
        question: "What kind of paint do you use on commercial exteriors?",
        answer:
          "We exclusively specify high-build, commercial-grade elastomeric coatings for stucco buildings. These specialized coatings bridge hairline cracks, repel water, and withstand intense UV exposure far better than standard architectural paints.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Protect your commercial asset from the Florida elements with a coating system built to last.",
    relatedGuides: ["how-often-to-repaint-a-florida-house"],
  },
  {
    slug: "hoa-multi-family-painting",
    persona: "commercial",
    category: "core",
    name: "HOA & multi-family painting",
    serviceType: "HOA Painting",
    title:
      "HOA & Multi-Family Painters, Sarasota & Bradenton | 4 The Love of Color",
    metaDescription:
      "Specialized painters for HOAs, condos, and multi-family communities. Board-approved palettes, resident notices, and phased scheduling.",
    h1: "HOA, condo & multi-family painters in Sarasota & Bradenton.",
    intro: [
      "Painting a multi-family community isn`'t just a logistics challenge; it`'s a communications challenge. You aren`'t just dealing with a building, you are dealing with dozens of residents, board members, and community rules.",
      "We partner with property managers to execute phased community repaints smoothly. From color selection boards to resident door hangers, we handle the friction so the property manager doesn`'t have to.",
    ],
    includes: [
      "Condominium buildings and townhome complexes",
      "HOA community walls, gates, and guardhouses",
      "Clubhouses, pool decks, and amenity centers",
      "Shared corridors, breezeways, and stairwells",
      "Annual maintenance painting contracts",
    ],
    process: [
      {
        title: "Board presentation and color mockups",
        text: "We provide large-scale drawdowns and digital renderings to help HOA boards and architectural review committees reach a consensus.",
      },
      {
        title: "Resident communication",
        text: "We provide printed notices and door hangers detailing the schedule, so residents know exactly when their building, lanai, or parking spot is affected.",
      },
      {
        title: "Phased execution",
        text: "We move through communities systematically, completing one building or block entirely before moving to the next to minimize community-wide disruption.",
      },
      {
        title: "Daily site walks",
        text: "A dedicated project manager walks the site daily to ensure containment is maintained and residents`' property is protected from overspray.",
      },
    ],
    problems: [
      {
        title: "Inconsistent colors across a community",
        text: "As communities age and homeowners touch up their own units, the colors drift. A community-wide repaint restores a cohesive, high-value aesthetic.",
      },
      {
        title: "Resident complaints about mess",
        text: "Our strict daily clean-up policy means no ladders, trash, or equipment are left in common areas overnight.",
      },
    ],
    timeline:
      "Depends entirely on community size. We provide a phased schedule broken down by building or block.",
    occupied:
      "Residents remain in their homes. We coordinate directly regarding lanai access, screen removal, and temporary parking shifts.",
    faqs: [
      {
        question:
          "How does the bidding process work for large HOA painting contracts?",
        answer:
          "We work directly with HOA boards and Property Managers to review the RFP, conduct a thorough community walk-through, and provide a highly detailed, line-itemized proposal that explicitly defines the prep work, paint specs, and phase schedule.",
      },
      {
        question:
          "How do you communicate the painting schedule to our residents?",
        answer:
          "We provide property managers with digital schedules and physical door hangers. We distribute these notices ahead of our arrival at each specific building or block, so residents know exactly when to move vehicles or clear their lanais.",
      },
      {
        question:
          "Do you have the capacity to paint a 30-building condominium complex?",
        answer:
          "Yes. We scale our crews to match the size of the community. We work systematically, completing one building entirely before moving to the next, to minimize the duration of the disruption to the community.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "We make large-scale community painting projects easy for property managers and HOA boards.",
    relatedGuides: [],
  },
  {
    slug: "commercial-stucco-repair",
    persona: "commercial",
    category: "exterior",
    name: "Commercial stucco repair",
    serviceType: "Commercial Stucco Repair",
    title: "Commercial Stucco Repair & Sealing, Sarasota | 4 The Love of Color",
    metaDescription:
      "Expert commercial stucco repair, elastomeric sealing, and waterproofing for retail plazas, warehouses, and HOA communities across the Suncoast.",
    h1: "Commercial stucco repair & sealing.",
    intro: [
      "Florida's intense heat and driving rain test the integrity of every commercial building. When stucco cracks, water penetrates the building envelope, leading to structural damage and tenant complaints.",
      "We specialize in heavy-duty commercial stucco patching, elastomeric joint sealing, and waterproofing to protect your asset and maintain a pristine exterior for your customers.",
    ],
    includes: [
      "Elastomeric sealing for tilt-wall and stucco cracks",
      "Large-scale spalling and structural patch repair",
      "Expansion joint caulking and waterproofing",
      "Efflorescence treatment and masonry sealing",
      "Safety perimeter management during repairs",
    ],
    process: [
      {
        title: "Site safety and setup",
        text: "We establish clear perimeters to protect pedestrian and vehicle traffic before any heavy equipment or boom lifts are deployed.",
      },
      {
        title: "V-grooving and failed material removal",
        text: "We route out failing cracks and remove compromised stucco down to sound masonry to ensure patches hold permanently.",
      },
      {
        title: "Commercial-grade patching and sealing",
        text: "We apply high-strength mortars and commercial elastomeric sealants that can withstand significant thermal expansion.",
      },
      {
        title: "Alkali-resistant priming",
        text: "Fresh masonry patches receive an alkali-resistant sealer to neutralize PH levels before high-build coatings are applied.",
      },
    ],
    problems: [
      {
        title: "Failed expansion joints letting water in",
        text: "Old urethane hardens and splits. We cut it out completely and apply new 50-year commercial sealants to restore the building envelope.",
      },
      {
        title: "Rust bleeding through exterior walls",
        text: "Exposed rebar requires rust converter treatment and specialized high-strength patching before sealing.",
      },
    ],
    timeline:
      "Coordinated with your property management team. We phase the work to ensure minimal disruption to tenant operations.",
    occupied:
      "All work is exterior. We communicate daily with site managers to coordinate lift access and parking closures.",
    faqs: [
      {
        question: "How do you price commercial stucco repairs?",
        answer:
          "Pricing depends on the extent of the damage, the height of the repairs, and the specialized equipment needed. We always provide a detailed estimate outlining the masonry patches required before applying commercial coatings.",
      },
      {
        question:
          "Can you repair stucco on multi-story commercial buildings without disrupting foot traffic?",
        answer:
          "Yes. Our crews are trained to operate articulating boom lifts safely, phasing the work and setting up safety barriers to keep your entrances clear and operational.",
      },
      {
        question:
          "Do you provide warranties on commercial stucco repairs in Florida's climate?",
        answer:
          "Yes, when stucco crack repair is combined with our full elastomeric commercial coating systems designed to withstand Florida's rain and salt air, we offer extended written warranties backed by both us and the paint manufacturer.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Stop water intrusion before it impacts your tenants or structural integrity.",
    relatedGuides: [],
  },
  {
    slug: "commercial-color-consultation",
    persona: "commercial",
    category: "prep",
    name: "Commercial color consultation",
    serviceType: "Commercial Color Consultation",
    title: "Commercial Color Consultation & HOA Palettes | 4 The Love of Color",
    metaDescription:
      "Professional color consultation for commercial properties, retail plazas, and HOA boards. Large-scale mockups and brand-aligned palettes.",
    h1: "Commercial color consultation & HOA palettes.",
    intro: [
      "Choosing colors for a commercial property or HOA community is a high-stakes decision that impacts property values, brand perception, and hundreds of residents.",
      "We take the friction out of the process. We work directly with property managers and architectural review boards to develop cohesive, modern palettes and provide large-scale physical mockups for easy consensus.",
    ],
    includes: [
      "HOA and condo community palette modernization",
      "Corporate brand color matching and compliance",
      "Large-format physical drawdowns and wall test swatches",
      "Digital renderings for board presentations",
      "High-traffic sheen and durability specifications",
    ],
    process: [
      {
        title: "Initial walk and brand review",
        text: "We assess the property's architecture, existing fixed elements (like roofing or brick), and any corporate branding requirements.",
      },
      {
        title: "Palette development",
        text: "We curate a selection of modernized, cohesive color schemes tailored for large-scale commercial or multi-family application.",
      },
      {
        title: "Mockups and board presentation",
        text: "We provide large physical swatches and can present directly to HOA boards or stakeholders to facilitate a final decision.",
      },
      {
        title: "Final specification document",
        text: "We create a binding color and product specification sheet to ensure absolute consistency across the entire property.",
      },
    ],
    problems: [
      {
        title: "HOA boards unable to reach a decision",
        text: "Small paint chips cause endless debate. Our large-scale physical mockups on the actual buildings make the decision clear and obvious.",
      },
      {
        title: "Colors fading too quickly in the sun",
        text: "Not all colors are exterior-rated. We specify UV-resistant pigments tailored specifically for commercial Florida exposure.",
      },
    ],
    timeline:
      "Consultations and board presentations are scheduled around your HOA meetings or corporate timelines.",
    occupied:
      "We work directly with property managers to ensure meetings are productive and on-site testing is unobtrusive.",
    faqs: [
      {
        question:
          "Is a color consultation included in the cost of our HOA painting project?",
        answer:
          "Yes, we provide professional color guidance and large-format physical mockups as part of our comprehensive estimate process for communities.",
      },
      {
        question: "Will you present the colors at our HOA board meeting?",
        answer:
          "Yes, we frequently attend HOA board meetings and architectural review committees to present mockups and help the community reach a consensus efficiently.",
      },
      {
        question:
          "Can you match our existing corporate franchise colors accurately?",
        answer:
          "Yes. We cross-reference and custom-match any required corporate branding guidelines exactly, ensuring strict compliance with your franchise agreements despite Florida's harsh UV fading.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Streamline your commercial color selection with expert guidance and physical mockups.",
    relatedGuides: [],
  },
  {
    slug: "commercial-pressure-washing",
    persona: "commercial",
    category: "exterior",
    name: "Commercial pressure washing",
    serviceType: "Commercial Pressure Washing",
    title:
      "Commercial Pressure Washing, Sarasota & Bradenton | 4 The Love of Color",
    metaDescription:
      "Heavy-duty commercial pressure washing and soft washing for retail plazas, parking garages, and HOA communities. Night and weekend scheduling.",
    h1: "Commercial pressure washing in Sarasota & Bradenton.",
    intro: [
      "A dirty, algae-covered exterior or a grease-stained parking lot drives customers away. Maintaining a pristine commercial property in Florida requires aggressive defense against mold, mildew, and high-traffic grime.",
      "We provide heavy-duty commercial pressure washing and soft-wash sanitization. We offer flexible off-hours scheduling to ensure your business operations and customer traffic are never disrupted.",
    ],
    includes: [
      "Retail storefronts and multi-story office buildings",
      "Parking garages, lots, and heavy-traffic sidewalks",
      "HOA community walls, sidewalks, and pool decks",
      "Dumpster pad degreasing and chewing gum removal",
      "Pre-paint commercial deep surface decontamination",
    ],
    process: [
      {
        title: "Off-hours scheduling",
        text: "We coordinate with property managers to execute cleaning during nights or weekends to avoid disrupting tenant trading hours.",
      },
      {
        title: "Pedestrian safety and water management",
        text: "We establish safety perimeters, manage hoses securely, and ensure proper water runoff to prevent slip hazards.",
      },
      {
        title: "Industrial chemical treatment",
        text: "We apply commercial-grade degreasers and algaecides to break down heavy oils, gum, and organic growth before rinsing.",
      },
      {
        title: "High-volume surface cleaning",
        text: "We use high-GPM commercial surface cleaners for large concrete expanses, ensuring an even, streak-free clean.",
      },
    ],
    problems: [
      {
        title: "Heavy grease and chewing gum on sidewalks",
        text: "Cold water won't cut it. We use specialized degreasers and techniques to lift stubborn commercial stains and gum.",
      },
      {
        title: "Disruption to customers",
        text: "Our night and early morning crews ensure the property is spotless before the first customer arrives.",
      },
    ],
    timeline:
      "Scaled to the property size. Large HOA communities or parking garages are phased over multiple days.",
    occupied:
      "We specialize in occupied commercial properties, working silently off-hours or in cordoned-off zones.",
    faqs: [
      {
        question: "How much does it cost to pressure wash a commercial plaza?",
        answer:
          "The cost is based on the square footage of the walkways, walls, and dumpster pads. Regular maintenance washing prevents expensive premature repainting and extends the life of your exterior surfaces in Florida's humid climate.",
      },
      {
        question:
          "Do you offer recurring commercial maintenance washing after hours?",
        answer:
          "Yes, we schedule our commercial soft-washing during off-hours or weekends to ensure no disruption to your tenants or their customers.",
      },
      {
        question: "Can you clean multi-story commercial buildings safely?",
        answer:
          "Yes, we utilize commercial soft-wash systems and boom lifts to safely clean multi-story exteriors without using high pressure that could damage masonry or force water into window seals.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Maintain your property's value and curb appeal with professional commercial washing.",
    relatedGuides: [],
  },
  {
    slug: "commercial-paver-sealing",
    persona: "commercial",
    category: "exterior",
    name: "Commercial paver sealing",
    serviceType: "Commercial Paver Sealing",
    title: "Commercial Paver Cleaning & Sealing | 4 The Love of Color",
    metaDescription:
      "Professional paver sealing for commercial properties, HOA community pools, and high-traffic walkways. Slip-resistant additives available.",
    h1: "Commercial paver cleaning & sealing.",
    intro: [
      "Commercial paver installations represent a massive capital investment. Unsealed, high-traffic pavers quickly lose their color, sink due to joint sand erosion, and become a liability due to slippery algae growth.",
      "We provide commercial-grade deep cleaning, joint stabilization, and heavy-duty sealing to protect your property's hardscapes from vehicle traffic, UV degradation, and liability risks.",
    ],
    includes: [
      "HOA community pool decks and amenity centers",
      "Commercial driveways, roundabouts, and parking zones",
      "High-traffic retail and restaurant walkways",
      "Joint re-sanding for structural block stabilization",
      "Slip-resistant grit additives for ADA compliance",
    ],
    process: [
      {
        title: "Phased zone closures",
        text: "We work with property management to close sections of the hardscape in phases, ensuring pedestrian routing is maintained.",
      },
      {
        title: "Heavy-duty commercial cleaning",
        text: "We extract ingrained dirt, tire marks, and algae using high-volume surface cleaners and commercial degreasers.",
      },
      {
        title: "Joint stabilization",
        text: "We sweep fresh, clean silica sand into the joints, which is crucial for preventing paver shifting under vehicle traffic.",
      },
      {
        title: "Commercial-grade sealing",
        text: "We apply heavy-duty urethane or acrylic sealers mixed with anti-slip additives to harden the joints and protect the surface.",
      },
    ],
    problems: [
      {
        title: "Slip hazards around community pools",
        text: "Algae growth on unsealed pavers is a major liability. We kill the algae and add SharkGrip anti-slip grit to the new sealer for safety.",
      },
      {
        title: "Sinking and shifting driveway pavers",
        text: "Caused by washed-out joint sand. Our flood-coat sealing process hardens the new sand into a solid matrix, locking the bricks in place.",
      },
    ],
    timeline:
      "Multi-day phased process. Cleaning occurs on day one, sealing on day two after complete drying.",
    occupied:
      "Sealed areas must be cordoned off for 24-48 hours to cure safely before opening to foot or vehicle traffic.",
    faqs: [
      {
        question:
          "Is commercial paver sealing worth the investment for our HOA?",
        answer:
          "Yes. Unsealed pavers quickly grow algae and weeds, and the structural sand washes away in summer rains. Sealing protects the pavers and prevents costly trip-and-fall liabilities.",
      },
      {
        question: "How long does it take to seal a commercial pool deck?",
        answer:
          "We phase the project over several days—deep cleaning first, then re-sanding and sealing once dry. We clearly communicate the schedule so residents know when the deck will safely reopen.",
      },
      {
        question:
          "Can you make our community pool deck safer and slip-resistant?",
        answer:
          "Yes. Once clean, we broadcast a specialized anti-slip polymer grit into the final coat of sealer to significantly improve traction and ADA compliance for communities.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "Protect your hardscape investment and reduce liability with commercial-grade paver sealing.",
    relatedGuides: [],
  },
  {
    slug: "commercial-drywall-repair",
    persona: "commercial",
    category: "interior",
    name: "Commercial drywall repair",
    serviceType: "Commercial Drywall Repair",
    title:
      "Commercial Drywall Repair, Sarasota & Bradenton | 4 The Love of Color",
    metaDescription:
      "Professional commercial drywall repair, water damage remediation, and texture matching for retail spaces and offices.",
    h1: "Commercial drywall repair & patching.",
    intro: [
      "Commercial walls take a beating. From heavy furniture moving to tenant turnovers and water leaks, damaged drywall in a commercial space looks unprofessional and creates a poor impression for clients.",
      "We provide rapid, discreet drywall patching, taping, and texture matching for commercial properties to restore a seamless, professional finish before repainting.",
    ],
    includes: [
      "Tenant turnover drywall restoration",
      "Retail display anchor patching",
      "Office partition removal repair",
      "Water damage sheetrock replacement",
      "Commercial texture matching (knockdown, orange peel)",
    ],
    process: [
      {
        title: "Damage assessment and cut back",
        text: "Loose or water-damaged drywall is cut out clean to solid studs or sound drywall backing.",
      },
      {
        title: "Backing and joint taping",
        text: "New drywall patches are secured with backing wood, mesh taped, and coated with joint compound.",
      },
      {
        title: "Feathering and texture matching",
        text: "Multiple thin coats are feathered out and matched to surrounding wall texture (knockdown, orange peel, or smooth).",
      },
      {
        title: "Stain-blocking primer",
        text: "Patches receive a dedicated stain-blocking primer so joint compound doesn't flash or bleed through final paint coats.",
      },
    ],
    problems: [
      {
        title: "Cracks opening up along seams",
        text: "Usually settled house movement. Joint tape must be replaced and mudded properly rather than just filled with spackle.",
      },
      {
        title: "Water stains bleeding back",
        text: "Water spots must be completely sealed with shellac or oil-based stain blocker after fixing the moisture source.",
      },
    ],
    timeline:
      "Small patches take a single visit; multi-room drywall repair runs 1 to 2 days prior to painting.",
    occupied:
      "Dust containment measures and vacuum-assisted sanding are used to keep your commercial space clean.",
    faqs: [
      {
        question:
          "Does fixing drywall damage add significantly to a tenant turnover project?",
        answer:
          "We price drywall repairs based on the scope, whether it's minor patching or replacing large sections of water-damaged board. This is clearly itemized in our commercial estimates.",
      },
      {
        question:
          "Can you repair water-damaged drywall in retail spaces quickly?",
        answer:
          "Yes. Once your plumbing or roof leak is resolved, we quickly cut out the damaged board, replace the backing, and apply stain-blocking primers to get your retail space back in business.",
      },
      {
        question:
          "Can you match commercial knockdown or orange peel textures found in Florida offices?",
        answer:
          "Yes, our drywall finishers spray and trowel custom textures to seamlessly match existing commercial wall finishes, ensuring the repair is invisible to your clients.",
      },
    ],
    image: null,
    imageAlt: "",
    closing:
      "We fix the underlying wall flaws before painting so your commercial space looks brand new.",
    relatedGuides: [],
  },
];

export const servicePageBySlug = (slug: string) =>
  servicePages.find((page) => page.slug === slug);
