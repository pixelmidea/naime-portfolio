"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Copy, GraduationCap, Calendar, MessageSquare, ArrowRight } from "lucide-react";
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
    subject: "Instructor / Training Inquiry",
    roleType: "Instructor / Trainer",
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
      `[${formData.roleType}] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nInquiry Type: ${formData.roleType}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fbfaf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Primary Training Call to Action Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#0f172a] text-white relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e3a8a]/30 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3a8a] text-white text-xs font-bold tracking-wider uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Training Programs &amp; Workshops</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Looking for a digital marketing instructor who understands{" "}
              <span className="text-blue-300 font-serif italic">
                both the classroom and the real world?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Let&apos;s discuss training programs, workshops, professional courses, or digital marketing education opportunities for your institute, university, or corporate team.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Invite Me to Teach</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/10 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me Directly</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Details & Direct Inquiry Form */}
        <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e3a8a]/5 border border-[#1e3a8a]/15 text-[#1e3a8a] text-xs font-bold tracking-wider uppercase mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Channels</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-950 mb-2">
                Get in Touch
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Available for instructor recruitment, guest masterclasses, curriculum advisory, and growth strategy consultations.
              </p>
            </div>

            {/* Email Card */}
            <div className="editorial-card p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1e3a8a] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#1e3a8a] transition-colors break-all"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="editorial-card p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1e3a8a] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#1e3a8a] transition-colors font-mono"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="editorial-card p-4 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1e3a8a] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  Location &amp; Mobility
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900">
                  {personal.location} (Available Onsite &amp; Remote)
                </span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="editorial-card p-6 sm:p-8 rounded-2xl bg-white space-y-4"
            >
              <h4 className="text-lg font-bold text-gray-950">
                Send an Inquiry or Training Proposal
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Director Rahman"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e7e5e0] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Organization / Institute
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Skills Institute / Agency"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e7e5e0] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e7e5e0] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Opportunity Type
                  </label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e7e5e0] text-sm text-gray-900 bg-white focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
                  >
                    <option value="Instructor / Trainer">Digital Marketing Instructor</option>
                    <option value="Corporate Workshop">Corporate / Professional Training</option>
                    <option value="Marketing Consultant">Marketing &amp; Growth Consultant</option>
                    <option value="Student Mentorship">Student Mentoring &amp; Masterclass</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message / Curriculum Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the course topic, audience level, timeline, or training scope..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e7e5e0] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-xs font-bold transition-all shadow-md"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
