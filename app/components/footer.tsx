"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/tayyabfayyaz", label: "GitHub" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/tayyab-fayyaz-25757b277/", label: "LinkedIn" },
  { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
  { icon: FaFacebook, url: "https://www.facebook.com/tayyab.fayyaz.3781", label: "Facebook" },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Tayyab Fayyaz
              </span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-Autonomous Developer. Building intelligent systems, automation workflows, and the future of AI-driven applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-accent text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tayyab Fayyaz. Built with Next.js, Tailwind CSS, and AI.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
