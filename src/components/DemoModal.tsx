import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2, Briefcase, FileText, Upload, Trash2 } from "lucide-react";
import { submitCareersForm } from "../services/careersSubmissionService";
import { sendUnifiedEmail } from "../services/emailService";

const products = ["ERP", "CRM", "SCM", "Billing", "HRM", "Business Intelligence"];
const servicesList = [
  "Web & Web Application Development",
  "Software Development",
  "UI/UX Design",
  "Cloud Computing",
  "AWS Cloud Services",
  "AI & Machine Learning",
  "Business Automation",
  "Cybersecurity",
  "Data Analytics",
  "Enterprise Application Development",
  "Mobile Application Development",
  "DevOps & CI/CD",
  "Technical Consulting",
  "Digital Transformation",
  "IT Infrastructure & Support",
  "General Technology Service Inquiry",
];
const companySizes = ["1–10", "11–50", "51–200", "201–1000", "1000+"];
const jobPositions = [
  "Full Stack Developer",
  "React Developer",
  "Cloud Engineer",
  "UI/UX Designer",
  "Business Development Executive",
  "HR / Talent Acquisition Executive",
  "Data Analyst",
  "AI & Machine Learning Engineer",
  "General Job Application",
];
const experienceLevels = ["0–2 Years", "2–4 Years", "4–6 Years", "6+ Years", "Fresher"];

interface Props {
  open: boolean;
  onClose: () => void;
  defaultProduct?: string;
  isJobApplication?: boolean;
  isServiceInquiry?: boolean;
}

