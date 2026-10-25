"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  BrainCircuit,
  Rocket,
  Zap,
  ShieldCheck,
  Bot,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Designing orchestrator-worker agent systems and automation workflows using Claude, OpenAI, MCP, and n8n to run real business processes.",
  },
  {
    icon: Zap,
    title: "API & Webhook Integration",
    description:
      "Building REST APIs, webhook integrations, and async workflows so agents and services exchange data reliably.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building the surrounding product — Next.js, TypeScript, Python — from the UI a user sees to the backend an agent runs on.",
  },
  {
    icon: BrainCircuit,
    title: "AI System Design",
    description:
      "Architecting the agent layer itself: task routing, memory, tool access, and prompt design for reliable, production behavior.",
  },
];

const reasons = [
  {
    icon: Rocket,
    title: "Automation-First",
    description: "Every build targets the manual step that's actually costing time, not a demo.",
  },
  {
    icon: Zap,
    title: "Production-Ready",
    description: "Agents are deployed, monitored, and iterated on — not left as a prototype.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    description: "Auth (JWT/Clerk) and API design follow practices that hold up past day one.",
  },
];

const techStack = ["Python", "TypeScript", "FastAPI", "n8n", "Next.js", "MCP"];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="px-4 md:px-8 py-20 md:py-28 space-y-24 md:space-y-32 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="label-mono mb-4">What I do</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Agents and systems built to <span className="text-primary">run in production</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground">
              AI agent architecture, automation workflows, and the backend they run on.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Core expertise</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="h-full border hover:border-primary/50 transition-colors duration-300 card-glow">
                  <CardContent className="p-7 flex flex-col items-center text-center space-y-4 h-full">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Partner */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Why partner with me</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border hover:border-primary/50 transition-colors duration-300 card-glow">
                  <CardContent className="p-7 flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <reason.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Stack</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="rounded-lg border border-border bg-card p-4 flex items-center justify-center font-mono text-sm font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to <span className="text-primary">build your agent</span>?
            </h2>
            <Link href="/contact">
              <Button size="lg" className="rounded-md px-8 group">
                Start a project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
