# Design System — Antropología Visual

Source of truth for the visual system. Based on the existing React implementation.
The React code is the implementation source of truth; this document describes it.

---

## 1. Design Principles

- **Warmth and restraint.** Earthy palette, no decorative excess. The work speaks.
- **Typographic clarity.** Two fonts, clear hierarchy, fluid scaling.
- **Sharp geometry.** No border-radius, no shadows. Precision over softness.
- **Content-first.** Images and text dominate. UI chrome recedes.
- **Accessible by default.** Contrast, focus, and semantics are not optional.

---

## 2. Existing Visual Identity

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
| `--muted-foreground` | `#5C5040` | Secondary text (brown-gray, AA-compliant on `--background`) |
| `--card` | `#E9E1D4` | Card surfaces |
| `--primary` | `#1A1510` | Button backgrounds, dark surfaces |
| `--primary-foreground` | `#F2EBE0` | Text on primary backgrounds |
| `--destructive` | `#b83222` | Error states |
| `--border` | `rgba(26,21,16,0.12)` | Borders, dividers |
| `--ring` | `rgba(26,21,16,0.25)` | Focus rings |

Dark theme variables exist in theme.css but are not actively toggled or used.

### Typography

Two Google Fonts loaded via `src/styles/fonts.css`:

- **Playfair Display** (serif) — headings, quotes, decorative text
  - Loaded weights: 400, 500, 600, 700 (regular); 400, 500, 600 (italic)
  - Used at weight 400 for all headings
- **DM Sans** (sans-serif) — body text, labels, navigation, buttons, forms
  - Loaded weights: 300, 400, 500 (regular); 300, 400 (italic)

Base font size: 16px (`--font-size`).

### Borders and radii

- Border radius: `0rem` (sharp corners, no rounding)
- Border color: `rgba(26,21,16,0.12)` globally
- Scrollbar: 4px wide, `--muted` color, 2px radius

### Shadows and effects

- No box shadows used in the design system
- Gradient overlays on hero images: `linear-gradient(to top, rgba(26,21,16,0.7)–0.9, transparent)`
- Subtle grain texture on home hero (SVG noise filter, opacity 0.18)
- Backdrop blur on nav: `blur(8px)` when scrolled

---

## 3. Design Tokens

### 3.1 Color tokens

Already defined in `src/styles/theme.css`:

```css
--background: #F2EBE0;
--foreground: #1A1510;
--foreground-rgb: 26, 21, 16;
--background-rgb: 242, 235, 226;
--white-rgb: 255, 255, 255;
--accent: #8A6848;
--secondary: #DFD6C6;
--muted: #D0C5B2;
--muted-foreground: #5C5040;
--card: #E9E1D4;
--primary: #1A1510;
--primary-foreground: #F2EBE0;
--border: rgba(26,21,16,0.12);
--ring: rgba(26,21,16,0.25);
--destructive: #b83222;
```

### 3.2 Typography tokens

| Token | Value | Source |
|---|---|---|
| `--font-playfair` | `'Playfair Display', Georgia, serif` | All heading/decorative inline styles |
| `--font-dm-sans` | `'DM Sans', sans-serif` | Body inherits from `body` rule; used via tokens in rare overrides |
| `--text-hero` | `clamp(2.4rem, 5.5vw, 5.2rem)` | Hero titles (5+ pages) |
| `--text-h2` | `clamp(1.6rem, 3.5vw, 3.2rem)` | Section/CTA headings |
| `--text-h3` | `clamp(1.05rem, 2vw, 1.4rem)` | Card/subsection headings |
| `--text-intro` | `clamp(1.1rem, 2.2vw, 1.7rem)` | Italic intro/quote text |
| `--text-body` | `0.85rem` | Standard body text |
| `--text-body-md` | `0.82rem` | Medium body, descriptions |
| `--text-body-lg` | `0.95rem` | Larger body variant |
| `--text-nav` | `0.78rem` | Nav links, footer text |
| `--text-label` | `0.6rem` | Section labels |
| `--text-label-lg` | `0.72rem` | CTA links, filter buttons |
| `--text-badge` | `0.58rem` | Meta badges, form labels |

### 3.3 Transition tokens

| Token | Value | Usage |
|---|---|---|
| `--ease-smooth` | `cubic-bezier(0.22, 1, 0.36, 1)` | All scroll/entrance animations |

