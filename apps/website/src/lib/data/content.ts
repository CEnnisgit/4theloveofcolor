export const business = {
  name: "4 The Love of Color Painting",
  legalName: "4 THE LOVE OF COLOR LLC",
  shortName: "4 The Love of Color",
  phone: "(917) 584-0069",
  phoneHref: "tel:+19175840069",
  email: "4theloveofcolorpainting@gmail.com",
  emailHref: "mailto:4theloveofcolorpainting@gmail.com",
  url: "https://www.fortheloveofcolor.com",
  city: "Lakewood Ranch",
  region: "FL",
  serviceArea: "Lakewood Ranch, Sarasota & the surrounding Suncoast",
  serviceAreaLong:
    "Lakewood Ranch, Sarasota, Bradenton, Palmetto, Parrish, Venice, Osprey, and the surrounding Manatee & Sarasota County communities",
  hours: "Mon–Sat, 8am–6pm",
  founded: "Family-owned",
};

export const contact = {
  phone: business.phone,
  phoneHref: business.phoneHref,
  email: business.email,
  emailHref: business.emailHref,
  serviceArea: business.serviceArea,
};

export const serviceCities = [
  "Lakewood Ranch",
  "Sarasota",
  "Bradenton",
  "Palmetto",
  "Parrish",
  "Venice",
  "Osprey",
  "University Park",
];

export const lakewoodRanchNeighborhoods = [
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
];

export interface MacroService {
  title: string;
  slug: string;
  description: string;
}

export const macroServices: MacroService[] = [
  {
    title: "Interior Painting",
    slug: "interior-painting",
    description:
      "Refresh the rooms you actually live in — walls, ceilings, trim, and doors finished with clean lines and a smooth, even coat that holds up to Florida humidity.",
  },
  {
    title: "Exterior Painting",
    slug: "exterior-painting",
    description:
      "Boost curb appeal and protect your home from sun, salt air, and humidity with durable, weather-rated coatings and prep built to last on the Gulf Coast.",
  },
  {
    title: "Cabinet Refinishing",
    slug: "cabinet-refinishing",
    description:
      "Keep the kitchen you have and change how it looks — degreased, deglossed, properly primed and sprayed to a finish that survives daily use.",
  },
  {
    title: "Commercial Painting",
    slug: "commercial-painting",
    description:
      "Offices, storefronts, HOA common areas, and rental turnovers — scoped in writing and scheduled around your trading hours, tenants, or handover date.",
  },
];

export const homeFeatures = [
  {
    title: "Exterior home painting",
    category: "Exterior",
    image: "/images/proj-exterior-modern.jpg",
    alt: "Single-story Florida home with soft gray stucco, white trim, freshly painted",
    summary:
      "Soft gray stucco with crisp white trim and a freshly coated three-car garage — a clean, modern exterior finished in warm evening light.",
  },
  {
    title: "Interior repaint",
    category: "Interior",
    image: "/images/proj-interior-bedroom.jpg",
    alt: "Bedroom with warm greige walls, white crown molding, and a tray ceiling",
    summary:
      "Warm, even walls set off by bright white crown molding and a smooth tray ceiling — a calm, finished bedroom.",
  },
  {
    title: "Mediterranean estate",
    category: "Exterior",
    image: "/images/proj-exterior-mediterranean.jpg",
    alt: "Grand two-story white Mediterranean home with a tile roof and mature palms",
    summary:
      "A stately Mediterranean home refreshed in bright white against its tile roof — the kind of finish that makes a large property feel pristine.",
  },
];

export const testimonials = [
  {
    quote:
      "The finish quality completely changed the feel of our home. Every room looked sharper, warmer, and much more intentional than we expected.",
    author: "Homeowner",
    location: "Lakewood Ranch, FL",
  },
  {
    quote:
      "Communication was direct, the house stayed clean every day, and the end result felt custom instead of cookie-cutter.",
    author: "Repeat client",
    location: "Sarasota, FL",
  },
  {
    quote:
      "They repainted our whole exterior and it still looks fresh after a brutal Florida summer. Honest crew, fair price, real craftsmanship.",
    author: "Homeowner",
    location: "Bradenton, FL",
  },
];

export const processSteps = [
  {
    title: "Free on-site estimate",
    text: "We walk the property with you, talk through colors and surfaces, and give you a clear, written quote — no pressure and no surprises.",
  },
  {
    title: "Prep & protection",
    text: "We treat prep as part of the craft: pressure washing, patching, sanding, masking, and protecting everything around the work before a brush touches a wall.",
  },
  {
    title: "Paint with care",
    text: "Even coverage, crisp lines, and quality coatings — applied by people who take pride in the work and clean up like we were never there.",
  },
  {
    title: "Final walkthrough",
    text: "We walk the finished job together and don't call it done until you're genuinely happy with every detail.",
  },
];

export const whyUs = [
  {
    title: "Family-owned & operated",
    text: "Edwin founded the business and taught his sons the trade. When you hire us, you work directly with the family — not a rotating crew of subcontractors.",
  },
  {
    title: "Built for the Florida climate",
    text: "Sun, humidity, and salt air are hard on paint. We use weather-rated products and prep methods chosen specifically to last on the Gulf Coast.",
  },
  {
    title: "Eco-friendly materials",
    text: "We prioritize low-VOC, low-odor, sustainable products that are better for your family and the environment — without compromising finish quality.",
  },
  {
    title: "Clean, respectful crews",
    text: "We show up on time, protect your floors and furniture, and leave the site tidy every single day. Your home is treated like our own.",
  },
];

export const guarantees = [
  {
    title: "Written price, held",
    text: "You get a clear written quote after the walkthrough, and that is the number you pay. Scope changes only ever happen with your say-so, in writing.",
  },
  {
    title: "Clean at the end of every day",
    text: "Floors and furniture protected, drips caught, site tidied before we leave — not just on the last day, but every day we're in your home.",
  },
  {
    title: "Walkthrough before final payment",
    text: "We walk the finished job together and fix anything you point out before you settle up. The job isn't done until you say it is.",
  },
  {
    title: "Coatings picked for this climate",
    text: "Sun, humidity, and salt air decide how long a finish lasts here. We specify weather-rated, low-VOC products chosen for the Gulf Coast.",
  },
];
