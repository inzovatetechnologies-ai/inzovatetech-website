import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function OurValuesVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };

    window.addEventListener("resize", handleResize);

    // Particle system inside 3D space
    const particleCount = 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedY: -(Math.random() * 0.4 + 0.1),
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.4 ? "#38bdf8" : "#a855f7",
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background ambient particles
      particles.forEach((p) => {
        p.y += p.speedY * devicePixelRatio;
        p.x += p.speedX * devicePixelRatio;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(time + p.x));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8 * devicePixelRatio;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Background radial aura */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.18) 0%, rgba(168, 85, 247, 0.12) 40%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* Particle Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Dotted Digital Grid Base */}
      <div className="absolute bottom-4 inset-x-4 h-48 pointer-events-none overflow-hidden rounded-2xl opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
            transform: "perspective(500px) rotateX(60deg) scale(1.4)",
            transformOrigin: "bottom center",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%)",
          }}
        />
      </div>

      {/* 3D Glass Technology Cubes & Orbital Rings Assembly */}
      <div className="relative z-10 w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
        {/* Outer Orbital Ring 1 */}
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-400/30"
          style={{
            transformStyle: "preserve-3d",
            boxShadow:
              "0 0 25px rgba(56, 189, 248, 0.2), inset 0 0 25px rgba(56, 189, 248, 0.15)",
          }}
          animate={{ rotateZ: 360, rotateX: [65, 70, 65] }}
          transition={{
            rotateZ: { duration: 25, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Node dot on ring */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8]" />
        </motion.div>

        {/* Outer Orbital Ring 2 (Purple) */}
        <motion.div
          className="absolute inset-4 rounded-full border border-purple-500/30"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.25)",
          }}
          animate={{ rotateZ: -360, rotateY: [55, 65, 55] }}
          transition={{
            rotateZ: { duration: 30, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc]" />
        </motion.div>

        {/* Central Glowing Core Light */}
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-600/30 blur-2xl animate-pulse pointer-events-none" />

        {/* MAIN 3D CUBE (Floating Glass Isometric Block) */}
        <motion.div
          className="relative w-28 h-28 sm:w-36 sm:h-36"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Isometric Cube Group */}
          <div
            className="w-full h-full relative"
            style={{
              transform: "rotateX(55deg) rotateZ(45deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Top Face */}
            <div
              className="absolute inset-0 rounded-xl border border-cyan-300/80 backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(56, 189, 248, 0.45) 0%, rgba(168, 85, 247, 0.35) 100%)",
                boxShadow:
                  "inset 0 0 25px rgba(255, 255, 255, 0.3), 0 0 25px rgba(56, 189, 248, 0.5)",
              }}
            >
              {/* Internal Circuit Grid Lines on Face */}
              <div className="absolute inset-2 border border-cyan-200/40 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-cyan-200/80 shadow-[0_0_12px_#ffffff]" />
              </div>
            </div>

            {/* Sub-Cube Floating Top Right */}
            <motion.div
              className="absolute -top-12 -right-12 w-14 h-14 rounded-lg border border-cyan-400/90 backdrop-blur-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34, 211, 238, 0.5) 0%, rgba(59, 130, 246, 0.4) 100%)",
                boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
              }}
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="absolute inset-1.5 border border-white/40 rounded flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              </div>
            </motion.div>

            {/* Sub-Cube Floating Bottom Left */}
            <motion.div
              className="absolute -bottom-10 -left-10 w-12 h-12 rounded-lg border border-purple-400/90 backdrop-blur-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(168, 85, 247, 0.5) 0%, rgba(236, 72, 153, 0.35) 100%)",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
              }}
              animate={{ y: [4, -6, 4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="absolute inset-1 border border-purple-200/50 rounded flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-200 shadow-[0_0_6px_#ffffff]" />
              </div>
            </motion.div>

            {/* Floating Mini Nodes / Micro Blocks */}
            <motion.div
              className="absolute top-1/2 -left-16 w-6 h-6 rounded border border-cyan-300 bg-cyan-400/30 backdrop-blur-sm"
              animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-16 w-8 h-8 rounded border border-purple-300 bg-purple-500/30 backdrop-blur-sm"
              animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Floating Futuristic Tech Indicators / Badges */}
        <motion.div
          className="absolute top-8 left-2 px-3 py-1.5 rounded-xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-md flex items-center gap-2 shadow-lg z-20"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
            INNOVATION CUBE
          </span>
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-2 px-3 py-1.5 rounded-xl border border-purple-400/30 bg-slate-900/80 backdrop-blur-md flex items-center gap-2 shadow-lg z-20"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
          <span className="text-[10px] font-mono font-bold tracking-wider text-purple-300 uppercase">
            FUTURE READY
          </span>
        </motion.div>
      </div>
    </div>
  );
}
