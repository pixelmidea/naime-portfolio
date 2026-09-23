"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Target,
  Megaphone,
  Filter,
  Search,
  MailCheck,
  Globe2,
  CheckCircle,
  Zap,
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolio";

export default function SkillsStack() {
  const { skillsByCategory } = portfolioData;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryIcons = [Filter, Megaphone, Zap, Search, MailCheck, Globe2];

  const currentCategory = skillsByCategory[activeCategoryIndex] || skillsByCategory[0];

  const toolsList = [
    { name: "Meta Ads Manager", type: "Paid Media" },
    { name: "Google Ads", type: "Search & Display" },
    { name: "Google Analytics 4", type: "Telemetry" },
    { name: "Google Tag Manager", type: "Event Tracking" },
    { name: "Google Search Console", type: "SEO Telemetry" },
    { name: "Shopify Analytics", type: "E-Commerce" },
    { name: "HubSpot / CRM", type: "Automation" },
    { name: "Mailchimp / Klaviyo", type: "Email Workflows" },
    { name: "Canva / Figma Briefs", type: "Creative Direction" },
    { name: "Meta Business Suite", type: "Community & Sprints" },
  ];

  return (
    <section id="expertise" className="py-20 md:py-28 border-b border-[#e2e8f0] bg-[#fbfaf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Digital Marketing Expertise &amp; Tool Stack
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Evaluated by practical campaign execution, measurable commercial ROI, and curriculum clarity—not arbitrary percentage bars.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {skillsByCategory.map((category, idx) => {
            const Icon = categoryIcons[idx] || Filter;
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`relative px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-sm"
                    : "bg-white text-gray-700 border-[#e2e8f0] hover:bg-gray-50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-blue-200" : "text-gray-500"}`} />
                <span>{category.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.category}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="editorial-card p-6 sm:p-8 rounded-3xl bg-white border border-[#e2e8f0] mb-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-950">
                  {currentCategory.category}
                </h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  {currentCategory.description}
                </p>
              </div>
              <span className="text-xs font-bold text-[#1e3a8a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shrink-0">
                {currentCategory.skills.length} Key Competencies
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {currentCategory.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-[#1e3a8a]/40 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#1e3a8a] transition-colors">
                      {skill.name}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs text-gray-600 leading-snug">
                    {skill.focus}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Verified Tools & Software Stack Marquee / Pills */}
        <div className="p-6 rounded-3xl bg-white border border-[#e2e8f0]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Daily Operational Tech Stack
            </span>
            <span className="text-[11px] text-[#1e3a8a] font-semibold">
              Campaigns Deployed &amp; Taught
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {toolsList.map((tool, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center gap-2 text-xs text-gray-800 font-medium hover:border-gray-400 transition-colors shadow-2xs"
              >
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>{tool.name}</span>
                <span className="text-[10px] text-gray-500 bg-white px-1.5 py-0.5 rounded border border-gray-200">
                  {tool.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
