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
    id: "country-club-east-refresh",
    title: "Country Club East Exterior Refresh",
    category: "exterior",
    categoryLabel: "Exterior Painting",
    location: "Lakewood Ranch, FL",
    neighborhood: "Country Club East",
    image: "/images/proj-exterior-mediterranean.jpg",
    alt: "Grand Mediterranean estate home in Lakewood Ranch freshly painted with bright white stucco and dark roof tile accent",
    paintSpec: "Sherwin-Williams Duration® Exterior Acrylic",
    timeline: "4 Days (Prep to Walkthrough)",
    scope: "Stucco Wash, Masonry Condition, Full Repaint",
    summary:
      "Full exterior stucco pressure wash, elastomeric seal coat, and two coats of Sherwin-Williams Duration to withstand harsh Suncoast solar heat and salt air.",
    details: {
      prep: "2,500 PSI eco-friendly wash removing salt air film, chalking, and coastal mildew.",
      primer: "Loxon® conditioner on bare stucco patches with elastomeric caulk at all window joints.",
      topcoat: "2 full coats of SW Duration Satin in Extra White with rich Sandbar trim accents.",
      outcome: "10-year weather protection warranty with maximum solar heat reflection.",
    },
  },
  {
    id: "palmer-ranch-interior-overhaul",
    title: "Palmer Ranch Primary Suite Transformation",
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
      "Warm, even greige walls paired with crisp semi-gloss white crown molding and double tray ceiling detailing throughout the master suite.",
    details: {
      prep: "Comprehensive wall patch, micro-sanding, and full dust-containment masking.",
      primer: "Spot primed dry-wall repairs with Premium Wall & Wood Primer.",
      topcoat: "SW Emerald Matte in Agreeable Gray on walls with Emerald Urethane Trim Enamel on crown.",
      outcome: "Scrubbable, zero-glare, low-odor finish ready for immediate occupancy.",
    },
  },
  {
    id: "riverwalk-cabinet-refinishing",
    title: "Riverwalk Kitchen Cabinet Refinishing",
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
      "Transforming dated honey oak kitchen cabinets into a factory-smooth, ultra-durable satin white finish with hardware upgrade.",
    details: {
      prep: "Solvent degreasing, mechanical sanding, and shellac stain-blocking barrier.",
      primer: "High-build bonding primer sanded smooth to 320 grit.",
      topcoat: "HVLP spray application of SW Gallery Series Waterborne Topcoat in Pure White.",
      outcome: "Factory-grade hard finish resistant to cooking oils, moisture, and daily household wear.",
    },
  },
  {
    id: "waterside-modern-elevation",
    title: "Waterside Modern Stucco Exterior",
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
      "Contemporary soft gray stucco refresh with self-cleaning rain-refresh technology, crisp white soffits, and dark bronze garage door accents.",
    details: {
      prep: "High-pressure wash and mildewcide treatment followed by polyurethane joint sealing.",
      primer: "Masonry sealer applied to southern exposure walls experiencing highest UV load.",
      topcoat: "SW Emerald Rain Refresh Satin in Repose Gray with Iron Ore accent trims.",
      outcome: "Self-cleaning coating that releases dirt during rain downpours for low-maintenance curb appeal.",
    },
  },
  {
    id: "lake-club-spanish-revival",
    title: "The Lake Club Archway & Stucco Restoration",
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
      "Restoration of Spanish archways, columns, and smooth stucco finish in a timeless warm-white color palette engineered for high humidity.",
    details: {
      prep: "Alkali-resistant masonry wash and detail scraping of decorative corbels.",
      primer: "Loxon® conditioner penetrating primer for deep masonry adhesion.",
      topcoat: "SW Duration Satin 100% acrylic latex in Creamy White.",
      outcome: "Breathable masonry shield preventing tropical storm moisture intrusion while retaining crisp architectural contrast.",
    },
  },
  {
    id: "osprey-waterfront-interior",
    title: "Osprey Coastal Living Room & Trim",
    category: "interior",
    categoryLabel: "Interior Painting",
    location: "Sarasota, FL",
    neighborhood: "Osprey",
    image: "/images/proj-exterior-stone.jpg",
    alt: "Vaulted coastal interior living room with stone masonry accent and fresh warm paint",
    paintSpec: "Sherwin-Williams Duration® Home Satin",
    timeline: "2 Days",
    scope: "High-Vaulted Walls, Trim & Accent Masonry",
    summary:
      "Clean coastal interior repaint accentuating natural stone masonry and high-vaulted ceilings for an airy, expansive feeling.",
    details: {
      prep: "Scaffolding setup, full plastic floor drop containment, seam caulking.",
      primer: "Stain-blocking primer on window sills and high-sunlight trim.",
      topcoat: "SW Duration Home Interior Satin in Alabaster White.",
      outcome: "Wipeable, moisture-resistant walls engineered for Gulf Coast humidity and natural light reflection.",
    },
  },
  {
    id: "harbor-acres-coastal-estate",
    title: "Harbor Acres Two-Story Bay Estate",
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
      "Pristine white exterior restoration for a grand 2-story coastal residence near Sarasota Bay designed for maximum solar heat reflection.",
    details: {
      prep: "Full salt air neutralizing rinse, window casing perimeter recaulking, shutter prep.",
      primer: "Full-coverage acrylic masonry sealer across all sea-facing facades.",
      topcoat: "SW Emerald Exterior in Extra White with Haint Blue porch ceilings.",
      outcome: "Superior mold/mildew protection and reduced cooling costs through solar reflection.",
    },
  },
  {
    id: "parrish-coastal-palms",
    title: "Parrish Residence & Pool Lanai Wall",
    category: "exterior",
    categoryLabel: "Exterior Painting",
    location: "Bradenton, FL",
    neighborhood: "Parrish",
    image: "/images/proj-exterior-palm.jpg",
    alt: "Florida home exterior with lush palm backdrop and freshly painted soft coastal stucco",
    paintSpec: "Sherwin-Williams Resilience® Exterior",
    timeline: "3 Days",
    scope: "Stucco Exterior & Lanai Barrier Wall",
    summary:
      "Coastal sage and off-white stucco exterior with moisture-resistant barrier application on pool lanai surrounding walls.",
    details: {
      prep: "Chlorine-safe wash, pool cage plastic masking, stucco hairline crack patching.",
      primer: "Moisture-resistant masonry sealer on lanai screen walls.",
      topcoat: "SW Resilience Exterior Satin in Sea Salt & Pure White trim.",
      outcome: "Early moisture resistance formulated to set cleanly even during Florida afternoon pop-up summer showers.",
    },
  },
];
