import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Layers, Sliders, Link as LinkIcon, Zap, TrendingUp, Headphones } from "lucide-react";

export default function CrmWhyChooseInzovate() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "0px 0px -60px 0px" });

  const whyCards = [
    {
      title: "1. Industry-Focused Solutions",
      desc: "We design software solutions around your actual business workflows rather than forcing your business into a generic, rigid system.",
      icon: Layers,
      color: "#2563EB",
    },
    {
      title: "2. Customizable Workflows",
      desc: "Configure pipelines, fields, roles, approvals, notifications and automation according to your exact operational requirements.",
      icon: Sliders,
      color: "#0891B2",
    },
    {
      title: "3. Integration-Ready",
      desc: "Connect seamlessly with websites, email, WhatsApp, accounting platforms, ERPs and custom business applications.",
      icon: LinkIcon,
      color: "#7C3AED",
    },
    {
      title: "4. Intelligent Automation",
      desc: "Reduce repetitive work with automated notifications, reminders, task assignments and multi-step workflow triggers.",
      icon: Zap,
      color: "#D97706",
    },
    {
      title: "5. Scalable Architecture",
      desc: "Start with the features you need today and expand seamlessly as your team size and customer volume grow.",
      icon: TrendingUp,
      color: "#059669",
    },
    {
      title: "6. Implementation & Support",
      desc: "From requirement analysis and configuration to deployment and ongoing support, our team assists throughout your journey.",
      icon: Headphones,
      color: "#DB2777",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`homewhatweboxbg whatareyou-animate py-14 lg:py-16 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden ${
        inView ? "animate" : ""
      }`}
      style={{ userSelect: "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="fade-left text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full inline-block mb-3">
            Why Inzovate Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Why Choose Inzovate Technologies?
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Enterprise Solutions Designed Around Your Business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map((card, idx) => {
            const IconComp = card.icon;
            const direction = idx % 2 === 0 ? "fade-left" : "fade-right";
            const delayClass = `delay-${idx + 1}`;
            return (
              <div
                key={card.title}
                className={`${direction} ${delayClass} p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs"
                  style={{
                    backgroundColor: `${card.color}15`,
                    color: card.color,
                    border: `1px solid ${card.color}30`,
                  }}
                >
                  <IconComp size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
