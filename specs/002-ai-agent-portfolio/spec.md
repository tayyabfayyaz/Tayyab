# Feature Specification: AI Agent Engineer Portfolio Redesign

**Feature Branch**: `002-ai-agent-portfolio`
**Created**: 2026-10-24
**Status**: Draft
**Input**: User description: "Redesign my portfolio: professional AI Agent Engineer. Reposition the site so that within 5 seconds a founder or hiring manager understands this person designs and ships production multi-agent systems. New home-page IA (hero with animated orchestrator/worker diagram, proof strip, 3 featured case studies, 4-step process, grouped capabilities, other-projects grid, CTA), a dynamic `/work/[slug]` case-study template backed by a typed content file, IotaDev brand mention, header/footer link cleanup, and a calm engineering-grade dark-first design system. Never invent metrics, client names, or testimonials — mark missing data as TODO."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Instant positioning on arrival (Priority: P1)

A founder or hiring manager lands on the home page from a shared link. Within the first 5 seconds, by reading the hero headline/sub-line and glancing at the animated orchestrator → worker-agents diagram, they understand that this person designs and ships production multi-agent systems (not a generic web developer), and see two clear next actions (book a call / see case studies).

**Why this priority**: This is the entire point of the redesign — if this fails, nothing else on the site matters.

**Independent Test**: Load `/` cold, hide everything below the fold, and confirm the visible content (headline, sub-line, diagram, CTAs) alone communicates the positioning without scrolling.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on `/`, **When** the page finishes its initial render, **Then** the hero shows a headline naming multi-agent systems/production workflows, a sub-line naming orchestrator-worker architecture, MCP, and production deployment, and two CTAs ("Book a call"/"Start a project" and "See case studies").
2. **Given** a visitor with `prefers-reduced-motion` enabled, **When** the hero diagram mounts, **Then** it renders in a static, fully legible end-state with no animation loop.
3. **Given** a visitor on a 360px-wide device, **When** they view the hero, **Then** there is no horizontal scrolling and both CTAs remain reachable and tappable.

---

### User Story 2 - Evaluate a specific case study (Priority: P1)

A technical evaluator wants proof of real system design, not marketing copy. They click into a featured case study (Property AI Agent, SmartManager AI, or the Personal Assistant) and expect a consistent, skimmable breakdown of the problem, the solution, how the agents/tools/data actually connect, the stack used, the author's role, and the outcome — plus working links to see it for real.

**Why this priority**: Case studies are the credibility engine of the site; without a working, trustworthy template the "proof" promised in the hero has nowhere to land.

**Independent Test**: From `/`, click any featured case-study card, land on `/work/<slug>`, and confirm every template section renders (or is cleanly omitted when data is genuinely missing) without broken links or fabricated claims.

**Acceptance Scenarios**:

1. **Given** the home page, **When** a visitor clicks a featured case-study card, **Then** they land on `/work/<slug>` showing Problem → Solution → Architecture diagram → Tech stack → My role → Outcome → Links, in that order.
2. **Given** a case study with no public repo or demo, **When** the page renders, **Then** the Links section hides the missing link type entirely rather than pointing at a profile root or dead URL.
3. **Given** a case study with an unverified metric (e.g., exact buyer-journey numbers), **When** the content is authored, **Then** the field is tracked as an explicit `TODO` in the data file and the page does not display a fabricated number.
4. **Given** a visitor navigates to a slug that doesn't exist, **When** they request `/work/does-not-exist`, **Then** they see a proper 404, not a crash.

---

### User Story 3 - Understand breadth of work and approach (Priority: P2)

A visitor who isn't ready to commit scrolls further to see the 4-step build process, grouped technical capabilities (agent architecture / integrations & MCP / backend & APIs / automation), and a smaller grid of other projects, to confirm this is a repeatable practice and not a one-off.

**Why this priority**: Deepens trust after the hero/case-studies have made the first impression, but the site is still useful without a visitor reaching this far.

**Independent Test**: Scroll `/` past the case studies and confirm the process, capabilities, and other-projects sections render with real, non-buzzword copy and that every other-project card either links to a real repo/demo or shows no link control.

**Acceptance Scenarios**:

