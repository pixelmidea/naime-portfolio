import { Briefcase, Lock, CheckCircle2, ArrowUpRight } from "lucide-react";
import { portfolioData, CaseStudy } from "@/data/portfolio";

export default function Projects() {
  const { caseStudies } = portfolioData;

  return (
    <section id="work" className="py-20 md:py-28 border-b border-[#e7e5e0] bg-[#fcfbf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Selected Client Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Marketing work,{" "}
            <span className="text-[#1e3a8a] font-serif italic">
              not just marketing theory.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Real campaign blueprints, audience structuring, and conversion execution. Presented in an NDA-friendly format protecting proprietary client data while demonstrating clear methodologies.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((cs: CaseStudy) => (
            <div
              key={cs.id}
              className="editorial-card p-6 sm:p-8 rounded-2xl bg-white space-y-6 hover:border-[#1e3a8a]/30"
            >
              {/* Header meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                      {cs.clientType}
                    </span>
                    {cs.ndaProtected && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                        <Lock className="w-3 h-3" />
                        <span>NDA Protected Details</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-950">
                    {cs.title}
                  </h3>
                </div>

                <div className="text-xs text-gray-500 font-semibold bg-[#fbfaf7] px-3 py-1.5 rounded-md border border-gray-200">
                  Industry: <span className="text-gray-900">{cs.industry}</span>
                </div>
              </div>

              {/* Objective & Strategy Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-[#fbfaf7] border border-[#e7e5e0] space-y-1.5">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    01. Strategic Objective
                  </span>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                    {cs.objective}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fbfaf7] border border-[#e7e5e0] space-y-1.5">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    02. Strategy &amp; Funnel
                  </span>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                    {cs.strategy}
                  </p>
                </div>
              </div>

              {/* Execution Details */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                  03. Hands-On Campaign Execution
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cs.execution.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2 text-xs text-gray-700 bg-white p-2.5 rounded-lg border border-gray-100"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Result Banner */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider">
                    04. Verified Campaign Outcome
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-relaxed">
                    {cs.result}
                  </p>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-semibold text-gray-500 mr-1">Tools Deployed:</span>
                  {cs.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 text-gray-800 border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-bold text-[#1e3a8a] hover:underline"
                >
                  <span>Discuss Similar Strategy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
