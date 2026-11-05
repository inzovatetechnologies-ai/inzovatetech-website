import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Minus,
  ChevronDown,
  Lock,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import FreeTrialModal, { PricingPlan } from "../components/FreeTrialModal";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

// ── Pure White & Champagne Gold Luxury Colour Tokens ─────────────────────────
export const DEFAULT_RUPEE_FONT =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export function RupeeSign({
  style,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <span
      className={`rupee-symbol ${className || ""}`.trim()}
      style={{
        fontFamily: DEFAULT_RUPEE_FONT,
        fontWeight: "inherit",
        ...style,
      }}
    >
      ₹
    </span>
  );
}

const C = {
  bg:          "#FFFFFF",
  card:        "#FFFFFF",
  textPrim:    "#0F172A",
  textSec:     "#64748B",
  gold:        "#2563EB",
  goldDetail:  "#3B82F6",
  border:      "#E2E8F0",
  hoverBg:     "#F8FAFC",
  btnBg:       "#0F172A",
  btnText:     "#FFFFFF",
  btnHover:    "#1E293B",
  success:     "#2F855A",
  error:       "#C53030",
};

// ── plan data (strictly preserved) ───────────────────────────────────────────
const MONTHLY_PRICES = { starter: 800, professional: 1400, enterprise: 2400 };
const YEARLY_PRICES  = {
  starter:      Math.round(800  * 12 * 0.8),
  professional: Math.round(1400 * 12 * 0.8),
  enterprise:   Math.round(2400 * 12 * 0.8),
};

type PlanId = "starter" | "professional" | "enterprise";

interface Plan {
  id: PlanId;
  name: string;
  trialDays: number;
  tagline: string;
  icon: React.ReactNode;
  features: { text: string; included: boolean }[];
}

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    trialDays: 30,
    tagline: "Perfect for growing teams ready to take control.",
    icon: <InzovateFaviconIcon size={20} />,
    features: [
      { text: "Email integration & mass emails", included: true },
      { text: "Built-in calling", included: true },
      { text: "Multiple sales pipelines", included: true },
      { text: "Calendar integration", included: true },
      { text: "Data capture via forms", included: true },
      { text: "Sales forecasting", included: true },
      { text: "Data enrichment", included: true },
      { text: "Custom modules", included: true },
      { text: "HIPAA compliance", included: true },
      { text: "Gmail & Outlook integration", included: true },
      { text: "AI agents", included: false },
      { text: "Predictive intelligence", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    trialDays: 15,
    tagline: "The most powerful plan for scaling organisations.",
    icon: <InzovateFaviconIcon size={20} />,
    features: [
      { text: "Everything in Starter", included: true },
      { text: "AI agents ✦", included: true },
      { text: "Process management", included: true },
      { text: "Inventory management", included: true },
      { text: "Predictive intelligence", included: true },
      { text: "Unlimited reports", included: true },
      { text: "Configure, Price, Quote (CPQ)", included: true },
      { text: "Custom portals", included: true },
      { text: "Customer journeys", included: true },
      { text: "Web-to-case forms", included: true },
      { text: "Customer portals", included: true },
      { text: "Google Ads integration", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    trialDays: 7,
    tagline: "For mature organisations demanding full control.",
    icon: <InzovateFaviconIcon size={20} />,
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Multi-team management", included: true },
      { text: "Reporting hierarchy", included: true },
      { text: "Custom buttons & functions", included: true },
      { text: "Extended field types", included: true },
      { text: "Sequential data collection", included: true },
      { text: "Approval process", included: true },
      { text: "Account Based Marketing", included: true },
      { text: "Developer sandbox", included: true },
      { text: "Field-level encryption", included: true },
      { text: "Extended AI capabilities", included: true },
      { text: "QuickBooks integration", included: true },
    ],
  },
];

interface FaqItem {
  q: React.ReactNode;
  a: React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    q: <>How does the <RupeeSign />0 UPI free trial work?</>,
    a: <>Starter: 30 days, Professional: 15 days, Enterprise: 7 days. An NPCI-compliant <RupeeSign />0 UPI AutoPay mandate is set up — zero is charged today. You receive a reminder 3 days before renewal.</>,
  },
  {
    q: "Can I cancel before the trial ends?",
    a: "Yes — cancel anytime with 1-click from your dashboard before the trial expires. No questions asked, no penalties.",
  },
  {
    q: "Which UPI apps are supported?",
    a: "Google Pay, PhonePe, Paytm, BHIM, Cred, and all bank-native UPI apps are fully supported.",
  },
  {
    q: "Can I upgrade or switch plans later?",
    a: "Absolutely. Upgrade from Starter → Professional → Enterprise at any time. Billing prorates automatically.",
  },
  {
    q: "Is my payment information secure?",
    a: "Yes. All payments are processed through Razorpay, which is PCI-DSS Level 1 certified. We never store card details.",
  },
];

