import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Smartphone,
  FileText,
  CalendarDays,
  Receipt,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  CreditCard,
  UserCog,
  FileCheck,
  Send,
  Zap,
  Lock,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";

const essFaqs: FaqItem[] = [
  {
    question: "What capabilities can employees access inside the Inzovate ESS Portal?",
    answer: "Employees can view & download passworded pay slips, check Form 16, submit IT tax declarations, upload rent receipts and investment proofs, apply for leaves and comp-offs, file expense claims, and update emergency contact details."
  },
  {
    question: "Is the Employee Self-Service portal available as a mobile application?",
    answer: "Yes, Inzovate ESS is available as both a responsive web application and native iOS/Android mobile apps with biometric fingerprint login and push notifications."
  },
  {
    question: "How does the expense reimbursement workflow work in ESS?",
    answer: "Employees can snap photos of taxi, fuel, or hotel bills from their phone, tag them to a project cost center, and submit them. Managers review and approve them in 1-click for inclusion in the next payroll run."
  },
  {
    question: "Can employees simulate their income tax deductions under Old vs New Tax Regimes?",
    answer: "Yes! The portal features a built-in interactive tax calculator that helps employees compare their estimated net tax liability under the Old and New tax regimes before submitting their final IT declaration."
  }
];

export default function HrmEmployeeSelfService() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Employee Self-Service Portal (ESS) | Pay Slips, Leaves & Tax Declarations"
        description="Empower your workforce with Inzovate ESS Portal. 24/7 mobile access to pay slips, Form 16, leave applications, expense claims, and income tax declarations."
        canonicalUrl="https://inzovate-technologies.com/hrm-employee-self-service"
        keywords="employee self service portal, ESS mobile app, employee portal software, download pay slip online, income tax declaration portal, employee expense claim system"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "HRM Suite", url: "https://inzovate-technologies.com/products/hrm" },
          { name: "Employee Self-Service Portal", url: "https://inzovate-technologies.com/hrm-employee-self-service" }
        ]}
        faqs={essFaqs}
      />

      <div className="sh-spacer" />



      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-600/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 home-banner-animate animate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="fade-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Employee Self-Service (ESS) Portal & Mobile App
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-teal-400">
                24/7 Pay Slips, Leave Requests, Expense Claims & Tax Declarations
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Give your workforce complete control over their workplace lifecycle. Inzovate's Employee Self-Service Portal eliminates routine HR inquiries by giving team members instant self-service access to salary slips, tax declarations, leave balances, reimbursement requests, and company announcements.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Available on web and mobile with biometric authentication, ensuring high employee satisfaction and saving your HR team 20+ hours every week.
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Smartphone className="text-teal-400" size={20} />
                  ESS Adoption Console
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">HR Ticket Reduction</div>
                      <div className="text-2xl font-bold text-teal-400">75% Fewer</div>
                    </div>
                    <div className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Self-Service
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Expense Approval Speed</div>
                      <div className="text-2xl font-bold text-emerald-700">3x Faster</div>
                    </div>
                    <div className="text-xs text-teal-400 font-semibold bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
                      Mobile Receipts
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Mobile Employee Adoption</div>
                      <div className="text-2xl font-bold text-cyan-700">98%</div>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                      iOS & Android
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Lock size={14} className="text-emerald-400" />
                    Biometric App Login
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles size={14} className="text-amber-400" />
                    Tax Comparator
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
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              HR Operational Bottlenecks
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-2">
              Why Manual HR Helpdesks Overwhelm People Teams
            </h3>
            <p className="text-slate-500 mt-3 text-sm sm:text-base">
              Without self-service tools, HR teams spend up to 40% of their working hours answering duplicate questions about leaves, salary slips, and reimbursement statuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-2xl bg-white border border-red-200 hover:border-red-300 hover:shadow-md transition-all fade-left delay-1`}>
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                <AlertTriangle size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Endless Pay Slip Requests</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Employees constantly email HR for past pay slips and tax certificates during loan applications or tax filing periods.
              </p>
            </div>

            <div className={`p-6 rounded-2xl bg-white border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all fade-left delay-1`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Receipt size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Lost Paper Expense Receipts</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Physical receipts get misplaced or faded, delaying monthly expense reimbursements and leading to employee frustration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-teal-200 hover:border-teal-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
                <FileCheck size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Chaos During Tax Proof Submissions</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Collecting investment proofs, 80C receipts, and rent declarations via email leads to massive administrative chaos in January-March.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES GRID */}
      <section id="features" className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Portal Features & Modules
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Everything Your Employees Need at Their Fingertips
            </h3>
            <p className="text-slate-500 mt-4 text-base">
              A modern, intuitive digital self-service workplace accessible anytime from laptops, tablets, or smartphones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Digital Pay Slips & Form 16</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Download monthly password-protected PDF pay slips and Form 16 tax certificates anytime with instant historical archive access.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <CalendarDays size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Leave & Attendance Dashboard</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Check available leave balances, holiday calendars, applied leave status, and submit regularisation requests for missed punches.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <CreditCard size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Mobile Expense Claims</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Snap photos of travel and food receipts on mobile, assign to client projects, and track manager approvals and reimbursement clearance.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">IT Declaration & Proof Upload</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Submit 80C, 80D, HRA rent receipts, and home loan certificates online. Compare taxes under Old vs New tax regimes in real time.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                <UserCog size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Profile & Document Management</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Update bank account details, emergency contact info, and upload identification documents directly for HR compliance review.
              </p>
            </div>

            <div className={`p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-2`}>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Native Mobile Apps</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Feature-rich mobile applications for Android & iOS with Face ID / fingerprint unlocking and push notifications for urgent updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CrmFaqSection
        title="Frequently Asked Questions: Employee Self-Service Portal"
        industryFaqs={essFaqs}
      />

      {/* LEAD CAPTURE FORM */}
      <div id="lead-form">
        <CrmLeadForm defaultIndustry="HRM & Payroll" pageTitle="Employee Self-Service Portal" />
      </div>
    </div>
  );
}
