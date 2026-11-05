import { useState, useId, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Check,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  Info,
  ShieldCheck,
  RefreshCw,
  CheckCircle2,
  Lock,
  Calendar,
  Bell,
  CreditCard,
  Building2,
  Copy,
  Download,
  Smartphone,
  QrCode,
  Sparkles,
  Star,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { COUNTRIES } from "../data/countries";
import {
  GPayIcon,
  PhonePeIcon,
  PaytmIcon,
  BhimIcon,
  CredIcon,
  UpiLogo,
  PayPalIcon,
} from "./UpiIcons";
import {
  processUpiMandateRegistration,
  calculateTrialDates,
  generateUpiMandateUrl,
  UpiMandateReceipt,
  TrialCustomerData,
} from "../services/paymentService";
import { PAYMENT_CONFIG } from "../config/paymentConfig";
import { generatePdfReceipt } from "../utils/pdfReceiptGenerator";
import { InzovateFaviconIcon } from "./InzovateBrandIcon";

// ── Pure White & Champagne Gold Luxury Color Tokens ─────────────────────────
const C = {
  bg: "#FFFFFF",
  bgSec: "#FFFFFF",
  card: "#FFFFFF",
  cardPrem: "#FFFFFF",
  gold: "#2563EB",
  goldLux: "#2563EB",
  goldLight: "#3B82F6",
  goldPale: "#2563EB",
  textPrim: "#0F172A",
  textSec: "#64748B",
  border: "#E2E8F0",
  success: "#2F855A",
  error: "#C53030",
};

const GOLD_GRADIENT = "#0F172A";

// ── Feature Flag: Set to true in future to restore the ₹0 UPI Setup Step ─────
const ENABLE_UPI_STEP = false;

export interface PricingPlan {
  id: "starter" | "professional" | "enterprise";
  name: string;
  price: number;
  period: string;
  trialDays: number;
  tagline: string;
  features: string[];
}

interface Props {
  open: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan | null;
}

export default function FreeTrialModal({ open, onClose, selectedPlan }: Props) {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const handleOpenDashboard = () => {
    close();
    navigate("/products");
  };

  // Step 1 Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [isPwFocused, setIsPwFocused] = useState(false); // Controls dynamic display of password requirements
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false); // Strictly requires user acceptance
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Step 2 UPI Payment state
  const [upiMethod, setUpiMethod] = useState<"apps" | "vpa" | "qr">("apps");
  const [selectedApp, setSelectedApp] = useState("gpay");
  const [vpaId, setVpaId] = useState("");
  const [busy, setBusy] = useState(false);
  const [receipt, setReceipt] = useState<UpiMandateReceipt | null>(null);
  const [copied, setCopied] = useState(false);

  // Dedicated UPI App interactive Pop-up state
  const [showAppPopup, setShowAppPopup] = useState(false);
  const [activePopupApp, setActivePopupApp] = useState<any>(null);

  const uid = {
    name: useId(),
    email: useId(),
    pw: useId(),
    phone: useId(),
    country: useId(),
    terms: useId(),
    vpa: useId(),
  };

  const planName = selectedPlan?.name || "Professional";
  const planPrice = selectedPlan?.price || 1400;
  const trialDays = selectedPlan?.trialDays || 15;
  const { trialEndDate, reminderDate } = calculateTrialDates(trialDays);

  // ── Password Requirement Checks ────────────────────────────────────────────
  const pwCriteria = useMemo(() => {
    return {
      minLen: password.length >= 8,
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };
  }, [password]);

  const isPasswordValid =
    pwCriteria.minLen &&
    pwCriteria.hasUpper &&
    pwCriteria.hasLower &&
    pwCriteria.hasNumber &&
    pwCriteria.hasSpecial;

  // ── Reset ──────────────────────────────────────────────────────────────────
  const reset = () => {
    setStep(1);
    setBusy(false);
    setErrors({});
    setReceipt(null);
    setShowAppPopup(false);
    setIsPwFocused(false);
  };

  const close = () => {
    reset();
    onClose();
  };

  // ── Strict Form Validation ────────────────────────────────────────────────
  const validate = () => {
    const e: Record<string, string> = {};

    // 1. Full Name
    if (!fullName.trim()) {
      e.name = "Full name is required.";
    }

    // 2. Email Validation (Strict RFC regex)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      e.email = "Email address is required.";
    } else if (!emailRegex.test(email.trim())) {
      e.email = "Please enter a valid email address with @ and domain (e.g. name@company.com).";
    }

    // 3. Password Restrictions
    if (!password) {
      e.pw = "Password is required.";
    } else if (!isPasswordValid) {
      e.pw = "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
    }

    // 4. Phone Number (Strict 10 Digits)
    const cleanDigits = phone.replace(/\D/g, "");
    if (!cleanDigits) {
      e.phone = "Phone number is required.";
    } else if (cleanDigits.length !== 10) {
      e.phone = "Phone number must be exactly 10 digits.";
    }

    // 5. Terms & Conditions Checkbox
    if (!agreed) {
      e.terms = "You must agree to the Terms of Service and Privacy Policy to proceed.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePhoneChange = (val: string) => {
    // Strictly restrict input to maximum 10 numeric digits only
    const digitsOnly = val.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
    if (errors.phone && digitsOnly.length === 10) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (errors.email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(val.trim())) {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (ENABLE_UPI_STEP) {
      setStep(2);
    } else {
      authorizeMandate("direct@inzovate", "Instant Setup");
    }
  };

  // ── UPI Apps Metadata with Real Vector Icons & Colors ───────────────────────
  const upiApps = [
    {
      id: "gpay",
      label: "Google Pay",
      tagline: "Pay instantly via Tez / GPay UPI",
      icon: <GPayIcon className="w-8 h-8" />,
      accentColor: "#4285F4",
      defaultVpa: `${phone || "yourmobile"}@okaxis`,
    },
    {
      id: "phonepe",
      label: "PhonePe",
      tagline: "Authorize ₹0 Mandate on PhonePe",
      icon: <PhonePeIcon className="w-8 h-8" />,
      accentColor: "#5f259f",
      defaultVpa: `${phone || "yourmobile"}@ybl`,
    },
    {
      id: "paytm",
      label: "Paytm UPI",
      tagline: "Paytm Payments Bank & UPI AutoPay",
      icon: <PaytmIcon className="w-8 h-8" />,
      accentColor: "#00baf2",
      defaultVpa: `${phone || "yourmobile"}@paytm`,
    },
    {
      id: "bhim",
      label: "BHIM UPI",
      tagline: "National Payments Corporation of India",
      icon: <BhimIcon className="w-8 h-8" />,
      accentColor: "#f37021",
      defaultVpa: `${phone || "yourmobile"}@upi`,
    },
    {
      id: "paypal",
      label: "PayPal",
      tagline: "Pay with PayPal Wallet & Global UPI",
      icon: <PayPalIcon className="w-8 h-8" />,
      accentColor: "#0079C1",
      defaultVpa: `${email || "client@paypal.com"}`,
      launchUrl: "https://www.paypal.com/signin",
    },
  ];

  const handleAppClick = (app: (typeof upiApps)[0]) => {
    setSelectedApp(app.id);
    setActivePopupApp(app);
    setVpaId(app.defaultVpa);
    setShowAppPopup(true);
  };

  // ── Authorize Mandate Execution ───────────────────────────────────────────
  const authorizeMandate = async (targetVpa?: string, targetApp?: string) => {
    const finalVpa = targetVpa || vpaId;
    const finalApp = targetApp || selectedApp;

    if (upiMethod === "vpa" && (!finalVpa || !finalVpa.includes("@"))) {
      setErrors({ vpa: "Please enter a valid UPI ID (e.g. yourname@okhdfcbank)" });
      return;
    }

    setErrors({});
    setBusy(true);

    const customer: TrialCustomerData = {
      fullName,
      email,
      phone,
      countryCode,
      password,
      planId: selectedPlan?.id || "professional",
      planName,
      planPrice,
      trialDays,
    };

    try {
      const r = await processUpiMandateRegistration(customer, {
        method: upiMethod,
        upiApp: finalApp,
        vpaId: finalVpa,
      });

      setTimeout(() => {
        setReceipt(r);
        setBusy(false);
        setShowAppPopup(false);
        setStep(3);
      }, 1600);
    } catch {
      setBusy(false);
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          className="fixed inset-0"
          style={{ background: "rgba(41, 39, 34, 0.45)", backdropFilter: "blur(6px)" }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl my-auto z-10 overflow-hidden"
          style={{
            background: "#FFFFFF",
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            boxShadow: `0 20px 50px -10px rgba(41, 39, 34, 0.16)`,
          }}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-20 p-2 rounded-full transition-colors cursor-pointer text-[#64748B] hover:text-[#0F172A]"
            style={{
              background: "#F8FAFC",
              border: `1px solid ${C.border}`,
            }}
            aria-label="Close"
          >
            <X size={16} />
          </button>

          {/* ── HEADER ──────────────────────────────────────────────────────── */}
          <div
            className="relative px-7 pt-7 pb-5"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{
                  background: "rgba(212,175,55,0.1)",
                  border: `1px solid ${C.border}`,
                  color: C.gold,
                }}
              >
                <InzovateFaviconIcon size={12} />
                {planName} Plan
              </span>
              <span
                className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(63,166,107,0.12)",
                  border: `1px solid rgba(63,166,107,0.3)`,
                  color: C.success,
                }}
              >
                ₹0 Due Today · {trialDays}d Free
              </span>
            </div>

            <h3 className="text-xl font-black tracking-tight" style={{ color: C.textPrim }}>
              {step === 1 && `Start your ${trialDays}-day free trial`}
              {step === 2 && "Authorise ₹0 UPI Mandate"}
              {step === 3 && "Trial Activated Successfully"}
            </h3>

            <p className="text-xs mt-1" style={{ color: C.textSec }}>
              {step === 1 && "Fill in your client details below to begin. No card required."}
              {step === 2 && `An RBI-compliant ₹0 mandate verifies your account. Renews on ${trialEndDate}.`}
              {step === 3 && `Your ${planName} CRM is ready to use.`}
            </p>

            {/* Moveable Stepper Header */}
            <div className="flex items-center gap-1 mt-5">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition-all cursor-pointer"
                style={{
                  background: step === 1 ? "rgba(212,175,55,0.15)" : "transparent",
                  border: `1px solid ${step === 1 ? C.gold : step > 1 ? C.border : "transparent"}`,
                }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black"
                  style={{
                    background: (step === 3 || step === 2) ? C.success : step === 1 ? GOLD_GRADIENT : C.bgSec,
                    color: (step === 3 || step === 2) ? "#fff" : step === 1 ? C.bg : C.textSec,
                  }}
                >
                  {(step === 3 || step === 2) ? <Check size={11} strokeWidth={3} /> : 1}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: step === 1 ? C.goldPale : C.textSec }}
                >
                  Account Details
                </span>
              </button>

              {ENABLE_UPI_STEP && (
                <>
                  <div className="w-4 h-px" style={{ background: C.border }} />
                  <button
                    type="button"
                    onClick={() => {
                      if (validate()) setStep(2);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition-all cursor-pointer"
                    style={{
                      background: step === 2 ? "rgba(212,175,55,0.15)" : "transparent",
                      border: `1px solid ${step === 2 ? C.gold : "transparent"}`,
                    }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black"
                      style={{
                        background: step > 2 ? C.success : step === 2 ? GOLD_GRADIENT : C.bgSec,
                        color: step > 2 ? "#fff" : step === 2 ? C.bg : C.textSec,
                      }}
                    >
                      {step > 2 ? <Check size={11} strokeWidth={3} /> : 2}
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: step === 2 ? C.goldPale : C.textSec }}
                    >
                      ₹0 UPI Setup
                    </span>
                  </button>
                </>
              )}

              <div className="w-4 h-px" style={{ background: C.border }} />

              <div
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition-all"
                style={{
                  background: step === 3 ? "rgba(63,166,107,0.15)" : "transparent",
                  border: `1px solid ${step === 3 ? C.success : "transparent"}`,
                }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black"
                  style={{
                    background: step === 3 ? C.success : C.bgSec,
                    color: step === 3 ? "#fff" : C.textSec,
                  }}
                >
                  {ENABLE_UPI_STEP ? 3 : 2}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: step === 3 ? C.success : C.textSec }}
                >
                  Ready
                </span>
              </div>
            </div>
          </div>

          {/* ── MODAL BODY ─────────────────────────────────────────────────── */}
          <div className="px-7 py-6 max-h-[66vh] overflow-y-auto">
            {/* ================= STEP 1: ACCOUNT DETAILS ================= */}
            {step === 1 && (
              <form onSubmit={handleAccountSubmit} className="space-y-4">


                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor={uid.name}
                    className="block text-[11px] font-bold uppercase tracking-[0.15em] mb-1.5"
                    style={{ color: C.textSec }}
                  >
                    Full Name <span style={{ color: C.gold }}>*</span>
                  </label>
                  <input
                    id={uid.name}
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: C.bgSec,
                      border: `1px solid ${errors.name ? C.error : C.border}`,
                      borderRadius: 12,
                      color: C.textPrim,
                    }}
                  />
                  {errors.name && (
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: C.error }}>
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field with Strict Validation */}
                <div>
                  <label
                    htmlFor={uid.email}
                    className="block text-[11px] font-bold uppercase tracking-[0.15em] mb-1.5"
                    style={{ color: C.textSec }}
                  >
                    Work Email <span style={{ color: C.gold }}>*</span>
                  </label>
                  <input
                    id={uid.email}
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: C.bgSec,
                      border: `1px solid ${errors.email ? C.error : C.border}`,
                      borderRadius: 12,
                      color: C.textPrim,
                    }}
                  />
                  {errors.email && (
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: C.error }}>
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field with Dynamic Requirements Checklist (Shows only when user fills password!) */}
                <div>
                  <label
                    htmlFor={uid.pw}
                    className="block text-[11px] font-bold uppercase tracking-[0.15em] mb-1.5"
                    style={{ color: C.textSec }}
                  >
                    Create Password <span style={{ color: C.gold }}>*</span>
                  </label>
                  <div className="relative">
                    <input
                      id={uid.pw}
                      type={showPw ? "text" : "password"}
                      value={password}
                      onFocus={() => setIsPwFocused(true)}
                      onBlur={() => setIsPwFocused(false)}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.pw) setErrors((prev) => ({ ...prev, pw: "" }));
                      }}
                      placeholder="Min 8 characters with upper, lower, number, special"
                      className="w-full px-4 py-3 text-sm pr-11 outline-none transition-all"
                      style={{
                        background: C.bgSec,
                        border: `1px solid ${errors.pw ? C.error : C.border}`,
                        borderRadius: 12,
                        color: C.textPrim,
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw(!showPw)}
                      className="absolute right-3.5 top-3 cursor-pointer"
                      style={{ color: C.textSec }}
                    >
                      {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  {/* Dynamic Password Checklist: APPEARS ONLY WHEN USER FOCUSES OR TYPES IN PASSWORD! */}
                  <AnimatePresence>
                    {(isPwFocused || password.length > 0) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="p-3.5 rounded-xl border text-xs space-y-2 shadow-sm"
                          style={{ background: "#F8FAFC", borderColor: C.border }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider" style={{ color: C.textSec }}>
                              Password Requirements:
                            </span>
                            {isPasswordValid && (
                              <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                                <Check size={11} strokeWidth={3} /> All criteria satisfied
                              </span>
                            )}
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            <div
                              className="flex items-center gap-1.5 transition-colors"
                              style={{ color: pwCriteria.minLen ? C.success : C.textSec }}
                            >
                              <Check size={12} strokeWidth={pwCriteria.minLen ? 3 : 1.5} />
                              <span className={pwCriteria.minLen ? "font-medium" : ""}>8+ Characters</span>
                            </div>
                            <div
                              className="flex items-center gap-1.5 transition-colors"
                              style={{ color: pwCriteria.hasUpper ? C.success : C.textSec }}
                            >
                              <Check size={12} strokeWidth={pwCriteria.hasUpper ? 3 : 1.5} />
                              <span className={pwCriteria.hasUpper ? "font-medium" : ""}>1 Uppercase (A-Z)</span>
                            </div>
                            <div
                              className="flex items-center gap-1.5 transition-colors"
                              style={{ color: pwCriteria.hasLower ? C.success : C.textSec }}
                            >
                              <Check size={12} strokeWidth={pwCriteria.hasLower ? 3 : 1.5} />
                              <span className={pwCriteria.hasLower ? "font-medium" : ""}>1 Lowercase (a-z)</span>
                            </div>
                            <div
                              className="flex items-center gap-1.5 transition-colors"
                              style={{ color: pwCriteria.hasNumber ? C.success : C.textSec }}
                            >
                              <Check size={12} strokeWidth={pwCriteria.hasNumber ? 3 : 1.5} />
                              <span className={pwCriteria.hasNumber ? "font-medium" : ""}>1 Number (0-9)</span>
                            </div>
                            <div
                              className="flex items-center gap-1.5 transition-colors col-span-2"
                              style={{ color: pwCriteria.hasSpecial ? C.success : C.textSec }}
                            >
                              <Check size={12} strokeWidth={pwCriteria.hasSpecial ? 3 : 1.5} />
                              <span className={pwCriteria.hasSpecial ? "font-medium" : ""}>1 Special Character (!@#$%^&*...)</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {errors.pw && (
                    <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: C.error }}>
                      <AlertCircle size={12} /> {errors.pw}
                    </p>
                  )}
                </div>

                {/* Phone Number Field with Strict 10-Digit Limitation */}
                <div>
                  <label
                    className="block text-[11px] font-bold uppercase tracking-[0.15em] mb-1.5"
                    style={{ color: C.textSec }}
                  >
                    Phone Number (10 Digits) <span style={{ color: C.gold }}>*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-[170px] sm:w-[200px] px-3 py-3 text-xs outline-none appearance-none cursor-pointer"
                      style={{
                        background: C.bgSec,
                        border: `1px solid ${C.border}`,
                        borderRadius: 12,
                        color: C.textPrim,
                      }}
                    >
                      {COUNTRIES.map((c, i) => (
                        <option key={i} value={c.code} style={{ background: "#FFFFFF", color: C.textPrim }}>
                          {c.name} ({c.code})
                        </option>
                      ))}
                    </select>

                    <div className="relative flex-1">
                      <input
                        type="tel"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="Enter the phone number"
                        className="w-full px-4 py-3 text-sm outline-none transition-all"
                        style={{
                          background: C.bgSec,
                          border: `1px solid ${errors.phone ? C.error : C.border}`,
                          borderRadius: 12,
                          color: C.textPrim,
                        }}
                      />
                      <span className="absolute right-3 top-3 text-[11px] font-mono text-slate-500 pointer-events-none">
                        {phone.length}/10
                      </span>
                    </div>
                  </div>

                  {errors.phone && (
                    <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: C.error }}>
                      <AlertCircle size={12} /> {errors.phone}
                    </p>
                  )}

                  <div
                    className="flex items-center gap-2 mt-2 text-[11px] px-3 py-2 rounded-xl"
                    style={{
                      background: "rgba(212,175,55,0.06)",
                      border: `1px solid ${C.border}`,
                      color: C.textSec,
                    }}
                  >
                    <Info size={12} style={{ color: C.gold, flexShrink: 0 }} />
                    It looks like you're in India based on your IP.
                  </div>
                </div>

                {/* Terms and Conditions Checkbox (Strictly Enforced) */}
                <div className="pt-1">
                  <label
                    htmlFor={uid.terms}
                    className="flex items-start gap-2.5 cursor-pointer text-xs leading-relaxed select-none"
                    style={{ color: C.textSec }}
                  >
                    <input
                      id={uid.terms}
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => {
                        setAgreed(e.target.checked);
                        if (errors.terms && e.target.checked) {
                          setErrors((prev) => ({ ...prev, terms: "" }));
                        }
                      }}
                      className="mt-0.5 h-4 w-4 rounded accent-amber-500 cursor-pointer"
                    />
                    <span>
                      I agree to the{" "}
                      <a
                        href="/terms"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: C.gold }}
                        className="underline hover:opacity-80"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: C.gold }}
                        className="underline hover:opacity-80"
                      >
                        Privacy Policy
                      </a>
                      . <span style={{ color: C.gold }}>*</span>
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: C.error }}>
                      <AlertCircle size={12} /> {errors.terms}
                    </p>
                  )}
                </div>

                {/* Proceed Button */}
                <button
                  type="submit"
                  disabled={busy}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-md active:scale-[0.99] disabled:opacity-60 cursor-pointer text-white"
                  style={{
                    background: GOLD_GRADIENT,
                    color: "#FFFFFF",
                    boxShadow: "0 4px 16px rgba(41, 39, 34, 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    if (!busy) {
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(41, 39, 34, 0.25)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(41, 39, 34, 0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {busy ? (
                    <>
                      <RefreshCw size={15} className="animate-spin" /> Activating Free Trial…
                    </>
                  ) : (
                    <>
                      <span>{ENABLE_UPI_STEP ? "Proceed to ₹0 UPI Setup" : `Activate ${trialDays}-Day Free Trial`}</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px]" style={{ color: C.textSec }}>
                  <Lock size={11} className="inline mr-1" style={{ color: C.gold }} />
                  {ENABLE_UPI_STEP
                    ? "₹0 deducted today. Complete 100% risk-free activation."
                    : "Instant risk-free activation · No credit card required · 24-hr access"}
                </p>
              </form>
            )}

            {/* ================= STEP 2: ₹0 UPI SETUP & POP-UP METHODS ================= */}
            {step === 2 && (
              <div className="space-y-5">
                {/* Back to Account Details link */}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold py-1 px-3 rounded-lg border transition-all cursor-pointer"
                    style={{
                      borderColor: C.border,
                      color: C.goldPale,
                      background: "rgba(212,175,55,0.06)",
                    }}
                  >
                    <ArrowLeft size={13} /> Back to Account Details
                  </button>
                  <span className="text-[11px]" style={{ color: C.textSec }}>
                    Client: <strong style={{ color: C.textPrim }}>{fullName}</strong> ({phone})
                  </span>
                </div>

                {/* Order Summary Box */}
                <div
                  className="rounded-2xl p-5 space-y-3"
                  style={{ background: C.cardPrem, border: `1px solid ${C.border}` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.gold }}>
                      Order Summary
                    </span>
                    <span
                      className="text-[11px] px-2.5 py-0.5 rounded-full font-bold"
                      style={{
                        background: "rgba(63,166,107,0.15)",
                        color: C.success,
                        border: `1px solid rgba(63,166,107,0.3)`,
                      }}
                    >
                      ₹0 Due Today
                    </span>
                  </div>

                  <div className="space-y-2 text-xs" style={{ color: C.textSec }}>
                    {[
                      ["Plan Selected", planName],
                      ["Trial Period", `${trialDays} Days Free`],
                      ["Trial End Date", trialEndDate],
                      ["Renewal Alert", `${reminderDate} (SMS + Email)`],
                      ["Subsequent Fee", `₹${planPrice.toLocaleString("en-IN")}/user/month`],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span>{k}</span>
                        <span style={{ color: C.textPrim, fontWeight: 600 }}>{v}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="pt-2 border-t flex justify-between font-black text-sm"
                    style={{ borderColor: C.border }}
                  >
                    <span style={{ color: C.textPrim }}>Total Payable Today</span>
                    <span style={{ color: C.success, fontSize: "16px" }}>₹ 0.00</span>
                  </div>
                </div>

                {/* Payment Selection Tabs */}
                <div
                  className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl"
                  style={{ background: C.bgSec, border: `1px solid ${C.border}` }}
                >
                  {[
                    { id: "apps" as const, label: "UPI Apps", icon: <Smartphone size={13} /> },
                    { id: "vpa" as const, label: "UPI ID (VPA)", icon: <CreditCard size={13} /> },
                    { id: "qr" as const, label: "Scan QR", icon: <QrCode size={13} /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setUpiMethod(tab.id)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer"
                      style={{
                        background: upiMethod === tab.id ? GOLD_GRADIENT : "transparent",
                        color: upiMethod === tab.id ? C.bg : C.textSec,
                      }}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Method 1: POP-UP UPI APPS WITH SHADOW EFFECTS & ACTUAL ICONS */}
                {upiMethod === "apps" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold" style={{ color: C.goldPale }}>
                        Choose your UPI App to open authorization pop-up:
                      </p>
                      <span className="text-[10px] text-slate-400">Tap to authorize</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {upiApps.map((app) => {
                        const isSelected = selectedApp === app.id;
                        return (
                          <motion.button
                            key={app.id}
                            type="button"
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAppClick(app)}
                            className="p-4 rounded-2xl text-left border flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden"
                            style={{
                              background: isSelected ? "#EFF6FF" : "#FFFFFF",
                              borderColor: isSelected ? C.gold : C.border,
                              boxShadow: isSelected
                                ? "0 10px 25px -5px rgba(37,99,235,0.25)"
                                : "0 2px 8px rgba(15,23,42,0.05)",
                            }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              {app.icon}
                              <span
                                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                                style={{
                                  background: "rgba(37,99,235,0.08)",
                                  color: C.gold,
                                  border: `1px solid ${C.border}`,
                                }}
                              >
                                Pop-up
                              </span>
                            </div>

                            <div>
                              <div className="text-sm font-black text-white">{app.label}</div>
                              <div className="text-[11px] text-slate-400 line-clamp-1">
                                {app.tagline}
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Method 2: Enter VPA ID */}
                {upiMethod === "vpa" && (
                  <div className="space-y-2">
                    <label
                      htmlFor={uid.vpa}
                      className="block text-[11px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: C.textSec }}
                    >
                      Enter Virtual Payment Address (UPI ID)
                    </label>
                    <div className="relative">
                      <input
                        id={uid.vpa}
                        type="text"
                        value={vpaId}
                        onChange={(e) => setVpaId(e.target.value)}
                        placeholder="yourname@okaxis, 9876543210@paytm"
                        className="w-full px-4 py-3 text-sm outline-none"
                        style={{
                          background: C.bgSec,
                          border: `1px solid ${errors.vpa ? C.error : C.border}`,
                          borderRadius: 12,
                          color: C.textPrim,
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setVpaId(`${phone || "user"}@okaxis`)}
                        className="absolute right-2.5 top-2.5 text-xs font-bold px-2.5 py-1 rounded-lg cursor-pointer"
                        style={{
                          background: "rgba(212,175,55,0.12)",
                          color: C.gold,
                          border: `1px solid ${C.border}`,
                        }}
                      >
                        Auto-fill
                      </button>
                    </div>
                    {errors.vpa && (
                      <p className="text-xs mt-1" style={{ color: C.error }}>
                        {errors.vpa}
                      </p>
                    )}
                  </div>
                )}

                {/* Method 3: QR Code Scan */}
                {upiMethod === "qr" && (
                  <div
                    className="flex flex-col items-center gap-3 p-5 rounded-2xl"
                    style={{ background: C.bgSec, border: `1px solid ${C.border}` }}
                  >
                    <div className="p-3.5 rounded-2xl bg-white shadow-xl">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                          `upi://mandate?pa=${PAYMENT_CONFIG.RECEIVER_UPI_ID}&pn=InzovateTechnologies&am=0.00&cu=INR&tn=${planName}Trial`
                        )}`}
                        alt="UPI QR"
                        className="w-36 h-36 object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-bold" style={{ color: C.gold }}>
                        Scan with Google Pay, PhonePe, or Paytm
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Authorizes ₹0 mandate registration with zero balance deduction.
                      </p>
                    </div>
                  </div>
                )}

                {/* Main Action Button */}
                <button
                  type="button"
                  onClick={() => authorizeMandate()}
                  disabled={busy}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm tracking-widest uppercase transition-all disabled:opacity-50 cursor-pointer text-white"
                  style={{
                    background: GOLD_GRADIENT,
                    color: "#FFFFFF",
                    boxShadow: "0 4px 16px rgba(41, 39, 34, 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    if (!busy) {
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(41, 39, 34, 0.25)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(41, 39, 34, 0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {busy ? (
                    <>
                      <RefreshCw size={15} className="animate-spin" /> Verifying with Bank…
                    </>
                  ) : (
                    <>
                      <ShieldCheck size={16} /> Authorise ₹0 Mandate & Start Trial
                    </>
                  )}
                </button>

                <p className="text-center text-[11px]" style={{ color: C.textSec }}>
                  <Lock size={11} className="inline mr-1" style={{ color: C.gold }} />
                  Secure payment powered by NPCI UPI AutoPay
                </p>
              </div>
            )}

            {/* ================= STEP 3: READY / SUCCESS ================= */}
            {step === 3 && (
              <div className="py-4 text-center space-y-5">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg"
                  style={{
                    background: "rgba(63,166,107,0.15)",
                    border: `2px solid ${C.success}`,
                    color: C.success,
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <div>
                  <h4 className="text-xl font-black tracking-tight" style={{ color: C.textPrim }}>
                    Congratulations, {fullName || "User"}!
                  </h4>
                  <p className="text-sm mt-1" style={{ color: C.textSec }}>
                    Your <span style={{ color: C.gold, fontWeight: 700 }}>{trialDays}-Day Free Trial</span> for{" "}
                    <span style={{ color: C.goldPale, fontWeight: 700 }}>{planName}</span> is officially active.
                  </p>
                  <div
                    className="mt-3 p-3 rounded-xl border text-xs text-left flex items-start gap-2.5"
                    style={{
                      background: "rgba(201,162,39,0.08)",
                      borderColor: C.gold,
                      color: C.goldPale,
                    }}
                  >
                    <Sparkles size={16} className="shrink-0 text-amber-400 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">Premium Access Notice:</strong>
                      Within <strong className="text-amber-300">24 hours</strong>, you will receive your premium CRM access credentials and receipt PDF at <span className="underline text-white">{email}</span>.
                    </div>
                  </div>
                </div>

                {/* Receipt Card */}
                <div
                  className="text-left rounded-2xl p-5 space-y-2.5 text-xs shadow-inner"
                  style={{ background: C.cardPrem, border: `1px solid ${C.border}` }}
                >
                  {[
                    [
                      "Mandate UMRN",
                      <span className="flex items-center gap-1 font-mono" style={{ color: C.success }}>
                        {receipt?.umrn || "UMRN-INZ2026849"}
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(receipt?.umrn || "");
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                          }}
                          className="opacity-70 hover:opacity-100 cursor-pointer"
                        >
                          {copied ? <Check size={11} /> : <Copy size={11} />}
                        </button>
                      </span>,
                    ],
                    ["Charged Today", <span style={{ color: C.success, fontWeight: 700 }}>₹ 0.00</span>],
                    ["Client Email", email],
                    ["Client Phone", `${countryCode} ${phone}`],
                    ["Trial Valid Until", <span style={{ color: C.gold, fontWeight: 700 }}>{trialEndDate}</span>],
                    [
                      "First Renewal",
                      <span style={{ color: C.goldLight }}>
                        {trialEndDate} (₹{planPrice.toLocaleString("en-IN")})
                      </span>,
                    ],
                    ["Payment Method", receipt?.paymentMethod || "UPI AutoPay"],
                  ].map(([k, v], i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between ${i > 0 ? "border-t" : ""} pt-2`}
                      style={{ borderColor: i > 0 ? C.border : "transparent" }}
                    >
                      <span style={{ color: C.textSec }}>{k}</span>
                      <span style={{ color: C.textPrim, fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="flex items-center justify-center gap-2 text-xs rounded-xl px-4 py-2.5"
                  style={{
                    background: "rgba(212,175,55,0.06)",
                    border: `1px solid ${C.border}`,
                    color: C.textSec,
                  }}
                >
                  <Bell size={13} style={{ color: C.gold }} />
                  Renewal reminder alert will be sent on{" "}
                  <strong className="mx-1" style={{ color: C.textPrim }}>
                    {reminderDate}
                  </strong>{" "}
                  via SMS & Email.
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleOpenDashboard}
                    className="flex-1 py-3 px-6 rounded-xl font-bold text-sm tracking-widest uppercase cursor-pointer"
                    style={{ background: GOLD_GRADIENT, color: C.bg }}
                  >
                    Open CRM Dashboard
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (receipt) {
                        generatePdfReceipt(receipt);
                      } else {
                        generatePdfReceipt({
                          success: true,
                          mandateId: "MND-" + Date.now().toString(36).toUpperCase(),
                          umrn: "UMRN-INZ" + Date.now().toString().slice(-8),
                          transactionRef: "TXN-" + Date.now().toString().slice(-6),
                          amountToday: 0,
                          recurringAmount: planPrice,
                          startDate: new Date().toLocaleDateString("en-IN"),
                          trialEndDate,
                          reminderDate,
                          receiverUpiId: PAYMENT_CONFIG.RECEIVER_UPI_ID,
                          receiverName: PAYMENT_CONFIG.RECEIVER_MERCHANT_NAME,
                          customerName: fullName || "Valued Customer",
                          customerEmail: email || "customer@example.com",
                          customerPhone: `${countryCode} ${phone}`,
                          paymentMethod: "UPI AutoPay",
                          timestamp: new Date().toISOString(),
                          planId: selectedPlan?.id || "professional",
                          planName,
                          planPrice,
                          trialDays,
                        });
                      }
                    }}
                    className="flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl text-xs font-semibold cursor-pointer transition-all hover:border-amber-400 hover:text-amber-300"
                    style={{ border: `1px solid ${C.border}`, color: C.goldLight, background: "rgba(212,175,55,0.06)" }}
                  >
                    <Download size={13} /> Download Receipt (PDF)
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* ── DEDICATED UPI APP AUTHORIZATION POP-UP MODAL ────────────────── */}
        <AnimatePresence>
          {showAppPopup && activePopupApp && (
            <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowAppPopup(false)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                className="relative w-full max-w-sm rounded-3xl p-6 shadow-2xl z-20 border bg-white"
                style={{
                  background: "#FFFFFF",
                  borderColor: C.gold,
                  boxShadow: `0 20px 50px -10px rgba(37,99,235,0.25), 0 10px 25px rgba(15,23,42,0.1)`,
                }}
              >
                <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: C.border }}>
                  <div className="flex items-center gap-2">
                    {activePopupApp.icon}
                    <div>
                      <h4 className="text-sm font-black text-slate-900">{activePopupApp.label} Pop-up</h4>
                      <span className="text-[10px] text-emerald-600 font-bold">UPI AutoPay Ready</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAppPopup(false)}
                    className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="py-4 text-center space-y-2">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto shadow-sm"
                    style={{ background: "rgba(37,99,235,0.08)", border: `1px solid ${C.gold}` }}
                  >
                    <Smartphone size={24} style={{ color: C.gold }} />
                  </div>
                  <h5 className="text-base font-black text-slate-900">
                    Approve ₹0 on {activePopupApp.label}
                  </h5>
                  <p className="text-xs text-slate-600">
                    A notification request for ₹0 mandate will be authorized on your registered device.
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      UPI ID for {activePopupApp.label}:
                    </label>
                    <input
                      type="text"
                      value={vpaId}
                      onChange={(e) => setVpaId(e.target.value)}
                      placeholder={activePopupApp.defaultVpa}
                      className="w-full px-3 py-2.5 rounded-xl text-xs text-white outline-none border"
                      style={{ background: C.bgSec, borderColor: C.border }}
                    />
                  </div>

                  <a
                    href={generateUpiMandateUrl(
                      {
                        fullName,
                        email,
                        phone,
                        countryCode,
                        planId: selectedPlan?.id || "professional",
                        planName,
                        planPrice,
                        trialDays,
                      },
                      activePopupApp.id
                    )}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition border"
                    style={{
                      background: "rgba(37,99,235,0.08)",
                      borderColor: C.gold,
                      color: C.gold,
                    }}
                  >
                    <span>Launch {activePopupApp.label} App Directly</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => authorizeMandate(vpaId, activePopupApp.id)}
                  disabled={busy}
                  className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer text-white"
                  style={{ background: GOLD_GRADIENT, color: "#FFFFFF" }}
                >
                  {busy ? "Authorizing with Bank..." : `Confirm ₹0 Mandate on ${activePopupApp.label}`}
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>


      </div>
    </AnimatePresence>
  );
}
