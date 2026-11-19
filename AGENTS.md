# Antropología Visual — Agent Instructions

## Project

React multi-page website for a visual anthropology collective.
All user-facing content is in Spanish.
Current phase: frontend/design refinement before future WordPress migration.

## Critical rules

- Preserve the existing React architecture. Do not migrate frameworks.
- Reuse existing components and patterns. Do not duplicate implementations.
- Do not introduce dependencies without clear reason and approval.
- Do not modify unrelated files.
- Preserve existing functionality unless a change is explicitly requested.
- Do not perform broad refactors without explicit approval.
- **Icons must come from an installed icon library, never hand-written inline SVGs.** Use `lucide-react` (already installed). Import the specific icon (e.g. `import { Instagram } from 'lucide-react'`) instead of writing SVG markup manually. If an icon is not available in Lucide, request approval before adding another library.
- **NEVER run `npm run build` or `npm build`.** cPanel handles the build on deploy. Running build locally creates unnecessary changes.

## Git

- Active branch: `staging`. Do not modify `main` unless instructed.
- Do not commit or push unless explicitly requested.
- When pushing, ALWAYS use this sequence to avoid diverging branches with cPanel:
  ```bash
  git add .
  git commit -m "your message"
  git pull --rebase origin staging
  git push origin staging
  ```
- If `git pull --rebase` fails with unstaged changes: `git stash` → `git pull --rebase origin staging` → `git stash pop` → `git push origin staging`
- If rebase has conflicts with `dist/`: remove `dist/` and continue (`git rm -r --cached dist/` → `git rebase --continue`)
- **NEVER use `git push --force`** — it causes diverging branches with cPanel
- **NEVER run `git reset --hard`** — it loses user's uncommitted work

## Context management

Do NOT re-scan the entire repository at the start of each session.

1. Consult `docs/design.md`, `docs/architecture.md`, `docs/development.md` first.
2. Identify only the files relevant to the current task.
3. Inspect those files. Expand investigation only when necessary.
4. Avoid rediscovering architecture that is already documented.
5. Never perform a repository-wide scan merely because a new session started.

## Design fidelity

`docs/design.md` is the source of truth for the visual system.

### Mandatory design system compliance

- `docs/design.md` and the tokens defined in `src/styles/theme.css` are the mandatory reference for any visual decision.
- Before implementing or modifying styles, identify the existing tokens, Tailwind classes, and components that match the requirement.
- Reuse existing resources whenever possible, in CSS, Tailwind utility classes, and inline React styles alike.

### No hardcoded visual values

- Do not write visual values directly in the code when a token, class, or reusable resource exists to represent them.
- For colors, always use existing tokens (e.g. `var(--foreground)`) instead of hardcoded hex values such as `#1A1510`.
- Apply the same criterion to typography, text sizes, spacing, borders, radii, shadows, transitions, animations, and any other visual property.
- Do not duplicate values that are already centralized; do not create redundant variables.
- Do not add new arbitrary values simply because they are convenient for a given implementation.

### Consultation before introducing new values

- If a task requires a visual value not covered by `docs/design.md`, `src/styles/theme.css`, or existing patterns, stop before implementing it.
- Explain what value is missing, where it is needed, and why current resources are insufficient.
- Propose an alternative using the existing system, or request approval to add a new token or pattern.
- Wait for explicit approval before introducing new visual values, creating variables, modifying existing tokens, or extending the design system.
- Do not treat an implementation request as automatic authorization for new design decisions.

### Technical exceptions

- Literal values that are necessary for technical functionality and do not represent design-system decisions are not prohibited.
- If a specific visual value cannot be reasonably resolved with existing resources, consult before deciding how to implement it.

### Verification before finishing

- Review the changes made to detect hardcoded visual values that should use existing tokens or resources.
- Verify that no new tokens, colors, sizes, or visual patterns have been introduced without approval.
- If a gap in the style guide is detected, report it and leave that decision pending rather than inventing a solution.

### Unsolicited changes

Do NOT make unsolicited design changes. Unless explicitly requested:

- Do not change the established color palette
- Do not change typography
- Do not change spacing conventions
- Do not restructure existing page sections
- Do not introduce new visual patterns
- Do not add decorative elements, animations, gradients, or shadows

If an improvement is noticed but was not requested, mention it as a suggestion after completing the requested work.

The existing React implementation is the source of truth for code changes.
Figma must NOT be treated as the source of truth.

## Source-of-truth hierarchy

1. Explicit user instructions
2. Existing project implementation and constraints
3. This file (AGENTS.md)
4. Relevant project documentation (`docs/`)
5. Role instructions (`agents/`)
6. Installed skills and generic best practices
7. External recommendations

Generic skills must not override project-specific rules.

## Context7

Context7 is available as an MCP server for external library documentation.

- Use when current documentation for an external library, framework, or API is required.
- Do NOT use to understand this project's own source code.
- The repository and project documentation are the source of truth for project-specific behavior.
- Do not invoke Context7 unnecessarily.

## Skills

Installed skills provide general-purpose capabilities.

Project-specific rules, existing implementation, explicit user instructions, and project documentation take precedence over generic skill recommendations.

## Protected deployment configuration

`.cpanel.yml` is CRITICAL and PROTECTED. It MUST NEVER be modified, deleted, renamed, moved, reformatted, or replaced. If any task appears to require changing it, STOP and ask the user.

## Analysis vs implementation

When asked to analyze, inspect, plan, review, or explain: do not modify source code unless explicitly requested.

When explicitly asked to implement: inspect relevant existing implementation first, make the smallest appropriate change, preserve architecture and design, validate the result.

## Documentation

- `docs/design.md` — visual system, tokens, layout, responsive, UI patterns
- `docs/development.md` — commands, conventions, workflow, validation, Git
- `docs/architecture.md` — technical structure, routing, components, data, build

Do not duplicate their contents here.

## Language

UI text in Spanish. Code identifiers in English.

## Git

Active branch: `staging`. Do not modify `main` unless instructed.
Do not commit or push unless explicitly requested.