export default function DemoModal({
  open,
  onClose,
  defaultProduct = "",
  isJobApplication = false,
  isServiceInquiry = false,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: defaultProduct,
    position: defaultProduct || "General Job Application",
    experience: "0–2 Years",
    resumeUrl: "",
    size: "",
    message: "",
  });

  const [resumeFile, setResumeFile] = useState<{
    name: string;
    size: string;
    base64: string;
  } | null>(null);

  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setForm((f) => ({
      ...f,
      product: defaultProduct,
      position: defaultProduct || "General Job Application",
    }));
    setState("idle");
    setErrors({});
    setResumeFile(null);
  }, [defaultProduct, open]);

  const handleModalFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resumeUrl: "File size must be under 10MB" }));
      return;
    }

    const formatSize = (bytes: number) => {
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      const formattedSize = formatSize(file.size);
      setResumeFile({
        name: file.name,
        size: formattedSize,
        base64: base64,
      });
      setForm((f) => ({ ...f, resumeUrl: `${file.name} (${formattedSize})` }));
    };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      product: defaultProduct,
      position: defaultProduct || "General Job Application",
      experience: "0–2 Years",
      resumeUrl: "",
      size: "",
      message: "",
    });
    setResumeFile(null);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";

    if (isJobApplication) {
      if (!form.position) e.position = "Select a position";
    } else {
      if (!form.company.trim()) e.company = "Required";
      if (!form.product) e.product = isServiceInquiry ? "Select a service" : "Select a product";
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
    setState("loading");

    if (isJobApplication) {
      try {
        const finalMessage = resumeFile
          ? `${form.message}\n\n[ATTACHED RESUME FILE]: ${resumeFile.name} (${resumeFile.size})`
          : form.message;

        const result = await submitCareersForm({
          name: form.name,
          email: form.email,
          phone: form.phone,
          experience: form.experience,
          position: form.position,
          resumeUrl: form.resumeUrl || (resumeFile ? `${resumeFile.name} (${resumeFile.size})` : "Not provided"),
          resumeBase64: resumeFile?.base64 || "",
          resumeFileName: resumeFile?.name || "",
          message: finalMessage,
        });

        if (result.success) {
          setState("success");
          resetForm();
        } else {
          setState("error");
        }
      } catch (err) {
        console.error("Careers submission error:", err);
        setState("error");
      }
    } else if (isServiceInquiry) {
      // SERVICE FORM -> Service Consultation
      const success = await sendUnifiedEmail({
        form_type: "Service Consultation",
        full_name: form.name,
        email: form.email,
        phone: form.phone,
        company_name: form.company,
        service: form.product,
        product: "",
        company_size: form.size,
        inquiry_purpose: "",
        subject: "",
        message: form.message,
      });

      if (success) {
        setState("success");
        resetForm();
      } else {
        setState("error");
      }
    } else {
      // PRODUCT FORM -> Product Demo Request
      const success = await sendUnifiedEmail({
        form_type: "Product Demo Request",
        full_name: form.name,
        email: form.email,
        phone: form.phone,
        company_name: form.company,
        product: form.product,
        service: "",
        company_size: form.size,
        inquiry_purpose: "",
        subject: "",
        message: form.message,
      });

      if (success) {
        setState("success");
        resetForm();
      } else {
        setState("error");
      }
    }
  };

  const field = (
    id: keyof typeof form,
    label: string,
    type = "text",
    placeholder = "",
    nameAttr?: string
  ) => (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={nameAttr || id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all duration-200"
        style={{ borderColor: errors[id] ? "#ef4444" : undefined }}
      />
      {errors[id] && <p className="text-[11px] font-medium text-red-500 mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto bg-white border border-slate-200 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] text-slate-900"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {state === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  {isJobApplication
                    ? "Application Submitted!"
                    : isServiceInquiry
                    ? "Service Inquiry Received!"
                    : "Request Received"}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                  {isJobApplication
                    ? "Thank you for applying to INZOVATE TECHNOLOGIES. Our HR team will review your application and contact you soon."
                    : isServiceInquiry
                    ? "Thank you for reaching out. Our technical solutions team will review your requirements and get back to you within 24 hours."
                    : "Thank you! Your request has been submitted successfully."}
                </p>
                <button
                  onClick={() => {
                    onClose();
                    setState("idle");
                  }}
                  className="mt-8 px-8 py-3 rounded-full bg-[#1746A2] hover:bg-blue-600 text-white text-sm font-semibold transition-colors shadow-md cursor-pointer"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} noValidate>
                {/* Hidden form_type parameter */}
                <input
                  type="hidden"
                  name="form_type"
                  value={
                    isJobApplication
                      ? "Job Application"
                      : isServiceInquiry
                      ? "Service Consultation"
                      : "Product Demo Request"
                  }
                />

                <div className="flex items-center gap-2.5 mb-2">
                  {isJobApplication ? (
                    <Briefcase size={22} className="text-[#1746A2]" />
                  ) : !isServiceInquiry ? (
                    <FileText size={22} className="text-[#1746A2]" />
                  ) : null}
                  <h2
                    className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {isJobApplication
                      ? "Apply for Position"
                      : isServiceInquiry
                      ? "Request Service Consultation"
                      : "Request a Demo"}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {isJobApplication
                    ? "Join our technology team. Fill in your details below to apply for your desired position."
                    : isServiceInquiry
                    ? "Tell us about your project requirements and our engineering team will get back to you."
                    : "Tell us about your needs and we'll set up a personalized walkthrough."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {field("name", "Full Name *", "text", "Jane Smith", "full_name")}
                  {field("email", "Email Address *", "email", "jane@company.com", "email")}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {field("phone", "Phone Number", "tel", "+91 98765 43210", "phone")}
                  {!isJobApplication ? (
                    field("company", "Company Name *", "text", "Acme Corp", "company_name")
                  ) : (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Experience Level
                      </label>
                      <select
                        name="experience_level"
                        value={form.experience}
                        onChange={(e) => setForm((f) => ({ ...f, experience: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] hover:border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all duration-200 cursor-pointer"
                      >
                        {experienceLevels.map((exp) => (
                          <option key={exp} value={exp} className="text-slate-900 bg-white">
                            {exp}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {isJobApplication ? (
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Position Applying For *
                      </label>
                      <select
                        name="position"
                        value={form.position}
                        onChange={(e) => setForm((f) => ({ ...f, position: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] hover:border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all duration-200 cursor-pointer"
                        style={{ borderColor: errors.position ? "#ef4444" : undefined }}
                      >
                        <option value="" className="text-slate-500 bg-white">Select position…</option>
                        {jobPositions.map((pos) => (
                          <option key={pos} value={pos} className="text-slate-900 bg-white">
                            {pos}
                          </option>
                        ))}
                      </select>
                      {errors.position && <p className="text-[11px] font-medium text-red-500 mt-1">{errors.position}</p>}
                    </div>

                    {/* Resume File Upload (PDF / DOC / DOCX) */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Upload Resume / CV (PDF, DOC, DOCX)
                      </label>
                      {!resumeFile ? (
                        <label className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-sm text-slate-700 cursor-pointer hover:border-blue-500 hover:bg-blue-50/40 transition-all duration-200">
                          <span className="text-xs text-slate-500">Attach PDF, DOC, DOCX file (Max 10MB)</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-md flex items-center gap-1.5">
                            <Upload size={14} /> Upload File
                          </span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                            onChange={handleModalFileChange}
                            className="hidden"
                          />
                        </label>
                      ) : (
                        <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-800">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <CheckCircle size={16} className="text-emerald-600 flex-shrink-0" />
                            <span className="truncate text-xs font-semibold">{resumeFile.name}</span>
                            <span className="text-[10px] text-emerald-600">({resumeFile.size})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setResumeFile(null);
                              setForm((f) => ({ ...f, resumeUrl: "" }));
                            }}
                            className="text-xs text-rose-600 hover:text-rose-700 font-bold ml-2 flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 size={14} /> Remove
                          </button>
                        </div>
                      )}
                    </div>

                    {field("resumeUrl", "Or Resume / Portfolio URL", "url", "https://linkedin.com/in/yourprofile or Drive link", "resume_url")}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Service Required Card with Pop-Up & Shadow Animation on Hover */}
                    <div className="p-3 rounded-2xl border border-slate-200/90 bg-white hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(37,99,235,0.12)] group">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 group-hover:text-blue-700 transition-colors">
                        {isServiceInquiry ? "Service Required *" : "Product *"}
                      </label>
                      <select
                        name={isServiceInquiry ? "service" : "product"}
                        value={form.product}
                        onChange={(e) => setForm((f) => ({ ...f, product: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all duration-200 cursor-pointer"
                        style={{ borderColor: errors.product ? "#ef4444" : undefined }}
                      >
                        <option value="" className="text-slate-500 bg-white">{isServiceInquiry ? "Select service…" : "Select…"}</option>
                        {(isServiceInquiry ? servicesList : products).map((item) => (
                          <option key={item} value={item} className="text-slate-900 bg-white">
                            {item}
                          </option>
                        ))}
                      </select>
                      {errors.product && <p className="text-[11px] font-medium text-red-500 mt-1">{errors.product}</p>}
                    </div>

                    {/* Company Size Card with Pop-Up & Shadow Animation on Hover */}
                    <div className="p-3 rounded-2xl border border-slate-200/90 bg-white hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(37,99,235,0.12)] group">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 group-hover:text-blue-700 transition-colors">
                        Company Size
                      </label>
                      <select
                        name="company_size"
                        value={form.size}
                        onChange={(e) => setForm((f) => ({ ...f, size: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all duration-200 cursor-pointer"
                      >
                        <option value="" className="text-slate-500 bg-white">Select…</option>
                        {companySizes.map((s) => (
                          <option key={s} value={s} className="text-slate-900 bg-white">
                            {s} employees
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {isJobApplication ? "Cover Letter / Notes" : "Project Message / Requirements"}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder={
                      isJobApplication
                        ? "Tell us about your technical skills, experience and background…"
                        : isServiceInquiry
                        ? "Tell us about your project scope, tech stack, timeline or custom requirements…"
                        : "Tell us about your requirements…"
                    }
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F172A] placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full py-3.5 rounded-xl bg-[#1746A2] hover:bg-blue-600 text-white font-bold text-sm hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
                >
                  {state === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Processing…
                    </>
                  ) : isJobApplication ? (
                    "Submit Application"
                  ) : isServiceInquiry ? (
                    "Request Consultation"
                  ) : (
                    "Request Demo"
                  )}
                </button>

                {state === "error" && (
                  <p className="text-center text-red-500 text-sm font-medium mt-3">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
