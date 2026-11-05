import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ShieldCheck } from "lucide-react";
import { InzovateFaviconIcon } from "./InzovateBrandIcon";

export default function HomePricingPromoIcon() {
  const [minimized, setMinimized] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "98px",
        zIndex: 99998,
      }}
      className="select-none font-sans"
    >
      <AnimatePresence mode="wait">
        {!minimized ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.85, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex items-center gap-3.5 rounded-2xl p-3 pr-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #E2E8F0",
              boxShadow:
                "0 14px 35px rgba(23, 70, 162, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05)",
              maxWidth: "calc(100vw - 120px)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-3 right-3 h-[2px] pointer-events-none rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #1746A2, #2563EB)",
              }}
            />

            {/* Close / Minimize button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMinimized(true);
              }}
              title="Minimize Free Trial Card"
              aria-label="Minimize Free Trial Card"
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors z-20 shadow-sm cursor-pointer"
            >
              <X size={11} strokeWidth={2.5} />
            </button>

            {/* Icon Circle */}
            <Link
              to="/pricing"
              className="flex items-center gap-3.5 text-left no-underline cursor-pointer"
            >
              <div className="relative flex-shrink-0">
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                  style={{
                    background: "#F8FAFC",
                    border: "1.5px solid #CBD5E1",
                  }}
                >
                  <InzovateFaviconIcon size={24} />
                </div>
                {/* Live ping dot */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 border border-white" />
                </span>
              </div>

              {/* Text Info Showing Full Trial Details */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-[9.5px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200"
                  >
                    Special Offer
                  </span>
                  <span className="text-[10px] text-slate-500 flex items-center gap-0.5 font-medium">
                    <ShieldCheck size={11} className="text-emerald-600" /> No Card Needed
                  </span>
                </div>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span
                    className="text-[13.5px] font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    14-Day Free Trial
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-blue-600 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
                <p className="text-[11px] text-slate-500 -mt-0.5 whitespace-nowrap">
                  Explore CRM &amp; Cloud Pricing Plans
                </p>
              </div>
            </Link>
          </motion.div>
        ) : (
          <motion.button
            key="minimized"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMinimized(false)}
            title="Expand 14-Day Free Trial Details"
            className="relative flex items-center justify-center w-[54px] h-[54px] rounded-full shadow-lg bg-white border border-slate-300 group cursor-pointer"
          >
            {/* Notification dot */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 border border-white" />
            </span>
            <InzovateFaviconIcon size={26} className="group-hover:scale-105 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
