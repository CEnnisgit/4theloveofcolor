/**
 * Per-city landing pages.
 *
 * Local search for "painters in <town>" is won by pages that are genuinely
 * about that town. Google demotes near-duplicate "doorway pages" — a template
 * with the city name swapped in is worse than having no page at all — so every
 * entry below carries real, specific detail: the housing stock, the architecture,
 * the conditions that actually change how a paint job is scoped there.
 *
 * When adding a city, write the `intro`, `considerations`, and `closing` from
 * scratch. If there is nothing specific to say about a town, leave it out and
 * let the service-area section on the home page cover it.
 */

export type CityPage = {
  /** URL segment: /painters/<slug> */
  slug: string;
  city: string;
  /** County, for schema and copy. */
  county: string;
  /** <title> — leads with the search term people actually type. */
  title: string;
  metaDescription: string;
  h1: string;
  /** Two or three paragraphs on this specific market. */
  intro: string[];
  /** What's different about painting here, concretely. */
  considerations: { title: string; text: string }[];
  /** Named areas within the city, for long-tail search. */
  areas: string[];
  /** Closing paragraph before the call to action. */
  closing: string;
};

export const cityPages: CityPage[] = [
  {
    slug: "lakewood-ranch",
    city: "Lakewood Ranch",
    county: "Manatee County",
    title: "House Painters in Lakewood Ranch, FL | 4 The Love of Color Painting",
    metaDescription:
      "Family-owned interior & exterior painters in Lakewood Ranch, FL. Stucco repaints, HOA-conscious color work, cabinet refinishing. Free written estimates — call (917) 584-0069.",
    h1: "House painters in Lakewood Ranch, Florida.",
    intro: [
      "Lakewood Ranch is where we're based, and it's the community we know best. It is also unlike most places we work: nearly everything here was built from the 1990s onward as part of a master-planned village, which means block-and-stucco construction, tile roofs, and a fairly consistent set of surfaces to prepare.",
      "That consistency cuts both ways. The prep is predictable, but the color decisions are not — most villages here sit under an HOA with an approved palette, and a color that looks right on a fan deck can read completely differently across a wide stucco elevation in full Florida sun. We walk the elevation with you at the time of day you actually see it.",
    ],
    considerations: [
      {
        title: "Stucco is its own craft",
        text: "Hairline cracking in stucco is normal here as block settles and expands. Painting over it without patching and bridging means the crack telegraphs straight back through the new coat within a season. We patch, seal, and prime before color goes on.",
      },
      {
        title: "Community color palettes",
        text: "Most villages restrict exterior colors to an approved range and require review before work starts. We'll help you understand what your community allows and pick something that still feels like yours inside those limits.",
      },
      {
        title: "West-facing elevations fade first",
        text: "Afternoon sun on a west or south wall is brutal on pigment. Deeper colors in particular need coatings rated for it, or one wall ends up visibly lighter than the rest of the house in a few years.",
      },
      {
        title: "Newer homes, builder-grade paint",
        text: "Production builders spray a thin, flat coat that scuffs easily and does not wash. A first repaint with a proper washable finish is the single biggest improvement most Lakewood Ranch interiors can get.",
      },
    ],
    areas: [
      "Country Club East",
      "The Lake Club",
      "Greenbrook",
      "Summerfield",
      "Riverwalk",
      "Del Webb",
      "Lorraine Lakes",
      "Waterside",
      "Esplanade",
      "Central Park",
      "Mallory Park",
      "Indigo",
    ],
    closing:
      "We live and work here, so our estimates are honest about what your home actually needs — not padded, and not cut so thin that the prep gets skipped. Walkthroughs are free and there's no pressure attached to them.",
  },
  {
    slug: "sarasota",
    city: "Sarasota",
    county: "Sarasota County",
    title: "House Painters in Sarasota, FL | 4 The Love of Color Painting",
    metaDescription:
      "Interior & exterior painters in Sarasota, FL. Midcentury and historic homes, downtown condos, coastal exteriors, cabinet refinishing. Free estimates — call (917) 584-0069.",
    h1: "House painters in Sarasota, Florida.",
    intro: [
      "Sarasota is the most architecturally varied market we work in, and it changes how a job gets scoped. A 1950s Sarasota School home with wide eaves and original wood detail needs a completely different approach from a downtown condo interior or a newer build out east.",
      "Older Sarasota housing stock also means older paint. Homes built before 1978 can carry lead-based paint under later coats, which changes how surfaces must be prepared. We take that seriously rather than sanding blind into an unknown substrate.",
    ],
    considerations: [
      {
        title: "Salt air west of the Trail",
        text: "Closer to the bay and out toward the keys, salt accelerates everything — chalking, rust bleed from fasteners, coating failure at exposed edges. Surfaces need washing down properly and coatings chosen for marine exposure, not just sun.",
      },
      {
        title: "Midcentury detail takes a brush",
        text: "Wide overhangs, exposed beams and original window frames are what make these houses worth looking at. They want careful hand-work rather than a quick spray, and that's where most of the value in the job sits.",
      },
      {
        title: "Pre-1978 homes and lead paint",
        text: "Older coats may contain lead. That dictates containment and dust control during prep — worth knowing before anyone starts sanding a 1950s exterior.",
      },
      {
        title: "Condo and HOA scheduling",
        text: "Downtown and key buildings usually have rules about work hours, elevator use, and lift access. Sorting that out before day one is what keeps an interior repaint from stalling halfway through.",
      },
    ],
    areas: [
      "Downtown Sarasota",
      "Southside Village",
      "Arlington Park",
      "Gulf Gate",
      "Palmer Ranch",
      "Siesta Key",
      "Lido Key",
      "Laurel Park",
      "Bird Key",
      "The Meadows",
    ],
    closing:
      "Whether it's a full exterior on an older home or a single set of cabinets, we'll tell you plainly what the surface needs and what it doesn't. Free walkthrough, written quote, no pressure.",
  },
  {
    slug: "bradenton",
    city: "Bradenton",
    county: "Manatee County",
    title: "House Painters in Bradenton, FL | 4 The Love of Color Painting",
    metaDescription:
      "Family-owned painters in Bradenton, FL. Exterior repaints, older-home restoration, interiors, cabinets. Honest written estimates — call (917) 584-0069.",
    h1: "House painters in Bradenton, Florida.",
    intro: [
      "Bradenton has the oldest houses we regularly work on, and that changes the job. Plenty of them are on their fourth or fifth repaint, so what's already on the wall matters more than what goes on top of it.",
      "A lot of our Bradenton work is repair before paint — old caulk that's given up, chalked-out paint, and previous jobs that went on without much prep. Painting straight over that buys you a year or two at best.",
    ],
    considerations: [
      {
        title: "Old paint that's letting go",
        text: "Chalking, cracking and peeling all mean the paint that's there has lost its grip. It has to come off or be sealed down properly — a new coat over a failing one fails right along with it.",
      },
      {
        title: "Block and older siding",
        text: "Mid-century block and older siding want different primers and different crack treatment. Getting that wrong is the usual reason a repaint here doesn't last.",
      },
      {
        title: "Salt out toward the water",
        text: "Head west toward Cortez, Palma Sola and Anna Maria and the salt picks up. Everything weathers faster out there, and the same house a few miles inland is an easier job.",
      },
      {
        title: "Straight answers on older homes",
        text: "Older houses turn up surprises. We'd rather tell you what we find and let you decide than quote a low number and come back asking for more halfway through.",
      },
    ],
    areas: [
      "Downtown Bradenton",
      "Village of the Arts",
      "West Bradenton",
      "Bayshore Gardens",
      "Cortez",
      "Palma Sola",
      "Braden River",
      "Anna Maria Island",
    ],
    closing:
      "We're a family business and most of our work comes from people who tell their neighbors about us. That only happens if the job holds up, so we scope it to hold up.",
  },
  {
    slug: "venice",
    city: "Venice",
    county: "Sarasota County",
    title: "House Painters in Venice, FL | 4 The Love of Color Painting",
    metaDescription:
      "Interior & exterior painters serving Venice, FL. Coastal exteriors, low-odour interior work, cabinet refinishing. Free written estimates — call (917) 584-0069.",
    h1: "House painters in Venice, Florida.",
    intro: [
      "Venice sits close enough to the Gulf that salt exposure drives most exterior decisions, and its housing runs from mid-century island homes to newer communities inland along the river.",
      "The island in particular has a defined architectural character the city has protected for decades, which makes color choices there more consequential than in a newer inland community. Getting a Venice exterior right is as much about restraint as anything.",
    ],
    considerations: [
      {
        title: "Gulf salt exposure",
        text: "Coastal exteriors chalk and fail at the edges faster. Thorough washing and coatings rated for salt exposure are the difference between a repaint that lasts and one that doesn't.",
      },
      {
        title: "Island architectural character",
        text: "Venice has guarded a consistent look on the island for a long time. We'll help you land on something that suits the house and the street rather than fighting both.",
      },
      {
        title: "Low-odour interiors",
        text: "A lot of our Venice interior work happens in occupied homes. Low-VOC, low-odour products mean you can keep living in the house while we work in it.",
      },
      {
        title: "Seasonal scheduling",
        text: "Plenty of homes here are seasonal. We're used to working to a window before or after the owners are in residence, and to being trusted with an empty house.",
      },
    ],
    areas: [
      "Venice Island",
      "Venice Gardens",
      "South Venice",
      "Nokomis",
      "Laurel",
      "Jacaranda",
      "Wellen Park",
    ],
    closing:
      "Same approach wherever we work: a free walkthrough, a written price, careful prep, and a finished job we walk together before you pay the balance.",
  },
];

export const cityPageBySlug = (slug: string) =>
  cityPages.find((page) => page.slug === slug);
