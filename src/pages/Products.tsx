import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Users,
  Truck,
  Receipt,
  UserCheck,
  BrainCircuit,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Shield,
  Zap,
  Globe,
  Lock,
  Cpu,
  Layers,
  Check,
  Minus,
  ShieldCheck,
  Server,
  Network,
  Cloud,
} from "lucide-react";
import DemoModal from "../components/DemoModal";
import ProductDetailModal from "../components/ProductDetailModal";
import SEO from "../components/SEO";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";
import { ParticleTitle } from "@/components/ui/particle-title";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── EBIX CONNECTED-STATS SYSTEM ──
const enterpriseStats = [
  {
    value: 100,
    suffix: "+",
    label: "Global Enterprise Clients",
    icon: Globe,
    badgeText: "Enterprise",
  },
  {
    value: 99.99,
    decimals: 2,
    suffix: "%",
    label: "Uptime SLA Guarantee",
    icon: Shield,
    badgeText: "SLA",
  },
  {
    value: 1,
    suffix: "M+",
    label: "Daily API Transactions",
    icon: Zap,
    badgeText: "Scale",
  },
  {
    value: 15,
    prefix: "< ",
    suffix: "ms",
    label: "Average Query Latency",
    icon: Cpu,
    badgeText: "Speed",
  },
];

function EbixStatCard({
  value,
  label,
  icon: Icon,
  prefix = "",
  suffix = "",
  decimals = 0,
  badgeText,
  index,
  isParentInView,
}: {
  value: number;
  label: string;
  icon: React.ElementType;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  badgeText?: string;
  index: number;
  isParentInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isParentInView) return;
    let startTimestamp: number | null = null;
    const duration = 1800;
    const delay = index * 180;
    let timeoutId: number | null = null;

    timeoutId = window.setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(easedProgress * value);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      requestAnimationFrame(step);
    }, delay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isParentInView, value, index]);

  const formattedNum =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.floor(displayValue).toLocaleString();

  return (
    <div
      className="stat-card"
      style={{
        "--stat-delay": `${index * 220}ms`,
        "--metric-index": index,
      } as React.CSSProperties}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="stat-icon-badge">
          <Icon size={20} />
        </div>
        {badgeText && (
          <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-blue-50/80 text-blue-600 border border-blue-100">
            {badgeText}
          </span>
        )}
      </div>

      <div>
        <dd className="notranslate" translate="no">
          <span>{prefix}</span>
          <span>{formattedNum}</span>
          <span className="text-blue-600 font-extrabold">{suffix}</span>
        </dd>
        <dt>{label}</dt>
      </div>
    </div>
  );
}

function EbixConnectedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -40px 0px" });

  return (
    <div
      ref={ref}
      className={`stat-group will-reveal connected-stats v3-reveal ${
        inView ? "stats-arrived is-visible" : ""
      }`}
      data-tone="0"
      style={{
        "--v3-rise": inView ? "0.00px" : "28.00px",
        "--v3-opacity": inView ? "1.000" : "0.000",
      } as React.CSSProperties}
    >
      <dl className="stat-grid">
        {enterpriseStats.map((stat, idx) => (
          <EbixStatCard
            key={stat.label}
            {...stat}
            index={idx}
            isParentInView={inView}
          />
        ))}
      </dl>
    </div>
  );
}

