import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Rocket, Sparkles, Globe } from "lucide-react";
import EnergyWaveVisual from "./EnergyWaveVisual";

const impactStatsData = [
  {
    id: "stat-01",
    statNumber: "150+",
    targetValue: 150,
    label: "Happy Clients",
    description: "Trusted by businesses across various domains",
    icon: Users,
    glowColor: "text-blue-600 border-blue-200 bg-blue-50",
  },
  {
    id: "stat-02",
    statNumber: "600+",
    targetValue: 600,
    label: "Projects Delivered",
    description: "Successfully delivered innovative solutions",
    icon: Rocket,
    glowColor: "text-indigo-600 border-indigo-200 bg-indigo-50",
  },
  {
    id: "stat-03",
    statNumber: "15+",
    targetValue: 15,
    label: "Experts Team",
    description: "Skilled professionals driving excellence",
    icon: Sparkles,
    glowColor: "text-purple-600 border-purple-200 bg-purple-50",
  },
  {
    id: "stat-04",
    statNumber: "2+",
    targetValue: 2,
    label: "Years of Excellence",
    description: "Building solutions that last & scale",
    icon: Globe,
    glowColor: "text-cyan-600 border-cyan-200 bg-cyan-50",
  },
];

function CountUpStat({
  targetValue,
  label,
  description,
  icon: Icon,
  glowColor,
  isCounting,
}: {
  targetValue: number;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  glowColor: string;
  isCounting: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isCounting) return;

    const startTime = performance.now();
    const duration = 2000;
    let animFrame: number;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(targetValue * eased));

      if (progress < 1) {
        animFrame = requestAnimationFrame(animate);
      }
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [isCounting, targetValue]);

  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 hover:bg-slate-50 transition-colors duration-300">
      <div>
        {/* Clean Icon */}
        <div
          className={`w-10 h-10 rounded-xl border ${glowColor} flex items-center justify-center mb-5 shadow-xs`}
        >
          <Icon className="w-5 h-5" strokeWidth={1.8} />
        </div>

        {/* Count-Up Large Number */}
        <div
          className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {displayValue}
          <span className="text-blue-600">+</span>
        </div>

        {/* Medium Label */}
        <h4 className="text-base font-bold text-slate-900 mb-2">{label}</h4>
      </div>

      {/* Small Muted Description */}
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

export default function OurImpactSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden bg-white border-t border-slate-200"
      aria-labelledby="our-impact-heading"
    >
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 z-10">
        {/* MAIN LARGE ROUNDED CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] border border-slate-200 bg-[#F8FAFC] shadow-xl overflow-hidden"
        >
          {/* FLOWING DIGITAL ENERGY WAVE BACKGROUND VISUAL */}
          <EnergyWaveVisual />

          {/* TOP / HEADING AREA */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span
                className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700"
                style={{ fontFamily: "var(--font-body)" }}
              >
                OUR IMPACT
              </span>
            </div>

            {/* Main Heading */}
            <h2
              id="our-impact-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Driving Impact
              <br />
              Through
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Innovation &amp;
                <br />
                Excellence
              </span>
            </h2>

            {/* Short Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
              Numbers that reflect our commitment to innovation, quality and customer success.
            </p>
          </div>

          {/* HORIZONTAL STATISTICS STRIP AT BOTTOM */}
          <div
            ref={statsRef}
            className="relative z-10 border-t border-slate-200 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
          >
            {impactStatsData.map((stat) => (
              <CountUpStat
                key={stat.id}
                targetValue={stat.targetValue}
                label={stat.label}
                description={stat.description}
                icon={stat.icon}
                glowColor={stat.glowColor}
                isCounting={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
