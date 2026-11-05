import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { MapPin, ArrowRight, Building2, Globe, Sparkles } from "lucide-react";
import SEO from "../components/SEO";
import { LOCATION_DATA } from "../data/locationData";

export default function LocationsHub() {
  const targetSlugs = ["bhavani", "tiruchengode", "salem"];
  const locationsList = targetSlugs
    .map((slug) => LOCATION_DATA[slug])
    .filter(Boolean);

  const gridRef = useRef<HTMLElement>(null);
  const gridInView = useInView(gridRef, { once: false, amount: 0.15 });

  const summaryRef = useRef<HTMLElement>(null);
  const summaryInView = useInView(summaryRef, { once: false, amount: 0.15 });

  return (
    <main className="bg-[#F8FAFC] text-slate-900 min-h-screen pt-16 sm:pt-20 pb-16 overflow-hidden">
      <SEO
        title="Our Operating Locations | IT Company in Bhavani, Tiruchengode, Salem"
        description="Inzovate Technologies Private Limited operates across Bhavani, Tiruchengode, and Salem, providing software development, web design, cloud, and IT consulting."
        canonicalUrl="https://inzovate-technologies.com/locations"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
        ]}
      />

      <div className="sh-spacer" />

      {/* Hero Section with sh-spacer entrance animation */}
      <section className="relative max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10">
        <div className="text-center max-w-3xl mx-auto home-banner-animate animate">
          <div className="fade-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50/80 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-blue-700 font-mono">
                REGIONAL HUBS &amp; OFFICES
              </span>
            </div>
          </div>

          <div className="fade-right delay-1">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Serving Businesses Across{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Tamil Nadu
              </span>
            </h1>
          </div>

          <div className="fade-left delay-2">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              INZOVATE TECHNOLOGIES PRIVATE LIMITED maintains corporate offices and service hubs in Bhavani, Tiruchengode, and Salem.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Locations with about-journey__timeline animation & transition */}
      <section
        ref={gridRef}
        className={`max-w-[1440px] mx-auto px-6 lg:px-12 z-10 homewhatweboxbg whatareyou-animate ${
          gridInView ? "animate" : ""
        }`}
        style={{ userSelect: "none" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationsList.map((loc, idx) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className={`${
                idx % 2 === 0 ? "fade-left" : "fade-right"
              } delay-${Math.min(idx + 1, 6)} group p-8 rounded-[24px] border border-slate-200 bg-white hover:border-blue-400/60 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shadow-sm cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  {loc.priority === 1 && (
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold tracking-wider uppercase">
                      Headquarters
                    </span>
                  )}
                </div>

                <h2
                  className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {loc.cityName}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {loc.intro}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span>View {loc.cityName} Services</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform text-blue-600" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Corporate Summary & Trust with image-hover-content animation & transition */}
      <section
        ref={summaryRef}
        className={`max-w-[1440px] mx-auto px-6 lg:px-12 mt-24 careers-animate ${
          summaryInView ? "animate" : ""
        }`}
      >
        <div className="image-hover-content services-cta-banner relative rounded-[30px] lg:rounded-[36px] border border-slate-200 bg-white text-center max-w-4xl mx-auto shadow-sm hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden group p-8 sm:p-12">
          {/* Subtle ambient corner glows matching image-hover-content CTA cards */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none group-hover:scale-110 group-hover:bg-blue-100/60 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none group-hover:scale-110 group-hover:bg-indigo-100/60 transition-all duration-700" />

          <div className="relative z-10">
            <div className="fade-down careers-delay-1 flex justify-center mb-5">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                <Building2 size={36} className="text-blue-600" />
              </div>
            </div>

            <h2
              className="fade-left careers-delay-2 text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              INZOVATE TECHNOLOGIES PRIVATE LIMITED
            </h2>

            <p className="fade-left careers-delay-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              We deliver enterprise software development, modern web applications, mobile apps, AWS cloud consulting, and business automation across Tamil Nadu.
            </p>

            <div className="fade-left careers-delay-3 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-600 pt-3 border-t border-slate-100">
              <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Corporate Office</Link>
              <span className="text-slate-300">•</span>
              <Link to="/services" className="hover:text-blue-600 transition-colors">Explore All Services</Link>
              <span className="text-slate-300">•</span>
              <Link to="/strategic-partnerships" className="hover:text-blue-600 transition-colors">Technology Partners</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
