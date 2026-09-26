"use client";

import { useState } from "react";
import {
  Calendar,
  Video,
  Clock,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SparkleParticle from "@/components/SparkleParticle";

export default function CalendlySection() {
  const { booking, personal } = portfolioData;
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Calendly embed URL with clean query parameters matching site theme
  const embedUrl = `${booking.calendlyUrl}?embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=10b981`;

  return (
    <section
      id="book"
      className="relative py-16 sm:py-20 lg:py-24 border-b border-slate-100 bg-slate-50/60 overflow-hidden"
    >
      {/* Ambient background glows and sparkles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10 animate-morph-blob" />
      <div className="absolute bottom-10 -right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <SparkleParticle className="absolute top-12 right-[8%] hidden sm:block" size="lg" color="emerald" delay={0.4} />
      <SparkleParticle className="absolute bottom-16 left-[6%] hidden sm:block" size="md" color="teal" variant="four-point-soft" delay={1.2} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-3 font-mono">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>{booking.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Lock in a Conversation.{" "}
            <span className="text-emerald-500">
              Pick Your Time.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {booking.subtitle}
          </p>

          {/* Quick Benefit Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-semibold shadow-xs">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              Direct 1-on-1 Session
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-semibold shadow-xs">
              <Video className="w-3.5 h-3.5 text-emerald-600" />
              Google Meet Link Auto-Emailed
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-semibold shadow-xs">
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              Adjusts to Your Timezone
            </span>
          </div>
        </div>

        {/* Embedded Calendly Showcase Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                    Live Scheduler
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Meet with {personal.name}
                </h4>
              </div>
            </div>

            {/* Direct Open in Tab CTA Button */}
            <a
              href={booking.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Logistics Note */}
          <div className="px-4 sm:px-6 py-2.5 bg-slate-50 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Video className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Google Meet link will be generated and emailed instantly upon booking.</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
              <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Times shown in your local timezone</span>
            </div>
          </div>

          {/* Calendly Live Iframe Container */}
          <div className="relative w-full min-h-[550px] sm:min-h-[600px] bg-white">
            {/* Loading placeholder skeleton */}
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50/50 z-0">
                <div className="w-10 h-10 rounded-full border-3 border-emerald-200 border-t-emerald-600 animate-spin mb-3" />
                <p className="text-sm font-bold text-slate-800">
                  Loading Calendar...
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-sm text-center">
                  Connecting directly to Calendly booking system.
                </p>
                <a
                  href={booking.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-emerald-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open Directly on Calendly</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Live Responsive Calendly Iframe */}
            <iframe
              src={embedUrl}
              onLoad={() => setIframeLoaded(true)}
              className="relative z-10 w-full min-h-[550px] sm:min-h-[600px] border-0"
              title={`Book a meeting with ${personal.name}`}
            />
          </div>

          {/* Footer Trust Guarantees */}
          <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-100 flex flex-wrap items-center justify-around gap-4 text-xs text-slate-600 text-center">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Free Consultation • No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Instant Google Calendar &amp; Outlook Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>1-Click Reschedule or Cancel Link</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
