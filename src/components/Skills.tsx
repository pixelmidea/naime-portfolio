import { Target } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skillsByCategory } = portfolioData;

  return (
    <section id="expertise" className="py-20 md:py-28 border-b border-[#e7e5e0] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Operational Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Digital Marketing Expertise
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Hands-on technical and strategic proficiencies grouped by discipline. Evaluated by practical campaign execution, not arbitrary percentage bars.
          </p>
        </div>

        {/* 6 Category Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsByCategory.map((group, idx) => (
            <div
              key={idx}
              className="editorial-card p-6 rounded-2xl flex flex-col justify-between group hover:border-[#1e3a8a]/40"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1e3a8a] transition-colors">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Sub-skills capability cards */}
                <div className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-[#fbfaf7] border border-[#e7e5e0] group-hover:border-gray-300 transition-all flex flex-col justify-center"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-medium text-[#1e3a8a] bg-blue-50 px-2 py-0.5 rounded border border-blue-100/60">
                          Active Practice
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-500 mt-0.5">
                        {skill.focus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span>{group.skills.length} core proficiencies</span>
                <span className="text-[#1e3a8a] font-semibold">Taught &amp; Executed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
