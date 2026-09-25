import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualEdgeBento from "@/components/DualEdgeBento";
import ImpactCaseStudies from "@/components/ImpactCaseStudies";
import SkillsStack from "@/components/SkillsStack";
import CareerAndTrust from "@/components/CareerAndTrust";
import CalendlySection from "@/components/CalendlySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white text-slate-900 selection:bg-emerald-500 selection:text-white overflow-hidden">
      {/* Luminous Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Left Vibrant Mint/Emerald Glow */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-200/40 via-teal-100/25 to-transparent blur-[120px] opacity-75" />
        
        {/* Top-Right Soft Lavender / Violet Glow */}
        <div className="absolute -top-20 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-purple-200/35 via-indigo-100/20 to-transparent blur-[130px] opacity-70" />

        {/* Mid-Page Subtle Cyan/Emerald Glow */}
        <div className="absolute top-[38%] -right-40 w-[600px] h-[600px] rounded-full bg-emerald-100/30 blur-[140px] pointer-events-none" />

        {/* Bottom Ambient Glow */}
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-teal-100/25 blur-[120px] pointer-events-none" />
      </div>

      {/* Dynamic Navigation */}
      <Navbar />

      {/* Main Content Stream (Curated Sections) */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* 1. Hero with Floating Portrait, Focus Badges & Clean Pill CTAs */}
        <Hero />

        {/* 2. The Dual Edge Bento: Math Pedagogy & Real-World Campaigns */}
        <DualEdgeBento />

        {/* 3. Proven Impact: Interactive Case Studies & Client Track Record */}
        <ImpactCaseStudies />

        {/* 4. Capabilities & Operational Tech Stack */}
        <SkillsStack />

        {/* 5. Career Evolution, Verified Credentials & Direct Endorsements */}
        <CareerAndTrust />

        {/* 6. Instant Calendar Booking: 15-Min & 30-Min Strategy Call */}
        <CalendlySection />

        {/* 7. High-Conversion Inquiry Hub & Direct Channels */}
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
