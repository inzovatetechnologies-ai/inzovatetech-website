import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function SmartCityVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };

    window.addEventListener("resize", handleResize);

    // Floating particles around the tech city
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedY: -(Math.random() * 0.35 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      color: Math.random() > 0.5 ? "#38bdf8" : "#c084fc",
      alpha: Math.random() * 0.6 + 0.3,
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY * devicePixelRatio;
        p.x += p.speedX * devicePixelRatio;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(time + p.x * 0.01));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8 * devicePixelRatio;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center overflow-hidden rounded-2xl">
      {/* Background Radial Tech Aura */}
      <div
        className="absolute inset-0 pointer-events-none opacity-65"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.22) 0%, rgba(168, 85, 247, 0.14) 45%, transparent 80%)",
          filter: "blur(40px)",
        }}
      />

      {/* Background World/Digital Map Grid */}
      <div className="absolute inset-4 pointer-events-none opacity-20 flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full stroke-cyan-400 fill-none">
          <circle cx="200" cy="200" r="160" strokeWidth="0.8" strokeDasharray="4 4" />
          <ellipse cx="200" cy="200" rx="160" ry="60" strokeWidth="0.8" />
          <ellipse cx="200" cy="200" rx="60" ry="160" strokeWidth="0.8" />
          <line x1="40" y1="200" x2="360" y2="200" strokeWidth="0.8" />
          <line x1="200" y1="40" x2="200" y2="360" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Canvas Particle Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* 3D Circular Platform & Floating Tech City Buildings */}
      <div className="relative z-10 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
        {/* Outer Circular Glowing Platform Base */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[260px] h-[90px] sm:w-[300px] sm:h-[100px] rounded-full border border-cyan-400/60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(34, 211, 238, 0.35) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 80%)",
            transform: "perspective(300px) rotateX(65deg)",
            boxShadow:
              "0 0 40px rgba(34, 211, 238, 0.5), inset 0 0 30px rgba(168, 85, 247, 0.4)",
          }}
        >
          {/* Inner Platform Rings */}
          <div className="absolute inset-3 rounded-full border border-purple-400/40" />
          <div className="absolute inset-6 rounded-full border border-dashed border-cyan-300/60 animate-spin" style={{ animationDuration: "30s" }} />
        </div>

        {/* 3D SMART CITY SKYSCRAPERS (ISOMETRIC TECH BUILDINGS) */}
        <motion.div
          className="relative z-20 w-full h-full flex items-end justify-center pb-12"
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Building Group Assembly */}
          <div className="relative flex items-end justify-center gap-2 sm:gap-3">
            {/* Building 1 (Left Translucent Glass Tower) */}
            <div className="relative w-10 sm:w-12 h-36 sm:h-44 rounded-t-lg border border-cyan-400/70 bg-gradient-to-t from-slate-900/90 via-cyan-950/70 to-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              {/* Window Lights */}
              <div className="p-1.5 grid grid-cols-2 gap-1.5 opacity-75">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="h-1.5 rounded-xs bg-cyan-300 shadow-[0_0_4px_#38bdf8]" />
                ))}
              </div>
              {/* Spire Light */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
            </div>

            {/* Building 2 (Center Main Futuristic Tower) */}
            <div className="relative w-14 sm:w-16 h-48 sm:h-56 rounded-t-xl border border-purple-400/80 bg-gradient-to-t from-slate-950/95 via-purple-950/80 to-purple-500/40 backdrop-blur-lg shadow-[0_0_30px_rgba(168,85,247,0.5)] z-10">
              {/* Internal Circuit Lines */}
              <div className="p-2 grid grid-cols-2 gap-2 opacity-85">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-xs ${
                      i % 3 === 0
                        ? "bg-purple-300 shadow-[0_0_6px_#c084fc]"
                        : "bg-cyan-300 shadow-[0_0_6px_#38bdf8]"
                    }`}
                  />
                ))}
              </div>
              {/* Top Crown Glow */}
              <div className="absolute top-0 inset-x-0 h-2 bg-white/80 rounded-t-xl shadow-[0_0_12px_#ffffff]" />
              {/* Tower Spire Beacon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-cyan-200 shadow-[0_0_12px_#22d3ee]">
                <div className="w-3 h-3 -ml-0.75 -mt-1 rounded-full bg-cyan-300 animate-ping" />
              </div>
            </div>

            {/* Building 3 (Right High-Tech Corporate Tower) */}
            <div className="relative w-11 sm:w-13 h-40 sm:h-48 rounded-t-lg border border-blue-400/70 bg-gradient-to-t from-slate-900/90 via-blue-950/70 to-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <div className="p-1.5 grid grid-cols-2 gap-1.5 opacity-75">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={i} className="h-1.5 rounded-xs bg-blue-300 shadow-[0_0_4px_#60a5fa]" />
                ))}
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-blue-300 shadow-[0_0_8px_#60a5fa]" />
            </div>

            {/* Building 4 (Small Side Module Left) */}
            <div className="relative w-8 sm:w-9 h-24 sm:h-28 rounded-t-md border border-cyan-500/50 bg-slate-900/80 backdrop-blur-sm">
              <div className="p-1 grid grid-cols-1 gap-1.5 opacity-60">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-1 rounded-xs bg-cyan-400" />
                ))}
              </div>
            </div>

            {/* Building 5 (Small Side Module Right) */}
            <div className="relative w-8 sm:w-9 h-28 sm:h-32 rounded-t-md border border-purple-500/50 bg-slate-900/80 backdrop-blur-sm">
              <div className="p-1 grid grid-cols-1 gap-1.5 opacity-60">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="h-1 rounded-xs bg-purple-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Futuristic Hologram Badges */}
        <motion.div
          className="absolute top-6 left-2 px-3 py-1 rounded-full border border-cyan-400/40 bg-slate-950/80 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
            ENTERPRISE CITY
          </span>
        </motion.div>

        <motion.div
          className="absolute top-12 right-2 px-3 py-1 rounded-full border border-purple-400/40 bg-slate-950/80 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-[9px] font-mono font-bold tracking-widest text-purple-300 uppercase">
            DIGITAL HUB
          </span>
        </motion.div>
      </div>
    </div>
  );
}