// ── PRODUCTS LIST ──
const productsList = [
  {
    id: "erp",
    category: "operations",
    icon: Building2,
    name: "ERP",
    full: "Enterprise Resource Planning",
    desc: "Integrated business management connecting finance, operations, inventory and more in one intelligent platform.",
    features: [
      "Financial Management",
      "Inventory Control",
      "Purchase & Automation",
      "Custom Workflows",
    ],
    accentColor: "#2563EB",
    gradientBg: "from-blue-500/15 via-blue-500/5 to-transparent",
    badgeGlow: "border-blue-500/30 bg-blue-500/10 text-blue-600",
    buttonGradient: "from-blue-600 via-blue-700 to-indigo-700 shadow-blue-500/25",
  },
  {
    id: "crm",
    category: "sales",
    icon: Users,
    name: "CRM",
    full: "Customer Relationship Management",
    desc: "Manage customer relationships, sales pipelines and business development activities efficiently.",
    features: [
      "Sales Pipeline",
      "Automated Follow-ups",
      "Customer 360°",
      "Actionable Insights",
    ],
    accentColor: "#06B6D4",
    gradientBg: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    badgeGlow: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600",
    buttonGradient: "from-cyan-600 via-teal-600 to-blue-600 shadow-cyan-500/25",
  },
  {
    id: "scm",
    category: "operations",
    icon: Truck,
    name: "SCM",
    full: "Supply Chain Management",
    desc: "End-to-end supply chain visibility and control from procurement to logistics and delivery.",
    features: [
      "Procurement Management",
      "Vendor Portal",
      "Logistics Tracking",
      "Demand Forecasting",
    ],
    accentColor: "#7C3AED",
    gradientBg: "from-purple-500/15 via-purple-500/5 to-transparent",
    badgeGlow: "border-purple-500/30 bg-purple-500/10 text-purple-600",
    buttonGradient: "from-purple-600 via-violet-600 to-indigo-600 shadow-purple-500/25",
  },
  {
    id: "billing",
    category: "sales",
    icon: Receipt,
    name: "BILLING",
    full: "Billing & Invoicing",
    desc: "Streamlined billing, invoicing and payment management for modern businesses.",
    features: [
      "Digital Invoices",
      "Multi-currency Support",
      "Payment Tracking",
      "Tax Compliance",
    ],
    accentColor: "#0284C7",
    gradientBg: "from-sky-500/15 via-sky-500/5 to-transparent",
    badgeGlow: "border-sky-500/30 bg-sky-500/10 text-sky-600",
    buttonGradient: "from-sky-600 via-cyan-600 to-blue-600 shadow-sky-500/25",
  },
  {
    id: "hrm",
    category: "analytics",
    icon: UserCheck,
    name: "HRM",
    full: "Human Resource Management",
    desc: "A comprehensive HR platform covering employees, payroll, performance and business compliance.",
    features: [
      "Employee Lifecycle",
      "Payroll Processing",
      "Leave Management",
      "Performance Reviews",
    ],
    accentColor: "#16A34A",
    gradientBg: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    badgeGlow: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600",
    buttonGradient: "from-emerald-600 via-green-600 to-teal-600 shadow-emerald-500/25",
  },
  {
    id: "bi",
    category: "analytics",
    icon: BrainCircuit,
    name: "BI",
    full: "Business Intelligence",
    desc: "Transform raw business data into powerful insights using advanced analytics and intelligent dashboards.",
    features: [
      "Interactive Dashboards",
      "Custom Reports",
      "Predictive Analytics",
      "KPI Monitoring",
    ],
    accentColor: "#F97316",
    gradientBg: "from-orange-500/15 via-orange-500/5 to-transparent",
    badgeGlow: "border-orange-500/30 bg-orange-500/10 text-orange-600",
    buttonGradient: "from-orange-500 via-amber-600 to-red-600 shadow-orange-500/25",
  },
];

// ── FEATURE COMPARISON MATRIX ──
const comparisonMatrix = [
  {
    feature: "Cloud Multi-Tenancy Architecture",
    erp: true,
    crm: true,
    scm: true,
    billing: true,
    hrm: true,
    bi: true,
  },
  {
    feature: "Automated Workflows & AI Engine",
    erp: true,
    crm: true,
    scm: true,
    billing: false,
    hrm: true,
    bi: true,
  },
  {
    feature: "Real-Time Executive Dashboards",
    erp: true,
    crm: true,
    scm: true,
    billing: true,
    hrm: true,
    bi: true,
  },
  {
    feature: "Advanced Financial & Audit Logging",
    erp: true,
    crm: false,
    scm: false,
    billing: true,
    hrm: true,
    bi: false,
  },
  {
    feature: "Vendor & Supply Chain Tracking",
    erp: true,
    crm: false,
    scm: true,
    billing: false,
    hrm: false,
    bi: false,
  },
  {
    feature: "Customer 360° & Sales Pipeline",
    erp: false,
    crm: true,
    scm: false,
    billing: true,
    hrm: false,
    bi: false,
  },
  {
    feature: "Payroll & Tax Compliance Engine",
    erp: true,
    crm: false,
    scm: false,
    billing: true,
    hrm: true,
    bi: false,
  },
  {
    feature: "REST & GraphQL API Access",
    erp: true,
    crm: true,
    scm: true,
    billing: true,
    hrm: true,
    bi: true,
  },
];

