/**
 * Per-city landing pages.
 */

export type CityPage = {
  /** URL segment: /locations/<slug> */
  slug: string;
  city: string;
  county: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  considerations: { title: string; text: string }[];
  areas: string[];
  closing: string;
};

export const cityPages: CityPage[] = [
  {
    slug: "lakewood-ranch",
    city: "Lakewood Ranch",
    county: "Manatee County",
    title: "House Painters in Lakewood Ranch, FL | 4 The Love of Color",
    metaDescription:
      "Family-owned painters in Lakewood Ranch, FL. Stucco repaints, HOA color work and cabinet refinishing. Free written estimates.",
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
    title: "House Painters in Sarasota, FL | 4 The Love of Color",
    metaDescription:
      "Interior & exterior painters in Sarasota, FL. Midcentury homes, downtown condos, coastal exteriors and cabinet refinishing. Free estimates.",
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
    title: "House Painters in Bradenton, FL | 4 The Love of Color",
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
    title: "House Painters in Venice, FL | 4 The Love of Color",
    metaDescription:
      "Interior & exterior painters serving Venice, FL. Coastal exteriors, low-odor interior work and cabinet refinishing. Free estimates.",
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
        title: "Low-odor interiors",
        text: "A lot of our Venice interior work happens in occupied homes. Low-VOC, low-odor products mean you can keep living in the house while we work in it.",
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
  {
    slug: "the-lake-club",
    city: "The Lake Club",
    county: "Manatee County",
    title: "House Painters in The Lake Club, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving The Lake Club, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in The Lake Club, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, The Lake Club features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of The Lake Club. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for The Lake Club, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["The Lake Club", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in The Lake Club with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "country-club-east",
    city: "Country Club East",
    county: "Manatee County",
    title: "House Painters in Country Club East, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Country Club East, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Country Club East, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Country Club East features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Country Club East. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Country Club East, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Country Club East", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Country Club East with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "waterside",
    city: "Waterside",
    county: "Manatee County",
    title: "House Painters in Waterside, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Waterside, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Waterside, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Waterside features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Waterside. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Waterside, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Waterside", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Waterside with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "esplanade",
    city: "Esplanade",
    county: "Manatee County",
    title: "House Painters in Esplanade, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Esplanade, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Esplanade, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Esplanade features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Esplanade. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Esplanade, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Esplanade", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Esplanade with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "esplanade-at-azario",
    city: "Esplanade at Azario",
    county: "Manatee County",
    title: "House Painters in Esplanade at Azario, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Esplanade at Azario, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Esplanade at Azario, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Esplanade at Azario features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Esplanade at Azario. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Esplanade at Azario, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Esplanade at Azario", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Esplanade at Azario with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "lakewood-national",
    city: "Lakewood National",
    county: "Manatee County",
    title: "House Painters in Lakewood National, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Lakewood National, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Lakewood National, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Lakewood National features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Lakewood National. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Lakewood National, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Lakewood National", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Lakewood National with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "star-farms",
    city: "Star Farms",
    county: "Manatee County",
    title: "House Painters in Star Farms, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Star Farms, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Star Farms, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Star Farms features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Star Farms. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Star Farms, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Star Farms", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Star Farms with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "lorraine-lakes",
    city: "Lorraine Lakes",
    county: "Manatee County",
    title: "House Painters in Lorraine Lakes, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Lorraine Lakes, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Lorraine Lakes, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Lorraine Lakes features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Lorraine Lakes. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Lorraine Lakes, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Lorraine Lakes", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Lorraine Lakes with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "del-webb",
    city: "Del Webb",
    county: "Manatee County",
    title: "House Painters in Del Webb, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Del Webb, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Del Webb, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Del Webb features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Del Webb. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Del Webb, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Del Webb", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Del Webb with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "cresswind",
    city: "Cresswind",
    county: "Manatee County",
    title: "House Painters in Cresswind, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Cresswind, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Cresswind, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Cresswind features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Cresswind. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Cresswind, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Cresswind", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Cresswind with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "sweetwater",
    city: "Sweetwater",
    county: "Manatee County",
    title: "House Painters in Sweetwater, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Sweetwater, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Sweetwater, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Sweetwater features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Sweetwater. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Sweetwater, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Sweetwater", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Sweetwater with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "sapphire-point",
    city: "Sapphire Point",
    county: "Manatee County",
    title: "House Painters in Sapphire Point, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Sapphire Point, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Sapphire Point, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Sapphire Point features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Sapphire Point. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Sapphire Point, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Sapphire Point", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Sapphire Point with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "greenbrook",
    city: "Greenbrook",
    county: "Manatee County",
    title: "House Painters in Greenbrook, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Greenbrook, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Greenbrook, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Greenbrook features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Greenbrook. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Greenbrook, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Greenbrook", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Greenbrook with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "riverwalk",
    city: "Riverwalk",
    county: "Manatee County",
    title: "House Painters in Riverwalk, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Riverwalk, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Riverwalk, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Riverwalk features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Riverwalk. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Riverwalk, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Riverwalk", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Riverwalk with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "summerfield",
    city: "Summerfield",
    county: "Manatee County",
    title: "House Painters in Summerfield, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Summerfield, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Summerfield, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Summerfield features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Summerfield. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Summerfield, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Summerfield", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Summerfield with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "central-park",
    city: "Central Park",
    county: "Manatee County",
    title: "House Painters in Central Park, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Central Park, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Central Park, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Central Park features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Central Park. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Central Park, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Central Park", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Central Park with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "mallory-park",
    city: "Mallory Park",
    county: "Manatee County",
    title: "House Painters in Mallory Park, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Mallory Park, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Mallory Park, Florida.",
    intro: [
      "As a premier neighborhood in Lakewood Ranch, Mallory Park features stunning homes that require expert care to maintain their value. Most properties here adhere to strict community standards and HOA guidelines.",
      "We specialize in repainting block-and-stucco construction typical of Mallory Park. From bridging hairline settlement cracks to applying UV-resistant coatings, we ensure your home looks flawless while meeting all community architectural requirements."
    ],
    considerations: [
      {
            "title": "HOA Color Compliance",
            "text": "We help navigate the specific approved color palettes for Mallory Park, ensuring a seamless approval process."
      },
      {
            "title": "Stucco Settlement Cracks",
            "text": "Newer block construction naturally settles, leading to hairline stucco cracks. We patch and seal these with elastomeric compounds before painting."
      },
      {
            "title": "Intense Florida Sun Exposure",
            "text": "West and South facing elevations in Lakewood Ranch take a beating from UV rays. We use premium paints designed to resist fading and chalking."
      },
      {
            "title": "Premium Interior Finishes",
            "text": "We upgrade builder-grade flat paints to washable, high-quality finishes that actually protect your interior walls."
      }
    ],
    areas: ["Mallory Park", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Mallory Park with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "bird-key",
    city: "Bird Key",
    county: "Sarasota County",
    title: "House Painters in Bird Key, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Bird Key, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Bird Key, Florida.",
    intro: [
      "Bird Key features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Bird Key. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Bird Key exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Bird Key", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Bird Key with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "lido-key",
    city: "Lido Key",
    county: "Sarasota County",
    title: "House Painters in Lido Key, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Lido Key, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Lido Key, Florida.",
    intro: [
      "Lido Key features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Lido Key. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Lido Key exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Lido Key", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Lido Key with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "st-armands",
    city: "St. Armands",
    county: "Sarasota County",
    title: "House Painters in St. Armands, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving St. Armands, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in St. Armands, Florida.",
    intro: [
      "St. Armands features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in St. Armands. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep St. Armands exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["St. Armands", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in St. Armands with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "siesta-key",
    city: "Siesta Key",
    county: "Sarasota County",
    title: "House Painters in Siesta Key, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Siesta Key, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Siesta Key, Florida.",
    intro: [
      "Siesta Key features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Siesta Key. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Siesta Key exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Siesta Key", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Siesta Key with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "longboat-key",
    city: "Longboat Key",
    county: "Sarasota County",
    title: "House Painters in Longboat Key, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Longboat Key, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Longboat Key, Florida.",
    intro: [
      "Longboat Key features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Longboat Key. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Longboat Key exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Longboat Key", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Longboat Key with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "casey-key",
    city: "Casey Key",
    county: "Sarasota County",
    title: "House Painters in Casey Key, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Casey Key, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Casey Key, Florida.",
    intro: [
      "Casey Key features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Casey Key. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Casey Key exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Casey Key", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Casey Key with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "downtown-sarasota",
    city: "Downtown Sarasota",
    county: "Sarasota County",
    title: "House Painters in Downtown Sarasota, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Downtown Sarasota, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Downtown Sarasota, Florida.",
    intro: [
      "Downtown Sarasota features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Downtown Sarasota. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Downtown Sarasota exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Downtown Sarasota", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Downtown Sarasota with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "west-of-trail",
    city: "West of Trail",
    county: "Sarasota County",
    title: "House Painters in West of Trail, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving West of Trail, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in West of Trail, Florida.",
    intro: [
      "West of Trail features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in West of Trail. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep West of Trail exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["West of Trail", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in West of Trail with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "harbor-acres",
    city: "Harbor Acres",
    county: "Sarasota County",
    title: "House Painters in Harbor Acres, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Harbor Acres, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Harbor Acres, Florida.",
    intro: [
      "Harbor Acres features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Harbor Acres. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Harbor Acres exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Harbor Acres", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Harbor Acres with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "southside-village",
    city: "Southside Village",
    county: "Sarasota County",
    title: "House Painters in Southside Village, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Southside Village, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Southside Village, Florida.",
    intro: [
      "Southside Village features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Southside Village. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Southside Village exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Southside Village", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Southside Village with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "cherokee-park",
    city: "Cherokee Park",
    county: "Sarasota County",
    title: "House Painters in Cherokee Park, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Cherokee Park, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Cherokee Park, Florida.",
    intro: [
      "Cherokee Park features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Cherokee Park. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Cherokee Park exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Cherokee Park", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Cherokee Park with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "oyster-bay",
    city: "Oyster Bay",
    county: "Sarasota County",
    title: "House Painters in Oyster Bay, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Oyster Bay, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Oyster Bay, Florida.",
    intro: [
      "Oyster Bay features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Oyster Bay. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Oyster Bay exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Oyster Bay", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Oyster Bay with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "the-meadows",
    city: "The Meadows",
    county: "Sarasota County",
    title: "House Painters in The Meadows, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving The Meadows, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in The Meadows, Florida.",
    intro: [
      "The Meadows features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in The Meadows. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep The Meadows exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["The Meadows", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in The Meadows with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "palmer-ranch",
    city: "Palmer Ranch",
    county: "Sarasota County",
    title: "House Painters in Palmer Ranch, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Palmer Ranch, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Palmer Ranch, Florida.",
    intro: [
      "Palmer Ranch features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Palmer Ranch. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Palmer Ranch exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Palmer Ranch", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Palmer Ranch with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "prestancia",
    city: "Prestancia",
    county: "Sarasota County",
    title: "House Painters in Prestancia, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Prestancia, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Prestancia, Florida.",
    intro: [
      "Prestancia features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Prestancia. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Prestancia exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Prestancia", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Prestancia with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "laurel-oak-estates",
    city: "Laurel Oak Estates",
    county: "Sarasota County",
    title: "House Painters in Laurel Oak Estates, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Laurel Oak Estates, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Laurel Oak Estates, Florida.",
    intro: [
      "Laurel Oak Estates features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Laurel Oak Estates. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Laurel Oak Estates exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Laurel Oak Estates", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Laurel Oak Estates with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "founders-club",
    city: "Founders Club",
    county: "Sarasota County",
    title: "House Painters in Founders Club, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Founders Club, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Founders Club, Florida.",
    intro: [
      "Founders Club features some of the most beautiful coastal properties in Florida. However, living near the water presents unique challenges for exterior paint, from salt spray to intense humidity.",
      "We understand the specific requirements for painting homes in Founders Club. We use marine-grade coatings and meticulous prep work to ensure your home is protected against the harsh coastal environment."
    ],
    considerations: [
      {
            "title": "Salt Air and Marine Exposure",
            "text": "Salt accelerates paint failure and rust. We thoroughly wash and prep Founders Club exteriors to remove salt deposits before applying specialized coastal coatings."
      },
      {
            "title": "High Humidity Mitigation",
            "text": "Coastal moisture requires breathable, mildew-resistant paints to prevent blistering and algae growth."
      },
      {
            "title": "Architectural Detailing",
            "text": "Whether it's a midcentury modern home or a luxury coastal estate, we carefully hand-brush trim, eaves, and architectural features."
      },
      {
            "title": "Condo and High-Rise Logistics",
            "text": "For condominium owners, we expertly navigate strict HOA work hours, elevator usage, and containment protocols."
      }
    ],
    areas: ["Founders Club", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Founders Club with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "anna-maria",
    city: "Anna Maria",
    county: "Manatee County",
    title: "House Painters in Anna Maria, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Anna Maria, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Anna Maria, Florida.",
    intro: [
      "Homes in Anna Maria range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to Anna Maria, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in Anna Maria suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["Anna Maria", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Anna Maria with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "holmes-beach",
    city: "Holmes Beach",
    county: "Manatee County",
    title: "House Painters in Holmes Beach, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Holmes Beach, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Holmes Beach, Florida.",
    intro: [
      "Homes in Holmes Beach range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to Holmes Beach, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in Holmes Beach suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["Holmes Beach", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Holmes Beach with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "bradenton-beach",
    city: "Bradenton Beach",
    county: "Manatee County",
    title: "House Painters in Bradenton Beach, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Bradenton Beach, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Bradenton Beach, Florida.",
    intro: [
      "Homes in Bradenton Beach range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to Bradenton Beach, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in Bradenton Beach suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["Bradenton Beach", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Bradenton Beach with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "palma-sola",
    city: "Palma Sola",
    county: "Manatee County",
    title: "House Painters in Palma Sola, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Palma Sola, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Palma Sola, Florida.",
    intro: [
      "Homes in Palma Sola range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to Palma Sola, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in Palma Sola suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["Palma Sola", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Palma Sola with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "nw-bradenton",
    city: "NW Bradenton",
    county: "Manatee County",
    title: "House Painters in NW Bradenton, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving NW Bradenton, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in NW Bradenton, Florida.",
    intro: [
      "Homes in NW Bradenton range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to NW Bradenton, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in NW Bradenton suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["NW Bradenton", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in NW Bradenton with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "greyhawk-landing",
    city: "GreyHawk Landing",
    county: "Manatee County",
    title: "House Painters in GreyHawk Landing, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving GreyHawk Landing, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in GreyHawk Landing, Florida.",
    intro: [
      "Homes in GreyHawk Landing range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to GreyHawk Landing, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in GreyHawk Landing suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["GreyHawk Landing", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in GreyHawk Landing with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "heritage-harbour",
    city: "Heritage Harbour",
    county: "Manatee County",
    title: "House Painters in Heritage Harbour, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Heritage Harbour, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Heritage Harbour, Florida.",
    intro: [
      "Homes in Heritage Harbour range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to Heritage Harbour, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in Heritage Harbour suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["Heritage Harbour", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Heritage Harbour with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "river-strand",
    city: "River Strand",
    county: "Manatee County",
    title: "House Painters in River Strand, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving River Strand, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in River Strand, Florida.",
    intro: [
      "Homes in River Strand range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to River Strand, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in River Strand suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["River Strand", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in River Strand with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "tidewater-preserve",
    city: "Tidewater Preserve",
    county: "Manatee County",
    title: "House Painters in Tidewater Preserve, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Tidewater Preserve, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Tidewater Preserve, Florida.",
    intro: [
      "Homes in Tidewater Preserve range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to Tidewater Preserve, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in Tidewater Preserve suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["Tidewater Preserve", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Tidewater Preserve with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "legends-bay",
    city: "Legends Bay",
    county: "Manatee County",
    title: "House Painters in Legends Bay, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Legends Bay, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Legends Bay, Florida.",
    intro: [
      "Homes in Legends Bay range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to Legends Bay, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in Legends Bay suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["Legends Bay", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Legends Bay with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "university-park",
    city: "University Park",
    county: "Manatee County",
    title: "House Painters in University Park, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving University Park, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in University Park, Florida.",
    intro: [
      "Homes in University Park range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to University Park, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in University Park suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["University Park", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in University Park with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "the-concession",
    city: "The Concession",
    county: "Manatee County",
    title: "House Painters in The Concession, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving The Concession, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in The Concession, Florida.",
    intro: [
      "Homes in The Concession range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to The Concession, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in The Concession suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["The Concession", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in The Concession with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "parrish",
    city: "Parrish",
    county: "Manatee County",
    title: "House Painters in Parrish, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving Parrish, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in Parrish, Florida.",
    intro: [
      "Homes in Parrish range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to Parrish, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in Parrish suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["Parrish", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in Parrish with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  },
  {
    slug: "north-river-ranch",
    city: "North River Ranch",
    county: "Manatee County",
    title: "House Painters in North River Ranch, FL | 4 The Love of Color",
    metaDescription: "Professional interior and exterior house painters serving North River Ranch, FL. Specializing in stucco, cabinets, and HOA compliance. Free estimates.",
    h1: "House painters in North River Ranch, Florida.",
    intro: [
      "Homes in North River Ranch range from established historic properties to rapidly expanding new developments. Each era of construction requires a tailored approach to surface preparation.",
      "We bring decades of experience to North River Ranch, correctly diagnosing failing older paint layers, sealing porous block, and delivering a finish that lasts years beyond a standard repaint."
    ],
    considerations: [
      {
            "title": "Failing Older Paint Layers",
            "text": "Many older homes in North River Ranch suffer from chalking and peeling paint. We strip, clean, and properly seal these surfaces so the new coat bonds permanently."
      },
      {
            "title": "Block and Siding Expertise",
            "text": "We use the correct primers and crack treatments specifically designed for aging Florida block and siding."
      },
      {
            "title": "Thorough Preparation",
            "text": "Painting over bad prep is a waste of money. We take the time to caulk, patch, and seal before opening a single can of paint."
      },
      {
            "title": "Honest Communication",
            "text": "If we find wood rot or water damage during our prep work, we show you immediately and discuss the right way to fix it."
      }
    ],
    areas: ["North River Ranch", "Sarasota", "Bradenton", "Lakewood Ranch"],
    closing: "We treat your home in North River Ranch with the respect it deserves, delivering a beautiful, lasting finish with zero pressure and complete transparency."
  }
];

export const cityPageBySlug = (slug: string) =>
  cityPages.find((page) => page.slug === slug);
