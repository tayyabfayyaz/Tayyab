"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, File, Square } from "lucide-react";

const skills = [
  { name: "TypeScript", icon: "/logos/typescript.svg" },
  { name: "React", icon: "/logos/react.svg" },
  { name: "Next.js", icon: "/logos/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/logos/tailwind.svg" },
  { name: "Framer Motion", icon: "/logos/framer-motion.svg" },
  { name: "Python", icon: "/logos/python.svg" },
];

const expertise = [
  "Frontend Development",
  "UI/UX Design",
  "Full-Stack Architecture",
  "Agentic AI",
  "Web3",
  "DevOps",
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
            I am a passionate developer creating modern, performant, and delightful web experiences.
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
                  <h2 className="text-2xl font-semibold">Tayyab</h2>
                  <p className="text-muted-foreground">Full-Stack Developer</p>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#">
                        <Globe className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#">
                        <File className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#">
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
              <CardContent className="prose prose-invert max-w-none">
                <p>
                  My programming journey began in 2018 with a simple HTML & CSS website. This sparked a passion for creating beautiful and functional digital experiences. I quickly dove deeper, enrolling in a web design course where I fell in love with UI/UX principles and the power of frameworks like Tailwind CSS.
                </p>
                <p>
                  By 2022, I was building full-stack applications with Next.js and TypeScript, focusing on performance and robust architecture. My curiosity then led me to the world of AI, and since 2024, I have been building agentic AI demos, NLP tools, and intelligent UI features.
                </p>
                <p>
                  Today, I combine my skills in design, logic, and AI to build the next generation of web experiences. I am always eager to learn new technologies and take on challenging projects.
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
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;