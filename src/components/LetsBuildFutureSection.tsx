import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function LetsBuildFutureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 lg:py-24 overflow-hidden bg-white border-t border-slate-200 careers-animate ${
        isInView ? "animate" : ""
      }`}
    >
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* PREMIUM CTA BANNER CONTAINER WITH IMAGE-HOVER-CONTENT ANIMATION & TRANSITIONS */}
        <div
          className="image-hover-content services-cta-banner relative rounded-[32px] border border-slate-200 overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-blue-50/50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-300 group"
        >
          {/* Ambient Background Lighting */}
          <div
            className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
            style={{
              background:
                "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
            style={{
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-500"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37, 99, 235, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* CENTERED CONTENT WITH IMAGE-HOVER-CONTENT ANIMATION & TRANSITIONS */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Eyebrow */}
            <div className="fade-down careers-delay-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span
                className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-purple-700"
                style={{ fontFamily: "var(--font-body)" }}
              >
                LET’S BUILD THE FUTURE TOGETHER
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="fade-left careers-delay-2 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Build{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                What’s Next?
              </span>
            </h2>

            {/* Description */}
            <p className="fade-left careers-delay-3 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Partner with us to turn your ideas into powerful digital solutions that drive growth.
            </p>

            {/* CTA Pill Button */}
            <div className="fade-left careers-delay-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-white text-base tracking-wide bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span>Let’s Talk</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
