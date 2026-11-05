import { useRef } from "react";
import { useInView } from "framer-motion";
import { Lightbulb, Shield, Users, Target, Globe } from "lucide-react";

const valuesData = [
  {
    id: "val-01",
    title: "INNOVATION",
    description:
      "We constantly explore new ideas and technologies to build smarter solutions.",
    icon: Lightbulb,
    badgeBorder: "border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    id: "val-02",
    title: "INTEGRITY",
    description:
      "We believe in transparency, honesty and doing the right thing always.",
    icon: Shield,
    badgeBorder: "border-indigo-200",
    iconColor: "text-indigo-600",
  },
  {
    id: "val-03",
    title: "CUSTOMER FIRST",
    description:
      "Our customers’ success is our success. We listen, understand and deliver value.",
    icon: Users,
    badgeBorder: "border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    id: "val-04",
    title: "EXCELLENCE",
    description:
      "We are committed to quality, performance and continuous improvement.",
    icon: Target,
    badgeBorder: "border-pink-200",
    iconColor: "text-pink-600",
  },
  {
    id: "val-05",
    title: "IMPACT",
    description:
      "We build technology that creates positive change for businesses and communities.",
    icon: Globe,
    badgeBorder: "border-cyan-200",
    iconColor: "text-cyan-600",
  },
];

export default function OurValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="our-values"
      className={`relative !py-14 lg:!py-16 overflow-hidden !bg-[#F8FAFC] border-t border-slate-200 homewhatweboxbg whatareyou-animate ${
        isInView ? "animate" : ""
      }`}
      style={{ userSelect: "none" }}
      aria-labelledby="our-values-heading"
    >
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
        {/* TOP AREA: HEADING & INTRO WITH FADE-LEFT TRANSITION */}
        <div className="fade-left max-w-3xl mb-12 lg:mb-14 text-center sm:text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span
              className="text-[11px] font-extrabold tracking-[0.22em] uppercase text-blue-700 font-mono"
            >
              OUR VALUES
            </span>
          </div>

          {/* Main Heading */}
          <h2
            id="our-values-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.12] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Principles That{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Drive Everything We Do
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Our core values shape our culture, guide our decisions and define the way we build technology for a better future.
          </p>
        </div>

        {/* VALUES CARDS ROW (WITH EBIX STAGGERED FADE-LEFT / FADE-RIGHT ANIMATIONS & HOVER TRANSITIONS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {valuesData.map((val, idx) => {
            const Icon = val.icon;
            const animDirection = idx % 2 === 0 ? "fade-left" : "fade-right";
            const delayClass = `delay-${Math.min(idx + 1, 6)}`;

            return (
              <div
                key={val.id}
                className={`${animDirection} ${delayClass} group relative flex flex-col justify-between min-h-[260px] p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                <div>
                  {/* Clean Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-xl border ${val.badgeBorder} bg-slate-50 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-all duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${val.iconColor}`} strokeWidth={1.8} />
                  </div>

                  {/* Card Title */}
                  <h3
                    className="text-xs sm:text-sm font-extrabold tracking-[0.14em] uppercase text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {val.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 transition-colors duration-300">
                    {val.description}
                  </p>
                </div>

                {/* Bottom Border Accent Line on Hover */}
                <div className="w-8 h-[2px] mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