// ── ENTERPRISE PLATFORM ARCHITECTURE FEATURE CARDS ──
const architectureFeatureCards = [
  {
    id: 1,
    icon: Lock,
    title: "SOC 2 & ISO 27001 Certified",
    desc: "Bank-grade AES-256 encryption at rest and in transit with complete audit trail logging.",
    iconGlow: "bg-cyan-50 border-cyan-200 text-cyan-600 shadow-sm",
    cardGlow: "rgba(56, 189, 248, 0.15)",
    topLine: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    id: 2,
    icon: Cloud,
    title: "Multi-Tenant Cloud Native",
    desc: "High-concurrency microservices architecture designed for zero downtime deployments.",
    iconGlow: "bg-purple-50 border-purple-200 text-purple-600 shadow-sm",
    cardGlow: "rgba(168, 85, 247, 0.15)",
    topLine: "from-purple-500 via-violet-500 to-indigo-500",
  },
  {
    id: 3,
    icon: Cpu,
    title: "AI Workflows & Automation",
    desc: "Deep integration of machine learning algorithms to automate complex business rules.",
    iconGlow: "bg-emerald-50 border-emerald-200 text-emerald-600 shadow-sm",
    cardGlow: "rgba(16, 185, 129, 0.15)",
    topLine: "from-emerald-400 via-teal-500 to-cyan-500",
  },
  {
    id: 4,
    icon: Globe,
    title: "Global API-First Ecosystem",
    desc: "RESTful and GraphQL APIs to seamlessly sync with legacy software and third-party tools.",
    iconGlow: "bg-amber-50 border-amber-200 text-amber-600 shadow-sm",
    cardGlow: "rgba(245, 158, 11, 0.15)",
    topLine: "from-amber-400 via-orange-500 to-rose-500",
  },
];

