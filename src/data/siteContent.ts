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
    image: "/images/proj-exterior-modern.jpg",
    alt: "Single-story Florida home with soft gray stucco, white trim, and a barrel-tile roof, freshly painted",
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

export const projects: Project[] = [
  {
    title: "Modern home exterior",
    category: "Exterior",
    image: "/images/proj-exterior-modern.jpg",
    alt: "Single-story Florida home with soft gray stucco, white trim, and a barrel-tile roof, freshly painted with a paver driveway and palms",
    summary:
      "Soft gray stucco with crisp white window trim and a freshly coated three-car garage — a clean, modern exterior finished in warm evening light.",
  },
  {
    title: "Two-story home",
    category: "Exterior",
    image: "/images/proj-exterior-white-2story.jpg",
    alt: "Large two-story white home with a three-car garage, tile roof, and paver driveway, freshly painted",
    summary:
      "A big two-story repaint in clean white with a sharp tile-roof line — bright, crisp, and built to shrug off the Florida sun.",
  },
  {
    title: "Bedroom refresh",
    category: "Interior",
    image: "/images/proj-interior-bedroom.jpg",
    alt: "Bedroom with warm greige walls, white crown molding, a tray ceiling, and plantation shutters",
    summary:
      "Warm, even greige walls set off by bright white crown molding and a smooth tray ceiling — a calm, finished bedroom.",
  },
  {
    title: "Mediterranean estate",
    category: "Exterior",
    image: "/images/proj-exterior-mediterranean.jpg",
    alt: "Grand two-story white Mediterranean home with a tile roof, arched entry, and mature palms on a large lawn",
    summary:
      "A stately Mediterranean estate refreshed in bright white against its tile roof — a finish that makes a large home feel pristine.",
  },
  {
    title: "Stone-accent exterior",
    category: "Exterior",
    image: "/images/proj-exterior-stone.jpg",
    alt: "Tan single-story home with stone accents and an arched entry, freshly painted, with a paver driveway",
    summary:
      "Warm stucco paired with stone accents and a freshly painted arched entry — color matched to the stone and trim for a cohesive look.",
  },
  {
    title: "Interior finish",
    category: "Interior",
    image: "/images/proj-interior-room.jpg",
    alt: "Freshly painted room with smooth warm-greige walls, soft window light, and clean trim",
    summary:
      "Smooth, even walls in a warm neutral with crisp baseboards and ceiling lines — a clean, move-in-ready interior finish.",
  },
  {
    title: "Arched entry home",
    category: "Exterior",
    image: "/images/proj-exterior-arched.jpg",
    alt: "Tan single-story Florida home with a columned arched entry and palms, freshly painted",
    summary:
      "Warm, even stucco and a crisply trimmed arched entry framed by mature palms — clean curb appeal that holds up to the Florida sun.",
  },
  {
    title: "Tan home refresh",
    category: "Exterior",
    image: "/images/proj-exterior-palm.jpg",
    alt: "Single-story tan Florida home with a tile roof, decorative gable, two-car garage, and tall palms",
    summary:
      "Warm greige walls with clean white trim and a freshly finished garage and gable detail — understated curb appeal that suits the street.",
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
