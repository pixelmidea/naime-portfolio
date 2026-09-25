import { UserCheck, Phone, Mail, Building2 } from "lucide-react";
import { portfolioData, ReferenceItem } from "@/data/portfolio";

export default function References() {
  const { references } = portfolioData;

  return (
    <section className="py-20 md:py-28 border-b border-[#e7e5e0] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Professional Endorsement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            Professional References
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Institutional directors and agency leaders who can attest directly to my execution capability, teaching integrity, and professional character.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {references.map((ref: ReferenceItem, idx: number) => (
            <div
              key={idx}
              className="editorial-card p-6 sm:p-8 rounded-2xl bg-[#fbfaf7] border border-[#e7e5e0] flex flex-col justify-between space-y-6 hover:border-[#1e3a8a]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 flex items-center justify-center text-[#1e3a8a] font-bold text-sm">
                    {ref.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-gray-200">
                    Official Reference
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-950 mb-1">
                  {ref.name}
                </h3>

                <p className="text-xs font-bold text-[#1e3a8a]">
                  {ref.role}
                </p>

                <p className="text-xs text-gray-600 mt-1 flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{ref.organization}</span>
                </p>
              </div>

              {/* Direct Verification Channels */}
              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs">
                {ref.phone && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0" />
                    <span className="font-mono">{ref.phone}</span>
                  </div>
                )}
                {ref.email && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-3.5 h-3.5 text-[#1e3a8a] shrink-0" />
                    <a
                      href={`mailto:${ref.email}`}
                      className="hover:text-[#1e3a8a] hover:underline break-all"
                    >
                      {ref.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
