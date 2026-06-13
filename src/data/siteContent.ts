export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type Project = {
  title: string;
  category: string;
  image: string;
  alt: string;
  summary: string;
};

export type Faq = {
  question: string;
  answer: string;
};

// ---------------------------------------------------------------------------
// Business / NAP (Name, Address, Phone) — keep consistent everywhere for SEO
// ---------------------------------------------------------------------------
export const business = {
  name: "4 The Love of Color Painting",
  shortName: "4 The Love of Color",
  phone: "(917) 584-0069",
  phoneHref: "tel:+19175840069",
  email: "4theloveofcolorpainting@gmail.com",
  emailHref: "mailto:4theloveofcolorpainting@gmail.com",
  url: "https://www.4theloveofcolorpainting.com",
  // Primary geography (Suncoast / Gulf Coast Florida)
  city: "Lakewood Ranch",
  region: "FL",
  regionName: "Florida",
  serviceArea: "Lakewood Ranch, Sarasota & the surrounding Suncoast",
  serviceAreaLong:
    "Lakewood Ranch, Sarasota, Bradenton, Palmetto, Parrish, Venice, Osprey, and the surrounding Manatee & Sarasota County communities",
  instagramHref: "https://www.instagram.com/4theloveofcolorpainting/",
  hours: "Mon–Sat, 8am–6pm",
  founded: "Family-owned",
};

export const contact = {
  phone: business.phone,
  phoneHref: business.phoneHref,
  email: business.email,
  emailHref: business.emailHref,
  serviceArea: business.serviceArea,
  instagramHref: business.instagramHref,
};

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

// Cities used for the "service area" section + local SEO copy
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

export const heroStats: Stat[] = [
  { value: "Interior + Exterior", label: "Whole-home and full-property painting, inside and out" },
  { value: "Residential + Commercial", label: "Homes, HOAs, offices, and storefronts across the Suncoast" },
  { value: "Family-Owned", label: "You work directly with the family on every job — no runaround" },
];

export const services: Service[] = [
  {
    title: "Interior painting",
    description:
      "Refresh the rooms you actually live in — walls, ceilings, trim, and doors finished with clean lines and a smooth, even coat that holds up to Florida humidity.",
    bullets: [
      "Walls, ceilings, trim, doors, and baseboards",
      "Homes, condos, apartments, and offices",
      "Careful masking, prep, and a tidy work site every day",
    ],
  },
  {
    title: "Exterior painting",
    description:
      "Boost curb appeal and protect your home from sun, salt air, and humidity with durable, weather-rated coatings and prep built to last on the Gulf Coast.",
    bullets: [
      "Stucco, siding, trim, soffits, and front doors",
      "Single-family homes, HOA communities, and commercial exteriors",
      "Pressure washing, sealing, and surface prep that lasts",
    ],
  },
  {
    title: "Cabinets & specialty finishes",
    description:
      "Give kitchens, built-ins, and feature walls a custom, furniture-grade finish — the kind of detailed work a quick repaint can never match.",
    bullets: [
      "Kitchen cabinet refinishing and built-ins",
      "Accent walls, creative color, and decorative finishes",
      "Upgraded finish quality for the spaces people notice most",
    ],
  },
];

export const homeFeatures: Project[] = [
  {
    title: "Exterior home painting",
    category: "Exterior",
    image: "/images/project-exterior.jpg",
    alt: "Freshly painted Florida home exterior with clean stucco and crisp trim",
    summary:
      "A fresh exterior does more than protect the home — it changes how it feels to pull up to it. Clean prep, weather-rated coatings, and sharp trim work built for the Florida sun.",
  },
  {
    title: "Whole-home interior",
    category: "Interior",
    image: "/images/project-living-room.jpg",
    alt: "Interior living space with freshly painted walls, trim, and warm tones",
    summary:
      "We paint the whole home — every room, wall, ceiling, and trim — with consistent quality and color flow throughout, so the entire space feels connected and cared for.",
  },
  {
    title: "Commercial space",
    category: "Commercial",
    image: "/images/project-commercial.jpg",
    alt: "Commercial interior with freshly painted walls and clean finishes",
    summary:
      "A well-kept space reflects the business inside it. We bring the same care and quality to offices and storefronts as we do to every home we work in.",
  },
];

