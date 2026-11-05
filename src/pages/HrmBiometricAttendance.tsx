import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  MapPin,
  Clock,
  Fingerprint,
  CalendarCheck2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Smartphone,
  CalendarDays,
  UserCheck,
  Zap,
  Users,
  Compass,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";

const attendanceFaqs: FaqItem[] = [
  {
    question: "How does the biometric device integration work across multi-location offices?",
    answer: "Our cloud attendance listener connects with eSSL, Matrix, ZKTeco, and Realtime biometric/facial recognition devices via API or LAN gateways. Every punch is logged in real-time across all regional branches."
  },
  {
    question: "Does the mobile app support GPS geo-fencing and selfie verification for field staff?",
    answer: "Yes! Field agents, sales executives, and remote employees can clock in using our mobile app with real-time GPS geo-fencing constraints and mandatory facial selfie verification to prevent proxy attendance."
  },
  {
    question: "Can we configure complex shift rosters, night shifts, and grace period rules?",
    answer: "Absolutely. Configure rotational shifts, split shifts, auto-shift assignment based on punch time, custom grace periods, late-coming penalties, early exit rules, and automated comp-off accruals."
  },
  {
    question: "How does the leave approval workflow operate for managers and team leads?",
    answer: "Employees apply for CL, SL, PL, or maternity leaves through the app. Managers receive instant push notifications with 1-click approvals, automated balance updates, and calendar visibility."
  }
];

export default function HrmBiometricAttendance() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Biometric & Geo-Attendance System | Multi-Location Punch & Leave Management"
        description="Real-time biometric sync, mobile GPS geo-fencing attendance, shift roster planning, and automated leave management with Inzovate Attendance Software."
        canonicalUrl="https://inzovate-technologies.com/hrm-biometric-attendance"
        keywords="biometric attendance software, geo attendance mobile app, GPS punch in system, employee leave management, shift roster software, real time attendance sync"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "HRM Suite", url: "https://inzovate-technologies.com/products/hrm" },
          { name: "Biometric & Geo-Attendance", url: "https://inzovate-technologies.com/hrm-biometric-attendance" }
        ]}
        faqs={attendanceFaqs}
      />

      <div className="sh-spacer" />



      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 home-banner-animate animate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="fade-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Biometric & Geo-Attendance Management System
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                Cloud Biometric Sync, GPS Mobile Geo-Fencing & Shift Roster Control
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Gain real-time visibility into attendance across all branch offices, retail outlets, factories, and remote field teams. Sync biometric fingerprint/facial scanners with instant cloud processing and empower mobile employees with GPS geo-fenced mobile punch-in.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Eliminate proxy attendance, automate complex multi-shift rosters, and streamline leave approvals directly connected to your monthly payroll.
              </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 fade-left delay-2">
                <Link
                  to="/pricing"
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-full border border-slate-700 shadow-lg shadow-slate-900/15 hover:shadow-xl hover:border-slate-500 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <InzovateFaviconIcon size={18} className="text-blue-400" />
                  <span>Start Free Trial — View Pricing</span>
                  <ArrowRight size={18} className="text-blue-400" />
                </Link>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400 font-bold rounded-full shadow-sm transition-all duration-300 cursor-pointer"
                >
                  Book a Live Demo
                </button>
              </div>
            </div>

            {/* Quick Metrics Console */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Fingerprint className="text-blue-400" size={20} />
                  Attendance Live Console
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Biometric Sync Latency</div>
                      <div className="text-2xl font-bold text-blue-700">&lt; 1 Second</div>
                    </div>
                    <div className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Real-Time Cloud
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Proxy Attendance Prevention</div>
                      <div className="text-2xl font-bold text-emerald-700">100%</div>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                      AI Selfie + GPS
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Time Saved on Leave Audits</div>
                      <div className="text-2xl font-bold text-cyan-700">80%</div>
                    </div>
                    <div className="text-xs text-purple-400 font-semibold bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                      Auto-Deductions
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    Multi-Branch Ready
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles size={14} className="text-amber-400" />
                    Auto Shift Rostering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              Attendance Pain Points
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-2">
              Why Traditional Attendance Systems Fail Growing Teams
            </h3>
            <p className="text-slate-500 mt-3 text-sm sm:text-base">
              Manual register entries and standalone offline biometric machines create data silos, proxy punching, and endless payroll reconciliation disputes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-2xl bg-white border border-red-200 hover:border-red-300 hover:shadow-md transition-all fade-left delay-1`}>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                <AlertTriangle size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Buddy Punching & Time Theft</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Card swiping and manual logs allow coworkers to punch for absentees, leading to up to 8% unearned payroll loss every year.
              </p>
            </div>

            <div className={`p-6 rounded-2xl bg-white border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all fade-left delay-1`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Clock size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Multi-Branch Sync Failure</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Branch managers have to export USB logs from local machines at month-end, creating high delays and missing records.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <CalendarDays size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Messy Leave Reconciliation</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Leaves applied on email or paper forms fail to reflect in real time, leading to improper loss-of-pay deductions and employee friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section id="features" className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              Core Capabilities
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Full-Spectrum Attendance & Roster Management
            </h3>
            <p className="text-slate-500 mt-4 text-base">
              Engineered to support corporate offices, manufacturing plants, field sales teams, and remote workforces on a single platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <Fingerprint size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Cloud Biometric Sync</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Live API sync with leading biometric & facial recognition hardware. Automatically downloads check-in/check-out timestamps instantly.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Mobile GPS Geo-Fencing</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Define virtual GPS radiuses around client sites, warehouses, or project locations. Employees can only clock in when physically inside.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                <CalendarCheck2 size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Smart Shift Rostering</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Design custom shift schedules, 24/7 rotating plant shifts, and auto-assign shifts based on employee clock-in hours with swap requests.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <CalendarDays size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Automated Leave Engine</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Custom leave policies for earned leave, sick leave, casual leave, sandwich rule detection, and year-end leave encashment calculations.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Facial AI Selfie Punch</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                AI liveness detection and facial recognition matching right on mobile devices, ensuring zero impersonation for traveling sales teams.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Direct Payroll Integration</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Attendance days, overtime hours, and lop deductions flow directly into the payroll engine at the click of a button with zero export steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CrmFaqSection
        title="Frequently Asked Questions: Biometric & Geo-Attendance"
        industryFaqs={attendanceFaqs}
      />

      {/* LEAD CAPTURE FORM */}
      <div id="lead-form">
        <CrmLeadForm defaultIndustry="HRM & Payroll" pageTitle="Biometric & Geo-Attendance System" />
      </div>
    </div>
  );
}
