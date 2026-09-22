import Image from "next/image";
import { ArrowRight, GraduationCap, CheckCircle2, Award, Users, Briefcase, BookOpen, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal, credibilityMetrics } = portfolioData;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[#e7e5e0]">
      {/* Subtle warm architectural grid background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column: Editorial Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-widest uppercase">
              <span>DIGITAL MARKETING</span>
              <span className="w-1 h-1 rounded-full bg-[#1e3a8a]/40" />
              <span>TRAINING</span>
              <span className="w-1 h-1 rounded-full bg-[#1e3a8a]/40" />
              <span>GROWTH</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-gray-950 leading-[1.12]">
              I turn real-world marketing experience into{" "}
              <span className="text-[#1e3a8a] underline decoration-[#1e3a8a]/20 decoration-4 underline-offset-4 font-serif italic">
                practical learning.
              </span>
            </h1>

            {/* Alternative Supporting Line */}
            <p className="text-lg sm:text-xl font-medium text-gray-800 leading-snug">
              {personal.alternativePositioning} helping businesses grow and helping people understand how digital marketing actually works.
            </p>

            {/* Short Description */}
            <p className="text-base text-gray-600 leading-relaxed max-w-xl">
              {personal.shortBio}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                id="hero-primary-cta"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold text-sm shadow-md shadow-[#1e3a8a]/15 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Hire Me as an Instructor</span>
                <ArrowRight className="w-4 h-4 opacity-80" />
              </a>

              <a
                href="#experience"
                id="hero-secondary-cta"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm border border-[#e7e5e0] shadow-sm transition-all hover:border-gray-400 hover:-translate-y-0.5"
              >
                <span>Explore My Experience</span>
              </a>
            </div>

            {/* Quick credentials badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-gray-600 border-t border-[#e7e5e0]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>NSDA Level-3 Certified</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Users className="w-4 h-4 text-[#1e3a8a]" />
                <span>100+ International Clients</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photo Collage / Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Primary Card */}
              <div className="rounded-2xl bg-white border border-[#e7e5e0] p-4 shadow-lg shadow-gray-200/50 relative overflow-hidden">
                {/* Photo frame displaying authentic professional photograph */}
                <div className="relative aspect-[4/3] sm:aspect-[16/13] rounded-xl bg-gray-100 border border-gray-200 flex flex-col justify-between p-4 overflow-hidden group">
                  <Image
                    src="/images/naime-hero.jpg"
                    alt="Naime - Digital Marketing & Growth Specialist and Instructor"
                    fill
                    priority
                    className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 pointer-events-none" />

                  {/* Top badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                      <Award className="w-3.5 h-3.5 text-blue-300" />
                      Verified Practitioner
                    </span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-medium text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Trainer
                    </span>
                  </div>

                  {/* Bottom credential banner inside portrait */}
                  <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-lg p-3 border border-black/5 shadow-md space-y-1">
                    <p className="text-xs font-bold text-gray-950 flex items-center justify-between">
                      <span>Agency Strategist + Instructor</span>
                      <span className="text-[#1e3a8a] text-[11px] font-mono font-bold">4+ Yrs</span>
                    </p>
                    <p className="text-[11px] text-gray-600 leading-snug">
                      Real-world marketing execution combined with structured classroom pedagogy.
                    </p>
                  </div>
                </div>

                {/* Floating credibility pill */}
                <div className="absolute -bottom-3 -left-3 sm:-left-5 bg-[#0f172a] text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3 border border-gray-700">
                  <div className="p-1.5 rounded-lg bg-[#1e3a8a] text-white">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold leading-tight">100+ Foreign Clients</p>
                    <p className="text-[10px] text-gray-400">Directly Managed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Credibility Strip */}
        <div className="pt-8 border-t border-[#e7e5e0]">
          <div className="text-center sm:text-left mb-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Experience built across marketing, clients, and classrooms:
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {credibilityMetrics.map((item, idx) => (
              <div
                key={idx}
                className="editorial-card p-5 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1 mb-0.5 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-gray-800 mb-1">
                    {item.label}
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed border-t border-gray-100 pt-2 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
