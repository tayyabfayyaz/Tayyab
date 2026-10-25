"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgentOrchestrationDiagram } from "@/components/diagrams/agent-orchestration-diagram";
import { BOOK_A_CALL_URL, IOTADEV_NAME, IOTADEV_URL } from "@/lib/site-config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <motion.div variants={itemVariants} className="mb-5">
              <span className="label-mono inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                AI Agent Engineer ·{" "}
                <a
                  href={IOTADEV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {IOTADEV_NAME}
                </a>
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.08]"
            >
              I build multi-agent AI systems that run{" "}
              <span className="text-primary">real business workflows</span>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Orchestrator-worker architectures, MCP-based tool integrations, and agents
              deployed to production — not demos. I design the system, build the agents,
              and ship them to run the workflow end to end.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={BOOK_A_CALL_URL}>
                <Button size="lg" className="group rounded-md px-6">
                  Book a call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
              <Link href="/work">
                <Button size="lg" variant="outline" className="rounded-md px-6">
                  See case studies
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <AgentOrchestrationDiagram className="rounded-xl border border-border bg-card/40 p-4 md:p-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
