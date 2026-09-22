import { GraduationCap, Lightbulb, Layers, ScreenShare, Users2, CheckCircle, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function TeachingTraining() {
  const { teachingPillars, curriculumTopics } = portfolioData;

  const iconMap: Record<string, React.ElementType> = {
    Lightbulb,
    Layers,
    ScreenShare,
    Users2,
  };

  return (
    <section id="teaching" className="py-20 md:py-28 border-b border-[#e7e5e0] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Instructor &amp; Training Pedagogy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            I don&apos;t just know digital marketing.{" "}
            <span className="text-[#1e3a8a] font-serif italic">
              I know how to explain it.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Having taught analytical secondary mathematics, I have spent years training students to grasp difficult concepts. I bring that exact structure, patience, and curriculum clarity to digital marketing cohorts, corporate teams, and aspiring freelancers.
          </p>
        </div>

        {/* Four Core Pedagogical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {teachingPillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || Lightbulb;
            return (
              <div
                key={idx}
                className="editorial-card p-6 rounded-2xl flex flex-col justify-between group hover:border-[#1e3a8a]/40"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 flex items-center justify-center text-[#1e3a8a] mb-5 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-wider mb-1">
                    {pillar.tagline}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1 text-[11px] font-semibold text-gray-500 group-hover:text-[#1e3a8a] transition-colors">
                  <span>Methodology Pillar {idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* What I Can Teach (Curriculum Grid) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#fbfaf7] border border-[#e7e5e0]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                Comprehensive Syllabus Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-950 mt-1">
                What I Can Teach
              </h3>
            </div>
            <p className="text-xs text-gray-600 max-w-sm sm:text-right">
              Modules customizable for beginner masterclasses, advanced corporate training, or vocational certification programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {curriculumTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-[#e7e5e0] hover:border-[#1e3a8a]/30 transition-all flex items-start gap-2.5 shadow-2xs"
              >
                <CheckCircle className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 leading-snug">
                    {topic.title}
                  </h4>
                  <span className="text-[10px] text-gray-500 font-medium">
                    {topic.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Training invitation callout */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs font-medium text-gray-700">
              Need a bespoke training syllabus for your institution, university, or corporate team?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] hover:text-[#1e40af] hover:underline"
            >
              <span>Request Curriculum Outline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
