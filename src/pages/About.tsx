import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Diamond,
  Eye,
  Globe,
  Lightbulb,
  Target,
  Users,
  Sparkles,
  ShieldCheck,
  Rocket,
  Layers,
  Zap,
  TrendingUp,
  Workflow,
  Award,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import SEO from "../components/SEO";
import { Typewriter, DualTypewriter } from "../components/ui/typewriter-text";
import { ParticleTitle } from "../components/ui/particle-title";

const revealEase = [0.16, 1, 0.3, 1] as const;

function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      animate={prefersReducedMotion || inView ? { opacity: 1, y: 0 } : {}}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.85, delay, ease: revealEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionKicker(_props: { children?: ReactNode; light?: boolean }) {
  return null;
}

const aboutEnterpriseStats = [
  {
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
    icon: Award,
    badgeText: "Delivery",
  },
  {
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
    badgeText: "Clients",
  },
  {
    value: 20,
    suffix: "+",
    label: "Industries Served",
    icon: Globe,
    badgeText: "Industries",
  },
  {
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Client Satisfaction",
    icon: CheckCircle2,
    badgeText: "Quality",
  },
];

function EbixAboutStatCard({
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

function Statistics() {
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
        "--stat-cols": aboutEnterpriseStats.length,
      } as React.CSSProperties}
    >
      <dl className="stat-grid" style={{ "--stat-cols": aboutEnterpriseStats.length } as React.CSSProperties}>
        {aboutEnterpriseStats.map((stat, idx) => (
          <EbixAboutStatCard
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

const journeyMilestones = [
  { date: "JUNE 2025", title: "Company Founded", description: "INZOVATE TECHNOLOGIES was established with a vision to empower businesses through technology.", icon: Calendar },
  { date: "2025", title: "First Solutions Delivered", description: "Delivered our initial technology solutions and established our foundation for scalable digital services.", icon: ArrowUpRight },
  { date: "2025", title: "Team Expansion", description: "Expanded our team with talented professionals focused on innovation, engineering and customer success.", icon: Users },
  { date: "2026", title: "Product Innovation", description: "Expanded our technology capabilities with modern products and solutions for diverse business needs.", icon: Lightbulb },
  { date: "2026", title: "Future Ready", description: "Continuing to build intelligent, scalable and enterprise-ready technology solutions.", icon: ArrowRight },
] as const;

const industries = [
  { title: "IT & Technology", description: "Digital transformation solutions designed for modern businesses.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85", icon: Globe },
  { title: "Manufacturing", description: "Technology solutions that improve operations efficiency and productivity.", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85", icon: Target },
  { title: "Retail & E-Commerce", description: "Scalable digital platforms that create seamless customer experiences.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85", icon: ArrowUpRight },
  { title: "Finance", description: "Secure, compliant and intelligent solutions to power financial growth.", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=85", icon: BarChart3 },
  { title: "Education", description: "Empowering learning institutions with smart digital solutions.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85", icon: Lightbulb },
  { title: "Logistics", description: "Streamline operations and deliver supply chain excellence.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85", icon: ArrowRight },
] as const;

interface LeaderItem {
  name: string;
  role: string;
  tag: string;
  description: string;
  icon: any;
  gradient: string;
  shadow: string;
  linkedin: string;
  avatarBg: string;
  badgeBg: string;
  accentColor: string;
  image?: string;
}

const leadersData: LeaderItem[] = [
  {
    name: "Mousik Shankar S",
    role: "Managing Director",
    tag: "EXECUTIVE STRATEGY",
    description: "Guiding enterprise strategy, driving technological innovation, and scaling global operations with deep industry foresight.",
    icon: Diamond,
    gradient: "from-blue-600 via-indigo-600 to-cyan-500",
    shadow: "shadow-[0_10px_25px_rgba(37,99,235,0.35)]",
    linkedin: "https://www.linkedin.com/in/mousik-shankar-s-05a879217",
    avatarBg: "from-blue-600 via-indigo-600 to-cyan-500",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    accentColor: "#2563eb",
    image: "/team/mousik-shankar-s.jpg",
  },
  {
    name: "Gokul G",
    role: "Founder",
    tag: "TECH ARCHITECTURE",
    description: "Architecting future-ready technology platforms and steering core engineering vision toward groundbreaking digital solutions.",
    icon: Rocket,
    gradient: "from-purple-600 via-indigo-600 to-blue-500",
    shadow: "shadow-[0_10px_25px_rgba(168,85,247,0.3)]",
    linkedin: "https://www.linkedin.com/in/gokul-g-607139267/",
    avatarBg: "from-purple-600 via-indigo-600 to-blue-500",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    accentColor: "#a855f7",
    image: "/team/gokul-g.jpg",
  },
  {
    name: "Marimuthu N",
    role: "CMO",
    tag: "GLOBAL BRAND & GROWTH",
    description: "Driving global brand vision, strategic market expansion, empowering cross-functional teams, and cultivating a vibrant culture of engineering excellence.",
    icon: TrendingUp,
    gradient: "from-pink-600 via-rose-600 to-red-500",
    shadow: "shadow-[0_10px_25px_rgba(236,72,153,0.3)]",
    linkedin: "https://www.linkedin.com/in/marimuthu-narayanan-701087115/",
    avatarBg: "from-pink-600 via-rose-600 to-red-500",
    badgeBg: "bg-pink-50 text-pink-700 border-pink-200",
    accentColor: "#db2777",
    image: "/team/marimuthu-n.jpg",
  },
] as const;

function JourneySection() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const journeyInView = useInView(journeyRef, { once: false, amount: 0.15 });

  return (
    <section
      ref={journeyRef}
      id="our-journey"
      className={`about-journey homewhatweboxbg whatareyou-animate !py-14 lg:!py-16 !bg-[#F8FAFC] border-t border-slate-200 ${
        journeyInView ? "animate" : ""
      }`}
      style={{ userSelect: "none" }}
      aria-labelledby="our-journey-heading"
    >
      <div className="about-container">
        <div className="fade-left text-center sm:text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-blue-700 font-mono">
              OUR JOURNEY
            </span>
          </div>
          <h2
            id="our-journey-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Milestones That{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Define Our Growth
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            From our foundation to building future-ready technology solutions, every milestone reflects our commitment to innovation and business impact.
          </p>
        </div>

        <div className="about-journey__timeline">
          {journeyMilestones.map(({ date, title, description, icon: Icon }, idx) => (
            <div
              key={`${date}-${title}`}
              className={`about-journey__item ${idx % 2 === 0 ? "fade-left" : "fade-right"} delay-${Math.min(idx + 1, 6)}`}
            >
              <div className="about-journey__node" aria-hidden="true">
                <Icon size={15} strokeWidth={1.8} />
              </div>
              <article className="about-journey__card">
                <span className="about-journey__date text-blue-600 font-bold">{date}</span>
                <h3 className="text-slate-900 font-bold">{title}</h3>
                <p className="text-slate-600">{description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyToWhatWeDoDivider() {
  return null;
}

function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <>
      <section className="about-what-we-do" aria-labelledby="what-we-do-heading">
        <div className="about-industries">
          <div
            ref={sectionRef}
            className={`about-container newmrhomebox flipbox-section ${
              sectionInView ? "animate" : ""
            }`}
          >
            <div className="text-center sm:text-left max-w-3xl mb-12 flipbox-fade-down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-blue-700 font-mono">
                  INDUSTRIES WE SERVE
                </span>
              </div>
              <h2
                id="what-we-do-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Solutions Built for{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Every Industry
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Tailored technology solutions designed to meet the unique challenges of today’s dynamic industries.
              </p>
            </div>

            <div id="about-industries-grid" className="about-industries__grid">
              {industries.map(({ title, description, image, icon: Icon }, idx) => (
                <div
                  key={title}
                  className={`about-industry-card flipbox-fade-down flipbox-delay-${Math.min(idx + 1, 8)}`}
                >
                  <div className="about-industry-card__image">
                    <img src={image} alt="" loading="lazy" />
                    <div />
                  </div>
                  <div className="about-industry-card__badge">
                    <Icon size={17} />
                  </div>
                  <div className="about-industry-card__content">
                    <span>INDUSTRY</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href="/services">
                      Learn More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MissionSection() {
  const missionRef = useRef<HTMLDivElement>(null);
  const missionInView = useInView(missionRef, { once: false, margin: "-40px 0px -40px 0px" });
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef, { once: false, margin: "-40px 0px -40px 0px" });

  const missionCards = [
    {
      id: "01",
      title: "Mission",
      description: "Solve real business challenges with intelligent technology.",
      icon: Target,
      badgeColor: "bg-blue-50 border-blue-200 text-blue-600",
    },
    {
      id: "02",
      title: "Vision",
      description: "To be a leading technology partner for enterprises across India and beyond.",
      icon: Eye,
      badgeColor: "bg-indigo-50 border-indigo-200 text-indigo-600",
    },
    {
      id: "03",
      title: "Values",
      description: "Innovation, integrity, impact, and long-term partnership.",
      icon: Diamond,
      badgeColor: "bg-sky-50 border-sky-200 text-sky-600",
    },
    {
      id: "04",
      title: "Team",
      description: "A cross-functional team of engineers, designers and strategists.",
      icon: Users,
      badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-600",
    },
  ];

  return (
    <section id="mission" className="relative mt-6 sm:mt-10 py-14 lg:py-20 bg-[#F8FAFC] text-slate-900 overflow-hidden border-t border-slate-200" aria-labelledby="mission-heading">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-white" />
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 space-y-14">
        
        {/* COMMANDING SECTION TITLE (Properly positioned & styled with high visual impact) */}
        <div
          ref={missionRef}
          className={`text-center max-w-4xl mx-auto space-y-5 home-banner-animate ${
            missionInView ? "animate" : ""
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 shadow-xs fade-left">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-blue-700 font-mono">
              OUR MISSION &amp; PURPOSE
            </span>
          </div>

          <h2
            id="mission-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] fade-right delay-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Delivering Technology That Creates{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Business Value.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal fade-left delay-2">
            INZOVATE TECHNOLOGIES delivers modern technology solutions designed to solve real business challenges, improve efficiency, and create sustainable digital growth. Founded in June 2025 and headquartered in Tamil Nadu, India, we serve organizations across industries seeking intelligent, scalable technology solutions.
          </p>

          {/* MISSION -> IMPACT VALUE PIPELINE */}
          <div className="pt-2 flex flex-col items-center gap-2.5 fade-right delay-2">
            <div className="inline-flex items-center gap-2 sm:gap-3 text-xs font-bold uppercase tracking-wider text-slate-700 p-2 sm:p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 font-extrabold shadow-2xs">IDEA</span>
              <span className="h-px w-6 sm:w-10 bg-gradient-to-r from-blue-600 to-indigo-600" />
              <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 font-extrabold shadow-2xs">TECHNOLOGY</span>
              <span className="h-px w-6 sm:w-10 bg-gradient-to-r from-indigo-600 to-sky-600" />
              <span className="px-3.5 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 font-extrabold shadow-2xs">IMPACT</span>
            </div>
            <span className="text-xs font-medium text-slate-500">
              Turning ideas into scalable digital solutions that create measurable business outcomes.
            </span>
          </div>
        </div>

        {/* FOUR INFORMATION CARDS */}
        <div
          ref={cardsRef}
          className={`space-y-4 newmrhomebox flipbox-section ${cardsInView ? "animate" : ""}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`flipbox-fade-down flipbox-delay-${Math.min(idx + 1, 8)}`}
                >
                  <div className="group relative h-full p-6 sm:p-7 rounded-[22px] border border-slate-200/90 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:border-blue-500/50 hover:shadow-[0_15px_35px_rgba(37,99,235,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div>
                      {/* Top Bar: Circular Icon Container */}
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full border ${card.badgeColor} group-hover:scale-110 transition-transform duration-300`}>
                          <CardIcon size={20} />
                        </div>
                      </div>

                      {/* Dark Title */}
                      <h3
                        className="text-xl font-bold text-slate-900 mb-1.5 tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {card.title}
                      </h3>

                      {/* Small Blue Accent Line */}
                      <div className="h-[2px] w-8 bg-blue-600 rounded-full my-2.5 group-hover:w-14 transition-all duration-300" />

                      {/* Gray Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

{/* ── MISSION TO JOURNEY TRANSITION BRIDGE SECTION ── */}
function MissionToJourneySection() {
  const [activeTab, setActiveTab] = useState<"execution" | "engineering" | "horizon">("execution");
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: false, margin: "-40px 0px -40px 0px" });

  const tabData = {
    execution: {
      tag: "CORE EXECUTION",
      title: "Translating Mission into Everyday Action",
      desc: "Our mission is not just a statement—it is our daily operating blueprint. We combine agile engineering with strategic domain focus to deliver quantifiable client outcomes.",
      pillars: [
        { title: "Architectural Rigor", desc: "Enterprise software foundations built for 99.99% uptime and effortless scale.", icon: Layers, metric: "99.99% Uptime" },
        { title: "Agile R&D Velocity", desc: "Accelerating modern research into production-ready digital solutions.", icon: Zap, metric: "10x Velocity" },
        { title: "Client ROI Centricity", desc: "Direct alignment of software deliverables with core business metrics.", icon: TrendingUp, metric: "99.4% CSAT" },
        { title: "Zero-Trust Security", desc: "Enterprise security and governance built directly into every application layer.", icon: ShieldCheck, metric: "100% Compliant" },
      ],
    },
    engineering: {
      tag: "ENGINEERING STANDARDS",
      title: "Future-Proof Technical Excellence",
      desc: "We leverage modern cloud architectures, microservices, AI-driven automation, and strict code quality standards to ensure enterprise longevity.",
      pillars: [
        { title: "Cloud-Native Stack", desc: "Multi-cloud optimized infrastructure for rapid global deployment.", icon: Globe, metric: "Global Scale" },
        { title: "AI & Automation", desc: "Integrating intelligent machine learning workflows into core applications.", icon: Sparkles, metric: "Smart Workflows" },
        { title: "Modular Architecture", desc: "Decoupled component design allowing independent scaling and fast updates.", icon: Workflow, metric: "Modular Build" },
        { title: "High-Speed Performance", desc: "Sub-second response times and optimized resource utilization across all systems.", icon: Rocket, metric: "< 50ms Latency" },
      ],
    },
    horizon: {
      tag: "FUTURE HORIZON",
      title: "Building Next-Generation Ecosystems",
      desc: "As our journey unfolds, we continue expanding our product suite, powering digital transformation for enterprises across emerging technology sectors.",
      pillars: [
        { title: "Enterprise Expansion", desc: "Scaling digital solutions into high-impact international business markets.", icon: Target, metric: "Global Growth" },
        { title: "Continuous R&D", desc: "Fostering an internal incubator culture to prototype emerging technologies.", icon: Lightbulb, metric: "Active R&D" },
        { title: "Strategic Partnerships", desc: "Collaborating with technology leaders to deliver best-of-breed platforms.", icon: Users, metric: "Strong Alliances" },
        { title: "Sustainable Scale", desc: "Optimizing compute efficiency and green software engineering practices.", icon: Diamond, metric: "Eco Optimized" },
      ],
    },
  };

  const currentTab = tabData[activeTab];

  return (
    <section
      ref={sectionRef}
      className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated relative py-10 lg:py-14 bg-[#F8FAFC] text-slate-900 overflow-hidden border-y border-slate-200 transition-all duration-700 ${
        sectionInView ? "animate opacity-100 translate-y-0" : "opacity-90 translate-y-2"
      }`}
    >
      {/* Background Micro Grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Top Connecting Beam from Mission */}
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 mb-10 text-center services-fade-down">
        <div className="inline-flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-blue-500 via-blue-600 to-indigo-600 animate-pulse" />
          <div className="px-4 py-1.5 rounded-full border border-blue-200 bg-white shadow-sm">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-mono">
              MISSION ➔ JOURNEY TRANSITION
            </span>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 services-fade-down services-delay-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 font-heading">
            The Core Philosophy Driving Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Growth & Evolution
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Between defining our core mission and reaching defining milestones, our operational framework bridges vision into measurable digital progress.
          </p>
        </div>

        {/* Tab Navigation Pill Group */}
        <div className="flex justify-center mb-12 services-fade-down services-delay-2">
          <div className="inline-flex p-1.5 rounded-2xl border border-slate-200 bg-white shadow-md gap-2">
            {(
              [
                { id: "execution", label: "Strategic Execution", icon: Zap },
                { id: "engineering", label: "Engineering Rigor", icon: Layers },
                { id: "horizon", label: "Future Horizon", icon: Rocket },
              ] as const
            ).map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-105"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <TabIcon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Tab Content Box */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-10"
        >
          {/* Highlight Banner */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6 services-fade-down services-delay-3">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 font-mono">
                {currentTab.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {currentTab.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-2xl">
                {currentTab.desc}
              </p>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentTab.pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`group relative h-full p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm services-fade-down services-delay-${Math.min(idx + 1, 6)}`}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-600 group-hover:to-indigo-600 border border-blue-200 group-hover:border-blue-600 text-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
                        <PillarIcon size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Transition Beam Leading directly to OUR JOURNEY */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 font-mono">
              EVOLVING INTO OUR MILESTONES
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-blue-500 via-blue-600 to-indigo-600 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyMetricCounter({
  target,
  suffix = "",
  isCounting,
  delay = 0,
  duration = 1600,
}: {
  target: number;
  suffix?: string;
  isCounting: boolean;
  delay?: number;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isCounting) {
      setDisplayValue(0);
      return;
    }

    let animFrame: number;
    const timeoutId = window.setTimeout(() => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(target * eased));

        if (progress < 1) {
          animFrame = requestAnimationFrame(animate);
        } else {
          setDisplayValue(target);
        }
      };
      animFrame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, [isCounting, target, delay, duration]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

function WhyInzovateSection() {
  const whyRef = useRef<HTMLDivElement>(null);
  const whyInView = useInView(whyRef, { once: false, amount: 0.15 });
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: false, amount: 0.2 });

  const isCounting = metricsInView || whyInView;

  const metrics = [
    { target: 20, suffix: "+", label: "Happy Clients" },
    { target: 70, suffix: "+", label: "Projects Delivered" },
    { target: 20, suffix: "+", label: "Industries Served" },
    { target: 2, suffix: "+", label: "Years of Excellence" },
  ];

  const valueCards = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We continuously explore emerging technologies to create smarter and more effective solutions.",
    },
    {
      icon: Users,
      title: "Customer Centric",
      description: "We build secure and intuitive solutions that put our clients and users at the center.",
    },
    {
      icon: ArrowUpRight,
      title: "Scalable Technology",
      description: "Our solutions are designed to evolve with your business and scale as you grow.",
    },
    {
      icon: Diamond,
      title: "Long-Term Partnership",
      description: "We focus on building lasting relationships and delivering continuous value.",
    },
  ];

  return (
    <section
      ref={whyRef}
      id="why-inzovate"
      className={`relative homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] text-slate-900 overflow-hidden border-t border-slate-200 ${
        whyInView ? "animate" : ""
      }`}
      style={{ userSelect: "none" }}
      aria-labelledby="why-inzovate-heading"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 space-y-16">

        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="fade-left">
            <h2
              id="why-inzovate-heading"
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why Forward-Thinking Companies{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mt-4">
              We partner with organizations to build intelligent, scalable and high-performance digital solutions designed for real-world growth.
            </p>
          </div>

          <div className="fade-right delay-2">
            <div
              ref={metricsRef}
              className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white/90 shadow-md"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-slate-200">
                {metrics.map((m, idx) => (
                  <div key={m.label} className="sm:px-4 first:sm:pl-0 last:sm:pr-0 text-center space-y-1">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        <WhyMetricCounter
                          target={m.target}
                          suffix={m.suffix}
                          isCounting={isCounting}
                          delay={idx * 120}
                        />
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs font-medium text-slate-600">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`${idx % 2 === 0 ? "fade-left" : "fade-right"} delay-${Math.min(idx + 1, 6)}`}
                >
                  <div className="group relative h-full p-6 sm:p-7 rounded-[22px] border border-slate-200 bg-white shadow-sm hover:border-blue-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <CardIcon size={20} />
                      </div>

                      <h3
                        className="text-xl font-bold text-slate-900 mb-2 tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {card.title}
                      </h3>

                      <div className="h-[2px] w-10 bg-blue-600 rounded-full my-3 group-hover:w-16 transition-all duration-300" />

                      <p className="text-sm text-slate-600 leading-relaxed mt-2">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="fade-left delay-3 pt-12">
          <div className="relative text-center max-w-3xl mx-auto space-y-4 pt-12 border-t border-slate-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-sm" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              OUR APPROACH
            </p>

            <h3
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Driven by Innovation. Defined by Impact.
            </h3>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We combine strategy, technology, and creativity to deliver solutions that drive measurable results and long-term success for your business.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function LinkedInIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </svg>
  );
}

function LeadershipSection() {
  const leadershipRef = useRef<HTMLDivElement>(null);
  const leadershipInView = useInView(leadershipRef, { once: false, amount: 0.15 });

  const scrollToCards = () => {
    const el = document.getElementById("leadership-cards");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={leadershipRef}
      id="leadership"
      className={`relative py-12 lg:py-18 bg-[#F8FAFC] text-slate-900 overflow-hidden border-t border-slate-200 homewhatweboxbg whatareyou-animate transition-all duration-700 ${
        leadershipInView ? "animate" : ""
      }`}
      style={{ userSelect: "none" }}
      aria-labelledby="leadership-heading"
    >
      {/* Particle Grid Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      
      {/* Light Wave SVG Background Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none">
          <path
            d="M-100 200 C300 400 800 100 1540 300"
            stroke="url(#waveGrad1)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <path
            d="M-100 500 C400 200 900 700 1540 400"
            stroke="url(#waveGrad2)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 space-y-20">
        
        {/* HERO HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6 fade-left">
          {/* Eyebrow Label with Glowing Indicator */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-200 bg-white shadow-sm mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 shadow-[0_0_8px_#2563eb]" />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-mono">
              OUR LEADERSHIP
            </span>
          </div>

          {/* Main Headline */}
          <h2
            id="leadership-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight font-heading"
          >
            Visionary Leadership<br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Driving Innovation
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Guided by experienced leaders dedicated to building technology that empowers businesses and shapes digital futures.
          </p>

          {/* Premium CTA Button */}
          <div className="pt-6">
            <button
              onClick={scrollToCards}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span>Meet Our Leaders</span>
              <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* 6 LEADERSHIP CARDS GRID */}
        <div id="leadership-cards" className="scroll-mt-28">
          <div className="flex flex-wrap justify-center gap-8">
            {leadersData.map((leader, idx) => {
              const LeaderIcon = leader.icon;
              return (
                <div
                  key={leader.name}
                  className={`w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-[390px] flex-grow-0 flex-shrink-0 ${
                    idx % 2 === 0 ? "fade-left" : "fade-right"
                  } delay-${Math.min(idx + 1, 6)}`}
                >
                  <div className="group relative h-full rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm hover:border-blue-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    
                    {/* Background Radial Glow on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.06)_0%,transparent_70%)]" />

                    <div>
                      {/* Top Bar: Role Tag + Floating Icon Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span className={`px-3 py-1 rounded-full border text-[10px] font-extrabold uppercase tracking-widest font-mono ${leader.badgeBg}`}>
                          {leader.tag}
                        </span>
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${leader.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <LeaderIcon size={18} />
                        </div>
                      </div>

                      {/* Futuristic Profile Avatar Orbit */}
                      <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                        {/* Orbit Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border border-dashed border-blue-400/50"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]" />
                        </motion.div>
                        {/* Inner Glowing Orb / Profile Photo */}
                        <div className={`relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br ${leader.avatarBg} border-2 border-white flex items-center justify-center shadow-lg ${leader.shadow} group-hover:scale-105 transition-transform duration-300`}>
                          {leader.image ? (
                            <img
                              src={leader.image}
                              alt={leader.name}
                              loading="lazy"
                              className="w-full h-full object-cover object-top"
                              onError={(e) => {
                                (e.currentTarget as HTMLElement).style.display = "none";
                              }}
                            />
                          ) : (
                            <span className="text-2xl font-black tracking-wider text-white font-heading drop-shadow-sm">
                              {leader.name.charAt(0)}{leader.name.split(" ")[1]?.charAt(0) || ""}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Leader Name & Role */}
                      <div className="text-center space-y-1 mb-4">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading group-hover:text-blue-600 transition-colors">
                          {leader.name}
                        </h3>
                        <p className={`text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent`}>
                          {leader.role}
                        </p>
                      </div>

                      {/* Accent Line */}
                      <div className={`w-12 h-1 bg-gradient-to-r ${leader.gradient} rounded-full mx-auto my-4 group-hover:w-20 transition-all duration-300`} />

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-normal">
                        {leader.description}
                      </p>
                    </div>

                    {/* Footer with Small LinkedIn Icon Button */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                        Executive Leadership
                      </span>
                      {leader.linkedin && (leader.linkedin as string) !== "#" ? (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} LinkedIn Profile`}
                          className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/80 text-blue-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 shadow-xs transition-all duration-300 flex items-center justify-center"
                        >
                          <LinkedInIcon size={15} />
                        </a>
                      ) : (
                        <span
                          aria-label="LinkedIn profile unavailable"
                          className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 opacity-60 flex items-center justify-center cursor-not-allowed"
                        >
                          <LinkedInIcon size={15} />
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function VisionAndCta() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.15 });

  return (
    <>
      {/* ── REDESIGNED FUTURISTIC LET'S CONNECT CTA SECTION ── */}
      <section
        ref={ctaRef}
        className={`relative py-12 lg:py-16 bg-white text-slate-900 overflow-hidden border-t border-slate-200 careers-animate ${
          ctaInView ? "animate" : ""
        }`}
        aria-labelledby="connect-cta-heading"
      >
        {/* Micro Grid Pattern */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          {/* Main Content Container with image-hover-content */}
          <div className="image-hover-content services-cta-banner relative rounded-[32px] border border-slate-200 bg-white p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-slate-300 group">
            <div className="max-w-3xl mx-auto text-center space-y-6 z-10">
              {/* Main Headline */}
              <h2
                id="connect-cta-heading"
                className="fade-down careers-delay-1 text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 leading-[1.08] tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to Build Your<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Future?
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="fade-left careers-delay-2 mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
                Partner with <strong className="text-slate-900 font-semibold">INZOVATE TECHNOLOGIES</strong> to transform your business through intelligent technology solutions.
              </p>

              {/* CTA Buttons - No Arrows */}
              <div className="fade-left careers-delay-3 pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Contact Our Team</span>
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-200 hover:border-blue-400 hover:bg-slate-50 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <span>Explore Our Solutions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HolographicGlobe() {
  const latitudes = [
    { cy: 156, rx: 110, ry: 24, opacity: 0.3 },
    { cy: 198, rx: 144, ry: 33, opacity: 0.45 },
    { cy: 242, rx: 161, ry: 39, opacity: 0.58 },
    { cy: 288, rx: 164, ry: 40, opacity: 0.62 },
    { cy: 334, rx: 154, ry: 36, opacity: 0.5 },
    { cy: 378, rx: 126, ry: 28, opacity: 0.35 },
  ];

  const longitudes = [
    { rx: 50, transform: "rotate(-40 310 276)", opacity: 0.35 },
    { rx: 90, transform: "rotate(-20 310 276)", opacity: 0.48 },
    { rx: 130, transform: "rotate(0 310 276)", opacity: 0.6 },
    { rx: 90, transform: "rotate(20 310 276)", opacity: 0.48 },
    { rx: 50, transform: "rotate(40 310 276)", opacity: 0.35 },
  ];

  const globeNodes = [
    { cx: 228, cy: 195, color: "#69d7ff" },
    { cx: 295, cy: 168, color: "#81dcff" },
    { cx: 375, cy: 215, color: "#9b7eff" },
    { cx: 418, cy: 286, color: "#62d9ff" },
    { cx: 342, cy: 345, color: "#a885ff" },
    { cx: 236, cy: 320, color: "#68d8ff" },
  ];

  return (
    <div className="about-cube-stage" aria-hidden="true">
      <div className="about-cube-halo" />
      <svg viewBox="0 0 620 550" className="about-globe-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="aboutGlobeGlow" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
            <stop offset="38%" stopColor="#1d4ed8" stopOpacity="0.95" />
            <stop offset="78%" stopColor="#1e3a8a" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="aboutAtmosphere" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#43b8ff" stopOpacity="0" />
            <stop offset="92%" stopColor="#4bb9ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8d68ff" stopOpacity="0.75" />
          </radialGradient>
          <radialGradient id="aboutGlobeHighlight" cx="32%" cy="26%" r="48%">
            <stop offset="0%" stopColor="#82e1ff" stopOpacity="0.32" />
            <stop offset="45%" stopColor="#4aa2ff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#4a5ceb" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="aboutBlueOrbit" x1="120" y1="120" x2="500" y2="430" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#51d3ff" stopOpacity="0.1" />
            <stop offset="40%" stopColor="#4da2ff" strokeOpacity="0.85" />
            <stop offset="75%" stopColor="#7658ff" strokeOpacity="0.9" />
            <stop offset="100%" stopColor="#9a51ff" strokeOpacity="0.15" />
          </linearGradient>
          <linearGradient id="aboutMagentaOrbit" x1="100" y1="360" x2="520" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8a4fff" stopOpacity="0.12" />
            <stop offset="45%" stopColor="#d154ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#50cbff" stopOpacity="0.2" />
          </linearGradient>
          <pattern id="aboutContinentDots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.4" fill="#84dbff" opacity="0.85" />
            <circle cx="9" cy="9" r="1.1" fill="#a48fff" opacity="0.65" />
          </pattern>
          <pattern id="aboutFineDots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.9" fill="#60cbff" opacity="0.5" />
          </pattern>
          <filter id="aboutSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="aboutCoreBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <clipPath id="aboutGlobeClip">
            <circle cx="310" cy="276" r="165" />
          </clipPath>
        </defs>

        <circle cx="310" cy="276" r="215" fill="#4faaff" opacity="0.06" filter="url(#aboutCoreBlur)" />
        <circle cx="310" cy="276" r="185" fill="#755bff" opacity="0.08" filter="url(#aboutCoreBlur)" />
        <g className="about-globe-orbits about-globe-orbits--back" fill="none">
          <ellipse className="about-globe-orbit about-globe-orbit--back-blue" cx="310" cy="276" rx="258" ry="79" transform="rotate(-16 310 276)" stroke="url(#aboutBlueOrbit)" strokeDasharray="4 8" strokeOpacity="0.45" />
        </g>
        <circle cx="310" cy="276" r="165" fill="url(#aboutGlobeGlow)" />
        <circle className="about-globe-atmosphere" cx="310" cy="276" r="168" fill="none" stroke="url(#aboutAtmosphere)" strokeOpacity="0.85" strokeWidth="2" />
        <circle cx="310" cy="276" r="165" fill="url(#aboutGlobeHighlight)" opacity="0.76" />

        <g clipPath="url(#aboutGlobeClip)">
          <g className="about-globe-grid" fill="none" stroke="#87cfff">
            {latitudes.map(({ cy, rx, ry, opacity }) => (
              <ellipse key={`lat-${cy}`} cx="310" cy={cy} rx={rx} ry={ry} strokeOpacity={opacity} strokeWidth="0.8" />
            ))}
            {longitudes.map(({ rx, transform, opacity }) => (
              <ellipse key={`long-${rx}-${transform}`} cx="310" cy="276" rx={rx} ry="165" transform={transform} strokeOpacity={opacity} strokeWidth="0.8" />
            ))}
          </g>

          <g className="about-globe-continents" fill="url(#aboutContinentDots)" filter="url(#aboutSoftGlow)">
            <path d="M158 187 C174 168 197 155 222 158 L244 171 237 188 218 191 205 205 185 208 168 200 Z" />
            <path d="M226 225 C243 222 256 230 258 247 L249 264 244 283 233 300 227 323 215 337 204 326 209 304 203 286 209 267 199 250 Z" />
            <path d="M306 171 C319 155 340 150 356 160 L367 174 354 185 339 183 330 195 310 192 298 183 Z" />
            <path d="M350 196 C372 182 401 181 426 194 L448 210 439 224 419 222 407 235 389 231 378 244 359 239 349 224 334 215 Z" />
            <path d="M323 222 C337 215 355 221 362 237 L357 254 367 273 357 293 347 316 333 342 319 333 315 310 304 295 309 276 300 258 308 240 Z" />
            <path d="M405 282 C422 276 440 282 449 294 L443 310 427 314 417 326 400 318 397 301 Z" />
          </g>
          <g className="about-globe-continents about-globe-continents--fine" fill="url(#aboutFineDots)" opacity="0.5">
            <path d="M151 219 C171 211 187 216 201 227 L195 242 177 248 158 240 Z" />
            <path d="M373 335 C391 327 412 333 423 348 L412 361 388 358 375 347 Z" />
          </g>

          <circle cx="263" cy="236" r="42" fill="#69d7ff" opacity="0.2" filter="url(#aboutCoreBlur)" />
          <circle cx="263" cy="236" r="14" fill="#81dcff" opacity="0.18" filter="url(#aboutSoftGlow)" />
          <circle cx="263" cy="236" r="4" fill="#c8f5ff" filter="url(#aboutSoftGlow)" />
        </g>

        <g className="about-globe-nodes" filter="url(#aboutSoftGlow)">
          {globeNodes.map(({ cx, cy, color }) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="8" fill={color} fillOpacity="0.16" />
              <circle cx={cx} cy={cy} r="2.5" fill={color} />
            </g>
          ))}
        </g>

        <g className="about-globe-orbits about-globe-orbits--front" fill="none">
          <ellipse className="about-globe-orbit about-globe-orbit--magenta" cx="310" cy="276" rx="238" ry="64" transform="rotate(8 310 276)" stroke="url(#aboutMagentaOrbit)" />
          <ellipse className="about-globe-orbit about-globe-orbit--front-blue" cx="310" cy="276" rx="258" ry="79" transform="rotate(-16 310 276)" stroke="url(#aboutBlueOrbit)" strokeDasharray="2 9" />
        </g>

        <circle className="about-globe-edge" cx="310" cy="276" r="168" fill="none" stroke="#73cfff" strokeOpacity="0.42" strokeWidth="1" />
      </svg>
    </div>
  );
}

type PrincipleAccent = "blue" | "violet" | "pink" | "green";

type Principle = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: PrincipleAccent;
};

const heroStars = [
  { left: "7%", top: "17%", size: 2, accent: "blue" },
  { left: "13%", top: "39%", size: 1, accent: "blue" },
  { left: "22%", top: "12%", size: 1, accent: "blue" },
  { left: "32%", top: "25%", size: 1, accent: "blue" },
  { left: "44%", top: "13%", size: 2, accent: "blue" },
  { left: "57%", top: "19%", size: 1, accent: "blue" },
  { left: "72%", top: "14%", size: 2, accent: "blue" },
  { left: "85%", top: "22%", size: 1, accent: "blue" },
  { left: "92%", top: "39%", size: 2, accent: "blue" },
  { left: "65%", top: "40%", size: 1, accent: "blue" },
  { left: "75%", top: "54%", size: 1, accent: "blue" },
  { left: "88%", top: "65%", size: 1, accent: "blue" },
  { left: "52%", top: "71%", size: 1, accent: "blue" },
  { left: "35%", top: "78%", size: 2, accent: "blue" },
  { left: "8%", top: "72%", size: 1, accent: "blue" },
] as const;

export default function About() {
  return (
    <main className="about-page pt-2 sm:pt-4 bg-[#FFFFFF] text-slate-900">
      <SEO
        title="About Us | Inzovate Technologies Private Limited"
        description="Learn about Inzovate Technologies Private Limited, an enterprise software development, cloud solution, and digital transformation provider based in Tamil Nadu, India."
        canonical="https://inzovate-technologies.com/about"
        keywordString="About Inzovate Technologies, software company history, IT company leadership Tamil Nadu, software development team Bhavani Erode Salem Coimbatore"
        pageType="website"
      />
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="about-hero__grid" aria-hidden="true" />
        <div className="about-hero__stars" aria-hidden="true">
          {heroStars.map(({ left, top, size, accent }, index) => (
            <span
              key={`${left}-${top}-${index}`}
              className={`about-star about-star--${accent}`}
              style={{ left, top, width: size, height: size }}
            />
          ))}
        </div>

        <div className="about-container about-hero__inner !items-center !text-center !pt-2 sm:!pt-4 !min-h-0">
          <FadeIn className="about-hero__copy !max-w-5xl flex flex-col items-center text-center w-full">
            <ParticleTitle
              id="about-hero-heading"
              text={"Technology With Purpose.\nIntelligent Cloud Architecture."}
              as="h1"
              loop={false}
              className="h-[180px] sm:h-[220px] md:h-[240px] lg:h-[250px] w-full max-w-6xl mb-3 sm:mb-4"
            />
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              We build intelligent, scalable, and future-ready technology solutions that empower businesses to grow, adapt, and lead in a digital world.
            </p>
            <div className="about-hero__actions flex items-center justify-center gap-4 !mt-0">
              <a href="#mission" className="about-primary-button">
                <span>Discover Our Journey</span>
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="about-container mt-10 sm:mt-14 pb-16 sm:pb-20 lg:pb-24">
          <Statistics />
        </div>
      </section>

      {/* REDESIGNED OUR MISSION SECTION */}
      <MissionSection />

      {/* MISSION TO JOURNEY BRIDGE SECTION */}
      <MissionToJourneySection />

      <JourneySection />
      
      <IndustriesSection />
      
      {/* REDESIGNED WHY INZOVATE SECTION */}
      <WhyInzovateSection />

      <LeadershipSection />
      <VisionAndCta />
    </main>
  );
}
