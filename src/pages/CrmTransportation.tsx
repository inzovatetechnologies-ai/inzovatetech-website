import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Users,
  FileText,
  Calendar,
  BarChart3,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Globe2,
  Boxes,
  ShieldCheck,
  Building,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const transportationFaqs: FaqItem[] = [
  {
    question: "Can we manage rate contracts and spot freight quotations in the CRM?",
    answer: "Yes, our Transportation CRM supports both long-term rate contract accounts and one-off spot freight inquiries with quotation tracking."
  },
  {
    question: "Does the CRM help manage repeat logistics clients and recurring shipping contracts?",
    answer: "Yes. Account management features maintain full client shipping history, automated contract renewal alerts, and key account manager assignments."
  },
  {
    question: "Can multiple sales offices across different cities use the same CRM?",
    answer: "Yes. Built for multi-branch transport operators, reps across different locations can access centralized lead queues while maintaining branch-level security controls."
  },
  {
    question: "Does the CRM integrate with freight management or ERP accounting software?",
    answer: "Yes, via REST APIs we connect with billing software, fleet management systems, and accounting platforms like Tally or Zoho Books."
  }
];

export default function CrmTransportation() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="CRM for Transportation & Logistics | Manage Customers & Leads"
        description="Improve transportation and logistics sales with CRM software for managing customers, enquiries, quotations, follow-ups, accounts and business relationships."
        canonicalUrl="https://inzovate-technologies.com/crm-for-transportation"
        keywords="CRM for transportation, logistics CRM software, freight forwarder lead CRM, trucking customer management, fleet sales software"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "CRM Solutions", url: "https://inzovate-technologies.com/crm-by-industry" },
          { name: "CRM for Transportation", url: "https://inzovate-technologies.com/crm-for-transportation" }
        ]}
        faqs={transportationFaqs}
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
                CRM for Transportation & Logistics
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                Manage Customers, Enquiries, Quotations & Business Relationships
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Build stronger customer relationships and streamline your transportation sales process with a CRM designed for logistics, transport and fleet-based businesses.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Centralize customer information, enquiries, quotations, follow-ups and business opportunities.
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
                  Talk to a CRM Expert
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      <Truck size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Logistics Sales Overview</h4>
                      <p className="text-xs text-slate-400">Freight & Fleet Accounts</p>
                    </div>
                  </div>
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full font-semibold border border-cyan-500/30">
                    Active
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Pending Freight Quotations", value: "38 Quotes", color: "text-blue-400" },
                    { label: "Key Enterprise Accounts", value: "124 Clients", color: "text-cyan-400" },
                    { label: "Monthly Contract Renewals", value: "18 Accounts", color: "text-purple-400" },
                    { label: "Active Lead Pipelines", value: "₹85.2 Lakhs", color: "text-emerald-400" },
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

      {/* SECTION: SIMPLIFY TRANSPORTATION CUSTOMER MANAGEMENT */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Simplify Transportation Customer Management
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Transportation companies work with multiple customers, vendors, business partners and recurring clients.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
            Our CRM helps teams maintain customer information, track freight enquiries, and manage business opportunities from one centralized platform.
          </p>
        </div>
      </section>

      {/* SECTION: COMMON TRANSPORTATION BUSINESS CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flipbox-fade-down">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Industry Bottlenecks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Common Transportation Business Challenges
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Customer Data Scattered Across Systems",
                desc: "Customer information may exist in Excel files, emails, WhatsApp conversations and accounting software.",
              },
              {
                num: "02",
                title: "Missed Business Opportunities",
                desc: "Without structured lead tracking, potential shipping clients and spot rate inquiries can easily be forgotten.",
              },
              {
                num: "03",
                title: "Quotation Follow-Ups",
                desc: "Transport quotations often require multiple follow-ups, price negotiations, and margin approvals.",
              },
              {
                num: "04",
                title: "Recurring Customers",
                desc: "Businesses need an organized way to maintain ongoing relationships with high-frequency repeat shippers.",
              },
              {
                num: "05",
                title: "Multiple Sales Representatives",
                desc: "Management needs full visibility into each representative's assigned leads, spot quotes, and daily activities.",
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

      {/* SECTION: TRANSPORTATION CRM FEATURES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flipbox-fade-down">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Solution Modules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Transportation CRM Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Customer Management",
                desc: "Store complete customer profiles, business details, shipping requirements and full interaction history.",
                icon: Users,
              },
              {
                title: "Lead Management",
                desc: "Capture new business enquiries from website forms, emails and phone calls and assign them instantly to sales teams.",
                icon: Package,
              },
              {
                title: "Quotation Tracking",
                desc: "Manage spot freight quotation requests, pricing negotiations, rate approvals and client follow-ups.",
                icon: FileText,
              },
              {
                title: "Customer Follow-Ups",
                desc: "Set automated reminders for calls, meetings, quotation follow-ups and annual contract renewals.",
                icon: Calendar,
              },
              {
                title: "Sales Pipeline",
                desc: "Track freight opportunities through customized sales stages built for logistics workflows.",
                icon: BarChart3,
              },
              {
                title: "Account Management",
                desc: "Maintain strong, structured relationships with recurring shippers and high-value key corporate accounts.",
                icon: RotateCcw,
              },
              {
                title: "Communication History",
                desc: "Keep all customer call logs, email threads, and WhatsApp discussions neatly organized under each account.",
                icon: Globe2,
              },
              {
                title: "Sales Analytics",
                desc: "Monitor new leads, active opportunities, won/lost deals, sales rep performance, lead sources, and revenue opportunities.",
                icon: Boxes,
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

          {/* Detailed Sales Analytics Bullet Box */}
          <div className="bg-slate-50 border border-slate-200/90 p-6 rounded-2xl">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <BarChart3 size={16} className="text-cyan-600" />
              <span>Real-Time Sales Analytics Metrics Tracked</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> New freight leads</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Active shipping opportunities</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Won vs lost deals</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Sales rep performance</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Lead channel attribution</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Revenue opportunities</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Contract renewal rates</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600" /> Customer lifetime value</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SUITABLE FOR */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Suitable For Transportation Businesses
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              "Transport Companies",
              "Logistics Companies",
              "Freight Forwarders",
              "Fleet Operators",
              "Courier Companies",
              "Trucking Companies",
              "Cargo & Distribution Businesses",
              "Transportation Service Providers",
              "3PL Companies",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center flex items-center justify-center gap-3 hover:border-blue-400 hover:bg-white transition-all"
              >
                <Truck size={18} className="text-blue-400 flex-shrink-0" />
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
            Turn Transportation Enquiries Into Long-Term Customers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Build a structured sales process and give your team better visibility into every business opportunity.
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
              <span>Get Your Transportation CRM Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* COMMON SECTION: WHY CHOOSE INZOVATE */}

      {/* LEAD GENERATION FORM */}
      <CrmLeadForm defaultIndustry="Transportation" pageTitle="Transportation CRM" />

      {/* FAQ SECTION */}
      <CrmFaqSection industryFaqs={transportationFaqs} />
    </div>
  );
}
