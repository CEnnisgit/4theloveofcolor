export interface ProjectItem {
  id: string;
  title: string;
  category: "exterior" | "interior" | "cabinetry";
  categoryLabel: string;
  location: string;
  neighborhood: string;
  image: string;
  alt: string;
  paintSpec: string;
  timeline: string;
  scope: string;
  summary: string;
  details: {
    prep: string;
    primer: string;
    topcoat: string;
    outcome: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "country-club-east-repaint",
    title: "Country Club East Stucco Repaint",
    category: "exterior",
    categoryLabel: "Exterior Painting",
    location: "Lakewood Ranch, FL",
    neighborhood: "Country Club East",
    image: "/images/proj-exterior-mediterranean.jpg",
    alt: "Grand Mediterranean estate home in Lakewood Ranch freshly painted with bright white stucco and dark tile accent",
    paintSpec: "Sherwin-Williams Duration® Exterior Acrylic",
    timeline: "4 Days (Prep to Walkthrough)",
    scope: "Stucco Wash, Masonry Condition, Full Repaint",
    summary:
      "Full exterior stucco wash, elastomeric seal coat, and two coats of Sherwin-Williams Duration engineered for Suncoast solar heat and salt air.",
    details: {
      prep: "2,500 PSI eco-friendly wash removing salt air film, chalking, and coastal mildew.",
      primer: "Loxon® conditioner on bare stucco patches with elastomeric caulk at window joints.",
      topcoat: "2 full coats of SW Duration Satin in Extra White with Sandbar trim accents.",
      outcome: "Durable, UV-resistant finish with elastomeric joint protection against coastal weathering.",
    },
  },
  {
    id: "palmer-ranch-primary-suite",
    title: "Palmer Ranch Primary Suite Repaint",
    category: "interior",
    categoryLabel: "Interior Painting",
    location: "Sarasota, FL",
    neighborhood: "Palmer Ranch",
    image: "/images/proj-interior-bedroom.jpg",
    alt: "Primary bedroom suite with warm greige walls, white crown molding, and double tray ceiling finish",
    paintSpec: "Sherwin-Williams Emerald® Low-VOC Interior",
    timeline: "3 Days",
    scope: "Walls, Ceilings, Crown Molding & Baseboards",
    summary:
      "Warm greige walls with crisp semi-gloss white crown molding and double-tray ceiling detailing throughout the primary suite.",
    details: {
      prep: "Wall patch, micro-sanding, and full dust-containment masking.",
      primer: "Spot primed drywall repairs with Premium Wall & Wood Primer.",
      topcoat: "SW Emerald Matte on walls with Emerald Urethane Trim Enamel on crown.",
      outcome: "Scrubbable, low-odor finish ready for immediate occupancy.",
    },
  },
  {
    id: "riverwalk-cabinet-refinishing",
    title: "Riverwalk Cabinet Refinishing",
    category: "cabinetry",
    categoryLabel: "Cabinet Refinishing",
    location: "Bradenton, FL",
    neighborhood: "Riverwalk",
    image: "/images/proj-interior-room.jpg",
    alt: "Factory-smooth white refinished kitchen cabinets with clean satin luster",
    paintSpec: "Sherwin-Williams Gallery Series™ Waterborne",
    timeline: "4 Days (Disassembly to Install)",
    scope: "Degrease, Degloss, Spray Satin Finish",
    summary:
      "Honey oak kitchen cabinets refinished with a factory-smooth satin white spray finish and hardware upgrade.",
    details: {
      prep: "Solvent degreasing, mechanical sanding, and shellac stain-blocking barrier.",
      primer: "High-build bonding primer sanded smooth to 320 grit.",
      topcoat: "HVLP spray application of SW Gallery Series Waterborne Topcoat in Pure White.",
      outcome: "Factory-grade hard finish resistant to cooking oils, moisture, and daily wear.",
    },
  },
  {
    id: "waterside-stucco-elevation",
    title: "Waterside Stucco Elevation",
    category: "exterior",
    categoryLabel: "Exterior Painting",
    location: "Lakewood Ranch, FL",
    neighborhood: "Waterside",
    image: "/images/proj-exterior-modern.jpg",
    alt: "Contemporary single-story Florida home with soft gray stucco and white trim under evening light",
    paintSpec: "Sherwin-Williams Emerald® Rain Refresh",
    timeline: "3 Days",
    scope: "Modern Stucco, Soffits & Accent Doors",
    summary:
      "Soft gray stucco finish with dirt-shedding Rain Refresh technology, crisp white soffits, and dark bronze garage accents.",
    details: {
      prep: "High-pressure wash and mildewcide treatment followed by polyurethane joint sealing.",
      primer: "Masonry sealer applied to southern exposure walls experiencing highest UV load.",
      topcoat: "SW Emerald Rain Refresh Satin in Repose Gray with Iron Ore accent trims.",
      outcome: "Dirt-shedding topcoat that washes clean during rain downpours for long-lasting curb appeal.",
    },
  },
  {
    id: "lake-club-masonry-repaint",
    title: "The Lake Club Masonry & Stucco Repaint",
    category: "exterior",
    categoryLabel: "Exterior Painting",
    location: "Lakewood Ranch, FL",
    neighborhood: "The Lake Club",
    image: "/images/proj-exterior-arched.jpg",
    alt: "Spanish Colonial archway and stucco portico painted in classic warm white finish",
    paintSpec: "Sherwin-Williams Loxon® & Duration®",
    timeline: "5 Days",
    scope: "Portico Archways, Masonry Columns & Moldings",
    summary:
      "Spanish archways, columns, and smooth stucco repainted in a warm-white palette formulated for high humidity.",
    details: {
      prep: "Alkali-resistant masonry wash and detail scraping of decorative corbels.",
      primer: "Loxon® conditioner penetrating primer for deep masonry adhesion.",
      topcoat: "SW Duration Satin 100% acrylic latex in Creamy White.",
      outcome: "Breathable masonry coating that protects against wind-driven moisture while highlighting architectural details.",
    },
  },
  {
    id: "osprey-vaulted-interior",
    title: "Osprey Vaulted Living Room Repaint",
    category: "interior",
    categoryLabel: "Interior Painting",
    location: "Osprey, FL",
    neighborhood: "Osprey",
    image: "/images/proj-interior-bedroom.jpg",
    alt: "Vaulted coastal interior living room with stone masonry accent and fresh warm paint",
    paintSpec: "Sherwin-Williams Duration® Home Satin",
    timeline: "2 Days",
    scope: "High-Vaulted Walls, Trim & Accent Masonry",
    summary:
      "Coastal interior repaint highlighting natural stone masonry and high-vaulted ceilings.",
    details: {
      prep: "Scaffolding setup, full plastic floor drop containment, seam caulking.",
      primer: "Stain-blocking primer on window sills and high-sunlight trim.",
      topcoat: "SW Duration Home Interior Satin in Alabaster White.",
      outcome: "Wipeable, moisture-resistant walls engineered for Gulf Coast humidity.",
    },
  },
  {
    id: "harbor-acres-waterfront-exterior",
    title: "Harbor Acres Waterfront Exterior",
    category: "exterior",
    categoryLabel: "Exterior Painting",
    location: "Sarasota, FL",
    neighborhood: "Harbor Acres",
    image: "/images/proj-exterior-white-2story.jpg",
    alt: "Grand two-story white coastal home near Sarasota Bay with pristine stucco finish",
    paintSpec: "Sherwin-Williams Emerald® Exterior Flat/Satin",
    timeline: "5 Days",
    scope: "Full 2-Story Exterior, Porch Ceilings & Trim",
    summary:
      "Two-story coastal exterior repaint near Sarasota Bay using high-reflectance white paint to minimize heat absorption.",
    details: {
      prep: "Full salt air neutralizing rinse, window casing perimeter recaulking, shutter prep.",
      primer: "Full-coverage acrylic masonry sealer across all sea-facing facades.",
      topcoat: "SW Emerald Exterior in Extra White with Haint Blue porch ceilings.",
      outcome: "High mold and mildew resistance with maximum solar reflectance.",
    },
  },
  {
    id: "parrish-exterior-lanai",
    title: "Parrish Exterior & Lanai Repaint",
    category: "exterior",
    categoryLabel: "Exterior Painting",
    location: "Parrish, FL",
    neighborhood: "Parrish",
    image: "/images/proj-exterior-palm.jpg",
    alt: "Florida home exterior with lush palm backdrop and freshly painted soft coastal stucco",
    paintSpec: "Sherwin-Williams Resilience® Exterior",
    timeline: "3 Days",
    scope: "Stucco Exterior & Lanai Barrier Wall",
    summary:
      "Coastal sage stucco exterior with moisture-resistant coating on pool lanai enclosure walls.",
    details: {
      prep: "Chlorine-safe wash, pool cage plastic masking, stucco hairline crack patching.",
      primer: "Moisture-resistant masonry sealer on lanai screen walls.",
      topcoat: "SW Resilience Exterior Satin in Sea Salt & Pure White trim.",
      outcome: "Early moisture resistance formulated to set cleanly even during Florida afternoon pop-up summer showers.",
    },
  },
];
