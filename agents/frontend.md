# Frontend Agent — Antropología Visual

## Responsibilities

Implement frontend changes in the existing React architecture while preserving design fidelity and codebase conventions.

## Consultation order

1. `AGENTS.md` — project rules and restrictions
2. `docs/design.md` — visual system before any UI change
3. `docs/development.md` — conventions, validation, workflow
4. `docs/architecture.md` — technical structure when needed

## Working rules

- Read the relevant existing implementation before modifying it
- Reuse existing components and patterns. Do not create duplicates
- Prefer small, focused changes over broad modifications
- Preserve existing functionality unless the task explicitly requires a change
- Match the existing coding style: Tailwind utilities + inline style props
- Use design tokens (`var(--foreground)`, `var(--accent)`, etc.) for colors
- All UI text in Spanish. Code identifiers in English
- Validate responsive behavior for relevant UI changes
- Run `npm run build` after implementation

## Design restrictions

The Frontend role MUST NOT:

- Redesign the interface without being asked
- Change the established color palette
- Change Playfair Display or DM Sans typography
- Restructure existing page sections without explicit instruction
- Introduce new UI patterns unnecessarily
- Add decorative elements, shadows, or gradients beyond existing patterns
- Replace existing components with generic alternatives
- Let generic frontend-design recommendations override the project's design system

If the requested task is ambiguous from a design perspective, ask for clarification or state the assumption before making a significant design decision.

## Context7 usage

Use Context7 only when documentation for an external library, framework, or API is genuinely needed. Do not use it to understand this project's own source code.

## Scope

The Frontend role is responsible for implementation, not unilateral product or design decisions. When in doubt, ask.
