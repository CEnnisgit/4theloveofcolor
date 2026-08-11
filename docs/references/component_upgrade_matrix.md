# Component Upgrade Matrix

This document maps the custom-built UI elements from the original `4theloveofcolor` legacy codebase to their modern equivalents using **shadcn/ui** and **Tailwind CSS**. 

By replacing the legacy custom CSS with shadcn/ui primitives, we gain automatic accessibility (ARIA attributes, keyboard navigation), consistent design token usage, and significantly less CSS maintenance.

| Legacy Component (from `styles.css`) | Modern shadcn/ui Replacement | Implementation Notes / Tailwind Mappings |
| :--- | :--- | :--- |
| **Navigation / Header** (`.topbar`, `.nav-link`) | **Navigation Menu** + **Sheet** | Use `NavigationMenu` for the desktop layout. Use `Sheet` for the mobile hamburger menu drawer. Tailwind will handle the glassmorphism (`backdrop-blur-md`). |
| **Buttons** (`.button-solid`, `.button-outline`) | **Button** | Map `.button-solid` to the `default` variant using our `primary` design token. Map `.button-outline` to the `outline` variant. Use `rounded-full` for the pill shape. |
| **Cards** (`.service-card`, `.why-card`, `.guarantee-card`) | **Card** | Use `<Card>`, `<CardHeader>`, `<CardTitle>`, and `<CardContent>`. Apply the `surface` color and `rounded-2xl` / `rounded-3xl` for the signature soft corners. |
| **Testimonials** (`.testimonial-card`, `.review-avatar`) | **Card** + **Avatar** | Wrap the review in a `Card`. Use `Avatar` with `<AvatarImage>` and `<AvatarFallback>` for the customer photo to ensure it never breaks visually. |
| **FAQ / Q&A** (`.faq-item`) | **Accordion** | Replace the manual click-to-expand logic with `Accordion`. It natively handles the open/close animation and screen reader states. |
| **Project Galleries** (`.project-card`) | **Card** + **Carousel** | For lists of past work, use a grid of `Card`s. For horizontal swiping on mobile, wrap them in the `Carousel` component. |
| **Floating Panels** (`.floating-panel`) | **Card** + **Hover Card** | Small floating metrics over images can just be heavily styled `Card` components with absolute positioning. |
| **Contact Form** (`.contact-form`, inputs) | **Form**, **Input**, **Textarea** | Use shadcn's `Form` wrapper (which uses React Hook Form + Zod) for strict client-side validation. Use `Input` and `Textarea` primitives. |
| **Success Notifications** (Alerts) | **Sonner (Toast)** | When a user successfully submits a quote request, fire a `toast()` notification instead of a janky browser alert. |
| **Grids / Layouts** (`.grid-3`, `.city-grid`) | **Tailwind Grid** | No shadcn component needed. Replace `.grid-3` with `grid grid-cols-1 md:grid-cols-3 gap-6`. |
| **Scroll Reveal Animations** (`.reveal`) | **Tailwind / Framer Motion** | Instead of custom JS intersection observers, we can use Tailwind's `animate-in fade-in slide-in-from-bottom-4` utility classes or Framer Motion. |

### Upgrade Strategy
1. **Scaffold Primitives:** We will use the CLI (`npx shadcn@latest add <component>`) to pull the raw components into `apps/website/components/ui/`.
2. **Apply DESIGN.md Tokens:** We will globally modify the `radius` and `colors` inside `apps/website/globals.css` to ensure all shadcn components immediately adopt the warm terracotta and highly-rounded aesthetic of the original site.
3. **Assemble Pages:** We will compose these primitives into our major sections (Hero, Services, Testimonials, Form) inside `apps/website/src/app/page.tsx`.
