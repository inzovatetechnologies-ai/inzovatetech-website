import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Cloud,
  Bot,
  Shield,
  Layers,
  Zap,
  ArrowRight,
  Globe,
  Cpu,
  BarChart3,
  Lock,
  Workflow,
  CheckCircle2,
  Award,
  Users,
  Rocket,
  Check,
} from "lucide-react";
import DemoModal from "../components/DemoModal";
import SEO from "../components/SEO";
import HomePricingPromoIcon from "../components/HomePricingPromoIcon";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";
import SculptureHero from "@/components/ui/liquid-sculpture-hero";
import Skiper39 from "@/components/ui/skiper39";
import {
  FlaticonCloudComputing,
  FlaticonDevOps,
  FlaticonAiBrain,
  FlaticonEnterpriseApp,
  FlaticonFrontendApps,
  FlaticonCloudDevOps,
  FlaticonBackendAi,
  FlaticonEnterpriseSuite,
} from "../components/FlaticonIcons";

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
  const inView = useInView(ref, { once: true, margin: "60px 0px 60px 0px" });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(20px)",
        transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [heroAnimated, setHeroAnimated] = useState(true);
  const solutionsRef = useRef<HTMLElement>(null);
  const [solutionsAnimated, setSolutionsAnimated] = useState(false);
  const partnersRef = useRef<HTMLElement>(null);
  const [partnersAnimated, setPartnersAnimated] = useState(false);
  const careersRef = useRef<HTMLElement>(null);
  const [careersAnimated, setCareersAnimated] = useState(false);
  const valuesRef = useRef<HTMLDivElement>(null);
  const [valuesAnimated, setValuesAnimated] = useState(false);

  useEffect(() => {
    const heroObserverOptions: IntersectionObserverInit = {
      threshold: 0.05,
    };

    const scrollObserverOptions: IntersectionObserverInit = {
      threshold: 0.02,
      rootMargin: "0px 0px -80px 0px",
    };

    // Ebix-style Hero IntersectionObserver
    const heroObserver = new IntersectionObserver(([entry]) => {
      setHeroAnimated(entry.isIntersecting);
    }, heroObserverOptions);

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    // Ebix-style Solutions Ecosystem (flipbox-section) IntersectionObserver
    const solutionsObserver = new IntersectionObserver(([entry]) => {
      setSolutionsAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (solutionsRef.current) {
      solutionsObserver.observe(solutionsRef.current);
    }

    // Ebix-style Partnerships (homewhatweboxbg / whatareyou-animate) IntersectionObserver
    const partnersObserver = new IntersectionObserver(([entry]) => {
      setPartnersAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (partnersRef.current) {
      partnersObserver.observe(partnersRef.current);
    }

    // Ebix-style Careers / Image Hover Box IntersectionObserver
    const careersObserver = new IntersectionObserver(([entry]) => {
      setCareersAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (careersRef.current) {
      careersObserver.observe(careersRef.current);
    }

    // Ebix-style Values & Principles (services-section) IntersectionObserver
    const valuesObserver = new IntersectionObserver(([entry]) => {
      setValuesAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (valuesRef.current) {
      valuesObserver.observe(valuesRef.current);
    }

    return () => {
      heroObserver.disconnect();
      solutionsObserver.disconnect();
      partnersObserver.disconnect();
      careersObserver.disconnect();
      valuesObserver.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-slate-900 overflow-hidden">
      <SEO
        title="Inzovate Technologies | Enterprise Software, Cloud & AI Automation"
        description="Inzovate Technologies is a premier corporate software engineering and IT solutions firm specializing in custom enterprise applications, AWS cloud infrastructure, Zoho CRM automation, and digital transformation."
        canonical="https://inzovate-technologies.com/"
        keywordString="Inzovate Technologies, Enterprise Software Development, AWS Cloud Consulting, Zoho CRM Partner, AI Automation, Custom Web Applications, IT Services Tamil Nadu, Enterprise Architecture"
        pageType="website"
      />

      {/* ══════════════════════════════════════════════════════════════
          SECTION A — PREMIUM HERO (First Desktop Viewport)
          Inspired by Zoho's clarity & Ebix's corporate structure
      ══════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className={`homepagenewbannerbg relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 lg:py-16 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden home-banner-animate ${heroAnimated ? "animate" : ""}`}
      >
        {/* Interactive Liquid Sculpture Hero Background: Unlagged, instant 60fps load */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
          <SculptureHero
            showNav={false}
            showCredit={false}
            showCtas={false}
            backdropText=""
            eyebrow=""
            headline=""
            body=""
            hint=""
            primaryCta={null}
            secondaryCta={null}
            background="transparent"
            darkBackground="transparent"
            height="100%"
            sculptureScale={1.22}
            mobileSculptureScale={0.95}
            sculptureX={-8}
            sculptureY={0}
            interactive={true}
            ambient={true}
            ambientIntensity={0.7}
            speed={0.85}
            particleDensity={0.9}
            liquid={1.1}
            strength={1.1}
            radius={240}
            loadFonts={false}
            headingFont="var(--font-heading)"
            bodyFont="var(--font-sans)"
            className="w-full h-full"
          />
        </div>

        {/* Directional Soft Light Scrim: Guarantees 100% crisp typography contrast while preserving dynamic particles */}
        <div className="absolute inset-0 pointer-events-none z-1 bg-gradient-to-r from-white/95 via-white/80 sm:via-white/65 via-45% to-white/10 sm:to-transparent" />

        {/* Subtle Ambient Background Mesh */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 z-1"
          style={{
            backgroundImage:
              "radial-gradient(#2563EB 0.75px, transparent 0.75px), radial-gradient(#2563EB 0.75px, #F8FAFC 0.75px)",
            backgroundSize: "32px 32px",
            backgroundPosition: "0 0, 16px 16px",
            opacity: 0.04,
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none z-1" />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full z-10 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Clear Value Proposition with High Contrast */}
            <div className="lg:col-span-7 space-y-6">
              

              {/* Main Headline */}
              <h1
                className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-slate-950 tracking-tight leading-[1.1] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] fade-left"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Technology That Moves{" "}
                <span className="text-blue-700">Business Forward.</span>
              </h1>

              {/* Supporting Lead */}
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-xl font-medium fade-left delay-1">
                Inzovate Technologies helps businesses build, modernize, and scale through intelligent software, cloud solutions, automation, and enterprise technology.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 pointer-events-auto fade-left delay-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-700 bg-white border border-slate-200/90 hover:border-blue-400 hover:text-blue-700 shadow-2xs hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Talk to Our Team</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-700 bg-white border border-slate-200/90 hover:border-blue-400 hover:text-blue-700 shadow-2xs hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Request a Demo →</span>
                </button>
              </div>

              {/* Trust Badge Bar */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs text-slate-500 pointer-events-auto fade-left delay-3">
                <span className="font-semibold text-slate-400 uppercase tracking-wider text-[11px]">
                  Strategic Alliances:
                </span>
                
                {/* AWS Alliance Pill */}
                <Link
                  to="/services/aws-services"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-amber-400 shadow-2xs transition-all group"
                >
                  <img src="/aws-logo.png" alt="AWS" className="h-4 w-auto object-contain" />
                  <span className="font-bold text-slate-700 group-hover:text-amber-700">Technology Partner</span>
                </Link>

                {/* Zoho Alliance Pill */}
                <Link
                  to="/strategic-partnerships"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-rose-400 shadow-2xs transition-all group"
                >
                  <img src="/zoho-logo-nav.png" alt="Zoho" className="h-3.5 w-auto object-contain" />
                  <span className="font-bold text-slate-700 group-hover:text-rose-700">Official Partner</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Refined Connected Enterprise Architecture Visual */}
            <div className="lg:col-span-5 pointer-events-auto fade-right delay-1">
              <div className="relative rounded-2xl border border-slate-200/70 bg-white/35 backdrop-blur-[6px] p-5 sm:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.03)] space-y-3">
                
                {/* Layer 1: AWS Cloud Services */}
                <Link
                  to="/services/aws-services"
                  className="group flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/60 bg-white/40 hover:bg-white/75 hover:border-slate-300 hover:shadow-xs transition-all block text-left"
                >
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all text-blue-600 group-hover:text-black">
                    <FlaticonCloudComputing size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      AWS Cloud Services
                    </h4>
                    <p className="text-xs text-slate-500">
                      Cloud Architecture • Serverless • Security &amp; Well-Architected
                    </p>
                  </div>
                </Link>

                {/* Layer 2: DevOps & Cloud Infrastructure */}
                <div className="group flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/60 bg-white/40 hover:bg-white/75 hover:border-slate-300 hover:shadow-xs transition-all">
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all text-blue-600 group-hover:text-black">
                    <FlaticonDevOps size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Cloud &amp; DevOps Infrastructure
                    </h4>
                    <p className="text-xs text-slate-500">
                      Multi-Region Setup • CI/CD Automation • 24/7 Monitoring
                    </p>
                  </div>
                </div>

                {/* Layer 3: Intelligent Automation */}
                <div className="group flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/60 bg-white/40 hover:bg-white/75 hover:border-slate-300 hover:shadow-xs transition-all">
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all text-blue-600 group-hover:text-black">
                    <FlaticonAiBrain size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Intelligent Automation &amp; AI
                    </h4>
                    <p className="text-xs text-slate-500">
                      Custom AI Models • Workflow Automation • Smart Data
                    </p>
                  </div>
                </div>

                {/* Layer 4: Core Digital Engineering */}
                <div className="group flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/60 bg-white/40 hover:bg-white/75 hover:border-slate-300 hover:shadow-xs transition-all">
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all text-blue-600 group-hover:text-black">
                    <FlaticonEnterpriseApp size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Enterprise Digital Applications
                    </h4>
                    <p className="text-xs text-slate-500">
                      Modern Web Platforms • ERP &amp; CRM • Scalable APIs
                    </p>
                  </div>
                </div>

                {/* Architecture Bottom Highlight */}
                <div className="pt-2 text-center">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    <span>Explore All Capabilities</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom edge fade: smoothly merges the Hero background & liquid sculpture into pure white */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 lg:h-44 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-1" />
      </section>




      {/* ══════════════════════════════════════════════════════════════
          SECTION D — SOLUTIONS & TECHNOLOGY ECOSYSTEM
          Consolidated technical foundation & platform discovery
      ══════════════════════════════════════════════════════════════ */}
      <section
        ref={solutionsRef}
        className={`newmrhomebox flipbox-section py-16 lg:py-20 bg-white border-b border-slate-200/80 ${
          solutionsAnimated ? "animate" : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5 flipbox-fade-down">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Engineered with Proven, Scalable Stacks
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We avoid proprietary lock-in by architecting digital products on globally recognized, battle-tested technology frameworks, robust cloud infrastructure, and enterprise-grade security.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Decoupled, API-first architecture designed for modular scale",
                  "Automated CI/CD deployments with comprehensive testing pipelines",
                  "Strict zero-trust data protection and regulatory compliance",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <span>Explore Technical Capabilities</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Matrix: 4 Clean Stacks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Box 1 */}
              <div className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all flipbox-fade-down flipbox-delay-1">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/70 text-blue-700 flex items-center justify-center shadow-2xs">
                    <FlaticonFrontendApps size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Frontend &amp; Apps</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Mobile SDKs"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-medium bg-white border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Box 2 */}
              <div className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all flipbox-fade-down flipbox-delay-2">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/70 text-amber-700 flex items-center justify-center shadow-2xs">
                    <FlaticonCloudDevOps size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Cloud &amp; DevOps</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["AWS", "Docker", "Kubernetes", "Serverless", "Terraform", "CI/CD"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-medium bg-white border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Box 3 */}
              <div className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-indigo-300 hover:shadow-xs transition-all flipbox-fade-down flipbox-delay-3">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200/70 text-indigo-700 flex items-center justify-center shadow-2xs">
                    <FlaticonBackendAi size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Backend &amp; AI</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Node.js", "PostgreSQL", "Redis", "OpenAI APIs", "PyTorch"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-medium bg-white border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Box 4 */}
              <div className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-rose-300 hover:shadow-xs transition-all flipbox-fade-down flipbox-delay-4">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200/70 text-rose-700 flex items-center justify-center shadow-2xs">
                    <FlaticonEnterpriseSuite size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Enterprise Suites</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Zoho CRM", "Zoho Books", "Zoho Creator", "Custom ERP", "HRM Engine"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[11px] font-medium bg-white border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION E — STRATEGIC PARTNERSHIPS
          Compact corporate alliance presentation
      ══════════════════════════════════════════════════════════════ */}
      <section
        ref={partnersRef}
        className={`homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] ${partnersAnimated ? 'animate' : ''}`}
        style={{ userSelect: "none" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="fade-left flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Certified Global Platform Partnerships
              </h2>
            </div>

            <Link
              to="/strategic-partnerships"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0"
            >
              <span>Explore All Alliances</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Two Balanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* AWS Partner Card */}
            <div className="fade-right delay-1 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-amber-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="h-10 px-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <img src="/aws-logo.png" alt="AWS" className="h-6 w-auto object-contain" />
                  </div>
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-800 font-mono">
                    Technology Partner
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                  Amazon Web Services (AWS)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Certified cloud consulting, enterprise DevOps migration, automated serverless infrastructure, and high-availability operations.
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/services/aws-services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900"
                >
                  <span>AWS Consulting Services →</span>
                </Link>
                <span className="text-[11px] text-slate-400 font-mono">Cloud Native</span>
              </div>
            </div>

            {/* Zoho Partner Card */}
            <div className="fade-right delay-2 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-rose-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="h-10 px-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <img src="/zoho-logo-nav.png" alt="Zoho" className="h-5 w-auto object-contain" />
                  </div>
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-800 font-mono">
                    Official Zoho Partner
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                  Zoho Enterprise Ecosystem
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Full-lifecycle Zoho CRM deployment, automated financial pipelines with Zoho Books, and bespoke low-code Zoho Creator systems.
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/strategic-partnerships"
                  className="inline-flex items-center gap-1 text-xs font-bold text-rose-800 hover:text-rose-900"
                >
                  <span>Zoho Suite Solutions →</span>
                </Link>
                <span className="text-[11px] text-slate-400 font-mono">Enterprise Ready</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION F — CORE VALUES & PRINCIPLES (Zoho-Style Banner)
      ══════════════════════════════════════════════════════════════ */}
      <section className="zwc-section-values border-b border-slate-200/80 overflow-hidden">
        
        {/* Crowd Canvas Interactive Banner (Skiper39) */}
        <div className="zwc-banner-img-container relative h-[300px] sm:h-[400px] lg:h-[480px] w-full bg-gradient-to-b from-blue-50/40 via-slate-50/80 to-[#F8FAFC] overflow-hidden">
          <Skiper39
            src="/peeps-sprite.png"
            className="h-full w-full bg-transparent"
            rows={15}
            cols={7}
          />
          {/* Subtle gradient overlay to blend into the card below */}
          <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 lg:h-80 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/65 to-transparent pointer-events-none z-1" />
        </div>

        {/* Zoho Floating Content Wrap Card */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div
            ref={valuesRef}
            className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated ${valuesAnimated ? "animate" : ""}`}
          >
            {/* Centered Heading with Divider Line */}
            <h2 className="zwc-title zwc-divider-line services-fade-down">
              The core values and principles that drive us
            </h2>

            {/* 4 Core Value Boxes (2x2 Grid) */}
            <div className="zwc-box-wrap">
              {/* 1. Long-term commitment */}
              <div className="zwc-box group services-fade-down services-delay-1">
                <div className="zwc-icon bg-blue-50 border border-blue-200/70 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  <Award size={24} />
                </div>
                <h3>Long-term commitment</h3>
                <p>
                  We take pride in engineering sustainable, scalable architectures powered by enduring client relationships. Every software suite, cloud infrastructure, and ERP pipeline we build is designed for resilient decade-long performance.
                </p>
              </div>

              {/* 2. Customer-first philosophy */}
              <div className="zwc-box group services-fade-down services-delay-2">
                <div className="zwc-icon bg-indigo-50 border border-indigo-200/70 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                  <Users size={24} />
                </div>
                <h3>Customer-first philosophy</h3>
                <p>
                  Client trust and tangible business outcomes form the foundation of our work. Regardless of your organization's scale, our dedicated enterprise engineering team partners closely with you to eliminate operational friction and accelerate growth.
                </p>
              </div>

              {/* 3. Privacy and security as a priority */}
              <div className="zwc-box group services-fade-down services-delay-3">
                <div className="zwc-icon bg-emerald-50 border border-emerald-200/70 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                  <Lock size={24} />
                </div>
                <h3>Privacy and security as a priority</h3>
                <p>
                  We respect your enterprise data sovereignty. We adhere strictly to zero-trust architecture, multi-layer encryption, and rigorous regulatory compliance standards—ensuring your sensitive intellectual property remains completely protected.
                </p>
              </div>

              {/* 4. Focus on research and development */}
              <div className="zwc-box group services-fade-down services-delay-4">
                <div className="zwc-icon bg-amber-50 border border-amber-200/70 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200">
                  <Cpu size={24} />
                </div>
                <h3>Focus on research and development</h3>
                <p>
                  Software engineering is our craft. We continuously invest in advanced cloud patterns, intelligent AI orchestration, and proprietary enterprise frameworks so our clients consistently stay years ahead of industry disruption.
                </p>
              </div>
            </div>

            {/* Bottom Centered Read Story CTA */}
            <div className="zwc-text-ct services-fade-down services-delay-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-blue-700 bg-white border border-blue-300 hover:border-blue-500 hover:bg-blue-50/70 shadow-2xs hover:shadow-xs transition-all duration-200 group"
              >
                <span>Read our story</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </section>



      {/* ══════════════════════════════════════════════════════════════
          SECTION H — FINAL CALL TO ACTION
          Concise, high-impact closing before the existing Footer
      ══════════════════════════════════════════════════════════════ */}
      <section
        ref={careersRef}
        className={`w-full p-0 bg-white text-center overflow-hidden careers-animate ${careersAnimated ? 'animate' : ''}`}
      >
        <div className="w-full p-0 m-0">
          <div className="col-md-12 w-full p-0 fade-left careers-delay-1">
            <div className="image-hover-box fade-down w-full relative">
              <img
                alt="A technology team building the future"
                className="main-image absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
                src="/careers-team.jpg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('cta-banner')) {
                    target.src = '/assets/cta-banner-4k.jpg';
                  }
                }}
              />
              <div className="image-hover-content">
                <h3 className="fade-left careers-delay-1 text-xs uppercase tracking-widest font-semibold text-blue-600 mb-3">
                  Join Us &amp; Shape The Future
                </h3>
                <h2
                  className="fade-left careers-delay-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Let&apos;s Build What&apos;s Next.
                </h2>
                <p className="fade-left careers-delay-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-lg mx-auto">
                  Have a business or technology challenge? Let&apos;s explore the right solution together.
                </p>
                <div className="fade-left careers-delay-3 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Talk to Our Team</span>
                    <ArrowRight size={16} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setDemoOpen(true)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-700 bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-700 shadow-2xs hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Request a Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Inquiry Modal */}
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <HomePricingPromoIcon />
    </main>
  );
}
