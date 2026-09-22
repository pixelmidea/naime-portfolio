import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientWork from "@/components/ClientWork";
import Experience from "@/components/Experience";
import TeachingTraining from "@/components/TeachingTraining";
import ClassroomToCampaign from "@/components/ClassroomToCampaign";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import MediaGallery from "@/components/MediaGallery";
import Credentials from "@/components/Credentials";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#fbfaf7] text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero & Credibility Strip */}
        <Hero />

        {/* 2. Editorial About Section */}
        <About />

        {/* 3. 100+ International Client Work & Journey */}
        <ClientWork />

        {/* 4. Professional Experience & Teaching Evolution */}
        <Experience />

        {/* 5. Teaching & Training Pedagogy + 16 Curriculum Modules */}
        <TeachingTraining />

        {/* 6. From Classroom to Campaign Synthesis */}
        <ClassroomToCampaign />

        {/* 7. Digital Marketing Expertise (Grouped Technical Skills) */}
        <Skills />

        {/* 8. Selected Client Work & NDA-Friendly Case Studies */}
        <Projects />

        {/* 9. Visual Media & Professional Field Gallery */}
        <MediaGallery />

        {/* 10. Certifications & Education (NSDA Level-3, NIYD, BA) */}
        <Credentials />

        {/* 11. Professional References */}
        <References />

        {/* 12. Call to Action & Direct Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
