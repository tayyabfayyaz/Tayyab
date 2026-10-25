'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Code2,
  Palette,
  Sparkles,
  Filter,
  ArrowRight,
  Github,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tags: string[];
  project_url: string;
}

interface ProjectWithCategory extends Project {
  category: 'AI' | 'Web' | 'Design' | 'All';
}

const categories = [
  { name: 'All', icon: Sparkles },
  { name: 'AI', icon: Brain },
  { name: 'Web', icon: Code2 },
  { name: 'Design', icon: Palette },
];

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<'AI' | 'Web' | 'Design' | 'All'>('All');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const projectsWithCategory: ProjectWithCategory[] = useMemo(() => {
    return projects.map((project) => {
      let category: 'AI' | 'Web' | 'Design' | 'All' = 'All';
      if (project.tags.includes('AI')) {
        category = 'AI';
      } else if (project.tags.includes('Next.js') || project.tags.includes('React')) {
        category = 'Web';
      } else if (project.tags.includes('ShadCN') || project.tags.includes('Tailwind CSS')) {
        category = 'Design';
      }
      return {
        ...project,
        category,
      };
    });
  }, [projects]);

  const filteredProjects = activeCategory === 'All'
    ? projectsWithCategory
    : projectsWithCategory.filter(p => p.category === activeCategory);

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <main className="min-h-screen px-6 md:px-20 py-20">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="label-mono mb-4">Archive</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
          Project archive
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Smaller and earlier projects, managed separately from the featured{" "}
          <Link href="/work" className="text-primary hover:underline">case studies</Link>.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.name;

          return (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name as 'AI' | 'Web' | 'Design' | 'All')}
              className={`
                group relative px-6 py-3 rounded-xl font-medium transition-all duration-300
                ${isActive
                  ? 'bg-primary text-primary-foreground shadow-lg card-glow'
                  : 'bg-card border border-border hover:border-primary/50'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Icon className={`h-5 w-5 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                <span>{category.name}</span>
              </div>

              {isActive && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full"
                  layoutId="activeCategory"
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a href={`/portfolio/${project.id}`}>
                <Card className="group relative overflow-hidden h-full bg-card border-border hover:border-primary/50 transition-all duration-500 card-glow cursor-pointer">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden bg-muted">
                      {imageErrors[project.id] ? (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                          <Code2 className="w-16 h-16 text-muted-foreground/50" />
                        </div>
                      ) : (
                        <>
                          <Image
                            src={project.image_url || '/placeholder.svg'}
                            alt={project.title}
                            fill
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => handleImageError(project.id)}
                          />
                          {/* Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                            <Button
                              size="sm"
                              className="bg-primary/90 hover:bg-primary backdrop-blur-sm"
                            >
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            {project.project_url && (
                              <Button
                                size="sm"
                                variant="secondary"
                                className="backdrop-blur-sm"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(project.project_url, '_blank');
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Demo
                              </Button>
                            )}
                          </div>
                        </>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary border-none text-primary-foreground font-semibold shadow-sm">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Animated Bottom Line */}
                      <motion.div
                        className="h-1 w-0 bg-primary rounded-full mt-4 group-hover:w-full transition-all duration-500"
                      />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Filter className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground">Try selecting a different category</p>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4">Looking for something newer?</h3>
        <p className="text-muted-foreground mb-6">The featured case studies cover the recent, in-depth work.</p>
        <Link href="/work">
          <Button size="lg">
            View case studies
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}
