import { motion } from "framer-motion";

export default function LetsBuildFutureVisual() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Deep Navy Atmosphere Background & Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(34, 211, 238, 0.22) 0%, rgba(59, 130, 246, 0.15) 35%, rgba(124, 58, 237, 0.12) 65%, transparent 85%)",
        }}
      />

      {/* Light Rays Extending Outward from Portal Core */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-50">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <div
            key={deg}
            className="absolute w-[500px] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(34, 211, 238, 0.5) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)",
              transform: `rotate(${deg}deg)`,
              transformOrigin: "center left",
              left: "50%",
            }}
          />
        ))}
      </div>

      {/* Animated Floating Sparks/Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { left: "25%", top: "30%", size: 4, color: "#38bdf8", delay: 0 },
          { left: "75%", top: "25%", size: 3, color: "#c084fc", delay: 0.5 },
          { left: "40%", top: "65%", size: 5, color: "#22d3ee", delay: 1 },
          { left: "68%", top: "70%", size: 3, color: "#38bdf8", delay: 1.5 },
          { left: "82%", top: "45%", size: 4, color: "#e879f9", delay: 2 },
          { left: "15%", top: "55%", size: 3, color: "#38bdf8", delay: 2.2 },
        ].map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 12px ${p.color}`,
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 4 + idx,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* 3D Horizon Digital Grid Platform */}
      <div className="absolute bottom-0 inset-x-0 h-44 pointer-events-none overflow-hidden">
        <div
          className="w-full h-full border-t border-cyan-400/40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56, 189, 248, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.25) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            transform: "perspective(400px) rotateX(65deg) scale(1.6)",
            transformOrigin: "top center",
            boxShadow: "0 -10px 30px rgba(34, 211, 238, 0.3)",
          }}
        />
        {/* Horizon Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee]" />
      </div>

      {/* CENTRAL GLOWING PORTAL ASSEMBLY */}
      <div className="relative z-10 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
        {/* Outer Pulsing Neon Purple Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-500/60"
          style={{
            boxShadow:
              "0 0 35px rgba(168, 85, 247, 0.5), inset 0 0 25px rgba(168, 85, 247, 0.3)",
          }}
          animate={{ rotate: 360, scale: [0.98, 1.02, 0.98] }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Concentric Neon Cyan Ring */}
        <motion.div
          className="absolute inset-5 rounded-full border-2 border-dashed border-cyan-400/80"
          style={{
            boxShadow:
              "0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 20px rgba(34, 211, 238, 0.4)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Electric Blue Ring */}
        <motion.div
          className="absolute inset-10 rounded-full border border-blue-400"
          style={{
            boxShadow: "0 0 25px rgba(59, 130, 246, 0.8)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />

        {/* Portal Core Light Gate (Radial Tunnel into the Future) */}
        <div
          className="absolute inset-14 rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(34, 211, 238, 0.9) 25%, rgba(59, 130, 246, 0.8) 55%, rgba(124, 58, 237, 0.85) 80%, rgba(10, 18, 42, 1) 100%)",
            boxShadow:
              "0 0 60px rgba(34, 211, 238, 0.9), inset 0 0 40px rgba(255, 255, 255, 0.8)",
          }}
        >
          {/* Inner Core Portal Rings */}
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-white/60 animate-ping opacity-40" />
        </div>

        {/* SUBTLE HUMAN SILHOUETTE STANDING IN FRONT OF THE PORTAL */}
        <motion.div
          className="absolute bottom-2 z-30 flex flex-col items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Vector Silhouette SVG */}
          <svg
            width="54"
            height="110"
            viewBox="0 0 54 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          >
            {/* Head */}
            <circle cx="27" cy="14" r="9" fill="#09132d" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Inner Head Cyan Highlight */}
            <circle cx="27" cy="14" r="7" fill="#0f172a" />
            {/* Neck */}
            <path d="M24 23H30V27H24V23Z" fill="#09132d" />
            {/* Shoulders & Torso */}
            <path
              d="M10 32C10 28.6863 12.6863 26 16 26H38C41.3137 26 44 28.6863 44 32V68C44 70.2091 42.2091 72 40 72H14C11.7909 72 10 70.2091 10 68V32Z"
              fill="#09132d"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            {/* Left Arm */}
            <path d="M5 33L10 32V62L6 61C5.44772 61 5 60.5523 5 60V33Z" fill="#09132d" />
            {/* Right Arm */}
            <path d="M49 33L44 32V62L48 61C48.5523 61 49 60.5523 49 60V33Z" fill="#09132d" />
            {/* Legs */}
            <path d="M14 72H24V106H16C14.8954 106 14 105.105 14 104V72Z" fill="#09132d" stroke="#38bdf8" strokeWidth="1.2" />
            <path d="M30 72H40V104C40 105.105 39.1046 106 38 106H30V72Z" fill="#09132d" stroke="#38bdf8" strokeWidth="1.2" />
            {/* Cyan Edge Backlight Outline */}
            <path
              d="M16 26H38C41.3137 26 44 28.6863 44 32V68"
              stroke="#22d3ee"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </svg>

          {/* Silhouette Standing Shadow */}
          <div className="w-16 h-3 rounded-full bg-cyan-400/40 blur-sm -mt-1" />
        </motion.div>
      </div>
    </div>
  );
}
