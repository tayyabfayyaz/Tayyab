"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  ListTodo,
  Workflow,
  Globe,
  MessageSquare,
  ExternalLink,
  ArrowRight,
  Youtube,
  Github,
} from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    title: "AI Powered To-Do List",
    description:
      "An AI-autonomous task management system that reduces manual operations. Features REST API integration for seamless data flow and an AI assistant that intelligently manages your workflow.",
    tags: ["AI", "REST API", "Automation", "Python"],
    icon: ListTodo,
    gradient: "from-violet-500 to-purple-600",
    lightGradient: "from-violet-500/10 to-purple-600/10",
    iconBg: "bg-violet-500/10 text-violet-400",
    links: {
      github: "https://github.com/tayyabfayyaz",
    },
  },
  {
    title: "Personal Assistant (FTE)",
    description:
      "A full AI-integrated personal assistant built with Claude Code that autonomously manages daily tasks, reducing manual overhead through intelligent workflow automation.",
    tags: ["Claude Code", "AI Agents", "Automation", "Workflow"],
    icon: Brain,
    gradient: "from-emerald-500 to-teal-600",
    lightGradient: "from-emerald-500/10 to-teal-600/10",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    links: {
      github: "https://github.com/tayyabfayyaz",
      youtube: "https://youtu.be/qvUjX6iqokw",
    },
  },
  {
    title: "AI Chatbot Agent",
    description:
      "Multi-purpose chatbot agent system with natural language understanding, contextual memory, and API-driven responses for real-world use cases.",
    tags: ["OpenAI API", "AI", "Python", "FastAPI"],
    icon: MessageSquare,
    gradient: "from-blue-500 to-cyan-600",
    lightGradient: "from-blue-500/10 to-cyan-600/10",
    iconBg: "bg-blue-500/10 text-blue-400",
    links: {
      github: "https://github.com/tayyabfayyaz",
    },
  },
  {
    title: "Workflow Automation Engine",
    description:
      "An automation-first system using n8n and webhooks to integrate APIs, streamline data pipelines, and reduce manual intervention in repetitive tasks.",
    tags: ["n8n", "Webhooks", "Automation", "API"],
    icon: Workflow,
    gradient: "from-amber-500 to-orange-600",
    lightGradient: "from-amber-500/10 to-orange-600/10",
    iconBg: "bg-amber-500/10 text-amber-400",
    links: {
      github: "https://github.com/tayyabfayyaz",
    },
  },
  {
    title: "API Integration Platform",
    description:
      "Full-featured API integration platform with JWT authentication, async workflows, and seamless third-party service connectivity.",
    tags: ["FastAPI", "JWT", "TypeScript", "REST"],
    icon: Globe,
    gradient: "from-pink-500 to-rose-600",
    lightGradient: "from-pink-500/10 to-rose-600/10",
    iconBg: "bg-pink-500/10 text-pink-400",
    links: {
      github: "https://github.com/tayyabfayyaz",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "A dynamic, animated portfolio built with Next.js, Tailwind CSS, and Framer Motion — showcasing AI-driven projects and modern web development.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    icon: Bot,
    gradient: "from-cyan-500 to-blue-600",
    lightGradient: "from-cyan-500/10 to-blue-600/10",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    links: {
      github: "https://github.com/tayyabfayyaz",
      live: "https://tayyab-liart.vercel.app",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
            Featured Work
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Projects I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
            Real projects built with AI, automation, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <div className="relative h-full rounded-xl border bg-card p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center mb-5`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-accent/50 hover:bg-accent transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.links?.youtube && (
                        <a
                          href={project.links.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                      )}
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <motion.div
                      className="flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>

                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link href="/portfolio" passHref>
            <Button size="lg" className="group rounded-full px-8">
              View All Projects
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
