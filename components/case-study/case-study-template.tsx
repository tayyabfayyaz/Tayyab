import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { isTodo, type Project } from "@/content/projects";

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 border-b border-border/60 last:border-b-0">
      <p className="label-mono mb-2">{kicker}</p>
      <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">{title}</h2>
      {children}
    </section>
  );
}

export function CaseStudyTemplate({ project }: { project: Project }) {
  const { repo, demo, video } = project.links;
  const hasLinks = Boolean(repo || demo || video);
  const hasOutcome = !isTodo(project.outcome);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        <header className="mb-4">
          <p className="label-mono mb-3">{project.category === "case-study" ? "Case Study" : "Project"}</p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <Section kicker="Problem" title="What was broken">
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </Section>

        <Section kicker="Solution" title="How the agent handles it">
          <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
        </Section>

        <Section kicker="Architecture" title="Agents, tools, and data flow">
          <p className="text-sm text-muted-foreground mb-5 font-mono">{project.architecture.summary}</p>
          <ArchitectureDiagram
            architecture={project.architecture}
            className="rounded-xl border border-border bg-card/40 p-4"
          />
        </Section>

        <Section kicker="Tech Stack" title="What it's built with">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="font-mono text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </Section>

        <Section kicker="My Role" title="What I did">
          <p className="text-muted-foreground leading-relaxed">{project.role}</p>
        </Section>

        {hasOutcome && (
          <Section kicker="Outcome" title="What it changed">
            <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
          </Section>
        )}

        {hasLinks && (
          <section className="py-10">
            <p className="label-mono mb-4">Links</p>
            <div className="flex flex-wrap gap-3">
              {repo && (
                <Button variant="outline" asChild>
                  <a href={repo} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Repository
                  </a>
                </Button>
              )}
              {demo && (
                <Button variant="outline" asChild>
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live demo
                  </a>
                </Button>
              )}
              {video && (
                <Button variant="outline" asChild>
                  <a href={video} target="_blank" rel="noopener noreferrer">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Watch demo
                  </a>
                </Button>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default CaseStudyTemplate;
