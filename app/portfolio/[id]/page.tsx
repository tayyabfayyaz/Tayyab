import { notFound } from 'next/navigation'
import { supabase } from "@/lib/supabase"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  Tag, 
  Layers,
  CheckCircle2 
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link href="/portfolio">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8 bg-muted">
            <Image
              src={project.image_url || '/placeholder.svg'}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag: string) => (
                  <Badge 
                    key={tag} 
                    className="bg-primary/90 text-primary-foreground border-none"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Description */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">About Project</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.detailed_description || project.description}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                    <ul className="space-y-2">
                      {project.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              {project.tech_stack && project.tech_stack.length > 0 && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech: string) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Project Link */}
              {project.project_url && (
                <Card>
                  <CardContent className="pt-6">
                    <Button className="w-full" asChild>
                      <a 
                        href={project.project_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Meta Info */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Added {new Date(project.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
