import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Receipt,
  Building2,
  CreditCard,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
  Coins,
  FileCheck,
  Sparkles,
  Calculator,
  Lock,
  Globe,
  PieChart,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const financeFaqs: FaqItem[] = [
  {
    question: "Does Inzovate ERP support GST compliance, e-invoicing, and GSTR report generation?",
    answer: "Yes, our Financial Management ERP includes built-in GST automation with 1-click GSTR-1, GSTR-2B, and GSTR-3B report generation, automatic tax ledger calculation, and direct e-invoicing/e-way bill integration."
  },
  {
    question: "How does automated bank reconciliation work in this system?",
    answer: "You can import bank statement feeds (CSV, MT940, API). The system automatically matches debits and credits against your Accounts Payable (AP) and Accounts Receivable (AR) ledgers, highlighting discrepancies for instant resolution."
  },
  {
    question: "Can we manage multi-currency ledgers and multi-entity branch accounts?",
    answer: "Yes, Inzovate ERP provides multi-company and multi-branch consolidation with automated currency exchange rate conversions, localized tax compliance, and inter-company debit/credit balancing."
  },
  {
    question: "How secure is financial data and who can view sensitive reports?",
    answer: "Our platform offers enterprise role-based access control (RBAC), multi-factor authentication, tamper-proof audit trails for every journal voucher, and 256-bit data encryption at rest and in transit."
  }
];

export default function ErpFinancialManagement() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="ERP Financial Management Software | General Ledger, AP/AR & GST Suite"
        description="Streamline corporate finance, general ledger, accounts payable, receivables, automated bank reconciliation and GST filings with Inzovate ERP Financial Management."
        canonicalUrl="https://inzovate-technologies.com/erp-financial-management"
        keywords="ERP financial management, general ledger software, accounts payable automation, accounts receivable ERP, GST accounting software, enterprise finance system"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "ERP Solutions", url: "https://inzovate-technologies.com/products/erp" },
          { name: "Financial Management", url: "https://inzovate-technologies.com/erp-financial-management" }
        ]}
        faqs={financeFaqs}
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
                ERP Financial Management Software
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                General Ledger, Accounts Payable, Receivables & Real-Time GST Control
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Take control of corporate finance with a unified general ledger, automated bank reconciliation, automated billing schedules, and real-time P&L reporting built for mid-market and enterprise operations.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Eliminate spreadsheet chaos and close monthly books faster with 100% tax compliance, audit-proof trails, and multi-currency cash flow forecasts.
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
                  Book a Finance Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Receipt size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">CFO Financial Console</h4>
                      <p className="text-xs text-slate-400">Live Fiscal Performance</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Live Audit Sync
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "General Ledger Net Balance", value: "₹4.82 Cr", color: "text-blue-400" },
                    { label: "Accounts Receivable (Due < 30 Days)", value: "₹42.8 Lakhs", color: "text-emerald-400" },
                    { label: "Accounts Payable (Scheduled Today)", value: "₹18.4 Lakhs", color: "text-cyan-400" },
                    { label: "GST Output Tax Liability (GSTR-3B)", value: "Reconciled 100%", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Bank Reconciliation Status</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> 99.4% Matched
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR MODERN ENTERPRISE ACCOUNTING */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Modern Corporate Accounting & Treasuries
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Managing high transaction volumes, multi-tax structures, vendor liabilities, and complex revenue schedules requires a bulletproof financial engine.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate ERP centralizes your financial data into a single source of truth, automating daily bookkeeping and delivering instant audit-ready financial statements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Real-time general ledger",
              "Automated accounts payable",
              "Accounts receivable aging",
              "Multi-currency banking",
              "Bank statement reconciliation",
              "GST, TDS & TCS reports",
              "Cost center & project P&L",
              "Fixed asset depreciation",
              "Cash flow forecasting",
              "Granular audit trails",
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

      {/* SECTION: COMMON FINANCIAL CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Operational Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Challenges Overcome by Financial ERP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Prolonged Month-End Close",
                desc: "Manual reconciliations between disparate banking, billing, and inventory sheets delay quarterly financial closures by weeks.",
              },
              {
                num: "02",
                title: "Overdue Accounts Receivable",
                desc: "Without automated payment reminders and dunning management, unpaid invoices drag down corporate working capital.",
              },
              {
                num: "03",
                title: "Tax & GST Mismatches",
                desc: "Discrepancies between purchase invoices and GSTR-2B cause input tax credit (ITC) blockages and tax penalties.",
              },
              {
                num: "04",
                title: "Duplicate & Fraudulent Vendor Payments",
                desc: "Lack of 3-way matching between purchase orders, delivery notes, and vendor bills leads to costly overpayments.",
              },
              {
                num: "05",
                title: "Opaque Cost Center Tracking",
                desc: "Management struggles to evaluate profit margins per department, subsidiary, or project without unified dimension tagging.",
              },
              {
                num: "06",
                title: "Audit Stress & Compliance Gaps",
                desc: "Unorganized physical paper trails and missing journal edit histories complicate external statutory and tax audits.",
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

      {/* SECTION: MODULE CAPABILITIES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 flipbox-fade-down">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Deep Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Core Financial Capabilities & Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time General Ledger",
                desc: "Multi-layered chart of accounts with automated journal posting, debit/credit validation, and instant trial balance generations.",
                icon: FileSpreadsheet,
              },
              {
                title: "Accounts Payable Automation",
                desc: "Capture supplier bills, perform 3-way matching, schedule batch payments, and capture early payment discounts.",
                icon: CreditCard,
              },
              {
                title: "Accounts Receivable & Dunning",
                desc: "Track client credit limits, automate recurring billing cycles, send digital payment links, and monitor aging brackets.",
                icon: Coins,
              },
              {
                title: "Statutory Tax & GST Suite",
                desc: "Auto-reconcile purchase records against GSTR-2B, generate GSTR-1 JSON payloads, and comply with e-way bill APIs.",
                icon: Calculator,
              },
              {
                title: "Multi-Entity Consolidation",
                desc: "Consolidate balance sheets and P&L across subsidiaries with automated inter-company transaction eliminations.",
                icon: Globe,
              },
              {
                title: "Forecasting & Cash Flow Analytics",
                desc: "Predict 30/60/90-day cash positions based on committed sales orders, purchase orders, and historical payment behaviors.",
                icon: TrendingUp,
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
        title="Frequently Asked Questions - Financial Management ERP"
        industryFaqs={financeFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Finance & Accounting"
          pageTitle="ERP Financial Management"
        />
      </div>
    </div>
  );
}
