"use client";

import { useState } from "react";
import Image from "next/image";
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
      className="relative py-12 sm:py-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden"
    >
      {/* Ambient background glows and sparkles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-morph-blob" />
      <div className="absolute bottom-10 -right-10 w-80 h-80 bg-teal-100/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <SparkleParticle className="absolute top-10 right-[10%] hidden sm:block" size="md" color="emerald" delay={0.4} />
      <SparkleParticle className="absolute bottom-12 left-[8%] hidden sm:block" size="sm" color="teal" variant="four-point-soft" delay={1.2} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-9">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-bold tracking-wider uppercase mb-2.5 font-mono">
            <Calendar className="w-3 h-3 text-emerald-600" />
            <span>{booking.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-2.5">
            Lock in a Conversation.{" "}
            <span className="text-emerald-500">
              Pick Your Time.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {booking.subtitle}
          </p>

          {/* Quick Benefit Tags */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[11px] font-medium shadow-2xs">
              <Clock className="w-3 h-3 text-emerald-600" />
              Direct 1-on-1
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[11px] font-medium shadow-2xs">
              <Video className="w-3 h-3 text-emerald-600" />
              Google Meet Auto-Invite
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[11px] font-medium shadow-2xs">
              <Globe className="w-3 h-3 text-emerald-600" />
              Your Local Timezone
            </span>
          </div>
        </div>

        {/* Embedded Calendly Showcase Card */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 overflow-hidden">
          {/* Compact Premium Header Bar */}
          <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-900 text-white flex items-center justify-between gap-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-400/80 shadow-xs shrink-0">
                <Image
                  src="/images/naime-portrait.png"
                  alt={personal.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 15%" }}
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                    Live Scheduler
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Strategy Session with {personal.name}
                </h4>
              </div>
            </div>

            {/* Direct Open in Tab CTA Button */}
            <a
              href={booking.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all shadow-xs hover:scale-105 shrink-0"
            >
              <span>Open Tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Sub-bar Logistics Note */}
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between gap-2 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5 truncate">
              <Video className="w-3 h-3 text-emerald-600 shrink-0" />
              Google Meet link emailed instantly upon booking
            </span>
            <span className="flex items-center gap-1 font-mono text-[10px] text-slate-400 shrink-0">
              <Globe className="w-3 h-3 text-slate-400 shrink-0" />
              Auto Timezone
            </span>
          </div>

          {/* Calendly Live Iframe Container - Sized Compactly */}
          <div className="relative w-full h-[460px] sm:h-[490px] bg-white overflow-hidden">
            {/* Loading placeholder skeleton */}
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50/60 z-0">
                <div className="w-8 h-8 rounded-full border-2 border-emerald-200 border-t-emerald-600 animate-spin mb-2.5" />
                <p className="text-xs font-bold text-slate-800">
                  Loading Calendar...
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5 max-w-xs text-center">
                  Connecting directly to the live booking calendar.
                </p>
                <a
                  href={booking.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-bold hover:bg-emerald-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>Open Directly on Calendly</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            )}

            {/* Live Responsive Calendly Iframe */}
            <iframe
              src={embedUrl}
              onLoad={() => setIframeLoaded(true)}
              className="relative z-10 w-full h-[460px] sm:h-[490px] border-0"
              title={`Book a meeting with ${personal.name}`}
            />
          </div>

          {/* Compact Trust Guarantees */}
          <div className="px-4 py-2.5 bg-slate-50/90 border-t border-slate-100 flex flex-wrap items-center justify-around gap-2 text-[11px] text-slate-600 text-center">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              100% Free Consultation
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Instant Calendar Sync
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              1-Click Reschedule
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
