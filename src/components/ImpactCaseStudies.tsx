"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  Lock,
  Globe2,
  TrendingUp,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  BarChart3,
  Calendar,
} from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function ImpactCaseStudies() {
  const { caseStudies, clientJourneySteps } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>(caseStudies[0].id);

  const selectedCaseStudy = caseStudies.find((cs) => cs.id === activeTab) || caseStudies[0];

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#e2e8f0] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Campaign execution,{" "}
            <span className="text-[#1e3a8a] font-serif italic">
              not just campaign theory.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Real campaign architectures, precision audience structures, and measurable conversion growth across 100+ global brands. Presented in an NDA-friendly format.
          </p>
        </div>

        {/* Global Client Stat Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
              <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                Cross-Border Execution
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-gray-950 mt-1 mb-1">
                100+ Brands
              </div>
              <p className="text-xs text-gray-600">
                Direct client communications and campaign deliveries across North America, Europe, Australia, and Asia.
              </p>
            </div>

            {/* 5-Step Process Ticker */}
            <div className="md:col-span-8 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  The Client Execution Methodology:
                </span>
                <span className="text-[11px] text-gray-500 font-medium">Predictable Delivery</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {clientJourneySteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white border border-[#e2e8f0] shadow-2xs text-center"
                  >
                    <span className="text-[10px] font-mono font-bold text-[#1e3a8a] block">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold text-gray-800 block truncate">
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Case Studies Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {caseStudies.map((cs) => {
            const isActive = cs.id === activeTab;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`relative px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-sm"
                    : "bg-[#f8fafc] text-gray-700 border-[#e2e8f0] hover:bg-gray-100"
                }`}
              >
                <span>{cs.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Case Study Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCaseStudy.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="editorial-card p-6 sm:p-10 rounded-3xl bg-white border border-[#e2e8f0] space-y-8"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                    {selectedCaseStudy.clientType}
                  </span>
                  {selectedCaseStudy.ndaProtected && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                      <Lock className="w-3 h-3 text-gray-400" />
                      <span>Protected Client Data</span>
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-950">
                  {selectedCaseStudy.title}
                </h3>
              </div>

              <div className="text-xs font-semibold text-gray-600 bg-gray-50 px-3.5 py-1.5 rounded-xl border border-gray-200">
                Industry: <span className="text-gray-950 font-bold">{selectedCaseStudy.industry}</span>
              </div>
            </div>

            {/* Strategic Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] space-y-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  01. The Challenge &amp; Objective
                </span>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  {selectedCaseStudy.objective}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] space-y-2">
                <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider block">
                  02. Strategic Blueprint
                </span>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  {selectedCaseStudy.strategy}
                </p>
              </div>
            </div>

            {/* Execution Steps */}
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                03. Hands-on Execution
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCaseStudy.execution.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] flex items-start gap-2.5 text-xs text-gray-700 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Result Card & Tool Badges */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Measured Business Impact</span>
                </div>
                <p className="text-base font-medium text-white/95 leading-snug">
                  {selectedCaseStudy.result}
                </p>
              </div>

              {/* Tools Pill List */}
              <div className="flex flex-wrap items-center gap-2 shrink-0 sm:max-w-xs justify-start sm:justify-end">
                {selectedCaseStudy.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
