import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Sparkles, Building2, User, Mail, Phone, Users, Database, Layers, MessageSquare } from "lucide-react";
import { sendUnifiedEmail } from "../services/emailService";

interface CrmLeadFormProps {
  defaultIndustry?: string;
  pageTitle?: string;
  hideBadge?: boolean;
}

export default function CrmLeadForm({ defaultIndustry = "Publishing", pageTitle = "Industry Solution", hideBadge = false }: CrmLeadFormProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "0px 0px -60px 0px" });

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: defaultIndustry,
    numEmployees: "1-10",
    currentCrm: "",
    managementGoal: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const payload = {
        form_type: `Consultation - ${pageTitle}`,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company_name: formData.companyName,
        product: `${formData.industry} Solution`,
        company_size: formData.numEmployees,
        inquiry_purpose: `Management Goal: ${formData.managementGoal} | Current Software: ${formData.currentCrm || "None"}`,
        subject: `New Lead: Consultation Request (${formData.industry})`,
        message: `
Current Software: ${formData.currentCrm || "None"}
What they want to manage: ${formData.managementGoal}
Employees: ${formData.numEmployees}
User Message: ${formData.message || "N/A"}
        `.trim(),
      };

      const success = await sendUnifiedEmail(payload);
      if (success) {
        setSubmitted(true);
      } else {
        setErrorMsg("Something went wrong while submitting. Please try again or call us directly.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="lead-form" ref={sectionRef} className="relative py-20 bg-[#F8FAFC] overflow-hidden border-t border-slate-200">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className={`text-center max-w-3xl mx-auto mb-14 content-wrap newmrhomebox services-section ${inView ? "animate" : ""}`}>
          <div className="services-fade-down">
            {!hideBadge && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>Tailored Enterprise Consultation</span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Let's Build the Right Solution for Your Business
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-medium">
              Your business process is unique. Your software should be too.
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Tell us about your current process, challenges and business requirements. Our team will help you identify the right architecture, features and automation opportunities for your organization.
            </p>
          </div>
        </div>

        <div
          className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated relative p-6 sm:p-8 lg:p-10 rounded-[22px] border border-slate-200 bg-white shadow-md transition-all duration-700 overflow-hidden ${
            inView ? "animate opacity-100 translate-y-0" : "opacity-90 translate-y-2"
          }`}
        >
          {/* Top accent gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-4 services-fade-down"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-300">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Consultation Request Received!</h3>
              <p className="text-slate-600 max-w-lg mx-auto mb-6">
                Thank you, <span className="text-slate-900 font-semibold">{formData.fullName}</span>. Our enterprise specialists will review your requirements and reach out within 24 hours to schedule your strategy session.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    companyName: "",
                    email: "",
                    phone: "",
                    industry: defaultIndustry,
                    numEmployees: "1-10",
                    currentCrm: "",
                    managementGoal: "",
                    message: "",
                  });
                }}
                className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-md cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-3">
                  <AlertCircle size={18} className="flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 services-fade-down services-delay-1">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Company Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Inzovate Tech Pvt Ltd"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Workflow & Business Profile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 services-fade-down services-delay-2">
                {/* Industry */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Industry <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Layers size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Publishing">Publishing &amp; Media</option>
                      <option value="Construction">Construction &amp; Real Estate</option>
                      <option value="Transportation">Transportation &amp; Logistics</option>
                      <option value="HR & Recruitment">HR &amp; Recruitment</option>
                      <option value="Test Monitoring & Conducting">Test Monitoring &amp; Conducting</option>
                      <option value="Other">Other Industry</option>
                    </select>
                  </div>
                </div>

                {/* Number of Employees */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Number of Employees
                  </label>
                  <div className="relative">
                    <Users size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <select
                      name="numEmployees"
                      value={formData.numEmployees}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer"
                    >
                      <option value="1-10">1 - 10 employees</option>
                      <option value="11-50">11 - 50 employees</option>
                      <option value="51-200">51 - 200 employees</option>
                      <option value="201-500">201 - 500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>

                {/* Current Software */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Current Software / System
                  </label>
                  <div className="relative">
                    <Database size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="currentCrm"
                      placeholder="e.g. Excel / Legacy Software / None"
                      value={formData.currentCrm}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* What do you want to manage? */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    What do you want to manage?
                  </label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="managementGoal"
                      placeholder="e.g. Orders, Quotations, Invoicing, Dispatch..."
                      value={formData.managementGoal}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="services-fade-down services-delay-3">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Additional Details / Specific Requirements
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Share details about your workflow, integrations needed, or specific pain points..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-y"
                />
              </div>

              {/* Submit Button & Subtext */}
              <div className="pt-2 text-center services-fade-down services-delay-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? (
                    <span>Processing Your Request...</span>
                  ) : (
                    <>
                      <span>Get My Free Consultation</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
                <p className="mt-4 text-xs text-slate-500">
                  No obligation. Tell us what you need—we'll show you how it can be streamlined.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
