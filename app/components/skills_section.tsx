"use client";

import {
  Code,
  BrainCircuit,
  Bot,
  Workflow,
  Puzzle,
  Braces,
  Globe,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = {
  ai_automation: [
    {
      icon: <BrainCircuit className="h-7 w-7" />,
      name: "Claude Code / OpenAI API",
      description:
        "Building intelligent systems powered by cutting-edge LLMs for autonomous decision-making and task execution.",
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-400",
    },
    {
      icon: <Bot className="h-7 w-7" />,
      name: "AI Agents & Chatbots",
      description:
        "Designing autonomous AI agents and chatbot systems that understand context and execute complex workflows.",
      color: "from-rose-500/20 to-rose-500/5",
      iconColor: "text-rose-400",
    },
    {
      icon: <Workflow className="h-7 w-7" />,
      name: "Workflow Automation",
      description:
        "Automating repetitive tasks and building seamless AI-integrated workflows using APIs and webhooks.",
      color: "from-emerald-500/20 to-emerald-500/5",
      iconColor: "text-emerald-400",
    },
    {
      icon: <Puzzle className="h-7 w-7" />,
      name: "Prompt Engineering & AI Design",
      description:
        "Crafting effective prompts and designing AI system architectures for reliable and scalable outputs.",
      color: "from-amber-500/20 to-amber-500/5",
      iconColor: "text-amber-400",
    },
  ],
  frameworks: [
    {
      icon: <Code className="h-7 w-7" />,
      name: "Python & TypeScript",
      description:
        "Dual-language expertise — Python for AI/backend systems and TypeScript for type-safe web applications.",
      color: "from-blue-500/20 to-blue-500/5",
      iconColor: "text-blue-400",
    },
    {
      icon: <Braces className="h-7 w-7" />,
      name: "FastAPI & n8n",
      description:
        "Building high-performance APIs with FastAPI and automating workflows with n8n for seamless integration.",
      color: "from-teal-500/20 to-teal-500/5",
      iconColor: "text-teal-400",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      name: "REST APIs & Webhooks",
      description:
        "Designing RESTful APIs and webhook integrations for real-time data flow between systems.",
      color: "from-cyan-500/20 to-cyan-500/5",
      iconColor: "text-cyan-400",
    },
    {
      icon: <Shield className="h-7 w-7" />,
      name: "Auth & Security (JWT, Clerk)",
      description:
        "Implementing secure authentication flows with JWT tokens and Clerk for modern web applications.",
      color: "from-orange-500/20 to-orange-500/5",
      iconColor: "text-orange-400",
    },
  ],
};

const SkillCard = ({
  icon,
  name,
  description,
  index,
  color,
  iconColor,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
  index: number;
  color: string;
  iconColor: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="relative z-10">
      <div className="flex items-center gap-4">
        <div className={`rounded-xl bg-accent p-3 ${iconColor} transition-colors duration-300`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
            My Expertise
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
            AI-driven development, automation-first systems, and intelligent application design.
          </p>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 text-center md:text-left text-2xl font-semibold text-foreground flex items-center gap-3 justify-center md:justify-start"
            >
              <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent hidden md:block" />
              AI & Automation
            </motion.h3>
            <div className="grid gap-5">
              {skills.ai_automation.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 text-center md:text-left text-2xl font-semibold text-foreground flex items-center gap-3 justify-center md:justify-start"
            >
              <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent hidden md:block" />
              Frameworks & Systems
            </motion.h3>
            <div className="grid gap-5">
              {skills.frameworks.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