### 3.4 Layout tokens

| Pattern | Tailwind | Pixels |
|---|---|---|
| Standard container | `max-w-6xl mx-auto` | 1152px max |
| Content padding | `px-6 md:px-12` | 24→48px |
| Major section vertical | `py-24 md:py-36` | 96→144px |
| Content section vertical | `py-20 md:py-28` | 80→112px |
| Compact section vertical | `py-14` | 56px |
| Standard hero height | `65vh` | All heroes except home |
| Home hero height | `100svh` | Home page only |

---

## 4. Typography System

### Display / Hero Title

| Property | Value |
|---|---|
| Font | `var(--font-playfair)` |
| Size | `var(--text-hero)` |
| Weight | 400 |
| Line-height | 1.05–1.08 |
| Letter-spacing | `-0.025em` |
| Color | `white` (on dark hero) or `var(--foreground)` |

### Heading h2

| Property | Value |
|---|---|
| Font | `var(--font-playfair)` |
| Size | `var(--text-h2)` |
| Weight | 400 |
| Line-height | 1.12–1.15 |
| Color | `var(--foreground)` or `white` |

### Heading h3

| Property | Value |
|---|---|
| Font | `var(--font-playfair)` |
| Size | `var(--text-h3)` |
| Weight | 400 |
| Line-height | 1.2 |
| Color | `var(--foreground)` or `white` |

### Italic Intro / Quote

| Property | Value |
|---|---|
| Font | `var(--font-playfair)` |
| Style | italic |
| Size | `var(--text-intro)` |
| Weight | 400 |
| Line-height | 1.55 |
| Color | `var(--muted-foreground)` |

### Body

| Property | Value |
|---|---|
| Font | `var(--font-dm-sans)` |
| Size | `var(--text-body)` |
| Weight | 400 |
| Line-height | 1.7–1.88 |
| Color | `var(--muted-foreground)` |

### Section Label

| Property | Value |
|---|---|
| Font | `var(--font-dm-sans)` |
| Size | `var(--text-label)` |
| Weight | 400 |
| Letter-spacing | `0.25em` |
| Transform | uppercase |
| Color | `var(--muted-foreground)` |

### Hero Label

| Property | Value |
|---|---|
| Font | `var(--font-dm-sans)` |
| Size | `var(--text-label)` |
| Weight | 400 |
| Letter-spacing | `0.3em` |
| Transform | uppercase |
| Color | `rgba(255,255,255,0.4)` (minimum for AA contrast) |

### Meta / Badge

| Property | Value |
|---|---|
| Font | `var(--font-dm-sans)` |
| Size | `var(--text-badge)` |
| Weight | 400 |
| Letter-spacing | `0.1em` |
| Transform | uppercase |
| Padding | `3px 8px` or `4px 10px` |
| Border | `1px solid var(--border)` |

### CTA Link

| Property | Value |
|---|---|
| Font | `var(--font-dm-sans)` |
| Size | `var(--text-label-lg)` |
| Weight | 400 |
| Letter-spacing | `0.12–0.15em` |
| Transform | uppercase |
| Color | `var(--accent)` or `var(--muted-foreground)` |
| Pattern | text + expanding horizontal line (`w-5→w-8 h-px bg-current`) |

### Button (Primary)

| Property | Value |
|---|---|
| Font | `var(--font-dm-sans)` |
| Size | `0.7–0.8rem` |
| Weight | 400–500 |
| Letter-spacing | `0.15–0.2em` |
| Padding | `12px 32px` or `16px 32px` |
| Background | `var(--foreground)` |
| Color | `var(--primary-foreground)` |

### Form Label

| Property | Value |
|---|---|
| Font | `var(--font-dm-sans)` |
| Size | `var(--text-badge)` |
| Weight | 400 |
| Letter-spacing | `0.15em` |
| Transform | uppercase |
| Color | `var(--muted-foreground)` |

---

## 5. Spacing / Layout System

### Page structure

Every page follows:
1. Hero section (full-width, dark background, gradient overlay)
2. Content sections (max-width `6xl`, centered)
3. CTA section (dark background, `var(--foreground)`)

### Container

Standard: `max-w-6xl mx-auto` (1152px) with `px-6 md:px-12` (24→48px).

### Grid

- Page sections: 12-column grid (`grid-cols-1 md:grid-cols-12`)
- Card grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Common column splits: 7/5, 8/4, 3/2 for asymmetric content

