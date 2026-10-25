import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies, otherProjects } from "@/content/projects";
import { ProjectCard } from "@/components/case-study/project-card";

export const metadata: Metadata = {
  title: "Work | Tayyab Fayyaz",
  description:
    "Case studies in multi-agent AI systems: orchestrator-worker architectures, MCP integrations, and production deployments.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl mb-14">
          <p className="label-mono mb-3">Work</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Case studies &amp; projects
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Multi-agent systems built and deployed for real workflows — the architecture,
            the stack, and what&apos;s still verified vs. pending.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="label-mono mb-6">Featured case studies</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudies.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="label-mono mb-6">Other projects</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-border bg-secondary/30 p-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Looking for smaller / earlier projects? There&apos;s an archive of additional work below.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline shrink-0"
          >
            View archive
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
