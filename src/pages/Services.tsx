import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Code2,
  Layers,
  Cloud,
  Server,
  Bot,
  Workflow,
  Shield,
  BarChart3,
  Building2,
  Smartphone,
  Rocket,
  Lightbulb,
  Zap,
  Headphones,
  ArrowRight,
} from "lucide-react";
import DemoModal from "../components/DemoModal";
import SEO from "../components/SEO";
import KineticGrid from "@/components/ui/kinetic-grid";

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
  const inView = useInView(ref, { once: false, margin: "0px 0px -50px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── 15 TECHNOLOGY SERVICES ──
interface ServiceItem {
  id: string;
  icon: any;
  category: string;
  title: string;
  desc: string;
  accent: string;
  glowColor: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "web-dev",
    icon: Globe,
    category: "Web Engineering",
    title: "Web & Web Application Development",
    desc: "Modern, responsive websites and powerful web applications built for performance and scalability.",
    accent: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.25)",
  },
  {
    id: "software-dev",
    icon: Code2,
    category: "Custom Software",
    title: "Software Development",
    desc: "Custom software solutions designed to solve complex business problems and streamline operations.",
    accent: "from-indigo-500 to-purple-600",
    glowColor: "rgba(99, 102, 241, 0.25)",
  },
  {
    id: "ui-ux",
    icon: Layers,
    category: "Product Design",
    title: "UI/UX Design",
    desc: "Beautiful, user-centric digital experiences designed to improve usability, engagement and brand value.",
    accent: "from-purple-500 to-pink-600",
    glowColor: "rgba(168, 85, 247, 0.25)",
  },
  {
    id: "cloud-computing",
    icon: Cloud,
    category: "Cloud Architecture",
    title: "Cloud Computing",
    desc: "Scalable cloud infrastructure designed to improve security, flexibility and business performance.",
    accent: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
  {
    id: "aws-services",
    icon: Server,
    category: "AWS Ecosystem",
    title: "AWS Cloud Services",
    desc: "Leverage AWS to build, deploy and manage secure, scalable and highly available applications.",
    accent: "from-blue-600 to-cyan-500",
    glowColor: "rgba(37, 99, 235, 0.25)",
  },
  {
    id: "ai-ml",
    icon: Bot,
    category: "Artificial Intelligence",
    title: "AI & Machine Learning",
    desc: "Intelligent solutions that turn data into insights and automate smarter business decisions.",
    accent: "from-purple-600 to-violet-500",
    glowColor: "rgba(139, 92, 246, 0.25)",
  },
  {
    id: "automation",
    icon: Workflow,
    category: "Intelligent Automation",
    title: "Business Automation",
    desc: "Streamline repetitive workflows and improve productivity through intelligent automation.",
    accent: "from-teal-500 to-emerald-600",
    glowColor: "rgba(20, 184, 166, 0.25)",
  },
  {
    id: "cybersecurity",
    icon: Shield,
    category: "Enterprise Security",
    title: "Cybersecurity",
    desc: "Protect your applications, systems and data with modern security solutions and best practices.",
    accent: "from-blue-500 to-teal-500",
    glowColor: "rgba(59, 130, 246, 0.25)",
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    category: "Data & BI Analytics",
    title: "Data Analytics",
    desc: "Transform raw business data into actionable insights for smarter and faster decisions.",
    accent: "from-violet-500 to-indigo-600",
    glowColor: "rgba(139, 92, 246, 0.25)",
  },
  {
    id: "enterprise-apps",
    icon: Building2,
    category: "Enterprise Applications",
    title: "Enterprise Application Development",
    desc: "Scalable enterprise applications built to support complex business processes and operations.",
    accent: "from-indigo-600 to-blue-600",
    glowColor: "rgba(79, 70, 229, 0.25)",
  },
  {
    id: "mobile-dev",
    icon: Smartphone,
    category: "Mobile Engineering",
    title: "Mobile Application Development",
    desc: "Build high-performance Android and iOS applications with seamless user experiences.",
    accent: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
  {
    id: "devops",
    icon: Rocket,
    category: "DevOps & CI/CD",
    title: "DevOps & CI/CD",
    desc: "Automate development, testing and deployment to deliver reliable software faster.",
    accent: "from-rose-500 to-purple-600",
    glowColor: "rgba(244, 63, 94, 0.25)",
  },
  {
    id: "consulting",
    icon: Lightbulb,
    category: "Technical Advisory",
    title: "Technical Consulting",
    desc: "Expert technology guidance to help businesses choose the right architecture, tools and digital strategy.",
    accent: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.25)",
  },
  {
    id: "digital-trans",
    icon: Zap,
    category: "Digital Modernization",
    title: "Digital Transformation",
    desc: "Modernize business operations with innovative technologies, intelligent processes and scalable solutions.",
    accent: "from-blue-600 to-purple-600",
    glowColor: "rgba(37, 99, 235, 0.25)",
  },
  {
    id: "it-infra",
    icon: Headphones,
    category: "Infrastructure & Operations",
    title: "IT Infrastructure & Support",
    desc: "Reliable IT infrastructure, monitoring and technical support to keep your business running smoothly.",
    accent: "from-emerald-500 to-cyan-600",
    glowColor: "rgba(16, 185, 129, 0.25)",
  },
];

// ── EBIX AI-STYLE INTERACTIVE SERVICE CARD ──
function EbixAiServiceCard({
  service,
  index,
  onOpenDemo,
}: {
  service: ServiceItem;
  index: number;
  onOpenDemo: (title: string) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: false, margin: "0px 0px -60px 0px" });
  const [isTiltActive, setIsTiltActive] = useState(false);
  const Icon = service.icon;

  const patternIndex = index % 6;
  const dockSide = index % 4 < 2 ? -1 : 1;
  const dockDelay = `${(index % 4) * 80}ms`;

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
      onClick={() => onOpenDemo(service.title)}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        ["--dock-side" as any]: dockSide,
        ["--dock-delay" as any]: dockDelay,
      }}
      className={`ebix-ai-card home-tilt-card group ${
        inView ? "ebix-dock-attached" : "ebix-dock-waiting"
      } ${isTiltActive ? "tilt-active" : ""}`}
    >
      {/* Specular Spotlight Following Cursor */}
      <span className="home-tilt-light" aria-hidden="true" />

      {/* Top Header / Icon + 2-digit index */}
      <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
        <div className="w-11 h-11 rounded-xl bg-blue-50/90 border border-blue-100 text-[#1746A2] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1746A2] group-hover:text-white shadow-xs">
          <Icon size={21} />
        </div>
        <span className="text-[11px] font-bold text-slate-400 tracking-wider font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Category Eyebrow */}
      <span className="eyebrow relative z-10">{service.category}</span>

      {/* Title */}
      <h3
        className="relative z-10 text-lg font-bold text-[#0F172A] tracking-tight mb-2.5 group-hover:text-[#1746A2] transition-colors"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-slate-600 leading-relaxed mb-6 relative z-10">
        {service.desc}
      </p>

      {/* Inset Corner Arrow Button (Docked into chamfer notch) */}
      <span className="tile-arrow" aria-hidden="true">
        <ArrowRight size={18} />
      </span>
    </div>
  );
}

