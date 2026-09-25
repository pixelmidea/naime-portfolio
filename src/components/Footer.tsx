"use client";

import { ArrowUp, Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Pedagogy & Edge", href: "#bento" },
    { name: "Case Studies", href: "#work" },
    { name: "Capabilities", href: "#expertise" },
    { name: "Experience & Trust", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-[#e2e8f0] bg-[#f8fafc] py-12 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#e2e8f0]">
          {/* Brand & Positioning */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-xs">
                N
              </div>
              <span className="font-bold text-gray-950 text-base">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-gray-600 font-medium">
              Digital Marketing Strategist &amp; Instructor
            </p>
            <p className="text-[11px] text-gray-500">
              Sirajganj, Bangladesh • Open for Remote &amp; Onsite Engagements
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1e3a8a] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#e2e8f0] text-xs font-bold text-gray-700 hover:text-[#1e3a8a] hover:border-gray-400 transition-all shadow-2xs"
            aria-label="Back to top"
            id="footer-back-to-top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© 2026 {personal.name}. All rights reserved.</p>
          <p className="text-[11px] font-medium text-gray-600">
            NSDA Level-3 Certified • 100+ Global Accounts • 5+ Years Teaching Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