// ── EBIX AI-STYLE INTERACTIVE PRODUCT CARD ──
function EbixAiProductCard({
  prod,
  index,
}: {
  prod: (typeof productsList)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: false, margin: "0px 0px -60px 0px" });
  const [isTiltActive, setIsTiltActive] = useState(false);
  const Icon = prod.icon;

  const patternIndex = index % 6;
  const dockSide = index % 3 < 1 ? -1 : 1;
  const dockDelay = `${(index % 3) * 100}ms`;

  const handlePointerEnter = () => {
    setIsTiltActive(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -6;
    const tiltY = ((x - centerX) / centerX) * 6;

    cardRef.current.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    cardRef.current.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
    cardRef.current.style.setProperty("--tilt-lift", "5px");
    cardRef.current.style.setProperty("--tilt-light-x", `${((x / rect.width) * 100).toFixed(1)}%`);
    cardRef.current.style.setProperty("--tilt-light-y", `${((y / rect.height) * 100).toFixed(1)}%`);
  };

  const handlePointerLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.removeProperty("--tilt-x");
    cardRef.current.style.removeProperty("--tilt-y");
    cardRef.current.style.removeProperty("--tilt-lift");
    setIsTiltActive(false);
  };

  return (
    <div
      ref={cardRef}
      data-pattern={patternIndex}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        ["--dock-side" as any]: dockSide,
        ["--dock-delay" as any]: dockDelay,
      }}
      className={`ebix-ai-card ebix-product-card home-tilt-card group ${
        inView ? "ebix-dock-attached" : "ebix-dock-waiting"
      } ${isTiltActive ? "tilt-active" : ""}`}
    >
      {/* Specular Spotlight Following Cursor */}
      <span className="home-tilt-light" aria-hidden="true" />

      {/* Top Header / Icon + 2-digit index */}
      <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-100 text-[#1746A2] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1746A2] group-hover:text-white shadow-xs">
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <span className="text-xs font-bold text-slate-400 tracking-wider font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Category Eyebrow */}
      <span className="eyebrow relative z-10">{prod.full}</span>

      {/* Title */}
      <h3
        className="relative z-10 text-2xl font-black text-[#0F172A] tracking-tight mb-2 group-hover:text-[#1746A2] transition-colors"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Inzovate {prod.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed mb-6 relative z-10">
        {prod.desc}
      </p>

      {/* Feature Checklist */}
      <div className="mb-6 pt-4 border-t border-slate-100 relative z-10">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3">
          Key Capabilities
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-2">
          {prod.features.map((feat) => (
            <div
              key={feat}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700"
            >
              <CheckCircle2
                size={14}
                className="text-blue-600 flex-shrink-0"
              />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-auto relative z-10">
        <Link
          to="/pricing"
          className="flex-1 py-3 px-4 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 shadow-sm hover:shadow-md hover:border-slate-500 transition-all duration-200 flex items-center justify-center gap-1.5 group/btn cursor-pointer"
        >
          <InzovateFaviconIcon size={14} className="text-blue-400" />
          <span>Start Free Trial</span>
          <ArrowRight
            size={13}
            className="group-hover/btn:translate-x-1 transition-transform text-blue-400"
          />
        </Link>
        <Link
          to={`/products/${prod.id}`}
          className="py-3 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-blue-600 transition-colors flex items-center justify-center gap-1"
        >
          <span>Explore Page</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

export default function Products() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoProduct, setDemoProduct] = useState("");
  const [activeDetailProduct, setActiveDetailProduct] = useState<
    (typeof productsList)[0] | null
  >(null);

  const matrixRef = useRef<HTMLDivElement>(null);
  const matrixInView = useInView(matrixRef, { once: false, margin: "-40px" });

  const openDemoModal = (prodName: string) => {
    setDemoProduct(prodName);
    setDemoOpen(true);
  };

  return (
    <main className="bg-[#F8FAFC] overflow-hidden">
      <SEO
        title="Enterprise Software Products | ERP, CRM, SCM, HRM & BI | Inzovate Technologies"
        description="Explore enterprise software products built by Inzovate Technologies Private Limited: ERP, CRM, SCM, Billing, HRM, and Business Intelligence solutions for growing businesses."
        canonical="https://inzovate-technologies.com/products"
        keywordString="Inzovate Technologies, enterprise ERP software, custom CRM solutions, supply chain software, HRM software India, Business Intelligence tools Tamil Nadu"
        pageType="website"
      />
      {/* ── 1. MAIN HERO SECTION ── */}
      <section className="relative pt-6 sm:pt-8 md:pt-10 pb-14 overflow-hidden bg-[#F8FAFC]">
        {/* Abstract Dotted Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.35) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Interactive Particle Title (Dissolve, swirl & gather transition in Black & Blue) */}
            <ParticleTitle
              text={"Powerful Products.\nEndless Possibilities."}
              as="h1"
              className="h-[180px] sm:h-[220px] md:h-[240px] lg:h-[250px] w-full max-w-6xl mb-3 sm:mb-4"
            />

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Purpose-built software products designed to streamline operations, improve decisions and drive sustainable business growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-full border border-slate-700 shadow-lg shadow-slate-900/15 hover:shadow-xl hover:border-slate-500 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <InzovateFaviconIcon size={18} className="text-blue-400" />
                <span>Start Free Trial — View Pricing</span>
                <ArrowRight size={18} className="text-blue-400" />
              </Link>
              <a
                href="#products-grid"
                className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 font-bold text-sm bg-white/80 hover:bg-slate-100 backdrop-blur-md transition-colors flex items-center gap-1.5"
              >
                <span>Explore 6 Products</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── ENTERPRISE STATS / TRUST BAR (EBIX CONNECTED-STATS SYSTEM) ── */}
        <div className="mt-14 relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full z-10">
          <EbixConnectedStats />
        </div>
      </section>

      {/* ── 2. PRODUCTS GRID SECTION (ERP, CRM, SCM, BILLING, HRM, BI) ── */}
      <section
        id="products-grid"
        className="ebix-ai-section relative py-16 lg:py-20 bg-[#F8FAFC]"
        aria-labelledby="products-grid-heading"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <FadeIn className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1746A2] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-4 inline-block">
              ENTERPRISE SOFTWARE SUITE
            </span>
            <h2
              id="products-grid-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Engineered for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Enterprise Scale
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive software solutions tailored for high-growth businesses and digital-first organizations.
            </p>
          </FadeIn>

          {/* 3-Column x 2-Row Ebix AI Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((prod, i) => (
              <EbixAiProductCard key={prod.id} prod={prod} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ENTERPRISE FEATURE COMPARISON MATRIX (EBIX SERVICES-SECTION ANIMATION) ── */}
      <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div
            ref={matrixRef}
            className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated ${
              matrixInView ? "animate" : ""
            }`}
          >
            {/* Top-Animated Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 top-animated">
              <span className="services-fade-down text-[11px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 inline-block mb-3">
                PRODUCT COMPARISON MATRIX
              </span>
              <h2
                className="services-fade-down services-delay-1 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Enterprise Features at a Glance
              </h2>
              <p className="services-fade-down services-delay-2 text-slate-600 text-sm sm:text-base mt-2">
                Compare core capabilities across our entire suite of 6 enterprise software solutions.
              </p>
            </div>

            {/* Middle-Animated Matrix Table */}
            <div className="middle-animated services-fade-down services-delay-3 table-matrix-wrapper overflow-x-auto rounded-3xl border border-slate-200/80 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/90 text-slate-800">
                    <th className="p-4 sm:p-6 text-xs font-bold uppercase tracking-wider text-slate-900">
                      Enterprise Feature
                    </th>
                    <th className="p-4 sm:p-6 text-xs font-extrabold text-center text-blue-600">
                      ERP
                    </th>
                    <th className="p-4 sm:p-6 text-xs font-extrabold text-center text-cyan-600">
                      CRM
                    </th>
                    <th className="p-4 sm:p-6 text-xs font-extrabold text-center text-purple-600">
                      SCM
                    </th>
                    <th className="p-4 sm:p-6 text-xs font-extrabold text-center text-sky-600">
                      BILLING
                    </th>
                    <th className="p-4 sm:p-6 text-xs font-extrabold text-center text-emerald-600">
                      HRM
                    </th>
                    <th className="p-4 sm:p-6 text-xs font-extrabold text-center text-orange-600">
                      BI
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                  {comparisonMatrix.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={`transition-colors duration-200 hover:bg-blue-50/60 ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <td className="p-4 sm:p-5 font-bold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {row.erp ? (
                          <Check size={16} className="mx-auto text-blue-600" />
                        ) : (
                          <Minus size={16} className="mx-auto text-slate-300" />
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {row.crm ? (
                          <Check size={16} className="mx-auto text-cyan-600" />
                        ) : (
                          <Minus size={16} className="mx-auto text-slate-300" />
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {row.scm ? (
                          <Check size={16} className="mx-auto text-purple-600" />
                        ) : (
                          <Minus size={16} className="mx-auto text-slate-300" />
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {row.billing ? (
                          <Check size={16} className="mx-auto text-sky-600" />
                        ) : (
                          <Minus size={16} className="mx-auto text-slate-300" />
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {row.hrm ? (
                          <Check size={16} className="mx-auto text-emerald-600" />
                        ) : (
                          <Minus size={16} className="mx-auto text-slate-300" />
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        {row.bi ? (
                          <Check size={16} className="mx-auto text-orange-600" />
                        ) : (
                          <Minus size={16} className="mx-auto text-slate-300" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom-Animated Legend & Action Band */}
            <div className="bottom-animated services-fade-down services-delay-4 mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <Check size={15} className="text-blue-600" /> Core platform feature
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-slate-400">
                  <Minus size={15} className="text-slate-300" /> Available via add-on module
                </span>
              </div>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Compare full pricing &amp; enterprise editions</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ENTERPRISE PLATFORM ARCHITECTURE SECTION ── */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#F4F7FB] via-white to-[#F8FAFC] text-slate-900 overflow-hidden border-t border-slate-200">
        {/* Background Ambient Glows */}
        <div
          className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(124, 58, 237, 0.06) 50%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.10) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 75%)",
            filter: "blur(80px)",
          }}
        />

        {/* Digital Grid Lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.25) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-md mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-600">
                  ENTERPRISE PLATFORM ARCHITECTURE
                </span>
              </div>

              {/* Headline */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] mb-6 text-slate-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Built for Speed,{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Security &amp; Infinite Scale
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Our products share a unified enterprise engine designed to power critical business operations safely and seamlessly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Link
                  to="/pricing"
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-full border border-slate-700 shadow-lg shadow-slate-900/15 hover:shadow-xl hover:border-slate-500 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <InzovateFaviconIcon size={18} className="text-blue-400" />
                  <span>Start Free Trial — View Pricing</span>
                  <ArrowRight size={18} className="text-blue-400" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ── FOUR PREMIUM HORIZONTAL FEATURE CARDS ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureFeatureCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <FadeIn key={card.id} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group relative flex flex-col justify-between h-full p-8 rounded-[24px] border border-slate-200 bg-white backdrop-blur-xl shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Top Accent Color Line */}
                    <div
                      className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${card.topLine}`}
                    />

                    <div>
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl border ${card.iconGlow} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}
                      >
                        <CardIcon size={26} strokeWidth={1.8} />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-lg font-bold text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span>Enterprise Standard</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. "NOT SURE WHICH PRODUCT FITS?" CTA SECTION ── */}
      <section className="relative py-12 lg:py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative rounded-[36px] lg:rounded-[44px] border border-blue-100 overflow-hidden p-8 sm:p-12 lg:p-16 shadow-lg bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#EFF6FF] text-slate-900 transition-all duration-300 hover:shadow-xl hover:border-blue-200">
              {/* Background Ambient Glows */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full pointer-events-none opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(124, 58, 237, 0.08) 50%, transparent 80%)",
                  filter: "blur(80px)",
                }}
              />

              {/* Subtle Tech Grid Pattern */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(15, 23, 42, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.25) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* MAIN CONTENT LAYOUT */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* LEFT SIDE: HEADSET VISUAL */}
                <div className="lg:col-span-3 flex justify-center lg:justify-start">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                    {/* Circular Rings */}
                    <div className="absolute inset-0 rounded-full border border-blue-200/80 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute -inset-3 rounded-full border border-purple-200/80 border-dashed animate-[spin_30s_linear_infinite_reverse]" />
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100/60 to-purple-100/60 blur-md" />

                    {/* Floating Headset Container */}
                    <motion.div
                      animate={{ y: [-6, 6, -6], rotate: [0, 4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#1746A2] via-blue-600 to-indigo-600 border border-blue-300/40 shadow-lg shadow-blue-500/25 flex items-center justify-center text-white"
                    >
                      <Headphones className="w-10 h-10 sm:w-12 sm:h-12 text-blue-100 stroke-[1.8]" />
                    </motion.div>
                  </div>
                </div>

                {/* CENTER CONTENT */}
                <div className="lg:col-span-6 text-center lg:text-left relative">
                  {/* Headline */}
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Not Sure Which Product Fits?
                  </h2>

                  {/* Subtitle */}
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Our experts will help you identify the perfect technology solution for your specific business needs.
                  </p>

                  {/* Desktop Curved Connection Line */}
                  <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-28 h-14 pointer-events-none">
                    <svg viewBox="0 0 120 60" className="w-full h-full">
                      <path
                        d="M 10,30 Q 60,5 110,30"
                        fill="none"
                        stroke="#93C5FD"
                        strokeWidth="2.5"
                        strokeDasharray="5 5"
                      />
                      <circle cx="60" cy="18" r="3.5" fill="#3B82F6" className="animate-ping" />
                      <circle cx="60" cy="18" r="3.5" fill="#2563EB" />
                    </svg>
                  </div>
                </div>

                {/* RIGHT SIDE CTA BUTTON */}
                <div className="lg:col-span-3 flex justify-center lg:justify-end">
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-3 px-8 py-4 sm:px-9 sm:py-4.5 rounded-full font-extrabold text-white text-sm tracking-wide bg-slate-900 hover:bg-slate-800 border border-slate-700 shadow-xl shadow-slate-900/20 hover:border-slate-500 hover:scale-105 transition-all duration-300 group cursor-pointer"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <InzovateFaviconIcon size={18} className="text-blue-400" />
                    <span>Start Free Trial — View Pricing</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1.5 transition-transform duration-300 text-blue-400"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product Deep Specification Modal */}
      <ProductDetailModal
        product={activeDetailProduct}
        onClose={() => setActiveDetailProduct(null)}
        onRequestDemo={openDemoModal}
      />

      {/* Demo Request Modal */}
      <DemoModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        defaultProduct={demoProduct}
      />
    </main>
  );
}
