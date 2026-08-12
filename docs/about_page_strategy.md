# About Subpage Strategy & Blueprint

## 1. Legacy Audit & Key Inspiration
* **Legacy Copy/Vibe**: "A more personal painting experience — built for the Gulf Coast."
* **Core Strengths to Retain**:
  * Family origin story: Founder Edwin taught his sons the trade.
  * Direct client relationship: Homeowners work directly with the family, not rotating subcontractors.
  * Climate expertise: Prep and weather-rated products specifically chosen for Gulf Coast sun, salt air, and humidity.
  * Written guarantees: Clean job site every day, written price held, walkthrough before final payment.
* **Modern Upgrades**:
  * Split narrative layout with interactive timeline/milestone cards (`Card`, `Badge`).
  * Empathy & Guarantees breakdown using accessible accordions (`Accordion`).
  * Clean credentials/trust display (insurance, warranty, local village coverage).

---

## 2. Shadcn UI Component Matrix
* **Accordion**: Interactive expansion of the 4 Core Guarantees & Climate Specifications.
* **Card**: Base container for core values, family story pillars, and Suncoast roots.
* **Badge**: Highlighting key traits (`Family-Owned`, `Licensed & Insured`, `Low-VOC Coatings`).
* **Separator**: Clean dividing lines between narrative beats.
* **Avatar**: Customer & founder profile representations.
* **Button**: Direct call to action to request a consultation with the family.

---

## 3. Design Philosophy
* **Visual Rhythm**: Warm editorial layout alternating between `bg-warm-bg` and `bg-white` card highlights.
* **Pill/Radius Discipline**: Enforce `rounded-[var(--radius)]` (2px) on all cards, accordions, and images.
* **Tone & Messaging**: Warm, confident, honest, and personal—focusing on family pride and uncompromised prep discipline.

---

## 4. Story Beat Map
1. **Beat 1 (Hero & Context)**: H1 "Built on Family, Care & Craftsmanship" + lead copy on Suncoast roots.
2. **Beat 2 (The Family Origin Story)**: Narrative grid detailing Edwin's founding principles, father-and-sons team, and zero-subcontractor policy.
3. **Beat 3 (The 4 Pillars of Value)**: 4-card grid (`Family-Owned`, `Florida Climate Prep`, `Eco-Friendly Low-VOC`, `Clean & Respectful Crews`).
4. **Beat 4 (The Family Guarantees)**: Interactive `Accordion` breaking down written price hold, daily site tidying, and pre-payment walkthrough.
5. **Beat 5 (Call to Action)**: "Experience the Family Difference on your next project." -> Link to `/contact`.

---

## 5. Wireframe Layout

```
[ HEADER NAVIGATION ]
[ BREADCRUMBS: Home > About ]

==================================================
HERO:
H1: Built on Family, Care & Craftsmanship
Paragraph: A more personal painting experience — built for the Gulf Coast.
==================================================

BEAT 2: THE FAMILY ORIGIN STORY (2 Columns):
+------------------------------------+------------------------------------+
| [ Image: Family Painting Crew ]   | H2: Founded on Pride & Discipline  |
|                                    | "Edwin founded 4 The Love of Color |
|                                    | and passed the trade down to his   |
|                                    | sons. When you hire us, you work   |
|                                    | directly with the owners."         |
+------------------------------------+------------------------------------+

BEAT 3: CORE PILLARS (4 Cards Grid):
+-------------------------+-------------------------+
| [ Card: Family Owned ]  | [ Card: Climate Prep ]  |
| No rotating sub-crews.  | Formulated for salt air |
+-------------------------+-------------------------+
| [ Card: Low-VOC Paint ] | [ Card: Clean Sites ]   |
| Safe for kids & pets.   | Tidy at end of day.     |
+-------------------------+-------------------------+

BEAT 4: WHAT YOU CAN HOLD US TO (Accordion):
[ v ] 1. Written Price Held (No hidden add-ons)
[ v ] 2. Clean Site Every Single Evening
[ v ] 3. Walkthrough Before Final Payment
[ v ] 4. Weather-Rated Gulf Coast Coatings

==================================================
[ CTA SECTION: Work Directly With Our Family -> Call / Quote Button ]
[ FOOTER ]
```