export const projects: Project[] = [
  {
    title: "Exterior home painting",
    category: "Exterior",
    image: "/images/project-exterior.jpg",
    alt: "Freshly painted home exterior with updated trim and strong curb appeal",
    summary:
      "New color, sharp trim, and proper surface prep gave this home a cleaner, more confident look from the street.",
  },
  {
    title: "Kitchen refresh",
    category: "Interior",
    image: "/images/project-kitchen.jpg",
    alt: "Freshly painted kitchen with bright cabinetry and clean finishes",
    summary:
      "Careful prep and a brighter palette transformed this kitchen into a lighter, more enjoyable space to spend time in.",
  },
  {
    title: "Living room interior",
    category: "Interior",
    image: "/images/project-living-room.jpg",
    alt: "Neutral-toned living room with painted walls and trim",
    summary:
      "Warm, balanced tones and clean trim throughout — the kind of finish that makes a home feel pulled together.",
  },
  {
    title: "Stairwell & detail work",
    category: "Interior",
    image: "/images/project-stair-hall.jpg",
    alt: "Interior stair hall with carefully painted walls, trim, and architectural details",
    summary:
      "Tight masking, clean lines, and consistent coverage in the spaces that demand the most attention to detail.",
  },
  {
    title: "Commercial interior",
    category: "Commercial",
    image: "/images/project-commercial.jpg",
    alt: "Commercial interior space with freshly painted surfaces",
    summary:
      "A high-traffic commercial space repainted with durable finishes and a clean, professional look that holds up.",
  },
  {
    title: "Feature wall",
    category: "Detail",
    image: "/images/project-wall.jpg",
    alt: "Close-up of a freshly painted feature wall with smooth, even color",
    summary:
      "The quality of a paint job lives in the details — even coverage, smooth surfaces, and color that reads the way it should.",
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

export const faqs: Faq[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Lakewood Ranch and serve Sarasota, Bradenton, Palmetto, Parrish, Venice, Osprey, and the surrounding Manatee and Sarasota County communities. Not sure if you're in our area? Just give us a call.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Every project starts with a free, no-pressure on-site estimate. We walk the space with you, talk through colors and scope, and send a clear written quote.",
  },
  {
    question: "Do you handle both interior and exterior painting?",
    answer:
      "Absolutely — interior, exterior, cabinets, and specialty finishes for both homes and commercial spaces. Many of our clients have us do their whole property at once.",
  },
  {
    question: "What kind of paint do you use?",
    answer:
      "We use quality, weather-rated coatings chosen for the Florida climate, and we prioritize low-VOC, eco-friendly products. We're happy to match a specific brand or color you already have in mind.",
  },
  {
    question: "How long does a typical job take?",
    answer:
      "It depends on the size and condition of the space, but most interior rooms and standard exteriors are completed within a few days. We'll give you a realistic timeline with your written estimate.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes — we're fully insured and treat every property with care. You're covered from the first day of prep to the final walkthrough.",
  },
];

export const aboutCopy = {
  intro:
    "4 The Love of Color Painting is a family-owned painting company serving Lakewood Ranch, Sarasota, and the surrounding Suncoast — built on the belief that paint should do more than cover a wall. It should change how a space feels the moment you walk in.",
  body:
    "Founded by Edwin Ennis, who passed his craft down to his sons, this is a business where skill, trust, and pride in the work run in the family. Every project is approached with expert technique, eco-friendly materials, and genuine care for the property and the people who live or work in it. From the first free estimate to the final walkthrough, you work directly with us — no layers, no shortcuts, just clean results you can see.",
};
