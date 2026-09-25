"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  Lock,
  Globe2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Target,
  Sparkles,
  Zap,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function ImpactCaseStudies() {
  const { caseStudies } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>(caseStudies[0].id);

  const selectedCaseStudy =
    caseStudies.find((cs) => cs.id === activeTab) || caseStudies[0];

  return (
    <section
      id="work"
      className="relative py-10 sm:py-12 lg:py-14 border-b border-slate-100 bg-white flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background glows and sparkles */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-emerald-100/35 rounded-full blur-3xl pointer-events-none -z-10 animate-morph-blob" />
      <div className="absolute bottom-10 -left-10 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-12 left-[8%] text-emerald-500/40 text-xl font-serif pointer-events-none select-none animate-twinkle hidden sm:block">
        ✦
      </div>
      <div className="absolute top-36 right-[6%] text-teal-400/40 text-sm font-serif pointer-events-none select-none animate-twinkle-delayed hidden sm:block">
        ✧
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        {/* Compact Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3 h-3 text-emerald-600 animate-spin-slow" />
            <span>Proven Track Record • Live Agency Results</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-[2.2rem] font-extrabold tracking-tight text-slate-900 leading-tight mb-2">
            Campaign execution,{" "}
            <span className="text-emerald-500">
              not just campaign theory.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-normal">
            Real campaign architectures, precision audience structures, and measurable conversion growth across 100+ global brands.
          </p>
        </div>

        {/* Master-Detail Layout (Side-by-Side: 3 Cards on Left, The Big Card on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* Left Column (4 cols): The 3 Clickable Selector Cards */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 justify-between">
            {caseStudies.map((cs) => {
              const isActive = cs.id === activeTab;
              return (
                <motion.button
                  key={cs.id}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveTab(cs.id)}
                  className={`relative p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between group h-full shimmer-card ${
                    isActive
                      ? "bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/15"
                      : "bg-white/80 border-slate-100 hover:bg-white hover:border-slate-200 shadow-2xs"
                  }`}
                >
                  {/* Active Indicator Bar on Left Edge */}
                  {isActive && (
                    <motion.div
                      layoutId="active-case-bar"
                      className="absolute left-0 top-2.5 bottom-2.5 w-1.5 bg-emerald-500 rounded-r"
                    />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                        {cs.industry.split("/")[0].trim()}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full font-mono flex items-center gap-0.5 ${
                          isActive
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        <ArrowUpRight className="w-3 h-3" />
                        {cs.metricHighlight}
                      </span>
                    </div>

                    <h3
                      className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                        isActive ? "text-emerald-700" : "text-slate-900 group-hover:text-slate-950"
                      }`}
                    >
                      {cs.title}
                    </h3>
                  </div>

                  <div className="pt-2 mt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 text-[10px] font-medium truncate max-w-[140px]">
                      {cs.clientType}
                    </span>
                    <span
                      className={`font-bold flex items-center gap-0.5 text-[10px] shrink-0 ${
                        isActive ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      <span>{isActive ? "Viewing" : "Inspect"}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column (8 cols): The Active Big Card (Detail Display) */}
          <div className="lg:col-span-8 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCaseStudy.id}
                initial={{ opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                transition={{ duration: 0.25 }}
                className="editorial-card shimmer-card glow-beam rounded-3xl bg-white border border-slate-100 shadow-md p-4 sm:p-5 flex flex-col justify-between h-full space-y-3"
              >
                {/* Header Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                      {selectedCaseStudy.clientType}
                    </span>
                    {selectedCaseStudy.region && (
                      <span className="text-[10px] font-medium text-gray-600 bg-gray-50 px-2 py-0.5 rounded border border-gray-200">
                        {selectedCaseStudy.region}
                      </span>
                    )}
                    {selectedCaseStudy.ndaProtected && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                        <Lock className="w-2.5 h-2.5 text-gray-400" />
                        <span>Protected Telemetry</span>
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-semibold text-gray-500 bg-[#f8fafc] px-2 py-0.5 rounded border border-gray-200">
                    Industry: <strong className="text-gray-900">{selectedCaseStudy.industry}</strong>
                  </span>
                </div>

                {/* Case Study Title */}
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight leading-snug">
                    {selectedCaseStudy.title}
                  </h3>
                </div>

                {/* Visual Performance Content: Graphic on Left (6 cols) & Outcome on Right (6 cols) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
                  {/* Left Side (6 cols): Animated Chart / Graphic */}
                  <div className="md:col-span-6 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between">
                    {selectedCaseStudy.id === "cs-1" && (
                      /* Case 1: B2B Cost-Per-Lead Curve */
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-gray-900">
                            CPL Drop ($58 → $34)
                          </span>
                          <span className="text-[10px] font-mono font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            -42% CPL
                          </span>
                        </div>

                        <div className="h-24 w-full relative flex items-end">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                            <defs>
                              <linearGradient id="cplGradMini" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <motion.polygon
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              points="5,15 80,32 160,48 240,60 295,70 295,80 5,80"
                              fill="url(#cplGradMini)"
                            />
                            <motion.path
                              d="M 5,15 Q 120,50 295,70"
                              fill="none"
                              stroke="#059669"
                              strokeWidth="3"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1 }}
                            />
                            <circle cx="5" cy="15" r="4" fill="#ef4444" />
                            <circle cx="295" cy="70" r="5" fill="#059669" />
                          </svg>
                          <span className="absolute top-0 left-1 text-[9px] font-mono font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
                            Start: $58
                          </span>
                          <span className="absolute bottom-1 right-1 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                            Month 6: $34
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5 text-center">
                          <div className="p-1 rounded-lg bg-white border border-gray-200">
                            <span className="text-[8px] text-gray-500 block uppercase font-mono">B2B Reach</span>
                            <span className="text-[10px] font-bold text-gray-900">120K Senior</span>
                          </div>
                          <div className="p-1 rounded-lg bg-white border border-gray-200">
                            <span className="text-[8px] text-gray-500 block uppercase font-mono">Conversion</span>
                            <span className="text-[10px] font-bold text-gray-900">24.6% Opt-In</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedCaseStudy.id === "cs-2" && (
                      /* Case 2: E-Commerce ROAS Curve */
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-gray-900">
                            ROAS Scale (1.2x → 3.2x)
                          </span>
                          <span className="text-[10px] font-mono font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                            3.2x Scale
                          </span>
                        </div>

                        <div className="h-24 w-full relative flex items-end">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                            <defs>
                              <linearGradient id="roasGradMini" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <motion.polygon
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              points="5,70 80,55 160,35 240,20 295,8 295,80 5,80"
                              fill="url(#roasGradMini)"
                            />
                            <motion.path
                              d="M 5,70 Q 140,40 295,8"
                              fill="none"
                              stroke="#2563eb"
                              strokeWidth="3"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1 }}
                            />
                            <circle cx="5" cy="70" r="4" fill="#94a3b8" />
                            <circle cx="295" cy="8" r="5" fill="#2563eb" />
                          </svg>
                          <span className="absolute bottom-1 left-1 text-[9px] font-mono font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-300">
                            Base: 1.2x
                          </span>
                          <span className="absolute top-0 right-1 text-[10px] font-mono font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded border border-blue-300">
                            Peak: 3.2x
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5 text-center">
                          <div className="p-1 rounded-lg bg-white border border-gray-200">
                            <span className="text-[8px] text-gray-500 block uppercase font-mono">Organic Reach</span>
                            <span className="text-[10px] font-bold text-gray-900">+300% (3x)</span>
                          </div>
                          <div className="p-1 rounded-lg bg-white border border-gray-200">
                            <span className="text-[8px] text-gray-500 block uppercase font-mono">Retargeting</span>
                            <span className="text-[10px] font-bold text-gray-900">4.1x ROAS</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedCaseStudy.id === "cs-3" && (
                      /* Case 3: Enterprise 100% Capacity Meter */
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-gray-900">
                            Admissions Capacity Fill
                          </span>
                          <span className="text-[10px] font-mono font-extrabold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                            100% Booked
                          </span>
                        </div>

                        <div className="h-24 w-full flex items-center justify-center gap-3">
                          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="38" stroke="#e2e8f0" strokeWidth="10" fill="none" />
                              <motion.circle
                                cx="50"
                                cy="50"
                                r="38"
                                stroke="#8b5cf6"
                                strokeWidth="10"
                                strokeLinecap="round"
                                fill="none"
                                strokeDasharray="238"
                                initial={{ strokeDashoffset: 238 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 1 }}
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <span className="text-sm font-extrabold font-mono text-purple-700 leading-none">
                                100%
                              </span>
                              <span className="text-[7px] font-bold text-gray-500 uppercase">
                                Full
                              </span>
                            </div>
                          </div>

                          <div className="space-y-0.5 text-left">
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                              45 / 45 Seats Filled
                            </span>
                            <p className="text-[10px] text-gray-600 leading-tight">
                              Zero wasted ad budget via negative-keyword pruning.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-1.5 text-center">
                          <div className="p-1 rounded-lg bg-white border border-gray-200">
                            <span className="text-[8px] text-gray-500 block uppercase font-mono">Chat SLA</span>
                            <span className="text-[10px] font-bold text-gray-900">&lt; 5 Min</span>
                          </div>
                          <div className="p-1 rounded-lg bg-white border border-gray-200">
                            <span className="text-[8px] text-gray-500 block uppercase font-mono">Consultations</span>
                            <span className="text-[10px] font-bold text-gray-900">3.8x Lift</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Strategic Blueprint Hook */}
                    <div className="pt-1.5 mt-1.5 border-t border-gray-200">
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider block mb-0.5">
                        Strategic Move:
                      </span>
                      <p className="text-[11px] text-gray-800 font-semibold leading-tight line-clamp-2">
                        {selectedCaseStudy.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Right Side (6 cols): Dark Slate Impact & Platform Stack Card */}
                  <div className="md:col-span-6 rounded-2xl bg-[#0f172a] text-white p-3.5 sm:p-4 flex flex-col justify-between shadow-lg border border-gray-800">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[9px] font-bold uppercase tracking-wider mb-1.5">
                        <TrendingUp className="w-2.5 h-2.5" />
                        <span>Measured Outcome</span>
                      </div>

                      <div className="text-3xl sm:text-[2.2rem] font-extrabold font-mono text-emerald-400 tracking-tight leading-none mb-0.5">
                        {selectedCaseStudy.metricHighlight}
                      </div>
                      <p className="text-[11px] text-gray-300 font-semibold mb-2">
                        {selectedCaseStudy.metricLabel || "Key Business Outcome"}
                      </p>

                      <div className="border-t border-white/10 pt-2">
                        <p className="text-[11px] sm:text-xs text-gray-200 leading-snug line-clamp-2">
                          {selectedCaseStudy.result}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-white/10 space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {selectedCaseStudy.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-medium text-white"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-[11px] font-bold transition-all shadow-md shadow-emerald-950/20 group"
                      >
                        <span>Discuss Similar Campaign</span>
                        <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
