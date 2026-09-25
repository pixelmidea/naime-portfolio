"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/portfolio";
import SparkleParticle from "@/components/SparkleParticle";
import TiltCard from "@/components/TiltCard";

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    roleType: "Instructor / Training Cohort",
    message: "",
  });

  const showToastNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    showToastNotification("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    showToastNotification("Phone number copied to clipboard!");
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      `[${formData.roleType}] Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nInquiry Type: ${formData.roleType}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    showToastNotification("Opening your email client...");
    setTimeout(() => setSubmitted(false), 4000);
  };

  const roleOptions = [
    "Instructor / Training Cohort",
    "Agency Growth Marketing",
    "Corporate Workshop",
    "General Consultation",
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100 overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[9995] px-4 py-3 rounded-2xl bg-slate-900 text-white border border-emerald-500/40 shadow-2xl flex items-center gap-3 backdrop-blur-xl"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-200">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient background glows and sparkles */}
      <div className="absolute top-10 -left-10 w-80 h-80 bg-emerald-100/35 rounded-full blur-3xl pointer-events-none -z-10 animate-morph-blob" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <SparkleParticle className="absolute top-12 left-[8%] hidden sm:block" size="lg" color="emerald" delay={0.3} />
      <SparkleParticle className="absolute bottom-24 right-[7%] hidden sm:block" size="md" color="teal" variant="four-point-soft" delay={1.1} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Banner Card */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 mb-14 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Luminous emerald glow in the banner */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none animate-morph-blob" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-500/15 blur-3xl rounded-full pointer-events-none animate-pulse-glow" />
          <SparkleParticle className="absolute top-6 right-10 hidden sm:block" size="lg" color="emerald" delay={0.5} />
          <SparkleParticle className="absolute bottom-8 right-28 hidden sm:block" size="sm" color="teal" variant="diamond" delay={1.4} />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Available for New Engagements</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              Let&apos;s build something{" "}
              <span className="text-emerald-400">exceptional.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed max-w-xl">
              Whether you need an articulate, structured instructor for your next marketing cohort or a battle-tested strategist to scale performance marketing campaigns, let&apos;s start the conversation.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <motion.a
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-card inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </motion.a>

              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Direct Channels
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fast responses guaranteed within 24 business hours.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <TiltCard maxTilt={5}>
                <motion.div
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="editorial-card shimmer-card glow-beam p-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-sm hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </motion.div>
              </TiltCard>

              {/* Phone */}
              <TiltCard maxTilt={5}>
                <motion.div
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="editorial-card shimmer-card glow-beam p-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-sm hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                        Phone / WhatsApp
                      </span>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 font-mono transition-colors"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </motion.div>
              </TiltCard>

              {/* LinkedIn */}
              <TiltCard maxTilt={5}>
                <motion.div
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="editorial-card shimmer-card glow-beam p-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-sm hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                        LinkedIn Profile
                      </span>
                      <a
                        href={personal.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                      >
                        shinewithnaime
                      </a>
                    </div>
                  </div>
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-emerald-600 rounded-lg hover:bg-slate-100 transition-colors"
                    title="Open LinkedIn"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </TiltCard>

              {/* Location */}
              <motion.div
                whileHover={{ y: -3, x: 2, scale: 1.015 }}
                transition={{ duration: 0.2 }}
                className="editorial-card p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-3 shadow-sm hover:border-slate-200"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                    Location &amp; Mobility
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">
                    {personal.location} (Remote &amp; Onsite)
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 editorial-card shimmer-card glow-beam p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Select your inquiry objective below for quick alignment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Type Selector Pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  What are you looking to collaborate on?
                </label>
                <div className="flex flex-wrap gap-2">
                  {roleOptions.map((opt) => (
                    <motion.button
                      type="button"
                      key={opt}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setFormData({ ...formData, roleType: opt })}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                        formData.roleType === opt
                          ? "bg-emerald-500 text-white border-emerald-500 shadow-sm shadow-emerald-500/20"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Training Institute / Agency"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project / Cohort Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your schedule, syllabus needs, or campaign objectives..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 focus:bg-white transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="shimmer-card w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{submitted ? "Launching Email Client..." : "Send Inquiry"}</span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
