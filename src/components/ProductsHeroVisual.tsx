import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Zap,
  Lock,
  Cloud,
  Database,
  Globe,
  Sparkles,
  Server,
  Layers,
  Terminal,
} from "lucide-react";

export default function ProductsHeroVisual() {
  const [activeTab, setActiveTab] = useState<"architecture" | "metrics" | "ai">("architecture");

  return (
    <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background Soft Ambient Light Gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.12) 0%, rgba(124, 58, 237, 0.08) 40%, rgba(248, 250, 252, 0) 75%)",
          filter: "blur(75px)",
        }}
      />

      {/* Abstract Glowing Grid Lines & Concentric Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-40 flex items-center justify-center">
        <svg viewBox="0 0 600 600" className="w-full h-full stroke-blue-500/25 fill-none">
          {/* Concentric Rings */}
          <circle cx="300" cy="300" r="140" strokeWidth="1" strokeDasharray="6 6" className="animate-[spin_40s_linear_infinite]" />
          <circle cx="300" cy="300" r="220" strokeWidth="1.5" stroke="#8B5CF6" strokeOpacity="0.3" strokeDasharray="12 12" className="animate-[spin_60s_linear_infinite_reverse]" />
          <circle cx="300" cy="300" r="280" strokeWidth="1" stroke="#3B82F6" strokeOpacity="0.2" />

          {/* Curved Connection Laser Path */}
          <path d="M 40,300 Q 300,80 560,300" strokeWidth="2" stroke="url(#bluePurpleGlow)" strokeDasharray="8 8" />
          <path d="M 80,480 Q 300,180 520,480" strokeWidth="1.5" stroke="#2563EB" strokeOpacity="0.25" />

          <defs>
            <linearGradient id="bluePurpleGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* FLOATING 3D GLASS CUBES IN BACKGROUND */}
      <motion.div
        className="absolute top-8 left-4 sm:left-8 w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/80 border border-blue-200/80 backdrop-blur-xl shadow-lg flex items-center justify-center z-20"
        animate={{ y: [-12, 12, -12], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Server className="w-8 h-8 text-blue-600" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-4 sm:right-8 w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-white/80 border border-purple-200/80 backdrop-blur-xl shadow-lg flex items-center justify-center z-20"
        animate={{ y: [14, -14, 14], rotate: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Database className="w-9 h-9 text-purple-600" />
      </motion.div>

      {/* MAIN ENTERPRISE PLATFORM CORE PANEL (WHITE THEME GLASSMORPHISM) */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[550px] p-6 sm:p-8 rounded-[36px] border border-slate-200/90 bg-white/95 text-slate-900 shadow-2xl backdrop-blur-2xl overflow-hidden"
      >
        {/* Subtle Top Ambient Lighting Streak */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-36 rounded-full pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
            filter: "blur(45px)",
          }}
        />

        {/* Top Terminal Header Row */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-rose-500 shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-amber-500 shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-xs" />
            <span className="ml-2 text-xs font-extrabold text-slate-700 font-mono tracking-wider flex items-center gap-1.5">
              <Terminal size={13} className="text-blue-600" />
              INZOVATE_CORE_v5.0_ENGINE
            </span>
          </div>

          <div className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold flex items-center gap-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>99.99% SLA UPTIME</span>
          </div>
        </div>

        {/* Interactive Mode Toggle Pills */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 mb-6">
          {(
            [
              { id: "architecture", label: "Architecture", icon: Layers },
              { id: "metrics", label: "Live Telemetry", icon: Activity },
              { id: "ai", label: "AI Workflows", icon: Cpu },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  active
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* DYNAMIC DISPLAY CONTENT */}
        <AnimatePresence mode="wait">
          {activeTab === "architecture" && (
            <motion.div
              key="arch"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 mb-6"
            >
              {/* Central Engine Visual Node */}
              <div className="relative p-4.5 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border border-blue-200/80 shadow-xs flex items-center justify-between overflow-hidden">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                    <Cpu size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 tracking-wide">Unified Enterprise Core</h4>
                    <p className="text-[11px] text-slate-500">High-concurrency microservices bus</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/80 px-3 py-1 rounded-lg border border-blue-200">
                  &lt; 15ms
                </span>
              </div>

              {/* Sub-Modules Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Lock size={17} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Security</p>
                    <p className="text-xs font-bold text-slate-800">AES-256 SOC2</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Cloud size={17} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Infrastructure</p>
                    <p className="text-xs font-bold text-slate-800">Multi-Cloud Native</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "metrics" && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Activity size={17} className="text-blue-600" />
                  <span className="text-xs font-bold text-slate-800">Global API Throughput Stream</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded border border-emerald-200">
                  10M+ Daily Calls
                </span>
              </div>

              {/* SVG Live Metric Chart */}
              <div className="h-32 w-full pt-1">
                <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="metricGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(0,0,0,0.06)" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(0,0,0,0.06)" />
                  <path
                    d="M 0,60 Q 50,20 100,45 T 200,15 T 300,10 L 300,80 L 0,80 Z"
                    fill="url(#metricGrad)"
                  />
                  <path
                    d="M 0,60 Q 50,20 100,45 T 200,15 T 300,10"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3.5"
                  />
                  <circle cx="200" cy="15" r="4.5" fill="#3B82F6" className="animate-ping" />
                  <circle cx="200" cy="15" r="4.5" fill="#1D4ED8" />
                </svg>
              </div>
            </motion.div>
          )}

          {activeTab === "ai" && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-4.5 rounded-2xl bg-purple-50/60 border border-purple-200/80 mb-6 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={17} className="text-purple-600" />
                  <span className="text-xs font-bold text-slate-900">Automated Machine Learning Triggers</span>
                </div>
                <span className="text-[10px] font-mono text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded border border-purple-200">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Autonomous workflow rules processing over 50,000 automated actions per second across enterprise workloads.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Metrics Quick Bar */}
        <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold uppercase text-slate-500">Security</span>
            <span className="text-xs font-black text-slate-800 flex items-center gap-1 mt-0.5">
              <ShieldCheck size={13} className="text-blue-600" /> SOC 2 / ISO
            </span>
          </div>
          <div className="flex flex-col items-center border-x border-slate-200">
            <span className="text-[9px] font-bold uppercase text-slate-500">Deployment</span>
            <span className="text-xs font-black text-slate-800 flex items-center gap-1 mt-0.5">
              <Cloud size={13} className="text-purple-600" /> Multi-Tenant
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-bold uppercase text-slate-500">Ecosystem</span>
            <span className="text-xs font-black text-slate-800 flex items-center gap-1 mt-0.5">
              <Globe size={13} className="text-cyan-600" /> GraphQL & REST
            </span>
          </div>
        </div>
      </motion.div>

      {/* FLOATING GLASS BADGE (Top Right) */}
      <motion.div
        className="absolute top-6 right-2 sm:right-6 z-20 p-3.5 rounded-2xl border border-slate-200/90 bg-white/95 shadow-xl backdrop-blur-md flex items-center gap-3"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
          <ArrowUpRight size={18} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">System Latency</p>
          <p className="text-xs font-black text-blue-600">&lt; 15ms Avg</p>
        </div>
      </motion.div>

      {/* FLOATING GLASS BADGE (Bottom Left) */}
      <motion.div
        className="absolute bottom-6 left-2 sm:left-6 z-20 p-3.5 rounded-2xl border border-slate-200/90 bg-white/95 shadow-xl backdrop-blur-md flex items-center gap-3"
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 text-white flex items-center justify-center shadow-md">
          <Zap size={18} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Daily Calls</p>
          <p className="text-xs font-black text-purple-600">10M+ Real-time</p>
        </div>
      </motion.div>
    </div>
  );
}
