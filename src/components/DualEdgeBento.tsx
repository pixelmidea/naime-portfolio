"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Sparkles,
  TrendingUp,
  Users2,
  Award,
  GraduationCap,
  Play,
  Video,
  X,
  Link as LinkIcon,
  Check,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import AnimatedCounter from "@/components/AnimatedCounter";
import SparkleParticle from "@/components/SparkleParticle";
import TiltCard from "@/components/TiltCard";

function getEmbedUrl(url: string): string | null {
  if (!url) return null;
  const ytWatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytWatch && ytWatch[1]) {
    return `https://www.youtube.com/embed/${ytWatch[1]}?autoplay=1&rel=0`;
  }
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
  if (vimeo && vimeo[1]) {
    return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;
  }
  return null;
}

export default function DualEdgeBento() {
  const { credibilityMetrics, videoShowcase } = portfolioData;

  // Video Player States
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    videoShowcase?.videoUrl || "https://youtu.be/iQHrgApzAgM?si=FedmxZ2UmMViF-Uy"
  );
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState(videoUrl);

  const embedUrl = getEmbedUrl(videoUrl);
  const isDirectVideo =
    videoUrl &&
    (videoUrl.endsWith(".mp4") ||
      videoUrl.endsWith(".webm") ||
      videoUrl.startsWith("/videos/") ||
      videoUrl.startsWith("blob:"));

  const handlePlayClick = () => {
    if (videoUrl) {
      setIsVideoPlaying(true);
    } else {
      setIsUrlModalOpen(true);
    }
  };

  const handleSaveVideoUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setVideoUrl(inputUrl.trim());
      setIsVideoPlaying(true);
      setIsUrlModalOpen(false);
    }
  };

  const cardIcons = [TrendingUp, Users2, Award, GraduationCap];
  const accentStyles = [
    {
      badge: "text-emerald-700 bg-emerald-50 border-emerald-200/80",
      border: "hover:border-emerald-500/50 hover:shadow-emerald-500/5",
    },
    {
      badge: "text-blue-700 bg-blue-50 border-blue-200/80",
      border: "hover:border-blue-500/50 hover:shadow-blue-500/5",
    },
    {
      badge: "text-amber-700 bg-amber-50 border-amber-200/80",
      border: "hover:border-amber-500/50 hover:shadow-amber-500/5",
    },
    {
      badge: "text-indigo-700 bg-indigo-50 border-indigo-200/80",
      border: "hover:border-indigo-500/50 hover:shadow-indigo-500/5",
    },
  ];

  return (
    <section
      id="bento"
      className="relative py-12 sm:py-16 border-b border-slate-100 bg-slate-50/50 flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background glows and sparkles */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10 animate-morph-blob" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <SparkleParticle className="absolute top-8 right-[8%] hidden sm:block" size="lg" color="emerald" delay={0.4} />
      <SparkleParticle className="absolute bottom-12 left-[6%] hidden sm:block" size="md" color="teal" variant="four-point-soft" delay={1.1} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
            <span>The Practitioner-Instructor Edge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4">
            Mathematics Logic meets{" "}
            <span className="text-emerald-500">
              Live Agency Marketing.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Combining analytical rigor from secondary mathematics with real-world paid media execution across global agency accounts.
          </p>
        </div>

        {/* 2-Column Symmetrical Feature Grid (Cards on Left, Video on Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left Column (6 cols): 4 Cards in 2x2 Grid */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {credibilityMetrics.map((item, idx) => {
              const CardIcon = cardIcons[idx] || Award;
              const style = accentStyles[idx] || accentStyles[0];

              return (
                <TiltCard key={idx} maxTilt={6} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className={`editorial-card shimmer-card p-4 rounded-2xl flex flex-col justify-between bg-white border border-slate-100 shadow-sm ${style.border} hover:shadow-xl hover:shadow-emerald-500/10 transition-all group h-full`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110 ${style.badge}`}
                        >
                          <CardIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                          {item.category}
                        </span>
                      </div>

                      <div className="text-2xl sm:text-[1.75rem] font-extrabold text-slate-900 tracking-tight font-mono mb-0.5 leading-tight group-hover:text-emerald-600 transition-colors">
                        <AnimatedCounter value={item.value} />
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight mb-1">
                        {item.label}
                      </div>

                      <p className="text-[11px] text-slate-600 leading-snug line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {item.tag && (
                      <div className="pt-2 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px]">
                        <span className="font-semibold text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80">
                          {item.tag}
                        </span>
                        <span className="font-bold text-emerald-600 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                          Verified
                        </span>
                      </div>
                    )}
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>

          {/* Right Column (6 cols): Featured Video Showcase Player */}
          <div className="md:col-span-6 flex flex-col">
            <div className="shimmer-card glow-beam relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl h-full min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] flex flex-col justify-center">
              {isVideoPlaying && embedUrl ? (
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]">
                  <iframe
                    src={embedUrl}
                    title={videoShowcase?.title || "Featured Video"}
                    className="w-full h-full min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    aria-label="Close video player"
                    className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/80 hover:bg-black text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all shadow-lg group"
                    title="Return to video preview"
                  >
                    <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              ) : isVideoPlaying && isDirectVideo ? (
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]">
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]"
                  />
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    aria-label="Close video player"
                    className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/80 hover:bg-black text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all shadow-lg group"
                    title="Return to video preview"
                  >
                    <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              ) : (
                /* Idle Poster State */
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] group flex flex-col justify-between">
                  <Image
                    src={videoShowcase?.posterImage || "/images/video-poster.jpg"}
                    alt={videoShowcase?.title || "Video Thumbnail"}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ objectPosition: "center" }}
                  />

                  {/* Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60 pointer-events-none" />

                  {/* Top Bar Badges */}
                  <div className="relative p-3.5 sm:p-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                      </span>
                      {videoShowcase?.badge || "Featured Masterclass"}
                    </span>

                    <button
                      onClick={() => setIsUrlModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-medium text-white transition-all shadow-sm"
                    >
                      <LinkIcon className="w-3 h-3 text-blue-300" />
                      <span>{videoUrl ? "Change Video" : "Attach Video"}</span>
                    </button>
                  </div>

                  {/* Center Glowing Play Button */}
                  <div className="relative my-auto flex items-center justify-center z-10 py-4">
                    <button
                      onClick={handlePlayClick}
                      aria-label="Play video"
                      className="group/btn relative flex items-center justify-center"
                    >
                      <div className="absolute -inset-4 bg-emerald-500/25 rounded-full blur-xl group-hover/btn:bg-emerald-500/40 transition-all animate-pulse" />
                      <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm" />
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl border-2 border-white/30 group-hover/btn:scale-110 group-hover/btn:bg-emerald-400 transition-all duration-300">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5 text-white" />
                      </div>
                    </button>
                  </div>

                  {/* Bottom Video Metadata */}
                  <div className="relative p-3.5 sm:p-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
                    <div className="space-y-0.5 max-w-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] sm:text-[10px] font-mono font-bold text-blue-300 bg-blue-900/60 px-2 py-0.5 rounded border border-blue-400/30">
                          {videoShowcase?.duration || "Walkthrough"}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-gray-300 font-medium">
                          Naime • Marketing Strategist
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {videoShowcase?.title || "How Mathematics Logic Powers Live Marketing Systems"}
                      </h3>
                    </div>

                    <div className="shrink-0 flex items-center">
                      <button
                        onClick={handlePlayClick}
                        className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Watch</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video Link Configuration Modal */}
        {isUrlModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative border border-gray-200">
              <button
                onClick={() => setIsUrlModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1e3a8a] flex items-center justify-center">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-950">
                      Configure Masterclass Video
                    </h4>
                    <p className="text-xs text-gray-500">
                      Attach a YouTube link, Vimeo link, or local MP4 path
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSaveVideoUrl} className="space-y-3.5 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1">
                      Video Link or Path
                    </label>
                    <input
                      type="text"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="e.g. https://www.youtube.com/watch?v=... or /videos/demo.mp4"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a]"
                    />
                    <p className="text-[11px] text-gray-500 mt-1">
                      Tip: You can also permanently configure this in{" "}
                      <code className="text-[#1e3a8a] font-mono bg-blue-50 px-1 py-0.5 rounded">
                        src/data/portfolio.ts
                      </code>
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/80 space-y-1.5">
                    <span className="text-[11px] font-bold text-gray-700 block">
                      Quick Sample Test Links:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        type="button"
                        onClick={() =>
                          setInputUrl("https://youtu.be/iQHrgApzAgM?si=FedmxZ2UmMViF-Uy")
                        }
                        className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[11px] font-medium text-gray-700 hover:border-[#1e3a8a]"
                      >
                        Sample YouTube Video
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setInputUrl("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
                        }
                        className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[11px] font-medium text-gray-700 hover:border-[#1e3a8a]"
                      >
                        Sample MP4 Stream
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsUrlModalOpen(false)}
                      className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save &amp; Play</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
