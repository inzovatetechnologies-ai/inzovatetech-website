import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  UserCheck,
  ClipboardCheck,
  Bell,
  BarChart3,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Award,
  Layers,
  Users,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const testFaqs: FaqItem[] = [
  {
    question: "Can we manage online and offline examination batches in the CRM?",
    answer: "Yes, the system allows you to schedule exam centers, invigilator/proctor assignments, batch timings, and candidate hall ticket allocations for both physical and digital exams."
  },
  {
    question: "How does candidate registration and attendance tracking work?",
    answer: "Candidates register through structured web forms or batch uploads. On exam day, attendance can be marked manually or scanned digitally to track absentees and attendees in real time."
  },
  {
    question: "Can test results and performance scorecards be published to candidates?",
    answer: "Yes. Once assessment records are uploaded or evaluated, automated SMS and email notifications with result summary cards can be sent to candidates."
  },
  {
    question: "Can colleges and training institutes track department-wise test statistics?",
    answer: "Yes, executive dashboards provide department-wise, college-wise, or batch-wise pass percentages, performance averages, and attendance breakdown reports."
  }
];

export default function CrmTestManagement() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="CRM for Test Monitoring & Conducting | Manage Candidates & Assessments"
        description="Manage test registrations, candidates, schedules, assessments, attendance, results and follow-ups with a centralized CRM for test and examination management."
        canonicalUrl="https://inzovate-technologies.com/crm-for-test-management"
        keywords="CRM for test monitoring, test management software, examination management CRM, assessment candidate registration, placement cell test CRM"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "CRM Solutions", url: "https://inzovate-technologies.com/crm-by-industry" },
          { name: "CRM for Test Management", url: "https://inzovate-technologies.com/crm-for-test-management" }
        ]}
        faqs={testFaqs}
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
                CRM for Test Monitoring & Conducting
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                Manage Test Registrations, Candidates, Schedules & Assessments
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Simplify the complete test management process with a centralized CRM for institutions, training providers, placement teams and assessment organizations.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Manage candidate registrations, test schedules, attendance, communication and assessment records from one platform.
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
                  Talk to Our Experts
                </button>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <ClipboardCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Assessment Monitor</h4>
                      <p className="text-xs text-slate-400">Live Test Session Stats</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Live Batch
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Registered Candidates", value: "3,450 Students", color: "text-blue-400" },
                    { label: "Active Test Batches", value: "14 Sessions", color: "text-cyan-400" },
                    { label: "Attendance Verification", value: "96.4% Present", color: "text-emerald-400" },
                    { label: "Evaluated & Published", value: "2,890 Results", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ONE PLATFORM FOR YOUR TEST MANAGEMENT PROCESS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            One Platform for Your Test Management Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conducting assessments manually can involve spreadsheets, paper forms, emails and multiple disconnected systems.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
            Our Test Monitoring & Conducting CRM helps organizations centralize candidate information, automate notifications, and manage assessment-related activities smoothly.
          </p>
        </div>
      </section>

      {/* SECTION: CHALLENGES IN TEST MANAGEMENT */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flipbox-fade-down">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Assessment Bottlenecks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Challenges in Test Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Manual Candidate Registration",
                desc: "Managing large numbers of candidate registration records through static spreadsheets easily causes duplicate entries and errors.",
              },
              {
                num: "02",
                title: "Complex Test Scheduling",
                desc: "Coordinating test dates, hall locations, session times, and candidate batch allocations requires organized, error-free scheduling.",
              },
              {
                num: "03",
                title: "Attendance Tracking",
                desc: "Monitoring candidate participation, hall entry verification, and attendance logs across multiple exam centers manually is tedious.",
              },
              {
                num: "04",
                title: "Communication Overhead",
                desc: "Sending timely test schedules, hall ticket updates, venue instructions, and reminders to thousands of candidates manually.",
              },
              {
                num: "05",
                title: "Result Management",
                desc: "Safely maintaining assessment records, tracking candidate performance metrics, and publishing scorecards without data corruption.",
              },
              {
                num: "06",
                title: "Multiple Test Batches",
                desc: "Managing multiple concurrent tests, departments, colleges, or candidate cohorts from one central administration hub.",
              },
            ].map((card, idx) => (
              <div
                key={card.num}
                className={`bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs relative overflow-hidden ${idx % 2 === 0 ? "fade-left" : "fade-right"} delay-${(idx % 3) + 1}`}
              >
                <div className="text-4xl font-black text-slate-200 absolute top-4 right-4">
                  {card.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: KEY FEATURES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flipbox-fade-down">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Candidate Registration",
                desc: "Collect and manage candidate registration details through structured online registration forms and bulk imports.",
                icon: UserCheck,
              },
              {
                title: "Test Scheduling",
                desc: "Create comprehensive test schedules, sessions, candidate batches, hall allocations, and examination locations.",
                icon: Calendar,
              },
              {
                title: "Candidate Allocation",
                desc: "Automatically assign registered candidates to appropriate tests, batches, session times, or exam centers.",
                icon: Users,
              },
              {
                title: "Attendance Monitoring",
                desc: "Track real-time candidate attendance, check-in timestamps, and absent candidate logs.",
                icon: ClipboardCheck,
              },
              {
                title: "Test Monitoring",
                desc: "Maintain detailed test-related monitoring records, invigilator notes, and session compliance reports.",
                icon: GraduationCap,
              },
              {
                title: "Result Management",
                desc: "Record assessment outcomes, score distributions, pass/fail status, and candidate performance histories.",
                icon: Award,
              },
              {
                title: "Automated Notifications",
                desc: "Send automated SMS and email reminders for test dates, hall tickets, venue instructions, and published results.",
                icon: Bell,
              },
              {
                title: "Dashboard & Analytics",
                desc: "Monitor registered candidates, active tests, completed tests, attendance rates, and test-wise performance statistics.",
                icon: BarChart3,
              },
            ].map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-4">
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Dashboard Metrics Box */}
          <div className="bg-slate-50 border border-slate-200/90 p-6 rounded-2xl">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <BarChart3 size={16} className="text-cyan-600" />
              <span>Real-Time Dashboard & Statistics Monitored</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Total registered candidates</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Active & upcoming tests</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Completed assessment sessions</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Real-time attendance percentage</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Assessment score outcomes</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Individual candidate performance</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Batch-wise pass statistics</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Center & invigilator logs</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SUITABLE FOR */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Suitable For Assessment Providers
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Colleges & Universities",
              "Placement Cells",
              "Training Institutes",
              "Coaching Centers",
              "Assessment Companies",
              "Recruitment Agencies",
              "Skill Development Organizations",
              "Corporate Training Teams",
              "Certification Providers",
              "Educational Institutions",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center flex items-center justify-center gap-2.5 hover:border-blue-400 hover:bg-white transition-all"
              >
                <GraduationCap size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="space-y-4 newmrhomebox flipbox-section py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-y border-blue-100 text-center animate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Manage Large-Scale Assessments With Confidence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you are conducting an internal assessment for 50 candidates or managing multiple batches across institutions, a centralized system can help your team organize the entire process.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="px-9 py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-full border border-slate-700 shadow-xl shadow-slate-900/20 hover:border-slate-500 hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center gap-2 text-base"
            >
              <InzovateFaviconIcon size={18} className="text-blue-400" />
              <span>Start Free Trial — View Pricing</span>
              <ArrowRight size={18} className="text-blue-400" />
            </Link>
            <button
              type="button"
              onClick={scrollToForm}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400 font-bold rounded-full shadow-sm transition-all cursor-pointer"
            >
              <span>Talk to Our Experts</span>
            </button>
          </div>
        </div>
      </section>

      {/* COMMON SECTION: WHY CHOOSE INZOVATE */}

      {/* LEAD GENERATION FORM */}
      <CrmLeadForm defaultIndustry="Test Monitoring & Conducting" pageTitle="Test Monitoring & Conducting CRM" />

      {/* FAQ SECTION */}
      <CrmFaqSection industryFaqs={testFaqs} />
    </div>
  );
}
