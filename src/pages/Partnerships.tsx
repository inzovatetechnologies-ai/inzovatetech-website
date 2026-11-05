import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Cloud,
  Bot,
  Shield,
  Code2,
  Workflow,
  Layers,
  Building2,
  Zap,
  Cpu,
  Globe,
  Lock,
  BarChart3,
  Check,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Rocket,
} from "lucide-react";
import {
  HeroPartnershipVisual,
  EcosystemPhilosophyDiagram,
  AwsCloudVisual,
  ZohoCloudVisual,
  ConnectedEcosystemDiagram,
} from "../components/PartnershipVisuals";
import DemoModal from "../components/DemoModal";
import SEO from "../components/SEO";
import { AmberAsciiRain } from "@/components/ui/amber-ascii-rain";

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── AWS CAPABILITIES DATA ──
const awsCapabilities = [
  "AWS Cloud Architecture",
  "Cloud Migration",
  "Application Deployment",
  "Infrastructure Management",
  "Serverless Architecture",
  "Cloud Security",
  "DevOps & CI/CD",
  "Data & Analytics",
  "Cloud Optimization",
];

// ── ZOHO CAPABILITIES DATA ──
const zohoCapabilities = [
  "Zoho CRM",
  "Zoho Books",
  "Zoho People",
  "Zoho Projects",
  "Zoho Creator",
  "Zoho Analytics",
  "Zoho Desk",
  "Zoho Campaigns",
  "Zoho Workplace",
  "Zoho One",
];

