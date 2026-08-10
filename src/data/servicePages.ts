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
};

export const servicePages: ServicePage[] = [
  {
    slug: "cabinet-refinishing",
    name: "Cabinet refinishing",
    serviceType: "Kitchen cabinet refinishing",
    title:
      "Cabinet Refinishing, Lakewood Ranch FL | 4 The Love of Color",
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
        question: "Is refinishing cheaper than replacing cabinets?",
        answer:
          "Substantially, in most kitchens — you are paying for labor and materials rather than new casework, countertop removal and installation. It only stops making sense when the boxes themselves are failing, the layout needs changing, or water damage has gone into the carcass. We will say so at the walkthrough if that is what we find.",
      },
      {
        question: "Can you refinish thermofoil or laminate cabinets?",
        answer:
          "Usually yes, with the right bonding primer — these surfaces are non-porous, so adhesion depends entirely on preparation and primer choice. Where thermofoil has already lifted or peeled away from the substrate, that door needs replacing rather than refinishing; a lifted edge cannot be painted back down.",
      },
      {
        question: "Will the grain still show through on oak cabinets?",
        answer:
          "Only if you want it to. Open-grain oak shows its texture through paint unless the grain is filled and sanded flat first. That is extra work, so it is a decision worth making up front — some people like the character, others expect a modern flat finish and are disappointed to see grain in it.",
      },
      {
        question: "How soon can we use the kitchen normally again?",
        answer:
          "Doors go back on once the finish can be handled safely, but cabinet coatings keep hardening for a while after that. We will tell you when yours is ready for normal use, including stacking things against the interiors — early heavy use is the most common cause of first-year chipping.",
      },
      {
        question: "Do you spray or brush cabinets?",
        answer:
          "Doors and drawer fronts are sprayed, which is what gives a cabinet its smooth, factory-like surface. Face frames and boxes are done in place with the area masked off. A brushed cabinet door is visible as a repaint from across the room.",
      },
    ],
    // No cabinet photograph exists in public/images yet — every project photo
    // is an exterior or a room. Showing an unrelated interior here would imply
    // work we cannot evidence, so the page runs without a hero image until a
    // real cabinet job is photographed. This is the single highest-value photo
    // the business could take: see LAUNCH.md.
    image: null,
    imageAlt: "",
    closing:
      "If you are weighing refinishing against replacement, the walkthrough is the fastest way to settle it. We will look at the boxes, the doors and the current finish and tell you plainly which one your kitchen justifies — including when the answer is replacement.",
  },
  {
    slug: "interior-painting",
    name: "Interior painting",
    serviceType: "Interior residential painting",
    title:
      "Interior House Painters, Lakewood Ranch | 4 The Love of Color",
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
        question: "Do we need to move out while you paint?",
        answer:
          "Almost never. We work in sections so you keep the use of the house, and low-odor products mean rooms are usable again quickly. Whole-home repaints in empty properties move faster, but living in the house does not stop the job.",
      },
      {
        question: "Do you move furniture?",
        answer:
          "We move what is reasonable — furniture to the centre of the room and covered. Very heavy, fragile or high-value items are worth discussing at the walkthrough so it is clear in advance who is moving what.",
      },
      {
        question: "How many coats will my walls need?",
        answer:
          "Two is typical over a sound existing color. Significant color changes, strong or deep colors, and any wall with heavy repair work regularly need more. We scope for what the wall needs rather than a fixed number, and the estimate says which.",
      },
      {
        question: "What sheen should I use where?",
        answer:
          "Broadly: flat or matte hides wall imperfections but does not clean well; eggshell and satin are the usual living-area compromise; kitchens, bathrooms and trim want something harder and more washable. Traffic, light and how forgiving the wall surface is all shift the answer, so it is worth walking through room by room.",
      },
    ],
    image: "/images/proj-interior-bedroom.jpg",
    imageAlt:
      "Bedroom interior with warm greige walls, bright white crown molding and a smooth tray ceiling, freshly painted",
    closing:
      "Whether it is one room or the whole house, the walkthrough is free and we will be straight with you about what the surfaces need — including where you can spend less.",
  },
  {
    slug: "exterior-painting",
    name: "Exterior painting",
    serviceType: "Exterior residential painting",
    title:
      "Exterior House Painters, Lakewood Ranch | 4 The Love of Color",
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
        question: "How often should a Florida house be repainted?",
        answer:
          "It varies more than people expect — sun exposure, how close you are to the water, the color, and mostly how well the last paint job was prepped. Two houses on the same street can be years apart. We'd rather look at yours than give you a number: chalking, cracks in the stucco and fading on the west side are the things to watch for.",
      },
      {
        question: "Do you pressure wash before painting?",
        answer:
          "Always, and then we let it dry properly. Washing isn't just to make it look nice — it takes off the chalk, mildew and salt that stop paint from sticking. Skipping it is the most common reason a repaint doesn't last.",
      },
      {
        question: "Can you paint during the summer rainy season?",
        answer:
          "Yes, we just plan around it. We work with the afternoon storms rather than against them and keep an eye on drying time. It costs the odd afternoon, which beats putting paint on a damp wall.",
      },
      {
        question: "Our community has to approve the color first. Can you help?",
        answer:
          "Happy to. Most villages around Lakewood Ranch have an approved palette and want the color signed off before work starts, and we can walk you through what yours allows and help you pick something you actually like inside it. Just ask us about the paperwork side and we'll tell you where we can help.",
      },
    ],
    image: "/images/proj-exterior-white-2story.jpg",
    imageAlt:
      "Large two-story white Florida home with a three-car garage, tile roof and paver driveway, freshly repainted",
    closing:
      "Exterior quotes are hard to compare because the preparation is where they differ and it is the part nobody itemizes. Ask us what we would do to your walls before any color goes on — the answer is the quote.",
  },
  {
    slug: "commercial-painting",
    name: "Commercial painting",
    serviceType: "Commercial painting",
    title:
      "Commercial Painters, Sarasota & Bradenton | 4 The Love of Color",
    metaDescription:
      "Commercial painters for Suncoast offices, storefronts, HOA communities and rental turnovers, scheduled around your hours.",
    h1: "Commercial painting across the Suncoast.",
    intro: [
      "Commercial painting is judged on disruption as much as on finish. The surfaces are often simpler than a house; the constraint is that the work has to happen around trading hours, tenants, residents or a handover date that will not move.",
      "So the scope and the schedule matter more than anything else. What gets painted, when access is available, what has to be usable the next morning — agreed in writing before anyone starts, because on a commercial job the expensive mistake is almost never the paint.",
    ],
    includes: [
      "Offices, retail units and storefronts",
      "HOA and community association buildings, and common areas",
      "Property-management repaints and rental turnovers",
      "Restaurants and hospitality interiors, scheduled around service",
      "Corridors, stairwells, lobbies and other shared spaces",
    ],
    process: [
      {
        title: "Walk it and write the scope",
        text: "Every surface in and out of scope listed explicitly, along with access windows and any areas that must stay in use. Ambiguity in a commercial scope always surfaces later as a dispute about what was included.",
      },
      {
        title: "Schedule around the operation",
        text: "Evenings, weekends, phased sections, or between tenancies — whatever keeps the business running. On occupied buildings the sequence gets planned so no area is out of use for longer than agreed.",
      },
      {
        title: "Contain and protect",
        text: "Work areas separated from areas in use, floors and fittings protected, and clear routes kept safe for staff, customers and residents. On a live site this is a safety requirement, not just a courtesy.",
      },
      {
        title: "Prepare to the same standard as residential",
        text: "Wash, repair, caulk, prime. High-traffic commercial surfaces take more abuse than domestic ones, so skipped preparation shows up faster here, not slower.",
      },
      {
        title: "Coat with durability weighted first",
        text: "Corridors, stairwells and public areas need finishes that clean up and survive contact. Appearance matters, but a surface that cannot be wiped down looks worse within a year than one chosen for wear.",
      },
      {
        title: "Hand back clean and on the agreed date",
        text: "Areas returned to use as they complete, and a walkthrough at the end against the written scope so sign-off is against something specific.",
      },
    ],
    problems: [
      {
        title: "Turnover windows that are too short",
        text: "Rental and tenancy turnarounds run to fixed dates. The honest conversation is about what is genuinely achievable in the window rather than agreeing to it and then missing it.",
      },
      {
        title: "Corridors and stairwells that scuff instantly",
        text: "Usually the wrong product for the traffic. High-contact shared areas need a washable, harder-wearing finish or they look tired within months of a repaint.",
      },
      {
        title: "Community buildings with mismatched previous work",
        text: "Common areas repainted piecemeal over years end up with visible variation in color and sheen. Worth resolving as one scope rather than adding another patch to it.",
      },
      {
        title: "Scope creep on occupied sites",
        text: "Requests accumulate once work is visible on site. Handled with written variations, so the price at the end is the price that was agreed plus what was actually authorised.",
      },
    ],
    timeline:
      "Entirely dependent on size, access and how much work can run concurrently. A single retail unit or turnover may be a few days; a phased community or multi-building programme runs to a schedule agreed in advance. The estimate sets out the sequence, not just the total.",
    occupied:
      "Most commercial work happens in buildings that stay open. Out-of-hours and phased working are normal, and the scope states which areas are unavailable and when — so staff, tenants or residents can be told in advance rather than finding out on the day.",
    faqs: [
      {
        question: "Can you work outside business hours?",
        answer:
          "Yes — evenings, weekends and phased schedules are routine on occupied commercial sites. It is usually the difference between a repaint that disrupts trading and one that nobody notices happening.",
      },
      {
        question: "Do you handle HOA and community association work?",
        answer:
          "Yes, including common areas and community buildings. These jobs generally need the schedule and the scope agreed with a board or manager rather than a single owner, and we will work to that process.",
      },
      {
        question: "Can you turn around a rental between tenants?",
        answer:
          "That is a common job for us. Tell us the handover date at the walkthrough and we will tell you honestly whether the scope fits the window — a missed turnover date costs a landlord more than the paint.",
      },
      {
        question: "How do you handle changes once work has started?",
        answer:
          "In writing, before the work happens. Additions get priced and authorised as variations so the final invoice matches what was agreed rather than arriving as a surprise.",
      },
    ],
    image: "/images/proj-exterior-modern.jpg",
    imageAlt:
      "Freshly painted single-story Florida property with soft gray stucco, white trim and a barrel-tile roof",
    closing:
      "Tell us the constraint — the trading hours, the handover date, the areas that cannot close — and we will build the scope and the schedule around it before quoting.",
  },
];

export const servicePageBySlug = (slug: string) =>
  servicePages.find((page) => page.slug === slug);
