"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface AmberAsciiRainProps {
  className?: string;
  cellSize?: number;
  tint?: string;
  speed?: number;
  scanLines?: boolean;
  bloom?: boolean;
  shimmer?: boolean;
  matrixDensity?: number;
}

// Matrix Katakana + Alphanumeric + Code glyphs
const MATRIX_CHARSET =
  "ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}/*+=~$_#@&%";

// Amber Palette defined in prompt's shaderSource:
// ["#2B1A06", "#B86E00", "#F5B944", "#2B1A06"]
interface RGB {
  r: number;
  g: number;
  b: number;
}

const PALETTE: RGB[] = [
  { r: 24, g: 15, b: 3 }, // deep rich bronze
  { r: 217, g: 119, b: 6 }, // vibrant golden amber (amber-600)
  { r: 251, g: 191, b: 36 }, // bright sunny amber (amber-400)
  { r: 245, g: 158, b: 11 }, // amber-500
];

function lerpColor(c1: RGB, c2: RGB, factor: number): RGB {
  return {
    r: Math.round(c1.r + (c2.r - c1.r) * factor),
    g: Math.round(c1.g + (c2.g - c1.g) * factor),
    b: Math.round(c1.b + (c2.b - c1.b) * factor),
  };
}

function samplePalette(val: number): RGB {
  const clamped = Math.max(0, Math.min(1, val));
  const segment = clamped * (PALETTE.length - 1);
  const index = Math.floor(segment);
  const factor = segment - index;
  if (index >= PALETTE.length - 1) return PALETTE[PALETTE.length - 1];
  return lerpColor(PALETTE[index], PALETTE[index + 1], factor);
}

interface RainDrop {
  y: number; // Row index
  speed: number; // Speed in rows per frame
  length: number; // Tail length in characters
  chars: string[]; // Current sequence of characters
  lastMutation: number;
}

export function AmberAsciiRain({
  className,
  cellSize = 14,
  tint = "#F5B944",
  speed = 14,
  scanLines = true,
  bloom = true,
  shimmer = true,
  matrixDensity = 15,
}: AmberAsciiRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    // Track matrix rain drops for each column
    let rainColumns: RainDrop[][] = [];

    const initGrid = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      ctx.font = `${Math.floor(cellSize * 0.95)}px "JetBrains Mono", "Courier New", monospace`;
      ctx.textBaseline = "top";

      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);

      rainColumns = [];
      for (let c = 0; c < cols; c++) {
        const dropsForCol: RainDrop[] = [];
        // Spawn 1 to 2 rain streams per column
        const numDrops = Math.random() < matrixDensity / 20 ? 1 : Math.random() < 0.25 ? 2 : 1;
        for (let d = 0; d < numDrops; d++) {
          const len = Math.floor(10 + Math.random() * 16);
          const chars: string[] = [];
          for (let i = 0; i < len; i++) {
            chars.push(MATRIX_CHARSET[Math.floor(Math.random() * MATRIX_CHARSET.length)]);
          }
          dropsForCol.push({
            y: -Math.floor(Math.random() * rows * 1.5),
            speed: 0.18 + Math.random() * 0.26 * (speed / 14),
            length: len,
            chars,
            lastMutation: 0,
          });
        }
        rainColumns.push(dropsForCol);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      initGrid();
    });
    resizeObserver.observe(container);
    initGrid();

    // IntersectionObserver to pause rendering when scrolled out of view
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    let startTime = performance.now();
    let frameCount = 0;

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible || width === 0 || height === 0) return;

      const elapsed = (time - startTime) * 0.001;
      const waveTime = elapsed * (speed * 0.08);
      frameCount++;

      // Clear frame
      ctx.clearRect(0, 0, width, height);

      // ── Step 1 & 2: Procedural Waves Shader Sampling ──
      // Calculate continuous wave field luminance across (x, y)
      // v = sin(x*freq1 + t) + cos(y*freq2 - t*0.8) + sin((x+y)*freq3 + t*1.2)
      const freqX = 0.04;
      const freqY = 0.06;
      const freqDiag = 0.035;

      // ── Step 3: Draw ASCII Matrix Code Rain ──
      for (let c = 0; c < cols; c++) {
        const x = c * cellSize;
        const drops = rainColumns[c];
        if (!drops) continue;

        for (let d = 0; d < drops.length; d++) {
          const drop = drops[d];

          // Advance drop downwards
          drop.y += drop.speed;
          if (drop.y - drop.length > rows) {
            // Reset to top with new length and random delay
            drop.y = -Math.floor(Math.random() * 8);
            drop.speed = 0.18 + Math.random() * 0.26 * (speed / 14);
            drop.length = Math.floor(10 + Math.random() * 16);
            for (let i = 0; i < drop.length; i++) {
              drop.chars[i] = MATRIX_CHARSET[Math.floor(Math.random() * MATRIX_CHARSET.length)];
            }
          }

          // Random character mutation (every few frames)
          if (frameCount % 4 === 0 && Math.random() < 0.3) {
            const mutateIdx = Math.floor(Math.random() * drop.length);
            drop.chars[mutateIdx] = MATRIX_CHARSET[Math.floor(Math.random() * MATRIX_CHARSET.length)];
          }

          // Draw drop characters from tail to head
          const headY = Math.floor(drop.y);
          for (let i = 0; i < drop.length; i++) {
            const charRow = headY - i;
            if (charRow < 0 || charRow >= rows) continue;
            const y = charRow * cellSize;

            // Procedural Wave Luminance Sample
            const waveVal =
              0.5 +
              0.25 * Math.sin(c * freqX + waveTime) +
              0.25 * Math.cos(charRow * freqY - waveTime * 0.75) +
              0.15 * Math.sin((c + charRow) * freqDiag + waveTime * 1.2);
            const clampedWave = Math.max(0, Math.min(1, waveVal));
            const baseColor = samplePalette(clampedWave);

            // Shimmer modulation
            let shimmerMult = 1.0;
            if (shimmer) {
              shimmerMult = 0.85 + 0.3 * Math.sin(elapsed * 4.0 + c * 0.3 + charRow * 0.4);
            }

            const char = drop.chars[i] || MATRIX_CHARSET[0];

            if (i === 0) {
              // ── Head of rain: Luminous White-Amber with Bloom ──
              if (bloom) {
                ctx.shadowColor = "#F59E0B";
                ctx.shadowBlur = 12;
              }
              ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, 1.0 * shimmerMult)})`;
              ctx.fillText(char, x, y);
              if (bloom) {
                ctx.shadowBlur = 0;
              }
            } else {
              // ── Trailing Body: Cascading Amber Falloff with Boosted Contrast ──
              const progress = i / drop.length; // 0 (near head) to 1 (tail)
              const alpha = Math.max(0.18, (1 - progress * 0.72) * 1.0 * shimmerMult);

              // Higher contrast mix towards vibrant amber
              const r = Math.round(Math.min(255, baseColor.r * 1.15));
              const g = Math.round(Math.min(255, baseColor.g * 1.1));
              const b = Math.round(baseColor.b * 0.85);

              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
              ctx.fillText(char, x, y);
            }
          }
        }
      }

      // ── Step 5: Post-Effects: ScanLines (CRT Texture) ──
      if (scanLines) {
        ctx.fillStyle = "rgba(15, 23, 42, 0.05)";
        for (let sy = 0; sy < height; sy += 3) {
          ctx.fillRect(0, sy, width, 1);
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [cellSize, tint, speed, scanLines, bloom, shimmer, matrixDensity]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden select-none pointer-events-none", className)}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
export default AmberAsciiRain;