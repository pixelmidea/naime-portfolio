"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SparkleParticle from "@/components/SparkleParticle";

/* ─────────────────────────────────────────────────────────────
   Animated Donut Chart — clean, minimal SVG
───────────────────────────────────────────────────────────── */
interface DonutChartProps {
  percentage: number;
  label: string;
  color: string;
  size?: number;
}

function DonutChart({
  percentage,
  label,
  color,
  size = 96,
}: DonutChartProps) {
  const R = 36;
  const C = 2 * Math.PI * R;
  const clamped = Math.min(100, Math.max(0, Math.abs(percentage)));
  const offset = C - (clamped / 100) * C;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background track */}
          <circle
            cx="50"
            cy="50"
            r={R}
            stroke="#f1f5f9"
            strokeWidth="8"
            fill="none"
          />
          {/* Animated fill circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={R}
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.span
            className="text-base sm:text-lg font-extrabold font-mono tracking-tight"
            style={{ color }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.35, ease: "easeOut" }}
          >
            {label}
          </motion.span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Animated Horizontal Bar
───────────────────────────────────────────────────────────── */
interface AnimatedBarProps {
  label: string;
  value: number;
  max?: number;
  color: string;
  delay?: number;
}

function AnimatedBar({
  label,
  value,
  max = 100,
  color,
  delay = 0,
}: AnimatedBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-gray-700">{label}</span>
        <span className="font-bold font-mono" style={{ color }}>
          {value}%
        </span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: "0%" }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Animated Area Sparkline (mini trend chart)
───────────────────────────────────────────────────────────── */
interface SparklineProps {
  points: number[];
  color: string;
  id: string;
}

function Sparkline({ points, color, id }: SparklineProps) {
  const W = 220;
  const H = 64;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;

  const coords = points.map((p, i) => ({
    x: Number(((i / (points.length - 1)) * W).toFixed(1)),
    y: Number((H - ((p - min) / range) * (H - 14) - 7).toFixed(1)),
  }));

  const lineD = coords
    .map((c, i) => `${i === 0 ? "M" : "L"} ${c.x} ${c.y}`)
    .join(" ");

  const lastCoord = coords[coords.length - 1] || { x: W, y: H / 2 };
  const firstCoord = coords[0] || { x: 0, y: H / 2 };
  const areaD = `${lineD} L ${lastCoord.x} ${H} L ${firstCoord.x} ${H} Z`;

  return (
    <div className="w-full" style={{ height: H }}>
      <svg
        className="w-full h-full overflow-visible"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`spark-grad-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.22" />
            <stop offset="100%" stopColor={color} stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* Gradient fill */}
        <motion.path
          d={areaD}
          fill={`url(#spark-grad-${id})`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Line stroke */}
        <motion.path
          d={lineD}
          fill="none"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />

        {/* Ending point pulse */}
        <motion.circle
          cx={lastCoord.x}
          cy={lastCoord.y}
          r={4}
          fill="white"
          stroke={color}
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.95, duration: 0.3 }}
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Case Visual Data (Clean, high-impact numbers)
───────────────────────────────────────────────────────────── */
interface CaseVisualConfig {
  color: string;
  donut: { pct: number; label: string };
  sparkData: number[];
  sparkLabel: string;
  bars: { label: string; value: number }[];
}

const caseVisuals: Record<string, CaseVisualConfig> = {
  "cs-1": {
    color: "#059669", // Emerald
    donut: { pct: 42, label: "-42%" },
    sparkData: [58, 52, 48, 44, 40, 36, 34],
    sparkLabel: "CPL Trend (6 Months)",
    bars: [
      { label: "Lead Quality Index", value: 92 },
      { label: "Targeting Accuracy", value: 88 },
      { label: "Funnel Conversion Rate", value: 76 },
    ],
  },
  "cs-2": {
    color: "#1e3a8a", // Deep Blue
    donut: { pct: 100, label: "3.2x" },
    sparkData: [1.2, 1.5, 1.9, 2.3, 2.7, 3.0, 3.2],
    sparkLabel: "ROAS Growth Curve",
    bars: [
      { label: "Catalog Retargeting", value: 94 },
      { label: "Organic Engagement", value: 82 },
      { label: "Checkout Recovery", value: 71 },
    ],
  },
  "cs-3": {
    color: "#7c3aed", // Royal Purple
    donut: { pct: 100, label: "100%" },
    sparkData: [22, 38, 52, 68, 80, 92, 100],
    sparkLabel: "Cohort Capacity Fill",
    bars: [
      { label: "Consultation Bookings", value: 100 },
      { label: "Search Ad Quality Score", value: 95 },
      { label: "WhatsApp Onboarding", value: 89 },
    ],
  },
};

/* ─────────────────────────────────────────────────────────────
   Main Component: ImpactCaseStudies
───────────────────────────────────────────────────────────── */
export default function ImpactCaseStudies() {
  const { caseStudies } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>(
    caseStudies[0]?.id || "cs-1"
  );

  const selectedCS =
    caseStudies.find((cs) => cs.id === activeTab) || caseStudies[0];
  const vis = caseVisuals[activeTab] || caseVisuals["cs-1"];

  return (
    <section
      id="work"
      className="relative py-20 md:py-28 border-b border-[#e7e5e0] bg-[#fcfbf9] overflow-hidden"
    >
      {/* Ambient background glows matching site design */}
      <div className="absolute top-20 left-[5%] w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-morph-blob" />
      <div className="absolute bottom-10 right-[5%] w-72 h-72 bg-teal-100/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      {/* Subtle sparkle accents */}
      <SparkleParticle
        className="absolute top-16 left-[6%] hidden sm:block"
        size="lg"
        color="emerald"
        delay={0.3}
      />
      <SparkleParticle
        className="absolute top-36 right-[5%] hidden sm:block"
        size="md"
        color="teal"
        variant="four-point-soft"
        delay={1.2}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Campaign Results</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Real campaigns,{" "}
            <span className="text-[#1e3a8a] font-serif italic">
              measurable impact.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Transparent case studies from real international client campaigns,
            featuring verified metrics and measurable return on investment.
          </p>
        </motion.div>

        {/* ── 3 High-Level Proof Metrics ── */}
        <motion.div
          className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {[
            { value: "100+", label: "Clients Served", color: "#059669" },
            { value: "3.2x", label: "Peak ROAS", color: "#1e3a8a" },
            { value: "-42%", label: "CPL Reduction", color: "#7c3aed" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="text-center p-3.5 sm:p-5 rounded-2xl bg-white border border-[#e7e5e0] shadow-xs"
              whileHover={{
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.06)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight"
                style={{ color: item.color }}
              >
                {item.value}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium mt-1">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Interactive Case Study Switcher Tabs ── */}
        <div className="flex flex-wrap gap-2.5 mb-8 justify-center">
          {caseStudies.map((cs) => {
            const isActive = cs.id === activeTab;
            const tabColor = caseVisuals[cs.id]?.color || "#059669";
            return (
              <button
                key={cs.id}
                type="button"
                onClick={() => setActiveTab(cs.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-white text-gray-900 shadow-sm"
                    : "bg-white/60 text-gray-500 hover:text-gray-800 hover:bg-white/90 border-[#e7e5e0]"
                }`}
                style={
                  isActive
                    ? {
                        borderColor: tabColor,
                        boxShadow: `0 2px 10px ${tabColor}1a`,
                      }
                    : undefined
                }
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab-outline"
                    className="absolute inset-0 rounded-xl border-2 pointer-events-none"
                    style={{ borderColor: tabColor }}
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0 transition-colors duration-200"
                    style={{
                      background: isActive ? tabColor : "#cbd5e1",
                    }}
                  />
                  <span className="truncate max-w-[200px] sm:max-w-none">
                    {cs.title}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Active Case Study Display Card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCS.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden bg-white border border-[#e7e5e0] shadow-sm"
          >
            {/* Top accent color bar */}
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, ${vis.color}25, ${vis.color}, ${vis.color}25)`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#e7e5e0]">
              {/* ─── Left Visual Analytics (5 cols on lg) ─── */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-[#faf9f6]/40 flex flex-col justify-between space-y-6">
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                      style={{
                        color: vis.color,
                        background: `${vis.color}10`,
                        borderColor: `${vis.color}30`,
                      }}
                    >
                      {selectedCS.clientType}
                    </span>
                    {selectedCS.region && (
                      <span className="text-[11px] font-medium text-gray-500 bg-white px-2.5 py-0.5 rounded-full border border-gray-200">
                        📍 {selectedCS.region}
                      </span>
                    )}
                    {selectedCS.ndaProtected && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-400 bg-white px-2 py-0.5 rounded-full border border-gray-200">
                        <Lock className="w-2.5 h-2.5" />
                        NDA
                      </span>
                    )}
                  </div>

                  {/* Primary Highlight Metric with Donut */}
                  <div className="flex items-center gap-5 p-4 rounded-xl bg-white border border-[#e7e5e0] shadow-xs mb-5">
                    <DonutChart
                      percentage={vis.donut.pct}
                      label={vis.donut.label}
                      color={vis.color}
                      size={88}
                    />
                    <div>
                      <div
                        className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight"
                        style={{ color: vis.color }}
                      >
                        {selectedCS.metricHighlight}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-semibold mt-0.5">
                        {selectedCS.metricLabel || "Primary Outcome"}
                      </div>
                    </div>
                  </div>

                  {/* Trend Sparkline */}
                  <div className="p-4 rounded-xl bg-white border border-[#e7e5e0] shadow-xs mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                        {vis.sparkLabel}
                      </span>
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                        style={{
                          color: vis.color,
                          background: `${vis.color}15`,
                        }}
                      >
                        ↑ Verified Growth
                      </span>
                    </div>
                    <Sparkline
                      points={vis.sparkData}
                      color={vis.color}
                      id={selectedCS.id}
                    />
                  </div>

                  {/* Metric Progress Bars */}
                  <div className="p-4 rounded-xl bg-white border border-[#e7e5e0] shadow-xs space-y-3">
                    <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Execution Benchmarks
                    </div>
                    {vis.bars.map((bar, i) => (
                      <AnimatedBar
                        key={bar.label}
                        label={bar.label}
                        value={bar.value}
                        max={100}
                        color={vis.color}
                        delay={0.12 * i}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* ─── Right Narrative & Execution (7 cols on lg) ─── */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  {/* Campaign Title */}
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {selectedCS.industry}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug mb-4">
                    {selectedCS.title}
                  </h3>

                  {/* Strategic Approach Highlight Box */}
                  <div
                    className="rounded-xl p-4 border-l-[3.5px] mb-5"
                    style={{
                      background: `${vis.color}0a`,
                      borderLeftColor: vis.color,
                    }}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: vis.color }}>
                      Strategic Approach
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {selectedCS.strategy}
                    </p>
                  </div>

                  {/* Execution Highlights (Top 3 steps) */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                      Campaign Execution
                    </div>
                    <div className="space-y-2.5">
                      {selectedCS.execution.slice(0, 3).map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold shrink-0 mt-0.5"
                            style={{
                              background: `${vis.color}15`,
                              color: vis.color,
                              border: `1.5px solid ${vis.color}35`,
                            }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Tech Used */}
                  <div>
                    <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Platforms & Measurement Tools
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCS.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-[11px] font-medium text-gray-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <motion.a
                    href="#contact"
                    className="relative inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-sm font-bold text-white overflow-hidden group cursor-pointer"
                    style={{
                      background: vis.color,
                      boxShadow: `0 4px 16px ${vis.color}25`,
                    }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2.5,
                      }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Discuss Similar Growth Architecture
                    </span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom Pagination Indicators ── */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {caseStudies.map((cs) => {
            const dotColor = caseVisuals[cs.id]?.color || "#059669";
            const isActive = activeTab === cs.id;
            return (
              <button
                key={cs.id}
                type="button"
                aria-label={`Switch to ${cs.title}`}
                onClick={() => setActiveTab(cs.id)}
                className="transition-all duration-300 rounded-full cursor-pointer p-1"
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "28px" : "8px",
                    height: "8px",
                    background: isActive ? dotColor : "#d1d5db",
                    boxShadow: isActive ? `0 0 8px ${dotColor}40` : "none",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