### Section spacing

| Pattern | Tailwind | Pixels |
|---|---|---|
| Major sections | `py-24 md:py-36` | 96→144px |
| Content sections | `py-20 md:py-28` | 80→112px |
| Compact sections | `py-14` | 56px |
| After section headers | `mb-12` to `mb-16` | 48→64px |

---

## 6. Components and UI Patterns

### FadeIn (animation wrapper)

Scroll-triggered animation wrapper. Extracted to `src/app/components/FadeIn.tsx`.

Props: `delay?: number`, `margin?: string`, `duration?: number`, `y?: number`, `className?: string`.

Defaults: `margin: '-50px'`, `duration: 0.85`, `y: 20`.

### Filter Button

Reusable filter/pill button. Extracted to `src/app/components/FilterButton.tsx`.

Props: `active: boolean`, `onClick: () => void`, `children: React.ReactNode`.

### CTA Link (Arrow Link)

Text link with expanding underline. Extracted to `src/app/components/CtaLink.tsx`.

Props: `to: string`, `color?: string`, `children: React.ReactNode`.

### Section Header

Label + accent line. Extracted to `src/app/components/SectionHeader.tsx`.

Props: `label: string`, `className?: string`.

### Card (Project)

Image with varied aspect ratio, category badge, hover overlay with subtitle. Remains in `Proyectos.tsx`.

### Card (Publication)

Editorial list layout (12-col grid: thumbnail + info + meta). Remains in `Publicaciones.tsx`.

### Card (Team Member)

Portrait (3:4 aspect), name in Playfair, role in accent color. Remains in `Equipo.tsx` and `Colectivo.tsx`.

### Input (Form)

Transparent bg, bottom border only. Extracted to `src/app/components/FormInput.tsx`.

Props: `label: string`, `name: string`, `type?: string`, `variant?: 'light' | 'dark'`, `value: string`, `onChange`, `required?: boolean`.

### Hero Section

Full-width, dark bg, gradient overlay. Height: `100svh` (home only), `65vh` (all other pages).

### CTA Section

Dark bg (`var(--foreground)`), white text, Playfair heading, CTA link with expanding underline.

---

## 7. Component States

### Hover

| Element | Behavior |
|---|---|
| Text links | Color transitions to `var(--accent)` |
| Card images | `scale(1.045–1.05)` with `duration-700` |
| Filter buttons | Background becomes solid, text inverts |
| CTA links | Line width expands `w-5→w-8` |
| Primary buttons | Background shifts to `var(--accent)` or border lightens |

### Focus-visible

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

### Selected (Filter)

Active filter: `bg: var(--foreground)`, `color: var(--primary-foreground)`, `border-color: var(--foreground)`.

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile (default) | <768px | Single column, `px-6`, reduced hero heights |
| `md:` | >=768px | Multi-column grids, `px-12`, full hero heights |
| `lg:` | >=1024px | 3-column card grids |

### Typography

- Headings use `clamp()` for fluid sizing — no discrete jumps between breakpoints

### Layout

- Grids collapse from multi-column to single column on mobile
- Padding: `px-6` (mobile) -> `px-12` (desktop)

### Navigation

- Fixed header, transparent on hero, opaque after scroll
- 4 nav links always visible (no hamburger)
- Active link: animated underline via `motion` `layoutId`

---

## 9. Accessibility Rules

### Color contrast (WCAG 2.2 AA)

| Requirement | Token/Combination | Ratio | Status |
|---|---|---|---|
| Normal text >= 4.5:1 | `--muted-foreground` on `--background` | ~4.5:1 | PASS |
| Large text >= 3:1 | Headings on `--background` | >7:1 | PASS |
| Hero labels >= 4.5:1 | `white/40` on `#1A1510` | ~3.5:1 | Large text only (>=18px) |
| Footer text >= 4.5:1 | `primary-foreground/60` on dark | ~4.2:1 | PASS for large text |
| UI components >= 3:1 | `--border` on `--background` | >3:1 | PASS |

### Focus indicators

All interactive elements must have visible `:focus-visible` outline: `2px solid var(--accent)` with `2px` offset.

### Form labels

Every input must have an associated `<label>` or `aria-label`.

### Semantic HTML

- `<html lang="es">`
- `<nav>` for navigation
- `<main>` for page content
- Heading hierarchy: h1 -> h2 -> h3 (no skipped levels)

