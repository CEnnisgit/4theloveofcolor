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
      "Kitchen Cabinet Refinishing in Lakewood Ranch & Sarasota, FL | 4 The Love of Color Painting",
    metaDescription:
      "Cabinet refinishing for Lakewood Ranch, Sarasota and Bradenton kitchens — degreasing, deglossing, bonding primer and a sprayed finish that survives daily use. Free written estimates.",
    h1: "Kitchen cabinet refinishing in Lakewood Ranch & Sarasota.",
    intro: [
      "Refinishing the cabinets you already have costs a fraction of replacing them, and in most Florida kitchens the boxes are in far better shape than the finish suggests. If the carcasses are solid and the layout works, what you are unhappy with is almost always colour and wear — and that is a finishing problem, not a carpentry one.",
      "It is also the job where the gap between a good result and a bad one is widest. Cabinets get touched, wiped, splashed and knocked more than any other painted surface in a house. A finish that was not properly bonded will chip at the door edges within months, and there is no way to fix that other than stripping it back and starting again.",
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
        title: "Everything comes off and gets labelled",
        text: "Doors, drawer fronts and hardware are removed and numbered so every piece returns to the opening it was hung in. Doors that get shuffled between openings never sit quite right afterwards, and on a frameless kitchen the misalignment is obvious.",
      },
      {
        title: "Degreasing, then deglossing",
        text: "Kitchen cabinets carry an invisible film of cooking grease, heaviest around the range and above the hood. Paint does not stick to grease. Surfaces are cleaned with a degreaser first, then scuff-sanded to break the sheen so the primer has something mechanical to key into.",
      },
      {
        title: "Bonding primer, chosen for the substrate",
        text: "Factory-finished thermofoil, laminate, oak with open grain and previously painted wood each need a different primer. This is the single decision that determines whether the finish lasts — and the step most often skipped, because it is invisible in the finished job.",
      },
      {
        title: "Filling, sanding and grain management",
        text: "Dings and old hardware holes get filled. On open-grain oak, the grain telegraphs through paint unless it is filled and sanded flat first — some people want that texture, most are surprised by it, so it is worth deciding deliberately rather than discovering it at the end.",
      },
      {
        title: "Sprayed finish coats, sanded between",
        text: "Doors are sprayed off-site or in a controlled area rather than brushed in place. Brush marks on a cabinet door read as a repaint from across the room; a sprayed and levelled finish reads as new. Coats are sanded lightly between passes.",
      },
      {
        title: "Cure time before rehanging",
        text: "Cabinet coatings reach handling strength quickly but keep hardening for days or weeks. Doors are rehung once they can be handled safely, and we tell you when they can take normal use — stacking dishes against a finish that has not cured is how the first chips happen.",
      },
    ],
    problems: [
      {
        title: "Peeling at the door edges and around handles",
        text: "Almost always a bonding failure: the previous finish went over grease or a glossy factory surface without proper cleaning and priming. Touching up will not hold. Those areas need taking back to a sound surface and rebuilding.",
      },
      {
        title: "Yellowed or ambered white cabinets",
        text: "Some older white finishes shift yellow with age and UV, worst on the sides that catch daylight. It is a property of the old coating, not dirt, and no amount of cleaning reverses it. Refinishing does.",
      },
      {
        title: "Sticky or tacky surfaces long after painting",
        text: "Usually a finish that never cured properly, often a wall paint used on cabinetry. Wall paint stays soft by design so it can flex; cabinets need a coating that hardens.",
      },
      {
        title: "Doors that stick or no longer close flush",
        text: "Frequently paint build-up on the hinge side or in the door rebate from a previous repaint done without removing the doors. Worth correcting during refinishing while everything is off.",
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
          "Substantially, in most kitchens — you are paying for labour and materials rather than new casework, countertop removal and installation. It only stops making sense when the boxes themselves are failing, the layout needs changing, or water damage has gone into the carcass. We will say so at the walkthrough if that is what we find.",
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
      "Interior House Painting in Lakewood Ranch & Sarasota, FL | 4 The Love of Color Painting",
    metaDescription:
      "Interior painters for Lakewood Ranch, Sarasota and Bradenton homes — walls, ceilings, trim and doors, with low-odour products and careful protection in occupied homes.",
    h1: "Interior house painting in Lakewood Ranch & Sarasota.",
    intro: [
      "Interior painting is judged up close, in daylight, by someone who lives there. Cut lines where the wall meets the ceiling, the edge along the baseboard, whether the sheen is even across a long wall — those are what people notice a week later, and they come almost entirely from preparation and technique rather than from the paint.",
      "In this market there is also a specific and very common job: the first repaint of a production-built home. Builders spray a thin flat coat that marks if you look at it hard and cannot be washed. Replacing that with a properly applied washable finish is the single biggest improvement most newer homes here can get.",
    ],
    includes: [
      "Walls, ceilings, trim, baseboards, doors and door frames",
      "Whole-home repaints and single rooms",
      "Accent walls and colour changes",
      "Crown moulding, wainscoting and feature joinery",
      "Condo and apartment interiors, including HOA-scheduled buildings",
    ],
    process: [
      {
        title: "Protect first",
        text: "Furniture moved to the centre and covered, floors protected wall to wall, fixtures and hardware masked. Everything that follows creates dust or overspray, so this happens before anything else — not around it.",
      },
      {
        title: "Repair what the paint will otherwise magnify",
        text: "Nail pops, screw holes, hairline settlement cracks and dented corners get filled and sanded flush. Fresh paint does not hide a defect, it lights it — a flaw you stopped noticing on a tired wall becomes obvious on a new one.",
      },
      {
        title: "Caulk the joints that have opened",
        text: "Trim, baseboards and crown pull away from walls as a house moves. Those gaps are where an interior looks unfinished. Caulking them is what makes the difference between a room that has been painted and one that has been finished.",
      },
      {
        title: "Spot-prime stains and repairs",
        text: "Water marks, smoke, tannin bleed from wood and every patch of filler need priming before colour, or they flash through as dull patches or ghost back as stains no number of finish coats will bury.",
      },
      {
        title: "Cut and coat",
        text: "Edges cut by hand, walls rolled for consistent texture, and enough coats for genuine coverage — dark-to-light changes and strong colours frequently need more than two regardless of what the tin claims.",
      },
      {
        title: "Put the room back",
        text: "Hardware refitted, furniture returned, floors cleared, site tidied. Every day, not just at the end.",
      },
    ],
    problems: [
      {
        title: "Builder-grade flat that will not wash",
        text: "Standard on newer homes here. Scuffs and handprints cannot be cleaned off without burnishing a shiny patch into the wall. The fix is a washable finish, not more of the same.",
      },
      {
        title: "Recurring bathroom and laundry marks",
        text: "Persistent spotting in wet rooms points at ventilation as much as at paint. The right sheen and product help; if the room is not clearing moisture, they only slow the return.",
      },
      {
        title: "Ceiling stains that come back",
        text: "A stain that returns through fresh paint has an active source or was never sealed with a stain-blocking primer. Painting it again without addressing that is money spent twice.",
      },
      {
        title: "Patches that flash in daylight",
        text: "Repairs that were filled but not primed absorb differently from the wall around them, so they show as dull marks in raking light. It is a preparation gap, not a paint fault.",
      },
    ],
    timeline:
      "Single rooms are usually a day or two. Whole-home interiors typically run one to two weeks depending on square footage, ceiling height, how much trim there is, and the amount of repair work. Colour changes across a wide gap — dark to white especially — add coats and therefore days.",
    occupied:
      "Most of our interior work happens in homes people are living in. We work room by room where that suits you, keep low-VOC and low-odour products as the default so rooms stay usable, and protect and restore each space rather than treating the whole house as a site. Pets and working-from-home schedules are worth mentioning at the walkthrough so the sequence can be planned around them.",
    faqs: [
      {
        question: "Do we need to move out while you paint?",
        answer:
          "Almost never. We work in sections so you keep the use of the house, and low-odour products mean rooms are usable again quickly. Whole-home repaints in empty properties move faster, but living in the house does not stop the job.",
      },
      {
        question: "Do you move furniture?",
        answer:
          "We move what is reasonable — furniture to the centre of the room and covered. Very heavy, fragile or high-value items are worth discussing at the walkthrough so it is clear in advance who is moving what.",
      },
      {
        question: "How many coats will my walls need?",
        answer:
          "Two is typical over a sound existing colour. Significant colour changes, strong or deep colours, and any wall with heavy repair work regularly need more. We scope for what the wall needs rather than a fixed number, and the estimate says which.",
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
      "Exterior House Painting in Lakewood Ranch & Sarasota, FL | 4 The Love of Color Painting",
    metaDescription:
      "Exterior painters for Lakewood Ranch, Sarasota and Bradenton — stucco crack repair, pressure washing, sealing and weather-rated coatings built for Florida sun and salt air.",
    h1: "Exterior house painting in Lakewood Ranch & Sarasota.",
    intro: [
      "An exterior repaint in Florida is protection first and appearance second. Sun, driving summer rain, humidity and — closer to the coast — salt are all working on the building envelope continuously, and the coating is most of what stands between them and the substrate.",
      "That is why exterior work is overwhelmingly about preparation. Washing, crack repair, sealing and priming are the parts that decide whether the finish lasts, and they are also the parts that are invisible the day the job finishes. A cheap exterior quote is almost always a quote with those steps thinned out.",
    ],
    includes: [
      "Stucco, block, siding, and hardboard",
      "Trim, fascia, soffits, garage doors and front doors",
      "Driveway-facing elevations, gables and decorative detail",
      "Lanais, pool cages, railings and exterior structures",
      "HOA communities and multi-property exteriors",
    ],
    process: [
      {
        title: "Wash and let it dry",
        text: "Chalked coating, dirt, mildew and salt film all prevent adhesion. The surface is washed down and then given time to dry properly — painting a stucco wall that is still holding water traps moisture behind the new coat, which is a blistering failure waiting to happen.",
      },
      {
        title: "Repair the stucco",
        text: "Hairline cracking is normal as block settles and expands. Painting over it means the crack telegraphs straight back through within a season. Cracks are opened where needed, patched, and bridged with an appropriate elastomeric or flexible product so the wall can move without splitting the finish.",
      },
      {
        title: "Deal with the wood before it spreads",
        text: "Soffit and fascia take on water at the joints, especially on older homes. Soft or rotten wood is identified at the walkthrough and flagged to you, because paint over soft wood is money thrown away and the rot continues underneath it.",
      },
      {
        title: "Caulk and seal the openings",
        text: "Window and door perimeters, penetrations and control joints are where water gets in. Failed caulk is resealed with the right sealant for the joint — this is as much waterproofing as it is painting.",
      },
      {
        title: "Prime what needs priming",
        text: "Bare stucco, exposed wood, patched areas, chalky substrates and any stain or rust bleed get primed. Not the whole house as a matter of routine — where the surface actually calls for it.",
      },
      {
        title: "Coat, with the elevations in mind",
        text: "Weather-rated products applied at proper coverage. West and south elevations take the hardest UV load and are the first to fade, so deep colours in particular need coatings rated for it or one wall ends up visibly lighter than the rest.",
      },
    ],
    problems: [
      {
        title: "Peeling and blistering off stucco",
        text: "Usually moisture behind the coating or paint applied over a chalked, unwashed surface. Recoating without finding the cause repeats the failure on the same schedule.",
      },
      {
        title: "Cracks reappearing after a repaint",
        text: "The crack was covered rather than bridged. Stucco moves; a rigid film over a live crack splits again along the same line.",
      },
      {
        title: "Chalking that comes off on your hand",
        text: "The binder in the old coating has broken down under UV. Nothing will bond to it until it is washed off properly — this is the most common reason a repaint fails early here.",
      },
      {
        title: "Rust bleed and staining near fixings",
        text: "Common closer to the water, where salt accelerates corrosion at fasteners and railings. Needs treating and spot-priming with a stain-blocking primer, or it bleeds through the new finish within months.",
      },
    ],
    timeline:
      "Most single-family exteriors run several days to a couple of weeks depending on size, storeys, surface condition and how much repair the walls need. Weather sets the real pace — summer afternoon storms and high humidity both extend drying windows, and we would rather lose an afternoon than coat a damp wall.",
    occupied:
      "Exterior work barely touches daily life. We need access around the building, driveways clear where we are working, and irrigation off on the elevations in progress so sprinklers do not spray a curing coat. Windows and doors on an active elevation stay closed for the day. Otherwise the house runs normally.",
    faqs: [
      {
        question: "How often should a Florida house be repainted?",
        answer:
          "It varies more than people expect. Sun exposure, how close you are to the water, the substrate, the colour and — most of all — how well the last repaint was prepared. A well-prepared stucco exterior lasts considerably longer than a poorly prepared one on the same street. Rather than quote a number, we would rather look at yours: chalking, hairline cracking and fading on the west elevation are the signals worth checking.",
      },
      {
        question: "Do you pressure wash before painting?",
        answer:
          "Always, and then we let it dry. Washing is not a cosmetic step — it removes the chalk, mildew and salt film that stop paint bonding. Painting over an unwashed exterior is the single most common reason a repaint fails early.",
      },
      {
        question: "Can you paint in the summer rainy season?",
        answer:
          "Yes, with planning. Work gets scheduled around the afternoon storm pattern and we watch drying windows rather than pushing coats on before the surface is ready. It means occasional lost afternoons, which is a better trade than a coating applied over damp stucco.",
      },
      {
        question: "Our community has to approve the colour first. Can you help?",
        answer:
          "We can talk you through what your community's palette allows and help you choose within it — most villages around Lakewood Ranch restrict exterior colours and require review before work starts. Whether we prepare and submit the approval paperwork on your behalf is worth asking us directly.",
      },
    ],
    image: "/images/proj-exterior-white-2story.jpg",
    imageAlt:
      "Large two-story white Florida home with a three-car garage, tile roof and paver driveway, freshly repainted",
    closing:
      "Exterior quotes are hard to compare because the preparation is where they differ and it is the part nobody itemises. Ask us what we would do to your walls before any colour goes on — the answer is the quote.",
  },
  {
    slug: "commercial-painting",
    name: "Commercial painting",
    serviceType: "Commercial painting",
    title:
      "Commercial Painting in Lakewood Ranch, Sarasota & Bradenton, FL | 4 The Love of Color Painting",
    metaDescription:
      "Commercial painters for Suncoast offices, storefronts, HOA communities and rental turnovers — scheduled around trading hours and tenancies, with clear written scopes.",
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
        text: "Common areas repainted piecemeal over years end up with visible variation in colour and sheen. Worth resolving as one scope rather than adding another patch to it.",
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
