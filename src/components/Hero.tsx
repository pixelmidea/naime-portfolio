"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  Award,
  Users,
  Briefcase,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

type RoleMode = "instructor" | "marketer";

export default function Hero() {
  const { personal } = portfolioData;
  const [roleMode, setRoleMode] = useState<RoleMode>("instructor");

  const platformSkills = [
    "Meta Ads Manager",
    "Google Ads (Search & Display)",
    "Conversion Funnels (CRO)",
    "Curriculum & Pedagogical Design",
    "International Client Account Ops",
    "GA4 & Marketing Telemetry",
    "Lead Generation Architectures",
    "B2B LinkedIn Marketing",
    "Organic Growth Loops",
    "Retention & Email Workflows",
  ];

  return (
    <section className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-12 overflow-hidden border-b border-[#e2e8f0]">
      {/* Ambient background architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Dynamic Role Switcher Toggle */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex p-1 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs backdrop-blur-md">
            <button
              onClick={() => setRoleMode("instructor")}
              className={`relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                roleMode === "instructor"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {roleMode === "instructor" && (
                <motion.div
                  layoutId="role-pill"
                  className="absolute inset-0 bg-[#1e3a8a] rounded-xl shadow-md"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Hire as an Instructor</span>
              </span>
            </button>

            <button
              onClick={() => setRoleMode("marketer")}
              className={`relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                roleMode === "marketer"
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {roleMode === "marketer" && (
                <motion.div
                  layoutId="role-pill"
                  className="absolute inset-0 bg-[#0f172a] rounded-xl shadow-md"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Hire for Growth Marketing</span>
              </span>
            </button>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-6 lg:mb-8">
          {/* Left Column: Adaptive Content based on RoleMode */}
          <div className="space-y-3.5 sm:space-y-4">
            <AnimatePresence mode="wait">
              {roleMode === "instructor" ? (
                <motion.div
                  key="instructor-view"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3.5 sm:space-y-4"
                >
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1e3a8a] text-[11px] sm:text-xs font-bold tracking-wide">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
                    <span>Pedagogical Clarity • Battle-Tested Experience</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-gray-950 leading-[1.22] sm:leading-[1.24]">
                    I turn real-world marketing experience into{" "}
                    <span className="text-[#1e3a8a] underline decoration-[#1e3a8a]/25 decoration-2 sm:decoration-3 underline-offset-[6px] font-serif italic">
                      practical learning.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
                    4+ years teaching analytical mathematics gives me the structured pedagogy to break down complex ad algorithms, conversion funnels, and marketing mechanics into simple, reproducible workflows that learners master quickly.
                  </p>

                  {/* Instructor CTAs */}
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <a
                      href="#contact"
                      id="hero-instructor-cta"
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#1e3a8a]/20 transition-all hover:-translate-y-0.5"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Book as an Instructor</span>
                      <ArrowRight className="w-4 h-4 opacity-80" />
                    </a>

                    <a
                      href="#bento"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-xs sm:text-sm border border-[#e2e8f0] shadow-2xs transition-all hover:border-gray-400 hover:-translate-y-0.5"
                    >
                      <span>Explore Pedagogy</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="marketer-view"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3.5 sm:space-y-4"
                >
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] sm:text-xs font-bold tracking-wide">
                    <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                    <span>Inbound Lead Gen • Meta &amp; Google Ads • CRO</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-gray-950 leading-[1.22] sm:leading-[1.24]">
                    Data-driven marketing systems that{" "}
                    <span className="text-[#0f172a] underline decoration-[#0f172a]/25 decoration-2 sm:decoration-3 underline-offset-[6px] font-serif italic">
                      scale business growth.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
                    Managed marketing operations for over 100 international clients. Specializing in high-intent lead generation, multi-touch retargeting pipelines, and rigorous conversion rate optimization.
                  </p>

                  {/* Marketer CTAs */}
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <a
                      href="#contact"
                      id="hero-marketer-cta"
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#0f172a] hover:bg-gray-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-black/15 transition-all hover:-translate-y-0.5"
                    >
                      <Briefcase className="w-4 h-4" />
                      <span>Discuss Growth Strategy</span>
                      <ArrowRight className="w-4 h-4 opacity-80" />
                    </a>

                    <a
                      href="#work"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-xs sm:text-sm border border-[#e2e8f0] shadow-2xs transition-all hover:border-gray-400 hover:-translate-y-0.5"
                    >
                      <span>View Case Studies</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick credentials badges */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5 text-xs text-gray-600 border-t border-[#e2e8f0]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>NSDA Level-3 Certified</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Users className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>100+ International Clients</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Card - Symmetrical, Balanced Editorial Frame */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-none">
              {/* Single cohesive card container - perfectly aligned and symmetrical with left column */}
              <div className="relative aspect-[4/3.2] sm:aspect-[5/4] w-full rounded-3xl bg-slate-900 border border-gray-200/80 shadow-2xl overflow-hidden group">
                <Image
                  src="/images/naime-hero.jpg"
                  alt="Naime - Digital Marketing Strategist & Instructor"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ objectPosition: "28% 18%" }}
                />

                {/* Subtle dark gradient overlay to ensure text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                {/* Top Glassmorphic Badges */}
                <div className="relative z-10 p-3.5 sm:p-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                    <Award className="w-3.5 h-3.5 text-blue-300" />
                    Verified Practitioner
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-medium text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>

                {/* Bottom Integrated Frosted Glass Card - Sleek & Non-intrusive */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 z-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-3.5 text-white flex items-center justify-between shadow-lg">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {personal.name}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-blue-200 bg-blue-900/60 px-2 py-0.5 rounded border border-blue-400/30">
                          {roleMode === "instructor" ? "Instructor" : "Growth Marketer"}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-300 leading-tight">
                        {roleMode === "instructor"
                          ? "Digital Marketing Strategist & Trainer"
                          : "Performance & CRO Specialist"}
                      </p>
                    </div>

                    <div className="text-right pl-3 border-l border-white/20 shrink-0">
                      <p className="text-xs sm:text-sm font-extrabold text-white font-mono leading-none">
                        100+
                      </p>
                      <p className="text-[10px] text-gray-300 font-medium mt-0.5">
                        Global Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Platforms & Skills Marquee */}
      <div className="mt-4 sm:mt-6 py-2 sm:py-2.5 bg-white border-y border-[#e2e8f0] overflow-hidden">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[...platformSkills, ...platformSkills].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#1e3a8a] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]/40" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
