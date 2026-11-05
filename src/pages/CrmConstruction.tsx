import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HardHat,
  Building2,
  MapPin,
  FileSpreadsheet,
  Calendar,
  Layers,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  Compass,
  Hammer,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const constructionFaqs: FaqItem[] = [
  {
    question: "Can our sales reps schedule and log site visits directly from mobile devices?",
    answer: "Yes, sales representatives can schedule site visits, capture client preferences on location, upload photos/notes, and update deal status right from their smartphone."
  },
  {
    question: "How does the CRM handle project quotation revisions and negotiations?",
    answer: "The CRM tracks every quotation version sent to the client, records price negotiations, logs approval history, and notifies managers when a quote is ready for final sign-off."
  },
  {
    question: "Can construction leads from housing portals and Facebook ads sync automatically?",
    answer: "Yes! Leads from your website, landline phone logs, Facebook/Google ads, and real estate portals sync directly into your Construction CRM pipeline."
  },
  {
    question: "Does the CRM support long sales cycles typical of infrastructure & commercial projects?",
    answer: "Yes. Custom sales pipelines allow you to define extended stages, automated monthly check-ins, and milestone follow-ups across 6-12 month sales cycles."
  }
];

export default function CrmConstruction() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="CRM for Construction Companies | Manage Leads, Projects & Clients"
        description="Manage construction leads, clients, projects, quotations, follow-ups and sales pipelines with a CRM built for construction companies and contractors."
        canonicalUrl="https://inzovate-technologies.com/crm-for-construction"
        keywords="CRM for construction, construction sales CRM, builder lead management, site visit tracking software, civil contractor CRM"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "CRM Solutions", url: "https://inzovate-technologies.com/crm-by-industry" },
          { name: "CRM for Construction", url: "https://inzovate-technologies.com/crm-for-construction" }
        ]}
        faqs={constructionFaqs}
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
                CRM for Construction Companies
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                Manage Construction Leads, Clients, Projects & Sales From One Platform
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Convert more enquiries into construction projects with a CRM designed for builders, contractors, developers and construction businesses.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Manage leads, site visits, quotations, client communications and follow-ups from a centralized platform.
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
                  Get a CRM Consultation
                </button>
              </div>
            </div>

            {/* Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <HardHat size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Construction Deal Pipeline</h4>
                      <p className="text-xs text-slate-400">Live Project Enquiries</p>
                    </div>
                  </div>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-semibold border border-blue-200">
                    Real-Time
                  </span>
                </div>

                {/* Pipeline visual steps */}
                <div className="space-y-2.5">
                  {[
                    { stage: "New Lead", count: "14 Enquiries", color: "bg-blue-50 border-blue-200 text-blue-700" },
                    { stage: "Site Visit Scheduled", count: "8 Inspections", color: "bg-cyan-50 border-cyan-200 text-cyan-700" },
                    { stage: "Quotation Sent", count: "₹4.8 Cr Pending", color: "bg-amber-50 border-amber-200 text-amber-700" },
                    { stage: "Negotiation / Contract", count: "3 Projects", color: "bg-purple-50 border-purple-200 text-purple-700" },
                    { stage: "Project Won", count: "Closed Deals", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                  ].map((p, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border ${p.color} flex items-center justify-between`}>
                      <span className="text-xs font-bold">{p.stage}</span>
                      <span className="text-xs font-semibold">{p.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: STOP MANAGING LEADS IN SPREADSHEETS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Stop Managing Construction Leads in Spreadsheets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Construction businesses handle enquiries from websites, phone calls, referrals, advertisements and property platforms. Without a centralized CRM, important information can easily get lost.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
            Our Construction CRM helps your sales and management teams track every opportunity from the first enquiry to project conversion with complete accountability.
          </p>
        </div>
      </section>

      {/* SECTION: CONSTRUCTION BUSINESS CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flipbox-fade-down">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Industry Bottlenecks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Construction Business Challenges
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Leads Coming From Multiple Sources",
                desc: "Website enquiries, phone calls, referrals and campaigns may not be tracked centrally, resulting in lost client details.",
              },
              {
                num: "02",
                title: "Missed Follow-Ups",
                desc: "Potential clients are lost because sales representatives forget to follow up on pending site visits or quotations.",
              },
              {
                num: "03",
                title: "Quotation Tracking",
                desc: "Managing multiple quotations manually makes it difficult to know which prospects are ready to proceed or need pricing revisions.",
              },
              {
                num: "04",
                title: "Site Visit Management",
                desc: "Teams struggle to log site visits, coordinate sales agent schedules, and record client site feedback effectively.",
              },
              {
                num: "05",
                title: "Long Sales Cycles",
                desc: "Construction deals can take weeks or months to close, requiring disciplined, structured follow-ups across long timelines.",
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

      {/* SECTION: CONSTRUCTION CRM FEATURES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flipbox-fade-down">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Construction CRM Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Lead Management",
                desc: "Capture and organize leads from websites, advertisements, phone calls, referrals and social campaigns.",
                icon: Building2,
              },
              {
                title: "Site Visit Management",
                desc: "Schedule site inspections and automatically assign them to field sales representatives.",
                icon: MapPin,
              },
              {
                title: "Customer Management",
                desc: "Maintain complete customer profiles, contact info, budget specifications, and full interaction history.",
                icon: ClipboardList,
              },
              {
                title: "Quotation Management",
                desc: "Track initial quotations, revisions, discount requests, negotiations, and final approval stages.",
                icon: FileCheck,
              },
              {
                title: "Follow-Up Automation",
                desc: "Create automated reminders and notifications for sales representatives before key lead milestones.",
                icon: Calendar,
              },
              {
                title: "Opportunity Pipeline",
                desc: "Track deals across custom stages: New Lead → Qualified → Site Visit → Quotation → Negotiation → Won/Lost.",
                icon: TrendingUp,
              },
              {
                title: "Project Enquiry Tracking",
                desc: "Maintain detailed enquiry requirements and site specifications before converting leads into active projects.",
                icon: Compass,
              },
              {
                title: "Sales Reports & Analytics",
                desc: "Analyze lead sources, conversion rates, sales representative performance, and pending opportunity values.",
                icon: Layers,
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
        </div>
      </section>

      {/* SECTION: IDEAL FOR */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Ideal For Construction Professionals
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              "Construction Companies",
              "Builders",
              "Civil Contractors",
              "Real Estate Developers",
              "Infrastructure Companies",
              "Interior Contractors",
              "Architects & Design Firms",
              "Property Development Companies",
              "Engineering Contractors",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center flex items-center justify-center gap-3 hover:border-blue-400 hover:bg-white transition-all"
              >
                <Hammer size={18} className="text-blue-600 flex-shrink-0" />
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
            Build a Better Construction Sales Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            From the first customer enquiry to project conversion, keep your entire sales process organized.
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
              <span>Get a CRM Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* COMMON SECTION: WHY CHOOSE INZOVATE */}

      {/* LEAD GENERATION FORM */}
      <CrmLeadForm defaultIndustry="Construction" pageTitle="Construction CRM" />

      {/* FAQ SECTION */}
      <CrmFaqSection industryFaqs={constructionFaqs} />
    </div>
  );
}
