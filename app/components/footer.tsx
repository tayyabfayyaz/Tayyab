"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-bold">Tayyab Fayyaz</h1>
          <p className="text-sm mt-2">
            Code + Design × AI.  
            <br />
            Building bridges between pixels, logic, and intelligence.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-indigo-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-indigo-400 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-indigo-400 transition">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-indigo-400 transition">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/tayyabfayyaz" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tayyab-fayyaz-25757b277/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.facebook.com/tayyab.fayyaz.3781" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
              <FaFacebook size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Tayyab Fayyaz. Built with Next.js, Tailwind, & AI tools.
      </div>
    </footer>
  );
};

export default Footer;
