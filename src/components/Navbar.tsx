"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";
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
    { name: "Pedagogy & Edge", href: "#bento" },
    { name: "Case Studies", href: "#work" },
    { name: "Capabilities", href: "#expertise" },
    { name: "Experience & Trust", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-[#fbfaf7]/90 backdrop-blur-md border-b border-[#e2e8f0] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
          : "py-3 sm:py-3.5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-950 tracking-tight leading-none text-base group-hover:text-[#1e3a8a] transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] text-gray-500 font-medium tracking-tight mt-0.5">
              Marketing &amp; Instructor
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 bg-white/90 border border-[#e2e8f0] shadow-2xs backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:text-[#1e3a8a] rounded-full hover:bg-gray-100/70 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            id="nav-instructor-cta"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#1e3a8a] hover:bg-blue-900 text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Hire as Instructor</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          id="mobile-nav-toggle"
          className="lg:hidden p-2 rounded-xl bg-white border border-[#e2e8f0] text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#fbfaf7] border-b border-[#e2e8f0] px-6 py-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-800 hover:text-[#1e3a8a] border-b border-gray-200/60"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-[#1e3a8a] text-white hover:bg-blue-900"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Hire as an Instructor</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
