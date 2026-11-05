import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Monitor,
  Bot,
  Cloud,
  Shield,
  Layers,
  Workflow,
  UserCheck,
  TrendingUp,
  Sparkles,
  FolderKanban,
  Briefcase,
  ArrowRight,
  ArrowUpRight,
  Rocket,
  Heart,
  Star,
  Users,
  Globe,
  MapPin,
  Clock,
  BarChart3,
  Check,
} from "lucide-react";
import DemoModal from "../components/DemoModal";
import SEO from "../components/SEO";

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

// ── WHY INZOVATE FEATURE CARDS ──
const whyFeatures = [
  {
    icon: Rocket,
    title: "Cutting-Edge Work",
    desc: "Work on AI, Cloud, Web, Mobile and modern technologies that solve real-world problems.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: TrendingUp,
    title: "Growth Culture",
    desc: "Keep learning, get mentored, and grow your technical and professional skills with us.",
    accent: "from-purple-500 to-violet-400",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    desc: "Work with talented, passionate people in a transparent and supportive environment.",
    accent: "from-cyan-400 to-teal-400",
  },
  {
    icon: Globe,
    title: "Real Impact",
    desc: "Build technology that creates measurable value for businesses and people.",
    accent: "from-amber-400 to-orange-500",
  },
];

// ── 12 CAREER CATEGORIES ──
const careerCategories = [
  { icon: Code2, title: "Software Development", count: "12 Open Positions", filterKey: "Software Development" },
  { icon: Monitor, title: "Web Development", count: "08 Open Positions", filterKey: "Web Development" },
  { icon: Bot, title: "AI & Machine Learning", count: "06 Open Positions", filterKey: "Software Development" },
  { icon: Cloud, title: "Cloud Computing", count: "07 Open Positions", filterKey: "Cloud Computing" },
  { icon: Shield, title: "Cybersecurity", count: "04 Open Positions", filterKey: "Cloud Computing" },
  { icon: Layers, title: "UI/UX Design", count: "05 Open Positions", filterKey: "Design" },
  { icon: Workflow, title: "DevOps", count: "06 Open Positions", filterKey: "Cloud Computing" },
  { icon: UserCheck, title: "Talent Acquisition", count: "03 Open Positions", filterKey: "Human Resources" },
  { icon: TrendingUp, title: "Business Development", count: "04 Open Positions", filterKey: "Business Development" },
  { icon: Sparkles, title: "Digital Marketing", count: "03 Open Positions", filterKey: "Business Development" },
  { icon: FolderKanban, title: "Project Management", count: "04 Open Positions", filterKey: "Software Development" },
  { icon: Briefcase, title: "Operations", count: "05 Open Positions", filterKey: "Business Development" },
];

