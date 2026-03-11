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
  { label: "About", href: "/about" },
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
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 w-full backdrop-blur-xl z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-black/90 shadow-lg shadow-primary/5"
            : "bg-white/70 dark:bg-black/70"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl font-extrabold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Tayyab Fayyaz
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10 dark:bg-primary/20"
                      : "text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/10"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center space-x-2">
              {socialLinks.map(({ icon: Icon, url }, idx) => (
                <motion.a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            <ThemeToggleButton />

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden"
          >
            <div className="mx-4 rounded-2xl border bg-card shadow-xl overflow-hidden">
              <nav className="p-4 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}

                {/* Mobile Social Icons */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t mt-4">
                  {socialLinks.map(({ icon: Icon, url }, idx) => (
                    <motion.a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                      className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
