import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Loader2,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Mail,
  Phone,
  Clock,
  Globe,
  Building2,
  User,
  Layers,
  HelpCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { sendUnifiedEmail } from "../services/emailService";
import InzovateConciergeVisual from "../components/InzovateConciergeVisual";
import SEO from "../components/SEO";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const inquiryCategories = [
  "Services Request (Software, Cloud, AI, Security)",
  "Product Inquiry / Demo (ERP, CRM, Billing)",
  "Strategic Partnership",
];

const getWordCount = (text: string) => {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
};

const locations = [
  {
    city: "Bhavani",
    desc: "Primary office and headquarters region",
    tag: "Tamil Nadu, India",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=INZOVATE+TECHNOLOGIES+Pvt.+Ltd.,+Rajalakshmi+Complex,+NH+47,+Main+Road,+near+New+Bus+Stand,+Bhavani,+Tamil+Nadu+638301",
  },
  {
    city: "Coimbatore",
    desc: "Regional operations",
    tag: "Tamil Nadu, India",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Brenton,+GRAND+BRENTON,+Bus+Stop,+281,+Avinashi+Rd,+next+to+Varadharaja+Mills,+Periyar+Nagar,+Coimbatore,+Tamil+Nadu+641004",
  },
  {
    city: "Tiruchengode",
    desc: "Technology delivery center",
    tag: "Tamil Nadu, India",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=INZOVATE+TECHNOLOGIES+Pvt.+Ltd.,+NO:309,+Mercury+Block+KSRCE+Neo,+R-NO:309,+Tiruchengode,+Tamil+Nadu+637215",
  },
  {
    city: "Salem",
    desc: "Business development",
    tag: "Tamil Nadu, India",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Salem+ELCO-SEZ+IT+Park,+P424%2B76G,+Dalmiya+colony,+Jagir+Ammapalayam,+Vellakalpatti,+Salem,+Tamil+Nadu+636012",
  },
];