// ── sub-components ────────────────────────────────────────────────────────────
function ChampagneDivider() {
  return (
    <div className="flex items-center gap-3 my-12 max-w-xl mx-auto">
      <div className="flex-1 h-px" style={{ backgroundColor: C.border }} />
      <span className="text-xs select-none" style={{ color: C.gold }}>✦</span>
      <div className="flex-1 h-px" style={{ backgroundColor: C.border }} />
    </div>
  );
}

function FeatureRow({ text, included }: { text: string; included: boolean }) {
  return (
    <li className="flex items-start gap-3 py-1.5">
      {included ? (
        <Check
          size={14}
          className="flex-shrink-0 mt-0.5"
          style={{ color: C.gold }}
          strokeWidth={2.5}
        />
      ) : (
        <Minus
          size={14}
          className="flex-shrink-0 mt-0.5 opacity-40"
          style={{ color: C.goldDetail }}
          strokeWidth={2}
        />
      )}
      <span
        className="text-[13px] leading-snug"
        style={{
          color: included ? C.textPrim : C.textSec,
          opacity: included ? 1 : 0.5,
          textDecoration: included ? "none" : "line-through",
        }}
      >
        {text}
      </span>
    </li>
  );
}

/* Ebix Signature Contact-Band Interactive Dots Canvas */
function EbixDotsCanvas({ isPro, isHovering }: { isPro?: boolean; isHovering?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const entryRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const liveCursor = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let dots: { x: number; y: number }[] = [];
    let trail: { x: number; y: number; time: number }[] = [];
    let frame = 0;
    let visible = true;
    let arrival = 0;
    const spacing = 24;

    function size() {
      if (!parent || !canvas || !ctx) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      dots = [];
      for (let y = 14; y < height; y += spacing) {
        for (let x = 14; x < width; x += spacing) {
          dots.push({ x, y });
        }
      }
      schedule();
    }

    function draw(now: number) {
      frame = 0;
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      trail = trail.filter((p) => now - p.time < 1100);

      const wave = arrival ? Math.max(0, Math.min(1, (now - arrival) / 1600)) : 1;
      const origin = entryRef.current || { x: width * 0.5, y: 30 };
      const reach = Math.hypot(width, height);
      const burst = arrival && now >= arrival && wave < 1;
      const radius = reach * (1 - Math.pow(1 - wave, 2));

      for (const dot of dots) {
        let glow = 0;

        // 1. Immediate continuous glow that actively follows the cursor position
        if (liveCursor.current.active) {
          const liveDist = Math.hypot(dot.x - liveCursor.current.x, dot.y - liveCursor.current.y);
          if (liveDist < 80) {
            glow = Math.max(glow, (1 - liveDist / 80) * 1.2);
          }
        }

        // 2. Fading wake / trail behind the cursor
        for (const p of trail) {
          const distance = Math.hypot(dot.x - p.x, dot.y - p.y);
          if (distance < 55) {
            glow = Math.max(glow, (1 - distance / 55) * Math.pow(1 - (now - p.time) / 1100, 1.4));
          }
        }

        const dx = dot.x - origin.x;
        const dy = dot.y - origin.y;
        const distance = Math.hypot(dx, dy) || 1;
        const pulse = burst ? Math.exp(-Math.pow((distance - radius) / 60, 2)) * (1 - wave * 0.7) : 0;
        const offset = pulse * 12;

        const baseAlpha = isPro ? 0.22 : 0.16;
        const alpha = Math.min(0.95, baseAlpha + glow * 0.78 + pulse * 0.7);
        const dotRadius = 1.2 + glow * 2.2 + pulse * 2.2;

        ctx.beginPath();
        ctx.arc(dot.x + (dx / distance) * offset, dot.y + (dy / distance) * offset, dotRadius, 0, Math.PI * 2);

        if (glow > 0.05 || pulse > 0.05) {
          ctx.fillStyle = `rgba(168, 139, 91, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(214, 195, 161, ${baseAlpha})`;
        }
        ctx.fill();
      }

      if (burst) {
        const travel = 1 - Math.pow(1 - wave, 3);
        for (let i = 0; i < 28; i++) {
          const seed = (i * 0.61803398875) % 1;
          const angle = -0.25 + seed * 1.9;
          const speed = 0.35 + ((i * 0.381966) % 1) * 0.65;
          const x = origin.x + Math.cos(angle) * width * speed * travel;
          const y = origin.y + Math.sin(angle) * height * 1.3 * speed * travel;
          const alpha = Math.pow(1 - wave, 1.7) * 0.6;
          ctx.beginPath();
          ctx.arc(x, y, 1.2 + (i % 3) * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 139, 91, ${alpha})`;
          ctx.fill();
        }
      }

      if (
        visible &&
        !document.hidden &&
        !reduced.matches &&
        (liveCursor.current.active || trail.length > 0 || (arrival && wave < 1))
      ) {
        frame = requestAnimationFrame(draw);
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(draw);
    }

    const onPointerMove = (event: PointerEvent) => {
      if (reduced.matches || event.pointerType === "touch" || !visible) return;
      const rect = parent.getBoundingClientRect();
      const x = ((event.clientX - rect.left) * width) / rect.width;
      const y = ((event.clientY - rect.top) * height) / rect.height;

      liveCursor.current = { x, y, active: true };

      const point = {
        x: Math.round((x - 14) / spacing) * spacing + 14,
        y: Math.round((y - 14) / spacing) * spacing + 14,
        time: performance.now(),
      };
      entryRef.current = point;
      const last = trail[trail.length - 1];
      if (!last || last.x !== point.x || last.y !== point.y) {
        trail.push(point);
      } else {
        last.time = point.time;
      }
      if (trail.length > 28) trail.shift();
      schedule();
    };

    const onPointerEnter = (event: PointerEvent) => {
      if (reduced.matches || event.pointerType === "touch") return;
      const rect = parent.getBoundingClientRect();
      const x = ((event.clientX - rect.left) * width) / rect.width;
      const y = ((event.clientY - rect.top) * height) / rect.height;
      liveCursor.current = { x, y, active: true };
      entryRef.current = { x, y, time: performance.now() };
      arrival = performance.now();
      schedule();
    };

    const onPointerLeave = () => {
      liveCursor.current.active = false;
      schedule();
    };

    parent.addEventListener("pointermove", onPointerMove, { passive: true });
    parent.addEventListener("pointerenter", onPointerEnter, { passive: true });
    parent.addEventListener("pointerleave", onPointerLeave);

    let resizeObs: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      resizeObs = new ResizeObserver(size);
      resizeObs.observe(parent);
    } else {
      size();
    }

    let interObs: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      interObs = new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          if (visible) {
            schedule();
          } else {
            trail = [];
            liveCursor.current.active = false;
            if (frame) cancelAnimationFrame(frame);
            frame = 0;
          }
        },
        { threshold: 0 }
      );
      interObs.observe(parent);
    }

    size();

    return () => {
      parent.removeEventListener("pointermove", onPointerMove);
      parent.removeEventListener("pointerenter", onPointerEnter);
      parent.removeEventListener("pointerleave", onPointerLeave);
      if (resizeObs) resizeObs.disconnect();
      if (interObs) interObs.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [isPro]);

  return (
    <canvas
      ref={canvasRef}
      className="contact-dots pointer-events-none absolute inset-0 w-full h-full"
      style={{
        borderRadius: 18,
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}

interface PricingCardProps {
  plan: Plan;
  monthly: boolean;
  prices: typeof MONTHLY_PRICES;
  onStartTrial: (p: Plan) => void;
  index: number;
}

function PricingCard({ plan, monthly, prices, onStartTrial, index }: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);
  const isPro    = plan.id === "professional";
  const price    = monthly ? prices[plan.id] : Math.round(prices[plan.id] * 12 * 0.8 / 12);

  // Ebix contact-band staggered entry timing
  const delay = 0.12 * index;

  // Real-time cursor-following 3D perspective tilt & momentum lerp physics (matching Ebix homepage)
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let rect: DOMRect | null = null;
    const s = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      lift: isPro ? 2 : 0,
      targetLift: isPro ? 2 : 0,
      frame: 0,
    };

    function tick() {
      if (!card) return;
      s.x += (s.tx - s.x) * 0.14;
      s.y += (s.ty - s.y) * 0.14;
      s.lift += (s.targetLift - s.lift) * 0.14;

      card.style.setProperty("--tilt-x", `${s.x.toFixed(3)}deg`);
      card.style.setProperty("--tilt-y", `${s.y.toFixed(3)}deg`);
      card.style.setProperty("--tilt-lift", `${s.lift.toFixed(3)}px`);

      if (
        Math.abs(s.tx - s.x) +
        Math.abs(s.ty - s.y) +
        Math.abs(s.targetLift - s.lift) >
        0.015
      ) {
        s.frame = requestAnimationFrame(tick);
      } else {
        s.frame = 0;
      }
    }

    function run() {
      if (!s.frame) s.frame = requestAnimationFrame(tick);
    }

    const onPointerEnter = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      rect = card.getBoundingClientRect();
      s.targetLift = isPro ? 10 : 8;
      card.classList.add("tilt-active");
      run();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      if (!rect) rect = card.getBoundingClientRect();
      const normX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const normY = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

      // 3D tilt angles actively tracking the cursor position
      s.tx = (0.5 - normY) * 11;
      s.ty = (normX - 0.5) * 13;

      // Spotlight coordinates following cursor
      card.style.setProperty("--tilt-light-x", `${(normX * 100).toFixed(1)}%`);
      card.style.setProperty("--tilt-light-y", `${(normY * 100).toFixed(1)}%`);
      run();
    };

    const onPointerLeave = () => {
      s.tx = 0;
      s.ty = 0;
      s.targetLift = isPro ? 2 : 0;
      rect = null;
      card.classList.remove("tilt-active");
      run();
    };

    card.addEventListener("pointerenter", onPointerEnter);
    card.addEventListener("pointermove", onPointerMove, { passive: true });
    card.addEventListener("pointerleave", onPointerLeave);

    return () => {
      card.removeEventListener("pointerenter", onPointerEnter);
      card.removeEventListener("pointermove", onPointerMove);
      card.removeEventListener("pointerleave", onPointerLeave);
      if (s.frame) cancelAnimationFrame(s.frame);
    };
  }, [isPro]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.965 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.2, 0.7, 0.2, 1],
      }}
      className="h-full flex flex-col ebix-card-wrapper"
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={`relative flex flex-col flex-1 ebix-pricing-card ${isPro ? "is-pro" : ""}`}
        style={{
          backgroundColor: C.card,
          borderRadius: 18,
          border: isPro
            ? `1.5px solid ${C.gold}`
            : `1px solid ${hovering ? C.gold : C.border}`,
          zIndex: hovering ? 10 : isPro ? 2 : 1,
        }}
      >
        {/* Dynamic cursor-following champagne spotlight */}
        <div className="ebix-tilt-light" />

        {/* Ebix Signature Interactive Dotted Field */}
        <EbixDotsCanvas isPro={isPro} isHovering={hovering} />

        {/* Recommended Plan Accent Badge */}
        {isPro && (
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] select-none shadow-2xs ebix-plan-badge z-20"
            style={{
              backgroundColor: C.card,
              border: `1px solid ${C.gold}`,
              color: C.gold,
              transform: hovering ? "translate(-50%, -3px) scale(1.05)" : "translate(-50%, 0)",
              transition: "transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.35s cubic-bezier(0.2, 0.7, 0.2, 1)",
              boxShadow: hovering ? "0 4px 14px rgba(168, 139, 91, 0.3)" : "none",
            }}
          >
            Recommended
          </div>
        )}

        {/* Card body */}
        <div
          className="relative z-10 p-6 sm:p-7 flex flex-col flex-1 ebix-contact-band-body"
          style={{
            background: "transparent",
            borderRadius: 17,
          }}
        >
          {/* Icon + Name */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center ebix-plan-icon"
              style={{
                backgroundColor: hovering ? "#F8FAFC" : C.card,
                border: `1px solid ${hovering || isPro ? C.gold : C.border}`,
                transform: hovering ? "translateY(-2px) scale(1.08)" : "none",
                transition: "all 0.35s cubic-bezier(0.2, 0.7, 0.2, 1)",
                boxShadow: hovering ? "0 6px 16px rgba(168, 139, 91, 0.18)" : "none",
              }}
            >
              {plan.icon}
            </div>
            <div>
              <h3
                className="text-base font-bold tracking-tight"
                style={{ color: C.textPrim }}
              >
                {plan.name}
              </h3>
              <span
                className="text-[11px] font-semibold"
                style={{ color: C.gold }}
              >
                {plan.trialDays} Days Free Trial
              </span>
            </div>
          </div>

          <p
            className="text-xs mb-5 leading-relaxed"
            style={{ color: C.textSec }}
          >
            {plan.tagline}
          </p>

          {/* Price */}
          <div className="mb-5">
            <div className="flex items-baseline gap-1">
              <span
                className="text-2xl sm:text-3xl font-bold leading-none select-none rupee-symbol"
                style={{ color: C.gold, fontFamily: DEFAULT_RUPEE_FONT }}
              >
                ₹
              </span>
              <span
                className="text-4xl sm:text-5xl font-black leading-none"
                style={{ color: C.textPrim }}
              >
                {price.toLocaleString("en-IN")}
              </span>
            </div>
            <div
              className="text-xs mt-1.5 font-medium"
              style={{ color: C.textSec }}
            >
              per user / month
              {!monthly && (
                <span
                  className="ml-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase"
                  style={{
                    backgroundColor: C.hoverBg,
                    color: C.gold,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  Billed annually
                </span>
              )}
            </div>
          </div>

          {/* Primary Action Button */}
          <TrialButton plan={plan} isPro={isPro} onStartTrial={onStartTrial} />

          {/* Divider */}
          <div className="my-5 h-px" style={{ backgroundColor: C.border }} />

          {/* Features List */}
          <ul className="flex-1 space-y-1">
            {plan.features.map((f, i) => (
              <FeatureRow key={i} text={f.text} included={f.included} />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function TrialButton({
  plan,
  isPro,
  onStartTrial,
}: {
  plan: Plan;
  isPro?: boolean;
  onStartTrial: (p: Plan) => void;
}) {
  const [hov, setHov] = useState(false);

  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onStartTrial(plan)}
      className="w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer"
      style={{
        backgroundColor: hov ? C.btnHover : C.btnBg,
        color: C.btnText,
        border: isPro ? `1px solid ${C.gold}` : `1px solid ${C.btnBg}`,
        boxShadow: hov
          ? `0 6px 18px rgba(41, 39, 34, 0.16)`
          : `0 2px 8px rgba(41, 39, 34, 0.08)`,
        transform: hov ? "translateY(-1px)" : "translateY(0)",
      }}
    >
      Free Trial — <RupeeSign />0 Today
    </button>
  );
}

// ── main export ───────────────────────────────────────────────────────────────
export default function Pricing() {
  const [monthly, setMonthly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const ctaBannerRef = useRef<HTMLDivElement>(null);
  const [ctaBannerAnimated, setCtaBannerAnimated] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);
  const [faqAnimated, setFaqAnimated] = useState(false);

  useEffect(() => {
    const scrollObserverOptions: IntersectionObserverInit = {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px",
    };

    const ctaObserver = new IntersectionObserver(([entry]) => {
      setCtaBannerAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (ctaBannerRef.current) {
      ctaObserver.observe(ctaBannerRef.current);
    }

    const faqObserver = new IntersectionObserver(([entry]) => {
      setFaqAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (faqRef.current) {
      faqObserver.observe(faqRef.current);
    }

    return () => {
      ctaObserver.disconnect();
      faqObserver.disconnect();
    };
  }, []);

  const prices = monthly ? MONTHLY_PRICES : YEARLY_PRICES;

  const handleStartTrial = (plan: Plan) => {
    const price = monthly ? MONTHLY_PRICES[plan.id] : Math.round(MONTHLY_PRICES[plan.id] * 12 * 0.8);
    setSelectedPlan({
      id: plan.id,
      name: plan.name,
      price,
      period: monthly ? "/user/month" : "/user/year",
      trialDays: plan.trialDays,
      tagline: plan.tagline,
      features: plan.features.filter(f => f.included).map(f => f.text),
    });
    setModalOpen(true);
  };

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: C.bg, color: C.textPrim }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-12 sm:pb-20">
        
        {/* ── HEADER ─────────────────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Subtle Champagne Gold Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{
              backgroundColor: C.card,
              border: `1px solid ${C.border}`,
              color: C.gold,
            }}
          >
            <InzovateFaviconIcon size={13} />
            <span>Transparent Pricing • Free Trial</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: C.textPrim }}
          >
            Choose the Plan That Fits{" "}
            <span style={{ color: C.gold }}>Your Business</span>
          </motion.h1>


          {/* Monthly / Yearly Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-1.5 mt-6 p-1 rounded-xl"
            style={{
              backgroundColor: C.card,
              border: `1px solid ${C.border}`,
            }}
          >
            <button
              onClick={() => setMonthly(true)}
              className="px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer"
              style={{
                backgroundColor: monthly ? C.btnBg : "transparent",
                color: monthly ? C.btnText : C.textSec,
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setMonthly(false)}
              className="relative px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              style={{
                backgroundColor: !monthly ? C.btnBg : "transparent",
                color: !monthly ? C.btnText : C.textSec,
              }}
            >
              Yearly
              <span
                className="text-[9.5px] font-black px-1.5 py-0.5 rounded-md"
                style={{
                  backgroundColor: !monthly ? C.gold : C.hoverBg,
                  color: !monthly ? "#FFFFFF" : C.gold,
                  border: `1px solid ${C.border}`,
                }}
              >
                SAVE 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* ── PRICING CARDS GRID ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto items-start mt-4 sm:mt-6">
          {PLANS.map((plan, idx) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={idx}
              monthly={monthly}
              prices={prices}
              onStartTrial={handleStartTrial}
            />
          ))}
        </div>

        {/* ── TRUST STRIP ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-semibold"
          style={{ color: C.textSec }}
        >
          {[
            { icon: <Shield size={14} style={{ color: C.gold }} />, text: "Secure UPI AutoPay" },
            { icon: <Lock size={14} style={{ color: C.gold }} />, text: "PCI-DSS Compliant" },
            { icon: <Check size={14} style={{ color: C.gold }} strokeWidth={2.5} />, text: <><RupeeSign />0 Due Today</> },
            { icon: <Zap size={14} style={{ color: C.gold }} />, text: "Instant Activation" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
              style={{
                backgroundColor: C.card,
                border: `1px solid ${C.border}`,
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        <ChampagneDivider />

        {/* ── FREQUENTLY ASKED QUESTIONS (Services-Section Animation) ───────── */}
        <div
          ref={faqRef}
          className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated max-w-2xl mx-auto mt-4 ${
            faqAnimated ? "animate" : ""
          }`}
        >
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-center mb-8 tracking-tight services-fade-down"
            style={{ fontFamily: "var(--font-heading)", color: C.textPrim }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden transition-all duration-200 services-fade-down services-delay-${Math.min(
                    i + 1,
                    6
                  )}`}
                  style={{
                    backgroundColor: C.card,
                    border: `1px solid ${isOpen ? C.gold : C.border}`,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 cursor-pointer transition-colors"
                    style={{
                      backgroundColor: isOpen ? C.hoverBg : "transparent",
                    }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ color: C.textPrim }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      style={{
                        color: C.gold,
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p
                          className="px-6 pb-4 pt-1 text-sm leading-relaxed"
                          style={{ color: C.textSec }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CALL TO ACTION BANNER (Ebix Flipbox-Section Animation) ───────── */}
        <div
          ref={ctaBannerRef}
          className={`newmrhomebox flipbox-section pricing-cta-card mt-16 max-w-3xl mx-auto rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden ${
            ctaBannerAnimated ? "animate" : ""
          }`}
          style={{
            backgroundColor: C.card,
            border: `1px solid ${C.border}`,
            boxShadow: `0 8px 30px rgba(41, 39, 34, 0.04)`,
          }}
        >
          <div className="relative z-10">
            <h3
              className="text-2xl sm:text-3xl font-black mt-2 mb-2 tracking-tight flipbox-fade-down flipbox-delay-1"
              style={{ fontFamily: "var(--font-heading)", color: C.textPrim }}
            >
              Start risk-free. <RupeeSign />0 due today.
            </h3>
            <p
              className="text-sm sm:text-base mb-6 max-w-md mx-auto flipbox-fade-down flipbox-delay-2"
              style={{ color: C.textSec }}
            >
              Activate your free trial with UPI AutoPay. Cancel anytime before it ends.
            </p>
            <div className="flipbox-fade-down flipbox-delay-3">
              <button
                onClick={() => handleStartTrial(PLANS[1])}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
                style={{
                  backgroundColor: C.btnBg,
                  color: C.btnText,
                  border: `1px solid ${C.gold}`,
                  boxShadow: `0 4px 16px rgba(41, 39, 34, 0.12)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = C.btnHover;
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = C.btnBg;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get Started — Free Trial
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Free Trial Modal */}
      <FreeTrialModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}
