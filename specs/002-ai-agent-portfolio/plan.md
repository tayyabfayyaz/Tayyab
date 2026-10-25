# Implementation Plan: AI Agent Engineer Portfolio Redesign

**Branch**: `002-ai-agent-portfolio` | **Date**: 2026-10-24 | **Spec**: `specs/002-ai-agent-portfolio/spec.md`
**Input**: Feature specification from `specs/002-ai-agent-portfolio/spec.md`

## Summary

Reposition the home page and introduce a case-study system so a founder/hiring manager understands within 5 seconds that Tayyab Fayyaz designs and ships production multi-agent systems. Rebuild the home page to the 7-section IA (hero w/ animated orchestrator-worker SVG diagram, proof strip, 3 case studies, 4-step process, grouped capabilities, other-projects grid, CTA), add a typed `content/projects.ts` content layer and a `/work/[slug]` case-study template, fix header/footer link hygiene, and replace the purple/pink-gradient, glowing-orb visual language with a calm, dark-first "engineering tool" design system — without touching the existing Supabase-backed `/portfolio` archive or `/admin` CMS logic.

## Technical Context

**Language/Version**: TypeScript 5 (strict mode already on)
**Primary Dependencies**: Next.js 15.5 (App Router, Turbopack), React 19, Tailwind CSS v4 (CSS-variable tokens), Framer Motion 12 (`framer-motion` + `motion/react`, both already installed — standardizing on `framer-motion` for new code), shadcn/ui primitives (`button`, `card`, `badge`), `lucide-react` icons, `next-themes`.
**Storage**: N/A for new content — static TypeScript data module (`content/projects.ts`). Existing Supabase project (`lib/supabase.ts`) stays untouched and keeps powering `/portfolio` + `/admin/upload`.
**Testing**: No test runner configured in this repo (confirmed — no Jest/Vitest/Playwright deps). Verification is `npm run lint`, `npm run build`, and manual responsive/reduced-motion checks per the spec's acceptance scenarios; no new test framework introduced (out of scope per the approved brief, which did not request one).
**Target Platform**: Web, deployed on Vercel (existing `vercel.json`).
**Project Type**: Web (single Next.js app, no separate frontend/backend split).
**Performance Goals**: No render-blocking motion; hero diagram and scroll reveals must not delay content paint; target Lighthouse 90+ on Performance/Accessibility/Best Practices/SEO (best-effort, not a CI gate — no Lighthouse CI exists in this repo).
**Constraints**: No horizontal scroll at 360/768/1280px; `prefers-reduced-motion` fully respected; no fabricated metrics/client names/testimonials (TODO markers instead); every project link real or hidden; no new heavy dependencies.
**Scale/Scope**: Personal portfolio, ~9 routes total (6 existing + `/work` + `/work/[slug]` + unchanged `/admin`/`/login`), one new content module, no backend changes.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

`.specify/memory/constitution.md` in this repo is still the unfilled template (`[PROJECT_NAME] Constitution` with bracketed placeholders) — it has never been ratified with real principles for this project, so there are no concrete constitutional gates to check against. Noting this rather than inventing principles to satisfy the template. The closest real precedent is `specs/main/plan.md`'s informal checklist (spec-driven, component-based, clean UI, performant, typed/maintainable code) — this plan satisfies all five:

- [x] Originates from a written `spec.md` (this feature's).
- [x] UI built from modular, reusable section/diagram components, not one monolithic page file.
- [x] Clean, calm, responsive UI/UX is the explicit design goal (replacing the gradient/orb look).
- [x] No new render-blocking work; motion is deferred/optional via reduced-motion checks.
- [x] TypeScript strict, typed content module, no `any` introduced.

## Project Structure

### Documentation (this feature)

```text
specs/002-ai-agent-portfolio/
├── spec.md              # Feature specification (done)
├── plan.md              # This file
└── tasks.md             # Phase 2 output (next)
```

### Source Code (repository root)

```text
content/
└── projects.ts                      # NEW — typed case studies + other-projects data

lib/
└── site-config.ts                   # NEW — brand constants (IotaDev, socials, copyright)

components/
├── diagrams/
│   ├── agent-orchestration-diagram.tsx   # NEW — hero SVG+Framer Motion diagram
│   └── architecture-diagram.tsx          # NEW — reusable, data-driven diagram for case studies
├── sections/
│   ├── hero-section.tsx                  # NEW (replaces app/components/hero_section.tsx)
│   ├── proof-strip.tsx                   # NEW
│   ├── case-studies-section.tsx          # NEW
│   ├── process-section.tsx               # NEW
│   ├── capabilities-section.tsx          # NEW (replaces app/components/skills_section.tsx)
│   ├── other-projects-section.tsx        # NEW (replaces app/components/projects_section.tsx)
│   └── cta-section.tsx                   # NEW
└── case-study/
    └── case-study-template.tsx           # NEW — shared layout for /work/[slug]

app/
├── page.tsx                         # EDIT — compose new section order
├── layout.tsx                       # EDIT — new metadata/OG tags, next/font Geist+Geist_Mono
├── globals.css                      # EDIT — new tokens, drop gradient/orb utilities
├── work/
│   ├── page.tsx                     # NEW — case studies + other projects index, link to /portfolio archive
│   └── [slug]/page.tsx              # NEW — case-study detail via case-study-template
├── services/page.tsx                # EDIT — visual restyle only (remove orbs/gradients), no IA change
├── about/page.tsx                   # EDIT — visual restyle only, stays out of nav
├── portfolio/page.tsx               # EDIT — visual restyle only, Supabase logic untouched
├── portfolio/[id]/page.tsx          # EDIT — visual restyle only, Supabase logic untouched
├── contact/page.tsx                 # EDIT — social links use new site-config constants
└── components/
    ├── header.tsx                   # EDIT — nav + social link cleanup
    └── footer.tsx                   # EDIT — copy + social link cleanup

# DELETED (superseded by components/sections/*):
app/components/hero_section.tsx
app/components/projects_section.tsx
app/components/skills_section.tsx
```

**Structure Decision**: Stay inside the existing single Next.js App Router project — no new app/package boundary. New reusable building blocks go under `components/sections/`, `components/diagrams/`, and `components/case-study/` (parallel to the existing `components/ui/`), content moves to a new top-level `content/` module, and brand constants move to `lib/site-config.ts` alongside the existing `lib/utils.ts`. This keeps the Supabase-backed `/portfolio` + `/admin` subsystem fully isolated from the new static content layer, so neither can break the other.

## Complexity Tracking

> No constitution violations — table intentionally empty.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| — | — | — |
