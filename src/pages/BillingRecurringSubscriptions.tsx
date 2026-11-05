import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Building2,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  Repeat,
  BadgeDollarSign,
  Receipt,
  Users,
  Clock,
  Layers,
  Sliders,
  BellRing,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const subscriptionFaqs: FaqItem[] = [
  {
    question: "How does recurring subscription automation work for client retainers?",
    answer: "You configure billing schedules (monthly, quarterly, annual) with custom pricing plans. On the designated cycle date, the system automatically generates GST invoices, triggers UPI Autopay / card recurring charges, and emails digital receipts."
  },
  {
    question: "Does the system support auto-debit via UPI Autopay and eNACH mandates?",
    answer: "Yes, our recurring engine supports RBI-compliant recurring mandates via UPI Autopay, eNACH Net Banking, and international credit cards with pre-debit customer notifications."
  },
  {
    question: "How are plan upgrades, downgrades, and mid-cycle prorations handled?",
    answer: "Inzovate Subscription ERP calculates daily prorated adjustments automatically, creating credit balances or supplemental debit invoices when clients change tiers mid-cycle."
  },
  {
    question: "What is automated dunning and how does it prevent involuntary churn?",
    answer: "If a recurring payment fails due to card expiry or insufficient funds, automated dunning schedules retries across 3-5 days, sends WhatsApp/email reminder links, and alerts account managers before pausing service."
  }
];

export default function BillingRecurringSubscriptions() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Recurring Billing & Subscription Management Software | MRR & Retainers"
        description="Automate recurring client retainers, SaaS subscriptions, UPI Autopay e-mandates, proration and dunning management with Inzovate Subscription Billing."
        canonicalUrl="https://inzovate-technologies.com/billing-recurring-subscriptions"
        keywords="recurring billing software, subscription management system, MRR billing software, UPI autopay billing, retainer invoice automation, dunning management software"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "Billing & Invoicing", url: "https://inzovate-technologies.com/products/billing" },
          { name: "Recurring Subscriptions", url: "https://inzovate-technologies.com/billing-recurring-subscriptions" }
        ]}
        faqs={subscriptionFaqs}
      />

      <div className="sh-spacer" />



      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 home-banner-animate animate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="fade-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Recurring Billing & Subscription Management
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-amber-700">
                Automate Monthly Retainers, UPI Autopay & Smart Dunning Recovery
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Put recurring revenue on autopilot. Manage agency retainers, software subscriptions, AMC maintenance contracts, and tiered memberships with automated recurring invoicing, e-mandates, and smart proration logic.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Recover up to 70% of failed renewals with automated dunning workflows, reduce manual billing effort to zero, and scale your predictable Monthly Recurring Revenue (MRR).
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
                  Book a Subscription Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Repeat size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Subscription Revenue Desk</h4>
                      <p className="text-xs text-slate-400">Live MRR Performance</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Auto-Renew Active
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Monthly Recurring Revenue (MRR)", value: "₹38.4 Lakhs", color: "text-amber-400" },
                    { label: "Active Client Subscriptions", value: "620 Retainers", color: "text-cyan-400" },
                    { label: "Automated Renewal Collection Rate", value: "98.6% Success", color: "text-emerald-400" },
                    { label: "Dunning Payment Recovery", value: "₹4.2 Lakhs Saved", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Involuntary Churn Reduction</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> -34% Churn Prevented
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR PREDICTABLE REVENUE */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Agencies, SaaS Providers, AMC Contractors & Consultancies
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Manually creating invoices each month for hundreds of recurring clients leads to forgotten billing dates, delayed payments, and hours lost to administrative busywork.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate Recurring Subscriptions takes care of the entire lifecycle—from contract start to automated billing, e-mandates, mid-month upgrades, and renewals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Automated retainer schedules",
              "UPI Autopay & eNACH mandates",
              "Mid-cycle plan proration",
              "Multi-tier pricing models",
              "Usage-based billing meters",
              "Smart dunning retries",
              "Pre-debit WhatsApp alerts",
              "Subscription pause & resume",
              "MRR & ARR analytics",
              "Auto-generated tax receipts",
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-slate-50 p-4 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all flex items-start gap-3 flipbox-fade-down flipbox-delay-${(idx % 5) + 1}`}
              >
                <CheckCircle2 size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: RECURRING CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Subscription Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Retainer & Renewal Bottlenecks We Eliminate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Forgotten Monthly Invoicing",
                desc: "Finance teams forget to issue recurring client invoices on time, delaying revenue collection by weeks every quarter.",
              },
              {
                num: "02",
                title: "Involuntary Card Expiry Churn",
                desc: "Subscriptions cancel silently when customer credit cards expire or auto-debits fail without proactive renewal notices.",
              },
              {
                num: "03",
                title: "Complex Proration Calculations",
                desc: "Calculating daily refund credits or partial charges when clients upgrade plans mid-month creates accounting disputes.",
              },
              {
                num: "04",
                title: "Lack of Mandate Support",
                desc: "Relying on manual payments instead of UPI Autopay or eNACH e-mandates causes high payment default rates.",
              },
              {
                num: "05",
                title: "Opaque MRR & Churn Metrics",
                desc: "Leadership lacks real-time dashboards tracking Monthly Recurring Revenue (MRR), churn rate, and customer lifetime value (LTV).",
              },
              {
                num: "06",
                title: "Manual Payment Follow-Ups",
                desc: "Sales reps spend critical hours chasing retainer renewals rather than closing new client acquisitions.",
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
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Lifecycle Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              End-to-End Subscription Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Flexible Recurring Billing Schedules",
                desc: "Configure monthly, quarterly, annual, or custom cycle retainers with automated GST invoice generation and email dispatch.",
                icon: Calendar,
              },
              {
                title: "UPI Autopay & eNACH Mandates",
                desc: "Set up standing auto-debit instructions through UPI Autopay and eNACH Net Banking compliant with RBI e-mandate rules.",
                icon: Repeat,
              },
              {
                title: "Automated Daily Proration",
                desc: "Instantly calculate exact day-wise charges and credits when customers upgrade, downgrade, or cancel plans mid-cycle.",
                icon: Sliders,
              },
              {
                title: "Smart Dunning & Payment Recovery",
                desc: "Automate smart retry logic across multiple days, send personalized WhatsApp reminder links, and avoid service interruptions.",
                icon: RefreshCw,
              },
              {
                title: "Pre-Debit Customer Notifications",
                desc: "Comply with regulatory mandates by dispatching automated 24-hour advance payment alerts before auto-debits occur.",
                icon: BellRing,
              },
              {
                title: "MRR, Churn & LTV Analytics",
                desc: "Track real-time SaaS metrics including Monthly Recurring Revenue (MRR), Annual Recurring Revenue (ARR), and net revenue retention.",
                icon: TrendingUp,
              },
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-${(idx % 3) + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
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
        title="Frequently Asked Questions - Recurring Subscriptions & Retainers"
        industryFaqs={subscriptionFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Subscription & SaaS Billing"
          pageTitle="Recurring Subscriptions ERP"
        />
      </div>
    </div>
  );
}
