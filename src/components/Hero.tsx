"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  TrendingUp,
  Award,
  MapPin,
  Sparkles,
  Mail,
  Phone,
  MessageCircle,
  ChevronRight,
  Globe,
  Briefcase,
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
    <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-14 overflow-hidden border-b border-slate-100">
      {/* Floating Sparkle ✦ Icons in Background */}
      <div className="absolute top-20 left-[8%] text-emerald-400/70 text-2xl font-serif pointer-events-none select-none animate-float hidden md:block">
        ✦
      </div>
      <div className="absolute bottom-28 left-[4%] text-teal-400/50 text-xl font-serif pointer-events-none select-none animate-float-slow hidden md:block">
        ✦
      </div>
      <div className="absolute top-36 right-[6%] text-purple-400/60 text-2xl font-serif pointer-events-none select-none animate-float hidden lg:block">
        ✦
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Sleek Dual Role Selector */}
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
                  className="absolute inset-0 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/25"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
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
                  className="absolute inset-0 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/25"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-8 sm:mb-12">
          {/* Left Column: Greeting, Role, Narrative & Pill CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-5">
            {/* Greeting */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                <span>Hi, I&apos;m</span>
                <span className="text-emerald-500 underline decoration-emerald-200 decoration-4 underline-offset-8">
                  {personal.name.split(" ")[1] || personal.name}
                </span>
              </div>

              {/* Subheading / Role Title */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={roleMode}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
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
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
              >
                {roleMode === "marketer"
                  ? "I scale businesses through high-intent paid ad funnels, international account execution, and conversion optimization. 100+ foreign clients managed with data-first accountability."
                  : "I turn real-world campaign mechanics into intuitive, reproducible training frameworks. 5+ years of mathematics pedagogy applied to ads, attribution, and growth systems."}
              </motion.p>
            </AnimatePresence>

            {/* Pill Action Buttons (Matching Screenshot) */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#work"
                id="hero-primary-cta"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 group"
              >
                <span>{roleMode === "marketer" ? "View Case Studies" : "View Curriculum & Pedagogy"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                id="hero-secondary-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-all hover:border-slate-300 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>
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
                  className="p-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-600 text-slate-500 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Email"
                  className="p-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-600 text-slate-500 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={personal.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-1.5 rounded-full hover:bg-emerald-50 hover:text-emerald-600 text-slate-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Portrait with Offset Connected Shapes & Focus Badge */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              {/* Offset Decorative Pastel Card with Connected Circular Nodes (Matching Reference Image) */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-emerald-100/70 via-teal-50/50 to-purple-100/50 border border-emerald-200/50 translate-x-3 translate-y-3 pointer-events-none -z-10">
                {/* Connected Emerald Nodes / Dots at corners */}
                <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-emerald-400 border-2 border-white shadow-md flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-teal-400 border-2 border-white shadow-md" />
              </div>

              {/* Main Portrait Frame with Subtle Float Animation */}
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

                {/* Top-Right Floating Status Pill */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-100 text-[11px] font-bold text-slate-800 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Work
                  </span>
                </div>
              </div>

              {/* Overlapping Floating "CURRENT FOCUS" Glass Card (Matching Screenshot) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-20 w-[90%] sm:w-[320px] p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/10 space-y-2.5 animate-float"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-emerald-600 tracking-wider uppercase font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                    CURRENT FOCUS
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    2026
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px] sm:text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <span>🚀</span>
                    <span>Scaling Paid Funnels (100+ Accounts)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🏆</span>
                    <span>NSDA Level-3 Certified Marketer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🎓</span>
                    <span>Mathematics &amp; Marketing Pedagogy (5+ Yrs)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⚡</span>
                    <span>Next Clicker Agency Lead Strategist</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Infinite Scrolling Tech Ticker */}
      <div className="mt-8 sm:mt-10 py-2.5 bg-slate-50/80 border-y border-slate-100 overflow-hidden">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[...platformSkills, ...platformSkills].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