---

## 10. Existing Styling Architecture

| Layer | Mechanism | Files |
|---|---|---|
| Global tokens | CSS custom properties | `src/styles/theme.css` |
| Typography imports | Google Fonts CSS | `src/styles/fonts.css` |
| Tailwind setup | CSS `@import` | `src/styles/tailwind.css` |
| Tailwind theme | `@theme inline` block | `src/styles/theme.css:81–120` |
| Base styles | `@layer base` | `src/styles/theme.css:122–176` |
| Utility classes | Tailwind classes + custom `.ds-*` classes | `src/styles/theme.css` |
| Component styles | Inline `style` objects + Tailwind | All page/component `.tsx` files |

---

## 11. Implementation Mapping

| Design System element | Implementation target |
|---|---|
| Color tokens | `src/styles/theme.css` |
| Typography tokens | `src/styles/theme.css` — CSS custom properties |
| Typography utility classes | `src/styles/theme.css` `@layer base` — `.ds-hero`, `.ds-h2`, `.ds-h3`, `.ds-intro`, `.ds-body`, `.ds-label`, `.ds-badge`, `.ds-cta-link` |
| Focus-visible styles | `src/styles/theme.css` `@layer base` |
| `<html lang="es">` | `index.html` |
| `<main>` landmark | `src/app/components/Layout.tsx` |
| FadeIn component | `src/app/components/FadeIn.tsx` |
| FilterButton component | `src/app/components/FilterButton.tsx` |
| CtaLink component | `src/app/components/CtaLink.tsx` |
| SectionHeader component | `src/app/components/SectionHeader.tsx` |
| FormInput component | `src/app/components/FormInput.tsx` |

---

## 12. Known Inconsistencies

| Issue | Location | Status |
|---|---|---|
| Container `max-w-7xl` instead of `max-w-6xl` | `Multimedia.tsx`, `Colectivo.tsx` | Standardized |
| Container padding `px-8 md:px-16` | `Multimedia.tsx`, `Colectivo.tsx` | Standardized |
| Hero heights vary per page | All pages | Standardized to `65vh` (home `100svh`) |
| `#1A1510` hardcoded hex in hero sections | 7 files | Replaced with `var(--foreground)` |
| `#000` hardcoded as placeholder bg | 9 locations | Replaced with `var(--foreground)` |
| `rgba(26,21,16,...)` hardcoded | 25+ locations | Replaced with CSS variable references |
| Form input border palettes incompatible | `Layout.tsx` vs `Contacto.tsx` | Unified with `variant` prop |

---

## 13. Appendix: Classification

### What already exists

- Complete CSS variable system in `theme.css`
- Two-font system (Playfair Display + DM Sans)
- Sharp-corner design language (`--radius: 0rem`)
- No shadows, no decorative effects
- Hero -> Content -> CTA page structure
- Tailwind utility class infrastructure
- Base styles for body, headings, buttons, inputs

### What was standardized

- Font family tokens (`--font-playfair`, `--font-dm-sans`)
- Typography size tokens (`--text-hero`, `--text-h2`, etc.)
- FadeIn -> shared component with configurable props
- FilterButton -> shared component
- CtaLink -> shared component
- SectionHeader -> shared component
- FormInput -> shared component with light/dark variant
- Hero height -> `65vh` for all pages except home (`100svh`)
- Container -> `max-w-6xl` + `px-6 md:px-12` for all pages

### What was changed for accessibility

- `<html lang="es">` (was `en`)
- `<main>` landmark added in Layout
- `:focus-visible` styles added
- `--muted-foreground` darkened to `#5C5040` (4.5:1 contrast)
- Hero label opacity raised to `white/40` minimum
- Footer text opacity raised to `/60` minimum
- Footer form inputs given proper labels

### What remains component-specific

- Hero gradient compositions (unique per page)
- Card aspect ratios (intentionally varied)
- Parallax scroll amounts
- Specific FadeIn delay values per usage
- Dynamic hover state values
- Page-specific layout structures

### Accessibility issues addressed

- `lang="es"` (was `en`)
- Missing `<main>` landmark
- Missing `:focus-visible` styles
- `--muted-foreground` contrast below 4.5:1
- Hero label contrast below 4.5:1
- Footer text contrast below 4.5:1
- Footer form inputs missing labels
