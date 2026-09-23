"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Layers,
  ScreenShare,
  Users2,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Calculator,
  Target,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function DualEdgeBento() {
  const { teachingPillars, curriculumTopics, classroomToCampaign, credibilityMetrics } = portfolioData;
  const [selectedPillar, setSelectedPillar] = useState(0);
  const [activeCurriculumCategory, setActiveCurriculumCategory] = useState("All");

  const categories = ["All", "Paid Media", "Growth", "Search", "Retention", "Client Ops"];

  const filteredTopics =
    activeCurriculumCategory === "All"
      ? curriculumTopics
      : curriculumTopics.filter((t) => t.category === activeCurriculumCategory);

  const pillarIcons = [Lightbulb, Layers, ScreenShare, Users2];

  return (
    <section id="bento" className="py-20 md:py-28 border-b border-[#e2e8f0] bg-[#fbfaf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>The Practitioner-Instructor Edge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Mathematics Logic meets{" "}
            <span className="text-[#1e3a8a] font-serif italic">
              Live Agency Marketing.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Most digital marketing instructors only know theory from tutorials, while most active marketers lack pedagogical training. Here is why bridging both worlds makes training stick.
          </p>
        </div>

        {/* Credibility & Proof Bar - Moved from Hero for Dedicated Focus */}
        <div className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {credibilityMetrics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="editorial-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between hover:border-[#1e3a8a]/40 bg-white shadow-xs"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1 mb-0.5 tracking-tight">
                    <AnimatedCounter value={item.value} />
                  </div>
                  <div className="text-xs font-bold text-gray-800 mb-1">
                    {item.label}
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 leading-normal border-t border-gray-100 pt-2 mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tile 1 (8 cols): The Math Pedagogy Translation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 editorial-card p-6 sm:p-8 rounded-3xl bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold">
                  <Calculator className="w-4 h-4 text-emerald-600" />
                  <span>The Classroom Origin</span>
                </div>
                <span className="text-xs font-mono text-gray-500 font-medium">4+ Years Teaching</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-950 mb-3">
                How Secondary Mathematics Shaped My Teaching Methodology
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                Teaching competitive mathematics to senior students taught me the fundamental art of <strong>conceptual simplification</strong>. Whether explaining complex algebraic systems or dissecting Meta ad auction bidding algorithms, the core challenge is identical: removing intimidation and giving learners a predictable mental model.
              </p>

              {/* 3 Translation Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80">
                  <span className="text-xs font-bold text-[#1e3a8a] block mb-1">Step-by-Step Logic</span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Replacing arbitrary guesswork with structured checklists, formulas, and repeatable processes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80">
                  <span className="text-xs font-bold text-emerald-800 block mb-1">Diagnosing Bottlenecks</span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Spotting why a learner is stuck on pixel tracking or CAC calculations with genuine patience.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80">
                  <span className="text-xs font-bold text-indigo-900 block mb-1">Market Readiness</span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Training students not just to pass exams, but to manage real budgets and communicate with clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
              <span className="italic">&ldquo;Good marketing gets attention. Good teaching makes knowledge useful.&rdquo;</span>
              <span className="font-semibold text-gray-900">— Naime</span>
            </div>
          </motion.div>

          {/* Tile 2 (4 cols): The Real-World Agency Battlefield */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 rounded-3xl bg-[#0f172a] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl border border-gray-800"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>Agency Reality</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                100+ International Client Campaigns
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed mb-6">
                Courses are built on actual battle-tested accounts—handling foreign client briefs, shifting platform algorithms, and hard ROAS accountability.
              </p>

              <div className="space-y-3">
                {classroomToCampaign.realWorld.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-gray-400">Agency: Next Clicker &amp; Social Tamai</span>
              <span className="text-blue-400 font-bold">100% Live Practice</span>
            </div>
          </motion.div>

          {/* Tile 3 (4 cols): The 4-Pillar Pedagogical Framework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 editorial-card p-6 sm:p-7 rounded-3xl bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                  Instructional Framework
                </span>
                <span className="text-[11px] font-mono text-gray-400">4 Pillars</span>
              </div>

              <h3 className="text-xl font-bold text-gray-950 mb-4">
                How I Structure Every Lesson
              </h3>

              {/* Pillar Selector Pills */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {teachingPillars.map((pillar, idx) => {
                  const Icon = pillarIcons[idx] || Lightbulb;
                  const isSelected = selectedPillar === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedPillar(idx)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                        isSelected
                          ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-sm"
                          : "bg-[#f8fafc] text-gray-700 border-slate-200/80 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? "text-blue-200" : "text-[#1e3a8a]"}`} />
                      <div className="overflow-hidden">
                        <span className="text-xs font-bold block truncate">{pillar.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Detail Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPillar}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs space-y-1.5"
                >
                  <div className="font-bold text-[#1e3a8a] text-xs uppercase tracking-wide">
                    {teachingPillars[selectedPillar].tagline}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {teachingPillars[selectedPillar].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-500 font-medium">
              Zero slide reading • 100% interactive execution
            </div>
          </motion.div>

          {/* Tile 4 (7 cols): What I Can Teach (Interactive Curriculum) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7 editorial-card p-6 sm:p-7 rounded-3xl bg-white flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                    Syllabus Capabilities
                  </span>
                  <h3 className="text-xl font-bold text-gray-950 mt-0.5">
                    Curriculum &amp; Training Modules
                  </h3>
                </div>

                {/* Filter tags */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCurriculumCategory(cat)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                        activeCurriculumCategory === cat
                          ? "bg-[#1e3a8a] text-white shadow-xs"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Module Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[260px] overflow-y-auto pr-1">
                {filteredTopics.map((topic, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-xl bg-[#f8fafc] border border-slate-200/80 hover:border-[#1e3a8a]/40 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0" />
                      <span className="text-xs font-semibold text-gray-800 leading-tight">
                        {topic.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-200 shrink-0 ml-2">
                      {topic.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">
                Customizable for masterclasses, vocational institutes, or corporate teams.
              </span>
              <a
                href="#contact"
                className="text-xs font-bold text-[#1e3a8a] hover:underline flex items-center gap-1"
              >
                <span>Request Custom Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
