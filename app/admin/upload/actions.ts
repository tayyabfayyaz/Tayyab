'use server'

import { createClient as createServerClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { supabase } from '@/lib/supabase'

export interface ProjectInput {
  title: string
  description: string
  image_url: string
  tags: string[]
  project_url?: string
  detailed_description?: string
  features?: string[]
  tech_stack?: string[]
}

export async function createProject(formData: FormData) {
  try {
    // Use admin client for inserts (bypasses RLS)
    const supabaseAdmin = supabase

    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const image_url = formData.get('image_url') as string
    const tagsInput = formData.get('tags') as string
    const project_url = formData.get('project_url') as string
    const detailed_description = formData.get('detailed_description') as string
    const featuresInput = formData.get('features') as string
    const techStackInput = formData.get('tech_stack') as string

    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean)
    const features = featuresInput.split('\n').map(f => f.trim()).filter(Boolean)
    const tech_stack = techStackInput.split(',').map(t => t.trim()).filter(Boolean)

    console.log('Inserting project:', { title, description, tags })

    const { data, error } = await supabaseAdmin
      .from('projects')
      .insert({
        title,
        description,
        image_url,
        tags,
        project_url: project_url || null,
        detailed_description: detailed_description || null,
        features: features.length > 0 ? features : null,
        tech_stack: tech_stack.length > 0 ? tech_stack : null,
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return { error: error.message }
    }

    console.log('Project created:', data)

    revalidatePath('/portfolio')
    revalidatePath('/admin/upload')
    return { success: true, data }
  } catch (err) {
    console.error('Unexpected error:', err)
    return { error: err instanceof Error ? err.message : 'Unknown error' }
  }
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createServerClient()

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const image_url = formData.get('image_url') as string
  const tagsInput = formData.get('tags') as string
  const project_url = formData.get('project_url') as string
  const detailed_description = formData.get('detailed_description') as string
  const featuresInput = formData.get('features') as string
  const techStackInput = formData.get('tech_stack') as string

  const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean)
  const features = featuresInput.split('\n').map(f => f.trim()).filter(Boolean)
  const tech_stack = techStackInput.split(',').map(t => t.trim()).filter(Boolean)

  const { data, error } = await supabase
    .from('projects')
    .update({
      title,
      description,
      image_url,
      tags,
      project_url: project_url || null,
      detailed_description: detailed_description || null,
      features: features.length > 0 ? features : null,
      tech_stack: tech_stack.length > 0 ? tech_stack : null,
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/portfolio')
  revalidatePath('/admin/upload')
  return { success: true, data }
}

export async function deleteProject(id: string) {
  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Delete error:', error)
      return { error: error.message }
    }

    revalidatePath('/portfolio')
    revalidatePath('/admin/upload')
    return { success: true }
  } catch (err) {
    console.error('Unexpected error:', err)
    return { error: err instanceof Error ? err.message : 'Unknown error' }
  }
}

export async function getProjects() {
  const supabase = await createServerClient()

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return { error: error.message, data: [] }
  }

  return { data }
}

export async function getProjectById(id: string) {
  const supabase = await createServerClient()

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    return { error: error.message, data: null }
  }

  return { data }
}
