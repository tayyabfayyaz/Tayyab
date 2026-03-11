import { Suspense } from "react";
import PortfolioClient from "@/app/components/portfolio_client";
import { supabase } from "@/lib/supabase";
import { ProjectsGridSkeleton } from "@/app/components/skeletons";

export const revalidate = 60;

async function PortfolioContent() {
  const { data: projects, error } = await supabase.from("projects").select();

  if (error) {
    console.error("Error fetching projects:", error);
    return <div className="text-center py-20 text-destructive">Error loading projects. Please try again later.</div>;
  }

  return <PortfolioClient projects={projects || []} />;
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-block mb-6">
            <div className="h-16 w-16 rounded-full bg-secondary animate-pulse" />
          </div>
          <div className="h-16 w-96 mx-auto bg-secondary animate-pulse rounded-lg mb-4" />
          <div className="h-6 w-64 mx-auto bg-secondary animate-pulse rounded" />
        </div>
        <ProjectsGridSkeleton />
      </div>
    }>
      <PortfolioContent />
    </Suspense>
  );
}
