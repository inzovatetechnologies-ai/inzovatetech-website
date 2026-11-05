import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  Building2,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  LineChart,
  BrainCircuit,
  History,
  CalendarDays,
  Percent,
  RefreshCw,
  Boxes,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmFaqSection, { FaqItem } from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const forecastingFaqs: FaqItem[] = [
  {
    question: "How does the AI engine calculate SKU demand forecasts?",
    answer: "Our demand forecasting algorithm analyzes multi-year historical sales data, seasonal spikes, promotional events, market trends, and supplier lead-time variations to calculate statistically robust SKU demand curves."
  },
  {
    question: "Can we adjust forecasts for promotional campaigns or external market shocks?",
    answer: "Yes, inventory planners can apply custom override coefficients, simulate marketing campaign lifts, or adjust for supply chain disruptions, allowing side-by-side scenario modeling."
  },
  {
    question: "How does predictive reordering reduce working capital tied up in stock?",
    answer: "By dynamically recalibrating minimum buffer levels and economic order quantities (EOQ), the system prevents excess safety stock accumulation while guaranteeing 99%+ order fulfillment."
  },
  {
    question: "How does the platform handle new product introductions (NPI) with no sales history?",
    answer: "New items can be mapped to reference sibling products or category averages, using surrogate demand modeling until sufficient live transaction history is established."
  }
];

