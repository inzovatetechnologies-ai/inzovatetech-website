import { Send, Globe, Zap } from "lucide-react";

export default function ContactHeroVisual() {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] flex items-center justify-center overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-[0_20px_50px_rgba(23,70,162,0.08)]">
      {/* Background Radial Ambient Glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(37, 99, 235, 0.06) 0%, rgba(241, 245, 249, 0.8) 60%, transparent 100%)",
        }}
      />

      {/* Grid Pattern Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Static Halo Rings */}
      <div
        className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-blue-500/15 pointer-events-none"
        style={{
          boxShadow: "0 0 50px rgba(37,99,235,0.04), inset 0 0 30px rgba(37,99,235,0.03)",
        }}
      />
      <div
        className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-blue-400/20 pointer-events-none"
      />

      {/* CENTRAL COMMUNICATION ICON & SIGNAL HUB */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Paper Plane Enterprise Badge */}
        <div className="relative p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-[0_12px_30px_rgba(37,99,235,0.12)] group transition-all">
          <div className="relative flex items-center justify-center">
            <Send className="w-9 h-9 sm:w-10 sm:h-10 text-blue-600 transform -rotate-12 drop-shadow-sm" />
          </div>
        </div>

        {/* Status Pill Badge */}
        <div className="mt-4 px-4 py-1.5 rounded-full border border-blue-200 bg-white/95 shadow-sm flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[12px] font-semibold tracking-wide text-slate-800">
            Global Tech Ecosystem Connected
          </span>
        </div>
      </div>

      {/* CORNER TECH BADGES */}
      {/* Top Left Badge */}
      <div className="absolute top-5 left-5 px-3 py-2 rounded-xl border border-slate-200 bg-white/95 shadow-md hidden sm:flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
          <Globe size={15} />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-800 leading-none">Global Reach</p>
          <p className="text-[10px] text-slate-500 mt-0.5">Enterprise Infrastructure</p>
        </div>
      </div>

      {/* Bottom Right Badge */}
      <div className="absolute bottom-5 right-5 px-3 py-2 rounded-xl border border-slate-200 bg-white/95 shadow-md hidden sm:flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
          <Zap size={15} />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-800 leading-none">Rapid Response</p>
          <p className="text-[10px] text-slate-500 mt-0.5">24/7 Dedicated Support</p>
        </div>
      </div>
    </div>
  );
}
