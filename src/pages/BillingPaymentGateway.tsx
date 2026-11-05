import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Building2,
  CreditCard,
  QrCode,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Smartphone,
  Lock,
  Wallet,
  Receipt,
  RotateCcw,
  RefreshCw,
  Coins,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const paymentFaqs: FaqItem[] = [
  {
    question: "Which payment gateways and methods does the system support?",
    answer: "Our platform supports all major gateways including Razorpay, Stripe, PayU, Cashfree, and CCAvenue. It enables UPI (Google Pay, PhonePe, Paytm), dynamic QR codes, Net Banking across 50+ banks, Credit/Debit cards, EMI, and international wire transfers."
  },
  {
    question: "How does automated invoice reconciliation work after a customer pays online?",
    answer: "When a customer completes a payment via link or QR code, gateway webhooks trigger real-time ledger posting. The invoice is automatically marked as 'Paid', a digital GST receipt is generated, and your Accounts Receivable ledger updates instantly."
  },
  {
    question: "Can we send dynamic UPI payment links via WhatsApp and SMS?",
    answer: "Yes, you can generate smart payment links with pre-filled invoice amounts and due dates, sending them automatically via WhatsApp, SMS, or email with one-tap payment checkout."
  },
  {
    question: "How secure is customer payment data and transaction processing?",
    answer: "All transactions are secured with PCI-DSS Level 1 compliant gateway tokenization, end-to-end 256-bit SSL encryption, automated fraud risk screening, and multi-factor 3D Secure authentication."
  }
];

export default function BillingPaymentGateway() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Payment Gateway Integration Software | UPI, Cards & Auto-Reconciliation"
        description="Accept digital payments seamlessly with Razorpay, Stripe, UPI QR codes, cards and automated bank reconciliation with Inzovate Payment Gateway Integration."
        canonicalUrl="https://inzovate-technologies.com/billing-payment-gateway"
        keywords="payment gateway integration, UPI payment billing software, Razorpay ERP integration, automated payment reconciliation, digital receipt software, online invoice payment"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "Billing & Invoicing", url: "https://inzovate-technologies.com/products/billing" },
          { name: "Payment Gateway", url: "https://inzovate-technologies.com/billing-payment-gateway" }
        ]}
        faqs={paymentFaqs}
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
                Payment Gateway & Collections Integration
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-cyan-700">
                Collect via UPI, Cards, Net Banking & Auto-Reconcile Invoices Instantly
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Empower your clients with effortless payment options. Embed dynamic UPI QR codes and payment checkout links directly into invoices, automate bank reconciliation through webhooks, and issue instant digital tax receipts.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Slash days sales outstanding (DSO) by 40%, eliminate manual bank statement matching, and achieve a 99.4% payment success rate across all channels.
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
                  Book a Payments Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Collections Gateway Console</h4>
                      <p className="text-xs text-slate-400">Live Settlements Monitor</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Live Webhooks
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Digital Collections (This Month)", value: "₹84.6 Lakhs", color: "text-cyan-400" },
                    { label: "Instant Payment Success Rate", value: "99.4% Verified", color: "text-emerald-400" },
                    { label: "Auto-Reconciled Invoices", value: "1,260 Paid", color: "text-blue-400" },
                    { label: "Next Scheduled Bank Payout", value: "T+1 Daily Auto", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Webhook Reconciliation Latency</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> Under 800ms Real-Time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR MODERN ONLINE COLLECTIONS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Fast, Frictionless B2B & B2C Payment Collections
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Forcing customers to make manual bank transfers or send cheque deposits causes painful payment friction, misplaced transaction IDs, and manual accounting nightmares.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate Payment Gateway turns every invoice into a 1-click checkout experience, automatically clearing debts and keeping your cash flow liquid.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Multi-gateway routing",
              "Dynamic UPI QR codes",
              "One-click payment links",
              "Instant webhook reconciliation",
              "Automated digital receipts",
              "Partial payment handling",
              "Failed transaction retries",
              "Settlement batch tracking",
              "Refund & dispute management",
              "PCI-DSS Level 1 security",
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

      {/* SECTION: PAYMENT CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Collection Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Cash Flow Bottlenecks Overcome by Gateway Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Manual UTR Matching Chaos",
                desc: "Finance teams waste hours each morning cross-referencing bank statement UTR numbers against unpaid customer invoices.",
              },
              {
                num: "02",
                title: "High Payment Drop-Off Rates",
                desc: "Customers postpone payments when invoices lack instant digital checkout methods like UPI, credit cards, or net banking.",
              },
              {
                num: "03",
                title: "Delayed Receipt Generation",
                desc: "Customers get anxious when they receive no instant automated tax receipt or acknowledgment after completing payment.",
              },
              {
                num: "04",
                title: "Single Gateway Outages",
                desc: "Relying on a single payment provider halts business operations when their servers suffer unexpected downtime.",
              },
              {
                num: "05",
                title: "Unaccounted Gateway Fee Deductions",
                desc: "Gateway processing charges and GST deductions cause ledger balance mismatches without automated fee expense posting.",
              },
              {
                num: "06",
                title: "Security & Fraud Vulnerabilities",
                desc: "Storing unencrypted card information or unverified payment links exposes businesses to cyber fraud and chargebacks.",
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
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Payment Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              End-to-End Collections Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Multi-Gateway Smart Routing",
                desc: "Seamlessly integrate Razorpay, Stripe, PayU, and Cashfree with automated failover routing for maximum transaction success.",
                icon: Wallet,
              },
              {
                title: "Dynamic UPI QR Code on Invoices",
                desc: "Embed unique transaction QR codes onto every printed or digital invoice that customers scan and pay in seconds.",
                icon: QrCode,
              },
              {
                title: "Instant Webhook Reconciliation",
                desc: "Automate accounting entries as soon as a transaction succeeds, updating bank balances and accounts receivable without human intervention.",
                icon: RefreshCw,
              },
              {
                title: "WhatsApp & SMS Payment Links",
                desc: "Send personalized payment links via WhatsApp and SMS with automated follow-up reminders before invoices reach due dates.",
                icon: Smartphone,
              },
              {
                title: "Instant Digital Tax Receipts",
                desc: "Generate and email branded payment acknowledgment receipts with transaction IDs, GST breakdowns, and remaining balances.",
                icon: Receipt,
              },
              {
                title: "Bank Settlement & Fee Accounting",
                desc: "Automatically track T+1 / T+2 gateway settlement payouts and isolate processing fee MDR deductions in your financial ledger.",
                icon: Coins,
              },
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-${(idx % 3) + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
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
        title="Frequently Asked Questions - Payment Gateway Integration"
        industryFaqs={paymentFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Payment Collections & FinTech"
          pageTitle="Payment Gateway Integration"
        />
      </div>
    </div>
  );
}
