"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Maths & Types                                                      */
/* ------------------------------------------------------------------ */

type RGB = [number, number, number];
type Field = { cx: number; cy: number; rx: number; ry: number };
type Mode = "smoke" | "vortex" | "sand" | "burst" | "sweep" | "absorb";

const MODES: Mode[] = ["smoke", "vortex", "sand", "burst", "sweep", "absorb"];
const TIMING = { hold: 5000, field: 1300, travel: 4000 };

function createRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => {
  const c = clamp(t);
  return c * c * (3 - 2 * c);
};
const ease = (t: number) => {
  const c = clamp(t);
  return c < 0.5 ? 4 * c * c * c : 1 - Math.pow(-2 * c + 2, 3) / 2;
};

function createModeBag(seed: number): () => Mode {
  const r = createRng(seed);
  let bag: Mode[] = [];
  let last: Mode | null = null;
  return () => {
    if (!bag.length) {
      bag = MODES.slice();
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(r() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
      if (bag[bag.length - 1] === last) [bag[0], bag[bag.length - 1]] = [bag[bag.length - 1], bag[0]];
    }
    last = bag.pop() as Mode;
    return last;
  };
}

function sampleFieldPoint(rand: () => number, f: Field) {
  const a = rand() * 6.2832;
  const q = Math.pow(rand(), 0.6);
  return {
    x: f.cx + Math.cos(a) * f.rx * q,
    y: f.cy + Math.sin(a) * f.ry * q,
  };
}

/* ------------------------------------------------------------------ */
/* Canvas engine                                                       */
/* ------------------------------------------------------------------ */

type Cell = {
  rx: number; ry: number; rw: number; rh: number; hx: number; hy: number; nx: number; ny: number;
  r1: number; r2: number; r3: number; size: number; fx: number; fy: number;
  hc: RGB; fc: RGB; lt: number; bend: number; pa: number;
};
type Phase = "text" | "dissolving" | "field" | "gathering";

function plan(mode: Mode, p: Cell, W: number, H: number) {
  switch (mode) {
    case "smoke": return { delay: (1 - clamp(p.ny)) * 0.35 + p.r3 * 0.25, bend: (p.r1 - 0.5) * 150 };
    case "vortex":
      return {
        delay: (Math.hypot(p.hx - W / 2, p.hy - H / 2) / Math.max(1, W)) * 0.9 + p.r3 * 0.15,
        bend: (p.r2 > 0.5 ? 1 : -1) * (90 + p.r1 * 140),
      };
    case "sand": return { delay: p.nx * 0.6 + p.r3 * 0.18, bend: (p.r1 - 0.5) * 60 };
    case "burst": return { delay: p.r3 * 0.1, bend: (p.r2 - 0.5) * 26 };
    case "sweep": return { delay: (1 - p.nx) * 0.6 + p.r3 * 0.18, bend: -(60 + p.r1 * 90) };
    default: return { delay: p.r1 * 0.55, bend: (p.r2 - 0.5) * 100 };
  }
}

function bowAt(a: [number, number], b: [number, number], bend: number, t: number) {
  const e = ease(t), dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
  const bow = Math.sin(e * Math.PI) * bend;
  return [mix(a[0], b[0], e) + (-dy / L) * bow, mix(a[1], b[1], e) + (dx / L) * bow, e] as const;
}

const rgbStr = (a: RGB, b: RGB, t: number) => {
  const c = (i: number) => Math.max(0, Math.min(255, Math.round(mix(a[i], b[i], t))));
  return `rgb(${c(0)},${c(1)},${c(2)})`;
};

type Engine = { setActive: (on: boolean) => void; resize: () => void; destroy: () => void };

const INTRO_LEAD = 0.08;
const FONT_STACK = 'Plus Jakarta Sans, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, system-ui, sans-serif';

function createEngine(cv: HTMLCanvasElement, text: string, loop = false): Engine | null {
  const ctx = cv.getContext("2d");
  if (!ctx) return null;
  const textCv = document.createElement("canvas");
  const nextMode = createModeBag((Date.now() & 0xffff) ^ 0x5a5a);
  let W = 0, H = 0, dpr = 1;
  let field: Field = { cx: 0, cy: 0, rx: 0, ry: 0 };
  let parts: Cell[] = [];
  let phase: Phase = "gathering", mode: Mode = nextMode(), phaseStart = 0, raf = 0, timer = 0;
  let intro = true, active = true, destroyed = false;

  function reroll() {
    const r = createRng((Math.random() * 1e9) | 0);
    for (const p of parts) {
      const q = sampleFieldPoint(r, field);
      p.fx = q.x;
      p.fy = q.y;
    }
  }

  function build() {
    W = cv.clientWidth; H = cv.clientHeight;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.max(1, Math.round(W * dpr)); cv.height = Math.max(1, Math.round(H * dpr));
    textCv.width = cv.width; textCv.height = cv.height;
    ctx!.setTransform(1, 0, 0, 1, 0, 0);

    const lines = text.split("\n");

    // Big, commanding hero headline typography:
    let fs = W >= 1200 ? 84 : W >= 900 ? 72 : W >= 640 ? 56 : Math.max(34, Math.min(46, W * 0.096));
    const lh = fs * 1.14;
    field = { cx: W / 2, cy: H / 2, rx: Math.min(740, W * 0.50), ry: Math.min(380, H * 0.44) };

    const o = textCv.getContext("2d") as CanvasRenderingContext2D;
    o.setTransform(dpr, 0, 0, dpr, 0, 0); o.clearRect(0, 0, W, H);
    o.font = `900 ${fs}px ${FONT_STACK}`; o.textAlign = "center"; o.textBaseline = "middle";

    // Auto-fit check across lines
    let maxW = 0;
    for (const line of lines) {
      const w = o.measureText(line).width;
      if (w > maxW) maxW = w;
    }
    if (maxW > W * 0.95 && W > 0) {
      fs = Math.max(26, Math.floor(fs * ((W * 0.93) / maxW)));
      o.font = `900 ${fs}px ${FONT_STACK}`;
      maxW = 0;
      for (const line of lines) {
        const w = o.measureText(line).width;
        if (w > maxW) maxW = w;
      }
    }

    const startY = (H - (lines.length - 1) * lh) / 2;

    // Project color palette: Line 0 = Black (#0F172A), Line 1+ = Brand Blue (#2563EB)
    lines.forEach((line, idx) => {
      if (idx === 0) {
        o.fillStyle = "#0F172A"; // Slate-900 Black
      } else {
        const grad = o.createLinearGradient(W / 2 - maxW / 2, 0, W / 2 + maxW / 2, 0);
        grad.addColorStop(0, "#2563EB"); // Blue-600
        grad.addColorStop(0.6, "#1D4ED8"); // Blue-700
        grad.addColorStop(1, "#3B82F6"); // Blue-500
        o.fillStyle = grad;
      }
      o.fillText(line, W / 2, startY + idx * lh);
    });

    const tx = W / 2;
    const tw = maxW;
    const X0 = Math.max(0, Math.floor((tx - tw / 2 - 18) * dpr));
    const X1 = Math.min(cv.width, Math.ceil((tx + tw / 2 + 18) * dpr));
    const Y0 = Math.max(0, Math.floor((startY - fs - 18) * dpr));
    const Y1 = Math.min(cv.height, Math.ceil((startY + (lines.length - 1) * lh + fs + 18) * dpr));

    const d = o.getImageData(0, 0, cv.width, cv.height).data;
    let cs = Math.max(2, Math.round(3 * dpr));
    let pts: number[][];
    for (;;) {
      pts = [];
      for (let y = Y0; y < Y1; y += cs) for (let x = X0; x < X1; x += cs) {
        const w = Math.min(cs, cv.width - x), h = Math.min(cs, cv.height - y);
        let hit = false;
        let rSum = 0, gSum = 0, bSum = 0, count = 0;
        for (let yy = y; yy < y + h && !hit; yy++) for (let xx = x; xx < x + w; xx++) {
          const idx4 = (yy * cv.width + xx) * 4;
          if (d[idx4 + 3] > 30) {
            hit = true;
            rSum += d[idx4];
            gSum += d[idx4 + 1];
            bSum += d[idx4 + 2];
            count++;
          }
        }
        if (hit && count > 0) {
          pts.push([x, y, w, h, 0, 0, Math.round(rSum / count), Math.round(gSum / count), Math.round(bSum / count)]);
        }
      }
      if (pts.length <= 4200) break;
      cs++;
    }

    let minX = 1e9, maxX = -1e9;
    let minY = 1e9, maxY = -1e9;
    for (const p of pts) {
      p[4] = (p[0] + p[2] / 2) / dpr; p[5] = (p[1] + p[3] / 2) / dpr;
      if (p[4] < minX) minX = p[4];
      if (p[4] > maxX) maxX = p[4];
      if (p[5] < minY) minY = p[5];
      if (p[5] > maxY) maxY = p[5];
    }

    const r = createRng(7);
    parts = pts.map((p) => {
      const u = r(), size = u < 0.62 ? 1.6 + r() * 1.4 : u < 0.9 ? 2.8 + r() * 2.2 : 4.8 + r() * 3.8;
      const isBlue = (p[8] || 0) > (p[6] || 0) + 40; // higher blue than red
      const homeColor: RGB = isBlue ? [37, 99, 235] : [15, 23, 42];
      // Field colors in project palette:
      const fieldColor: RGB = isBlue
        ? (r() > 0.5 ? [59, 130, 246] : [29, 78, 216]) // Lighter or deeper blue
        : (r() > 0.5 ? [30, 58, 138] : [15, 23, 42]); // Deep navy/black
      return {
        rx: p[0], ry: p[1], rw: p[2], rh: p[3], hx: p[4], hy: p[5],
        nx: (p[4] - minX) / Math.max(1, maxX - minX),
        ny: (p[5] - minY) / Math.max(1, maxY - minY),
        r1: r(), r2: r(), r3: r(), size, fx: 0, fy: 0,
        hc: homeColor, fc: fieldColor, lt: 0, bend: 0, pa: 0,
      };
    });
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    reroll();
  }

  function drawRealText() {
    const c = ctx as CanvasRenderingContext2D;
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, cv.width, cv.height);
    c.globalAlpha = 1; c.drawImage(textCv, 0, 0); c.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function frame(now: number) {
    raf = 0;
    const c = ctx as CanvasRenderingContext2D;
    const lead = intro && phase === "gathering" ? INTRO_LEAD : 0;
    const prog = clamp((now - phaseStart) / TIMING.travel + lead), out = phase === "dissolving";
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, cv.width, cv.height);
    for (const p of parts) {
      const pl = plan(mode, p, W, H), lt = clamp((prog - pl.delay * 0.55) / 0.45);
      p.lt = lt; p.bend = pl.bend;
      p.pa = out ? 1 - smooth(lt / 0.18) : smooth((lt - 0.82) / 0.18);
      if (p.pa <= 0.002) continue;
      c.globalAlpha = p.pa; c.drawImage(textCv, p.rx, p.ry, p.rw, p.rh, p.rx, p.ry, p.rw, p.rh);
    }
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    for (const p of parts) {
      const lt = p.lt;
      if (lt <= 0 || lt >= 1) continue;
      const a: [number, number] = out ? [p.hx, p.hy] : [p.fx, p.fy];
      const b: [number, number] = out ? [p.fx, p.fy] : [p.hx, p.hy];
      const q = bowAt(a, b, out ? p.bend : -p.bend, lt), e = out ? q[2] : 1 - q[2];
      let alpha = 0.2 + 0.8 * (1 - smooth((e - 0.45) / 0.55));
      alpha *= out ? 1 - smooth((lt - 0.85) / 0.15) : smooth(lt / 0.15) * (1 - p.pa);
      if (alpha <= 0.004) continue;
      c.globalAlpha = Math.min(1, alpha); c.fillStyle = rgbStr(p.hc, p.fc, smooth(e / 0.6));
      c.beginPath(); c.arc(q[0], q[1], (p.size * mix(1, 1.7, smooth(e))) / 2, 0, 6.2832); c.fill();
    }
    c.globalAlpha = 1;
    if (prog < 1) raf = requestAnimationFrame(frame); else advance();
  }

  function stopWork() { clearTimeout(timer); cancelAnimationFrame(raf); raf = 0; }

  function enter(next: Phase) {
    phase = next; phaseStart = performance.now(); stopWork();
    if (!active || destroyed) return;
    if (next === "text") {
      intro = false;
      drawRealText();
      if (loop) {
        timer = window.setTimeout(advance, TIMING.hold);
      }
    } else if (next === "field") {
      ctx!.setTransform(1, 0, 0, 1, 0, 0); ctx!.clearRect(0, 0, cv.width, cv.height); ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      timer = window.setTimeout(advance, TIMING.field);
    } else {
      if (next === "dissolving") { mode = nextMode(); reroll(); }
      frame(performance.now());
    }
  }

  function advance() {
    if (!loop && phase === "gathering") {
      enter("text");
      return;
    }
    if (!loop && phase === "text") {
      return;
    }
    enter(phase === "text" ? "dissolving" : phase === "dissolving" ? "field" : phase === "field" ? "gathering" : "text");
  }

  build();
  enter("gathering");
  return {
    setActive(on) {
      if (on === active || destroyed) return;
      active = on;
      if (on) {
        if (phase === "text") {
          drawRealText();
        } else {
          enter(phase);
        }
      } else {
        stopWork();
      }
    },
    resize() {
      if (destroyed) return;
      stopWork();
      build();
      if (active) {
        if (phase === "text") {
          drawRealText();
        } else {
          enter(phase);
        }
      } else if (phase === "text") {
        drawRealText();
      }
    },
    destroy() { destroyed = true; active = false; stopWork(); },
  };
}

