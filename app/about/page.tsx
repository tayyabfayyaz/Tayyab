"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, Square, GraduationCap } from "lucide-react";

const skills = [
  { name: "Python", icon: "/logos/python.svg" },
  { name: "TypeScript", icon: "/logos/typescript.svg" },
  { name: "Next.js", icon: "/logos/nextjs.svg" },
  { name: "React", icon: "/logos/react.svg" },
  { name: "Tailwind CSS", icon: "/logos/tailwind.svg" },
  { name: "Framer Motion", icon: "/logos/framer-motion.svg" },
];

const expertise = [
  "AI Agents & Chatbots",
  "Workflow Automation",
  "Prompt Engineering",
  "API Integration",
  "FastAPI & n8n",
  "Auth & Security (JWT/Clerk)",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tight">
            About Me
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-Autonomous Developer building intelligent systems, automation workflows, and API-driven applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 space-y-8"
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src="/tayyab.png" alt="Tayyab" />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-semibold">Tayyab Fayyaz</h2>
                  <p className="text-muted-foreground">AI-Autonomous Developer</p>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://github.com/tayyabfayyaz" target="_blank">
                        <Globe className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://tayyab-liart.vercel.app" target="_blank">
                        <Square className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none space-y-4">
                <p>
                  I am an AI-Autonomous Developer with hands-on experience building intelligent systems using AI tools, APIs, and automation workflows. My expertise spans Next.js, Python, and modern AI frameworks — with a strong focus on developing AI assistants, chatbot systems, and API-driven applications.
                </p>
                <p>
                  Since 2025, I have been designing and building AI-based applications and automation systems as an AI Systems Developer. I specialize in creating scalable, automation-first solutions that reduce manual work and improve system efficiency using tools like GPT, Claude Code, FastAPI, and workflow automation platforms.
                </p>
                <p>
                  I am passionate about building real-world AI systems — from autonomous task managers to intelligent personal assistants — and continuously experimenting with cutting-edge AI tools and system workflows to push the boundaries of what is possible.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Core Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-3">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">BSCS (Currently Enrolled)</h4>
                  <p className="text-sm text-muted-foreground">Iqra University</p>
                  <p className="text-sm text-muted-foreground">Pursuing AI Engineering and AI Systems</p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold">Intermediate | Computer Science</h4>
                  <p className="text-sm text-muted-foreground">Board of Intermediate of Karachi</p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold">Matriculation | Science</h4>
                  <p className="text-sm text-muted-foreground">Karachi Board</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;