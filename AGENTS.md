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

## Context management

Do NOT re-scan the entire repository at the start of each session.

1. Consult `docs/design.md`, `docs/architecture.md`, `docs/development.md` first.
2. Identify only the files relevant to the current task.
3. Inspect those files. Expand investigation only when necessary.
4. Avoid rediscovering architecture that is already documented.
5. Never perform a repository-wide scan merely because a new session started.

## Design fidelity

`docs/design.md` is the source of truth for the visual system.

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
