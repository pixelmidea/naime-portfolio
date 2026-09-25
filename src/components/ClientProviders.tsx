"use client";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageReveal from "@/components/PageReveal";
import ScrollProgress from "@/components/ScrollProgress";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <PageReveal />
      <CustomCursor />
      <ScrollProgress />
      {/* Noise grain texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      {children}
    </SmoothScroll>
  );
}