1. **Given** the home page, **When** a visitor reaches the process section, **Then** they see exactly 4 ordered steps: Map the workflow → Design the agent architecture → Build & integrate tools → Deploy, monitor, iterate.
2. **Given** the home page, **When** a visitor reaches the capabilities section, **Then** items are grouped under Agent architecture / Integrations & MCP / Backend & APIs / Automation rather than shown as an undifferentiated logo wall.
3. **Given** the home page, **When** a visitor reaches "Other projects", **Then** only the AI Chatbot Agent, Workflow Automation Engine, and API Integration Platform appear there (Portfolio Website and AI To-Do List are not in any featured/home slot).

---

### User Story 4 - Trust the links and brand identity (Priority: P3)

A visitor tries the social links, the CTA, and the footer, and expects every link to go somewhere real and current, the brand (IotaDev) to be visibly credited, and no leftover placeholder or wrong-network links (dead X/Twitter link, unrelated Facebook profile).

**Why this priority**: Broken or sloppy links erode the credibility the rest of the redesign is trying to build, but the site functions without this being perfect on day one.

**Independent Test**: Click every link in the header, footer, and hero CTAs and confirm each resolves to a real, intended destination or is absent; confirm IotaDev is named and linked; confirm the copyright line matches the specified format.

**Acceptance Scenarios**:

1. **Given** the header or footer, **When** a visitor looks for Facebook, **Then** it is not present anywhere on the site.
2. **Given** the header or footer, **When** a visitor clicks the X/Twitter icon, **Then** it opens a single placeholder URL defined in one constant (ready for the owner to fill in), not a bare `twitter.com`.
3. **Given** the footer, **When** a visitor reads it, **Then** it shows "© 2026 Tayyab Fayyaz · IotaDev" plus working GitHub, LinkedIn, X, and email links, and IotaDev links to `iotadev.online`.

---

### Edge Cases

