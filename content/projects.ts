/**
 * Typed content for case studies and other projects.
 *
 * Edit text here, not in components. Fields holding a string that starts
 * with "TODO:" are unverified — `isTodo()` lets components skip rendering
 * them instead of showing a fabricated or half-finished claim on the live
 * site. Never replace a TODO with an invented number, client name, or quote
 * — replace it with the real thing once you have it.
 *
 * `links` only includes keys that are real. If a project has no public
 * repo/demo/video yet, leave that key out entirely — components hide
 * whatever isn't present rather than linking to a profile root or dead URL.
 */

export type ProjectCategory = "case-study" | "other";

export interface ProjectLinks {
  repo?: string;
  demo?: string;
  video?: string;
}

export type ArchitectureNodeKind = "orchestrator" | "worker" | "tool" | "data";

export interface ArchitectureNode {
  id: string;
  label: string;
  kind: ArchitectureNodeKind;
  description?: string;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}

export interface ProjectArchitecture {
  /** One-line description of the data flow, used as a diagram caption. */
  summary: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Short line for cards. */
  tagline: string;
  /** 2-3 sentence card/listing description. */
  summary: string;
  problem: string;
  solution: string;
  architecture: ProjectArchitecture;
  techStack: string[];
  role: string;
  /** "TODO: ..." when outcome/impact isn't verified yet. */
  outcome: string;
  links: ProjectLinks;
  tags: string[];
}

export const TODO_PREFIX = "TODO:";

export function isTodo(value?: string | null): boolean {
  return !!value && value.trim().startsWith(TODO_PREFIX);
}

