import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  UserCheck,
  Calendar,
  FileCheck,
  BarChart3,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Building2,
  FileText,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const hrFaqs: FaqItem[] = [
  {
    question: "Is this CRM a replacement for our HRMS / Payroll software?",
    answer: "No. This product is specifically a CRM designed for recruitment relationship management, candidate sourcing, client acquisition, job requirement tracking, and interview scheduling—it works alongside your HRMS or payroll system."
  },
  {
    question: "Can recruitment agencies parse candidate resumes into the CRM automatically?",
    answer: "Yes, our candidate management system allows recruiters to store profiles with resumes, parse contact details, and tag skills for fast candidate matching."
  },
  {
    question: "How does the CRM help track client vacancy agreements and fee follow-ups?",
    answer: "Client management modules track corporate client profiles, active job orders, fee structures, candidate submission deadlines, and invoice follow-ups."
  },
  {
    question: "Can recruiters track interview feedback and candidate joining dates?",
    answer: "Yes! Visual pipelines move candidates smoothly from Screening to Shortlisted, Interview Scheduled, Selected, and Joined, keeping all interview notes in one record."
  }
];

export default function CrmHr() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="CRM for HR & Recruitment | Candidate & Client Relationship Management"
        description="Manage candidates, recruitment clients, job enquiries, interviews and follow-ups with CRM software designed for HR consultancies and recruitment agencies."
        canonicalUrl="https://inzovate-technologies.com/crm-for-hr"
        keywords="CRM for HR, recruitment agency CRM, candidate relationship management software, staffing agency CRM, talent acquisition pipeline"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "CRM Solutions", url: "https://inzovate-technologies.com/crm-by-industry" },
          { name: "CRM for HR & Recruitment", url: "https://inzovate-technologies.com/crm-for-hr" }
        ]}
        faqs={hrFaqs}
      />

      <div className="sh-spacer" />



      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 home-banner-animate animate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                CRM for HR & Recruitment
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                Manage Candidates, Clients, Recruitments & Follow-Ups
              </h2>
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Build a structured recruitment pipeline with a CRM designed for HR consultants, recruitment agencies, staffing companies and talent acquisition teams.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Manage candidates, clients, job requirements, interviews and follow-ups from one centralized system.
              </p>

              {/* Clarification Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800 flex items-center gap-2">
                <UserCheck size={16} className="flex-shrink-0 text-blue-600" />
                <span>Designed for Candidate & Client Relationship Management (CRM), complementing your existing HRMS/Payroll infrastructure.</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
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
                  Talk to Our CRM Experts
                </button>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Recruitment Funnel</h4>
                      <p className="text-xs text-slate-400">Live Candidate Pipeline</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Active
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    { stage: "New Candidate Sourced", count: "142 Profiles" },
                    { stage: "Screened & Verified", count: "58 Candidates" },
                    { stage: "Shortlisted for Client", count: "24 Profiles" },
                    { stage: "Interview Scheduled", count: "12 Candidates" },
                    { stage: "Selected & Offered", count: "5 Candidates" },
                    { stage: "Joined Client", count: "4 Placements" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs">
                      <span className="text-slate-700 font-medium">{item.stage}</span>
                      <span className="text-cyan-400 font-bold">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: RECRUITMENT IS ABOUT RELATIONSHIPS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Recruitment Is About Relationships
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Recruitment teams manage complex relationships with candidates, hiring companies, HR managers, department leaders, consultants, and staffing partners.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Managing these relationships through spreadsheets and separate communication channels makes recruitment difficult to scale. Our HR & Recruitment CRM centralizes these relationships into one organized platform.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Candidates",
              "Hiring Companies",
              "Hiring Managers",
              "HR Departments",
              "External Consultants",
              "Staffing Partners",
            ].map((rel, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-center hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-2">
                  <UserCheck size={16} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">{rel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: RECRUITMENT CHALLENGES WE HELP SOLVE */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-16">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Recruitment Obstacles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Recruitment Challenges We Help Solve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Candidate Information Scattered",
                desc: "Candidate profiles, resumes, and skill sets can become difficult to locate when stored across multiple spreadsheets.",
              },
              {
                num: "02",
                title: "Client Follow-Ups",
                desc: "Recruitment agencies need consistent follow-ups with corporate clients regarding open vacancies and candidate feedback.",
              },
              {
                num: "03",
                title: "Interview Tracking",
                desc: "Coordinating interview schedules, tracking candidate attendance, and logging interview feedback across rounds gets messy.",
              },
              {
                num: "04",
                title: "Job Requirement Management",
                desc: "Maintaining active job requirements, position descriptions, and client approval statuses across multiple hiring accounts.",
              },
              {
                num: "05",
                title: "Candidate Pipeline Visibility",
                desc: "Recruitment leaders need visibility into candidate progress through screening, shortlisting, interview, offer, and joining.",
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

      {/* SECTION: HR & RECRUITMENT CRM FEATURES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flipbox-fade-down">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Solution Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              HR & Recruitment CRM Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Candidate Management",
                desc: "Create centralized profiles storing contact details, skills, experience, resume files, qualification, job preferences, interview history, and application status.",
                icon: UserCheck,
              },
              {
                title: "Client Management",
                desc: "Manage hiring companies, key account managers, contract terms, billing rates, and ongoing client communication history.",
                icon: Building2,
              },
              {
                title: "Job Requirement Management",
                desc: "Create and manage job vacancies with required skills, experience levels, work locations, salaries, and hiring deadlines.",
                icon: Briefcase,
              },
              {
                title: "Recruitment Pipeline",
                desc: "Move candidates along a visual recruitment pipeline: New Candidate → Screening → Shortlisted → Interview → Selected → Joined.",
                icon: FileCheck,
              },
              {
                title: "Interview Management",
                desc: "Schedule interview rounds, send candidate reminders, log interviewer feedback, and track selection outcomes.",
                icon: Calendar,
              },
              {
                title: "Follow-Up Automation",
                desc: "Automate reminders for recruiters, candidate follow-up messages, and client feedback reminders.",
                icon: Clock,
              },
              {
                title: "Recruitment Reports & Analytics",
                desc: "Monitor candidates sourced, shortlisted, interviews conducted, selections, joining status, client requirements, and recruiter performance.",
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Candidate Profile Details Card */}
          <div className="bg-slate-50 border border-slate-200/90 p-6 rounded-2xl">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileText size={16} className="text-cyan-600" />
              <span>Comprehensive Candidate Profile Data Tracked</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Full Contact Details</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Skill Sets & Tags</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Total Experience</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Resume Attachments</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Qualifications</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Salary & Location Preferences</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Complete Interview History</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Application Status</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHO CAN USE THIS CRM? */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Who Can Use This CRM?
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              "Recruitment Agencies",
              "HR Consultants",
              "Staffing Companies",
              "Executive Search Firms",
              "Corporate Recruitment Teams",
              "Placement Consultants",
              "Talent Acquisition Teams",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center flex items-center justify-center gap-3 hover:border-blue-400 hover:bg-white transition-all"
              >
                <Award size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="space-y-4 newmrhomebox flipbox-section py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-y border-blue-100 text-center animate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Build a More Organized Recruitment Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Give your recruitment team one place to manage candidates, clients and hiring opportunities.
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
              <span>Talk to Our CRM Experts</span>
            </button>
          </div>
        </div>
      </section>

      {/* COMMON SECTION: WHY CHOOSE INZOVATE */}

      {/* LEAD GENERATION FORM */}
      <CrmLeadForm defaultIndustry="HR & Recruitment" pageTitle="HR & Recruitment CRM" />

      {/* FAQ SECTION */}
      <CrmFaqSection industryFaqs={hrFaqs} />
    </div>
  );
}
