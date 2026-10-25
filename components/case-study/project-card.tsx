import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/projects";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block h-full">
      <div
        className={`h-full rounded-xl border border-border bg-card transition-colors duration-300 hover:border-primary/50 ${
          compact ? "p-5" : "p-7"
        }`}
      >
        <p className="label-mono mb-3">{project.category === "case-study" ? "Case Study" : "Project"}</p>
        <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors ${compact ? "text-lg mb-2" : "text-xl mb-3"}`}>
          {project.title}
        </h3>
        <p className={`text-muted-foreground leading-relaxed ${compact ? "text-sm mb-4" : "text-sm mb-5"}`}>
          {compact ? project.tagline : project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, compact ? 3 : 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-mono">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
          <span>View case study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
