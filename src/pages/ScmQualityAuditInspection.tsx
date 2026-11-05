import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ClipboardCheck,
  FileSpreadsheet,
  FileWarning,
  Award,
  Layers,
  SearchCheck,
  BadgeAlert,
  Scale,
  Microscope,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const qualityFaqs: FaqItem[] = [
  {
    question: "How does the system handle inbound gate inspections and sampling plans?",
    answer: "When trucks arrive, the gate clerk creates an inspection task. The system automatically enforces Acceptable Quality Limit (AQL) statistical sampling tables (MIL-STD-105E / ISO 2859) based on batch size and inspection severity levels."
  },
  {
    question: "What happens when an inbound batch fails quality inspection?",
    answer: "Failed goods are automatically flagged as 'Quarantine Stock' preventing stock entry into the general warehouse. The system generates a Non-Conformance Report (NCR) and triggers an automated Debit Note against the supplier's pending invoice."
  },
  {
    question: "Does the platform support Corrective and Preventive Action (CAPA) tracking?",
    answer: "Yes, you can initiate digital CAPA workflows directly from an inspection failure, assign root cause investigation tasks (5-Why, Fishbone) to suppliers, and track preventive action verification."
  },
  {
    question: "Can quality inspectors record measurements on mobile tablets?",
    answer: "Yes, inspectors use a touch-friendly mobile interface with pre-configured parameter ranges (dimensions, tolerances, visual defects), photo attachments, and pass/fail thresholds."
  }
];

export default function ScmQualityAuditInspection() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Quality Audit & Inspection Software | Inbound QC & CAPA Management"
        description="Enforce inbound gate inspections, AQL sampling standards, Non-Conformance Reports (NCR), CAPA workflows and supplier quality tracking with Inzovate Quality Management."
        canonicalUrl="https://inzovate-technologies.com/scm-quality-audit-inspection"
        keywords="quality audit software, inbound inspection software, quality control ERP, non-conformance report NCR software, CAPA management software, supplier quality audit system"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "SCM Platform", url: "https://inzovate-technologies.com/products/scm" },
          { name: "Quality Audit & Inspection", url: "https://inzovate-technologies.com/scm-quality-audit-inspection" }
        ]}
        faqs={qualityFaqs}
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
                Quality Audit & Inspection Management
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-emerald-700">
                Inbound Gate Inspections, AQL Sampling, Quarantine & Automated NCRs
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Protect production lines and customer satisfaction by catching substandard raw materials before they enter inventory. Enforce mandatory parameter testing, manage quarantined stock, automate supplier debit notes, and track corrective actions (CAPA).
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Attain 99.8% compliance adherence, eliminate material rejection delays, and build an airtight quality audit trail certified for ISO and statutory regulatory standards.
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
                  className="px-8 py-4 bg-white hover:bg-slate-100 text-black border border-slate-300 font-bold rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  Book a Quality Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Quality Assurance Console</h4>
                      <p className="text-xs text-slate-400">Live Inbound Audit Stats</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Active QC Desk
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Shipments Inspected Today", value: "142 Consignments", color: "text-emerald-400" },
                    { label: "First-Time Acceptance Rate", value: "99.1% Passed", color: "text-blue-400" },
                    { label: "Active Quarantined Batches", value: "3 Containments", color: "text-amber-400" },
                    { label: "Auto Debit Notes Issued", value: "₹1.84 Lakhs", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Sampling Standard Compliance</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> ISO 2859 / AQL Level II Enforced
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR HIGH-PRECISION QUALITY OPERATIONS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Manufacturing, Pharma, Automotive & Heavy Engineering
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              When suppliers deliver flawed components, failing to intercept them at inbound docks results in wasted factory hours, broken tooling, and catastrophic customer recalls.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate Quality Audit digitizes testing protocols, automatically isolates non-conforming items, and holds suppliers accountable through transparent digital scorecards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "AQL statistical sampling",
              "Inbound gate inspection forms",
              "Parameter tolerance checks",
              "Quarantine warehouse mapping",
              "Non-conformance reports (NCR)",
              "Digital CAPA investigation",
              "Automated supplier debit notes",
              "Certificate of Analysis (COA) uploads",
              "Calibration schedule tracker",
              "Complete audit trail logs",
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-slate-50 p-4 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all flex items-start gap-3 flipbox-fade-down flipbox-delay-${(idx % 5) + 1}`}
              >
                <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: QUALITY CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Quality Vulnerabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Inspection Risks Eliminated by Our Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Flawed Materials Slipping In",
                desc: "Rushed warehouse teams skip rigorous testing, allowing defective parts into general inventory and downstream assemblies.",
              },
              {
                num: "02",
                title: "Manual Paper Checklists Lost",
                desc: "Paper inspection sheets get misplaced, leaving zero historical records during external ISO or regulatory compliance audits.",
              },
              {
                num: "03",
                title: "Lack of Quarantined Isolation",
                desc: "Defective batches sit in active warehouse aisles where workers accidentally pick them for production orders.",
              },
              {
                num: "04",
                title: "Delayed Supplier Debit Notes",
                desc: "Finance pays vendor invoices in full because quality rejections fail to synchronize automatically with accounts payable.",
              },
              {
                num: "05",
                title: "Incomplete CAPA Root Causes",
                desc: "Suppliers repeatedly send bad batches because non-conformances lack structured 5-Why or Fishbone root cause follow-ups.",
              },
              {
                num: "06",
                title: "Subjective Visual Inspections",
                desc: "Inspectors lack standardized dimensional limits or visual defect references, leading to inconsistent pass/fail decisions.",
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

      {/* SECTION: MODULES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 flipbox-fade-down">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Quality Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              End-to-End Quality Inspection Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AQL Statistical Sampling Calculator",
                desc: "Automatically determine sample sizes based on lot quantities, inspection levels, and acceptable defect limits (Critical, Major, Minor).",
                icon: Microscope,
              },
              {
                title: "Digital Inbound Inspection Checklists",
                desc: "Empower QC staff with mobile checklists featuring min/max tolerance inputs, visual references, and photo capture.",
                icon: ClipboardCheck,
              },
              {
                title: "Quarantine Warehouse Containment",
                desc: "Automatically route failed goods to quarantined inventory bins with system locks preventing sales reservations or consumption.",
                icon: Shield,
              },
              {
                title: "Non-Conformance Report (NCR) Engine",
                desc: "Generate detailed NCR documents documenting batch numbers, defects found, and severity levels with instant notifications to suppliers.",
                icon: FileWarning,
              },
              {
                title: "Closed-Loop CAPA Workflows",
                desc: "Track supplier corrective actions, root cause investigations, implementation deadlines, and preventive verification audits.",
                icon: SearchCheck,
              },
              {
                title: "Auto-Debit Notes & Supplier Ratings",
                desc: "Issue immediate debit notes to accounts payable for rejected stock and automatically update vendor quality performance ratings.",
                icon: Scale,
              },
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-${(idx % 3) + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <CrmFaqSection
        title="Frequently Asked Questions - Quality Audit & Inspection SCM"
        industryFaqs={qualityFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Quality Assurance & SCM"
          pageTitle="SCM Quality Audit & Inspection"
        />
      </div>
    </div>
  );
}
