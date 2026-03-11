'use client'

import { useState, useTransition } from 'react'
import { createProject } from './actions'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2, AlertCircle, Upload, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminUploadForm() {
  const [isPending, startTransition] = useTransition()
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await createProject(formData)
      if (result.success) {
        setFeedback({ type: 'success', message: 'Project created successfully!' })
        setTimeout(() => setFeedback(null), 3000)
      } else {
        setFeedback({ type: 'error', message: result.error || 'Failed to create project' })
        setTimeout(() => setFeedback(null), 5000)
      }
    })
  }

  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Upload className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle>Create New Project</CardTitle>
            <CardDescription>Fill in the details below to add a new project to your portfolio</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="font-medium">Project Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., AI-Powered Dashboard"
                required
                disabled={isPending}
                className="transition-colors focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image_url" className="font-medium">Image URL *</Label>
              <Input
                id="image_url"
                name="image_url"
                placeholder="https://images.unsplash.com/photo-..."
                required
                disabled={isPending}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="font-medium">Short Description *</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Brief description of your project"
              rows={2}
              required
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags" className="font-medium">Tags (comma-separated) *</Label>
            <Input
              id="tags"
              name="tags"
              placeholder="AI, Next.js, React, TypeScript"
              required
              disabled={isPending}
            />
            <p className="text-xs text-muted-foreground">Used for categorization and filtering</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="project_url" className="font-medium">Project URL (optional)</Label>
            <Input
              id="project_url"
              name="project_url"
              placeholder="https://your-project.com"
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="detailed_description" className="font-medium">Detailed Description</Label>
            <Textarea
              id="detailed_description"
              name="detailed_description"
              placeholder="Detailed description for the project detail page"
              rows={4}
              disabled={isPending}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="features" className="font-medium">Features (one per line)</Label>
              <Textarea
                id="features"
                name="features"
                placeholder="Real-time analytics&#10;AI-powered insights&#10;Custom dashboards"
                rows={4}
                disabled={isPending}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tech_stack" className="font-medium">Tech Stack (comma-separated)</Label>
              <Input
                id="tech_stack"
                name="tech_stack"
                placeholder="Next.js, TypeScript, Tailwind CSS"
                disabled={isPending}
              />
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="h-3 w-3" />
                <span>Helps visitors understand your technology choices</span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex items-center gap-2 p-3 rounded-lg ${
                  feedback.type === 'success'
                    ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                    : 'bg-destructive/10 text-destructive'
                }`}
              >
                {feedback.type === 'success' ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
                <span className="text-sm font-medium">{feedback.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isPending}
            size="lg"
          >
            {isPending ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"
                />
                Creating Project...
              </>
            ) : (
              <>
                <Upload className="h-5 w-5 mr-2" />
                Create Project
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