/* ------------------------------------------------------------------ */
/* React component                                                     */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduce(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduce;
}

export interface ParticleTitleProps {
  /** Title text. Supports newline '\n' for multi-line titles. Screen readers see complete heading. */
  text?: string;
  className?: string;
  as?: "h1" | "h2";
  id?: string;
  /** If true, continuously dissolves and gathers. Defaults to false (plays once on page entrance and stays stable). */
  loop?: boolean;
}

/**
 * A big, bold hero title with particles in project Black and Blue palette.
 * Dissolves into drifting dust on page entrance, then gathers into stable crisp text.
 * Completely transparent background without any colored backdrop blobs.
 */
export function ParticleTitle({
  text = "Powerful Products.\nEndless Possibilities.",
  className = "",
  as = "h1",
  id,
  loop = false,
}: ParticleTitleProps) {
  const reduce = usePrefersReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const HeadingTag = as;

  useEffect(() => {
    const cv = canvasRef.current;
    if (reduce || !cv) return;
    const engine = createEngine(cv, text, loop);
    if (!engine) return;
    let visible = true;
    let size = `${cv.clientWidth}x${cv.clientHeight}`;
    const sync = () => engine.setActive(visible && !document.hidden);
    const io = new IntersectionObserver((entries) => {
      visible = entries[entries.length - 1].isIntersecting;
      sync();
    });
    io.observe(cv);
    let rz = 0;
    const ro = new ResizeObserver(() => {
      const next = `${cv.clientWidth}x${cv.clientHeight}`;
      if (next === size) return;
      size = next;
      clearTimeout(rz);
      rz = window.setTimeout(() => engine.resize(), 200);
    });
    ro.observe(cv);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      document.removeEventListener("visibilitychange", sync);
      clearTimeout(rz);
      io.disconnect();
      ro.disconnect();
      engine.destroy();
    };
  }, [reduce, text]);

  const lines = text.split("\n");

  return (
    <div className={`relative isolate flex w-full items-center justify-center overflow-visible bg-transparent ${className}`}>
      {/* 100% transparent canvas overlay with zero colored background blobs */}
      {!reduce && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-8 inset-x-0 h-[calc(100%+64px)] w-full"
        />
      )}

      {/* Screen reader heading & fallback when reduced-motion is enabled */}
      <HeadingTag
        id={id}
        className={
          reduce
            ? "relative z-10 m-0 px-6 text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08]"
            : "absolute m-[-1px] h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
        }
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {lines.map((line, idx) => (
          <span
            key={idx}
            className={`block ${idx === 0 ? "text-slate-900" : "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent"}`}
          >
            {line}
          </span>
        ))}
      </HeadingTag>
    </div>
  );
}

export default ParticleTitle;
