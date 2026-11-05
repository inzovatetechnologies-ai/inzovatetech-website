import { motion } from "framer-motion";
import { Code2, Cloud, Bot, Database, Cpu, Sparkles, Shield, Server, Layers } from "lucide-react";

export default function ServicesHeroVisual() {
  const nodes = [
    {
      title: "Software",
      icon: Code2,
      accent: "bg-blue-600",
      border: "border-blue-200",
      textColor: "text-blue-700",
      pos: "top-4 left-4 sm:top-6 sm:left-6",
    },
    {
      title: "Cloud Engine",
      icon: Cloud,
      accent: "bg-cyan-600",
      border: "border-cyan-200",
      textColor: "text-cyan-700",
      pos: "top-8 right-4 sm:top-10 sm:right-6",
    },
    {
      title: "AI & ML Core",
      icon: Bot,
      accent: "bg-purple-600",
      border: "border-purple-200",
      textColor: "text-purple-700",
      pos: "bottom-12 left-6 sm:bottom-14 sm:left-8",
    },
    {
      title: "Data Intelligence",
      icon: Database,
      accent: "bg-emerald-600",
      border: "border-emerald-200",
      textColor: "text-emerald-700",
      pos: "bottom-6 right-6 sm:bottom-8 sm:right-8",
    },
  ];

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] flex items-center justify-center overflow-hidden">
      {/* Abstract Orbital Rings & Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 flex items-center justify-center">
        <svg viewBox="0 0 600 600" className="w-full h-full stroke-blue-400/40 fill-none">
          <circle cx="300" cy="300" r="130" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="300" cy="300" r="210" strokeWidth="1.5" stroke="#3B82F6" strokeOpacity="0.3" strokeDasharray="10 10" />
          <circle cx="300" cy="300" r="260" strokeWidth="1" stroke="#2563EB" strokeOpacity="0.2" />

          {/* Connection Lines */}
          <path d="M 100,100 L 300,300 L 500,100" strokeWidth="1.5" stroke="#3B82F6" strokeDasharray="6 6" />
          <path d="M 120,500 L 300,300 L 480,500" strokeWidth="1.5" stroke="#2563EB" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* CENTRAL ENTERPRISE CORE NODE */}
      <div
        className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-white border border-blue-200 shadow-lg flex flex-col items-center justify-center text-center p-6"
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-3 shadow-sm">
          <Cpu className="w-7 h-7 text-blue-600" />
        </div>
        <p className="text-xs font-black text-[#0F172A] tracking-wide uppercase" style={{ fontFamily: "var(--font-heading)" }}>
          INZOVATE CORE
        </p>
        <p className="text-[10px] font-semibold text-blue-700 mt-1 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Enterprise Engine
        </p>
      </div>

      {/* 3D SERVICE CUBES/NODES */}
      {nodes.map((node) => {
        const Icon = node.icon;
        return (
          <div
            key={node.title}
            className={`absolute z-20 ${node.pos} p-4 sm:p-4.5 rounded-2xl border ${node.border} bg-white shadow-md flex items-center gap-3.5 max-w-[200px] sm:max-w-[220px]`}
          >
            <div className={`w-10 h-10 rounded-xl ${node.accent} text-white flex items-center justify-center flex-shrink-0 shadow-sm`}>
              <Icon size={20} />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#0F172A] tracking-wide">
                {node.title}
              </p>
              <p className={`text-[10px] font-semibold ${node.textColor} mt-0.5`}>
                Active Node
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
