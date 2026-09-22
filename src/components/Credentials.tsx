"use client";

import { useState } from "react";
import { Award, GraduationCap, CheckCircle2, ShieldCheck, Eye, X, ExternalLink } from "lucide-react";
import { portfolioData, CredentialItem } from "@/data/portfolio";

export default function Credentials() {
  const { credentials } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CredentialItem | null>(null);

  return (
    <section id="credentials" className="py-20 md:py-28 border-b border-[#e7e5e0] bg-[#fbfaf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Formal Verification</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Certifications &amp; Education
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Institutional credentials verifying standard competencies under the National Skills Development Authority, national youth institutes, and university academia.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((cred: CredentialItem) => (
            <div
              key={cred.id}
              className="editorial-card p-6 sm:p-7 rounded-2xl bg-white flex flex-col justify-between group hover:border-[#1e3a8a]/40"
            >
              <div>
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
                    {cred.type === "certification" ? "Government Certified" : "Higher Education"}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>

                <h3 className="text-lg font-bold text-gray-950 mb-1.5 group-hover:text-[#1e3a8a] transition-colors">
                  {cred.title}
                </h3>

                <p className="text-xs font-semibold text-gray-800 mb-1">
                  {cred.issuer}
                </p>

                <p className="text-[11px] text-gray-500 mb-4 font-medium">
                  {cred.authority}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              {/* Action: Open Certificate Modal */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cred)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] hover:text-[#1e40af] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Credential Details</span>
                </button>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Inspection Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-200">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded">
                    Verified Competency
                  </span>
                  <span className="text-[11px] text-gray-500 font-mono">
                    ID: {selectedCert.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-950">
                  {selectedCert.title}
                </h3>

                {/* Certificate Frame Preview */}
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-[#fbf8f0] to-[#ece5d4] border-2 border-dashed border-[#c8bfa9] p-6 flex flex-col justify-between text-center relative overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span>Official Certification Document</span>
                    <span>Bangladesh</span>
                  </div>

                  <div className="my-auto space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#1e3a8a]/10 border border-[#1e3a8a]/30 flex items-center justify-center text-[#1e3a8a]">
                      <Award className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-gray-900">
                      {selectedCert.issuer}
                    </p>
                    <p className="text-xs text-gray-600 max-w-xs mx-auto">
                      Awarded to Naime upon successful evaluation of national digital competencies.
                    </p>
                  </div>

                  <div className="text-[10px] text-gray-500 font-semibold">
                    Document Image Ready for Upload
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500">
                    Authority: {selectedCert.authority}
                  </span>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
