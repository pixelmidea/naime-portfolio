import { Globe2, ArrowRight, MessageSquare, BarChart3, Calendar, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ClientWork() {
  const { clientJourneySteps } = portfolioData;

  const visualAssetCards = [
    {
      title: "Remote Client Video Sprints",
      description: "Direct weekly review calls with business owners across North America, Europe & Australia.",
      tag: "Client Communication",
      icon: MessageSquare,
    },
    {
      title: "Live Campaign Dashboards",
      description: "Meta Ads Manager & Google Ads account architecture, tracking conversions and ROAS.",
      tag: "Execution & Monitoring",
      icon: BarChart3,
    },
    {
      title: "Content Calendars & Editorial",
      description: "Organized multi-week social media content calendars aligning creative assets with brand objectives.",
      tag: "Strategy & Workflow",
      icon: Calendar,
    },
    {
      title: "Performance Reports & Audits",
      description: "Executive summaries translating raw platform analytics into actionable business next steps.",
      tag: "Accountability",
      icon: Layers,
    },
  ];

  return (
    <section id="client-work" className="py-20 md:py-28 border-b border-[#e7e5e0] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global Client Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            100+ international clients.{" "}
            <span className="text-[#1e3a8a] font-serif italic">
              One consistent focus: delivering results.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Directly communicating with foreign business leaders requires far more than generic marketing slogans. It demands clear expectation setting, cultural fluency, strict deadline management, and demonstrable commercial accountability.
          </p>
        </div>

        {/* Large Stat Banner & Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 p-8 rounded-2xl bg-[#fbfaf7] border border-[#e7e5e0]">
          {/* Big number */}
          <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
            <div className="text-6xl sm:text-7xl font-extrabold text-[#1e3a8a] tracking-tight leading-none mb-2">
              100+
            </div>
            <div className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
              International Clients Managed
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Cross-platform campaigns delivered across North America, Europe, Australia, and Asia.
            </p>
          </div>

          {/* Key Learning Quote */}
          <div className="lg:col-span-8 space-y-3 lg:pl-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
              What international client service taught me:
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              &ldquo;Working with international clients taught me more than marketing tactics. It taught me communication, expectations, problem-solving, deadlines, service delivery, and how to turn business goals into practical marketing actions.&rdquo;
            </p>
            <p className="text-xs font-semibold text-[#1e3a8a]">
              This commercial experience forms the bedrock of every course and workshop I deliver.
            </p>
          </div>
        </div>

        {/* Client Journey / Workflow Timeline: Understand → Plan → Execute → Measure → Improve */}
        <div className="mb-16">
          <div className="text-center sm:text-left mb-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              The Client Execution Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {clientJourneySteps.map((step, idx) => (
              <div
                key={idx}
                className="editorial-card p-4 rounded-xl flex flex-col justify-between relative group hover:border-[#1e3a8a]/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-[#1e3a8a] bg-blue-50 px-2 py-0.5 rounded">
                    {step.step}
                  </span>
                  {idx < clientJourneySteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-gray-300 group-hover:text-[#1e3a8a] transition-colors" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{step.name}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Client Work Photography / Visual Artifact Areas */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Real Client Work Visual Areas
              </h3>
              <p className="text-sm font-semibold text-gray-900 mt-1">
                Visual artifacts and campaign assets demonstrating real project operations
              </p>
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Ready for client screenshots &amp; meeting photos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visualAssetCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="editorial-card p-4 rounded-xl flex flex-col justify-between group"
                >
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-[#f3f0e8] to-[#e7e1d2] border border-[#d9d2c2] p-4 flex flex-col justify-between relative overflow-hidden mb-4">
                    <span className="self-start text-[10px] font-bold text-gray-700 bg-white/90 px-2 py-0.5 rounded shadow-2xs border border-gray-200">
                      {card.tag}
                    </span>
                    <div className="my-auto text-center">
                      <div className="w-10 h-10 mx-auto rounded-lg bg-white/80 border border-gray-300 flex items-center justify-center text-[#1e3a8a] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono text-center">
                      Photo / Screen Asset Frame
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#1e3a8a] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
