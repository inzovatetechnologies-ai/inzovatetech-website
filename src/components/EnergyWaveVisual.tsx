import { useEffect, useRef } from "react";

export default function EnergyWaveVisual() {
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

    // Light particles flowing along sine waves
    const particleCount = 60;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 1.5 + 0.5,
      size: Math.random() * 2 + 1,
      offset: Math.random() * Math.PI * 2,
      color: Math.random() > 0.4 ? "#38bdf8" : "#c084fc",
    }));

    let step = 0;

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing background sphere
      const sphereCenterX = width * 0.75;
      const sphereCenterY = height * 0.5;
      const sphereRadius = 90 * devicePixelRatio;

      const grad = ctx.createRadialGradient(
        sphereCenterX,
        sphereCenterY,
        5,
        sphereCenterX,
        sphereCenterY,
        sphereRadius * 1.8
      );
      grad.addColorStop(0, "rgba(56, 189, 248, 0.45)");
      grad.addColorStop(0.35, "rgba(168, 85, 247, 0.3)");
      grad.addColorStop(0.7, "rgba(59, 130, 246, 0.1)");
      grad.addColorStop(1, "transparent");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(sphereCenterX, sphereCenterY, sphereRadius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Sphere core stroke
      ctx.beginPath();
      ctx.arc(sphereCenterX, sphereCenterY, sphereRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
      ctx.lineWidth = 1.5 * devicePixelRatio;
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 15 * devicePixelRatio;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 2. Draw Digital Energy Sine Waves passing through the sphere
      const waveCount = 5;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        ctx.lineWidth = (1.2 + w * 0.4) * devicePixelRatio;

        const waveColor =
          w % 3 === 0
            ? "rgba(56, 189, 248, 0.5)"
            : w % 3 === 1
            ? "rgba(168, 85, 247, 0.45)"
            : "rgba(34, 211, 238, 0.55)";

        ctx.strokeStyle = waveColor;

        for (let x = 0; x <= width; x += 10 * devicePixelRatio) {
          const freq = 0.003 / devicePixelRatio;
          const amp = (30 + w * 12) * devicePixelRatio;
          const y =
            height * 0.5 +
            Math.sin(x * freq + step + w * 0.8) * amp +
            Math.cos(x * freq * 0.5 + step * 0.5) * 15 * devicePixelRatio;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // 3. Render flowing energy particles
      particles.forEach((p) => {
        p.x += p.speed * devicePixelRatio;
        if (p.x > width) p.x = 0;

        const waveY =
          height * 0.5 +
          Math.sin(p.x * 0.003 + step + p.offset) * 35 * devicePixelRatio;

        ctx.beginPath();
        ctx.arc(p.x, waveY, p.size * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10 * devicePixelRatio;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-75">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
