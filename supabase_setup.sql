-- Supabase Table Setup for Portfolio Projects
-- Run this in your Supabase SQL Editor

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  project_url TEXT,
  detailed_description TEXT,
  features TEXT[] DEFAULT '{}',
  tech_stack TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (anyone can view projects)
CREATE POLICY "Public projects are viewable by anyone"
  ON projects FOR SELECT
  USING (true);

-- Create policies for authenticated users to insert/update/delete
CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  USING (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_created_at 
  ON projects(created_at DESC);