export const projects: Project[] = [
  // ---------------------------------------------------------------------
  // Featured case studies
  // ---------------------------------------------------------------------
  {
    slug: "property-ai-agent",
    title: "Property AI Agent",
    category: "case-study",
    tagline: "An orchestrator-worker real-estate assistant backed by live property data.",
    summary:
      "A property assistant that routes buyer questions to a dedicated Research Agent pulling live listings from the Zameen.com Property Data API, guiding a 4-stage buyer journey from first search through to property details.",
    problem:
      "Property buyers bounce between listing sites, WhatsApp chats, and agents just to answer simple questions — budget fit, location match, what's actually available right now. Each channel has its own lag, so buyers lose time and sellers lose leads before a real conversation even starts.",
    solution:
      "An orchestrator agent owns the conversation end to end and delegates every fact-finding step to a dedicated Research Agent, which queries the Zameen.com Property Data API directly instead of relying on a model's own (often stale) knowledge. The orchestrator uses those results to walk the buyer through a 4-stage journey — from first discovery through to property details — without the buyer ever needing to know an API call happened underneath.",
    architecture: {
      summary: "Orchestrator delegates to a Research Agent, which queries the Zameen.com Property Data API and reports back.",
      nodes: [
        { id: "orchestrator", label: "Orchestrator Agent", kind: "orchestrator", description: "Owns the conversation and the buyer's position in the 4-stage journey." },
        { id: "research", label: "Research Agent", kind: "worker", description: "Looks up live listings and property details — never guesses." },
        { id: "zameen-api", label: "Zameen.com Property Data API", kind: "tool", description: "Source of truth for current listings." },
        { id: "session", label: "Buyer Session Memory", kind: "data", description: "Tracks journey stage and preferences across turns." },
      ],
      edges: [
        { from: "orchestrator", to: "research", label: "delegates lookup" },
        { from: "research", to: "zameen-api", label: "queries" },
        { from: "zameen-api", to: "research", label: "listings" },
        { from: "research", to: "orchestrator", label: "findings" },
        { from: "orchestrator", to: "session", label: "reads / writes stage" },
      ],
    },
    // General stack self-reported across the practice; TODO: confirm which
    // of these were actually used on this specific build before publishing.
    techStack: ["Python", "FastAPI", "Claude/OpenAI APIs", "MCP", "REST/webhooks", "AWS"],
    role: "Designed the orchestrator-worker architecture and built the Research Agent's integration with the Zameen.com Property Data API.",
    outcome: "TODO: confirm outcome/impact (e.g., response time, buyer engagement) with verified data before publishing a number.",
    // TODO: add a repo and/or live demo link once one exists publicly.
    links: {},
    tags: ["AI Agents", "Real Estate", "Orchestrator-Worker", "API Integration"],
  },
  {
    slug: "smartmanager-ai",
    title: "SmartManager AI",
    category: "case-study",
    tagline: "A WhatsApp- and voice-controlled assistant for running wholesale operations.",
    summary:
      "SmartManager AI lets a wholesale operator run day-to-day business — orders, stock, customer messages — by talking to it over WhatsApp or voice, instead of switching between spreadsheets and apps.",
    problem:
      "Wholesale operators run their business from a phone, juggling WhatsApp orders, stock counts, and customer follow-ups across disconnected tools. Nothing talks to anything else, so updates get missed or entered twice.",
    solution:
      "One orchestrator agent sits in front of WhatsApp and voice input, understands what the operator is asking for, and routes it to the right worker — checking stock, logging an order, or drafting a customer reply — then replies back in the same channel the request came from.",
    architecture: {
      summary: "Orchestrator takes WhatsApp/voice input, routes to the right operations worker, and replies in the same channel.",
      nodes: [
        { id: "orchestrator", label: "Orchestrator Agent", kind: "orchestrator", description: "Understands WhatsApp/voice requests and decides which worker handles them." },
        { id: "ops", label: "Operations Worker", kind: "worker", description: "Reads and writes orders and stock levels." },
        { id: "comms", label: "Customer Comms Worker", kind: "worker", description: "Drafts and sends replies back to the customer." },
        { id: "systems", label: "Business Systems", kind: "tool", description: "Wherever stock/orders actually live." },
      ],
      edges: [
        { from: "orchestrator", to: "ops", label: "stock / order request" },
        { from: "orchestrator", to: "comms", label: "reply needed" },
        { from: "ops", to: "systems", label: "read / write" },
        { from: "comms", to: "orchestrator", label: "drafted reply" },
      ],
    },
    // TODO: confirm exact WhatsApp integration path (WhatsApp Business API
    // vs a third-party provider) before publishing specifics.
    techStack: ["Python", "FastAPI", "n8n", "REST/webhooks", "WhatsApp Business API"],
    role: "Designed the multi-agent architecture and built the WhatsApp/voice intake and routing layer.",
    outcome: "TODO: confirm outcome/impact with verified data before publishing a number.",
    // TODO: add a repo and/or live demo link once one exists publicly.
    links: {},
    tags: ["AI Agents", "WhatsApp", "Voice", "Automation"],
  },
  {
    slug: "personal-assistant-fte",
    title: "Personal Assistant (FTE)",
    category: "case-study",
    tagline: "A Claude Code-built personal assistant that runs daily tasks end to end.",
    summary:
      "An always-on personal assistant, built with Claude Code, that takes on recurring daily tasks directly instead of just drafting a plan for a human to carry out.",
    problem:
      "Recurring daily admin — triage, scheduling, routine follow-ups — eats time in small chunks that add up, and most of it doesn't need a human making each individual call.",
    solution:
      "A Claude Code-based agent reads the day's task list and executes directly against the tools it needs, reporting back what it did rather than handing back a plan.",
    architecture: {
      summary: "The agent reads the task list, executes against the relevant tools, and reports results back.",
      nodes: [
        { id: "orchestrator", label: "Task Agent (Claude Code)", kind: "orchestrator", description: "Reads the daily task list and decides how to execute each item." },
        { id: "tools", label: "Tool Execution", kind: "worker", description: "Runs the commands/integrations each task actually needs." },
        { id: "tasks", label: "Daily Task List", kind: "data", description: "Source of what needs doing today." },
      ],
      edges: [
        { from: "tasks", to: "orchestrator", label: "today's tasks" },
        { from: "orchestrator", to: "tools", label: "executes" },
        { from: "tools", to: "orchestrator", label: "result" },
      ],
    },
    // TODO: confirm the exact tool/MCP integrations used before publishing specifics.
    techStack: ["Claude Code", "Python", "MCP"],
    role: "Designed and built the assistant end to end using Claude Code.",
    outcome: "TODO: confirm outcome/impact with verified data before publishing a number.",
    links: { video: "https://youtu.be/qvUjX6iqokw" },
    tags: ["Claude Code", "AI Agents", "Automation"],
  },

  // ---------------------------------------------------------------------
  // Other projects
  // ---------------------------------------------------------------------
  {
    slug: "ai-chatbot-agent",
    title: "AI Chatbot Agent",
    category: "other",
    tagline: "A multi-purpose chatbot agent with contextual memory.",
    summary:
      "A chatbot agent system with natural-language understanding, contextual memory, and API-driven responses for real-world support and Q&A use cases.",
    problem:
      "Generic chat widgets answer each message in isolation — no memory between turns and no way to act on real data, just text generation.",
    solution:
      "An agent wraps the model with contextual memory and backend API calls, so it can reference earlier turns and pull real data into its responses instead of generating isolated replies.",
    architecture: {
      summary: "The chat agent keeps context in memory and calls backend APIs when a reply needs real data.",
      nodes: [
        { id: "orchestrator", label: "Chat Agent", kind: "orchestrator", description: "Handles the conversation and decides when it needs real data." },
        { id: "memory", label: "Context Memory", kind: "data", description: "Keeps track of earlier turns in the conversation." },
        { id: "apis", label: "Backend APIs", kind: "tool", description: "Supplies real data the model can't know on its own." },
      ],
      edges: [
        { from: "orchestrator", to: "memory", label: "reads / writes" },
        { from: "orchestrator", to: "apis", label: "calls when needed" },
      ],
    },
    techStack: ["OpenAI API", "Python", "FastAPI"],
    role: "Designed and built the chatbot agent and its memory/API layer.",
    outcome: "TODO: confirm outcome/impact with verified data before publishing a number.",
    // TODO: add a repo and/or live demo link once one exists publicly.
    links: {},
    tags: ["OpenAI API", "AI", "Python", "FastAPI"],
  },
  {
    slug: "workflow-automation-engine",
    title: "Workflow Automation Engine",
    category: "other",
    tagline: "An automation-first engine for wiring APIs together without manual steps.",
    summary:
      "A workflow automation system using n8n and webhooks to connect APIs and move data between tools without manual intervention.",
    problem:
      "Repetitive, multi-step tasks across different tools usually stay manual because nobody has time to wire the APIs together by hand.",
    solution:
      "n8n-based workflows and webhooks connect the relevant APIs directly, so data moves between systems automatically once a trigger fires.",
    architecture: {
      summary: "A trigger fires an n8n workflow that moves data between the connected systems through their APIs.",
      nodes: [
        { id: "orchestrator", label: "Workflow Orchestrator (n8n)", kind: "orchestrator", description: "Owns the trigger and the sequence of steps." },
        { id: "connectors", label: "API Connector Nodes", kind: "worker", description: "Each node talks to one external API." },
        { id: "systems", label: "Target Systems", kind: "tool", description: "Where the data ends up." },
      ],
      edges: [
        { from: "orchestrator", to: "connectors", label: "runs step" },
        { from: "connectors", to: "systems", label: "reads / writes" },
      ],
    },
    techStack: ["n8n", "Webhooks", "REST APIs"],
    role: "Designed and built the automation workflows and API connections.",
    outcome: "TODO: confirm outcome/impact with verified data before publishing a number.",
    // TODO: add a repo and/or live demo link once one exists publicly.
    links: {},
    tags: ["n8n", "Webhooks", "Automation", "API"],
  },
  {
    slug: "api-integration-platform",
    title: "API Integration Platform",
    category: "other",
    tagline: "A JWT-secured platform for connecting third-party services.",
    summary:
      "An API integration platform with JWT authentication and async workflows for connecting third-party services reliably.",
    problem:
      "Connecting multiple third-party services securely and asynchronously usually means repeating the same auth and error-handling plumbing for every integration.",
    solution:
      "A FastAPI-based platform centralizes JWT authentication and async request handling, so new integrations plug into one consistent layer instead of each getting bespoke plumbing.",
    architecture: {
      summary: "Every integration goes through one gateway that handles auth and async execution consistently.",
      nodes: [
        { id: "orchestrator", label: "Integration Gateway", kind: "orchestrator", description: "Single entry point for every integration." },
        { id: "auth", label: "Auth (JWT)", kind: "worker", description: "Verifies and signs every request." },
        { id: "async", label: "Async Task Runner", kind: "worker", description: "Executes integration calls without blocking." },
        { id: "services", label: "Third-Party Services", kind: "tool", description: "The external systems being integrated." },
      ],
      edges: [
        { from: "orchestrator", to: "auth", label: "verifies" },
        { from: "orchestrator", to: "async", label: "dispatches" },
        { from: "async", to: "services", label: "calls" },
      ],
    },
    techStack: ["FastAPI", "JWT", "TypeScript", "REST"],
    role: "Designed and built the integration gateway, auth layer, and async workflows.",
    outcome: "TODO: confirm outcome/impact with verified data before publishing a number.",
    // TODO: add a repo and/or live demo link once one exists publicly.
    links: {},
    tags: ["FastAPI", "JWT", "TypeScript", "REST"],
  },
];

export const caseStudies = projects.filter((p) => p.category === "case-study");
export const otherProjects = projects.filter((p) => p.category === "other");

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
