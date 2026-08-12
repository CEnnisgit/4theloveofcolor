# Contact Subpage Strategy & Blueprint

## 1. Legacy Audit & Key Inspiration
* **Legacy Copy/Vibe**: "Get a free estimate for your next painting project."
* **Core Strengths to Retain**:
  * Direct contact channels (Phone: `(917) 584-0069`, Email: `4theloveofcolorpainting@gmail.com`).
  * Explicit service area listing (Lakewood Ranch villages, Sarasota, Bradenton, Palmetto, Parrish, Venice).
  * Fast quote turnaround promise (written quote delivered after walkthrough).
* **Modern Upgrades**:
  * Implement an accessible Shadcn multi-field estimate form using `Form`, `Input`, `Textarea`, `Select`, `Checkbox`, and `Button`.
  * Integrated Netlify Forms handling with instant user feedback via `Sonner (Toast)` alerts.
  * Interactive Service Area selection grid with quick-call triggers.

---

## 2. Shadcn UI Component Matrix
* **Form**: React Hook Form integration with Zod validation for robust estimate requests.
* **Input**: Name, Email, Phone, Project Address inputs.
* **Select**: Service type selection (`Interior Repaint`, `Exterior Coating`, `Cabinet Refinishing`, `Commercial`).
* **Textarea**: Project scope & timeline notes.
* **Checkbox**: Property type (`Single Family Home`, `Townhome/Condo`, `HOA`, `Commercial`).
* **Card**: Base container for contact channels & direct business info.
* **Sonner (Toast)**: Immediate confirmation feedback ("Estimate Request Sent! We'll contact you within 24 hours.").
* **Button**: High-contrast submit button (`bg-terracotta text-white`).

---

## 3. Design Philosophy
* **Visual Rhythm**: Split-column layout (`grid-cols-1 lg:grid-cols-12`) featuring Direct Contact Info on the left and the Interactive Estimate Form on the right.
* **Pill/Radius Discipline**: Enforce `rounded-[var(--radius)]` (2px) on all form fields, select menus, cards, and submit buttons.
* **Frictionless Experience**: Clear labels, inline error messages, and immediate toast feedback on submit.

---

## 4. Story Beat Map
1. **Beat 1 (Hero & Context)**: H1 "Request an Estimate or Consult" + lead copy setting transparent pricing expectations.
2. **Beat 2 (Direct Contact Cards)**: 3-column quick-contact block (Phone, Email, Operating Hours).
3. **Beat 3 (Estimate Request Form & Contact Hub)**: 
   - Left (5 cols): Direct phone/email details, response time promise, list of Lakewood Ranch neighborhoods served.
   - Right (7 cols): Full interactive quote request form (`Form`, `Input`, `Select`, `Textarea`, `Button`).
4. **Beat 4 (Service Area Breakdown)**: Interactive city/neighborhood grid confirming local coverage.

---

## 5. Wireframe Layout

```
[ HEADER NAVIGATION ]
[ BREADCRUMBS: Home > Contact ]

==================================================
HERO:
H1: Request an Estimate or Consult
Paragraph: Straightforward, detailed quotes with zero pressure and zero hidden fees.
==================================================

BEAT 2: DIRECT CONTACT CARDS (3 Columns):
+-------------------------+-------------------------+-------------------------+
| [ Card: Call Direct ]   | [ Card: Email Us ]      | [ Card: Service Area ]  |
| (917) 584-0069          | 4theloveofcolor...      | Lakewood Ranch, FL      |
| Mon–Sat, 8am–6pm        | 24hr response           | Suncoast region         |
+-------------------------+-------------------------+-------------------------+

BEAT 3: ESTIMATE FORM & HUB (12 Columns):
+------------------------------------+---------------------------------------------+
| LEFT (5 cols): DIRECT DETAILS      | RIGHT (7 cols): INTERACTIVE ESTIMATE FORM   |
|                                    |                                             |
| H2: Speak with the Owners          | H2: Request Your Detailed Estimate          |
| "We walk every property with you   |                                             |
| and provide a written quote that   | [ Full Name Input ]                         |
| holds firm."                       | [ Phone Number Input ]                      |
|                                    | [ Email Address Input ]                     |
| Served Villages:                   | [ Select Service Type: Interior/Exterior..] |
| • Country Club East                | [ Select Preferred Timeline ]               |
| • The Lake Club                    | [ Project Details Textarea ]                |
| • Waterside / Esplanade            |                                             |
|                                    | [ SUBMIT ESTIMATE REQUEST BUTTON ]          |
+------------------------------------+---------------------------------------------+

==================================================
[ FOOTER ]
```
