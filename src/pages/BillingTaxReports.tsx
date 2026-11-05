import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Calculator,
  PieChart,
  FileCheck2,
  Scale,
  FileText,
  BadgeDollarSign,
  DownloadCloud,
  FileStack,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const taxReportFaqs: FaqItem[] = [
  {
    question: "How does Inzovate generate GSTR-1 and GSTR-3B tax returns?",
    answer: "The system automatically aggregates sales invoices, credit notes, export LUT declarations, and HSN summaries into official GST portal-ready JSON files. You can upload the payload directly to the government portal with zero manual re-entry."
  },
  {
    question: "Can we automatically reconcile purchase invoices against GSTR-2B for Input Tax Credit (ITC)?",
    answer: "Yes, import your monthly GSTR-2B JSON or Excel file from the GST portal. The system matches supplier GSTIN, invoice numbers, dates, and tax values, highlighting missing bills or ineligible ITC before you file."
  },
  {
    question: "Does the platform generate real-time Profit & Loss (P&L) and Balance Sheet reports?",
    answer: "Absolutely. Real-time general ledger postings ensure your P&L statement, trial balance, and balance sheet are updated dynamically with every sales invoice and expense voucher."
  },
  {
    question: "Are tax reports compliant with statutory audit requirements and CA reviews?",
    answer: "Yes, all reports feature complete drill-down audit trails from summarized totals down to underlying journal vouchers, supporting easy exports to Excel, PDF, and CA accounting packages."
  }
];

export default function BillingTaxReports() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Financial & GST Tax Reports Software | GSTR-1, GSTR-3B & P&L Ledgers"
        description="Generate audit-ready GSTR-1, GSTR-3B, GSTR-2B ITC reconciliations, real-time P&L and Balance Sheet reports with Inzovate Financial Tax Reporting Software."
        canonicalUrl="https://inzovate-technologies.com/billing-tax-reports"
        keywords="GST tax reports software, GSTR-1 JSON export, GSTR-3B tax software, GSTR-2B ITC reconciliation, financial profit loss software, audit trail ledger software"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "Billing & Invoicing", url: "https://inzovate-technologies.com/products/billing" },
          { name: "Financial Tax Reports", url: "https://inzovate-technologies.com/billing-tax-reports" }
        ]}
        faqs={taxReportFaqs}
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
                Financial Tax Reports & P&L Ledgers
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                1-Click GSTR-1, GSTR-3B Payloads, ITC Reconciliation & Audit Statements
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Take the stress out of tax filing and corporate audits. Automatically generate verified GSTR-1 and GSTR-3B tax summaries, reconcile input tax credit against GSTR-2B, and view live P&L statements with drill-down general ledger visibility.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Eliminate tax filing penalties, ensure 100% input tax credit recovery, and provide your chartered accountants with pristine, audit-ready financial statements.
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
                  Book a Tax Suite Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <BarChart3 size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Tax & Audit Command Deck</h4>
                      <p className="text-xs text-slate-400">Live Statutory Health</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Filing Ready
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "GSTR-1 JSON Payload Status", value: "Validated (0 Errors)", color: "text-emerald-400" },
                    { label: "Reconciled GSTR-2B Input Tax Credit", value: "₹18.42 Lakhs", color: "text-blue-400" },
                    { label: "Net Profit Margin (This Quarter)", value: "24.8% EBITDA", color: "text-cyan-400" },
                    { label: "Audit Ledger Drilldown History", value: "100% Logged", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Input Tax Credit (ITC) Match Rate</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> 99.6% Matched Clean
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR ACCURATE COMPLIANCE */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for CFOs, Chartered Accountants & Finance Controllers
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              When tax returns are assembled manually from scattered spreadsheets, minor transcription errors lead to expensive GST notices, delayed refunds, and stressful audits.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate Financial Tax Reports continuously synchronizes transactions into audit-proof ledgers, delivering 1-click tax filings and live corporate profitability analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "1-click GSTR-1 JSON export",
              "GSTR-3B auto-computation",
              "GSTR-2B ITC reconciliation",
              "Real-time P&L statement",
              "Dynamic balance sheet",
              "TDS & TCS deduction ledger",
              "HSN / SAC summary report",
              "Expense & cost center reports",
              "CA audit Excel export",
              "Tamper-proof audit trails",
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

      {/* SECTION: TAX CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Compliance Vulnerabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Tax Reporting Roadblocks We Solve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Missed Input Tax Credit (ITC)",
                desc: "Companies lose lakhs in unclaimed tax credits because they cannot reconcile vendor bills against government GSTR-2B filings.",
              },
              {
                num: "02",
                title: "Slow Month-End Tax Assembly",
                desc: "Accountants spend days manually collating sales data, debit notes, and HSN codes into government return spreadsheets.",
              },
              {
                num: "03",
                title: "Delayed Financial Statements",
                desc: "Leadership makes decisions based on outdated reports because P&L and Balance Sheet figures take weeks to compile.",
              },
              {
                num: "04",
                title: "GSTIN & HSN Validation Errors",
                desc: "Filing rejections occur when customer GSTINs or product HSN codes contain typographical errors or invalid digit lengths.",
              },
              {
                num: "05",
                title: "Unorganized Audit Trails",
                desc: "Statutory auditors struggle to trace summarized tax line items back to source delivery notes and journal vouchers.",
              },
              {
                num: "06",
                title: "TDS / TCS Compliance Gaps",
                desc: "Failing to calculate and deduct withholding tax (TDS) on applicable vendor payments leads to legal interest penalties.",
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

      {/* SECTION: CAPABILITIES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 flipbox-fade-down">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Reporting Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              End-to-End Tax & Financial Reporting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Official GSTR-1 JSON Generator",
                desc: "Generate validated JSON files containing B2B, B2C, export LUT, credit note, and HSN summaries ready for 1-click portal upload.",
                icon: FileCheck2,
              },
              {
                title: "Automated GSTR-3B Tax Worksheet",
                desc: "Auto-populate outward tax liabilities, eligible ITC balances, reverse charges, and inter-state supplies with zero math errors.",
                icon: Calculator,
              },
              {
                title: "GSTR-2B Smart ITC Reconciler",
                desc: "Auto-match purchase invoices against government 2B feeds, pinpointing unfiled vendor invoices and maximizing tax claims.",
                icon: Scale,
              },
              {
                title: "Real-Time Profit & Loss (P&L)",
                desc: "View dynamic gross and net profit margins by business unit, product vertical, or customer segment updated with every transaction.",
                icon: PieChart,
              },
              {
                title: "Statutory Balance Sheet & Trial Balance",
                desc: "Generate balanced financial statements with automated asset depreciation schedules and liability ledgers.",
                icon: FileStack,
              },
              {
                title: "Chartered Accountant Audit Package",
                desc: "Export pre-formatted Excel ledgers, journal vouchers, and tax summaries specifically formatted for CA and statutory reviews.",
                icon: DownloadCloud,
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
        title="Frequently Asked Questions - Financial Tax Reports"
        industryFaqs={taxReportFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Taxation & Corporate Accounting"
          pageTitle="Financial Tax Reports Software"
        />
      </div>
    </div>
  );
}