// ── 8 TECHNOLOGY ECOSYSTEM CATEGORIES ──
const ecoCategories = [
  {
    id: 1,
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Scalable, secure and high-performance cloud platforms.",
    accent: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.25)",
  },
  {
    id: 2,
    icon: Bot,
    title: "AI & Data",
    desc: "Intelligent data solutions that drive insights and automation.",
    accent: "from-purple-500 to-violet-400",
    glowColor: "rgba(139, 92, 246, 0.25)",
  },
  {
    id: 3,
    icon: Shield,
    title: "Cybersecurity",
    desc: "Advanced security technologies that protect what matters.",
    accent: "from-emerald-400 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
  {
    id: 4,
    icon: Code2,
    title: "Software Platforms",
    desc: "Modern platforms and tools that accelerate development.",
    accent: "from-indigo-500 to-blue-600",
    glowColor: "rgba(99, 102, 241, 0.25)",
  },
  {
    id: 5,
    icon: Workflow,
    title: "DevOps & Automation",
    desc: "Automate delivery, streamline operations and improve reliability.",
    accent: "from-cyan-400 to-teal-400",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
  {
    id: 6,
    icon: Layers,
    title: "Digital Experience",
    desc: "Create engaging digital experiences that delight customers.",
    accent: "from-pink-500 to-purple-500",
    glowColor: "rgba(236, 72, 153, 0.25)",
  },
  {
    id: 7,
    icon: Building2,
    title: "Enterprise Technology",
    desc: "Robust enterprise-grade solutions for complex business needs.",
    accent: "from-blue-600 to-indigo-600",
    glowColor: "rgba(37, 99, 235, 0.25)",
  },
  {
    id: 8,
    icon: Zap,
    title: "Business Solutions",
    desc: "Strategic solutions that drive efficiency and business growth.",
    accent: "from-amber-400 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.25)",
  },
];

// ── WHY PARTNER WITH INZOVATE CARDS ──
const whyPartner = [
  {
    icon: Cpu,
    title: "Technology Expertise",
    desc: "Deep expertise across modern technology ecosystems.",
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    desc: "Solutions designed to grow with your business.",
  },
  {
    icon: Lock,
    title: "Trusted Ecosystem",
    desc: "Access to a broad network of technology capabilities.",
  },
  {
    icon: BarChart3,
    title: "Business Impact",
    desc: "Technology strategies focused on measurable business outcomes.",
  },
];

export default function Partnerships() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Strategic Partnership");

  const ecosystemCardRef = useRef<HTMLDivElement>(null);
  const ecosystemInView = useInView(ecosystemCardRef, { once: false, amount: 0.15 });

  const techEcoRef = useRef<HTMLElement>(null);
  const techEcoInView = useInView(techEcoRef, { once: false, amount: 0.15 });

  const ctaBannerRef = useRef<HTMLDivElement>(null);
  const ctaBannerInView = useInView(ctaBannerRef, { once: false, amount: 0.15 });

  const openPartnerModal = (topic: string) => {
    setModalTopic(topic);
    setDemoOpen(true);
  };

  return (
    <main className="bg-[#FFFFFF] text-slate-900 min-h-screen overflow-hidden">
      <SEO
        title="Strategic Technology Partnerships | AWS & Zoho Partners | Inzovate Technologies"
        description="Inzovate Technologies Private Limited collaborates with global technology leaders including Amazon Web Services (AWS) and Zoho to deliver cloud, CRM, ERP, and automation solutions."
        canonical="https://inzovate-technologies.com/strategic-partnerships"
        keywordString="Inzovate Technologies, AWS partner Tamil Nadu, Zoho partner Erode, AWS cloud consulting, Zoho implementation India, cloud infrastructure Bhavani Salem Coimbatore"
        pageType="website"
      />

      <div className="sh-spacer" />

      {/* ── SECTION 1 — ULTRA-PREMIUM PARTNERSHIPS HERO & ECOSYSTEM (WHITE THEME) ── */}
      <section className="relative pt-24 sm:pt-32 pb-16 bg-gradient-to-b from-[#F4F7FB] via-white to-[#F8FAFC] text-slate-900 overflow-hidden border-b border-slate-200" aria-labelledby="partnerships-hero-heading">
        {/* Amber ASCII Code Rain Background Layer with Boosted Contrast */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_90%_80%_at_50%_45%,black_60%,transparent_98%)]">
          <AmberAsciiRain
            className="w-full h-full opacity-80 sm:opacity-85"
            cellSize={14}
            tint="#F5B944"
            speed={14}
            scanLines={true}
            bloom={true}
            shimmer={true}
            matrixDensity={16}
          />
        </div>

        {/* 4-Edge & Corner Seamless Theme Blending Overlays */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F4F7FB] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F4F7FB] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent pointer-events-none" />

        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-blue-100/35 rounded-full blur-[140px] pointer-events-none" />

        {/* Soft Grid Lines */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 space-y-16 lg:space-y-20 z-10">
          
          {/* HERO INTRO WITH SH-SPACER OPENING ANIMATION & TRANSITIONS */}
          <div className="text-center max-w-3xl mx-auto space-y-6 home-banner-animate animate">
            <div className="fade-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 shadow-xs mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-700 font-mono">
                  STRATEGIC TECHNOLOGY PARTNERSHIPS
                </span>
              </div>
            </div>

            <div className="fade-right delay-1">
              <h1
                id="partnerships-hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight font-heading"
              >
                <span className="text-slate-900">Powering Business Transformation Through </span>
                <span className="text-blue-600">
                  Trusted Technology
                </span>
              </h1>
            </div>

            <div className="fade-left delay-2">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                We work with globally trusted technology platforms to help businesses build, transform, automate and scale with confidence.
              </p>
            </div>
          </div>

          {/* LARGE PREMIUM GLASSMORPHISM PANEL (WHITE THEME WITH WHAT ARE YOU LOOKING FOR ANIMATION & TRANSITIONS) */}
          <div
            ref={ecosystemCardRef}
            className={`homewhatweboxbg whatareyou-animate relative rounded-[32px] border border-slate-200 bg-white shadow-xl overflow-hidden p-8 sm:p-12 lg:p-14 transition-all duration-700 ${
              ecosystemInView ? "animate" : ""
            }`}
            style={{ userSelect: "none" }}
          >
            {/* THREE-COLUMN ECOSYSTEM LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
              
              {/* LEFT: AWS PANEL */}
              <div className="fade-left delay-1 lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/70 shadow-xs hover:border-amber-400/60 hover:shadow-lg transition-all duration-300 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="px-4 py-3 rounded-xl bg-white border border-amber-300 shadow-xs inline-block">
                    <img src="/aws-logo.png" alt="Amazon Web Services" className="h-8 w-auto object-contain" />
                  </div>
                  <span className="px-3 py-1 rounded-full border border-amber-300 bg-amber-50 text-[10px] font-extrabold uppercase tracking-wider text-amber-800 font-mono">
                    Premier Tier Services Partner
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight font-heading">
                    Amazon Web Services
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cloud infrastructure, migration, deployment, security and DevOps solutions built on AWS.
                  </p>
                </div>

                {/* AWS Capabilities Grid */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["AWS Cloud","Cloud Migration","Cloud Infrastructure","Cloud Security","Cloud Deployment","DevOps"].map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1.5 rounded-lg border border-amber-200 bg-white text-amber-800 text-xs font-semibold hover:bg-amber-50 transition-colors shadow-xs"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* CENTER: INZOVATE ECOSYSTEM HUB */}
              <div className="fade-left delay-2 lg:col-span-2 flex flex-col items-center justify-center relative py-4 lg:py-0">
                <div className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-amber-400/60 via-blue-500 to-rose-400/60 pointer-events-none" />
                
                <div className="relative z-10 p-4 sm:p-5 rounded-2xl border border-blue-200 bg-white shadow-lg text-center flex flex-col items-center gap-2 group hover:scale-105 transition-transform duration-300">
                  <div className="relative w-14 h-14 rounded-xl bg-slate-50 p-2 flex items-center justify-center shadow-xs border border-blue-100">
                    <img src="/inzovate-logo.png" alt="Inzovate Technologies" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-[0.2em] text-slate-900 block uppercase font-mono">
                      INZOVATE
                    </span>
                    <span className="text-[8px] font-bold tracking-widest text-blue-600 uppercase block">
                      TECHNOLOGIES
                    </span>
                  </div>
                </div>

                <span className="mt-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 font-mono">
                  Ecosystem Hub
                </span>
              </div>

              {/* RIGHT: ZOHO PANEL */}
              <div className="fade-right delay-3 lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/70 shadow-xs hover:border-rose-400/60 hover:shadow-lg transition-all duration-300 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="px-4 py-3 rounded-xl bg-white border border-rose-300 shadow-xs inline-block">
                    <img src="/zoho-logo-nav.png" alt="Zoho" className="h-7 w-auto object-contain" />
                  </div>
                  <span className="px-3 py-1 rounded-full border border-rose-300 bg-rose-50 text-[10px] font-extrabold uppercase tracking-wider text-rose-800 font-mono">
                    Official Zoho Partner
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight font-heading">
                    Zoho Enterprise Suite
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Business applications and automation solutions across CRM, finance, HR, and operations.
                  </p>
                </div>

                {/* Zoho Capabilities Grid */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Zoho CRM","Zoho Books","Zoho People","Zoho Recruit","Zoho Desk","Zoho Mail","Zoho Creator","Zoho Inventory","Zoho One"].map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1.5 rounded-lg border border-rose-200 bg-white text-rose-800 text-xs font-semibold hover:bg-rose-50 transition-colors shadow-xs"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* CONTENT BLOCK BELOW ECOSYSTEM INSIDE PANEL */}
            <div className="fade-left delay-4 mt-12 pt-10 border-t border-slate-100 text-center max-w-3xl mx-auto space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-heading">
                One technology partner. Multiple possibilities.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From cloud infrastructure to business automation, we bring trusted platforms together to create secure, scalable and intelligent solutions.
              </p>
            </div>

          </div>

          {/* MODERN SERVICE TAGS CHIPS */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Cloud Solutions","Business Automation","CRM & ERP","HR Technology","Digital Transformation","Cloud Consulting","Integration & Migration","Managed Technology Services"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-slate-50 transition-all duration-300 shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* PREMIUM CTA BUTTON */}
          <div className="text-center pt-2">
            <button
              onClick={() => openPartnerModal("Partner Program Inquiry")}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span>Explore All Partnerships</span>
              <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>

          {/* SLEEK STATISTICS STRIP BELOW PARTNERSHIPS */}
          <FadeIn delay={0.3} className="pt-8">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { value: "50+", label: "Expert Professionals", icon: Users, accent: "text-blue-600" },
                  { value: "120+", label: "Projects Delivered", icon: Rocket, accent: "text-purple-600" },
                  { value: "20+", label: "Global Clients", icon: Globe, accent: "text-emerald-600" },
                  { value: "10+", label: "Years of Excellence", icon: Award, accent: "text-amber-600" },
                ].map((stat) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="relative p-5 rounded-2xl border border-slate-100 bg-slate-50 text-center hover:border-blue-200 hover:bg-white transition-all duration-300 group shadow-xs"
                    >
                      <div className="inline-flex p-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                        <StatIcon size={18} />
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading mb-1">
                        <span className={stat.accent}>{stat.value}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide">
                        {stat.label}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── SECTION 2 — PARTNERSHIP PHILOSOPHY (WHITE / LIGHT CONTRAST) ── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <FadeIn>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block mb-4">
                OUR PHILOSOPHY
              </span>
              <h2
                className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Better Together
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                By aligning with best-in-class technology ecosystems, we extend our capabilities and deliver solutions that are more powerful, reliable and comprehensive than what any single vendor can offer.
              </p>
            </FadeIn>

            {/* Right Side Philosophy Network Diagram */}
            <FadeIn delay={0.15}>
              <EcosystemPhilosophyDiagram />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — AWS CLOUD PARTNERSHIP (WHITE THEME) ── */}
      <section className="relative py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Info */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-3.5 mb-6">
                  <div className="px-4 py-2 rounded-xl bg-white border border-amber-300 shadow-xs flex items-center justify-center">
                    <img src="/aws-logo.png" alt="Amazon Web Services" className="h-7 w-auto object-contain" />
                  </div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-300 bg-amber-50">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                    <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-amber-800 font-mono">
                      AMAZON WEB SERVICES
                    </span>
                  </div>
                </div>

                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Cloud Innovation.
                  <br />
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                    Built to Scale.
                  </span>
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                  INZOVATE TECHNOLOGIES works with AWS to help organizations build, deploy and scale secure and reliable cloud solutions tailored to their business needs.
                </p>

                <button
                  onClick={() => openPartnerModal("AWS Cloud Solutions")}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-extrabold text-white text-sm tracking-wide bg-amber-600 hover:bg-amber-700 shadow-md shadow-amber-500/25 hover:scale-105 transition-all duration-300 group mb-10 cursor-pointer"
                >
                  <span>Explore AWS Solutions</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </FadeIn>

              {/* AWS Capability Glass Panel */}
              <FadeIn delay={0.15}>
                <div className="p-7 rounded-[26px] border border-slate-200 bg-white shadow-sm">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-amber-800 mb-5">
                    AWS CAPABILITIES
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {awsCapabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3 py-1.5 text-xs font-semibold text-slate-700">
                        <div className="w-5 h-5 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-200">
                          <Check size={12} />
                        </div>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column AWS Visual */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <AwsCloudVisual />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3.5 — ZOHO TECHNOLOGY PARTNERSHIP (WHITE THEME) ── */}
      <section className="relative py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Info */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-3.5 mb-6">
                  <div className="px-4 py-2 rounded-xl bg-white border border-rose-300 shadow-xs flex items-center justify-center">
                    <img src="/zoho-logo-photoroom.png" alt="Zoho Partner" className="h-7 w-auto object-contain" />
                  </div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-rose-300 bg-rose-50">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-rose-800 font-mono">
                      BUSINESS APPLICATIONS
                    </span>
                  </div>
                </div>

                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Business Solutions.
                  <br />
                  <span className="bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
                    Powered by Zoho.
                  </span>
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                  INZOVATE TECHNOLOGIES partners with Zoho to help businesses streamline operations, improve productivity and build connected digital workflows with powerful cloud business applications.
                </p>

                <button
                  onClick={() => openPartnerModal("Zoho Solutions Inquiry")}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-extrabold text-white text-sm tracking-wide bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-500/25 hover:scale-105 transition-all duration-300 group mb-10 cursor-pointer"
                >
                  <span>Explore Zoho Solutions</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </FadeIn>

              {/* Zoho Capability Glass Panel */}
              <FadeIn delay={0.15}>
                <div className="p-7 rounded-[26px] border border-slate-200 bg-slate-50 shadow-sm">
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-rose-800 mb-5">
                    ZOHO CAPABILITIES
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {zohoCapabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3 py-1.5 text-xs font-semibold text-slate-700">
                        <div className="w-5 h-5 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 border border-rose-200">
                          <Check size={12} />
                        </div>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column Zoho Visual */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <ZohoCloudVisual />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — PARTNER ECOSYSTEM (WHITE / LIGHT CONTRAST) ── */}
      <section id="partner-ecosystem" className="py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block mb-4">
                  PARTNER ECOSYSTEM
                </span>
                <h2
                  className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Business Technology.
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Connected.
                  </span>
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                  INZOVATE TECHNOLOGIES connects businesses with leading technology ecosystems, platforms and solutions that drive innovation, efficiency and growth.
                </p>
                <button
                  onClick={() => openPartnerModal("Ecosystem Integration")}
                  className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Connect Your Ecosystem</span>
                  <ArrowRight size={15} />
                </button>
              </FadeIn>
            </div>

            {/* Right Diagram */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.15}>
                <ConnectedEcosystemDiagram />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — TECHNOLOGY ECOSYSTEM (WHITE THEME GRID WITH ABOUT-INDUSTRIES FLIPBOX ANIMATION & TRANSITIONS) ── */}
      <section
        ref={techEcoRef}
        className="relative py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200"
      >
        <div className="about-industries !bg-transparent !p-0">
          <div
            className={`max-w-[1440px] mx-auto px-6 lg:px-12 newmrhomebox flipbox-section ${
              techEcoInView ? "animate" : ""
            }`}
          >
            <div className="text-center max-w-3xl mx-auto mb-16 flipbox-fade-down">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-4 inline-block shadow-xs">
                TECHNOLOGY ECOSYSTEM
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Partners That Power Progress
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Explore the core technology domains driving modern digital enterprise transformation.
              </p>
            </div>

            {/* 8 Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecoCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.id}
                    className={`flipbox-fade-down flipbox-delay-${Math.min(idx + 1, 8)}`}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      onClick={() => openPartnerModal(cat.title)}
                      className="group cursor-pointer relative flex flex-col justify-between h-full p-7 rounded-[20px] border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div>
                        {/* Icon */}
                        <div
                          className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs"
                        >
                          <Icon size={22} />
                        </div>

                        {/* Title */}
                        <h3
                          className="text-lg font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {cat.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {cat.desc}
                        </p>
                      </div>

                      <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span>Explore Capability</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — WHY PARTNER WITH INZOVATE (ELEGANT LIGHT CARDS) ── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-4 inline-block shadow-xs">
              VALUE PROPOSITION
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why Partner With INZOVATE?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={idx * 0.1}>
                  <div className="p-7 rounded-[22px] border border-slate-200 bg-slate-50 shadow-sm hover:border-blue-200 hover:bg-white transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100 shadow-xs">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — FINAL CTA (WITH IMAGE-HOVER-CONTENT ANIMATION & TRANSITIONS) ── */}
      <section
        ref={ctaBannerRef}
        className={`relative py-16 lg:py-20 bg-[#F8FAFC] border-t border-slate-200 careers-animate ${
          ctaBannerInView ? "animate" : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div
            className="image-hover-content services-cta-banner relative rounded-[36px] lg:rounded-[44px] border border-slate-200 overflow-hidden p-8 sm:p-14 lg:p-16 text-center shadow-xl bg-gradient-to-br from-white via-[#F8FAFC] to-blue-50/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300 group"
          >
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="fade-down careers-delay-1 text-[11px] font-extrabold uppercase tracking-widest text-[#1746A2] bg-blue-50/90 px-4 py-1.5 rounded-full border border-blue-200 mb-5 inline-block">
                STRATEGIC COLLABORATION
              </span>

              <h2
                className="fade-left careers-delay-2 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Let’s Build What’s Next.
              </h2>

              <p className="fade-left careers-delay-3 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Partner with INZOVATE TECHNOLOGIES to transform ideas into scalable, secure and future-ready solutions.
              </p>

              <div className="fade-left careers-delay-3 flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => openPartnerModal("Start a Partnership")}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-extrabold text-white text-base tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <span>Start a Partnership</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-300 text-slate-800 font-bold text-base bg-white hover:bg-slate-50 hover:border-blue-400 hover:-translate-y-0.5 shadow-sm transition-all"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Partnership Request Modal */}
      <DemoModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        defaultProduct={modalTopic}
      />
    </main>
  );
}
