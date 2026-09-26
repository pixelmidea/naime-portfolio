import { BookOpen, TrendingUp, Check, ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ClassroomToCampaign() {
  const { classroomToCampaign } = portfolioData;

  return (
    <section className="py-20 md:py-28 border-b border-[#e7e5e0] bg-[#fbfaf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual-Competency Synthesis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            From Classroom to Campaign
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Why the fusion of classroom mathematics instruction and live digital marketing execution produces an instructor of uncommon effectiveness.
          </p>
        </div>

        {/* 3-Column Comparative Layout: Classroom -> THE INSTRUCTOR -> Real World */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: The Classroom */}
          <div className="md:col-span-4 editorial-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border-t-4 border-t-emerald-600">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">
                  Pedagogical Mastery
                </span>
                <BookOpen className="w-5 h-5 text-emerald-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Classroom
              </h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                5+ years teaching secondary school and coaching mathematics, mastering how minds learn.
              </p>

              <ul className="space-y-3">
                {classroomToCampaign.classroom.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-semibold text-emerald-800">
              Foundation: Empathy, structure &amp; communication
            </div>
          </div>

          {/* Center Column: The Instructor (Convergence) */}
          <div className="md:col-span-4 bg-[#0f172a] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden border border-gray-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1e3a8a]/20 blur-2xl rounded-full pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3a8a] text-white text-[11px] font-bold tracking-wider uppercase mb-5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>The Synthesis</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                The Digital Marketing Instructor
              </h3>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 leading-relaxed mb-6 space-y-2">
                <p className="font-semibold text-white">
                  &ldquo;{classroomToCampaign.theInstructor}&rdquo;
                </p>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>No boring PowerPoint regurgitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Real campaign post-mortems and live demos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Prepares students for client market realities</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Book a Training Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: The Real World */}
          <div className="md:col-span-4 editorial-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border-t-4 border-t-[#1e3a8a]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
                  Commercial Execution
                </span>
                <TrendingUp className="w-5 h-5 text-[#1e3a8a]" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Real World
              </h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                4+ years active agency work managing foreign clients, ad spends, and business outcomes.
              </p>

              <ul className="space-y-3">
                {classroomToCampaign.realWorld.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <div className="w-4 h-4 rounded-full bg-blue-100 text-[#1e3a8a] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] font-semibold text-[#1e3a8a]">
              Foundation: Commercial accountability &amp; real campaigns
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
