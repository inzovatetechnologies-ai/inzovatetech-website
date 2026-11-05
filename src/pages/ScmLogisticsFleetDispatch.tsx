import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Truck,
  Building2,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Navigation,
  FileCheck2,
  Receipt,
  Clock,
  Compass,
  Route,
  Smartphone,
  Gauge,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const logisticsFaqs: FaqItem[] = [
  {
    question: "How does the system handle multi-stop route optimization and fleet dispatch?",
    answer: "Our intelligent dispatch engine consolidates shipments by destination, weight, and volume constraints, generating optimized multi-drop routes that minimize fuel burn and delivery delays."
  },
  {
    question: "Can drivers capture digital Proof of Delivery (e-POD) on mobile phones?",
    answer: "Yes, delivery drivers use our mobile driver interface to capture customer digital signatures, delivery photos, geofenced GPS coordinates, and timestamp logs directly upon handover."
  },
  {
    question: "How does the platform integrate with commercial GPS telematics and FASTag?",
    answer: "Inzovate Logistics ERP connects via standard APIs to vehicle IoT GPS trackers, FASTag toll logs, and third-party transporter API feeds, giving you real-time visibility over truck movements."
  },
  {
    question: "Does the system calculate automated transporter freight rates and demurrage?",
    answer: "Yes, you can configure contracted transporter rate cards by weight/distance, calculate detention or demurrage penalties, and automatically reconcile transporter freight invoices before payout."
  }
];

export default function ScmLogisticsFleetDispatch() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="Logistics & Fleet Dispatch Management Software | Consignments & e-POD"
        description="Streamline freight logistics, fleet allocation, route optimization, consignment docket tracking, e-way bills and electronic Proof of Delivery (e-POD) with Inzovate."
        canonicalUrl="https://inzovate-technologies.com/scm-logistics-fleet-dispatch"
        keywords="logistics management software, fleet dispatch software, freight management system, electronic proof of delivery ePOD, consignment tracking software, transport ERP"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "SCM Platform", url: "https://inzovate-technologies.com/products/scm" },
          { name: "Logistics & Fleet Dispatch", url: "https://inzovate-technologies.com/scm-logistics-fleet-dispatch" }
        ]}
        faqs={logisticsFaqs}
      />

      <div className="sh-spacer" />



      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-600/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 home-banner-animate animate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="fade-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Logistics & Fleet Dispatch Management
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-sky-700">
                Optimize Multi-Drop Routes, Real-Time Consignments & Digital Proof of Delivery
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Gain end-to-end command over inbound and outbound freight movements. Automate truck loading manifests, generate compliant delivery challans & e-way bills, optimize transport routes, and capture paperless proof of delivery on smartphones.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Slash freight expenditures by up to 18%, prevent vehicle detention penalties, and ensure 99%+ on-time in-full delivery across your distribution supply chain.
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
                  Book a Logistics Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Truck size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Fleet Command Center</h4>
                      <p className="text-xs text-slate-400">Live Logistics Operations</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Active Tracking
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Active Dispatched Trucks", value: "64 Vehicles", color: "text-sky-400" },
                    { label: "Consignments in Transit (LR)", value: "182 Dockets", color: "text-cyan-400" },
                    { label: "On-Time In-Full Delivery Rate", value: "98.4% Optimal", color: "text-emerald-400" },
                    { label: "Completed ePOD Deliveries Today", value: "114 Confirmed", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Fleet Route Efficiency Index</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> +22% Distance Saved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR HIGH-VELOCITY DISPATCH */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Modern Freight, 3PL & Fleet Operations
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Managing complex distribution routes, contracted third-party carriers, driver trip allowances, and delivery delays without centralized software creates crippling transport overhead.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate Logistics ERP provides complete transparency from the moment goods leave the warehouse loading dock until verified handover at the customer site.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Consignment note (LR) generation",
              "Automated e-way bill sync",
              "Truck capacity planning",
              "Multi-drop route optimization",
              "Real-time GPS telematics",
              "Electronic proof of delivery (e-POD)",
              "Transporter rate card matrices",
              "Detention & demurrage alerts",
              "Freight bill auditing",
              "Automated customer SMS/WhatsApp",
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-slate-50 p-4 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all flex items-start gap-3 flipbox-fade-down flipbox-delay-${(idx % 5) + 1}`}
              >
                <CheckCircle2 size={18} className="text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: LOGISTICS CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Transportation Inefficiencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Logistics Bottlenecks Eliminated by Our Dispatch Suite
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Under-Utilized Truck Capacities",
                desc: "Vehicles travel half-empty because dispatchers lack software to pool orders by volumetric weight and destination clusters.",
              },
              {
                num: "02",
                title: "Transit Blind Spots",
                desc: "Neither dispatchers nor customers know actual vehicle positions once trucks exit warehouse gates, creating constant status inquiries.",
              },
              {
                num: "03",
                title: "Lost Paper Proof of Delivery",
                desc: "Physical signed challans get lost or damaged during return transit, delaying customer invoicing cycles by weeks.",
              },
              {
                num: "04",
                title: "Inflated Freight Invoicing",
                desc: "Transporters overbill for unauthorized detention hours and inaccurate mileage due to lack of verified trip time logs.",
              },
              {
                num: "05",
                title: "E-Way Bill Compliance Penalties",
                desc: "Expired or mismatched e-way bills cause truck seizures, heavy GST fines, and shipment stranding at border checkpoints.",
              },
              {
                num: "06",
                title: "Uncoordinated Multi-Drop Delays",
                desc: "Drivers take haphazard driving routes without algorithmic sequencing, doubling fuel expenses and missing client time slots.",
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
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Fleet Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              End-to-End Transportation Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Automated Consignment (LR) & Manifests",
                desc: "Generate standardized Lorry Receipts (LR), vehicle gate passes, and multi-package packing manifests with 1 click.",
                icon: FileCheck2,
              },
              {
                title: "Multi-Stop Route Optimizer",
                desc: "Algorithmically sequence customer delivery drop-offs to minimize mileage, bypass toll congestions, and maximize vehicle fill rates.",
                icon: Route,
              },
              {
                title: "Digital Proof of Delivery (e-POD)",
                desc: "Equip drivers with a mobile app to capture digital signatures, recipient photos, and GPS coordinates instantly updating ERP accounts.",
                icon: Smartphone,
              },
              {
                title: "Live GPS & Telematics Integration",
                desc: "Connect seamlessly to vehicle IoT trackers and GPS APIs to monitor vehicle speeds, idle hours, and route deviations.",
                icon: Navigation,
              },
              {
                title: "Contracted Transporter Rate Engine",
                desc: "Compare freight rates across dedicated and spot carriers, auto-calculate fuel surcharges, and audit incoming freight bills.",
                icon: Receipt,
              },
              {
                title: "Delivery Milestone Alerts",
                desc: "Keep B2B clients informed with automated WhatsApp and SMS updates as their consignment moves through transit checkpoints.",
                icon: Clock,
              },
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-${(idx % 3) + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
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
        title="Frequently Asked Questions - Logistics & Fleet Dispatch"
        industryFaqs={logisticsFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Logistics & Transportation"
          pageTitle="SCM Logistics & Fleet Dispatch"
        />
      </div>
    </div>
  );
}
