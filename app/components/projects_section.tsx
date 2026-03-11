'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Brain, 
  Zap, 
  Bot, 
  Code2, 
  FileCode, 
  Layers, 
  Palette,
  Wind
} from "lucide-react";

const skills = [
  { name: "Artificial Intelligence", icon: Brain, color: "from-purple-500 to-pink-500" },
  { name: "Machine Learning", icon: Zap, color: "from-blue-500 to-cyan-500" },
  { name: "OpenAI Agent", icon: Bot, color: "from-green-500 to-emerald-500" },
  { name: "Python", icon: Code2, color: "from-yellow-500 to-orange-500" },
  { name: "TypeScript", icon: FileCode, color: "from-blue-600 to-indigo-600" },
  { name: "Next.js", icon: Layers, color: "from-gray-700 to-gray-900" },
  { name: "Pixel Perfect", icon: Palette, color: "from-pink-500 to-rose-500" },
  { name: "Tailwind", icon: Wind, color: "from-cyan-500 to-blue-500" },
];

export default function ProjectsSection() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl relative z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tayyab Fayyaz: <span className="gradient-hero">Code + Design × AI</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building bridges between pixels, logic, and intelligence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg font-semibold glow-effect hover:scale-105 transition-all duration-300"
          >
            Explore Projects
          </Button>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        className="mt-20 w-full max-w-6xl relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tech <span className="gradient-text">Arsenal</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 hover:border-primary/50 card-glow">
                {/* Floating fill effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0`}
                  initial={false}
                  whileHover={{ 
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
                
                <CardContent className="p-6 relative z-10 flex flex-col items-center gap-4 group-hover:scale-105 transition-transform duration-300">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    <skill.icon className="w-12 h-12 relative z-10 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                  
                  <span className="text-center font-semibold text-lg group-hover:gradient-text transition-all duration-300">
                    {skill.name}
                  </span>
                  
                  {/* Hover indicator */}
                  <motion.div 
                    className="h-1 w-0 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to action */}
      <motion.div
        className="mt-20 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <p className="text-muted-foreground text-lg mb-4">
          Ready to collaborate on something amazing?
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300"
        >
          Get in Touch
        </Button>
      </motion.div>
    </main>
  );
}