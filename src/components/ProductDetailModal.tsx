import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Sparkles, Shield, Cpu, Zap, BarChart3, Database, ChevronRight } from "lucide-react";
import { InzovateFaviconIcon } from "./InzovateBrandIcon";

interface ProductDetail {
  id: string;
  name: string;
  full: string;
  desc: string;
  features: string[];
  accentColor: string;
  gradientBg: string;
}

interface Props {
  product: ProductDetail | null;
  onClose: () => void;
  onRequestDemo: (prodName: string) => void;
}

export default function ProductDetailModal({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
        style={{ background: "rgba(15, 23, 42, 0.45)", backdropFilter: "blur(12px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl rounded-[32px] border border-slate-200/90 bg-white text-slate-900 p-6 sm:p-10 shadow-[0_25px_70px_rgba(15,23,42,0.15)] overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center justify-center z-20 cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Top Background Glow */}
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none opacity-15"
            style={{
              background: `radial-gradient(circle, ${product.accentColor} 0%, transparent 70%)`,
              filter: "blur(70px)",
            }}
          />

          <div className="relative z-10">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-4">
              <Sparkles size={13} style={{ color: product.accentColor }} />
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-blue-700">
                PRODUCT ARCHITECTURE &amp; SPECIFICATIONS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              <span style={{ color: product.accentColor }}>{product.name}</span> — {product.full}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              {product.desc}
            </p>

            {/* Interactive Mockup Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Main Interactive Screen Mockup */}
              <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-200 bg-slate-50/80 relative overflow-hidden flex flex-col justify-between min-h-[260px]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-slate-600 ml-2">
                      INZOVATE_{product.name}_Console_v4.2.sys
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
                    Operational
                  </span>
                </div>

                <div className="space-y-4 my-auto">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Database size={18} style={{ color: product.accentColor }} />
                      <div>
                        <p className="text-xs font-bold text-slate-800">Real-time Data Stream</p>
                        <p className="text-[10px] text-slate-500">High-concurrency event bus connected</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-900">&lt; 12ms</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[10px] font-bold uppercase text-slate-500">Automation Speed</span>
                      <p className="text-sm font-black text-slate-900 mt-1">4.2x Faster Process</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-[10px] font-bold uppercase text-slate-500">Security Standard</span>
                      <p className="text-sm font-black text-slate-900 mt-1">ISO 27001 / SOC2</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>API: RESTful / GraphQL</span>
                  <span>Encryption: AES-256</span>
                </div>
              </div>

              {/* Specifications Column */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/80 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-4">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                        <CheckCircle2 size={15} style={{ color: product.accentColor }} className="flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2 text-[11px] text-slate-600">
                  <p className="flex items-center gap-1.5"><Shield size={13} className="text-blue-600" /> Multi-tenant cloud native</p>
                  <p className="flex items-center gap-1.5"><Zap size={13} className="text-amber-500" /> Instant webhook events</p>
                  <p className="flex items-center gap-1.5"><Cpu size={13} className="text-purple-600" /> Automated AI triggers</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <BarChart3 size={15} className="text-blue-600" />
                <span>Ready for seamless integration into your existing tech stack.</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <Link
                  to={`/products/${product.id.toLowerCase()}`}
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl text-xs font-bold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Sub-Sections</span>
                  <ChevronRight size={13} />
                </Link>

                <Link
                  to="/pricing"
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl text-xs font-extrabold text-white bg-[#0F172A] hover:bg-[#1E293B] border border-[#2563EB] shadow-md shadow-[#0F172A]/15 hover:border-[#3B82F6] transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                >
                  <InzovateFaviconIcon size={14} className="text-[#2563EB]" />
                  <span>Start Free Trial — View Pricing</span>
                  <ArrowRight size={14} className="text-[#2563EB]" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
