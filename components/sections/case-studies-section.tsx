"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/content/projects";
import { ProjectCard } from "@/components/case-study/project-card";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="w-full py-20 md:py-28 border-b border-border/60">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="label-mono mb-3">Featured case studies</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Agents built for real workflows
          </h2>
          <p className="mt-3 text-muted-foreground">
            Each one breaks down the problem, the agent architecture, and what it actually does.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
