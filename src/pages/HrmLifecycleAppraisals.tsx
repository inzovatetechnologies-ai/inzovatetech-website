import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  UserPlus,
  Award,
  Target,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Users,
  Clock,
  Layers,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";

const lifecycleFaqs: FaqItem[] = [
  {
    question: "How does the digital onboarding workflow streamline new hire joining?",
    answer: "Candidates receive an invite link before day 1 to upload KYC documents, digital signatures, education certificates, and bank details. Automated checklists assign assets, IT accounts, and welcome orientation tasks."
  },
  {
    question: "Does the platform support OKRs, KPIs, and 360-degree performance appraisals?",
    answer: "Yes! Inzovate supports continuous performance tracking with custom OKRs, role-based KPIs, quarterly reviews, peer reviews, manager feedback cycles, and automated 9-box talent matrix mapping."
  },
  {
    question: "Can we automate probation evaluations and employee role confirmations?",
    answer: "Absolutely. The system sends automatic notifications to managers 30 and 15 days before probation completion with customized evaluation rubrics and instant confirmation letter generation."
  },
  {
    question: "How does the offboarding and exit management workflow function?",
    answer: "When an employee submits resignation, the system initiates an automated notice period tracker, multi-department no-objection certificate (NOC) clearance (IT, Admin, Finance), exit interview survey, and Full & Final (F&F) settlement."
  }
];

export default function HrmLifecycleAppraisals() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Employee Lifecycle & Performance Appraisals | Onboarding & OKR Software"
        description="Streamline digital employee onboarding, probation reviews, 360 performance appraisals, OKRs, and exit clearance with Inzovate Lifecycle & Appraisals Software."
        canonicalUrl="https://inzovate-technologies.com/hrm-lifecycle-appraisals"
        keywords="employee lifecycle management, performance appraisal software, employee onboarding system, OKR KPI tracking software, 360 degree feedback, full and final settlement software"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "HRM Suite", url: "https://inzovate-technologies.com/products/hrm" },
          { name: "Lifecycle & Appraisals", url: "https://inzovate-technologies.com/hrm-lifecycle-appraisals" }
        ]}
        faqs={lifecycleFaqs}
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
                Employee Lifecycle & Performance Appraisals Software
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-purple-700">
                Paperless Onboarding, 360° Appraisals, OKRs & Automated Exit Clearance
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Nurture, align, and retain top talent across their entire career journey. From digital pre-boarding document verification to goal-oriented OKR evaluations, continuous performance feedback, and structured offboarding workflows, Inzovate builds high-performance work cultures.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Replace subjective annual reviews with transparent, metric-driven appraisals and automated salary revision letters directly connected to payroll.
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Award className="text-purple-400" size={20} />
                  Talent Excellence Console
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Onboarding Time to Productivity</div>
                      <div className="text-2xl font-bold text-purple-700">50% Faster</div>
                    </div>
                    <div className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Digital Workflows
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Appraisal Completion Rate</div>
                      <div className="text-2xl font-bold text-emerald-700">99.4%</div>
                    </div>
                    <div className="text-xs text-purple-400 font-semibold bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                      Automated Alerts
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Employee Retention Uplift</div>
                      <div className="text-2xl font-bold text-cyan-700">+28%</div>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                      Clear OKRs
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    360° Review Cycles
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles size={14} className="text-amber-400" />
                    Auto F&F Clearance
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
            <h2 className="text-xs font-bold text-purple-700 uppercase tracking-widest">
              Talent Management Friction
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-2">
              Why Disconnected Lifecycle Workflows Hurt Retention
            </h3>
            <p className="text-slate-500 mt-3 text-sm sm:text-base">
              Scattered onboarding emails and bi-annual chaotic appraisal forms lead to disengaged employees and subjective promotion decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-2xl bg-white border border-red-200 hover:border-red-300 hover:shadow-md transition-all fade-left delay-1`}>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                <AlertTriangle size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Tedious Joining Paperwork</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                New recruits waste day 1 filling out repetitive paper forms and printing ID proofs instead of starting team orientation.
              </p>
            </div>

            <div className={`p-6 rounded-2xl bg-white border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all fade-left delay-1`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Target size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Subjective Performance Bias</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Without structured OKRs and continuous goal checkpoints, manager appraisals rely on recency bias and subjective opinions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-purple-200 hover:border-purple-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <FileCheck2 size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Slow Exit & Settlement NOCs</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Gathering manual clearance signatures across IT, HR, and accounts delays full & final settlements beyond the statutory period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section id="features" className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-purple-700 uppercase tracking-widest">
              Lifecycle & Performance Modules
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Empowering High-Performance Teams from Day 1 to Exit
            </h3>
            <p className="text-slate-500 mt-4 text-base">
              A continuous performance and lifecycle ecosystem designed for high-growth enterprises and dynamic teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                <UserPlus size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Digital Pre-Boarding & Joining</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Send digital joining links to upload KYC documents, sign employment agreements digitally, and assign asset/IT accounts before day one.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">OKR & KPI Alignment</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cascade company-wide objectives into departmental and individual goals. Track milestones with continuous progress check-ins.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">360° Appraisal Feedback</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Run quarterly, bi-annual, or annual appraisal cycles with self-reviews, peer feedback, manager ratings, and 9-box talent matrix visualization.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Probation & Confirmation Review</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automated probation tracking with reminder workflows for managers. 1-click generation and delivery of official confirmation letters.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Learning & Skill Development</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Identify skill gaps during appraisal cycles and assign customized training modules, certifications, and development action plans.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                <FileCheck2 size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Offboarding & F&F Settlement</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Streamlined resignation workflows, multi-department NOC clearance, exit interview surveys, and automated gratuity/leave encashment settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CrmFaqSection
        title="Frequently Asked Questions: Lifecycle & Appraisals"
        industryFaqs={lifecycleFaqs}
      />

      {/* LEAD CAPTURE FORM */}
      <div id="lead-form">
        <CrmLeadForm defaultIndustry="HRM & Payroll" pageTitle="Lifecycle & Performance Appraisals" />
      </div>
    </div>
  );
}
