"use client";

import { ArrowUp } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <footer className="border-t border-slate-100 bg-white py-12 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand & Positioning */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                N
              </div>
              <span className="font-extrabold text-slate-950 text-base tracking-tight">
                {personal.name}
                <span className="text-emerald-500">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Digital Marketing Strategist &amp; Instructor
            </p>
            <p className="text-[11px] text-slate-400">
              Sirajganj, Bangladesh • Open for Remote &amp; Onsite Engagements
            </p>
          </div>

          {/* Quick Nav Links & Socials */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <span className="text-slate-300 hidden sm:inline">|</span>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:text-emerald-600 hover:border-emerald-300 transition-all shadow-2xs"
            aria-label="Back to top"
            id="footer-back-to-top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 {personal.name}. All rights reserved.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/80 border border-emerald-200/60 text-emerald-800 text-[11px] font-medium font-mono">
            <span>NSDA Level-3 Certified</span>
            <span>•</span>
            <span>100+ Global Accounts</span>
            <span>•</span>
            <span>5+ Years Teaching Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
