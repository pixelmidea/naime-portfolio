"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    roleType: "Instructor / Training Cohort",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
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
    setTimeout(() => setSubmitted(false), 4000);
  };

  const roleOptions = [
    "Instructor / Training Cohort",
    "Agency Growth Marketing",
    "Corporate Workshop",
    "General Consultation",
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fbfaf7] border-t border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Banner Card */}
        <div className="rounded-3xl bg-[#0f172a] text-white p-8 sm:p-12 mb-16 relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Available for New Engagements</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18]">
              Let&apos;s build something{" "}
              <span className="text-blue-300 font-serif italic">exceptional.</span>
            </h2>

            <p className="text-base text-gray-300 leading-relaxed">
              Whether you need an articulate, patient instructor for your next marketing cohort or a battle-tested strategist to scale performance marketing campaigns, let&apos;s start the conversation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-950 mb-2">
                Direct Channels
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fast responses guaranteed within 24 business hours.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <div className="editorial-card p-4 rounded-2xl bg-white border border-[#e2e8f0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#1e3a8a]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#1e3a8a]"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="editorial-card p-4 rounded-2xl bg-white border border-[#e2e8f0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#1e3a8a] font-mono"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-gray-400 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="editorial-card p-4 rounded-2xl bg-white border border-[#e2e8f0] flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gray-100 text-gray-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                    Location &amp; Mobility
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">
                    {personal.location} (Remote &amp; Onsite)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 editorial-card p-6 sm:p-8 rounded-3xl bg-white border border-[#e2e8f0]">
            <h3 className="text-xl font-bold text-gray-950 mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Select your inquiry objective below for quick alignment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Type Selector Pills */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  What are you looking to collaborate on?
                </label>
                <div className="flex flex-wrap gap-2">
                  {roleOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, roleType: opt })}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                        formData.roleType === opt
                          ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-2xs"
                          : "bg-[#f8fafc] text-gray-700 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Training Institute / Agency"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Project / Cohort Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your schedule, syllabus needs, or campaign objectives..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8fafc] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#1e3a8a]/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>{submitted ? "Launching Email Client..." : "Send Inquiry"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
