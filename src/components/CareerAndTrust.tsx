"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Award,
  ShieldCheck,
  Calendar,
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  GraduationCap,
  ExternalLink,
  UserCheck,
} from "lucide-react";
import { portfolioData, ExperienceItem, CredentialItem, ReferenceItem } from "@/data/portfolio";

export default function CareerAndTrust() {
  const { experiences, credentials, references } = portfolioData;
  const [filterType, setFilterType] = useState<"all" | "marketing" | "teaching">("all");

  const filteredExperiences =
    filterType === "all"
      ? experiences
      : experiences.filter((e) => e.type === filterType);

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#e2e8f0] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Credibility &amp; Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Career Evolution &amp;{" "}
            <span className="text-[#1e3a8a] font-serif italic">
              Verified Credentials.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Institutional certifications, formal teaching discipline, and active agency execution attested by government and industry leaders.
          </p>
        </div>

        {/* 2-Column Split: Career Timeline + Verified Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Left Column: Career Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-950 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#1e3a8a]" />
                <span>Professional Experience</span>
              </h3>

              {/* Timeline Filter */}
              <div className="flex items-center gap-1 bg-[#f8fafc] p-1 rounded-xl border border-gray-200">
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    filterType === "all"
                      ? "bg-white text-gray-950 shadow-2xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType("marketing")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    filterType === "marketing"
                      ? "bg-[#1e3a8a] text-white shadow-2xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Marketing
                </button>
                <button
                  onClick={() => setFilterType("teaching")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    filterType === "teaching"
                      ? "bg-emerald-700 text-white shadow-2xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Teaching
                </button>
              </div>
            </div>

            {/* Timeline Stream */}
            <div className="relative border-l-2 border-gray-200 ml-3 sm:ml-4 space-y-8 pl-5 sm:pl-7">
              {filteredExperiences.map((exp: ExperienceItem, idx: number) => {
                const isMarketing = exp.type === "marketing";
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-[27px] sm:-left-[35px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                        isMarketing
                          ? "bg-white border-[#1e3a8a] group-hover:bg-[#1e3a8a]"
                          : "bg-white border-emerald-600 group-hover:bg-emerald-600"
                      }`}
                    />

                    {/* Role Card */}
                    <div className="editorial-card p-5 rounded-2xl bg-white border border-[#e2e8f0] space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                              isMarketing
                                ? "bg-blue-50 text-[#1e3a8a]"
                                : "bg-emerald-50 text-emerald-800"
                            }`}
                          >
                            {isMarketing ? "Digital Marketing" : "Mathematics Instruction"}
                          </span>
                          <h4 className="text-base font-bold text-gray-950 mt-1">
                            {exp.role}
                          </h4>
                          <p className="text-xs font-semibold text-gray-700">
                            {exp.company} • <span className="font-normal text-gray-500">{exp.location}</span>
                          </p>
                        </div>

                        <span className="text-[11px] font-mono text-gray-500 bg-[#f8fafc] px-2.5 py-1 rounded-lg border border-gray-200">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-gray-100">
                        {exp.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-medium text-gray-600 bg-gray-50 px-2 py-0.5 rounded border border-gray-200"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Institutional Credentials & Degrees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pb-2 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Verified Credentials</span>
              </h3>
            </div>

            <div className="space-y-4">
              {credentials.map((cred: CredentialItem) => (
                <div
                  key={cred.id}
                  className="editorial-card p-5 rounded-2xl bg-white border border-[#e2e8f0] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#1e3a8a] bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {cred.type === "certification" ? "Government Certified" : "Higher Education"}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-gray-950">
                      {cred.title}
                    </h4>
                    <p className="text-xs font-semibold text-gray-800">
                      {cred.issuer}
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {cred.authority}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-2">
                    {cred.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive References & Endorsements */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-[#e2e8f0]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                Direct Verification
              </span>
              <h3 className="text-xl font-bold text-gray-950 mt-0.5">
                Professional References &amp; Endorsements
              </h3>
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Available for background &amp; performance checks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((ref: ReferenceItem, idx: number) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#e2e8f0] space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-sm">
                      {ref.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-950">{ref.name}</h4>
                      <p className="text-xs font-semibold text-[#1e3a8a]">{ref.role}</p>
                    </div>
                  </div>
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                </div>

                <p className="text-xs text-gray-600 flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{ref.organization}</span>
                </p>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3 text-xs">
                  {ref.phone && (
                    <a
                      href={`tel:${ref.phone}`}
                      className="text-gray-700 hover:text-[#1e3a8a] flex items-center gap-1 font-mono font-medium"
                    >
                      <Phone className="w-3 h-3 text-gray-400" />
                      <span>{ref.phone}</span>
                    </a>
                  )}
                  {ref.email && (
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-gray-700 hover:text-[#1e3a8a] flex items-center gap-1 font-mono font-medium"
                    >
                      <Mail className="w-3 h-3 text-gray-400" />
                      <span>{ref.email}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
