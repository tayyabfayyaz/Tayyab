"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Map the workflow",
    description:
      "Walk through the actual process end to end — who does what, which decisions repeat, and where the manual work really is.",
  },
  {
    n: "02",
    title: "Design the agent architecture",
    description:
      "Decide what the orchestrator owns versus what each worker agent handles, and how they hand off tasks and context.",
  },
  {
    n: "03",
    title: "Build & integrate tools",
    description:
      "Wire the agents to the real systems they need — APIs, MCP tools, webhooks — so they act on live data, not guesses.",
  },
  {
    n: "04",
    title: "Deploy, monitor, iterate",
    description:
      "Ship it to production, watch how it actually behaves, and adjust the architecture as real usage reveals edge cases.",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full py-20 md:py-28 border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="label-mono mb-3">How I build agents</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            From workflow to production
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <span className="font-mono text-sm text-primary">{step.n}</span>
              <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
