import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  CreditCard,
  Target,
  Bell,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Building,
  Newspaper,
  GraduationCap,
  FileText,
  Bookmark,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";

const publishingFaqs: FaqItem[] = [
  {
    question: "How does the CRM manage author submissions and manuscript stages?",
    answer: "Our Publishing CRM tracks author details, manuscript submissions, review stages, approval status, contracts, and communication history in one unified dashboard."
  },
  {
    question: "Can we handle print and digital magazine subscriptions in the CRM?",
    answer: "Yes, you can track customer subscription plans, renewal dates, automated payment reminders, and dispatch histories for both print publications and digital subscriptions."
  },
  {
    question: "Does the CRM support advertising sales for publishing houses?",
    answer: "Yes, it includes specialized pipelines for managing ad space sales, rate cards, media kits, contract negotiations, and advertiser renewal follow-ups."
  },
  {
    question: "Can educational book publishers track institutional sales leads?",
    answer: "Absolutely. The CRM allows sales representatives to track school, college, and library book adoption leads from initial enquiry to sample delivery and bulk order closing."
  }
];

export default function CrmPublishing() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="CRM for Publishing Companies | Manage Leads, Authors & Subscriptions"
        description="Streamline publishing sales, author relationships, subscriptions, enquiries and follow-ups with a powerful CRM solution designed for publishing businesses."
        canonicalUrl="https://inzovate-technologies.com/crm-for-publishing"
        keywords="CRM for publishing, publishing software, author management CRM, magazine subscription CRM, advertising lead tracking publishing"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "CRM Solutions", url: "https://inzovate-technologies.com/crm-by-industry" },
          { name: "CRM for Publishing", url: "https://inzovate-technologies.com/crm-for-publishing" }
        ]}
        faqs={publishingFaqs}
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
                CRM for Publishing Companies
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                Manage Authors, Leads, Subscriptions & Publishing Relationships in One Place
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Build stronger relationships with authors, advertisers, subscribers, distributors and business partners with a CRM designed for the publishing industry.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                From enquiry management and author onboarding to subscription follow-ups and sales tracking, simplify your publishing operations with one centralized platform.
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
                  Book a Free Consultation
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Publishing Sales Dashboard</h4>
                      <p className="text-xs text-slate-400">Live Pipeline Metrics</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Active
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Author Manuscripts Pending", value: "48", color: "text-blue-400" },
                    { label: "Active Ad Enquiries", value: "₹12.4 Lakhs", color: "text-cyan-400" },
                    { label: "Subscription Renewals Due", value: "1,240 Accounts", color: "text-emerald-400" },
                    { label: "Institutional Book Orders", value: "32 Deals", color: "text-purple-400" },
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

      {/* SECTION: BUILT FOR MODERN PUBLISHING BUSINESSES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Modern Publishing Businesses
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Publishing businesses manage multiple relationships every day—authors, contributors, advertisers, subscribers, educational institutions, distributors and corporate clients.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Managing these relationships through spreadsheets, emails and multiple applications can lead to missed follow-ups, duplicate records and lost opportunities. Our Publishing CRM helps bring your customer and business relationship data into one organized system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Author and contributor relationships",
              "Subscriber information",
              "Advertising enquiries",
              "Corporate clients",
              "Distribution partners",
              "Book sales leads",
              "Subscription enquiries",
              "Follow-ups and communications",
              "Sales pipelines",
              "Customer support requests",
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-slate-50 p-4 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all flex items-start gap-3 flipbox-fade-down flipbox-delay-${(idx % 5) + 1}`}
              >
                <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: COMMON CHALLENGES IN PUBLISHING */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-16">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Industry Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Common Challenges in Publishing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Scattered Customer Information",
                desc: "Customer and author information may be stored across spreadsheets, emails and different systems, making it hard to maintain a single source of truth.",
              },
              {
                num: "02",
                title: "Missed Follow-Ups",
                desc: "Sales teams can lose track of author enquiries, subscription renewals, and high-value advertising opportunities without automated reminders.",
              },
              {
                num: "03",
                title: "Difficult Subscription Management",
                desc: "Tracking subscription enquiries, renewal schedules, and customer interactions manually becomes overwhelmingly complicated at scale.",
              },
              {
                num: "04",
                title: "Limited Sales Visibility",
                desc: "Management may not have a clear view of incoming leads, author pipelines, advertising opportunities, or conversion rates.",
              },
              {
                num: "05",
                title: "Multiple Stakeholders",
                desc: "Publishing involves authors, editors, advertisers, subscribers, distributors, and corporate partners, making relationship management complex.",
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

      {/* SECTION: HOW OUR PUBLISHING CRM HELPS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flipbox-fade-down">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Solution Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              How Our Publishing CRM Helps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Author Relationship Management",
                desc: "Maintain organized author profiles, communication history, submissions, contracts and follow-up activities in one central portal.",
                icon: BookOpen,
              },
              {
                title: "Subscription Management",
                desc: "Track subscription enquiries, renewals, customer interactions and service requests automatically.",
                icon: CreditCard,
              },
              {
                title: "Advertising Lead Management",
                desc: "Capture advertising enquiries from brands and agencies and move them through a structured sales pipeline.",
                icon: Target,
              },
              {
                title: "Lead & Enquiry Management",
                desc: "Capture enquiries automatically from websites, email campaigns, trade shows and other marketing channels.",
                icon: Users,
              },
              {
                title: "Follow-Up Automation",
                desc: "Schedule reminders and automate follow-up activities so no author or subscriber is ever neglected.",
                icon: Bell,
              },
              {
                title: "Sales Pipeline & Analytics",
                desc: "Monitor opportunities from initial enquiry to quotation, negotiation, and conversion with executive reports.",
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
        </div>
      </section>

      {/* SECTION: KEY FEATURES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Key System Features
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "Lead management",
              "Author management",
              "Subscriber management",
              "Contact management",
              "Opportunity tracking",
              "Advertising enquiry management",
              "Subscription tracking",
              "Follow-up reminders",
              "Email integration",
              "Task management",
              "Sales pipeline",
              "Custom dashboards",
              "Reports and analytics",
              "Role-based access",
              "Workflow automation",
              "Mobile-friendly access",
            ].map((feat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-400 transition-all"
              >
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHO CAN USE IT? */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Who Can Use It?
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              "Book Publishers",
              "Magazine Publishers",
              "Newspaper Publishers",
              "Digital Publishers",
              "Academic Publishers",
              "Educational Publishers",
              "Journal Publishers",
              "Media & Publishing Houses",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-5 rounded-2xl text-center flex flex-col items-center justify-center hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  <Bookmark size={20} />
                </div>
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
            Turn Publishing Relationships Into Long-Term Business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you manage hundreds of authors or thousands of subscribers, a centralized CRM can help your team organize relationships and improve follow-up efficiency.
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
      <CrmLeadForm defaultIndustry="Publishing" pageTitle="Publishing CRM" />

      {/* FAQ SECTION */}
      <CrmFaqSection industryFaqs={publishingFaqs} />
    </div>
  );
}
