"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const logos = [
  { src: "/logos/python.svg", alt: "Python" },
  { src: "/logos/typescript.svg", alt: "TypeScript" },
  { src: "/logos/nextjs.svg", alt: "Next.js" },
  { src: "/logos/react.svg", alt: "React" },
  { src: "/logos/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/logos/framer-motion.svg", alt: "Framer Motion" },
];

const typingTexts = [
  "AI-Autonomous Developer",
  "AI Systems Developer",
  "Automation Engineer",
  "Full-Stack Developer",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium gradient-text">Welcome to my portfolio</span>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Tayyab Fayyaz
            </span>
          </h1>

          <div className="h-14 mt-6 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              {displayedText}
              <motion.span
                className="inline-block w-0.5 h-7 md:h-8 bg-primary ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base md:text-lg text-muted-foreground/80 leading-relaxed"
        >
          I design and build automation-first AI systems, intelligent agents, and
          API-driven applications that reduce manual work and improve efficiency.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 mt-10"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-background/80 border border-border/50 p-3 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={36}
                height={36}
                className="h-9 w-9"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <Link href="/contact" passHref>
            <Button size="lg" className="group rounded-full px-8">
              Let&apos;s Build Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/portfolio" passHref>
            <Button size="lg" variant="outline" className="group rounded-full px-8">
              View My Work
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 0.5,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-muted-foreground/50"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
