import { Briefcase, Calendar, MapPin, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#e7e5e0] bg-[#fcfbf9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Professional Experience
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
            A cohesive track record combining active digital agency leadership with over five years of structured academic mathematics teaching.
          </p>
        </div>

        {/* Visual Bridge Annotation Banner */}
        <div className="mb-14 p-4 sm:p-5 rounded-xl bg-white border border-[#e7e5e0] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="font-bold text-gray-900 uppercase tracking-wider">
              The Evolution to Instructor:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 font-semibold text-[#1e3a8a]">
              <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100">Teaching Experience</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
              <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100">Communication</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
              <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100">Simplification</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
              <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100">Mentoring</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
              <span className="px-2 py-0.5 rounded bg-[#1e3a8a] text-white">Digital Marketing Trainer</span>
            </div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gray-300 ml-4 sm:ml-6 space-y-12">
          {experiences.map((item, index) => {
            const isMarketing = item.type === "marketing";

            return (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    isMarketing
                      ? "bg-white border-[#1e3a8a] group-hover:bg-[#1e3a8a]"
                      : "bg-white border-emerald-600 group-hover:bg-emerald-600"
                  }`}
                />

                <div className="editorial-card p-6 sm:p-7 rounded-2xl bg-white space-y-4">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isMarketing
                              ? "bg-blue-50 text-[#1e3a8a] border border-blue-200"
                              : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          }`}
                        >
                          {isMarketing ? "Digital Marketing" : "Mathematics Instruction"}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1e3a8a] transition-colors">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold bg-gray-100 px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-700">
                    <span className="text-gray-950 text-sm">{item.company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Execution Points */}
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    {item.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-gray-100 text-gray-800 border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
