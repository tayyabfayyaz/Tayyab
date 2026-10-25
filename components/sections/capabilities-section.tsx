"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Plug,
  Server,
  Workflow,
} from "lucide-react";

const groups = [
  {
    icon: BrainCircuit,
    title: "Agent architecture",
    items: [
      "Orchestrator-worker design",
      "Multi-agent task routing",
      "Memory & context management",
      "Prompt engineering for reliability",
    ],
  },
  {
    icon: Plug,
    title: "Integrations & MCP",
    items: [
      "MCP tool servers",
      "Third-party API integration",
      "Webhooks & event-driven flows",
      "WhatsApp & voice channels",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    items: [
      "FastAPI services",
      "REST API design",
      "Async workflows",
      "Auth (JWT, Clerk)",
    ],
  },
  {
    icon: Workflow,
    title: "Automation",
    items: [
      "n8n workflows",
      "Scheduled & triggered jobs",
      "Data pipelines",
      "Monitoring & iteration",
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="w-full py-20 md:py-28 border-b border-border/60 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="label-mono mb-3">Capabilities</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            What I bring to a build
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground">{group.title}</h3>
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
