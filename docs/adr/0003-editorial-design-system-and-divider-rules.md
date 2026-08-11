# 3. Sharp Editorial Design System & Divider Rules

* **Status**: Accepted
* **Date**: 2026-08-11
* **Context**: Establishing a distinct visual identity for 4 The Love of Color Painting required establishing rules around edge radii, pill tags, color rhythms, and section dividers.

## Decision

1. **Global Edge Radius**: Enforce `rounded-[var(--radius)]` where `--radius: 0.125rem` (2px). Avoid heavy bubble rounded corners (`rounded-2xl`, `rounded-full` on cards) to maintain a crisp editorial aesthetic.
2. **Standard Pill/Tag Component**: All section headers feature a standard tag (`w-52 sm:w-60 h-9`, `text-[11px] sm:text-[13px]`, `bg-ink text-white`, `rounded-[var(--radius)]`).
3. **Section Dividers**:
   - Sequential warm-to-warm background sections use a subtle `h-0.5 bg-ink/30` dark line.
   - Key section transitions (Services section, Service Area section, and above Footer) utilize the 6-stripe **Retro Macintosh Rainbow Bar** (`#61bb46`, `#fdb827`, `#f5821f`, `#e03a3e`, `#963d97`, `#009dcf`) at `h-2 sm:h-2.5` (or `h-2 sm:h-3`).

## Consequences

* **Pros**:
  * Highly cohesive brand aesthetic across all viewports.
  * Clear visual separation without harsh contrast jarring.
* **Cons**:
  * Strict enforcement required for all new components to preserve the 2px radius rule.