export default function ScmDemandForecasting() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="AI Demand Forecasting Software | Predictive Inventory & SCM Planning"
        description="Optimize working capital, prevent stockouts, and predict SKU demand curves with Inzovate AI Demand Forecasting and Predictive Inventory Planning."
        canonicalUrl="https://inzovate-technologies.com/scm-demand-forecasting"
        keywords="demand forecasting software, predictive inventory planning, SCM demand planning, safety stock optimization, AI supply chain forecasting, inventory replenishment ERP"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "SCM Platform", url: "https://inzovate-technologies.com/products/scm" },
          { name: "Demand Forecasting", url: "https://inzovate-technologies.com/scm-demand-forecasting" }
        ]}
        faqs={forecastingFaqs}
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
                AI Demand Forecasting & Planning
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-purple-700">
                Predict SKU Demand, Eliminate Stockouts & Free Up Tied-Down Working Capital
              </h2>
              </div>
              <div className="fade-right delay-1">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                Stop relying on guesswork and outdated historical averages. Leverage predictive machine learning to forecast customer demand curves, factor in seasonality and supplier lead times, and auto-generate replenishment purchase orders.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                Reduce inventory holding costs by up to 26%, prevent critical stockouts, and safeguard profit margins across complex multi-channel distribution networks.
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
                  Book a Forecasting Demo
                </button>
              </div>
            </div>
 
            {/* Hero Visual Card */}
            <div className="lg:col-span-5 fade-right delay-2">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      <BrainCircuit size={20} />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">Demand Intelligence Engine</h4>
                      <p className="text-xs text-slate-400">Live Forecast Analytics</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-semibold border border-emerald-500/30">
                    94.8% Accuracy
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Working Capital Optimization", value: "₹38.6 Lakhs Saved", color: "text-purple-400" },
                    { label: "Stockout Probability Rate", value: "< 0.8% Minimal", color: "text-emerald-400" },
                    { label: "Auto-Generated Replenishments", value: "48 Open PRs", color: "text-cyan-400" },
                    { label: "Seasonal Demand Variance", value: "Auto-Calibrated", color: "text-blue-400" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs text-slate-600 font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-3 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Excess Buffer Stock Reduction</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> -26% Leaner Inventory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BUILT FOR DATA-DRIVEN SUPPLY CHAINS */}
      <section className="newmrhomebox flipbox-section py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 flipbox-fade-down">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Modern Manufacturing, Retail & Multi-Echelon Networks
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              When supply chain leaders plan procurement cycles on static spreadsheets, sudden market swings either leave warehouses overloaded with slow-moving inventory or crippled by stockouts.
            </p>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Inzovate Demand Forecasting synchronizes sales channels, supplier lead times, and factory schedules into a self-tuning planning engine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Multi-algorithm forecasting",
              "Seasonal index calculations",
              "Safety stock dynamic sizing",
              "Economic order quantity (EOQ)",
              "Supplier lead time variability",
              "Promotion lift modeling",
              "ABC / FSN inventory velocity",
              "Bullwhip effect mitigation",
              "Automated reorder requisitions",
              "What-if scenario simulations",
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-slate-50 p-4 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all flex items-start gap-3 flipbox-fade-down flipbox-delay-${(idx % 5) + 1}`}
              >
                <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: COMMON FORECASTING CHALLENGES */}
      <section className="homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 animate" style={{ userSelect: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="fade-left text-center max-w-3xl mx-auto mb-14">
            <span className="text-rose-400 font-bold text-xs uppercase tracking-widest bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Planning Obstacles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Inventory Planning Headaches We Eliminate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Capital Trapped in Slow-Movers",
                desc: "Over-purchasing seasonal goods ties up critical working capital, requiring heavy discounted clearance sales later.",
              },
              {
                num: "02",
                title: "Missed Sales Due to Stockouts",
                desc: "High-margin bestselling SKUs run out of stock during demand peaks because replenishment orders were triggered too late.",
              },
              {
                num: "03",
                title: "The Destructive Bullwhip Effect",
                desc: "Slight shifts in end-customer demand get magnified into massive, distorted supplier orders along the upstream chain.",
              },
              {
                num: "04",
                title: "Static Buffer Thresholds",
                desc: "Using fixed reorder levels set two years ago ignores supplier lead time changes and shifting customer buying habits.",
              },
              {
                num: "05",
                title: "Flawed Promotion Preparations",
                desc: "Marketing launches sales campaigns without notifying inventory planners, crashing fulfillment operations.",
              },
              {
                num: "06",
                title: "Manual Spreadsheet Headaches",
                desc: "Planners spend weeks manually merging Excel sheets rather than analyzing strategic supply chain risks.",
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
            <span className="text-purple-400 font-bold text-xs uppercase tracking-widest bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full inline-block mb-3">
              Deep Analytics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Core Demand Planning Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Statistical & Machine Learning Engine",
                desc: "Automatically tests multiple forecasting models (Holt-Winters, ARIMA, Linear Regression) selecting the best fit per SKU.",
                icon: LineChart,
              },
              {
                title: "Dynamic Buffer & Safety Stock",
                desc: "Calculate service-level-driven safety stock buffer thresholds factoring in supplier lead time standard deviations.",
                icon: Boxes,
              },
              {
                title: "Economic Order Quantity (EOQ)",
                desc: "Balance freight discounts and order handling fees against warehouse carrying costs to find ideal order quantities.",
                icon: Percent,
              },
              {
                title: "Seasonal Trend Decomposition",
                desc: "Isolate recurring cyclical patterns, festival surges, and climatic peaks to ensure proactive inventory pre-building.",
                icon: CalendarDays,
              },
              {
                title: "Automated Reorder Triggering",
                desc: "Generate purchase requisitions automatically in the ERP as soon as inventory projections touch reorder points.",
                icon: RefreshCw,
              },
              {
                title: "ABC & FSN Multi-Dimensional Velocity",
                desc: "Classify items by revenue value (ABC) and consumption speed (Fast, Slow, Non-moving) for targeted procurement focus.",
                icon: TrendingUp,
              },
            ].map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs hover:border-blue-400 hover:shadow-md transition-all group flipbox-fade-down flipbox-delay-${(idx % 3) + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
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
        title="Frequently Asked Questions - Demand Forecasting SCM"
        industryFaqs={forecastingFaqs}
      />

      {/* LEAD CONSULTATION FORM */}
      <div id="lead-form">
        <CrmLeadForm
          defaultIndustry="Supply Chain Planning"
          pageTitle="SCM Demand Forecasting"
        />
      </div>
    </div>
  );
}
