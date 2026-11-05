import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Receipt,
  Building2,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  QrCode,
  FileText,
  BadgeDollarSign,
  Printer,
  FileSpreadsheet,
  Coins,
  Send,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const gstFaqs: FaqItem[] = [
  {
    question: "Does Inzovate Billing generate government-compliant E-Invoices with IRN and QR codes?",
    answer: "Yes, our billing platform integrates directly with the GST e-Invoicing portal (NIC/IRP) via secure APIs to generate instant Invoice Reference Numbers (IRN), signed QR codes, and digital digital signatures on every B2B invoice."
  },
  {
    question: "How does the system automate HSN/SAC codes and tax rate splits?",
    answer: "The platform maintains a master database of HSN/SAC codes. Based on your item catalog and the client's billing state, it automatically applies the correct CGST + SGST (intra-state) or IGST (inter-state) rates without manual calculation."
  },
  {
    question: "Can we generate integrated E-Way Bills directly from an invoice?",
    answer: "Yes! With one click, invoice details, vehicle transporter registration, and consignment distances sync to generate official government E-Way Bills instantly with no duplicate entry required."
  },
  {
    question: "Can we customize invoice templates with corporate branding and multiple currencies?",
    answer: "Absolutely. Choose from professional customizable invoice templates with your corporate logo, custom payment links, bank account details, and international multi-currency conversions with live exchange rates."
  }
];

export default function BillingGstInvoicing() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="GST Invoicing Software | E-Invoicing, E-Way Bills & Tax Compliance"
        description="Generate GST-compliant invoices, automated IRN & QR e-invoices, e-way bills and professional B2B billing with Inzovate GST Invoicing Software."
        canonicalUrl="https://inzovate-technologies.com/billing-gst-invoicing"
        keywords="GST invoicing software, e-invoicing software India, IRN generation software, e-way bill billing software, B2B invoicing system, GST billing ERP"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "Billing & Invoicing", url: "https://inzovate-technologies.com/products/billing" },
          { name: "GST Invoicing", url: "https://inzovate-technologies.com/billing-gst-invoicing" }
        ]}
        faqs={gstFaqs}
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
                GST Invoicing & E-Invoicing Software
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-emerald-700">
                Instant IRN Generation, Automated E-Way Bills & 100% Tax Accuracy
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Streamline corporate billing with an automated GST engine. Create beautiful, compliant tax invoices in seconds, auto-generate government e-invoices with embedded QR codes, issue integrated e-way bills, and dispatch payment links via WhatsApp and email.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Eliminate tax computation errors, accelerate customer receivables by 35%, and stay 100% compliant with evolving statutory GST mandates.
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
                  Book an Invoicing Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Receipt size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">GST Billing Console</h4>
                      <p className="text-xs text-slate-400">Live Tax Invoicing Status</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    IRP Active
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Total Invoiced (This Month)", value: "₹1.28 Crore", color: "text-emerald-400" },
                    { label: "E-Invoices with IRN & QR", value: "1,840 Validated", color: "text-blue-400" },
                    { label: "Active E-Way Bills Issued", value: "480 Dispatched", color: "text-cyan-400" },
                    { label: "GST Tax Ledger Reconciliation", value: "100% Matched", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">IRN API Response Latency</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> 1.2 Seconds Instant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR HIGH-VOLUME BILLING */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Modern Enterprises, Wholesalers & Service Firms
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Managing complex multi-state GST regulations, reverse charge mechanisms, export LUT invoicing, and e-way bill compliance without automated software invites severe tax penalties and cash flow delays.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate GST Invoicing brings speed, professional aesthetics, and statutory compliance together into an effortless billing desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Automated IRN generation",
              "Signed QR code embedding",
              "Integrated e-way bill filing",
              "HSN & SAC master database",
              "CGST, SGST & IGST auto-split",
              "Custom branded invoice templates",
              "Credit & debit notes",
              "Multi-currency conversion",
              "WhatsApp & email auto-dispatch",
              "Direct GSTR-1 payload export",
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

      {/* SECTION: COMMON BILLING CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Tax & Invoicing Vulnerabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Billing Roadblocks Overcome by Our GST Engine
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Manual Tax Calculation Errors",
                desc: "Billing clerks miscalculate intra-state vs inter-state tax splits, causing customer disputes and revised invoices.",
              },
              {
                num: "02",
                title: "Slow Portal-Based E-Invoicing",
                desc: "Uploading JSON files manually to the government IRP portal wastes hours and bottlenecks afternoon dispatches.",
              },
              {
                num: "03",
                title: "Disconnected E-Way Bills",
                desc: "Copy-pasting invoice data into the e-way bill portal leads to mismatched distance calculations and truck checkpoint fines.",
              },
              {
                num: "04",
                title: "Unprofessional Invoice Formats",
                desc: "Basic generic bills lack dynamic payment links, UPI QR codes, or custom company branding, slowing down client payments.",
              },
              {
                num: "05",
                title: "GSTR-1 Tax Return Mismatches",
                desc: "Manual invoice spreadsheets diverge from filed tax returns, leading to tax audits and blocked input tax credits.",
              },
              {
                num: "06",
                title: "Delayed Payment Collections",
                desc: "Invoices sent via standard mail without embedded digital payment links create 45+ day debtor collection cycles.",
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
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Tax Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              End-to-End Invoicing Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "1-Click Government E-Invoicing",
                desc: "Direct API integration with the IRP portal instantly fetches signed IRN numbers and official QR codes onto the PDF.",
                icon: QrCode,
              },
              {
                title: "Integrated E-Way Bill Generation",
                desc: "Generate e-way bills with auto-calculated pin-to-pin distances and transporter vehicle updates without leaving the invoice screen.",
                icon: FileCheck,
              },
              {
                title: "Intelligent Tax Ledger Splitting",
                desc: "Automatically determine CGST, SGST, IGST, UTGST, and cess rates based on vendor and buyer state codes and HSN rules.",
                icon: BadgeDollarSign,
              },
              {
                title: "WhatsApp & Email Instant Dispatch",
                desc: "Automatically deliver signed PDF invoices with clickable UPI and Net Banking payment links straight to customer phones.",
                icon: Send,
              },
              {
                title: "Credit & Debit Note Adjustments",
                desc: "Issue audit-compliant credit notes for sales returns, rate differences, or discounts linked directly to original invoices.",
                icon: FileSpreadsheet,
              },
              {
                title: "Direct GSTR-1 Payload Filing",
                desc: "Export validated GSTR-1 summaries (B2B, B2C, Exports, HSN summaries) ready for upload to the GST portal with 0 errors.",
                icon: TrendingUp,
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
        title="Frequently Asked Questions - GST Invoicing & Compliance"
        industryFaqs={gstFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Billing & Finance"
          pageTitle="GST Invoicing Software"
        />
      </div>
    </div>
  );
}
