"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  COPYRIGHT,
  EMAIL,
  EMAIL_HREF,
  GITHUB_URL,
  IOTADEV_NAME,
  IOTADEV_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from "@/lib/site-config";
import { Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FaGithub, url: GITHUB_URL, label: "GitHub" },
  { icon: FaLinkedin, url: LINKEDIN_URL, label: "LinkedIn" },
  { icon: FaXTwitter, url: TWITTER_URL, label: "X" },
  { icon: Mail, url: EMAIL_HREF, label: "Email" },
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
            <h3 className="text-xl font-extrabold tracking-tight mb-3 text-foreground">
              Tayyab Fayyaz
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI Agent Engineer building multi-agent systems — orchestrator-worker
              architectures, MCP integrations, and production deployments — under{" "}
              <a
                href={IOTADEV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {IOTADEV_NAME}
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider font-mono">
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
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider font-mono">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-accent text-muted-foreground hover:text-foreground hover:bg-accent/80 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{EMAIL}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-xs text-muted-foreground font-mono">{COPYRIGHT}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
