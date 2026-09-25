"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Award,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
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
    <section id="experience" className="py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Credibility &amp; Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Career Evolution &amp;{" "}
            <span className="text-emerald-500">
              Verified Credentials.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Institutional certifications, formal teaching discipline, and active agency execution attested by government and industry leaders.
          </p>
        </div>

        {/* 2-Column Split: Career Timeline + Verified Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">
          {/* Left Column: Career Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                <span>Professional Experience</span>
              </h3>

              {/* Timeline Filter */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full border border-slate-200">
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    filterType === "all"
                      ? "bg-white text-slate-900 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType("marketing")}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    filterType === "marketing"
                      ? "bg-emerald-500 text-white shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Marketing
                </button>
                <button
                  onClick={() => setFilterType("teaching")}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    filterType === "teaching"
                      ? "bg-teal-600 text-white shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Teaching
                </button>
              </div>
            </div>

            {/* Timeline Stream */}
            <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-4 space-y-6 pl-5 sm:pl-7">
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
                          ? "bg-white border-emerald-500 group-hover:bg-emerald-500"
                          : "bg-white border-teal-500 group-hover:bg-teal-500"
                      }`}
                    />

                    {/* Role Card */}
                    <div className="editorial-card p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5 transition-all space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              isMarketing
                                ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                                : "bg-teal-50 text-teal-800 border border-teal-200/80"
                            }`}
                          >
                            {isMarketing ? "Digital Marketing" : "Mathematics Instruction"}
                          </span>
                          <h4 className="text-base font-bold text-slate-900 mt-1">
                            {exp.role}
                          </h4>
                          <p className="text-xs font-semibold text-slate-700">
                            {exp.company} • <span className="font-normal text-slate-500">{exp.location}</span>
                          </p>
                        </div>

                        <span className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                        {exp.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200"
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
            <div className="pb-3 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Verified Credentials</span>
              </h3>
            </div>

            <div className="space-y-4">
              {credentials.map((cred: CredentialItem) => (
                <div
                  key={cred.id}
                  className="editorial-card p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/5 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-200/80">
                      {cred.type === "certification" ? "Government Certified" : "Higher Education"}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {cred.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-800">
                      {cred.issuer}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {cred.authority}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                    {cred.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive References & Endorsements */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-100 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider font-mono">
                Direct Verification
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Professional References &amp; Endorsements
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Available for background &amp; performance checks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((ref: ReferenceItem, idx: number) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-100 space-y-3 shadow-2xs hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      {ref.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{ref.name}</h4>
                      <p className="text-xs font-semibold text-emerald-600">{ref.role}</p>
                    </div>
                  </div>
                  <UserCheck className="w-4 h-4 text-emerald-500" />
                </div>

                <p className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{ref.organization}</span>
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs">
                  {ref.phone && (
                    <a
                      href={`tel:${ref.phone}`}
                      className="text-slate-700 hover:text-emerald-600 flex items-center gap-1 font-mono font-medium"
                    >
                      <Phone className="w-3 h-3 text-slate-400" />
                      <span>{ref.phone}</span>
                    </a>
                  )}
                  {ref.email && (
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-slate-700 hover:text-emerald-600 flex items-center gap-1 font-mono font-medium"
                    >
                      <Mail className="w-3 h-3 text-slate-400" />
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
