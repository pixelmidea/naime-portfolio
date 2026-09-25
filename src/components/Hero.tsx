"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  TrendingUp,
  MapPin,
  Sparkles,
  Mail,
  MessageCircle,
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal } = portfolioData;
  const [roleMode, setRoleMode] = useState<"instructor" | "marketer">("marketer");

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
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 overflow-hidden border-b border-slate-100">
      {/* Floating Sparkle ✦ Constellation in Background */}
      <div className="absolute top-16 left-[5%] text-emerald-500/70 text-3xl font-serif pointer-events-none select-none animate-twinkle hidden md:block">
        ✦
      </div>
      <div className="absolute top-44 left-[16%] text-teal-400/50 text-base font-serif pointer-events-none select-none animate-twinkle-delayed hidden lg:block">
        ✧
      </div>
      <div className="absolute bottom-28 left-[4%] text-teal-500/50 text-2xl font-serif pointer-events-none select-none animate-float-slow hidden md:block">
        ✦
      </div>
      <div className="absolute top-20 right-[10%] text-purple-400/60 text-3xl font-serif pointer-events-none select-none animate-twinkle hidden lg:block">
        ✦
      </div>
      <div className="absolute bottom-32 right-[5%] text-emerald-400/70 text-xl font-serif pointer-events-none select-none animate-twinkle-delayed hidden md:block">
        ✧
      </div>
      <div className="absolute top-1/3 right-[32%] text-amber-400/40 text-sm font-serif pointer-events-none select-none animate-twinkle hidden xl:block">
        ★
      </div>

      {/* Multi-layered Organic Morphing Aurora Backdrop */}
      <div className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-200/25 via-teal-100/20 to-purple-200/20 blur-3xl rounded-full pointer-events-none -z-10 animate-morph-blob" />
      <div className="absolute top-1/4 left-[35%] w-[400px] h-[300px] bg-emerald-300/15 blur-[90px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Sleek Animated Dual Role Selector */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex p-1 rounded-full bg-slate-100/80 border border-slate-200/80 backdrop-blur-md shadow-2xs">
            <button
              onClick={() => setRoleMode("marketer")}
              className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                roleMode === "marketer"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {roleMode === "marketer" && (
                <motion.div
                  layoutId="hero-role-pill"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-md shadow-emerald-500/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Growth Marketer</span>
              </span>
            </button>

            <button
              onClick={() => setRoleMode("instructor")}
              className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                roleMode === "instructor"
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {roleMode === "instructor" && (
                <motion.div
                  layoutId="hero-role-pill"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-md shadow-emerald-500/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Marketing Instructor</span>
              </span>
            </button>
          </div>
        </div>

        {/* Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-10 sm:mb-14">
          {/* Left Column: Greeting, Shimmer Name, Role & Interactive Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-5">
            {/* Greeting with Animated Shimmer Name */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                <span>Hi, I&apos;m</span>
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 bg-[length:200%_auto] animate-gradient-x underline decoration-emerald-200 decoration-4 underline-offset-8">
                  {personal.name.split(" ")[1] || personal.name}
                  <span className="absolute -top-2 -right-3 text-emerald-400 text-sm animate-twinkle pointer-events-none">
                    ✦
                  </span>
                </span>
              </div>

              {/* Subheading / Role Title */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={roleMode}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-2xl sm:text-3xl lg:text-[2.4rem] font-bold text-slate-800 tracking-tight leading-snug pt-1"
                >
                  {roleMode === "marketer"
                    ? "Digital Marketing & Growth Strategist"
                    : "Digital Marketing Instructor & Pedagogue"}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Narrative Paragraph */}
            <AnimatePresence mode="wait">
              <motion.p
                key={roleMode}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
              >
                {roleMode === "marketer"
                  ? "I scale businesses through high-intent paid ad funnels, international account execution, and conversion optimization. 100+ foreign clients managed with data-first accountability."
                  : "I turn real-world campaign mechanics into intuitive, reproducible training frameworks. 5+ years of mathematics pedagogy applied to ads, attribution, and growth systems."}
              </motion.p>
            </AnimatePresence>

            {/* Shimmer Pill Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <motion.a
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                id="hero-primary-cta"
                className="shimmer-card inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all group"
              >
                <span>{roleMode === "marketer" ? "View Case Studies" : "View Curriculum & Pedagogy"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                id="hero-secondary-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-all hover:border-slate-300"
              >
                <span>Contact Me</span>
              </motion.a>
            </div>

            {/* Meta Row: Location + Divider + Social Links */}
            <div className="pt-4 flex items-center gap-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{personal.location}</span>
              </div>

              <span className="text-slate-300">|</span>

              <div className="flex items-center gap-2.5">
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-600 text-slate-500 transition-transform hover:scale-110"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                  className="p-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-600 text-slate-500 transition-transform hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={personal.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-600 text-slate-500 transition-transform hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Multi-Layered Portrait Showcase */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              {/* Offset Decorative Pastel Card with Connected Circular Nodes */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-emerald-100/70 via-teal-50/50 to-purple-100/50 border border-emerald-200/50 translate-x-3.5 translate-y-3.5 pointer-events-none -z-10">
                {/* Connected Emerald Nodes / Dots at corners */}
                <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-emerald-400 border-2 border-white shadow-md flex items-center justify-center animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-teal-400 border-2 border-white shadow-md animate-pulse" />
              </div>

              {/* Floating Top-Left Micro Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 z-20 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/10 flex items-center gap-2 animate-float-reverse hover:scale-105 transition-transform cursor-default select-none">
                <span className="p-1 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-xs">
                  ⚡
                </span>
                <div className="text-left leading-none">
                  <span className="text-xs font-extrabold text-slate-900 font-mono block">
                    100+
                  </span>
                  <span className="text-[9px] font-semibold text-slate-500">
                    Accounts Scaled
                  </span>
                </div>
              </div>

              {/* Floating Right-Center Micro Badge */}
              <div className="absolute top-[42%] -right-4 sm:-right-6 -translate-y-1/2 z-20 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/10 flex items-center gap-2 animate-float-diagonal hover:scale-105 transition-transform cursor-default select-none hidden sm:flex">
                <span className="p-1 rounded-lg bg-purple-50 text-purple-600 font-bold text-xs">
                  ✦
                </span>
                <div className="text-left leading-none">
                  <span className="text-xs font-extrabold text-slate-900 font-mono block">
                    5+ Yrs
                  </span>
                  <span className="text-[9px] font-semibold text-slate-500">
                    Teaching &amp; ROI
                  </span>
                </div>
              </div>

              {/* Floating Bottom-Right Micro Badge */}
              <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 z-20 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/10 flex items-center gap-2 animate-float-slow hover:scale-105 transition-transform cursor-default select-none">
                <span className="p-1 rounded-lg bg-teal-50 text-teal-600 font-bold text-xs">
                  📈
                </span>
                <div className="text-left leading-none">
                  <span className="text-xs font-extrabold text-emerald-600 font-mono block">
                    3.2x
                  </span>
                  <span className="text-[9px] font-semibold text-slate-500">
                    Peak ROAS
                  </span>
                </div>
              </div>

              {/* Main Portrait Frame with Float Animation */}
              <div className="relative rounded-[2.2rem] bg-slate-900 border-4 border-white shadow-2xl overflow-hidden aspect-[4/4.4] group">
                <Image
                  src="/images/naime-hero.jpg"
                  alt={personal.name}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ objectPosition: "28% 18%" }}
                />

                {/* Subtle vignette for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Top-Right Floating Status Pill with Live Radar Wave */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-100 text-[11px] font-bold text-slate-800 shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    Available for Work
                  </span>
                </div>
              </div>

              {/* Overlapping Floating "CURRENT FOCUS" Glass Card with Gentle Float & Interactive Tilt */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="shimmer-card glow-beam absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-20 w-[90%] sm:w-[320px] p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/10 space-y-2.5 animate-float-gentle cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-emerald-600 tracking-wider uppercase font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-spin-slow" />
                    CURRENT FOCUS
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    2026
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px] sm:text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span>🚀</span>
                    <span>Scaling Paid Funnels (100+ Accounts)</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span>🏆</span>
                    <span>NSDA Level-3 Certified Marketer</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span>🎓</span>
                    <span>Mathematics &amp; Marketing Pedagogy (5+ Yrs)</span>
                  </div>
                  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                    <span>⚡</span>
                    <span>Next Clicker Agency Lead Strategist</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Infinite Scrolling Tech Ticker with Hover Pause */}
      <div className="mt-8 sm:mt-10 py-3 bg-slate-50/80 border-y border-slate-100 overflow-hidden">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[...platformSkills, ...platformSkills].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-600 transition-colors cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500/70 animate-pulse" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
