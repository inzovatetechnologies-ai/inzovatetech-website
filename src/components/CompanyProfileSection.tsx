import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Calendar,
  MapPin,
  Users,
  Cpu,
  Target,
  Shield,
  Sparkles,
  ArrowRight,
  Globe,
  Zap,
  Hash,
} from "lucide-react";
import SmartCityVisual from "./SmartCityVisual";

const profileCards = [
  {
    icon: Building2,
    label: "LEGAL NAME",
    value: "INZOVATE TECHNOLOGIES PVT.LTD",
    glow: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    valueClass: "text-[11px] sm:text-xs font-black tracking-wide text-slate-900 text-center w-full break-words leading-snug",
  },
  {
    icon: Hash,
    label: "CIN",
    value: "U62099TZ2023PTC032559",
    glow: "from-blue-50 to-purple-50",
    border: "border-blue-200",
    valueClass: "whitespace-nowrap font-mono text-[11px] sm:text-[12px] font-extrabold tracking-wider text-blue-700 text-center w-full overflow-hidden text-ellipsis",
  },
  {
    icon: Calendar,
    label: "ESTABLISHED",
    value: "June 2025",
    glow: "from-indigo-50 to-pink-50",
    border: "border-indigo-200",
    valueClass: "text-xs sm:text-[13.5px] font-black tracking-wide text-slate-900 text-center w-full",
  },
  {
    icon: MapPin,
    label: "REGISTERED OFFICE",
    value: "Bhavani",
    glow: "from-purple-50 to-blue-50",
    border: "border-purple-200",
    valueClass: "text-xs sm:text-[13.5px] font-black tracking-wide text-slate-900 text-center w-full",
  },
];

const marketItems = [
  { icon: Cpu, label: "Technology Solutions Company", href: "/services" },
  { icon: Building2, label: "Software Product Company", href: "/products" },
  { icon: Target, label: "Digital Transformation Partner", href: "/services" },
  { icon: Shield, label: "Cloud Solutions Provider", href: "/services" },
  { icon: Sparkles, label: "AI & Automation Company", href: "/services" },
  { icon: Globe, label: "Enterprise Technology Partner", href: "/strategic-partnerships" },
  { icon: Zap, label: "Business Technology Solutions Provider", href: "/services" },
];

export default function CompanyProfileSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="company-profile"
      className="relative py-20 lg:py-28 overflow-hidden bg-[#F8FAFC] border-t border-slate-200"
      aria-labelledby="company-profile-heading"
    >
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
        {/* MAIN LARGE WHITE THEME CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] border border-slate-200 p-8 sm:p-12 lg:p-14 bg-white shadow-xl overflow-hidden"
        >
          {/* THREE VISUAL ZONES: LEFT (Identity) | CENTER (Capability List) | RIGHT (3D Visual) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            {/* ── LEFT ZONE: COMPANY IDENTITY (WITH WHAT ARE YOU LOOKING FOR ANIMATION & TRANSITIONS) ── */}
            <div
              className={`homewhatweboxbg whatareyou-animate flex flex-col h-full justify-between transition-all duration-700 ${
                isInView ? "animate" : ""
              }`}
              style={{ userSelect: "none" }}
            >
              <div className="fade-left">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 mb-5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span
                    className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-blue-700"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    COMPANY PROFILE
                  </span>
                </div>

                {/* Main Heading */}
                <h2
                  id="company-profile-heading"
                  className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  INZOVATE
                  <br />
                  TECHNOLOGIES
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    PRIVATE LIMITED
                  </span>
                </h2>
              </div>

              {/* 4 Compact Information Cards with Staggered Fade Transitions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4 auto-rows-fr">
                {profileCards.map((card, idx) => {
                  const Icon = card.icon;
                  const isLeft = idx % 2 === 0;
                  return (
                    <div
                      key={card.label}
                      className={`${isLeft ? "fade-left" : "fade-right"} delay-${idx + 1}`}
                    >
                      <div className="group relative p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[126px] w-full overflow-hidden hover:-translate-y-1">
                        {/* Top Header Row: Icon next to Label */}
                        <div className="flex items-center gap-2.5 mb-2">
                          <div
                            className={`w-7 h-7 rounded-lg border ${card.border} bg-white flex-shrink-0 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-all duration-300 shadow-xs`}
                          >
                            <Icon strokeWidth={1.9} className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[10px] font-black tracking-[0.14em] uppercase text-slate-500">
                            {card.label}
                          </span>
                        </div>

                        {/* Bottom Value Text */}
                        <div className="mt-1 flex-1 flex items-center justify-center px-1">
                          <p className={`leading-snug transition-all duration-300 ${card.valueClass}`}>
                            {card.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── CENTER ZONE: HOW WE SERVE THE MARKET (WITH SERVICES-SECTION DROP-DOWN ANIMATION & TRANSITIONS) ── */}
            <div className="flex flex-col h-full justify-between border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-10">
              <div className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated ${isInView ? "animate" : ""}`}>
                <h3
                  className="services-fade-down text-xs font-extrabold tracking-[0.16em] uppercase text-slate-900 mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  HOW WE SERVE THE MARKET
                </h3>

                {/* Capability List linked to matching pages */}
                <div className="flex flex-col gap-1">
                  {marketItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={`services-fade-down services-delay-${Math.min(i + 1, 6)}`}
                      >
                        <Link
                          to={item.href}
                          className="group flex items-center justify-between py-3.5 border-b border-slate-100 transition-all duration-200 hover:px-2 cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg border border-blue-200 bg-blue-50 flex items-center justify-center text-blue-600 group-hover:border-blue-400 transition-all duration-200">
                              <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                              {item.label}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── RIGHT ZONE: 3D TECHNOLOGY VISUAL ── */}
            <div className="border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-8 flex items-center justify-center h-full">
              <SmartCityVisual />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
