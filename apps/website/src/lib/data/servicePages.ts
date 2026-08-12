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
    category: "interior",
    name: "Cabinet refinishing",
    serviceType: "Kitchen cabinet refinishing",
    title: "Cabinet Refinishing, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription: "Cabinet refinishing for Lakewood Ranch and Sarasota kitchens — properly cleaned, primed and sprayed to a finish that survives daily use.",
    h1: "Kitchen cabinet refinishing in Lakewood Ranch & Sarasota.",
    intro: [
      "Refinishing the cabinets you already have costs a fraction of replacing them, and in most kitchens around here the boxes are in much better shape than the finish makes them look. If they're solid and the layout works for you, what you don't like is usually the color and the wear — and that's something we can fix.",
      "It's also the job where doing it right matters most. Cabinets get touched, wiped and knocked more than anything else in the house, so a finish that wasn't prepped properly starts chipping at the door edges within months. There's no patching that — it has to come back off and start over."
    ],
    includes: [
      "Doors, drawer fronts, face frames and cabinet boxes",
      "Kitchen islands, pantry and built-in cabinetry",
      "Bathroom vanities and laundry-room cabinetry",
      "Bookcases, built-in shelving and other feature joinery",
      "Hardware removal and refit, or fitting new hardware you supply"
    ],
    process: [
      {
        title: "Everything comes off and gets numbered",
        text: "We take off the doors, drawer fronts and hardware and number every piece so it goes back exactly where it came from. Doors that get swapped around never hang quite right afterwards."
      },
      {
        title: "Cleaning off the grease",
        text: "Every kitchen has a film of cooking grease on the cabinets, worst around the stove — you usually can't see it, but paint won't stick to it. We degrease everything, then sand off the shine so the primer has something to grab."
      },
      {
        title: "The right primer for your cabinets",
        text: "Thermofoil, laminate, oak and already-painted wood each need a different primer. This is the one decision that makes or breaks how long the finish lasts, and it's the step that gets skipped most often because you can't see it once the job's done."
      },
      {
        title: "Filling and sanding",
        text: "Dings and old handle holes get filled. If you have oak, the grain will show through the paint unless we fill and sand it flat first — some folks like that texture and some don't expect it, so it's worth deciding together up front."
      },
      {
        title: "Sprayed, not brushed",
        text: "We spray the doors and drawer fronts rather than brushing them in place, and sand lightly between coats. You can spot a brushed cabinet door from across the room — sprayed, it looks new."
      },
      {
        title: "Letting it harden before we hang them",
        text: "Cabinet finishes can be handled fairly quickly but keep hardening for a while after that. We'll hang the doors once they're safe to handle and tell you when you can go back to normal — stacking dishes against a finish that hasn't hardened is how the first chips happen."
      }
    ],
    problems: [
      {
        title: "Peeling at the door edges and around handles",
        text: "Almost always means the last coat went on over grease or a shiny factory finish without proper cleaning and priming. Touching it up won't hold — those spots need taking back and building up again."
      },
      {
        title: "Yellowed or ambered white cabinets",
        text: "Some older white finishes turn yellow over the years, worst where the daylight hits. It's the old finish itself, not dirt, so cleaning won't touch it. Refinishing will."
      },
      {
        title: "Sticky or tacky surfaces long after painting",
        text: "Usually wall paint that got used on cabinets. Wall paint is made to stay a little soft so it can flex — cabinets need something that actually hardens."
      },
      {
        title: "Doors that stick or no longer close flush",
        text: "Usually paint built up around the hinges from a previous job done without taking the doors off. Easy to put right while everything is off anyway."
      }
    ],
    timeline: "A typical kitchen runs several days to a couple of weeks depending on door count, substrate and how much filling is needed — the drying and curing between coats sets the pace more than the painting does. You get a realistic range in the written estimate, based on your kitchen rather than an average.",
    occupied: "The kitchen stays usable for most of the job. Doors and drawer fronts leave for finishing, so you have open shelving and working drawers in the meantime; boxes and face frames are done in place with the surrounding area masked and protected. The disruptive stretch is short, and we will tell you which days it falls on before we start.",
    faqs: [
      {
        question: "Is refinishing cheaper than replacing cabinets?",
        answer: "Substantially, in most kitchens — you are paying for labor and materials rather than new casework, countertop removal and installation. It only stops making sense when the boxes themselves are failing, the layout needs changing, or water damage has gone into the carcass. We will say so at the walkthrough if that is what we find."
      },
      {
        question: "Can you refinish thermofoil or laminate cabinets?",
        answer: "Usually yes, with the right bonding primer — these surfaces are non-porous, so adhesion depends entirely on preparation and primer choice. Where thermofoil has already lifted or peeled away from the substrate, that door needs replacing rather than refinishing; a lifted edge cannot be painted back down."
      },
      {
        question: "Will the grain still show through on oak cabinets?",
        answer: "Only if you want it to. Open-grain oak shows its texture through paint unless the grain is filled and sanded flat first. That is extra work, so it is a decision worth making up front — some people like the character, others expect a modern flat finish and are disappointed to see grain in it."
      },
      {
        question: "How soon can we use the kitchen normally again?",
        answer: "Doors go back on once the finish can be handled safely, but cabinet coatings keep hardening for a while after that. We will tell you when yours is ready for normal use, including stacking things against the interiors — early heavy use is the most common cause of first-year chipping."
      },
      {
        question: "Do you spray or brush cabinets?",
        answer: "Doors and drawer fronts are sprayed, which is what gives a cabinet its smooth, factory-like surface. Face frames and boxes are done in place with the area masked off. A brushed cabinet door is visible as a repaint from across the room."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "If you are weighing refinishing against replacement, the walkthrough is the fastest way to settle it. We will look at the boxes, the doors and the current finish and tell you plainly which one your kitchen justifies — including when the answer is replacement.",
    relatedGuides: ["refinishing-cabinets-vs-replacing", "house-painting-cost-lakewood-ranch-sarasota"]
  },
  {
    slug: "interior-painting",
    category: "interior",
    name: "Interior painting",
    serviceType: "Interior residential painting",
    title: "Interior House Painters, Lakewood Ranch | 4 The Love of Color",
    metaDescription: "Interior painters for Lakewood Ranch and Sarasota homes — walls, ceilings, trim and doors, with low-odor paint and careful protection.",
    h1: "Interior house painting in Lakewood Ranch & Sarasota.",
    intro: [
      "Interior painting gets looked at up close, in daylight, by the people who live there. The line where the wall meets the ceiling, the edge along the baseboard, whether a long wall looks even — that's what you notice a week later, and it comes from the prep and the hand doing it more than from the paint.",
      "There's one job we do more than any other around here: the first repaint of a newer home. Builders spray one thin coat of flat paint that marks easily and can't be wiped clean. Swapping that for a proper washable finish is the biggest improvement most newer houses can get."
    ],
    includes: [
      "Walls, ceilings, trim, baseboards, doors and door frames",
      "Whole-home repaints and single rooms",
      "Accent walls and color changes",
      "Crown molding, wainscoting and feature joinery",
      "Condo and apartment interiors, including HOA-scheduled buildings"
    ],
    process: [
      {
        title: "Cover everything first",
        text: "Furniture into the middle of the room and covered, floors protected wall to wall, fixtures and hardware masked off. Everything after this makes dust, so it gets done first rather than worked around."
      },
      {
        title: "Fix what fresh paint would show up",
        text: "Nail pops, screw holes, little cracks and knocked corners get filled and sanded flat. New paint doesn't hide a flaw, it shows it off — something you'd stopped noticing on a tired wall jumps out on a fresh one."
      },
      {
        title: "Caulk the gaps that have opened up",
        text: "Trim, baseboards and crown pull away from the wall a little as a house settles. Those gaps are what make a room look unfinished, and filling them is the difference between painted and properly done."
      },
      {
        title: "Prime the patches and any stains",
        text: "Water marks and every spot of filler get primed before color goes on. Skip it and they show through as dull patches, and no amount of extra coats will cover them."
      },
      {
        title: "Cut in and roll",
        text: "Edges cut in by hand, walls rolled so the texture stays even, and as many coats as it actually takes. Going from a dark color to a light one usually needs more than two, whatever the can says."
      },
      {
        title: "Put the room back together",
        text: "Hardware back on, furniture back where it was, floors clear and everything tidied up — at the end of every day, not just the last one."
      }
    ],
    problems: [
      {
        title: "Builder-grade flat that will not wash",
        text: "Standard on newer homes here. Scuffs and handprints won't wipe off, and rubbing at them leaves a shiny patch instead. The fix is a washable finish, not more of the same."
      },
      {
        title: "Recurring bathroom and laundry marks",
        text: "Spotting that keeps coming back in a bathroom or laundry is usually as much about airflow as paint. The right finish helps, but if the room isn't clearing the moisture it'll come back eventually."
      },
      {
        title: "Ceiling stains that come back",
        text: "A stain that comes back through fresh paint either still has a leak behind it or was never sealed with a stain-blocking primer. Painting it again without sorting that out is paying twice."
      },
      {
        title: "Patches that flash in daylight",
        text: "Patches that got filled but never primed soak up paint differently from the wall around them, so they show as dull spots when the light comes across. That's a prep problem, not the paint."
      }
    ],
    timeline: "Single rooms are usually a day or two. Whole-home interiors typically run one to two weeks depending on square footage, ceiling height, how much trim there is, and the amount of repair work. Color changes across a wide gap — dark to white especially — add coats and therefore days.",
    occupied: "Most of our interior work happens in homes people are living in. We work room by room where that suits you, keep low-VOC and low-odor products as the default so rooms stay usable, and protect and restore each space rather than treating the whole house as a site. Pets and working-from-home schedules are worth mentioning at the walkthrough so the sequence can be planned around them.",
    faqs: [
      {
        question: "Do we need to move out while you paint?",
        answer: "Almost never. We work in sections so you keep the use of the house, and low-odor products mean rooms are usable again quickly. Whole-home repaints in empty properties move faster, but living in the house does not stop the job."
      },
      {
        question: "Do you move furniture?",
        answer: "We move what is reasonable — furniture to the centre of the room and covered. Very heavy, fragile or high-value items are worth discussing at the walkthrough so it is clear in advance who is moving what."
      },
      {
        question: "How many coats will my walls need?",
        answer: "Two is typical over a sound existing color. Significant color changes, strong or deep colors, and any wall with heavy repair work regularly need more. We scope for what the wall needs rather than a fixed number, and the estimate says which."
      },
      {
        question: "What sheen should I use where?",
        answer: "Broadly: flat or matte hides wall imperfections but does not clean well; eggshell and satin are the usual living-area compromise; kitchens, bathrooms and trim want something harder and more washable. Traffic, light and how forgiving the wall surface is all shift the answer, so it is worth walking through room by room."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "Whether it is one room or the whole house, the walkthrough is free and we will be straight with you about what the surfaces need — including where you can spend less.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"]
  },
  {
    slug: "exterior-painting",
    category: "exterior",
    name: "Exterior painting",
    serviceType: "Exterior residential painting",
    title: "Exterior House Painters, Lakewood Ranch | 4 The Love of Color",
    metaDescription: "Exterior painters for Lakewood Ranch, Sarasota and Bradenton. Pressure washing, stucco crack repair and coatings built for Florida sun.",
    h1: "Exterior house painting in Lakewood Ranch & Sarasota.",
    intro: [
      "Out here an exterior repaint is protection first and looks second. Sun, summer rain, humidity and salt air are working on your walls year round, and the paint is most of what stands between them and the block underneath.",
      "That means the prep matters more than anything. Washing, filling cracks, sealing and priming are what decide whether a finish lasts — and they're the parts you can't see once the job is done."
    ],
    includes: [
      "Stucco, block and siding",
      "Trim, soffits, garage doors and front doors",
      "Gables, arches and decorative detail",
      "Lanais, pool cages and railings",
      "HOA communities and multi-property exteriors"
    ],
    process: [
      {
        title: "Wash it down and let it dry",
        text: "Dirt, mildew and chalky old paint all stop new paint sticking. We wash the house and give it time to dry — putting paint on a damp wall is how you end up with blisters."
      },
      {
        title: "Fill the cracks",
        text: "Little cracks in stucco are normal down here, since the block moves with the heat. We fill and seal them before any color goes on so they don't come back through your new paint."
      },
      {
        title: "Seal around the windows and doors",
        text: "Old caulk pulls away over time, and that's where water gets in. We cut out what's failed and reseal it. It's as much about keeping the house dry as it is about how it looks."
      },
      {
        title: "Prime where it's needed",
        text: "Bare stucco, patched spots and any stains get primed first. Not the whole house out of habit — just where the wall actually needs it."
      },
      {
        title: "Paint, with the sun in mind",
        text: "West and south walls take the worst of the afternoon sun and fade first, so we use coatings rated for it. That's especially true with deeper colors, where one wall going light stands out."
      }
    ],
    problems: [
      {
        title: "Paint peeling or blistering off stucco",
        text: "Usually moisture behind the paint, or a coat that went on over a dirty wall. Repainting without sorting out the cause just buys you a couple of years."
      },
      {
        title: "Cracks showing up again",
        text: "The crack got painted over instead of filled. Stucco moves, so a crack that wasn't properly sealed opens right back up along the same line."
      },
      {
        title: "Chalk that comes off on your hand",
        text: "The old paint has broken down in the sun. Nothing new will stick to it until it's washed off properly, and it's the most common reason a repaint fails early around here."
      },
      {
        title: "Rust stains running down the wall",
        text: "More common closer to the water, where salt gets at screws and railings. It needs treating and priming, or it bleeds straight back through the new paint."
      }
    ],
    timeline: "Most houses run a few days to a couple of weeks, depending on size, how many stories, and what shape the walls are in. Weather sets the real pace — we'd rather lose an afternoon to a storm than put paint on a wet wall.",
    occupied: "Exterior work hardly affects you at all. We need to get around the house, the driveway clear where we're working, and the sprinklers off on whichever side we're on. Keep the windows shut on that side for the day and otherwise carry on as normal.",
    faqs: [
      {
        question: "How often should a Florida house be repainted?",
        answer: "It varies more than people expect — sun exposure, how close you are to the water, the color, and mostly how well the last paint job was prepped. Two houses on the same street can be years apart. We'd rather look at yours than give you a number: chalking, cracks in the stucco and fading on the west side are the things to watch for."
      },
      {
        question: "Do you pressure wash before painting?",
        answer: "Always, and then we let it dry properly. Washing isn't just to make it look nice — it takes off the chalk, mildew and salt that stop paint from sticking. Skipping it is the most common reason a repaint doesn't last."
      },
      {
        question: "Can you paint during the summer rainy season?",
        answer: "Yes, we just plan around it. We work with the afternoon storms rather than against them and keep an eye on drying time. It costs the odd afternoon, which beats putting paint on a damp wall."
      },
      {
        question: "Our community has to approve the color first. Can you help?",
        answer: "Happy to. Most villages around Lakewood Ranch have an approved palette and want the color signed off before work starts, and we can walk you through what yours allows and help you pick something you actually like inside it. Just ask us about the paperwork side and we'll tell you where we can help."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "Exterior quotes are hard to compare because the preparation is where they differ and it is the part nobody itemizes. Ask us what we would do to your walls before any color goes on — the answer is the quote.",
    relatedGuides: ["why-paint-peels-off-stucco", "how-often-to-repaint-a-florida-house", "house-painting-cost-lakewood-ranch-sarasota"]
  },
  {
    slug: "drywall-repair",
    persona: "both",
    category: "interior",
    name: "Drywall repair & patching",
    serviceType: "Drywall Repair",
    title: "Drywall Repair & Patching, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription: "Professional drywall repair, patching, water damage remediation, and texture matching in Lakewood Ranch and Sarasota, FL.",
    h1: "Drywall repair & patching in Lakewood Ranch & Sarasota.",
    intro: [
      "Fresh paint will only ever look as smooth as the drywall beneath it. Dents, nail pops, door handle holes, and settled cracks interrupt the finish and catch the light.",
      "We patch, feather, and match wall textures before priming so repaired areas blend seamlessly into the surrounding wall."
    ],
    includes: [
      "Nail pop and screw hole patching",
      "Door handle wall damage repair",
      "Stress crack tape and joint compound repair",
      "Water damage sheetrock replacement",
      "Orange peel and knock-down texture matching"
    ],
    process: [
      {
        title: "Damage assessment and cut back",
        text: "Loose or water-damaged drywall is cut out clean to solid studs or sound drywall backing."
      },
      {
        title: "Backing and joint taping",
        text: "New drywall patches are secured with backing wood, mesh taped, and coated with joint compound."
      },
      {
        title: "Feathering and texture matching",
        text: "Multiple thin coats are feathered out and matched to surrounding wall texture (knockdown, orange peel, or smooth)."
      },
      {
        title: "Stain-blocking primer",
        text: "Patches receive a dedicated stain-blocking primer so joint compound doesn't flash or bleed through final paint coats."
      }
    ],
    problems: [
      {
        title: "Cracks opening up along seams",
        text: "Usually settled house movement. Joint tape must be replaced and mudded properly rather than just filled with spackle."
      },
      {
        title: "Water stains bleeding back",
        text: "Water spots must be completely sealed with shellac or oil-based stain blocker after fixing the moisture source."
      }
    ],
    timeline: "Small patches take a single visit; multi-room drywall repair runs 1 to 2 days prior to painting.",
    occupied: "Dust containment measures and vacuum-assisted sanding are used to keep your home clean.",
    faqs: [
      {
        question: "Can you match knockdown or orange peel textures?",
        answer: "Yes, we spray and trowel custom textures to match existing Florida wall finishes."
      },
      {
        question: "Do you repair water-damaged drywall?",
        answer: "We replace soft or swollen drywall once the plumbing or roof leak has been resolved."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "We fix the underlying wall flaws before painting so your room looks brand new.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"]
  },
  {
    slug: "stucco-repair",
    persona: "both",
    category: "exterior",
    name: "Stucco repair & sealing",
    serviceType: "Stucco Repair",
    title: "Stucco Repair & Sealing, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription: "Expert stucco crack repair, patching, and elastomeric sealing for Lakewood Ranch, Sarasota, and Bradenton homes.",
    h1: "Stucco repair & sealing in Lakewood Ranch & Sarasota.",
    intro: [
      "Florida block-and-stucco homes naturally expand and contract in high heat, creating hairline cracks. Left unsealed, driving summer rain enters these cracks and causes paint to blister and peel.",
      "Our stucco repair process bridges hairline cracks with flexible masonry sealants and matches surrounding stucco texture before applying weather-rated exterior paint."
    ],
    includes: [
      "Hairline stucco crack elastomeric sealing",
      "Spalling and chunked stucco patch repair",
      "Window and door perimeter caulking renewal",
      "Efflorescence cleaning and masonry sealing",
      "Custom stucco texture matching"
    ],
    process: [
      {
        title: "Pressure cleaning and loose stucco removal",
        text: "We wash away chalk, dirt, and loose stucco down to sound masonry."
      },
      {
        title: "V-grooving and crack sealing",
        text: "Cracks are opened slightly and filled with high-grade elastomeric sealant designed for Florida sun."
      },
      {
        title: "Texture patch matching",
        text: "Masonry patch mix is applied to match dash, knockdown, or smooth stucco finishes."
      },
      {
        title: "Alkali-resistant priming",
        text: "Fresh masonry patches receive an alkali-resistant sealer to neutralize PH levels before painting."
      }
    ],
    problems: [
      {
        title: "Stucco bubbling or flaking off",
        text: "Moisture trapped behind non-breathable paint. The area must be opened, dried, sealed, and repainted with breathable masonry coatings."
      },
      {
        title: "White chalky powder on walls (Efflorescence)",
        text: "Water pulling salts out of the concrete block. Requires acid neutralization and sealing."
      }
    ],
    timeline: "Stucco prep and curing adds 1 to 2 days to a standard exterior paint schedule.",
    occupied: "All work takes place outside; window shut notices are provided for pressure washing days.",
    faqs: [
      {
        question: "Why do cracks keep reappearing in stucco?",
        answer: "Rigid spackle cracks again with thermal movement. We use flexible elastomeric sealants that stretch with house settlement."
      },
      {
        question: "Do you seal around windows during stucco repair?",
        answer: "Yes, window and door caulking is cut out and replaced with 50-year polyurethane sealant."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "Protect your stucco investment with proper crack repair before water penetrates your home.",
    relatedGuides: ["why-paint-peels-off-stucco", "how-often-to-repaint-a-florida-house"]
  },
  {
    slug: "color-consultation",
    persona: "both",
    category: "prep",
    name: "Color consultation",
    serviceType: "Color Consultation",
    title: "Professional Color Consultation, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription: "In-home color consultation for interior and exterior painting in Lakewood Ranch and Sarasota. HOA palette assistance and sample testing.",
    h1: "Professional color consultation in Lakewood Ranch & Sarasota.",
    intro: [
      "Choosing the right paint color can feel overwhelming. Colors look completely different on a tiny swatch in store lighting than they do across a wide stucco wall under direct Florida sunlight.",
      "We help you navigate undertones, light exposure, room flow, and HOA community palette restrictions to find colors you will love for years."
    ],
    includes: [
      "In-home or on-site lighting and flow assessment",
      "Large-format color swatch testing on real surfaces",
      "HOA approved community color book matching",
      "Interior room-to-room color coordination",
      "Sheen selection guidance for high-use areas"
    ],
    process: [
      {
        title: "Lighting and architecture walk",
        text: "We review room orientation, natural light angles, flooring, and existing fixed architectural elements."
      },
      {
        title: "Sample swatch placement",
        text: "We apply real paint test samples to walls so you can view them at morning, noon, and evening light."
      },
      {
        title: "HOA submission documentation",
        text: "For exterior projects, we prepare exact color code listings required for HOA board architectural review."
      }
    ],
    problems: [
      {
        title: "Paint looks purple or green on the wall",
        text: "Gray and greige paints have hidden undertones that reveal themselves under Florida sunlight. Proper testing prevents surprises."
      }
    ],
    timeline: "Color consultations run 60 to 90 minutes on site.",
    occupied: "Scheduled at your convenience in your home.",
    faqs: [
      {
        question: "Is color consultation included with a full paint job?",
        answer: "Yes, we provide color guidance and sample testing as part of our comprehensive estimate process."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "Take the guesswork out of color selection with expert in-home guidance.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"]
  },
  {
    slug: "pressure-washing",
    persona: "both",
    category: "exterior",
    name: "Pressure washing & soft wash",
    serviceType: "Pressure Washing",
    title: "Pressure Washing & Soft Wash, Lakewood Ranch FL | 4 The Love of Color",
    metaDescription: "Professional exterior pressure washing, soft wash cleaning, driveway cleaning, and prep washing in Lakewood Ranch and Sarasota.",
    h1: "Pressure washing & soft wash in Lakewood Ranch & Sarasota.",
    intro: [
      "Florida humidity creates prime conditions for green algae, black mildew, and salt accumulation on home exteriors, lanai decks, and driveways.",
      "We use soft-wash low-pressure techniques with eco-friendly cleaning solutions to safely remove organic growth without damaging delicate stucco or paint."
    ],
    includes: [
      "Exterior stucco and siding soft wash",
      "Driveway, sidewalk, and paver pressure cleaning",
      "Lanai cage, pool deck, and screen enclosure washing",
      "Pre-paint deep surface decontamination"
    ],
    process: [
      {
        title: "Plant and property protection",
        text: "Landscaping and delicate plants are pre-rinsed and protected before cleaning solutions are applied."
      },
      {
        title: "Eco-friendly detergent application",
        text: "Mildew-killing solutions break down organic growth without aggressive high pressure."
      },
      {
        title: "Low-pressure gentle rinse",
        text: "Surfaces are rinsed clean, leaving stucco, stone, and trim sanitized and bright."
      }
    ],
    problems: [
      {
        title: "Black streaks on stucco",
        text: "High pressure alone damages surfaces; soft wash chemical treatment kills the spores at the root."
      }
    ],
    timeline: "Most residential exterior wash jobs take half a day.",
    occupied: "All work is exterior. Windows must remain closed during cleaning.",
    faqs: [
      {
        question: "Will high pressure damage my stucco?",
        answer: "High pressure can blast holes in stucco. We use low-pressure soft washing with specialized cleaning agents to safely sanitize surfaces."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "Keep your home's exterior clean, bright, and mildew-free.",
    relatedGuides: ["how-often-to-repaint-a-florida-house"]
  },
  {
    slug: "popcorn-ceiling-removal",
    persona: "residential",
    category: "interior",
    name: "Popcorn ceiling removal",
    serviceType: "Ceiling Refinishing",
    title: "Popcorn Ceiling Removal in Lakewood Ranch & Sarasota | 4 The Love of Color",
    metaDescription: "Professional popcorn ceiling removal, re-texturing, and painting. Dust-controlled process to modernize your Florida home's interior.",
    h1: "Popcorn ceiling removal in Lakewood Ranch & Sarasota.",
    intro: [
      "Nothing dates a home's interior quite like an acoustic popcorn ceiling. Beyond the dated aesthetic, they catch dust, cast shadows that make rooms feel shorter, and are impossible to clean or patch properly.",
      "Removing it is the single most transformative upgrade you can make to an older Florida home. We scrape the texture clean, repair the drywall underneath, apply a modern knockdown or smooth finish, and paint it bright white to open up the room."
    ],
    includes: [
      "Acoustic texture scraping and removal",
      "Ceiling drywall joint taping and skim coating",
      "Modern knockdown, orange peel, or smooth finish application",
      "Stain-blocking primer application",
      "Bright white flat ceiling paint"
    ],
    process: [
      {
        title: "Extensive containment and masking",
        text: "Floors and walls are completely draped in plastic. We create a sealed environment because the removal process creates significant mess."
      },
      {
        title: "Wetting and scraping",
        text: "The texture is misted with water to soften the bond, then carefully scraped away by hand to expose the bare drywall."
      },
      {
        title: "Skim coating and repair",
        text: "The underlying drywall joints are almost never finished properly under popcorn. We tape, mud, and skim the joints flat."
      },
      {
        title: "Re-texturing and painting",
        text: "We apply a modern texture (or full smooth skim coat), prime it to seal the mud, and finish with a dead-flat ceiling white."
      }
    ],
    problems: [
      {
        title: "Testing for asbestos in older homes",
        text: "Homes built before 1978 may contain asbestos in the acoustic texture. We require testing on older properties before any scraping begins."
      }
    ],
    timeline: "A whole-home removal, re-texture, and paint usually takes 4 to 6 days.",
    occupied: "Because of the required containment and dust, it is highly recommended the home is vacant or you have alternative accommodations during the messy scraping phase.",
    faqs: [
      {
        question: "Can I get a completely smooth ceiling?",
        answer: "Yes, but it requires a 'Level 5' skim coat across the entire ceiling to look perfect, which adds significant labor compared to a knockdown texture."
      },
      {
        question: "Can you just paint over popcorn ceilings?",
        answer: "We don't recommend it. Painting popcorn makes it nearly impossible to remove later without tearing the drywall paper, and it doesn't fix the dated look."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "Ready to instantly modernize your home? We handle the entire messy process so you don't have to.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"]
  },
  {
    slug: "wallpaper-removal",
    persona: "residential",
    category: "interior",
    name: "Wallpaper removal",
    serviceType: "Wallpaper Removal",
    title: "Wallpaper Removal Services in Lakewood Ranch & Sarasota | 4 The Love of Color",
    metaDescription: "Expert wallpaper stripping, glue removal, drywall repair, and repainting to refresh your interior walls.",
    h1: "Wallpaper removal in Lakewood Ranch & Sarasota.",
    intro: [
      "Taking down old wallpaper is rarely as simple as peeling it off. When walls aren't properly sized or primed before hanging, the adhesive bonds directly to the drywall paper, tearing the wall apart when removed.",
      "We professionally steam and strip old paper, meticulously scrub away the residual glue, repair the damaged drywall, and seal the wall with an oil-based primer so the new paint finish is flawless."
    ],
    includes: [
      "Wallpaper scoring, steaming, and stripping",
      "Adhesive and paste scrubbing/removal",
      "Skim coating torn drywall paper",
      "Oil-based sealing to lock down residual glue",
      "Final interior wall painting"
    ],
    process: [
      {
        title: "Scoring and steaming",
        text: "We score the paper and use commercial steamers or enzymatic removers to safely break the glue bond without gouging the wall."
      },
      {
        title: "Glue extraction",
        text: "Every trace of paste must be washed off the wall. Leftover glue will reactivate when wet paint hits it, causing a cracked, failed finish."
      },
      {
        title: "Skim coating and patching",
        text: "Any torn drywall paper or gouges are skimmed with joint compound and sanded flat."
      },
      {
        title: "Oil-based primer",
        text: "The bare wall is sealed with a stain-blocking oil or shellac primer to create a hard barrier between the old wall and new paint."
      }
    ],
    problems: [
      {
        title: "Paint cracking and alligatoring over old wallpaper",
        text: "This happens when someone paints directly over wallpaper glue. The water in the paint reactivates the paste. The fix requires oil-priming and skimming."
      }
    ],
    timeline: "Wallpaper removal is unpredictable. A single bathroom might take a day; a whole house could take a week just to prep.",
    occupied: "We mask the floors and work cleanly, so the home can remain occupied.",
    faqs: [
      {
        question: "Can't you just paint over the wallpaper?",
        answer: "If the paper is firmly bonded and has no seams lifting, it can sometimes be oil-primed and painted. However, we strongly recommend removal for a proper, long-lasting finish."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "Don't spend your weekend fighting with a scraper and torn drywall. Let us strip the paper and prep the walls properly.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"]
  },
  {
    slug: "paver-sealing",
    persona: "both",
    category: "exterior",
    name: "Paver cleaning & sealing",
    serviceType: "Paver Sealing",
    title: "Paver Cleaning & Sealing in Lakewood Ranch & Sarasota | 4 The Love of Color",
    metaDescription: "Restore and protect your driveway or pool deck with professional paver cleaning, re-sanding, and sealing in Lakewood Ranch.",
    h1: "Paver cleaning & sealing in Lakewood Ranch & Sarasota.",
    intro: [
      "Brick pavers fade, sink, and grow weeds when their protective seal breaks down. In the Florida sun and heavy summer rains, unsealed pavers quickly lose their rich color and structural sand joints.",
      "We deep clean your pavers, re-sand the joints to stabilize the blocks, and apply a premium commercial-grade sealer to enhance the color and protect against UV rays, oil spills, and weed growth."
    ],
    includes: [
      "Driveway and walkway paver sealing",
      "Pool deck and lanai paver restoration",
      "Deep pressure washing and algae removal",
      "Joint re-sanding for stability",
      "Clear, wet-look, or natural finish sealing"
    ],
    process: [
      {
        title: "Deep cleaning and weed removal",
        text: "We pressure wash the pavers using a surface cleaner to remove algae, dirt, and old failing sealer."
      },
      {
        title: "Joint re-sanding",
        text: "Once dry, we sweep fresh silica sand into the joints to lock the pavers in place and prevent shifting."
      },
      {
        title: "Flood-coat sealing",
        text: "We apply a heavy flood coat of premium water-based or solvent-based sealer to harden the sand joints and protect the brick surface."
      }
    ],
    problems: [
      {
        title: "Cloudy or white hazy pavers",
        text: "Caused by trapped moisture under cheap sealer, or applying sealer before the pavers were fully dry. We can strip failed sealer and restore the finish."
      }
    ],
    timeline: "Cleaning happens on day one. Re-sanding and sealing happens on day two once completely dry.",
    occupied: "Driveways cannot be driven on for 24-48 hours after sealing.",
    faqs: [
      {
        question: "Should I choose a natural or wet-look sealer?",
        answer: "Wet-look sealers enhance and darken the colors of the brick, making them pop. Natural sealers protect the brick without changing its dry appearance. It's purely aesthetic."
      },
      {
        question: "How often should pavers be resealed?",
        answer: "Every 2 to 3 years in Florida to maintain joint stability and color protection."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "Protect your expensive paver investment and bring the color back to life.",
    relatedGuides: ["how-often-to-repaint-a-florida-house"]
  },
  {
    slug: "commercial-painting",
    category: "core",
    name: "Commercial painting",
    serviceType: "Commercial painting",
    title: "Commercial Painters, Sarasota & Bradenton | 4 The Love of Color",
    metaDescription: "Commercial painters for Suncoast offices, storefronts, HOA communities and rental turnovers, scheduled around your hours.",
    h1: "Commercial painting across the Suncoast.",
    intro: [
      "Commercial painting is judged on disruption as much as on finish. The surfaces are often simpler than a house; the constraint is that the work has to happen around trading hours, tenants, residents or a handover date that will not move.",
      "So the scope and the schedule matter more than anything else. What gets painted, when access is available, what has to be usable the next morning — agreed in writing before anyone starts, because on a commercial job the expensive mistake is almost never the paint."
    ],
    includes: [
      "Offices, retail units and storefronts",
      "HOA and community association buildings, and common areas",
      "Property-management repaints and rental turnovers",
      "Restaurants and hospitality interiors, scheduled around service",
      "Corridors, stairwells, lobbies and other shared spaces"
    ],
    process: [
      {
        title: "Walk it and write the scope",
        text: "Every surface in and out of scope listed explicitly, along with access windows and any areas that must stay in use. Ambiguity in a commercial scope always surfaces later as a dispute about what was included."
      },
      {
        title: "Schedule around the operation",
        text: "Evenings, weekends, phased sections, or between tenancies — whatever keeps the business running. On occupied buildings the sequence gets planned so no area is out of use for longer than agreed."
      },
      {
        title: "Contain and protect",
        text: "Work areas separated from areas in use, floors and fittings protected, and clear routes kept safe for staff, customers and residents. On a live site this is a safety requirement, not just a courtesy."
      },
      {
        title: "Prepare to the same standard as residential",
        text: "Wash, repair, caulk, prime. High-traffic commercial surfaces take more abuse than domestic ones, so skipped preparation shows up faster here, not slower."
      },
      {
        title: "Coat with durability weighted first",
        text: "Corridors, stairwells and public areas need finishes that clean up and survive contact. Appearance matters, but a surface that cannot be wiped down looks worse within a year than one chosen for wear."
      },
      {
        title: "Hand back clean and on the agreed date",
        text: "Areas returned to use as they complete, and a walkthrough at the end against the written scope so sign-off is against something specific."
      }
    ],
    problems: [
      {
        title: "Turnover windows that are too short",
        text: "Rental and tenancy turnarounds run to fixed dates. The honest conversation is about what is genuinely achievable in the window rather than agreeing to it and then missing it."
      },
      {
        title: "Corridors and stairwells that scuff instantly",
        text: "Usually the wrong product for the traffic. High-contact shared areas need a washable, harder-wearing finish or they look tired within months of a repaint."
      },
      {
        title: "Community buildings with mismatched previous work",
        text: "Common areas repainted piecemeal over years end up with visible variation in color and sheen. Worth resolving as one scope rather than adding another patch to it."
      },
      {
        title: "Scope creep on occupied sites",
        text: "Requests accumulate once work is visible on site. Handled with written variations, so the price at the end is the price that was agreed plus what was actually authorised."
      }
    ],
    timeline: "Entirely dependent on size, access and how much work can run concurrently. A single retail unit or turnover may be a few days; a phased community or multi-building programme runs to a schedule agreed in advance. The estimate sets out the sequence, not just the total.",
    occupied: "Most commercial work happens in buildings that stay open. Out-of-hours and phased working are normal, and the scope states which areas are unavailable and when — so staff, tenants or residents can be told in advance rather than finding out on the day.",
    faqs: [
      {
        question: "Can you work outside business hours?",
        answer: "Yes — evenings, weekends and phased schedules are routine on occupied commercial sites. It is usually the difference between a repaint that disrupts trading and one that nobody notices happening."
      },
      {
        question: "Do you handle HOA and community association work?",
        answer: "Yes, including common areas and community buildings. These jobs generally need the schedule and the scope agreed with a board or manager rather than a single owner, and we will work to that process."
      },
      {
        question: "Can you turn around a rental between tenants?",
        answer: "That is a common job for us. Tell us the handover date at the walkthrough and we will tell you honestly whether the scope fits the window — a missed turnover date costs a landlord more than the paint."
      },
      {
        question: "How do you handle changes once work has started?",
        answer: "In writing, before the work happens. Additions get priced and authorised as variations so the final invoice matches what was agreed rather than arriving as a surprise."
      }
    ],
    image: null,
    imageAlt: "",
    closing: "Tell us the constraint — the trading hours, the handover date, the areas that cannot close — and we will build the scope and the schedule around it before quoting.",
    relatedGuides: ["house-painting-cost-lakewood-ranch-sarasota"]
  }
];

export const servicePageBySlug = (slug: string) =>
  servicePages.find((page) => page.slug === slug);
