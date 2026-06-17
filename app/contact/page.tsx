"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Youtube, Globe, Facebook } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus("Message sent successfully!");
  };

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
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project idea, a question, or just want to connect? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                        Your Name
                      </label>
                      <Input id="name" type="text" placeholder="John Doe" className="mt-1" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="you@example.com" className="mt-1" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={6}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Button type="submit" disabled={status === "Sending..."}>
                      {status === "Sending..." ? "Sending..." : "Send Message"}
                    </Button>
                    {status && <p className="text-sm text-muted-foreground">{status}</p>}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:contact@example.com" className="hover:underline">
                      fayyaztayyab684@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Remote / Planet Earth / Pakistan</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/tayyabfayyaz" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/tayyab-fayyaz-25757b277/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://www.facebook.com/tayyab.fayyaz.3781" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://youtu.be/qvUjX6iqokw" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://tayyab-liart.vercel.app" target="_blank" rel="noopener noreferrer">
                      <Globe className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;