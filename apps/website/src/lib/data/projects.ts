export interface ProjectItem {
  id: string;
  title: string;
  category: "exterior" | "interior" | "cabinetry";
  categoryLabel: string;
  location: string;
  neighborhood: string;
  image: string;
  alt: string;
  summary: string;
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
    summary:
      "Full exterior stucco wash, elastomeric seal coat, and two coats of premium exterior acrylic engineered for Suncoast solar heat and salt air.",
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
    summary:
      "Warm greige walls with crisp semi-gloss white crown molding and double-tray ceiling detailing throughout the primary suite.",
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
    summary:
      "Honey oak kitchen cabinets refinished with a factory-smooth satin white spray finish and hardware upgrade.",
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
    summary:
      "Soft gray stucco finish with dirt-shedding technology, crisp white soffits, and dark bronze garage accents.",
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
    summary:
      "Spanish archways, columns, and smooth stucco repainted in a warm-white palette formulated for high humidity.",
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
    summary:
      "Coastal interior repaint highlighting natural stone masonry and high-vaulted ceilings.",
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
    summary:
      "Two-story coastal exterior repaint near Sarasota Bay using high-reflectance white paint to minimize heat absorption.",
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
    summary:
      "Coastal sage stucco exterior with moisture-resistant coating on pool lanai enclosure walls.",
  },
];
