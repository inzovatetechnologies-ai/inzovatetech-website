import { useState, useRef, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Building2,
  Users,
  Truck,
  Receipt,
  UserCheck,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Cpu,
  HelpCircle,
  MapPin,
  Sparkles,
  Send,
  MessageCircle,
  ShieldCheck,
  Check,
  Code2,
  Boxes,
  Layers,
  Zap,
  Globe,
  RefreshCw,
  BarChart3,
  BookOpen,
  HardHat,
  GraduationCap,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import SEO from "../components/SEO";
import DemoModal from "../components/DemoModal";
import { PRODUCTS_DATA, ProductModuleItem } from "../data/productData";
import { sendUnifiedEmail } from "../services/emailService";
import { InzovateFaviconIcon } from "../components/InzovateBrandIcon";

const ICON_MAP: Record<string, any> = {
  Building2,
  Users,
  Truck,
  Receipt,
  UserCheck,
  BrainCircuit,
  Boxes,
  Layers,
  Zap,
  Cpu,
  ShieldCheck,
  Globe,
  Sparkles,
  RefreshCw,
  BarChart3,
  BookOpen,
  HardHat,
  GraduationCap,
  Send,
};

export default function ProductDetail() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  // Animation Refs & State
  const modulesRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const regionalRef = useRef<HTMLElement>(null);

  const [heroAnimated, setHeroAnimated] = useState(true);
  const [modulesAnimated, setModulesAnimated] = useState(false);
  const [featuresAnimated, setFeaturesAnimated] = useState(false);
  const [techAnimated, setTechAnimated] = useState(false);
  const [contactAnimated, setContactAnimated] = useState(false);
  const [regionalAnimated, setRegionalAnimated] = useState(false);

  useEffect(() => {
    // Reset and trigger hero animation smoothly on route load / change
    setHeroAnimated(false);
    const heroTimer = setTimeout(() => setHeroAnimated(true), 40);

    // Eager viewport visibility check
    const checkVisibility = () => {
      const vh = window.innerHeight || 800;
      if (modulesRef.current) {
        const rect = modulesRef.current.getBoundingClientRect();
        if (rect.top < vh + 100) setModulesAnimated(true);
      }
      if (featuresRef.current) {
        const rect = featuresRef.current.getBoundingClientRect();
        if (rect.top < vh + 100) setFeaturesAnimated(true);
      }
      if (techRef.current) {
        const rect = techRef.current.getBoundingClientRect();
        if (rect.top < vh + 100) setTechAnimated(true);
      }
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        if (rect.top < vh + 100) setContactAnimated(true);
      }
      if (regionalRef.current) {
        const rect = regionalRef.current.getBoundingClientRect();
        if (rect.top < vh + 100) setRegionalAnimated(true);
      }
    };

    checkVisibility();

    // IntersectionObserver with generous rootMargin
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target === modulesRef.current) setModulesAnimated(true);
              if (entry.target === featuresRef.current) setFeaturesAnimated(true);
              if (entry.target === techRef.current) setTechAnimated(true);
              if (entry.target === contactRef.current) setContactAnimated(true);
              if (entry.target === regionalRef.current) setRegionalAnimated(true);
            }
          });
        },
        { threshold: 0.02, rootMargin: "100px 0px 100px 0px" }
      );

      if (modulesRef.current) observer.observe(modulesRef.current);
      if (featuresRef.current) observer.observe(featuresRef.current);
      if (techRef.current) observer.observe(techRef.current);
      if (contactRef.current) observer.observe(contactRef.current);
      if (regionalRef.current) observer.observe(regionalRef.current);
    }

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });

    // Fail-safe fallback: ensure all content is definitely visible after a short duration
    const fallbackTimer = setTimeout(() => {
      setModulesAnimated(true);
      setFeaturesAnimated(true);
      setTechAnimated(true);
      setContactAnimated(true);
      setRegionalAnimated(true);
    }, 450);

    return () => {
      clearTimeout(heroTimer);
      clearTimeout(fallbackTimer);
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      if (observer) observer.disconnect();
    };
  }, [productSlug]);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  if (!productSlug || !PRODUCTS_DATA[productSlug.toLowerCase()]) {
    return <Navigate to="/products" replace />;
  }

  const product = PRODUCTS_DATA[productSlug.toLowerCase()];
  const IconComponent = ICON_MAP[product.iconName] || Building2;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setFormError("Please fill in your Name, Email, and Phone number.");
      return;
    }

    setFormError("");
    setIsSubmitting(true);

    try {
      const ok = await sendUnifiedEmail({
        form_type: `Product Demo & Inquiry - ${product.name}`,
        full_name: fullName,
        email: email,
        phone: phone,
        company_name: companyName,
        product: product.name,
        message: message || `Inquiry for ${product.title}`,
      });

      if (ok) {
        setFormSuccess(true);
        setFullName("");
        setEmail("");
        setPhone("");
        setCompanyName("");
        setMessage("");
      } else {
        setFormError("Failed to submit form. Please try again or contact us via WhatsApp.");
      }
    } catch (err) {
      setFormError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F8FAFC] text-slate-900 min-h-screen pt-8 sm:pt-10 pb-16 overflow-hidden">
      <SEO
        title={product.metaTitle}
        description={product.metaDescription}
        canonicalUrl={`https://inzovate-technologies.com/products/${product.slug}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.name, url: `/products/${product.slug}` },
        ]}
        faqs={product.faqs}
      />

      <div className="sh-spacer" />

      {/* Hero Section */}
      <section
        key={`hero-${product.slug}`}
        className={`relative max-w-[1440px] mx-auto px-6 lg:px-12 mb-12 z-10 home-banner-animate ${
          heroAnimated ? "animate" : ""
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="fade-left">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100 bg-blue-50 text-blue-600"
                >
                  <IconComponent size={30} />
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {product.name}
                </h1>
              </div>
            </div>

            <div className="fade-right delay-1">
              <p className="text-xl font-bold text-blue-600 mb-4">{product.tagline}</p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                {product.fullDesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center mb-8 fade-left delay-2">
              <Link
                to="/pricing"
                className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm tracking-wide border border-slate-700 shadow-lg shadow-slate-900/15 hover:shadow-xl hover:border-slate-500 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <InzovateFaviconIcon size={17} className="text-blue-400" />
                <span>Start Free Trial — View Pricing</span>
                <ArrowRight size={16} className="text-blue-400" />
              </Link>
              <a
                href="#subsections-modules"
                className="px-7 py-4 rounded-full border border-slate-300 text-slate-700 font-bold text-sm bg-white hover:bg-slate-50 shadow-xs transition-colors flex items-center gap-2"
              >
                <span>Explore Sub-Sections</span>
                <ChevronRight size={15} />
              </a>
              <a
                href="#product-contact-form"
                className="px-6 py-4 rounded-full border border-slate-300 text-slate-700 font-bold text-sm bg-white hover:bg-slate-50 shadow-xs transition-colors"
              >
                Get Price Quote
              </a>
            </div>

            {/* Quick Sub-section Pills */}
            {product.modules.some((m) => m.href) && (
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs fade-right delay-3">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-2">
                  <Sparkles size={13} className="text-blue-600" />
                  <span>Available Sub-Sections &amp; Module Pages:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.modules.map((mod) => {
                    const ModIcon = (mod.iconName && ICON_MAP[mod.iconName]) || Sparkles;
                    if (mod.href) {
                      return (
                        <Link
                          key={mod.title}
                          to={mod.href}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 text-xs font-semibold transition-all group"
                        >
                          <ModIcon size={13} className="text-blue-600" />
                          <span>{mod.title}</span>
                          <ArrowRight size={12} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                        </Link>
                      );
                    }
                    return (
                      <span
                        key={mod.title}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-600 border border-slate-200 text-xs font-medium"
                      >
                        <ModIcon size={13} className="text-slate-400" />
                        <span>{mod.title}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Quick Product Highlight Card */}
          <div className="lg:col-span-5 fade-right delay-2">
            <div className="p-8 rounded-[28px] border border-slate-200/90 bg-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <IconComponent size={140} color={product.accentColor} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-blue-600" />
                Why Choose {product.name}?
              </h3>
              <ul className="space-y-3.5 mb-6">
                {product.features.slice(0, 4).map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Deployment Options</p>
                  <p className="text-sm font-bold text-slate-900">Cloud Hosted or On-Premise</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Zero License Lock-in
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PRODUCT SUBSECTIONS & CORE MODULES ── */}
      <section
        ref={modulesRef}
        id="subsections-modules"
        className={`homewhatweboxbg whatareyou-animate max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10 scroll-mt-24 ${
          modulesAnimated ? "animate" : ""
        }`}
        style={{ userSelect: "none" }}
      >
        <div className="fade-left text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Individual Sub-Sections &amp; Module Pages
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {product.name} Sub-Sections &amp; Modules
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Click any sub-section below to open its dedicated specification page, feature architecture, and live capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.modules.map((mod: ProductModuleItem, i) => {
            const ModIcon = (mod.iconName && ICON_MAP[mod.iconName]) || IconComponent || Building2;
            const hasLink = Boolean(mod.href);
            const direction = i % 2 === 0 ? "fade-left" : "fade-right";
            const delayClass = `delay-${Math.min(i + 1, 6)}`;

            const cardContent = (
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Top Bar: Icon + Index + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-xs bg-blue-50 border border-blue-100 text-blue-600"
                      >
                        <ModIcon size={22} />
                      </div>
                      <span className="text-xs font-black text-slate-400 tracking-wider">
                        MODULE 0{i + 1}
                      </span>
                    </div>

                    {mod.badge && (
                      <span
                        className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border bg-blue-50 border-blue-200 text-blue-700"
                      >
                        {mod.badge}
                      </span>
                    )}
                  </div>

                  {/* Module Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {mod.title}
                  </h3>

                  {/* Module Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {mod.desc}
                  </p>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  {hasLink ? (
                    <>
                      <span className="text-blue-600 group-hover:text-blue-800 transition-colors flex items-center gap-1.5">
                        <span>Open Sub-Section Page</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-blue-600 text-white group-hover:bg-blue-700 shadow-xs transition-colors flex items-center gap-1">
                        <span>Explore</span>
                        <ChevronRight size={13} />
                      </span>
                    </>
                  ) : (
                    <span className="text-slate-400">Built-in Module</span>
                  )}
                </div>
              </div>
            );

            if (hasLink) {
              return (
                <Link
                  key={i}
                  to={mod.href!}
                  className={`group ${direction} ${delayClass} p-6 sm:p-8 rounded-[24px] bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col justify-between cursor-pointer`}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={i}
                className={`group ${direction} ${delayClass} p-6 sm:p-8 rounded-[24px] bg-white border border-slate-200/90 transition-all duration-300 shadow-sm flex flex-col justify-between`}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      {/* Capabilities & Features Grid */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10">
        <div
          ref={featuresRef}
          className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated p-8 sm:p-12 rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-700 ${
            featuresAnimated ? "animate opacity-100 translate-y-0" : "opacity-90 translate-y-2"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 services-fade-down" style={{ fontFamily: "var(--font-heading)" }}>
            Full Feature List &amp; Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {product.features.map((feature, idx) => {
              const delay = `services-delay-${Math.min(Math.floor(idx / 2) + 1, 6)}`;
              return (
                <div key={idx} className={`flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 services-fade-down ${delay}`}>
                  <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-800 text-sm font-medium leading-relaxed">{feature}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack & Target Industries */}
      <section
        ref={techRef}
        className={`whatareyou-animate max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10 ${
          techAnimated ? "animate" : ""
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tech Stack */}
          <div className="fade-left delay-1 w-full max-w-none text-left p-8 rounded-[24px] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <Cpu size={24} className="text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                Built With Modern Architecture
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {product.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Industry Use Cases */}
          <div className="fade-right delay-2 w-full max-w-none text-left p-8 rounded-[24px] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <Code2 size={24} className="text-purple-600" />
              <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                Ideal For Industries
              </h2>
            </div>
            <ul className="space-y-3">
              {product.useCases.map((useCase) => (
                <li key={useCase} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── EMBEDDED CONTACT FORM FOR THIS PRODUCT ── */}
      <section id="product-contact-form" className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10">
        <div
          ref={contactRef}
          className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated relative p-6 sm:p-8 lg:p-10 rounded-[22px] border border-slate-200 bg-white shadow-md transition-all duration-700 overflow-hidden ${
            contactAnimated ? "animate opacity-100 translate-y-0" : "opacity-90 translate-y-2"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 services-fade-down">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold tracking-widest uppercase">
                  Get Started with {product.name}
                </span>
                <Link
                  to="/pricing"
                  className="px-4 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide border border-slate-700 hover:border-slate-500 flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <InzovateFaviconIcon size={14} className="text-blue-400" />
                  <span>Start Free Trial — View Pricing →</span>
                </Link>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Start Free Trial &amp; Request {product.name} Custom Quote
              </h2>
              <p className="text-slate-600 text-sm">
                Get full access to all features or connect with our product specialists for an enterprise rollout.
              </p>
            </div>

            {formSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center services-fade-down">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Submitted Successfully!</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Thank you for your interest in {product.title}. Our team will contact you shortly on your provided details.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`https://wa.me/919342008797?text=Hi%20Inzovate,%20I%20just%20submitted%20a%20demo%20request%20for%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm flex items-center gap-2 hover:brightness-110 transition-all shadow-md"
                  >
                    <MessageCircle size={18} /> Continue on WhatsApp
                  </a>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {formError && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    ⚠️ {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 services-fade-down services-delay-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ramesh@company.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 services-fade-down services-delay-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Inzovate Tech Pvt Ltd"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>
                </div>

                <div className="services-fade-down services-delay-3">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Requirements / Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`Tell us about your team size, current workflow, and specific features needed for ${product.name}...`}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 services-fade-down services-delay-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span>Your data is confidential &amp; encrypted.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:scale-105 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Demo Request</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Regional Delivery Context */}
      <section
        ref={regionalRef}
        className={`max-w-[1440px] mx-auto px-6 lg:px-12 z-10 mb-8 careers-animate ${
          regionalAnimated ? "animate" : ""
        }`}
      >
        <div className="image-hover-content services-cta-banner relative rounded-[28px] border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden group p-8 sm:p-12 text-center max-w-4xl mx-auto">
          {/* Subtle ambient corner glows matching image-hover-content CTA cards */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none group-hover:scale-110 group-hover:bg-blue-100/60 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none group-hover:scale-110 group-hover:bg-indigo-100/60 transition-all duration-700" />

          <div className="relative z-10">
            <div className="fade-down careers-delay-1 flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                <MapPin size={28} className="text-blue-600" />
              </div>
            </div>

            <h2
              className="fade-left careers-delay-2 text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Deployed Across Tamil Nadu
            </h2>

            <p className="fade-left careers-delay-3 text-slate-600 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              We provide local implementation and support for {product.name} across Bhavani, Tiruchengode, and Salem.
            </p>

            <div className="fade-left careers-delay-3 flex flex-wrap justify-center gap-3 text-xs">
              {["bhavani", "tiruchengode", "salem"].map((c) => (
                <Link
                  key={c}
                  to={`/locations/${c}`}
                  className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors capitalize font-semibold shadow-2xs hover:shadow-xs"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Demo Modal */}
      <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} defaultProduct={product.name} />
    </main>
  );
}
