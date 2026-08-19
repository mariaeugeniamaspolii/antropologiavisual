# Development Guide — Antropología Visual

## Commands

| Command | Purpose |
|---|---|
| `npm ci` | Install dependencies (CI, clean) |
| `npm install` | Install dependencies (local) |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |

No lint, typecheck, or test scripts are configured.

## Package manager

The repository has a `pnpm-workspace.yaml` but CI uses npm. Use npm for consistency with the CI pipeline.

## Project structure

```
src/
  main.tsx                  # Entry point, renders <App />
  styles/
    index.css               # Imports fonts, tailwind, theme
    fonts.css               # Google Fonts: Playfair Display + DM Sans
    tailwind.css            # Tailwind v4 source config
    theme.css               # CSS custom properties (design tokens)
  app/
    App.tsx                 # RouterProvider wrapper
    routes.ts               # Browser router definition
    pages/                  # One component per route
    components/
      Layout.tsx            # Shared nav + footer shell
      figma/                # Figma-generated components (mostly unused)
      ui/                   # shadcn/ui components (mostly unused)
    data/
      projects.ts           # Project data + TypeScript interfaces
      publications.ts       # Publication data + TypeScript interfaces
public/
  images/
    home/
      hero.gif              # Home hero background (animated, warm abstract)
    projects/
      {project-slug}/       # Matches slug in projects.ts
        cover.jpg           # Card thumbnail (700×900, ~3:4)
        hero.jpg            # Project hero background (1600×900, 16:9)
        gallery/
          01.jpg            # Gallery images, zero-padded
          02.jpg
          ...
    team/                   # Team member portraits (3:4 aspect)
      {name}.jpg
    publications/           # Publication covers
      {slug}.jpg
    ui/                     # UI elements, logos
      logo.svg
      favicon.png
```

## Coding conventions

### File naming

- Page components: `PascalCase.tsx` (e.g., `Home.tsx`, `ProyectoDetalle.tsx`)
- Utility/data files: `camelCase.ts` or `kebab-case.css`
- Component directories: `components/ui/`, `components/figma/`

### Exports

- Named exports for page components: `export function Home() {}`
- Default export only for `App.tsx`
- Named exports for data helpers: `export function getProjectBySlug() {}`

### Styling approach

Mixed method — Tailwind utility classes combined with inline `style` props:

- Tailwind: layout, spacing, flexbox, grid, responsive prefixes
- Inline styles: font-family, font-size, letter-spacing, color values
- CSS custom properties referenced via `var(--*)` in both methods
- Colors should use design tokens (`var(--foreground)`, `var(--accent)`, etc.), not hardcoded hex

### TypeScript

- Implicit TypeScript (`.tsx` files, no `tsconfig.json` strict mode)
- Interfaces defined in data files: `Project`, `Publication`, `PublicationType`
- No explicit type annotations on component props in most pages

## Making changes

### Before editing

1. Read `AGENTS.md` for project rules
2. Read the relevant file(s) fully
3. Understand the existing pattern in that file
4. Match the coding style (inline styles + Tailwind mix)
5. Check if a similar component/utility already exists

### Adding a new page

1. Create file in `src/app/pages/`
2. Add route in `src/app/routes.ts` (child of Layout)
3. Follow existing hero → content → CTA structure
4. Use FadeIn wrapper for scroll animations
5. Use `max-w-6xl mx-auto` for content containers
6. Use `px-6 md:px-12` for horizontal padding

### Adding new data

1. Create or extend files in `src/app/data/`
2. Define TypeScript interface for the entity
3. Export typed array and helper functions
4. Place images in `public/images/` following naming conventions (see Image architecture)

## Image architecture

All images live in `public/images/` and are served at root URL (`/images/...`).

### Naming conventions

| Type | Path pattern | Aspect ratio | Notes |
|---|---|---|---|
| Home hero | `public/images/home/hero.gif` | 16:9 | Animated, warm abstract, loop ~2s |
| Project cover | `public/images/projects/{slug}/cover.jpg` | ~3:4 | Card thumbnail, 700×900px |
| Project hero | `public/images/projects/{slug}/hero.jpg` | 16:9 | Full-width hero, 1600×900px |
| Gallery | `public/images/projects/{slug}/gallery/01.jpg` | varies | Zero-padded numbers, 1200px wide |
| Team portrait | `public/images/team/{name}.jpg` | 3:4 | Consistent crop, ~600×800px |
| Publication | `public/images/publications/{slug}.jpg` | ~3:4 | Book/document cover |

### Rules

- File names: `kebab-case` for directories, `lowercase` for files
- Formats: `.jpg` for photos, `.png` for transparency, `.gif` for animation, `.svg` for vector
- Gallery images: zero-padded (`01.jpg`, `02.jpg`, ... `12.jpg`)
- Max width for gallery: 1200px. Max width for heroes: 1600px
- Optimize before committing (use `npx sharp-cli` or similar)
- Project slugs in folder names must match `slug` field in `projects.ts`

## Validation

After every change:

1. Run `npm run build` — must succeed with no errors
2. Verify the dev server renders correctly
3. Test responsive behavior at mobile (375px), tablet (768px), desktop (1280px+)
4. Verify no regressions in other pages

## Git workflow

- Active branch: `staging`
- Do not modify `main` unless instructed
- Check `git status` and `git branch` before starting work
- Do not commit unless explicitly requested
- Do not push unless explicitly requested
- Keep commits focused on single changes

## Deployment

- Automatic on push to `staging` via GitHub Actions
- CI builds with Node 20 + npm, commits `dist/` to repo
- cPanel deploys from `dist/` to staging.antropologiavisual.org
- `.cpanel.yml` is protected and MUST NOT be modified

## Figma Make origin

This project was generated from Figma Make. Implications:

- `figmaAssetResolver` in vite.config.ts resolves `figma:asset/*` imports
- `src/app/components/figma/ImageWithFallback.tsx` exists but is unused
- ~48 shadcn/ui components are installed but most are unused
- `MARKER-MAKE-KIT-INVOKED` comment in App.tsx (leave untouched)
- The React implementation has evolved beyond the original Figma design

## Known issues

- No linting or type checking configured
- No test suite
- `dist/` is tracked in git (inflates repo size)
- FadeIn animation duplicated across files instead of shared
- Image placeholders (black divs) in project detail and gallery — components need wiring to local images
- Project data still references WordPress-hosted URLs for cover/hero/gallery — should migrate to local `public/images/`
