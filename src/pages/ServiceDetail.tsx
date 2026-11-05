import { useState, useRef, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Code2,
  ArrowRight,
  CheckCircle2,
  Cpu,
  HelpCircle,
  MapPin,
  Send,
  MessageCircle,
  ShieldCheck,
  Check,
} from "lucide-react";
import SEO from "../components/SEO";
import DemoModal from "../components/DemoModal";
import { SERVICES_DATA } from "../data/serviceData";
import { sendUnifiedEmail } from "../services/emailService";

export default function ServiceDetail() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  // Animation Refs & State
  const featuresRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const regionalRef = useRef<HTMLElement>(null);
  const faqsRef = useRef<HTMLElement>(null);

  const [featuresAnimated, setFeaturesAnimated] = useState(false);
  const [techAnimated, setTechAnimated] = useState(false);
  const [contactAnimated, setContactAnimated] = useState(false);
  const [regionalAnimated, setRegionalAnimated] = useState(false);
  const [faqsAnimated, setFaqsAnimated] = useState(false);

  useEffect(() => {
    // Eager viewport visibility check
    const checkVisibility = () => {
      const vh = window.innerHeight || 800;
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
      if (faqsRef.current) {
        const rect = faqsRef.current.getBoundingClientRect();
        if (rect.top < vh + 100) setFaqsAnimated(true);
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
              if (entry.target === featuresRef.current) setFeaturesAnimated(true);
              if (entry.target === techRef.current) setTechAnimated(true);
              if (entry.target === contactRef.current) setContactAnimated(true);
              if (entry.target === regionalRef.current) setRegionalAnimated(true);
              if (entry.target === faqsRef.current) setFaqsAnimated(true);
            }
          });
        },
        { threshold: 0.02, rootMargin: "100px 0px 100px 0px" }
      );

      if (featuresRef.current) observer.observe(featuresRef.current);
      if (techRef.current) observer.observe(techRef.current);
      if (contactRef.current) observer.observe(contactRef.current);
      if (regionalRef.current) observer.observe(regionalRef.current);
      if (faqsRef.current) observer.observe(faqsRef.current);
    }

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });

    // Fail-safe fallback: ensure all content is definitely visible after a short duration
    const fallbackTimer = setTimeout(() => {
      setFeaturesAnimated(true);
      setTechAnimated(true);
      setContactAnimated(true);
      setRegionalAnimated(true);
      setFaqsAnimated(true);
    }, 450);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      if (observer) observer.disconnect();
    };
  }, [serviceSlug]);

  // Embedded Contact Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  if (!serviceSlug || !SERVICES_DATA[serviceSlug.toLowerCase()]) {
    return <Navigate to="/services" replace />;
  }

  const service = SERVICES_DATA[serviceSlug.toLowerCase()];

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
        form_type: `Service Consultation - ${service.title}`,
        full_name: fullName,
        email: email,
        phone: phone,
        company_name: companyName,
        service: service.title,
        message: message || `Consultation request for ${service.title}`,
      });

      if (ok) {
        setFormSuccess(true);
        setFullName("");
        setEmail("");
        setPhone("");
        setCompanyName("");
        setMessage("");
      } else {
        setFormError("Failed to submit inquiry. Please try again or contact us via WhatsApp.");
      }
    } catch (err) {
      setFormError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F8FAFC] text-slate-900 min-h-screen pt-24 sm:pt-32 pb-16 overflow-hidden">
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={`https://inzovate-technologies.com/services/${service.slug}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` },
        ]}
        faqs={service.faqs}
        serviceSchema={{
          name: service.title,
          description: service.metaDescription,
        }}
      />

      <div className="sh-spacer" />

      {/* Hero Section with sh-spacer opening animation & transitions */}
      <section className="relative max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 z-10 home-banner-animate animate text-center">
        <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center">
          <div className="fade-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 font-mono shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span>Certified Technology Service</span>
            </div>
          </div>

          <div className="fade-right delay-1">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {service.title.includes(" ") ? (
                <>
                  <span className="text-slate-900">{service.title.split(" ")[0]} </span>
                  <span className="text-blue-600">{service.title.split(" ").slice(1).join(" ")}</span>
                </>
              ) : (
                <span className="text-slate-900">{service.title}</span>
              )}
            </h1>
          </div>

          <div className="fade-left delay-2">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              {service.fullDesc}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center pt-2 fade-left delay-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Request {service.title} Consultation</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="#service-contact-form"
              className="px-7 py-4 rounded-full border border-slate-300 text-slate-700 font-bold text-sm bg-white hover:bg-slate-50 shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              Book Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* Key Features & Capabilities */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10">
        <div
          ref={featuresRef}
          className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated p-8 sm:p-12 rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-700 ${
            featuresAnimated ? "animate opacity-100 translate-y-0" : "opacity-90 translate-y-2"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 services-fade-down" style={{ fontFamily: "var(--font-heading)" }}>
            Key Capabilities &amp; Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.features.map((feature, idx) => {
              const delay = `services-delay-${Math.min(Math.floor(idx / 2) + 1, 6)}`;
              return (
                <div key={idx} className={`flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/50 hover:border-blue-200 transition-colors services-fade-down ${delay}`}>
                  <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{feature}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies & Use Cases */}
      <section
        ref={techRef}
        className={`whatareyou-animate max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10 ${
          techAnimated ? "animate" : ""
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technologies Used */}
          <div className="fade-left delay-1 w-full max-w-none text-left p-8 rounded-[24px] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <Cpu size={24} className="text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                Core Technologies &amp; Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/60 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Industry Use Cases */}
          <div className="fade-right delay-2 w-full max-w-none text-left p-8 rounded-[24px] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <Code2 size={24} className="text-indigo-600" />
              <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
                Common Industry Use Cases
              </h2>
            </div>
            <ul className="space-y-3">
              {service.useCases.map((useCase) => (
                <li key={useCase} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── EMBEDDED CONTACT FORM FOR THIS SERVICE ── */}
      <section id="service-contact-form" className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10">
        <div
          ref={contactRef}
          className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated relative p-6 sm:p-8 lg:p-12 rounded-[28px] border border-slate-200 bg-white shadow-md transition-all duration-700 overflow-hidden ${
            contactAnimated ? "animate opacity-100 translate-y-0" : "opacity-90 translate-y-2"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 services-fade-down">
              <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold tracking-widest uppercase">
                Consultation Request
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Get Expert Advice for {service.title}
              </h2>
              <p className="text-slate-600 text-sm">
                Discuss your project scope, tech requirements, and timeline with our engineering leads.
              </p>
            </div>

            {formSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center services-fade-down">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Consultation Request Received!</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Thank you for reaching out about {service.title}. Our senior solution architects will contact you shortly.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`https://wa.me/919342008797?text=Hi%20Inzovate,%20I%20requested%20a%20consultation%20for%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm flex items-center gap-2 hover:brightness-110 transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle size={18} /> Connect on WhatsApp
                  </a>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors cursor-pointer"
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
                      placeholder="e.g. Anand Subramanian"
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
                      placeholder="e.g. anand@company.com"
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
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Global Exports"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>
                </div>

                <div className="services-fade-down services-delay-3">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Scope &amp; Key Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`Describe your goals, expected timeline, and requirements for ${service.title}...`}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 services-fade-down services-delay-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span>Strict confidentiality assured.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:scale-105 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
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

      {/* Regional Delivery Availability Context */}
      <section
        ref={regionalRef}
        className={`max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10 careers-animate ${
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
              Available Across Tamil Nadu
            </h2>

            <p className="fade-left careers-delay-3 text-slate-600 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              We deliver {service.title} for organizations across Bhavani, Tiruchengode, and Salem.
            </p>

            <div className="fade-left careers-delay-3 flex flex-wrap justify-center gap-3 text-xs">
              {["bhavani", "tiruchengode", "salem"].map((c) => (
                <Link
                  key={c}
                  to={`/locations/${c}`}
                  className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 transition-colors capitalize font-semibold shadow-2xs hover:shadow-xs"
                >
                  {service.title} in {c}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section
          ref={faqsRef}
          className={`newmrhomebox flipbox-section max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10 ${
            faqsAnimated ? "animate" : ""
          }`}
        >
          <div className="mb-10 text-center max-w-2xl mx-auto flipbox-fade-down">
            <HelpCircle size={32} className="text-blue-600 mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-[18px] border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all flipbox-fade-down flipbox-delay-${(idx % 4) + 1}`}
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Modal */}
      <DemoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProduct={service.title}
        isServiceInquiry={true}
      />
    </main>
  );
}
