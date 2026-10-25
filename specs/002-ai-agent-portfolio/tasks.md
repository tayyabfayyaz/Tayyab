# Tasks: AI Agent Engineer Portfolio Redesign

**Input**: Design documents from `specs/002-ai-agent-portfolio/` (spec.md, plan.md)
**Tests**: Not requested in the spec; no test runner exists in this repo. Verification = `npm run lint`, `npm run build`, and manual acceptance-scenario checks (responsive widths, reduced-motion, link audit).

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Maps to spec.md user stories (US1–US4)

---

## Phase 1: Foundational (Blocking Prerequisites)

**Purpose**: Design system, brand constants, and content schema everything else depends on.

- [x] T001 Redefine design tokens in `app/globals.css`: new one-accent dark-first palette (kept swappable as CSS vars), drop `.gradient-hero` (purple-to-pink) and the orb-style `.glow-effect`/pulsing-blur patterns.
- [x] T002 [P] Replace the broken Google-Fonts `@import` for "Geist Sans"/"Geist Mono" with real `next/font/google` `Geist` + `Geist_Mono` wired into `app/layout.tsx`.
- [x] T003 [P] Create `lib/site-config.ts`: `IOTADEV_URL`, `TWITTER_URL` (placeholder constant), `GITHUB_URL`, `LINKEDIN_URL`, `EMAIL`, `COPYRIGHT`.
- [x] T004 [P] Create `content/projects.ts`: typed `Project`/`CaseStudy` entities per spec's Key Entities, covering the 3 featured case studies (Property AI Agent, SmartManager AI, Personal Assistant FTE) and the 3 other projects (AI Chatbot Agent, Workflow Automation Engine, API Integration Platform), with `TODO:` markers for every unverified field/link.
- [x] T005 Update `app/layout.tsx` metadata (title, description, Open Graph, Twitter card) to the new multi-agent-systems positioning.
- [x] T006 [P] Build `components/diagrams/agent-orchestration-diagram.tsx` — SVG + Framer Motion orchestrator→{Research, Tools/API, Memory}→result diagram, static end-state when `prefers-reduced-motion` is set.
- [x] T007 [P] Build `components/diagrams/architecture-diagram.tsx` — data-driven variant for case-study pages, same visual language and reduced-motion behavior.

**Checkpoint**: Tokens, fonts, brand constants, content schema, and both diagram primitives exist and compile.

---

## Phase 2: User Story 1 — Instant positioning on arrival (P1) 🎯 MVP

**Goal**: Hero alone communicates "builds production multi-agent systems" within 5 seconds.

- [x] T008 [US1] Build `components/sections/hero-section.tsx`: refined headline, sub-line (orchestrator-worker, MCP, production deployment), primary/secondary CTAs, embeds the orchestration diagram.
- [x] T009 [US1] Build `components/sections/proof-strip.tsx`: factual non-numeric signals only.
- [x] T010 [US1] Rewrite `app/page.tsx` to compose `HeroSection` + `ProofStrip` (remaining sections wired in later phases).
- [x] T011 [US1] Delete `app/components/hero_section.tsx` (superseded).

**Checkpoint**: `/` hero delivers the 5-second positioning test and passes reduced-motion/360px checks independently.

---

## Phase 3: User Story 2 — Evaluate a specific case study (P1)

**Goal**: Each featured case study is one click from home and renders the full 7-section template honestly (no fabricated data).

- [x] T012 [US2] Build `components/case-study/case-study-template.tsx`: Problem → Solution → Architecture diagram → Tech stack → My role → Outcome → Links, omitting any link type that isn't set.
- [x] T013 [US2] Build `components/sections/case-studies-section.tsx`: 3 featured cards sourced from `content/projects.ts`, linking to `/work/[slug]`.
- [x] T014 [US2] Build `app/work/[slug]/page.tsx`: `generateStaticParams` from `content/projects.ts`, `notFound()` for unknown slugs, renders `case-study-template`.
- [x] T015 [US2] Build `app/work/page.tsx`: index of case studies + other projects, with a link down to the existing `/portfolio` archive.
- [x] T016 [US2] Wire `CaseStudiesSection` into `app/page.tsx` after the proof strip.

**Checkpoint**: All 3 case studies reachable in ≤2 clicks from `/`, render every section or cleanly omit missing parts, `/work/unknown-slug` 404s cleanly.

---

## Phase 4: User Story 3 — Understand breadth of work and approach (P2)

**Goal**: Process, grouped capabilities, and other-projects sections render with real copy and correct link hygiene.

- [x] T017 [US3] Build `components/sections/process-section.tsx`: 4 ordered steps (Map the workflow → Design the agent architecture → Build & integrate tools → Deploy, monitor, iterate).
- [x] T018 [US3] Build `components/sections/capabilities-section.tsx`: grouped under Agent architecture / Integrations & MCP / Backend & APIs / Automation.
- [x] T019 [US3] Build `components/sections/other-projects-section.tsx`: AI Chatbot Agent, Workflow Automation Engine, API Integration Platform only, sourced from `content/projects.ts`, link hidden where absent.
- [x] T020 [US3] Build `components/sections/cta-section.tsx`: "Let's build your agent" + contact CTA.
- [x] T021 [US3] Finish wiring `app/page.tsx` in full spec order; delete `app/components/projects_section.tsx` and `app/components/skills_section.tsx`.

**Checkpoint**: Full home-page IA (all 7 sections) complete end to end.

---

## Phase 5: User Story 4 — Trust the links and brand identity (P3)

**Goal**: No dead/placeholder/profile-root links anywhere; IotaDev + correct socials everywhere.

- [x] T022 [US4] Update `app/components/header.tsx`: add Work to nav, drop Facebook, Twitter via `TWITTER_URL`, GitHub/LinkedIn via site-config constants.
- [x] T023 [US4] Update `app/components/footer.tsx`: "© 2026 Tayyab Fayyaz · IotaDev" line, IotaDev link, same social cleanup.
- [x] T024 [US4] Update `app/contact/page.tsx`: swap hardcoded socials for site-config constants, drop Facebook.
- [x] T025 [US4] Update `app/about/page.tsx`: same social-link cleanup (page stays out of nav per plan).

**Checkpoint**: Link audit across header/footer/contact/about shows zero Facebook links, zero bare `twitter.com`, zero project-link fallbacks to a GitHub profile root.

---

## Phase 6: Polish & Cross-Cutting Concerns

- [x] T026 [P] Restyle `app/services/page.tsx`: remove purple/pink gradients + pulsing orbs, align to new tokens (no IA change).
- [x] T027 [P] Restyle `app/portfolio/page.tsx` + `app/portfolio/[id]/page.tsx` (visual only — Supabase data logic untouched).
- [x] T028 Grep-sweep the repo for any remaining `gradient-hero`/orb-style usages and remove/replace them.
- [x] T029 Run `npm run lint`; fix all errors/warnings in touched files.
- [x] T030 Run `npm run build`; fix all type/build errors.
- [x] T031 Manual responsive sweep at 360px/768px/1280px and a `prefers-reduced-motion` check across all touched pages.
- [x] T032 Compile the final TODO list (missing repo/demo links, metrics, screenshots, brand colors) to hand back to the owner.

---

## Dependencies & Execution Order

Phase 1 (Foundational) blocks everything. Phases 2→3→4→5 follow spec priority order (P1, P1, P2, P3) and are largely sequential for a solo build, though `[P]`-marked tasks within a phase touch disjoint files. Phase 6 runs last, after all sections exist.
