"use client";

import { useState } from "react";
import { Camera, Play, Eye, X, Video } from "lucide-react";
import { portfolioData, MediaItem } from "@/data/portfolio";

export default function MediaGallery() {
  const { mediaItems } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const categories = ["All", "Client Work", "Agency Life", "Training", "Presentations", "Professional Moments"];

  const filteredItems =
    activeCategory === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 md:py-28 border-b border-[#e7e5e0] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Evidence &amp; Field Moments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.18] mb-4">
            A career built through{" "}
            <span className="text-[#1e3a8a] font-serif italic">
              people, projects, and practice.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            A visual timeline across international client sprints, digital agency operations, classroom workshops, and institutional presentations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#1e3a8a] text-white shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="editorial-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[16/10] bg-gradient-to-tr from-[#ede7dc] to-[#dfd7c7] border-b border-[#ded7c8] p-5 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold text-gray-800 bg-white/90 px-2.5 py-1 rounded shadow-2xs border border-gray-200">
                    {item.category}
                  </span>
                  {item.isVideo && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-white bg-rose-600 px-2 py-0.5 rounded shadow-2xs">
                      <Video className="w-3 h-3" />
                      <span>Video</span>
                    </span>
                  )}
                </div>

                {/* Center Icon / Thumbnail Representation */}
                <div className="my-auto text-center z-10">
                  <div className="w-12 h-12 mx-auto rounded-full bg-white/90 border border-gray-300 flex items-center justify-center text-[#1e3a8a] shadow-xs group-hover:scale-110 transition-transform">
                    {item.isVideo ? (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </div>
                  <p className="text-[11px] font-mono text-gray-600 mt-2 font-medium">
                    {item.imagePlaceholderText}
                  </p>
                </div>

                <div className="z-10 text-[10px] text-gray-500 font-semibold flex items-center justify-between">
                  <span>Click to view field capture</span>
                  <span className="font-mono">Naime Archive</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#1e3a8a] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Video Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-200">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded">
                    {selectedItem.category}
                  </span>
                  {selectedItem.isVideo && (
                    <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                      Recorded Training Footage
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-950">
                  {selectedItem.title}
                </h3>

                {/* Modal Visual Area */}
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-tr from-[#ece5d9] to-[#dfd7c5] border border-[#d6cdba] flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 border border-gray-300 flex items-center justify-center text-[#1e3a8a] mb-3 shadow-md">
                    {selectedItem.isVideo ? (
                      <Play className="w-7 h-7 fill-current ml-1 text-rose-600" />
                    ) : (
                      <Camera className="w-7 h-7 text-[#1e3a8a]" />
                    )}
                  </div>
                  <p className="text-sm font-bold text-gray-800">
                    {selectedItem.imagePlaceholderText}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs">
                    Ready to attach high-resolution authentic photograph or presentation video link.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {selectedItem.caption}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-end">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold transition-colors"
                  >
                    Close Preview
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
