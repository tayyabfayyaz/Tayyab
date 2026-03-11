'use client';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Paintbrush,
  Code2,
  BrainCircuit,
  Rocket,
  Zap,
  ShieldCheck,
  Bot,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Creating artificial agent based systems to perform machine learning and processing tasks with cutting-edge AI models.",
    color: "from-violet-500 to-purple-500",
    glowColor: "violet",
  },
  {
    icon: Paintbrush,
    title: "Web Designing",
    description:
      "Crafting elegant, user-centric designs using modern UI principles and tools like Figma, Tailwind, and Chakra UI.",
    color: "from-pink-500 to-rose-500",
    glowColor: "pink",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building high-performance web applications using Next.js, TypeScript, and modern frontend/backend technologies.",
    color: "from-blue-500 to-cyan-500",
    glowColor: "blue",
  },
  {
    icon: BrainCircuit,
    title: "Python Projects",
    description:
      "Creating intelligent systems and automation tools with Python. From data processing to AI-powered web tools.",
    color: "from-emerald-500 to-teal-500",
    glowColor: "emerald",
  },
];

const reasons = [
  {
    icon: Rocket,
    title: "Performance-First",
    description: "Optimized apps for speed and smooth UX with lighthouse scores to back it.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "AI-Integrated",
    description: "I use AI not just in projects but in workflows to automate & innovate.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    description: "Following best practices for security, performance, and maintainability.",
    color: "from-green-500 to-emerald-500",
  },
];

const techStack = [
  { name: "React", gradient: "from-cyan-400 to-blue-500" },
  { name: "Next.js", gradient: "from-gray-700 to-gray-900" },
  { name: "Tailwind", gradient: "from-cyan-400 to-blue-600" },
  { name: "TypeScript", gradient: "from-blue-600 to-blue-800" },
  { name: "Python", gradient: "from-yellow-400 to-blue-500" },
  { name: "Framer", gradient: "from-pink-500 to-violet-600" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="px-6 md:px-20 py-20 space-y-32">
        {/* Hero Section */}
        <section className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium gradient-text">What I Do</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Services That <span className="gradient-hero">Transform Ideas</span> Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Blending code, creativity, and intelligence to build impactful digital experiences that scale.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Specialized services tailored to your digital needs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group relative overflow-hidden h-full border-2 hover:border-primary/50 transition-all duration-500 cursor-pointer card-glow hover:scale-105">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Floating orb effect */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <CardContent className="relative z-10 p-8 flex flex-col items-center text-center space-y-6 h-full">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} relative`}>
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <motion.div
                      className="w-full h-1 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Partner With Me?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              What sets my approach apart from the rest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 card-glow h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardContent className="relative z-10 p-8 flex flex-col items-center text-center space-y-4">
                    <motion.div
                      className="relative"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className={`p-4 rounded-full bg-gradient-to-br ${reason.color} relative`}>
                        <reason.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    <h4 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered By <span className="gradient-text">Modern Tech</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The tools and technologies that bring ideas to life
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 cursor-pointer card-glow">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <CardContent className="relative z-10 p-6 flex items-center justify-center">
                      <span className={`text-lg font-bold bg-gradient-to-br ${tech.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                        {tech.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to <span className="gradient-hero">Build Something</span> Amazing?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let is collaborate and turn your vision into a reality
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg font-semibold glow-effect group"
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}