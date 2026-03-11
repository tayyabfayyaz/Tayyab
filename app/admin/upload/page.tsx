import { redirect } from 'next/navigation'
import AdminUploadForm from './upload_form'
import ProjectList from './project_list'
import { getProjects } from './actions'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LogOut, PlusCircle, Upload, Package } from 'lucide-react'
import { logout } from '@/app/login/actions'
import { Card, CardContent } from '@/components/ui/card'

export default async function AdminUploadPage() {
  const projects = await getProjects()
  const projectsCount = projects?.data?.length || 0
  
  // Simple cookie-based auth check
  const { cookies } = await import('next/headers')
  const cookieStore = await cookies()
  const isAuthenticated = cookieStore.get('admin_auth')?.value === 'true'
  
  if (!isAuthenticated) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Upload className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Manage your portfolio projects</p>
            </div>
          </div>
          <form action={logout}>
            <Button type="submit" variant="outline" size="sm" className="gap-2">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </form>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Card */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Welcome back!</h2>
                <p className="text-sm text-muted-foreground">
                  Add new projects or manage existing ones from here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PlusCircle className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Add New Project</h2>
            </div>
            <AdminUploadForm />
          </div>

          {/* Project List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Existing Projects</h2>
              <Badge variant="secondary" className="font-medium">
                {projectsCount} {projectsCount === 1 ? 'Project' : 'Projects'}
              </Badge>
            </div>
            <ProjectList />
          </div>
        </div>
      </main>
    </div>
  )
}
