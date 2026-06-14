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
    alt: "Freshly painted modern Florida home with a gray-and-white exterior and crisp trim",
    summary:
      "A full exterior repaint with clean trim lines and durable, sun-ready coatings — modern curb appeal built for the Florida climate.",
  },
  {
    title: "Interior color & accent walls",
    category: "Interior",
    image: "/images/proj-interior-blue.jpg",
    alt: "Living space with a bold blue accent wall and a crisp white tray ceiling",
    summary:
      "A deep, confident accent color against a crisp white tray ceiling — proof that the right color completely changes how a room feels.",
  },
  {
    title: "Prep & detail work",
    category: "Our craft",
    image: "/images/proj-painter-at-work.jpg",
    alt: "A painter on a ladder carefully cutting in along the ceiling of a room",
    summary:
      "The finish lives in the details — careful cutting-in, steady hands, and clean lines where the wall meets the ceiling.",
  },
];

export const projects: Project[] = [
  {
    title: "Modern home exterior",
    category: "Exterior",
    image: "/images/proj-exterior-modern.jpg",
    alt: "Freshly painted modern Florida home with a gray-and-white exterior and crisp white trim",
    summary:
      "A full exterior repaint with clean trim lines and durable, sun-ready coatings — modern curb appeal built for the Florida climate.",
  },
  {
    title: "Bold accent wall",
    category: "Interior",
    image: "/images/proj-interior-blue.jpg",
    alt: "Living space with a bold blue accent wall and a crisp white tray ceiling",
    summary:
      "A deep, confident accent color with a crisp white tray ceiling — proof that the right color completely changes how a room feels.",
  },
  {
    title: "Full exterior repaint",
    category: "Exterior",
    image: "/images/proj-exterior-drive.jpg",
    alt: "Large single-story home with a paver circular driveway and palms, freshly painted",
    summary:
      "Clean, even coverage across a sprawling single-story exterior — sharp lines where the walls meet the trim and the roofline.",
  },
  {
    title: "Bedroom refresh",
    category: "Interior",
    image: "/images/proj-interior-bedroom.jpg",
    alt: "Bedroom with freshly painted walls and a smooth neutral tray ceiling",
    summary:
      "Warm, balanced neutrals and a smooth tray-ceiling finish make this bedroom feel calm, finished, and pulled together.",
  },
  {
    title: "Mediterranean exterior",
    category: "Exterior",
    image: "/images/proj-exterior-tile-roof.jpg",
    alt: "Mediterranean-style Florida home with a tile roof and freshly painted stucco exterior",
    summary:
      "Refreshed stucco and trim on a Mediterranean-style home — color matched to the tile roof and finished to handle sun and humidity.",
  },
  {
    title: "Detail & prep work",
    category: "Our craft",
    image: "/images/proj-painter-at-work.jpg",
    alt: "A painter on a ladder carefully cutting in along the ceiling of a room",
    summary:
      "The finish lives in the details — careful cutting-in, steady hands, and clean lines where the wall meets the ceiling.",
  },
  {
    title: "Fresh curb appeal",
    category: "Exterior",
    image: "/images/proj-exterior-white.jpg",
    alt: "Freshly painted white single-story home with manicured landscaping",
    summary:
      "Bright, clean exterior paint and sharp trim that lift the whole property's curb appeal from the street.",
  },
  {
    title: "Entry & living area",
    category: "Interior",
    image: "/images/proj-interior-entry.jpg",
    alt: "Interior entry and living area with freshly painted walls and framed art",
    summary:
      "Smooth, even walls that let the furnishings and art stand out — a quiet, high-quality interior finish.",
  },
  {
    title: "Exterior refresh",
    category: "Exterior",
    image: "/images/proj-exterior-palm.jpg",
    alt: "Tan Florida home exterior with a two-car garage and palm tree, freshly painted",
    summary:
      "A warm, updated exterior with clean garage and trim detailing — a fresh look that holds up to the Gulf Coast sun.",
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
