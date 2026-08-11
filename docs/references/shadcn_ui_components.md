# shadcn/ui Component Reference

This document serves as a reference for all the UI components available via `shadcn/ui`. Because `shadcn/ui` is not a traditional dependency (the code is copied directly into your project via the CLI), this list acts as a menu of what we can generate and customize for the 4theloveofcolor website.

## Layout & Structure
* **Card**: Essential for services, testimonials, and features. Contains Header, Title, Description, Content, and Footer.
* **Separator**: Visually or semantically separates content (horizontal or vertical lines).
* **Scroll Area**: A custom cross-browser scrollbar for overflowing content.
* **Aspect Ratio**: Maintains a consistent aspect ratio for images/videos (perfect for the photo galleries).
* **Resizable**: Accessible resizable panel groups.

## Navigation
* **Navigation Menu**: A collection of links for navigating websites, often used in headers with dropdowns.
* **Breadcrumb**: Displays the path to the current resource using a hierarchy of links.
* **Tabs**: A set of layered sections of content, displaying one panel of content at a time.
* **Sheet (Side Drawer)**: Extends from the edge of the screen. Perfect for mobile navigation menus.
* **Pagination**: Navigation to allow users to navigate between pages of content.

## Forms & Inputs
* **Form**: React Hook Form integration with Zod validation. Crucial for the "Get a Quote" contact form.
* **Input**: Standard text fields.
* **Textarea**: Multi-line text input.
* **Select**: A custom dropdown select menu.
* **Checkbox**: A control that allows the user to toggle between checked and not checked.
* **Radio Group**: A set of checkable buttons where only one can be checked.
* **Switch**: A control that allows the user to toggle between checked and not checked (toggle switch).
* **Slider**: An input where the user selects a value from within a given range.
* **Date Picker**: A popover containing a calendar.

## Buttons & Indicators
* **Button**: Displays a button or a component that looks like a button. Includes variants (default, outline, ghost, link, destructive).
* **Badge**: Displays a small badge or pill. Great for "New" or "Popular" tags.
* **Progress**: Displays an indicator showing the completion progress of a task.
* **Skeleton**: Used to show a placeholder while content is loading.

## Overlays & Modals
* **Dialog (Modal)**: A window overlaid on either the primary window or another dialog window.
* **Alert Dialog**: A modal dialog that interrupts the user with important content and expects a response.
* **Dropdown Menu**: Displays a menu to the user—such as a set of actions or functions—triggered by a button.
* **Popover**: Displays rich content in a portal, triggered by a button.
* **Hover Card**: For sighted users to preview content available behind a link.
* **Tooltip**: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

## Feedback & Notifications
* **Alert**: Displays a callout for user attention.
* **Toast / Sonner**: A succinct message that is displayed temporarily (e.g., "Message sent successfully").

## Data Display
* **Avatar**: An image element with a fallback for representing the user (great for testimonials).
* **Table**: A responsive HTML table structure.
* **Carousel**: A motion-enabled carousel for images or cards. Ideal for the project showcase.
* **Accordion**: A vertically stacked set of interactive headings that each reveal a section of content.
* **Collapsible**: An interactive component which expands/collapses a panel.
