import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Handshake,
  FileCheck,
  UploadCloud,
  BadgeCheck,
  Clock,
  Globe,
  Bell,
  Lock,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const vendorPortalFaqs: FaqItem[] = [
  {
    question: "How do suppliers access and use the self-service vendor portal?",
    answer: "Suppliers receive secure role-based login credentials. From their dashboard, they can view assigned RFQs, submit quotes, acknowledge purchase orders, submit Advanced Shipping Notices (ASNs), and upload GST invoices directly."
  },
  {
    question: "Can we track supplier compliance, certifications, and tax documents?",
    answer: "Yes, the portal includes an automated onboarding workflow where suppliers upload GST certificates, MSME documents, bank mandates, and ISO certifications with automated renewal expiry reminders."
  },
  {
    question: "How does the portal reduce communication delays and invoice disputes?",
    answer: "Real-time PO acknowledgments, milestone delivery updates, and automated 3-way matching prevent discrepancies before invoices are submitted, eliminating back-and-forth emails."
  },
  {
    question: "Is the vendor portal accessible on mobile devices for external suppliers?",
    answer: "Yes, the portal is fully responsive and accessible via any browser or mobile device, allowing suppliers to respond to spot RFQs and update consignment dispatches on the go."
  }
];

export default function ScmSupplierVendorPortal() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Supplier & Vendor Portal Software | SCM Vendor Management System"
        description="Streamline supplier onboarding, RFQ submissions, digital PO acknowledgments, ASN tracking and invoice processing with Inzovate SCM Supplier & Vendor Portal."
        canonicalUrl="https://inzovate-technologies.com/scm-supplier-vendor-portal"
        keywords="supplier portal software, vendor management system, SCM vendor portal, supplier RFQ portal, digital purchase order acknowledgment, supplier collaboration platform"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "SCM Platform", url: "https://inzovate-technologies.com/products/scm" },
          { name: "Supplier & Vendor Portal", url: "https://inzovate-technologies.com/scm-supplier-vendor-portal" }
        ]}
        faqs={vendorPortalFaqs}
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
                SCM Supplier & Vendor Portal
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-blue-700">
                Empower Suppliers with Real-Time RFQs, PO Tracking & Digital Invoicing
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Modernize supplier interactions through an intuitive, self-service collaboration portal. Broadcast RFQs, track purchase order status in real time, receive Advanced Shipping Notices (ASNs), and automate invoice uploads without messy email chains.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Strengthen supply chain transparency, accelerate supplier onboarding, and reduce vendor query turnaround by over 60%.
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
                  Book a Portal Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Handshake size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Vendor Network Console</h4>
                      <p className="text-xs text-slate-400">Live Supplier Engagement</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    99.4% Online
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Active Onboarded Vendors", value: "1,420 Suppliers", color: "text-blue-400" },
                    { label: "Open RFQ Bids Received", value: "86 Submissions", color: "text-cyan-400" },
                    { label: "Confirmed POs in Transit (ASN)", value: "34 Shipments", color: "text-emerald-400" },
                    { label: "Vendor Compliance Rating", value: "99.2% Certified", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Invoice Upload to AP Match Time</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> Under 15 Minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR SEAMLESS VENDOR RELATIONS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Resilient Supplier Collaboration
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Managing hundreds of external suppliers through fragmented email chains, phone calls, and manual spreadsheets breeds operational bottlenecks and payment friction.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate Supplier Portal unifies vendor workflows into a transparent, audit-ready platform where your procurement team and suppliers work in complete sync.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Digital vendor onboarding",
              "Tax & compliance vault",
              "Real-time RFQ bidding",
              "Automated PO transmission",
              "PO acceptance & revisions",
              "Advanced shipping notice (ASN)",
              "Digital invoice submission",
              "Payment status visibility",
              "Debit note reconciliations",
              "Supplier performance metrics",
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

      {/* SECTION: CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Supply Chain Blind Spots
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Supplier Collaboration Roadblocks We Eliminate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Slow Manual Sourcing Cycles",
                desc: "Purchasing teams spend days compiling PDF bids from email threads and entering numbers into spreadsheets.",
              },
              {
                num: "02",
                title: "Unacknowledged Purchase Orders",
                desc: "Orders get delayed because buyers have no visibility into whether suppliers viewed, accepted, or scheduled the PO.",
              },
              {
                num: "03",
                title: "Invoice & Payment Friction",
                desc: "Vendors constantly chase accounts payable for payment updates due to missing invoice tracking channels.",
              },
              {
                num: "04",
                title: "Compliance Document Expirations",
                desc: "Vendors operate with expired tax certificates, safety audits, and bank records without proactive renewal alerts.",
              },
              {
                num: "05",
                title: "Surprise Delivery Delays",
                desc: "Warehouses receive zero advance notice on dispatch dates or vehicle tracking, leading to dock bottlenecks.",
              },
              {
                num: "06",
                title: "Subjective Vendor Evaluations",
                desc: "Lack of logged delivery timestamps and quality audit history makes vendor contract negotiations arbitrary.",
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
              Core Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Key Supplier Portal Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Self-Service Supplier Onboarding",
                desc: "Automate supplier registration, credential validation, bank mandates, and compliance document verifications in minutes.",
                icon: BadgeCheck,
              },
              {
                title: "Real-Time RFQ Bidding Desk",
                desc: "Publish RFQs directly to selected vendor tiers, allow suppliers to submit itemized bids, and view instant comparisons.",
                icon: FileText,
              },
              {
                title: "PO Acknowledgment & Status",
                desc: "Suppliers confirm purchase order acceptance, request delivery date extensions, and view live order schedules.",
                icon: FileCheck,
              },
              {
                title: "Advanced Shipping Notice (ASN)",
                desc: "Suppliers submit shipment consignment notes, vehicle numbers, and barcode manifests before trucks arrive at your gates.",
                icon: UploadCloud,
              },
              {
                title: "Digital E-Invoice & Payment Tracking",
                desc: "Vendors upload PDF and XML e-invoices, view automated 3-way match status, and check live payment disbursement dates.",
                icon: Globe,
              },
              {
                title: "Performance Scorecard & Badges",
                desc: "Transparently display vendor metrics on quality pass rates, on-time deliveries, and invoice accuracy to drive excellence.",
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
        title="Frequently Asked Questions - Supplier & Vendor Portal"
        industryFaqs={vendorPortalFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Supply Chain & Procurement"
          pageTitle="SCM Supplier & Vendor Portal"
        />
      </div>
    </div>
  );
}