const contactInfoItems = [
  {
    id: "enquiry_email",
    label: "Services & Product Quotes",
    value: "inzovatetechnologies@gmail.com",
    subtext: "Service, Product & Business Enquiries",
    href: "mailto:inzovatetechnologies@gmail.com",
    icon: Mail,
    badgeColor: "from-blue-500/20 to-cyan-500/20 text-[#38bdf8] border-blue-500/30",
  },
  {
    id: "careers_email",
    label: "Careers & Internships",
    value: "inzovatetech@gmail.com",
    subtext: "Resumes, Job & Internship Applications",
    href: "mailto:inzovatetech@gmail.com",
    icon: Mail,
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "phone",
    label: "Call Us",
    value: "+91 9342008797",
    subtext: "Direct Support & Operations",
    href: "tel:+919342008797",
    icon: Phone,
    badgeColor: "from-cyan-500/20 to-emerald-500/20 text-cyan-400 border-cyan-500/30",
  },
  {
    id: "hours",
    label: "Working Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    subtext: "Indian Standard Time (IST)",
    icon: Clock,
    badgeColor: "from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/30",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactFormRef = useRef<HTMLDivElement>(null);
  const [formAnimated, setFormAnimated] = useState(false);
  const locationsCardRef = useRef<HTMLDivElement>(null);
  const [locationsAnimated, setLocationsAnimated] = useState(false);
  const legalCardRef = useRef<HTMLDivElement>(null);
  const [legalAnimated, setLegalAnimated] = useState(false);
  const channelsRef = useRef<HTMLDivElement>(null);
  const [channelsAnimated, setChannelsAnimated] = useState(false);

  useEffect(() => {
    const scrollObserverOptions: IntersectionObserverInit = {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px",
    };

    const formObserver = new IntersectionObserver(([entry]) => {
      setFormAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (contactFormRef.current) {
      formObserver.observe(contactFormRef.current);
    }

    const locationsObserver = new IntersectionObserver(([entry]) => {
      setLocationsAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (locationsCardRef.current) {
      locationsObserver.observe(locationsCardRef.current);
    }

    const legalObserver = new IntersectionObserver(([entry]) => {
      setLegalAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (legalCardRef.current) {
      legalObserver.observe(legalCardRef.current);
    }

    const channelsObserver = new IntersectionObserver(([entry]) => {
      setChannelsAnimated(entry.isIntersecting);
    }, scrollObserverOptions);

    if (channelsRef.current) {
      channelsObserver.observe(channelsRef.current);
    }

    return () => {
      formObserver.disconnect();
      locationsObserver.disconnect();
      legalObserver.disconnect();
      channelsObserver.disconnect();
    };
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.service.trim()) e.service = "Required - Please select an inquiry purpose";
    
    const wordCount = getWordCount(form.message);
    if (!form.message.trim()) {
      e.message = "Required";
    } else if (wordCount > 50) {
      e.message = "Message must not exceed 50 words";
    }
    return e;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setStatus("loading");

    const success = await sendUnifiedEmail({
      form_type: "Let's Talk Inquiry",
      full_name: form.name,
      company_name: form.company,
      email: form.email,
      phone: form.phone,
      inquiry_purpose: form.service,
      subject: form.subject || `Inquiry: ${form.service}`,
      message: form.message,
      product: "",
      service: form.service,
      company_size: "",
      resume_file_name: "None",
      resume_file_size: "N/A",
      resume_url_or_data: "None",
    });

    if (success) {
      setStatus("success");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("error");
    }
  };


  const field = (
    id: keyof typeof form,
    label: string,
    type = "text",
    placeholder = "",
    required = false,
    Icon?: React.ElementType,
    nameAttr?: string
  ) => (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-700" htmlFor={id}>
        {Icon && <Icon className="w-3.5 h-3.5 text-blue-600" />}
        <span>{label}</span>
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          name={nameAttr || id}
          type={type}
          placeholder={placeholder}
          value={form[id]}
          onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
          className={`w-full px-4 py-3.5 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 bg-white border ${
            errors[id]
              ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-slate-300 hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          } focus:outline-none transition-all duration-200 shadow-xs`}
        />
      </div>
      {errors[id] && <p className="text-[11.5px] font-medium text-red-500 mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <main className="bg-[#FFFFFF] text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white overflow-hidden">
      <SEO
        title="Contact Us | INZOVATE TECHNOLOGIES PRIVATE LIMITED"
        description="Get in touch with INZOVATE TECHNOLOGIES PRIVATE LIMITED. Contact our offices in Bhavani, Salem, Tiruchengode, and Coimbatore for software and IT consulting."
        canonical="https://inzovate-technologies.com/contact"
        keywordString="Inzovate Technologies, Contact Inzovate Technologies, software company address Bhavani, IT office Salem, tech company email, software consultation Tamil Nadu"
        pageType="website"
      />
      {/* ==================================================
          2. HERO SECTION: ZOHO CONCIERGE (.find-way.navactive)
         ================================================== */}
      <section className="find-way navactive">
        <div className="wrapper flx">
          {/* Left Column: Inzovate Concierge Animated Visual */}
          <div className="zh-cntn-lt home-banner-animate animate">
            <div className="fade-left">
              <InzovateConciergeVisual />
            </div>
          </div>

          {/* Right Column: Zoho Concierge Details & Action */}
          <div className="zh-cntn-rt home-banner-animate animate">
            <div className="fade-left">
              <p className="green-color">I’m New Here</p>
              <h2 className="find-way-title">
                Find your way around Inzovate with Concierge
              </h2>
            </div>
            <p className="find-way-rgt-txt fade-right delay-1">
              Not sure which Inzovate product or enterprise solution is the right fit for your company? No
              worries. We'll work with you to determine what solutions will best suit your business.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. MAIN CONTACT AREA (Two-Column Layout)
         ================================================== */}
      <section className="relative pb-24 pt-4 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: SEND A MESSAGE CONTACT FORM (Col 7) */}
            <div className="lg:col-span-7 scroll-mt-32" id="contact-form">
              <div
                ref={contactFormRef}
                className={`content-wrap newmrhomebox services-section bottom-animated top-animated middle-animated relative p-6 sm:p-8 lg:p-10 rounded-[22px] border border-slate-200 bg-white shadow-md transition-all duration-700 ${
                  formAnimated ? "animate opacity-100 translate-y-0" : "opacity-90 translate-y-2"
                }`}
              >
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-16 px-4"
                  >
                    <div className="p-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mb-6 shadow-sm">
                      <CheckCircle size={54} />
                    </div>
                    <h2
                      className="text-3xl font-extrabold text-[#0F172A] mb-3 tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Message Received
                    </h2>
                    <p className="text-slate-600 max-w-md text-base leading-relaxed">
                      Our team will get back to you shortly. Thank you for reaching out to INZOVATE TECHNOLOGIES.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          service: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-8 px-8 py-3.5 rounded-xl bg-[#1746A2] hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition-all duration-200 flex items-center gap-2"
                    >
                      Send Another Message
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} noValidate className="relative z-10 space-y-6">
                    <input type="hidden" name="form_type" value="Let's Talk Inquiry" />

                    {/* Form Header */}
                    <div className="border-b border-slate-200 pb-6 mb-2 services-fade-down">
                      <h2
                        className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Send a Message
                      </h2>
                      <p className="mt-2 text-sm text-slate-500">
                        Fill out the form and we’ll get back to you as soon as possible.
                      </p>
                    </div>

                    {/* Desktop 2-Column Fields Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 services-fade-down services-delay-1">
                      {field("name", "Full Name", "text", "Enter your full name", true, User, "full_name")}
                      {field("company", "Company", "text", "Enter your company name", false, Building2, "company_name")}
                      {field("email", "Email", "email", "Enter your email address", true, Mail, "email")}
                      {field("phone", "Phone", "tel", "Enter your phone number", false, Phone, "phone")}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 services-fade-down services-delay-2">
                      {/* Service / Category Dropdown (Mandatory) */}
                      <div className="space-y-1.5">
                        <label className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-700">
                          <Layers className="w-3.5 h-3.5 text-blue-600" />
                          <span>Inquiry Purpose</span>
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="inquiry_purpose"
                          value={form.service}
                          onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                          className={`w-full px-4 py-3.5 rounded-xl text-sm text-[#0F172A] bg-white border ${
                            errors.service
                              ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                              : "border-slate-300 hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                          } focus:outline-none transition-all duration-200 appearance-none cursor-pointer shadow-xs`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%3c64748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: `right 1rem center`,
                            backgroundRepeat: `no-repeat`,
                            backgroundSize: `1.2em 1.2em`,
                          }}
                        >
                          <option value="" className="text-slate-400">
                            Select category (Services, Product, Partnership)
                          </option>
                          {inquiryCategories.map((c) => (
                            <option key={c} value={c} className="text-slate-800">
                              {c}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-[11.5px] font-medium text-red-500 mt-1">{errors.service}</p>
                        )}
                      </div>

                      {field("subject", "Subject", "text", "How can we help you?", false, HelpCircle, "subject")}
                    </div>

                    {/* Message Textarea (50 Word Limit) */}
                    <div className="space-y-1.5 services-fade-down services-delay-3">
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-700" htmlFor="message">
                          <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                          <span>Message</span>
                          <span className="text-red-500">*</span>
                        </label>
                        <span className={`text-[11.5px] font-medium ${getWordCount(form.message) >= 50 ? "text-amber-600 font-semibold" : "text-slate-500"}`}>
                          {getWordCount(form.message)} / 50 words
                        </span>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your requirements (maximum 50 words)..."
                        value={form.message}
                        onChange={(e) => {
                          const val = e.target.value;
                          const words = val.trim() ? val.trim().split(/\s+/) : [];
                          if (words.length <= 50) {
                            setForm((f) => ({ ...f, message: val }));
                          } else {
                            // Enforce strict 50 words limit
                            const truncated = words.slice(0, 50).join(" ");
                            setForm((f) => ({ ...f, message: truncated }));
                          }
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl text-sm text-[#0F172A] placeholder:text-slate-400 bg-white border ${
                          errors.message
                            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : "border-slate-300 hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        } focus:outline-none transition-all duration-200 shadow-xs resize-none`}
                      />
                      {errors.message && <p className="text-[11.5px] font-medium text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit CTA Button */}
                    <div className="services-fade-down services-delay-4">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#1746A2] to-[#2563EB] text-white font-bold text-base tracking-wide shadow-[0_4px_24px_rgba(23,70,162,0.45)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer border border-white/20"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={18} className="animate-spin text-white" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </div>

                    {status === "error" && (
                      <p className="text-center text-red-400 text-sm mt-3 font-medium">
                        Something went wrong. Please try again.
                      </p>
                    )}

                  </form>
                )}

              </div>
            </div>

            {/* RIGHT COLUMN: OUR LOCATIONS & LEGAL (Col 5) */}
            <div className="lg:col-span-5 space-y-8">
              {/* 7. OUR LOCATIONS CARD */}
              <div
                ref={locationsCardRef}
                className={`homewhatweboxbg whatareyou-animate p-6 sm:p-8 rounded-[22px] border border-slate-200 bg-white shadow-md transition-all duration-700 ${
                  locationsAnimated ? "animate" : ""
                }`}
              >
                <div className="mb-6 fade-left">
                  <h3
                    className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Our Locations
                  </h3>
                </div>

                {/* 4 Location Mini-Cards (Clickable to Google Maps) */}
                <div className="space-y-3.5">
                  {locations.map(({ city, desc, tag, mapUrl }, idx) => (
                    <a
                      key={city}
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group block p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50/50 hover:border-blue-300 transition-all duration-200 shadow-xs fade-right delay-${Math.min(idx + 1, 4)}`}
                    >
                      <div className="min-w-0">
                        <p className="font-bold text-base text-[#0F172A] tracking-wide group-hover:text-blue-700 transition-colors">{city}</p>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-snug">{desc}</p>
                        <p className="text-[11.5px] font-semibold text-blue-600 mt-1.5 flex items-center gap-1">
                          <span>{tag}</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-blue-600 transition-colors">• Open Map</span>
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* 8. LEGAL INFORMATION CARD */}
              <div
                ref={legalCardRef}
                className={`homewhatweboxbg whatareyou-animate p-6 sm:p-8 rounded-[22px] border border-slate-200 bg-white shadow-md transition-all duration-700 ${
                  legalAnimated ? "animate" : ""
                }`}
              >
                <div className="mb-4 fade-left">
                  <h4
                    className="text-lg font-bold text-[#0F172A] tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Legal
                  </h4>
                </div>

                <div className="space-y-2 text-xs sm:text-sm border-t border-slate-100 pt-4 fade-right delay-1">
                  <p className="font-bold text-slate-800 tracking-wide text-sm sm:text-base">
                    INZOVATE TECHNOLOGIES PRIVATE LIMITED
                  </p>
                  <p className="text-slate-600 font-mono text-xs">
                    <span className="text-slate-400 font-sans">CIN:</span> U62011TZ2025PTC036328
                  </p>
                  <p className="text-slate-600 text-xs">
                    <span className="text-slate-400">Established:</span> June 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              9. CONTACT INFORMATION STRIP (Redesigned Interactive Tech Cards)
             ================================================== */}
          <div className="mt-16">
            <div
              ref={channelsRef}
              className={`space-y-4 newmrhomebox flipbox-section ${channelsAnimated ? "animate" : ""}`}
            >
              <div className="flex items-center justify-between px-2 flipbox-fade-down">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                    Direct Communication Channels
                  </p>
                </div>
                <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
                  INZOVATE TECHNOLOGIES PRIVATE LIMITED
                </span>
              </div>

              {/* 4 Interactive Tech Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {contactInfoItems.map((item, idx) => {
                  const ItemIcon = item.icon;
                  const content = (
                    <div className={`group relative h-full p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden flipbox-fade-down flipbox-delay-${Math.min(idx + 1, 8)}`}>
                      <div>
                        {/* Top Bar: Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:scale-105 transition-all duration-200"
                          >
                            <ItemIcon size={20} />
                          </div>
                        </div>

                        {/* Label & Primary Value */}
                        <p className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500">
                          {item.label}
                        </p>
                        <p className="text-[12px] sm:text-[13px] xl:text-[14px] font-bold text-[#0F172A] group-hover:text-blue-700 transition-colors mt-1 whitespace-nowrap overflow-hidden text-ellipsis leading-tight tracking-tight">
                          {item.value}
                        </p>
                      </div>

                      {/* Sub-text / Action Footer */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-slate-500">
                          {item.subtext}
                        </span>
                        {item.href && (
                          <span className="text-[11px] font-bold text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Connect <ArrowRight size={12} />
                          </span>
                        )}
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.id}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block focus:outline-none h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.id} className="h-full">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