- Visitor has `prefers-reduced-motion` set → all custom motion (hero diagram, scroll reveals) must degrade to a static/non-looping state, not just slow down.
- A featured or other project has no public link at all → its link row/button is omitted, never rendered pointing at a generic profile URL.
- A case study field (metric, client name, testimonial) has no verified value → rendered as omitted content in production, tracked as a `TODO` in `content/projects.ts` and reported to the owner — never fabricated.
- Visitor requests a `/work/[slug]` that doesn't exist → standard Next.js `notFound()` 404, no crash.
- Visitor toggles dark/light theme → every new section must have correct contrast and no invisible text in either theme.
- Viewport widths of 360px, 768px, and 1280px → no horizontal scroll, no overlapping content, CTAs remain usable.
- The existing Supabase-backed `/portfolio` gallery and `/admin` tooling must keep working unmodified (data layer untouched); only their visual language is brought in line with the new design tokens.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Home page MUST present, in order: Hero → Proof strip → Featured case studies (3) → Process (4 steps) → Capabilities (grouped) → Other projects (3) → CTA/contact.
- **FR-002**: Hero MUST include the refined headline (keeping the specificity of "I build multi-agent AI systems that run real business workflows"), a sub-line naming orchestrator-worker architecture, MCP, and production deployment, a primary CTA ("Book a call" / "Start a project") and secondary CTA ("See case studies").
- **FR-003**: Hero MUST include an animated SVG diagram (built with SVG + Framer Motion, not a stock image) showing an orchestrator agent routing a task to Research, Tools/API, and Memory worker agents and returning a result, and MUST respect `prefers-reduced-motion` by rendering a static end-state with no animation loop.
- **FR-004**: Proof strip MUST show only factual, non-numeric signals (e.g., "Orchestrator-worker systems", "MCP integrations", "WhatsApp & voice agents") — no invented statistics.
- **FR-005**: The 3 featured case studies MUST be: Property AI Agent (real-estate assistant, orchestrator-worker architecture with a Research Agent, Zameen.com Property Data API integration, 4-stage buyer journey from discovery to property details), SmartManager AI (WhatsApp- and voice-controlled assistant for wholesale business operations), and Personal Assistant (FTE) (built with Claude Code, manages daily tasks, demo at `https://youtu.be/qvUjX6iqokw`).
- **FR-006**: System MUST provide a dynamic route `/work/[slug]` using one reusable template with sections in this order: Problem, Solution, Architecture diagram (agents + tools + data flow), Tech stack, My role, Outcome, Links (repo/demo/video).
- **FR-007**: Case-study and project content MUST live in a typed data file (`content/projects.ts`) so text can be edited without touching components.
- **FR-008**: System MUST NOT invent metrics, client names, or testimonials anywhere. Any field the owner hasn't supplied MUST be a clearly marked `TODO:` in the data file and MUST NOT render as fabricated content on the live page.
- **FR-009**: Every rendered project link MUST point to that specific project's own repo or demo, or be hidden entirely if no such link exists — no project link may fall back to a GitHub profile root.
- **FR-010**: "Other projects" grid MUST contain exactly AI Chatbot Agent, Workflow Automation Engine, and API Integration Platform; "Portfolio Website" and "AI To-Do List" MUST NOT appear in any featured/home slot (may remain reachable only via the existing `/portfolio` archive).
- **FR-011**: Process section MUST show exactly 4 ordered steps: Map the workflow → Design the agent architecture → Build & integrate tools → Deploy, monitor, iterate.
- **FR-012**: Capabilities section MUST group items under Agent architecture, Integrations & MCP, Backend & APIs, and Automation (not an undifferentiated logo wall).
- **FR-013**: Final section MUST be a clear "Let's build your agent" CTA tied to contact.
- **FR-014**: Header/footer MUST drop Facebook entirely, replace the bare `twitter.com` link with a single placeholder constant the owner can fill in later, and footer MUST read "© 2026 Tayyab Fayyaz · IotaDev" with working GitHub, LinkedIn, X, and email links plus a link to IotaDev (`iotadev.online`).
- **FR-015**: Site metadata (title, description, Open Graph/Twitter card tags) MUST reflect the new positioning, not the old generic "AI/ML developer" copy.
- **FR-016**: Design system MUST be dark-first with a working light mode via the existing theme toggle, use `next/font` for a sans (UI/headings) and monospace (labels/tags/code-like details) pairing, and MUST NOT use purple-to-pink gradients, glowing orbs, glassmorphism, or generic "AI brain" imagery.
- **FR-017**: All new and touched pages MUST be fully responsive at 360px, 768px, and 1280px widths with no horizontal scroll, use semantic HTML, provide alt text on meaningful images, keep visible focus states, and maintain sufficient contrast in both themes.
- **FR-018**: Motion beyond the hero diagram MUST be limited to subtle fade/slide-on-scroll and hover states that never delay content from appearing.

### Key Entities

- **Project**: A case study or smaller project entry. Attributes: `slug`, `title`, `category` ("case-study" | "other"), one-line `summary`, `problem`, `solution`, `architecture` (ordered node/edge description for the diagram), `techStack[]`, `role`, `outcome` (may contain `TODO` markers), `links` (`repo?`, `demo?`, `video?` — each optional and independently omittable), `tags[]`.
- **SiteConfig**: Brand-wide constants. Attributes: studio name/URL (IotaDev / iotadev.online), social URLs (GitHub, LinkedIn, X placeholder, email), copyright line.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Reading only the hero (headline, sub-line, diagram, CTAs) without scrolling is sufficient to state that the site owner builds production multi-agent systems — verified by re-reading the hero content in isolation.
- **SC-002**: Every one of the 3 featured case studies is reachable in at most 2 clicks from `/` and renders all 7 template sections (or cleanly omits a section's sub-element when data is marked `TODO`), with zero crashes on `/work/[slug]`.
- **SC-003**: Zero project links on the site point at a GitHub profile root or a dead placeholder URl; every visible project link resolves to that project's own repo/demo/video, or no link control is shown.
- **SC-004**: The home page and all `/work/[slug]` pages render with no horizontal scroll at 360px, 768px, and 1280px viewport widths.
- **SC-005**: With `prefers-reduced-motion` enabled, the hero diagram and all scroll reveals show their final state immediately with no animation loop running.
- **SC-006**: No invented metrics, client names, or testimonials appear anywhere on the live site; every such gap is listed as a `TODO` delivered back to the owner.
- **SC-007**: `npm run lint` and `npm run build` complete with zero errors after implementation.
