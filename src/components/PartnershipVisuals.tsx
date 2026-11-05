import { motion } from "framer-motion";
import { Cloud, Bot, Code2, Shield, Database, Workflow, Building2, Zap, Server, Cpu, Globe, Lock, Layers, BarChart3, Users, Mail } from "lucide-react";

// ── SECTION 1: HERO PARTNERSHIP ECOSYSTEM ILLUSTRATION ──
export function HeroPartnershipVisual() {
  const nodes = [
    { title: "Cloud", icon: Cloud, color: "#2563EB", angle: 0 },
    { title: "AI", icon: Bot, color: "#7C3AED", angle: 45 },
    { title: "Software", icon: Code2, color: "#4F46E5", angle: 90 },
    { title: "Security", icon: Shield, color: "#D97706", angle: 135 },
    { title: "Data", icon: Database, color: "#0891B2", angle: 180 },
    { title: "Automation", icon: Workflow, color: "#059669", angle: 225 },
    { title: "Business", icon: Building2, color: "#DB2777", angle: 270 },
    { title: "Technology", icon: Zap, color: "#2563EB", angle: 315 },
  ];

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] flex items-center justify-center overflow-hidden">
      {/* Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 45%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />

      {/* SVG Connection Lines & Orbit */}
      <div className="absolute inset-0 pointer-events-none opacity-60 flex items-center justify-center">
        <svg viewBox="0 0 500 500" className="w-full h-full stroke-blue-500/25 fill-none">
          <circle cx="250" cy="250" r="160" strokeWidth="1.5" strokeDasharray="8 8" className="animate-[spin_40s_linear_infinite]" />
          <circle cx="250" cy="250" r="220" strokeWidth="1" stroke="#8B5CF6" strokeOpacity="0.2" />

          {/* Radial Rays from Center */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = 250 + 160 * Math.cos(rad);
            const y2 = 250 + 160 * Math.sin(rad);
            return (
              <line key={angle} x1="250" y1="250" x2={x2} y2={y2} stroke="url(#heroRayGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
            );
          })}

          <defs>
            <linearGradient id="heroRayGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CENTRAL PARTNERSHIP HUB */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white border border-blue-200 shadow-xl flex flex-col items-center justify-center text-center p-4"
      >
        <div className="absolute -inset-2 rounded-full border border-blue-300/40 animate-[spin_20s_linear_infinite]" />
        <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-2 shadow-md">
          <Globe className="w-6 h-6 animate-pulse text-white" />
        </div>
        <p className="text-[11px] font-black text-slate-900 tracking-widest uppercase" style={{ fontFamily: "var(--font-heading)" }}>
          HUB CORE
        </p>
        <p className="text-[9px] font-bold text-blue-600 mt-0.5">INZOVATE ECOSYSTEM</p>
      </motion.div>

      {/* ORBITING NODES */}
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const radius = 160;
        const left = `calc(50% + ${radius * Math.cos(rad)}px - 36px)`;
        const top = `calc(50% + ${radius * Math.sin(rad)}px - 36px)`;
        const Icon = node.icon;

        return (
          <motion.div
            key={node.title}
            className="absolute z-20 w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border border-slate-200 bg-white shadow-md flex flex-col items-center justify-center text-center p-2"
            style={{ left, top }}
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          >
            <Icon size={18} style={{ color: node.color }} />
            <span className="text-[9px] font-extrabold text-slate-800 mt-1">{node.title}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

// ── SECTION 2: PHILOSOPHY DIAGRAM (LIGHT BACKGROUND) ──
export function EcosystemPhilosophyDiagram() {
  const partners = [
    { title: "Technology Partners", color: "#2563EB" },
    { title: "Cloud Partners", color: "#0284C7" },
    { title: "Software Partners", color: "#7C3AED" },
    { title: "Security Partners", color: "#059669" },
    { title: "Data Partners", color: "#D97706" },
    { title: "Business Partners", color: "#DB2777" },
  ];

  return (
    <div className="relative w-full max-w-[500px] mx-auto py-8">
      <div className="relative flex items-center justify-center h-[340px]">
        {/* SVG Minimal Line Art Connections */}
        <svg viewBox="0 0 400 340" className="absolute inset-0 w-full h-full stroke-blue-500/25 fill-none">
          <circle cx="200" cy="170" r="110" strokeWidth="1" strokeDasharray="4 4" />
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = 200 + 110 * Math.cos(rad);
            const y2 = 170 + 110 * Math.sin(rad);
            return <line key={angle} x1="200" y1="170" x2={x2} y2={y2} strokeWidth="1.5" stroke="#3B82F6" strokeOpacity="0.3" />;
          })}
        </svg>

        {/* Center Node */}
        <div className="relative z-10 w-28 h-28 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center shadow-xl border-4 border-blue-100">
          <span className="text-xs font-black tracking-widest uppercase">INZOVATE</span>
          <span className="text-[9px] text-blue-200 font-semibold mt-0.5">Center Core</span>
        </div>

        {/* Outer Circular Nodes */}
        {partners.map((p, idx) => {
          const angle = idx * 60;
          const rad = (angle * Math.PI) / 180;
          const r = 110;
          const left = `calc(50% + ${r * Math.cos(rad)}px - 50px)`;
          const top = `calc(50% + ${r * Math.sin(rad)}px - 22px)`;

          return (
            <div
              key={p.title}
              className="absolute z-20 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-md text-center flex items-center gap-1.5 min-w-[100px]"
              style={{ left, top }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
              <span className="text-[10px] font-bold text-slate-800 leading-tight">{p.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── SECTION 3: AWS CLOUD VISUAL (WHITE THEME) ──
export function AwsCloudVisual() {
  return (
    <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 153, 0, 0.2) 0%, rgba(37, 99, 235, 0.1) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* SVG AWS Connected Grid */}
      <svg viewBox="0 0 400 360" className="absolute inset-0 w-full h-full stroke-amber-500/25 fill-none">
        <circle cx="200" cy="180" r="100" strokeWidth="1" strokeDasharray="6 6" className="animate-[spin_30s_linear_infinite]" />
        <line x1="200" y1="180" x2="80" y2="80" strokeWidth="1.5" stroke="#FF9900" strokeOpacity="0.3" />
        <line x1="200" y1="180" x2="320" y2="80" strokeWidth="1.5" stroke="#FF9900" strokeOpacity="0.3" />
        <line x1="200" y1="180" x2="70" y2="280" strokeWidth="1.5" stroke="#FF9900" strokeOpacity="0.3" />
        <line x1="200" y1="180" x2="330" y2="280" strokeWidth="1.5" stroke="#FF9900" strokeOpacity="0.3" />
      </svg>

      {/* Center AWS Cloud Orb */}
      <div className="relative z-10 w-36 h-36 rounded-full bg-white border border-amber-300 shadow-xl flex flex-col items-center justify-center text-center p-3">
        <div className="w-14 h-10 rounded-xl bg-slate-50 border border-amber-200 flex items-center justify-center mb-1.5 p-1 shadow-xs">
          <img src="/aws-logo.png" alt="AWS Logo" className="h-full w-auto object-contain" />
        </div>
        <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider font-heading">AWS CLOUD</span>
        <span className="text-[9px] font-bold text-amber-600">Scale Engine</span>
      </div>

      {/* Outer Satellite Nodes */}
      <div className="absolute top-12 left-10 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
        <Server size={16} className="text-amber-500" />
        <span>Architecture</span>
      </div>

      <div className="absolute top-12 right-10 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
        <Cpu size={16} className="text-amber-500" />
        <span>Serverless</span>
      </div>

      <div className="absolute bottom-12 left-8 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
        <Shield size={16} className="text-amber-500" />
        <span>Cloud Security</span>
      </div>

      <div className="absolute bottom-12 right-8 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
        <Workflow size={16} className="text-amber-500" />
        <span>DevOps CI/CD</span>
      </div>
    </div>
  );
}

// ── NEW: ZOHO CLOUD VISUAL (WHITE THEME) ──
export function ZohoCloudVisual() {
  return (
    <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.18) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* SVG Zoho Network Lines */}
      <svg viewBox="0 0 400 360" className="absolute inset-0 w-full h-full stroke-rose-500/25 fill-none">
        <circle cx="200" cy="180" r="105" strokeWidth="1" strokeDasharray="6 6" className="animate-[spin_35s_linear_infinite_reverse]" />
        <line x1="200" y1="180" x2="80" y2="75" strokeWidth="1.5" stroke="#EF4444" strokeOpacity="0.3" />
        <line x1="200" y1="180" x2="320" y2="75" strokeWidth="1.5" stroke="#EF4444" strokeOpacity="0.3" />
        <line x1="200" y1="180" x2="70" y2="285" strokeWidth="1.5" stroke="#EF4444" strokeOpacity="0.3" />
        <line x1="200" y1="180" x2="330" y2="285" strokeWidth="1.5" stroke="#EF4444" strokeOpacity="0.3" />
      </svg>

      {/* Center Zoho Hub Orb */}
      <div className="relative z-10 w-36 h-36 rounded-full bg-white border border-rose-300 shadow-xl flex flex-col items-center justify-center text-center p-3">
        <div className="w-14 h-10 rounded-xl bg-slate-50 border border-rose-200 flex items-center justify-center mb-1.5 p-1 shadow-xs">
          <img src="/zoho-logo-photoroom.png" alt="Zoho Logo" className="h-full w-auto object-contain" />
        </div>
        <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider font-heading">ZOHO HUB</span>
        <span className="text-[9px] font-bold text-rose-600">Business Suite</span>
      </div>

      {/* Outer Zoho App Satellite Nodes */}
      <div className="absolute top-10 left-8 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
        <Users size={16} className="text-rose-500" />
        <span>Zoho CRM</span>
      </div>

      <div className="absolute top-10 right-8 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
        <BarChart3 size={16} className="text-rose-500" />
        <span>Zoho Analytics</span>
      </div>

      <div className="absolute bottom-10 left-6 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
        <Workflow size={16} className="text-rose-500" />
        <span>Zoho Creator</span>
      </div>

      <div className="absolute bottom-10 right-6 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800">
        <Layers size={16} className="text-rose-500" />
        <span>Zoho One</span>
      </div>
    </div>
  );
}

// ── SECTION 4: CONNECTED ECOSYSTEM DIAGRAM (LIGHT BACKGROUND) ──
export function ConnectedEcosystemDiagram() {
  const ecosystemNodes = [
    { title: "Technology Partners", icon: Cpu, color: "#2563EB" },
    { title: "Cloud Partners", icon: Cloud, color: "#0284C7" },
    { title: "Software Partners", icon: Code2, color: "#7C3AED" },
    { title: "Security Partners", icon: Shield, color: "#059669" },
    { title: "Data Partners", icon: Database, color: "#D97706" },
    { title: "Business Partners", icon: Building2, color: "#DB2777" },
  ];

  return (
    <div className="relative w-full max-w-[540px] mx-auto py-6">
      <div className="relative flex items-center justify-center min-h-[380px]">
        {/* SVG Network Lines */}
        <svg viewBox="0 0 500 380" className="absolute inset-0 w-full h-full stroke-slate-300 fill-none">
          <circle cx="250" cy="190" r="130" strokeWidth="1.5" strokeDasharray="6 6" />
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = 250 + 130 * Math.cos(rad);
            const y2 = 190 + 130 * Math.sin(rad);
            return <line key={angle} x1="250" y1="190" x2={x2} y2={y2} strokeWidth="1.5" stroke="#3B82F6" strokeOpacity="0.3" />;
          })}
        </svg>

        {/* Central INZOVATE TECHNOLOGIES Node */}
        <div className="relative z-10 w-36 h-36 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center shadow-2xl border-4 border-blue-500/40 text-center p-3">
          <span className="text-[10px] font-bold text-blue-400 tracking-wider uppercase">CENTRAL HUB</span>
          <span className="text-xs font-black tracking-tight leading-tight mt-0.5">INZOVATE TECHNOLOGIES</span>
        </div>

        {/* Outer Circular Icon Containers */}
        {ecosystemNodes.map((n, idx) => {
          const angle = idx * 60;
          const rad = (angle * Math.PI) / 180;
          const r = 130;
          const left = `calc(50% + ${r * Math.cos(rad)}px - 60px)`;
          const top = `calc(50% + ${r * Math.sin(rad)}px - 28px)`;
          const Icon = n.icon;

          return (
            <div
              key={n.title}
              className="absolute z-20 p-2.5 px-3 rounded-2xl bg-white border border-slate-200 shadow-lg text-center flex items-center gap-2 max-w-[130px]"
              style={{ left, top }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${n.color}15`, color: n.color }}>
                <Icon size={16} />
              </div>
              <span className="text-[10px] font-extrabold text-slate-900 leading-tight text-left">{n.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
