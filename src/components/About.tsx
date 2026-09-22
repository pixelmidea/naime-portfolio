import { Check, Sparkles, BookOpen, Presentation, Users, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { personal } = portfolioData;

  const coreStrengths = [
    "Translating complex ad algorithms into structured lessons",
    "Real agency experience managing 100+ international clients",
    "Formal NSDA Level-3 & NIYD institutional qualifications",
    "4+ years of classroom discipline and student mentorship",
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#e7e5e0] bg-[#fcfbf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Teaching Snapshot */}
          <div className="lg:col-span-5 space-y-4">
            <div className="editorial-card p-3 rounded-2xl bg-white shadow-sm">
              <div className="aspect-[4/5] rounded-xl bg-gradient-to-tr from-[#f0ebe1] to-[#e4ded0] border border-[#d8d0bf] p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-gray-700 font-semibold">
                  <span className="px-2.5 py-1 rounded bg-white/90 shadow-xs border border-gray-200">
                    Workshop &amp; Classroom Practice
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">2019 – Present</span>
                </div>

                <div className="my-auto text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-white/80 border border-gray-300 flex items-center justify-center text-[#1e3a8a] shadow-xs">
                    <Presentation className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">In The Classroom</h3>
                    <p className="text-xs text-gray-600 max-w-xs mx-auto">
                      Teaching secondary mathematics taught me how to adapt explanations to varied learning curves.
                    </p>
                  </div>
                </div>

                <div className="bg-white/95 rounded-lg p-3 border border-gray-200 text-xs text-gray-700">
                  <div className="font-semibold text-gray-900">Teaching Methodology:</div>
                  <div className="text-[11px] text-gray-600">Observation → Simplification → Hands-on execution</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e7e5e0] text-xs text-gray-600 flex items-center justify-between">
              <span>Based in Sirajganj, Bangladesh</span>
              <span className="font-bold text-[#1e3a8a]">Open to Onsite &amp; Remote Training</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase">
              Professional Profile
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18]">
              More than a marketer.{" "}
              <span className="text-[#1e3a8a] font-serif italic">
                A practitioner who knows how to teach.
              </span>
            </h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Most digital marketing instructors know theory from tutorials, while most active agency marketers don&apos;t have the time or pedagogical training to teach. My background intentionally connects both worlds.
              </p>

              <p>
                Over the past 4+ years, I have worked inside digital marketing agencies, directly communicated with and managed over <strong>100 international clients</strong>, and planned cross-platform paid advertising and organic growth campaigns. At the same time, I spent over four years teaching mathematics at the school and coaching levels.
              </p>

              <p>
                Teaching analytical mathematics trained me in the art of <strong>conceptual simplification</strong>—breaking complex systems down into clear, structured frameworks that any learner can master. I bring that exact clarity into digital marketing education.
              </p>
            </div>

            {/* Highlighted Quote Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#1e3a8a]/5 border-l-4 border-[#1e3a8a] border-y border-r border-[#1e3a8a]/15 my-6">
              <blockquote className="text-lg sm:text-xl font-serif italic text-gray-900 leading-snug">
                &ldquo;Good marketing gets attention. Good teaching makes knowledge useful.&rdquo;
              </blockquote>
              <p className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider mt-2">
                — Naime • Digital Marketing &amp; Growth Specialist
              </p>
            </div>

            {/* Core Strengths Checklist */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                The Instructor Advantage
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreStrengths.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs font-medium text-gray-800"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
