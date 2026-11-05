import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Building2,
  Truck,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ShoppingBag,
  Package,
  FileText,
  BadgePercent,
  Receipt,
  Clock,
  Compass,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const salesDispatchFaqs: FaqItem[] = [
  {
    question: "How does Inzovate ERP accelerate the quotation-to-order conversion?",
    answer: "Sales reps can create standardized quotations in seconds with customer-specific price books, tiered volume discounts, and credit limit validations. Once approved, 1-click converts the quote directly into a committed Sales Order without re-entering data."
  },
  {
    question: "Does the system generate delivery challans and e-way bills?",
    answer: "Yes, once goods are packed, the ERP generates GST-compliant Delivery Challans (DC), packing slips, barcode shipping labels, and integrates directly with the government e-way bill portal to issue bills instantly."
  },
  {
    question: "How does pick-pack-ship integration work with the warehouse?",
    answer: "When a sales order is confirmed, a picking slip is automatically dispatched to the warehouse floor. Warehouse staff scan items via barcode to confirm picking, update packing boxes, and mark the order as ready for logistics pickup."
  },
  {
    question: "Can customers track their dispatch status and shipment consignment notes?",
    answer: "Yes, automated WhatsApp and email notifications are sent with transporter name, vehicle number, consignment docket number (LR), and live tracking links as soon as the dispatch note is processed."
  }
];

export default function ErpSalesDispatch() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="ERP Sales & Dispatch Management Software | Quotations, Orders & Delivery"
        description="Streamline order-to-cash, B2B quotations, sales orders, barcode pick-pack-ship, delivery challans and dispatch tracking with Inzovate ERP Sales & Dispatch."
        canonicalUrl="https://inzovate-technologies.com/erp-sales-dispatch"
        keywords="ERP sales management, dispatch management system, order to cash ERP, delivery challan software, pick pack ship software, B2B quotation software"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "ERP Solutions", url: "https://inzovate-technologies.com/products/erp" },
          { name: "Sales & Dispatch", url: "https://inzovate-technologies.com/erp-sales-dispatch" }
        ]}
        faqs={salesDispatchFaqs}
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
                ERP Sales & Dispatch Management System
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-amber-700">
                Accelerate Quotations, Sales Orders, Pick-Pack-Ship & Delivery Challans
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Connect your sales desk directly to warehouse dispatch. Generate accurate quotations in seconds, convert approved orders automatically, streamline picking and packing, and dispatch with 100% tax and transport compliance.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Slash fulfillment cycle times, eliminate shipping errors, and delight B2B clients with transparent milestone tracking from booking to doorstep delivery.
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
                  Book a Sales & Dispatch Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Truck size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Fulfillment & Dispatch Desk</h4>
                      <p className="text-xs text-slate-400">Live Order Execution</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Live Dispatch
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Today's Confirmed Sales Orders", value: "₹28.4 Lakhs", color: "text-amber-400" },
                    { label: "Orders in Pick & Pack Stage", value: "18 Shipments", color: "text-cyan-400" },
                    { label: "Dispatched Delivery Challans", value: "42 Consignments", color: "text-emerald-400" },
                    { label: "On-Time In-Full (OTIF) Rate", value: "98.7% On-Time", color: "text-blue-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Average Order-to-Dispatch Time</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> 3.4 Hours (Record)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR HIGH-VOLUME B2B DISTRIBUTION */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Fast-Paced Distribution, Wholesale & Manufacturing
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              When sales teams close deals, orders must move effortlessly to inventory reservation, credit approval, warehouse picking, packing, dispatch documentation, and invoice generation.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate ERP eliminates friction between sales and warehouse dispatch, providing real-time inventory visibility and automated delivery documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Multi-tier customer price books",
              "Instant quotation generation",
              "1-click sales order conversion",
              "Automated credit limit checks",
              "Barcode picking & packing slips",
              "Delivery challans & packing lists",
              "Automated GST e-way bills",
              "Consignment & docket tracking",
              "Partial dispatch handling",
              "Order-to-invoice automation",
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

      {/* SECTION: COMMON SALES DISPATCH FRICTIONS */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Fulfillment Roadblocks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Fulfillment Friction Solved by Sales & Dispatch ERP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Manual Quotation Inaccuracies",
                desc: "Sales reps misquote special pricing, discount brackets, or GST rates, leading to order disputes and revised billing.",
              },
              {
                num: "02",
                title: "Selling Out-of-Stock Items",
                desc: "Without live inventory integration, sales teams confirm delivery dates for products that are out of stock or reserved.",
              },
              {
                num: "03",
                title: "Pick & Pack Shipping Errors",
                desc: "Manual paper picking lists cause warehouse crews to ship wrong items, wrong quantities, or mismatched serial numbers.",
              },
              {
                num: "04",
                title: "Dispatch Note Bottlenecks",
                desc: "Typing delivery challans, packing slips, and e-way bills manually delays carrier pickup by hours every afternoon.",
              },
              {
                num: "05",
                title: "Customer Consignment Blind Spots",
                desc: "Clients flood support lines demanding tracking status because transporters fail to send automated milestone notifications.",
              },
              {
                num: "06",
                title: "Delayed Customer Invoicing",
                desc: "Finance teams take days after dispatch to issue invoices, pushing back payment cycles and aging receivables.",
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
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Feature Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              End-to-End Sales & Dispatch Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Quotation & Price Book Management",
                desc: "Configure customer-specific pricing tiers, bulk quantity discounts, payment terms, and validity windows with automated PDF quotes.",
                icon: BadgePercent,
              },
              {
                title: "Sales Order Processing & Credit Checks",
                desc: "Convert quotes into sales orders with automated checks against customer credit limits, outstanding balances, and inventory reserves.",
                icon: FileCheck,
              },
              {
                title: "Guided Pick & Pack Workflows",
                desc: "Generate route-optimized pick lists and packing slips with barcode validation to ensure 100% item shipment accuracy.",
                icon: Package,
              },
              {
                title: "Delivery Challan & E-Way Bills",
                desc: "Generate GST-compliant Delivery Challans (DC) and auto-file e-way bills with direct transporter API connectivity.",
                icon: Truck,
              },
              {
                title: "Shipment Tracking & Customer Alerts",
                desc: "Trigger automated WhatsApp and email updates with transporter docket numbers, live tracking links, and estimated delivery dates.",
                icon: Compass,
              },
              {
                title: "Instant Invoicing & Revenue Recognition",
                desc: "Generate finalized tax invoices upon dispatch confirmation, automatically updating accounts receivable and general ledger balances.",
                icon: Receipt,
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
        title="Frequently Asked Questions - Sales & Dispatch ERP"
        industryFaqs={salesDispatchFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Sales & Distribution"
          pageTitle="ERP Sales & Dispatch"
        />
      </div>
    </div>
  );
}
