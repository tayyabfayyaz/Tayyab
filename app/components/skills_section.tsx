"use client";

import {
  Code,
  Paintbrush,
  BrainCircuit,
  Bot,
  Braces,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = {
  frontend: [
    {
      icon: <Paintbrush className="h-8 w-8 text-purple-400" />,
      name: "Next.js & React",
      description:
        "Building modern, server-rendered React applications with a focus on performance and SEO.",
    },
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      name: "TypeScript",
      description:
        "Ensuring type safety and scalability in large JavaScript codebases.",
    },
    {
      icon: <Braces className="h-8 w-8 text-pink-400" />,
      name: "Tailwind CSS",
      description:
        "Crafting beautiful, custom user interfaces with a utility-first CSS framework.",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-green-400" />,
      name: "Framer Motion",
      description:
        "Creating fluid, interactive animations to bring user interfaces to life.",
    },
  ],
  ai: [
    {
      icon: <BrainCircuit className="h-8 w-8 text-rose-400" />,
      name: "AI Agent Development",
      description:
        "Designing and implementing autonomous agents with strategic decision-making capabilities.",
    },
    {
      icon: <Bot className="h-8 w-8 text-yellow-400" />,
      name: "Game AI & Logic",
      description:
        "Developing complex game AI using skill systems, state management, and strategic rule-based actions.",
    },
    {
      icon: <Code className="h-8 w-8 text-teal-400" />,
      name: "Python & C++",
      description:
        "Leveraging Python for rapid prototyping and C++ for performance-critical AI components.",
    },
    {
      icon: <Braces className="h-8 w-8 text-orange-400" />,
      name: "API & SDK Integration",
      description:
        "Creating Python bindings for C++ SDKs to enable cross-language AI development and implementation.",
    },
  ],
};

const SkillCard = ({
  icon,
  name,
  description,
  index,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="transform-gpu rounded-xl border bg-card p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-secondary p-3">{icon}</div>
      <h3 className="text-xl font-bold text-foreground">{name}</h3>
    </div>
    <p className="mt-4 text-muted-foreground">{description}</p>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <Badge variant="default">My Expertise</Badge>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            What I Do
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A blend of creative frontend development and strategic AI engineering.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">
              Frontend & Design
            </h3>
            <div className="grid gap-6">
              {skills.frontend.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">
              AI & Backend
            </h3>
            <div className="grid gap-6">
              {skills.ai.map((skill, index) => (
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
