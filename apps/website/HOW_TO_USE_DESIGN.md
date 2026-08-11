# How to Use DESIGN.md

`DESIGN.md` is an "agent-native" design system specification designed to bridge the gap between human designers and AI coding agents. 

When working on a UI codebase, AI agents (like Claude) require a singular Source of Truth for a brand's visual identity to prevent the generation of generic or inconsistent interface code. 

## Structure of the Document

The `DESIGN.md` file is strictly divided into two sections:

1. **YAML Frontmatter (Machine-Readable Tokens):**
   Located at the very top of the file between the `---` dashes, this section defines the raw design tokens (hex codes, spacing scales, border radii, font families). AI agents parse this to know exactly what values to plug into Tailwind CSS configs or component styles.
   
2. **Markdown Body (Human & AI-Readable Guidelines):**
   The body of the document contains the principles, rationale, and specific component rules (e.g., "Buttons must have full rounded corners and a drop shadow"). This guides the AI's decision-making process when structuring layouts and applying the tokens.

## Workflow

1. **Keep it Updated:** Whenever the brand identity changes (e.g., a new primary color is chosen), update the `DESIGN.md` YAML frontmatter first. 
2. **Contextual Awareness:** Before an AI agent is asked to build a new page or component, it will read this file. You do not need to repeatedly tell the agent "make the button terracotta"—it already knows the brand standards.
3. **Tailwind Integration:** The design tokens inside `DESIGN.md` should be mirrored perfectly in your `tailwind.config.ts`. If a token exists in `DESIGN.md`, it should be the default used in the code.

By maintaining this document, you guarantee that any future developers or AI agents that touch this codebase will instantly align with the exact aesthetic of the **4theloveofcolor** brand.
