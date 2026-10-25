"use client";

import { motion } from "framer-motion";

// Factual signals only — no invented numbers, no client names.
const signals = [
  "Orchestrator-worker systems",
  "MCP integrations",
  "WhatsApp & voice agents",
  "Claude & OpenAI APIs",
  "Production deployments on AWS",
];

export default function ProofStrip() {
  return (
    <section className="w-full border-b border-border/60 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-7xl px-4 py-6 md:px-8"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {signals.map((signal) => (
            <li key={signal} className="label-mono">
              {signal}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
