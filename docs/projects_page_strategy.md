# Projects Subpage Strategy & Blueprint

## 1. Legacy Audit & Key Inspiration
* **Legacy Copy/Vibe**: "Homes and spaces painted with care, skill, and a family's pride in the work."
* **Core Strengths to Retain**:
  * Highlighting real Suncoast properties (Lakewood Ranch estate exteriors, modern gray stucco, tray ceiling interiors).
  * Clear category breakdown (Interior, Exterior, Cabinetry).
  * Emphasizing durability against Suncoast salt air and Florida UV heat.
* **Modern Upgrades**:
  * Replace static image grids with interactive category filtering (`Tabs`, `Badge`).
  * Add a full-screen image preview modal (`Dialog` / `Aspect Ratio`).
  * Add project specification cards detailing paint brand used (Sherwin-Williams Emerald / Duration), surface prep, and completion timeline.

---

## 2. Shadcn UI Component Matrix
* **Tabs**: For category filtering (`All Projects`, `Exterior`, `Interior`, `Cabinetry`).
* **Badge**: Highlight project location (e.g. `Country Club East`, `Waterside`) and service type (`Exterior Repaint`).
* **Card**: Base container for each project showcase (Image, Specs, Outcome Summary).
* **Aspect Ratio**: Ensures 16:9 or 4:3 high-res photo consistency without layout shift.
* **Dialog (Modal)**: Lightbox preview for full-resolution before/after or detail inspection.
* **Button**: Action triggers for requesting a quote for a similar project.

---

## 3. Design Philosophy
* **Visual Rhythm**: High-contrast, clean editorial grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
* **Pill/Radius Discipline**: Strict `--radius: 0.125rem` (2px) corners on cards, badges, and modals.
* **Color Palette**: Warm canvas (`bg-warm-bg`) with crisp ink cards (`bg-white` / `border-ink/10`) and terracotta CTAs.

---

## 4. Story Beat Map
1. **Beat 1 (Hero & Context)**: H1 "Our Projects & Craftsmanship" + lead copy emphasizing Suncoast home transformations.
2. **Beat 2 (Filter Bar)**: Interactive `Tabs` (`All`, `Exterior`, `Interior`, `Cabinet Refinishing`).
3. **Beat 3 (Featured Project Grid)**: High-resolution cards displaying photo, location badge, scope specs, and description.
4. **Beat 4 (Craftsmanship Proof & Specs)**: Callout banner explaining paint system used (Sherwin-Williams Emerald, weather-rated coatings).
5. **Beat 5 (Call to Action)**: "Have a project like this in mind?" -> Direct link to `/contact` estimate form.

---

## 5. Wireframe Layout

```
[ HEADER NAVIGATION ]
[ BREADCRUMBS: Home > Projects ]

==================================================
HERO:
H1: Our Projects & Craftsmanship
Paragraph: Real Suncoast homes, finished with care, skill, and family pride.
==================================================

CATEGORY FILTER TABS:
[ All Projects ] [ Exterior ] [ Interior ] [ Cabinet Refinishing ]

PROJECT GRID (3 Columns):
+--------------------------------------------------+
| [ Aspect Ratio Image: Mediterranean Estate ]     |
| [ Badge: Lakewood Ranch ] [ Badge: Exterior ]    |
| H3: Country Club East Refresh                    |
| Specs: Weather-Rated Coating · 4-Day Prep        |
| Summary: Full exterior stucco wash, seal, paint  |
| [ Button: View Full Case Study ]                 |
+--------------------------------------------------+
| [ Aspect Ratio Image: Greige Tray Ceiling ]      |
| [ Badge: Sarasota ] [ Badge: Interior ]          |
| H3: Palmer Ranch Interior Overhaul               |
| Specs: Low-VOC SW Emerald · Crown Molding        |
| Summary: Smooth walls, crisp white crown         |
| [ Button: View Full Case Study ]                 |
+--------------------------------------------------+
| [ Aspect Ratio Image: Kitchen Cabinet Spray ]    |
| [ Badge: Bradenton ] [ Badge: Cabinetry ]        |
| H3: Riverwalk Cabinet Refinishing                |
| Specs: Degreased, Deglossed, Sprayed Satin       |
| Summary: Factory-smooth kitchen transformation   |
| [ Button: View Full Case Study ]                 |
+--------------------------------------------------+

==================================================
CRAFTSMANSHIP BANNER:
"Every home shown here was prepped, masked, and painted by our family team."
==================================================

[ CTA SECTION: Ready to start your home's transformation? -> Call / Quote Button ]
[ FOOTER ]
```