export default function Services() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const ctaRef = useRef<HTMLElement>(null);
  const ctaInView = useInView(ctaRef, { once: false, margin: "0px 0px -70px 0px" });

  const openServiceDemo = (title: string) => {
    setSelectedService(title);
    setDemoOpen(true);
  };

  return (
    <main className="bg-[#FFFFFF] text-slate-900 min-h-screen overflow-hidden">
      <SEO
        title="IT & Software Development Services | Inzovate Technologies"
        description="Comprehensive IT & software services from Inzovate Technologies Private Limited: Custom Software, Web Development, Mobile Apps, UI/UX Design, Cloud & AWS, Zoho CRM, and AI Automation in Tamil Nadu."
        canonical="https://inzovate-technologies.com/services"
        keywordString="Inzovate Technologies, software development services, web development company Tamil Nadu, mobile app development Bhavani, UI UX design Erode, AWS consulting Salem, Zoho implementation Coimbatore"
        pageType="website"
      />
      {/* ── HERO SECTION WITH KINETIC GRID BACKGROUND ── */}
      <section className="relative overflow-hidden bg-white">
        <KineticGrid
          globalColor="white"
          className="relative pt-16 sm:pt-20 pb-16 overflow-hidden bg-transparent w-full min-h-[460px] flex flex-col items-center justify-center text-slate-950"
        >
          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10 w-full">
            <div className="max-w-4xl mx-auto text-center">
              {/* Center Content */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Main Heading */}
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-[#0F172A]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Technology Services That{" "}
                  <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent block sm:inline">
                    Move Businesses Forward.
                  </span>
                </h1>

                {/* Supporting Text */}
                <p className="text-[#475569] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
                  We build robust digital solutions and bring your ideas to life with scalable, secure and future-ready technology.
                </p>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-4 items-center justify-center">
                  <button
                    onClick={() => openServiceDemo("Technology Services Consultation")}
                    className="px-8 py-4 rounded-full bg-[#1746A2] hover:bg-blue-600 text-white font-extrabold text-sm tracking-wide shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </KineticGrid>
      </section>

      {/* ── SERVICES GRID (15 SERVICES — EBIX AI SECTION ANIMATION & TRANSITION) ── */}
      <section id="services-grid" className="ebix-ai-section relative py-16 lg:py-20 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-4 inline-block">
              ENTERPRISE CAPABILITIES
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight mt-2 mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Comprehensive Software &amp; IT Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Tailored digital solutions engineered for reliability, security and long-term enterprise growth.
            </p>
          </FadeIn>

          {/* Ebix AI Card Grid (4-column responsive grid with Chamfer notch, 3D tilt, and docked arrow) */}
          <div className="ebix-ai-card-grid">
            {servicesList.map((service, idx) => (
              <EbixAiServiceCard
                key={service.id}
                service={service}
                index={idx}
                onOpenDemo={openServiceDemo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA SECTION (WITH EBIX IMAGE-HOVER-CONTENT ANIMATION & TRANSITIONS) ── */}
      <section
        ref={ctaRef}
        className={`relative py-12 lg:py-16 bg-[#FFFFFF] border-t border-slate-200 careers-animate ${
          ctaInView ? "animate" : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div key={ctaInView ? "cta-in" : "cta-out"} className="w-full p-0 fade-left careers-delay-1">
            <div
              className="image-hover-content services-cta-banner fade-down relative rounded-[36px] lg:rounded-[44px] border border-blue-100 overflow-hidden p-8 sm:p-14 lg:p-16 text-center shadow-lg bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#EFF6FF] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300 group"
            >
              {/* Subtle interactive tech grid background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.22) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-400/20 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-400/20 group-hover:scale-110 transition-all duration-700" />

              {/* Content with Ebix Stagger Transitions */}
              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <span className="fade-left careers-delay-1 text-[11px] font-extrabold uppercase tracking-widest text-[#1746A2] bg-blue-50/90 px-4 py-1.5 rounded-full border border-blue-200 mb-5 inline-block">
                  ENTERPRISE CONSULTATION
                </span>

                {/* Headline with fade-left careers-delay-2 */}
                <h2
                  className="fade-left careers-delay-2 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Ready to Transform Your Technology?
                </h2>

                {/* Subtitle with fade-left careers-delay-3 */}
                <p className="fade-left careers-delay-3 text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
                  Let&apos;s discuss your technology challenges and how we can help you move faster and build smarter.
                </p>

                {/* Actions with fade-left careers-delay-3 */}
                <div className="fade-left careers-delay-3 flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-extrabold text-white text-base tracking-wide bg-[#1746A2] hover:bg-blue-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group/btn"
                  >
                    <span>Talk to Our Team</span>
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1.5 transition-transform duration-200"
                    />
                  </Link>
                  <button
                    onClick={() => openServiceDemo("General Services Demo")}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-300 text-slate-700 font-bold text-base bg-white hover:bg-slate-50 shadow-sm hover:shadow-md hover:border-blue-400 hover:text-blue-700 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Service Request Modal */}
      <DemoModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        defaultProduct={selectedService}
        isServiceInquiry={true}
      />
    </main>
  );
}
