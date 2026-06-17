"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggleButton } from "./theme_toggle_button";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/tayyabfayyaz" },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/tayyab-fayyaz-25757b277/",
  },
  { icon: FaTwitter, url: "https://twitter.com" },
  { icon: FaFacebook, url: "https://www.facebook.com/tayyab.fayyaz.3781" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
          <motion.a
            href="/"
            className="text-2xl font-extrabold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              TF
            </span>
            <span className="text-muted-foreground ml-1 font-medium text-lg hidden sm:inline">
              | Tayyab Fayyaz
            </span>
          </motion.a>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-1">
              {socialLinks.map(({ icon: Icon, url }, idx) => (
                <motion.a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            <ThemeToggleButton />

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors text-foreground"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed right-0 top-0 h-full w-72 bg-card border-l border-border shadow-2xl"
            >
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <FaTimes className="text-lg" />
                </motion.button>
              </div>
              <nav className="px-4 space-y-1">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-accent"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </nav>
              <div className="absolute bottom-8 left-0 right-0 px-4">
                <div className="border-t border-border pt-6">
                  <p className="text-xs text-muted-foreground text-center mb-4">Connect with me</p>
                  <div className="flex items-center justify-center gap-4">
                    {socialLinks.map(({ icon: Icon, url }, idx) => (
                      <motion.a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        whileHover={{ scale: 1.15 }}
                        className="p-3 rounded-full bg-accent hover:bg-primary/10 transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <Icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
