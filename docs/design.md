# Design System — Antropología Visual

## Visual identity

### Color palette

Warm, earthy palette. All values from `src/styles/theme.css`.

**Fixed values — do not change without explicit user instruction:**

| Token | Hex/Value | Usage |
|---|---|---|
| `--background` | `#F2EBE0` | Page background (warm cream) |
| `--foreground` | `#1A1510` | Primary text, dark sections (dark brown) |
| `--accent` | `#8A6848` | Links, highlights, interactive accents (golden brown) |
| `--secondary` | `#DFD6C6` | Card/section backgrounds (light tan) |
| `--muted` | `#D0C5B2` | Subdued elements (muted tan) |
| `--muted-foreground` | `#6A5D4E` | Secondary text (brown-gray) |
| `--card` | `#E9E1D4` | Card surfaces |
| `--destructive` | `#b83222` | Error states |
| `--border` | `rgba(26,21,16,0.12)` | Borders, dividers |
| `--ring` | `rgba(26,21,16,0.25)` | Focus rings |

Dark theme variables exist in theme.css but are not actively toggled or used.

### Typography

Two Google Fonts loaded via `src/styles/fonts.css`:

- **Playfair Display** (serif) — headings, quotes, decorative text
  - Weights: 400, 500, 600, 700 (regular); 400, 500, 600 (italic)
  - Used at font-weight: 400 for all headings
- **DM Sans** (sans-serif) — body text, labels, navigation, buttons, forms
  - Weights: 300, 400, 500 (regular); 300, 400 (italic)

Base font size: 16px (`--font-size`).

### Visual hierarchy

- h1: Playfair Display, `clamp(2.4rem, 5.5vw, 5.2rem)`, line-height ~1.06
- h2: Playfair Display, `clamp(1.6rem, 3.5vw, 3.2rem)`, line-height ~1.12
- h3: Playfair Display, `clamp(1.1rem, 2vw, 1.4rem)`, line-height ~1.2
- Body: DM Sans, 0.85rem–1rem, line-height 1.7–1.88
- Labels/meta: DM Sans, 0.58rem–0.72rem, letter-spacing 0.1em–0.3em, uppercase
- Quotes/introductions: Playfair Display italic, `clamp(1.1rem, 2.2vw, 1.7rem)`, line-height ~1.55

### Borders and radii

- Border radius: `0rem` (sharp corners, no rounding)
- Border color: `rgba(26,21,16,0.12)` globally
- Scrollbar: 4px wide, `--muted` color, 2px radius

### Shadows and effects

- No box shadows used in the design system
- Gradient overlays on hero images: `linear-gradient(to top, rgba(26,21,16,0.7)–0.9, transparent)`
- Subtle grain texture on home hero (SVG noise filter, opacity 0.18)
- Backdrop blur on nav: `blur(8px)` when scrolled

## Layout

### Page structure

Every page follows this pattern:
1. Hero section (full-width, dark background, gradient overlay)
2. Content sections (max-width `6xl` = 1152px, centered)
3. CTA section (dark background, `#1A1510`)

### Containers

- Content container: `max-w-6xl mx-auto` (1152px max, centered)
- Horizontal padding: `px-6 md:px-12` (24px → 48px)
- Section vertical padding: `py-24 md:py-36` (96px → 144px) for major sections

### Grid

- Page sections: 12-column grid (`grid-cols-1 md:grid-cols-12`)
- Card grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Common column splits: 7/5, 8/4, 3/2 for asymmetric content
- Gap: `gap-8 md:gap-16` (32px → 64px) for major sections

### Section spacing

- Between major sections: 96px–144px vertical padding
- Between subsections: 48px–64px
- After section headers: `mb-12` to `mb-16`

## Responsive behavior

### Breakpoints

- Mobile-first approach using Tailwind `md:` (768px) and `lg:` (1024px)
- Single meaningful breakpoint at `md` for most layout changes
- `lg` used only for card grids (2→3 columns)

### Layout changes

- Grids collapse from multi-column to single column on mobile
- Padding reduces: `px-6` (mobile) → `px-12` (desktop)
- Hero heights use viewport units and `clamp()` for fluid sizing

### Typography changes

- Headings use `clamp()` for fluid sizing across all viewports
- No discrete font-size jumps between breakpoints

### Navigation

- Fixed header, transparent on home hero, opaque after scroll
- 4 nav links always visible (no hamburger menu)
- Active link gets animated underline via `motion` `layoutId`

### Images

- All images are currently Unsplash placeholder URLs
- Gallery images render as black `<div>` placeholders (not yet implemented)
- Cover images in publications also render as black placeholders

## Page sections

### Hero sections

Every page has a hero with:
- Full-width dark background (`#1A1510` or `#000`)
- Gradient overlay from transparent to dark brown at bottom
- Label text: DM Sans, 0.6rem, uppercase, letter-spacing 0.3em, white/30
- Title: Playfair Display, white, fluid clamp size
- Height varies: `100svh` (home), `75vh` (equipo), `62vh` (proyectos/publicaciones), `55vh` (contacto)

### Content sections

- Playfair Display italic for introductory/philosophical text
- DM Sans for body text and descriptions
- Uppercase labels with wide letter-spacing for section headers
- Accent line (`w-5–10 h-px bg-accent`) as section divider

### Card patterns

- Project cards: image with aspect ratio variation, category badge, hover overlay with subtitle
- Publication list: editorial layout (thumbnail + info + meta in 12-col grid)
- Team cards: portrait (3:4 aspect), name in Playfair, role in accent color

### Forms

- Input fields: transparent background, bottom border only
- Focus state: border color changes from `0.12` to `0.45` opacity
- Labels: uppercase, 0.58rem, wide letter-spacing, muted
- Submit button: solid foreground background, white text, hover changes to accent

### CTAs

- Dark background sections (`#1A1510`)
- Playfair Display heading in white
- Link text: uppercase, DM Sans, 0.72rem, letter-spacing 0.15em
- Animated underline on hover (width expansion)

## Component patterns

### FadeIn animation

Scroll-triggered animation wrapper used in every page:
- Initial: opacity 0, y: 20px
- In view: opacity 1, y: 0
- Duration: 0.8–0.9s
- Easing: `[0.22, 1, 0.36, 1]`
- Defined locally in each page file (not shared)

### Filter buttons

- Pill-shaped: `padding: 5px 14px`, border 1px
- Active state: solid foreground background, white text
- Inactive: transparent background, muted text, border color

### Links

- Text links: accent color, no underline, transition on hover
- Navigation links: color changes based on header state (white on transparent, dark on opaque)
- "Arrow" links: text + expanding horizontal line

## Design constraints

- The existing visual language is established and must be preserved
- Do not introduce new visual styles, patterns, or decorative elements
- Do not add shadows, gradients (beyond existing hero overlays), or border-radius
- Do not change the warm/earthy color palette
- Do not replace Playfair Display or DM Sans with different fonts
- The React implementation is the source of truth, not Figma
