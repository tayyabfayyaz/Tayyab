"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EMAIL, EMAIL_HREF } from "@/lib/site-config";

export default function CtaSection() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="label-mono mb-4">Let&apos;s build your agent</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Have a workflow that should run itself?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Tell me what the process looks like today. I&apos;ll tell you what an agent
            architecture for it would look like.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-md px-8 group">
                Start a project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <a href={EMAIL_HREF}>
              <Button size="lg" variant="outline" className="rounded-md px-8">
                {EMAIL}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
