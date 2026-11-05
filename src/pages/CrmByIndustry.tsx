import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  HardHat,
  Truck,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO";
import CrmLeadForm from "../components/CrmLeadForm";
import CrmWhyChooseInzovate from "../components/CrmWhyChooseInzovate";
import CrmFaqSection from "../components/CrmFaqSection";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

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

const crmIndustries = [
  {
    title: "CRM for Publishing",
    href: "/crm-for-publishing",
    icon: BookOpen,
    color: "#3B82F6",
    tagline: "Manage Authors, Leads, Subscriptions & Publishing Relationships",
    desc: "Streamline publishing sales, author onboarding, manuscript submission tracking, print & digital subscriptions, and ad space sales.",
    badges: ["Author Profiles", "Subscription Tracking", "Ad Lead Pipeline"],
  },
  {
    title: "CRM for Construction",
    href: "/crm-for-construction",
    icon: HardHat,
    color: "#06B6D4",
    tagline: "Manage Construction Leads, Clients, Projects & Sales",
    desc: "Convert more enquiries into construction deals. Track multi-source leads, site inspection visits, quotation approvals, and long sales cycles.",
    badges: ["Site Visit Logging", "Quotation Pipeline", "Builder Dashboard"],
  },
  {
    title: "CRM for Transportation",
    href: "/crm-for-transportation",
    icon: Truck,
    color: "#8B5CF6",
    tagline: "Manage Customers, Enquiries, Quotations & Fleet Accounts",
    desc: "Build stronger shipper relationships. Manage freight quotations, spot rates, recurring customer accounts, and multi-branch sales reps.",
    badges: ["Freight Spot Rates", "Account Renewal Alerts", "Sales Analytics"],
  },
  {
    title: "CRM for HR & Recruitment",
    href: "/crm-for-hr",
    icon: Users,
    color: "#10B981",
    tagline: "Manage Candidates, Clients, Recruitments & Follow-Ups",
    desc: "A dedicated recruitment relationship management CRM. Sourced candidate tracking, resume parsing, interview scheduling, and client vacancy management.",
    badges: ["Candidate Sourcing", "Interview Scheduling", "Recruitment Pipeline"],
  },
  {
    title: "CRM for Test Management",
    href: "/crm-for-test-management",
    icon: GraduationCap,
    color: "#F59E0B",
    tagline: "Manage Test Registrations, Candidates, Schedules & Assessments",
    desc: "End-to-end examination and assessment management. Handle registrations, batch allocations, attendance verification, score publishing, and automated alerts.",
    badges: ["Candidate Allocation", "Attendance Monitoring", "Score Publishing"],
  },
];

// ── EBIX AI-STYLE INTERACTIVE INDUSTRY CARD ──
function EbixAiIndustryCard({
  item,
  index,
}: {
  item: (typeof crmIndustries)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: false, margin: "0px 0px -60px 0px" });
  const [isTiltActive, setIsTiltActive] = useState(false);
  const IconComp = item.icon;

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

      {/* Top Header: Brand Icon & Counter */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-100 text-[#1746A2] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1746A2] group-hover:text-white shadow-xs">
          <IconComp size={24} strokeWidth={1.8} />
        </div>
        <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
          0{index + 1}
        </span>
      </div>

      <span className="eyebrow relative z-10">{item.tagline}</span>

      <h3
        className="text-2xl font-black text-[#0F172A] group-hover:text-[#1746A2] transition-colors mb-2 tracking-tight relative z-10"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {item.title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
        {item.desc}
      </p>

      {/* Badges / Capabilities */}
      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {item.badges.map((b) => (
          <span
            key={b}
            className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700"
          >
            {b}
          </span>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-2.5 mt-auto pt-4 border-t border-slate-100 relative z-10">
        <Link
          to={item.href}
          className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
        >
          <span>Explore {item.title}</span>
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/pricing"
          className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-bold text-xs shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <InzovateFaviconIcon size={14} className="text-blue-400" />
          <span>Start Free Trial — View Pricing</span>
          <ArrowRight size={13} className="text-blue-400" />
        </Link>
      </div>
    </div>
  );
}

export default function CrmByIndustry() {
  const scrollToForm = () => {
    const el = document.getElementById("lead-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <SEO
        title="CRM Solutions by Industry | Inzovate Technologies"
        description="Explore enterprise CRM solutions customized by industry for Publishing, Construction, Transportation, HR & Recruitment, and Test Management."
        canonicalUrl="https://inzovate-technologies.com/crm-by-industry"
        keywords="CRM by industry, publishing CRM, construction CRM, transportation CRM, recruitment CRM, test management CRM"
        breadcrumbs={[
          { name: "Home", url: "https://inzovate-technologies.com" },
          { name: "CRM Solutions by Industry", url: "https://inzovate-technologies.com/crm-by-industry" }
        ]}
      />

      {/* HERO SECTION */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />

        <div className="sh-spacer" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 home-banner-animate animate">
          <div className="fade-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Industry-Specific CRM Solutions
            </h1>
          </div>
          <div className="fade-right delay-1">
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Generic CRMs force your business to adapt to their rules. Inzovate builds tailored CRM platforms engineered around your specific industry workflows, customer touchpoints, and sales pipelines.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 fade-left delay-2">
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
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400 font-bold rounded-full shadow-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Get Free CRM Strategy Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* CARDS GRID SECTION (EBIX-AI-SECTION) */}
      <section
        id="products-grid"
        className="ebix-ai-section relative py-16 lg:py-20 bg-[#F8FAFC] border-t border-slate-200"
        aria-labelledby="products-grid-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-3">
              Tailored CRM Workflows
            </span>
            <h2
              id="products-grid-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Choose Your Industry Landing Page
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Explore specialized CRM solutions designed for high-conversion lead generation, transparent pipelines, and end-to-end workflow automation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmIndustries.map((item, idx) => (
              <EbixAiIndustryCard key={item.title} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE INZOVATE */}
      <CrmWhyChooseInzovate />

      {/* LEAD FORM */}
      <CrmLeadForm defaultIndustry="Publishing" pageTitle="CRM by Industry Hub" hideBadge={true} />

      {/* GENERAL FAQ */}
      <CrmFaqSection />
    </div>
  );
}
