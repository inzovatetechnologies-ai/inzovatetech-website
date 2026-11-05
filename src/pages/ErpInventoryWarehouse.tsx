import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Boxes,
  QrCode,
  Truck,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Layers,
  Sparkles,
  RefreshCw,
  Search,
  PackageCheck,
  Archive,
  ScanLine,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const inventoryFaqs: FaqItem[] = [
  {
    question: "Does the system support barcode and QR code scanning for stock operations?",
    answer: "Yes, Inzovate ERP integrates with mobile barcode/QR scanners and Android hand-held terminals (HHTs) for goods receipt, bin allocation, pick-pack-ship, and stock audit cycles."
  },
  {
    question: "Can we track batches, lot numbers, and expiration dates?",
    answer: "Absolutely. Full lot and serial traceability is built in. You can track manufacturing/expiry dates, trigger automated alerts for near-expiry stocks, and enforce First-Expiry-First-Out (FEFO) or FIFO pick rules."
  },
  {
    question: "How does multi-warehouse inventory transfer and visibility work?",
    answer: "You get a single-pane view of stock across all central warehouses, regional distribution centers, and transit stock with automated inter-branch transfer orders, delivery challans, and stock reconciliation."
  },
  {
    question: "How does the system prevent stockouts and overstocking?",
    answer: "The system calculates dynamic safety stock levels and minimum reorder thresholds based on sales velocity and supplier lead times, automatically creating purchase requisitions when stock runs low."
  }
];

export default function ErpInventoryWarehouse() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="ERP Inventory & Warehouse Management System | Multi-Location & Barcode"
        description="Streamline multi-location warehouse operations, batch/serial tracking, barcode scanning, cycle counts and automated reordering with Inzovate ERP Inventory Management."
        canonicalUrl="https://inzovate-technologies.com/erp-inventory-warehouse"
        keywords="ERP inventory management, warehouse management system, WMS software, batch tracking software, serial number tracking, barcode inventory ERP"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "ERP Solutions", url: "https://inzovate-technologies.com/products/erp" },
          { name: "Inventory & Warehouse", url: "https://inzovate-technologies.com/erp-inventory-warehouse" }
        ]}
        faqs={inventoryFaqs}
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
                ERP Inventory & Warehouse Management System
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-cyan-700">
                Real-Time Stock Control, Multi-Location Warehouses & Barcode Automation
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Gain 100% stock accuracy across multiple warehouses, distribution hubs, and production facilities. Automate bin locations, batch traceability, and cycle counts from one intuitive cloud console.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Eliminate fulfillment delays, reduce carrying costs, and prevent both stockouts and expired inventory with intelligent reordering algorithms.
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
                  Book a Warehouse Demo
                </button>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Boxes size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Central Warehouse Monitor</h4>
                      <p className="text-xs text-slate-400">Live Inventory Metrics</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    Live Stock Sync
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Active Tracked SKUs", value: "24,850 Units", color: "text-cyan-400" },
                    { label: "Warehouse Capacity Utilization", value: "82.4% Optimal", color: "text-blue-400" },
                    { label: "Low Stock Reorder Alerts", value: "14 Triggers", color: "text-amber-400" },
                    { label: "Pending Inbound Inspection (GRN)", value: "6 Shipments", color: "text-purple-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Barcode Scan Accuracy</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> 99.8% Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR HIGH-VELOCITY SUPPLY CHAINS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Modern Warehousing & Distribution Hubs
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Whether you run discrete manufacturing, multi-channel wholesale, or fast-moving consumer distribution, inventory accuracy is the backbone of profitability.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate ERP eliminates blind spots with real-time stock balances across aisles, shelves, bins, and geographical warehouse networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Multi-warehouse visibility",
              "Aisle, rack & bin allocation",
              "Batch & lot tracking",
              "Serial number traceability",
              "Barcode & QR scanning",
              "Automated reorder triggers",
              "FIFO / LIFO / FEFO rules",
              "Inter-warehouse transfers",
              "Damaged stock write-offs",
              "Perpetual cycle counts",
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

      {/* SECTION: COMMON WAREHOUSE FRICTIONS */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Inventory Bottlenecks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Critical Challenges Solved by Warehouse ERP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Stock Phantom Mismatches",
                desc: "Physical counts differ from system records, causing sales teams to commit to orders that cannot be fulfilled.",
              },
              {
                num: "02",
                title: "Dead Stock & Expiry Wastage",
                desc: "Lack of batch and expiry tracking results in perishable or depreciating goods expiring on warehouse shelves.",
              },
              {
                num: "03",
                title: "Disorganized Picking Operations",
                desc: "Pickers spend hours searching for items in unmapped bins without guided route optimization or barcode validation.",
              },
              {
                num: "04",
                title: "Sudden Stockouts of Critical Parts",
                desc: "Manual reorder checks fail during demand spikes, bringing manufacturing lines and customer dispatches to a halt.",
              },
              {
                num: "05",
                title: "Transit Blind Spots in Transfers",
                desc: "Inter-branch stock shipments go unaccounted for while in transit, leading to disputes between sending and receiving hubs.",
              },
              {
                num: "06",
                title: "Inaccurate Valuation Accounting",
                desc: "Failure to calculate dynamic landed costs and accurate FIFO stock values skews gross profit margins in the P&L.",
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

      {/* SECTION: CORE CAPABILITIES */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 flipbox-fade-down">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              System Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Key Inventory & Warehouse Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Multi-Location Stock Control",
                desc: "Organize inventory across central hubs, raw material storage, work-in-progress (WIP), and customer return areas.",
                icon: Building2,
              },
              {
                title: "Batch & Serial Number Traceability",
                desc: "Enforce end-to-end lot tracing from supplier batch to customer delivery note for strict compliance and warranty tracking.",
                icon: Archive,
              },
              {
                title: "Barcode & Mobile HHT Scanning",
                desc: "Equip warehouse staff with Android mobile scanning for rapid goods inward, bin transfers, and pick-pack-ship operations.",
                icon: ScanLine,
              },
              {
                title: "Automated Reorder Thresholds",
                desc: "Dynamic minimum/maximum stock rules auto-generate purchase requisitions as soon as inventory drops below buffer levels.",
                icon: RefreshCw,
              },
              {
                title: "Cycle Counts & Stock Audits",
                desc: "Conduct perpetual ABC cycle counts without pausing warehouse operations, automatically recording variance ledgers.",
                icon: PackageCheck,
              },
              {
                title: "Inter-Warehouse Transfers",
                desc: "Create transfer orders, generate e-way transport bills, and monitor goods-in-transit until receipt acknowledgment.",
                icon: Truck,
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
        title="Frequently Asked Questions - Inventory & Warehouse ERP"
        industryFaqs={inventoryFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Warehousing & Logistics"
          pageTitle="ERP Inventory & Warehouse"
        />
      </div>
    </div>
  );
}
