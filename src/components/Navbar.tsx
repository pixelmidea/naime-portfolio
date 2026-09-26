"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About & Edge", href: "#bento" },
    { name: "Case Studies", href: "#work" },
    { name: "Skills", href: "#expertise" },
    { name: "Experience", href: "#experience" },
    { name: "Book Call", href: "#book" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "py-4 sm:py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand identity */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="#"
          className="flex items-center gap-2 group"
          id="nav-logo"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500 shadow-xs shadow-emerald-500/20 group-hover:scale-105 group-hover:border-emerald-600 transition-all shrink-0">
            <Image
              src="/images/naime-portrait.png"
              alt={portfolioData.personal.name}
              fill
              className="object-cover"
              style={{ objectPosition: "50% 15%" }}
              priority
            />
          </div>
          <span className="font-extrabold text-slate-900 tracking-tight text-lg group-hover:text-emerald-600 transition-colors">
            {portfolioData.personal.name}
            <span className="text-emerald-500">.</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 bg-white/80 border border-slate-200/70 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-600 rounded-full hover:bg-emerald-50/80 transition-all"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            href="#book"
            id="nav-instructor-cta"
            className="shimmer-card inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md shadow-emerald-500/20 transition-all"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          id="mobile-nav-toggle"
          className="lg:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 px-6 py-6 space-y-3 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-800 hover:text-emerald-600 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold bg-emerald-500 text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/20"
              >
                <span>Book a Call (15 / 30 Min)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                <span>Direct Contact</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
