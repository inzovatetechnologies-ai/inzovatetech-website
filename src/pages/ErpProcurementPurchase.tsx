import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers,
  Building2,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Users,
  BadgeDollarSign,
  ClipboardCheck,
  FileCheck2,
  SlidersHorizontal,
  Handshake,
  Truck,
  Scale,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const procurementFaqs: FaqItem[] = [
  {
    question: "How does the automated 3-way matching process work in Inzovate ERP?",
    answer: "When a vendor invoice arrives, the ERP automatically cross-checks line item quantities and prices against the original Purchase Order (PO) and the physical Goods Received Note (GRN). Any pricing or quantity deviation is flagged for approval before payment."
  },
  {
    question: "Can we manage multi-vendor Request for Quotations (RFQs) and compare bids?",
    answer: "Yes, you can issue RFQs to multiple suppliers with one click. Supplier bids can be submitted through our Vendor Portal, and the system automatically generates a side-by-side comparative matrix highlighting best pricing, delivery timelines, and terms."
  },
  {
    question: "Does the system support tiered purchase approval workflows?",
    answer: "Yes, you can configure multi-level authorization rules based on PO value, department, or product category (e.g., manager approval up to ₹1 Lakh, director sign-off above ₹5 Lakhs)."
  },
  {
    question: "How do vendor rating and performance scorecards help procurement teams?",
    answer: "The ERP evaluates suppliers based on on-time delivery rates, quality inspection pass percentages, and billing accuracy, helping your team negotiate better terms and select top-performing vendors."
  }
];

export default function ErpProcurementPurchase() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="ERP Procurement & Purchase Management System | RFQs, POs & 3-Way Match"
        description="Streamline strategic sourcing, vendor RFQ bidding, automated purchase orders, GRN verification and 3-way invoice matching with Inzovate ERP Procurement Management."
        canonicalUrl="https://inzovate-technologies.com/erp-procurement-purchase"
        keywords="ERP procurement software, purchase order management, vendor RFQ software, 3-way matching ERP, goods received note GRN software, supplier portal ERP"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "ERP Solutions", url: "https://inzovate-technologies.com/products/erp" },
          { name: "Procurement & Purchase", url: "https://inzovate-technologies.com/erp-procurement-purchase" }
        ]}
        faqs={procurementFaqs}
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
                ERP Procurement & Purchase Management
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                Automate Vendor RFQs, Purchase Orders, GRNs & 3-Way Invoice Matching
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Transform corporate purchasing into a competitive advantage. Automate purchase requisitions, compare supplier quotes side-by-side, enforce multi-tier approvals, and eliminate billing discrepancies before payment.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Eliminate maverick spend, cut sourcing cycle times by 40%, and build resilient supplier partnerships with transparent vendor performance scorecards.
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
                  Book a Procurement Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Procurement Control Tower</h4>
                      <p className="text-xs text-slate-400">Live Sourcing Pipeline</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Active RFQs
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Active Purchase Requisitions", value: "38 Open PRs", color: "text-blue-400" },
                    { label: "Total Open Purchase Orders", value: "₹64.2 Lakhs", color: "text-cyan-400" },
                    { label: "Pending GRN Inspections", value: "9 Consignments", color: "text-amber-400" },
                    { label: "3-Way Match Verification Rate", value: "99.1% Matched", color: "text-emerald-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Average Sourcing Cycle Reduction</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> -42% Faster
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR MODERN PROCUREMENT OPERATIONS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Modern Sourcing & Supply Chain Operations
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Procuring raw materials, components, and enterprise services requires tight cross-departmental coordination between stores, engineering, purchasing, and finance.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate ERP connects the entire procurement journey—from initial requisition to quote bidding, quality inspection at the gate, and final vendor payment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Purchase requisition workflows",
              "Multi-vendor RFQ bidding",
              "Bid comparison matrices",
              "Tiered PO authorization",
              "Goods received notes (GRN)",
              "Inbound quality inspection",
              "Automated 3-way matching",
              "Vendor performance rating",
              "Blanket purchase agreements",
              "Supplier self-service portal",
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

      {/* SECTION: COMMON PURCHASING FRICTIONS */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Procurement Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Challenges Eliminated by Procurement ERP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Uncontrolled Maverick Spend",
                desc: "Departments procure goods outside contracted rates or approved vendor lists, eroding corporate budget caps.",
              },
              {
                num: "02",
                title: "Tedious Email-Based RFQs",
                desc: "Purchasers waste days gathering supplier PDF quotes and manually compiling spreadsheets to compare rates.",
              },
              {
                num: "03",
                title: "Invoice Mismatch Disputes",
                desc: "Discrepancies between billed amounts, ordered quantities, and received stocks lead to delayed payments and vendor friction.",
              },
              {
                num: "04",
                title: "Delayed PO Sign-Offs",
                desc: "Paper-based or email approval chains stall critical manufacturing purchases, halting production runs.",
              },
              {
                num: "05",
                title: "Quality Rejection Blind Spots",
                desc: "Faulty inbound stock is accepted without mandatory gate quality inspection checks or debit note triggers.",
              },
              {
                num: "06",
                title: "Lack of Vendor Accountability",
                desc: "No historical data on which vendors consistently deliver late or charge hidden price increments.",
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

      {/* SECTION: CORE MODULES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 flipbox-fade-down">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Module Deep Dive
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              End-to-End Procurement Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Purchase Requisition & Approvals",
                desc: "Convert internal department requests into formal PRs with automated budget verification and multi-level manager approvals.",
                icon: FileText,
              },
              {
                title: "Digital RFQ & Quotation Matrix",
                desc: "Broadcast RFQs to pre-qualified suppliers and generate automated side-by-side matrices comparing landing costs and delivery times.",
                icon: Scale,
              },
              {
                title: "Automated Purchase Order Creation",
                desc: "Generate professional POs with standardized terms, payment milestones, tax breakdowns, and automated email dispatch.",
                icon: FileCheck2,
              },
              {
                title: "GRN & Gate Quality Inspection",
                desc: "Log physical delivery against POs, capture quality inspection checklists, and automatically trigger debit notes for damaged goods.",
                icon: ClipboardCheck,
              },
              {
                title: "Automated 3-Way Match Engine",
                desc: "Reconcile POs, GRNs, and vendor bills automatically. Send approved invoices straight to accounts payable without manual audits.",
                icon: ShieldCheck,
              },
              {
                title: "Vendor Scorecard & Performance Rating",
                desc: "Track supplier KPIs on OTIF delivery, price competitiveness, and product quality to drive smarter sourcing decisions.",
                icon: Handshake,
              },
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-${(idx % 3) + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
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
        title="Frequently Asked Questions - Procurement & Purchase ERP"
        industryFaqs={procurementFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Procurement & Sourcing"
          pageTitle="ERP Procurement & Purchase"
        />
      </div>
    </div>
  );
}
