import { getProjects, deleteProject } from './actions'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Package } from 'lucide-react'
import Image from 'next/image'
import DeleteButton from './delete_button'

export default async function ProjectList() {
  const { data: projects } = await getProjects()

  if (!projects || projects.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="pt-6 text-center py-12">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-muted">
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">No projects yet</h3>
              <p className="text-muted-foreground text-sm">
                Add your first project using the form on the left
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card key={project.id} className="group hover:border-primary/50 transition-all duration-300 card-glow">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative h-20 w-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted border">
                <Image
                  src={project.image_url || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {project.description}
                    </p>
                  </div>
                  <DeleteButton
                    projectId={project.id}
                    action={async (formData: FormData) => {
                      'use server'
                      const id = formData.get('id') as string
                      await deleteProject(id)
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags?.slice(0, 4).map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags && project.tags.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