// ── 8 OPEN JOB POSITIONS ──
const jobListings = [
  {
    id: 1,
    title: "Full Stack Developer",
    dept: "Software Development",
    location: "Bhavani, Tamil Nadu",
    exp: "0–2 Years",
    type: "Full-time",
    icon: Code2,
  },
  {
    id: 2,
    title: "React Developer",
    dept: "Web Development",
    location: "Chennai, Tamil Nadu",
    exp: "0–2 Years",
    type: "Full-time",
    icon: Monitor,
  },
  {
    id: 3,
    title: "Cloud Engineer",
    dept: "Cloud Computing",
    location: "Coimbatore, Tamil Nadu",
    exp: "0–2 Years",
    type: "Full-time",
    icon: Cloud,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    dept: "Design",
    location: "Coimbatore, Tamil Nadu",
    exp: "0–2 Years",
    type: "Full-time",
    icon: Layers,
  },
  {
    id: 5,
    title: "Business Development Executive",
    dept: "Business Development",
    location: "Bhavani, Tamil Nadu",
    exp: "0–2 Years",
    type: "Full-time",
    icon: TrendingUp,
  },
  {
    id: 6,
    title: "HR / Talent Acquisition Executive",
    dept: "Human Resources",
    location: "Bhavani, Tamil Nadu",
    exp: "0–2 Years",
    type: "Full-time",
    icon: UserCheck,
  },
  {
    id: 7,
    title: "Data Analyst",
    dept: "Software Development",
    location: "Bhavani / Coimbatore, Tamil Nadu",
    exp: "0–2 Years",
    type: "Full-time",
    icon: BarChart3,
  },
  {
    id: 8,
    title: "AI & Machine Learning Engineer",
    dept: "Software Development",
    location: "Bengaluru, Karnataka",
    exp: "0–2 Years",
    type: "Full-time",
    icon: Bot,
  },
];

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("General Application");

  const ctaSectionRef = useRef<HTMLElement>(null);
  const ctaSectionInView = useInView(ctaSectionRef, { once: false, amount: 0.15 });

  const depts = [
    "All",
    "Software Development",
    "Web Development",
    "Cloud Computing",
    "Design",
    "Business Development",
    "Human Resources",
  ];

  const filteredJobs =
    filter === "All"
      ? jobListings
      : jobListings.filter((job) => job.dept === filter);

  const openApplyModal = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setApplyModalOpen(true);
  };

  const handleCategoryClick = (filterKey: string) => {
    setFilter(filterKey);
    const element = document.getElementById("openings");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#FFFFFF] text-slate-900 min-h-screen">
      <SEO
        title="Careers & Job Openings | Inzovate Technologies Private Limited"
        description="Join Inzovate Technologies Private Limited. Explore job openings for Software Engineers, Frontend Developers, Backend Engineers, Cloud Engineers & UI/UX Designers in Tamil Nadu."
        canonical="https://inzovate-technologies.com/careers"
        keywordString="Inzovate Technologies, Software engineering jobs Erode, IT careers Tamil Nadu, developer jobs Bhavani Salem Coimbatore, Inzovate careers, software developer vacancies"
        pageType="website"
      />

      <div className="sh-spacer" />

      {/* ── HERO SECTION WITH SH-SPACER OPENING ANIMATION & TRANSITIONS ── */}
      <section
        className="relative overflow-hidden pb-16 pt-16 sm:pt-20"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f3f8ff 58%, #f7f5ff 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 0 42%, rgba(96,165,250,0.06) 42.1%, transparent 42.3%), linear-gradient(70deg, transparent 0 70%, rgba(139,92,246,0.05) 70.1%, transparent 70.3%)",
          }}
        />
        <div
          className="absolute -right-28 top-4 h-[560px] w-[560px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(147,197,253,0.24), transparent 68%)",
            filter: "blur(20px)",
          }}
        />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center home-banner-animate animate">
            <div className="fade-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-blue-700 font-mono">
                  CAREERS AT INZOVATE
                </span>
              </div>
            </div>

            <div className="fade-right delay-1">
              <h1
                className="text-5xl lg:text-[72px] font-extrabold text-[#0f172a] leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Build the Future
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">With Us.</span>
              </h1>
            </div>

            <div className="fade-left delay-2">
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#52627a] mx-auto">
                Join a technology team working on software, AI, cloud, cybersecurity and digital transformation.
              </p>
            </div>

            <div className="fade-right delay-3 w-full flex flex-col items-center">
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(37,99,235,0.32)]"
                >
                  View Open Positions <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => openApplyModal("General Job Application")}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-gradient-to-br from-slate-100 via-white to-slate-200 px-7 py-4 text-[15px] font-extrabold shadow-md hover:-translate-y-0.5 hover:border-slate-400 transition-all cursor-pointer group"
                >
                  <span className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 bg-clip-text text-transparent font-black tracking-tight">
                    Apply Now
                  </span>
                  <ArrowUpRight size={16} className="text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl text-left">
                {[
                  [Users, "Great People", "Work with talented and passionate minds."],
                  [Rocket, "Growth & Learning", "Continuous learning and career growth."],
                  [Heart, "Meaningful Impact", "Build solutions that create real impact."],
                  [Star, "Work-Life Balance", "Flexible environment that supports you."],
                ].map(([Icon, title, text]) => (
                  <div key={title as string} className="p-4 rounded-2xl border border-blue-100/70 bg-white/80 shadow-xs flex items-center gap-3.5 backdrop-blur-sm">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#17223b]">{title as string}</p>
                      <p className="mt-0.5 text-[10px] leading-relaxed text-[#718096]">{text as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — WHY INZOVATE? (WHITE THEME) ── */}
      <section className="relative py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 overflow-hidden">
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block mb-4 shadow-xs">
              WHY INZOVATE?
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                INZOVATE?
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Build meaningful technology, grow with talented people, and create an impact that matters.
            </p>
          </FadeIn>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFeatures.map((card, idx) => {
              const Icon = card.icon;
              return (
                <FadeIn key={card.title} delay={idx * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="p-7 rounded-[22px] border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group overflow-hidden relative"
                  >
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-xs"
                      >
                        <Icon size={22} />
                      </div>
                      <h3
                        className="text-lg font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — CAREER CATEGORIES (12 CATEGORIES GRID) ── */}
      <section className="relative py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 overflow-hidden">
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-purple-700 bg-purple-50 px-4 py-1.5 rounded-full border border-purple-200 inline-block mb-4 shadow-xs">
              CAREER CATEGORIES
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Career Categories
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Find the right opportunity that matches your skills, experience and passion.
            </p>
          </FadeIn>

          {/* 12 Category Cards Desktop 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {careerCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <FadeIn key={cat.title} delay={idx * 0.04}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => handleCategoryClick(cat.filterKey)}
                    className="p-5 rounded-[18px] border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                      <div className="truncate">
                        <h3
                          className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5 font-medium">
                          {cat.count}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — OPEN POSITIONS ── */}
      <section
        id="openings"
        className="relative py-16 lg:py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 overflow-hidden"
      >
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 inline-block mb-4 shadow-xs">
              OPEN POSITIONS
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Open{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Find your next opportunity and build the future with INZOVATE.
            </p>
          </FadeIn>

          {/* ── HORIZONTAL CATEGORY FILTER ── */}
          <FadeIn className="mb-10">
            <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2.5 pb-3 sm:pb-0 scrollbar-none max-w-full">
              {depts.map((d) => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wide transition-all whitespace-nowrap flex-shrink-0 cursor-pointer ${
                    filter === d
                      ? "bg-blue-600 text-white shadow-md border border-blue-600"
                      : "bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* ── JOB LISTINGS HORIZONTAL CARDS ── */}
          <div className="space-y-4">
            {filteredJobs.map((job, idx) => {
              const RoleIcon = job.icon;
              return (
                <FadeIn key={job.id} delay={idx * 0.05}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 sm:p-7 rounded-[20px] border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                  >
                    {/* Left: Role Icon & Title Info */}
                    <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover:scale-105 transition-transform shadow-xs">
                        <RoleIcon size={24} />
                      </div>

                      <div>
                        <h3
                          className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-1.5 text-xs text-slate-500 font-medium">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-blue-600" />
                            {job.location}
                          </span>
                          <span className="hidden sm:inline text-slate-300">•</span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-purple-600" />
                            {job.exp}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Center & Right: Dept Badge, Type & Apply CTA */}
                    <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
                          {job.dept}
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold">
                          {job.type}
                        </span>
                      </div>

                      <button
                        onClick={() => openApplyModal(job.title)}
                        className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs tracking-wide shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
                      >
                        <span>Apply</span>
                      </button>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — CAREER CTA (WITH IMAGE-HOVER-CONTENT ANIMATION & TRANSITIONS) ── */}
      <section
        ref={ctaSectionRef}
        className={`relative py-16 lg:py-20 bg-white border-t border-slate-200 overflow-hidden careers-animate ${
          ctaSectionInView ? "animate" : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div
            className="image-hover-content services-cta-banner relative rounded-[36px] lg:rounded-[44px] border border-slate-200 overflow-hidden p-8 sm:p-14 lg:p-16 text-center shadow-xl bg-gradient-to-br from-white via-[#F8FAFC] to-blue-50/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300 group"
          >
            {/* Ambient Reactive Glows */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-400/20 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-400/20 group-hover:scale-110 transition-all duration-700" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="fade-down careers-delay-1 text-[11px] font-extrabold uppercase tracking-widest text-[#1746A2] bg-blue-50/90 px-4 py-1.5 rounded-full border border-blue-200 mb-5 inline-block">
                JOIN OUR TALENT NETWORK
              </span>

              <h2
                className="fade-left careers-delay-2 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to Build the Future?
              </h2>

              <p className="fade-left careers-delay-3 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Join a team where your ideas, skills and ambition can create real-world impact.
              </p>

              <div className="fade-left careers-delay-3 flex flex-wrap gap-4 justify-center">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-extrabold text-white text-base tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <span>View Open Positions</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </a>

                <button
                  onClick={() => openApplyModal("General Resume Submission")}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-300 text-slate-800 font-bold text-base bg-white hover:bg-slate-50 hover:border-blue-400 hover:-translate-y-0.5 shadow-sm transition-all cursor-pointer"
                >
                  Send Your Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application / Job Modal */}
      <DemoModal
        open={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultProduct={selectedRole}
        isJobApplication={true}
      />
    </main>
  );
}
