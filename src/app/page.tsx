import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualEdgeBento from "@/components/DualEdgeBento";
import ImpactCaseStudies from "@/components/ImpactCaseStudies";
import SkillsStack from "@/components/SkillsStack";
import CareerAndTrust from "@/components/CareerAndTrust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#fbfaf7] text-gray-900 selection:bg-[#1e3a8a] selection:text-white">
      {/* Dynamic Navigation */}
      <Navbar />

      {/* Main Content Stream (6 Curated Sections) */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero with Role Switcher & Live Metrics */}
        <Hero />

        {/* 2. The Dual Edge Bento: Math Pedagogy & Real-World Campaigns */}
        <DualEdgeBento />

        {/* 3. Proven Impact: Interactive Case Studies & Client Track Record */}
        <ImpactCaseStudies />

        {/* 4. Capabilities & Operational Tech Stack */}
        <SkillsStack />

        {/* 5. Career Evolution, Verified Credentials & Direct Endorsements */}
        <CareerAndTrust />

        {/* 6. High-Conversion Booking & Inquiry Hub */}
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
