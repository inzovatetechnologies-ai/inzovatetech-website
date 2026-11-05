import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import DemoModal from "./DemoModal";
import { InzovateFaviconIcon } from "./InzovateBrandIcon";
import LiquidMetalButton from "./ui/liquid-metal-button";

// "Who We Are?" Dropdown items (Matching Ebix structure: Home, About Us, Company Profile, etc.)
const whoWeAreItems = [
  { name: "Home & Overview", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Company Profile", href: "/company" },
  { name: "Strategic Partnerships", href: "/strategic-partnerships" },
  { name: "Locations Hub", href: "/locations" },
];

// Products Categories with Sub-Items (sideways flyout on hover, clean title links without icons/descriptions)
const productCategories = [
  {
    id: "crm",
    name: "CRM by Industry",
    href: "/crm-by-industry",
    subItems: [
      { name: "CRM for Publishing", href: "/crm-for-publishing" },
      { name: "CRM for Construction", href: "/crm-for-construction" },
      { name: "CRM for Transportation", href: "/crm-for-transportation" },
      { name: "CRM for HR", href: "/crm-for-hr" },
      { name: "CRM for Test Management", href: "/crm-for-test-management" },
    ],
  },
  {
    id: "erp",
    name: "Enterprise ERP",
    href: "/products/erp",
    subItems: [
      { name: "Financial Management", href: "/erp-financial-management" },
      { name: "Inventory & Warehouse", href: "/erp-inventory-warehouse" },
      { name: "Procurement & Purchase", href: "/erp-procurement-purchase" },
      { name: "Sales & Dispatch", href: "/erp-sales-dispatch" },
    ],
  },
  {
    id: "scm",
    name: "Supply Chain & SCM",
    href: "/products/scm",
    subItems: [
      { name: "Supplier & Vendor Portal", href: "/scm-supplier-vendor-portal" },
      { name: "Logistics & Fleet Dispatch", href: "/scm-logistics-fleet-dispatch" },
      { name: "Demand Forecasting", href: "/scm-demand-forecasting" },
      { name: "Quality Audit & Inspection", href: "/scm-quality-audit-inspection" },
    ],
  },
  {
    id: "hrm",
    name: "HRM & Payroll Suite",
    href: "/products/hrm",
    subItems: [
      { name: "Payroll Engine", href: "/hrm-payroll-engine" },
      { name: "Biometric Attendance", href: "/hrm-biometric-attendance" },
      { name: "Employee Self-Service", href: "/hrm-employee-self-service" },
      { name: "Lifecycle & Appraisals", href: "/hrm-lifecycle-appraisals" },
    ],
  },
  {
    id: "billing",
    name: "Digital Billing & Invoicing",
    href: "/products/billing",
    subItems: [
      { name: "GST Invoicing", href: "/billing-gst-invoicing" },
      { name: "Payment Gateway Integration", href: "/billing-payment-gateway" },
      { name: "Recurring Subscriptions", href: "/billing-recurring-subscriptions" },
      { name: "Tax Reports & Analytics", href: "/billing-tax-reports" },
    ],
  },
];

const productItems = productCategories.map((c) => ({ name: c.name, href: c.href }));

// Services Dropdown items - Direct clean list
const serviceItems = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Custom Software Engineering", href: "/services/software-development" },
  { name: "AWS Cloud & DevOps", href: "/services/aws-services" },
  { name: "UI/UX Design Systems", href: "/services/ui-ux-design" },
  { name: "Cloud Computing", href: "/services/cloud-computing" },
  { name: "AI & Machine Learning", href: "/services/ai-ml" },
  { name: "Process Automation", href: "/services/automation" },
  { name: "Cybersecurity & Audits", href: "/services/cybersecurity" },
  { name: "Data Analytics & BI", href: "/services/data-analytics" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"who" | "products" | "services" | null>(null);
  const [activeProductTab, setActiveProductTab] = useState<string>("crm");
  const [mobileExpanded, setMobileExpanded] = useState<"who" | "products" | "services" | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoModalConfig, setDemoModalConfig] = useState<{
    defaultProduct?: string;
    isServiceInquiry?: boolean;
  }>({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  const isWhoWeAreActive = [
    "/about",
    "/company",
    "/strategic-partnerships",
    "/locations",
  ].some((path) => location.pathname === path || (path === "/locations" && location.pathname.startsWith("/locations")));

  const isProductsActive = location.pathname.startsWith("/products") || location.pathname.startsWith("/crm");
  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <>
      {/* Top Floating Pill Header - Capsule Shape with White Theme */}
      <header className="w-full fixed top-3 sm:top-4 left-0 right-0 z-50 flex flex-col items-center px-3 sm:px-5 lg:px-8 pointer-events-none">
        <div
          className={`w-full max-w-[1400px] pointer-events-auto rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-5 sm:px-7 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.1)] border-slate-300/80" : ""
          }`}
        >
          {/* LEFT — Circular Badge Logo + Brand Name */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0 transition-transform duration-200 hover:-translate-y-0.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center p-1.5 shadow-sm transition-transform duration-200 group-hover:scale-105 flex-shrink-0">
              <img
                src="/pricing-icon.png"
                alt="Inzovate Technologies"
                width="26"
                height="26"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain select-none bg-transparent group-hover:scale-105 transition-transform"
                loading="eager"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(0, 140, 255, 0.45))",
                }}
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-extrabold text-[14px] sm:text-[15px] tracking-wider text-slate-900 uppercase font-heading group-hover:text-blue-600 transition-colors">
                INZOVATE
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-blue-600 uppercase">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* CENTER — Navigation Bar with Pill Radii & Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* 1. Who We Are? Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("who")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[14px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                  isWhoWeAreActive || activeDropdown === "who"
                    ? "text-blue-600 font-semibold bg-blue-50 border border-blue-200/60 shadow-xs"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/80"
                }`}
                aria-expanded={activeDropdown === "who"}
              >
                <span>Who we are?</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeDropdown === "who" ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Who We Are? Dropdown Menu - White Glassmorphism Capsule */}
              {activeDropdown === "who" && (
                <div className="absolute top-full left-0 pt-2 w-[260px] z-50">
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-2 space-y-0.5 animate-in fade-in zoom-in-95 duration-200 transform origin-top-left">
                    {whoWeAreItems.map((item) => {
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-3 py-2 rounded-xl text-slate-700 hover:bg-blue-50/80 hover:text-blue-600 hover:translate-x-1 font-medium transition-all duration-150"
                        >
                          <div className="text-[13.5px]">
                            {item.name}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Products Dropdown with Pop-up Animation & Elevation Shadow */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/products"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[14px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                  isProductsActive || activeDropdown === "products"
                    ? "text-blue-600 font-semibold bg-blue-50 border border-blue-200/60 shadow-xs"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/80"
                }`}
                aria-expanded={activeDropdown === "products"}
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeDropdown === "products" ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </Link>

              {/* Products Dropdown Menu with Sideways Subsection */}
              {activeDropdown === "products" && (
                <div className="absolute top-full -left-28 pt-2.5 z-50 w-[630px]">
                  <div
                    className="p-5 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-left"
                    style={{
                      borderRadius: "24px",
                      background: "rgba(255, 255, 255, 0.98)",
                      backdropFilter: "blur(28px)",
                      WebkitBackdropFilter: "blur(28px)",
                      border: "1px solid rgba(226, 232, 240, 1)",
                      boxShadow:
                        "0px 24px 60px rgba(0, 0, 0, 0.12), 0px 0px 30px rgba(59, 130, 246, 0.08)",
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-end pb-2.5 mb-3 border-b border-slate-200/80 px-1">
                      <Link
                        to="/products"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[12px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:translate-x-0.5 transition-all"
                      >
                        All Products <ChevronRight size={13} />
                      </Link>
                    </div>

                    {/* 2-Column Sideways Layout */}
                    <div className="grid grid-cols-12 gap-4">
                      {/* Left: Product Categories */}
                      <div className="col-span-5 flex flex-col gap-1 pr-3 border-r border-slate-200/80">
                        {productCategories.map((cat) => {
                          const isActive = activeProductTab === cat.id;
                          return (
                            <Link
                              key={cat.id}
                              to={cat.href}
                              onMouseEnter={() => setActiveProductTab(cat.id)}
                              onClick={() => setActiveDropdown(null)}
                              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[13.5px] transition-all duration-150 ${
                                isActive
                                  ? "bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs font-semibold"
                                  : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900 border border-transparent font-medium"
                              }`}
                            >
                              <span>{cat.name}</span>
                              <ChevronRight
                                size={14}
                                className={`transition-transform duration-150 ${
                                  isActive
                                    ? "text-blue-600 translate-x-0.5 opacity-100"
                                    : "text-slate-400 opacity-60"
                                }`}
                              />
                            </Link>
                          );
                        })}
                      </div>

                      {/* Right: Sub-Products (NO ICONS, NO EXPLANATION) */}
                      <div className="col-span-7 flex flex-col pl-1">
                        <div>
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/60">
                            <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider">
                              {(productCategories.find((c) => c.id === activeProductTab) || productCategories[0]).name}
                            </span>
                            <Link
                              to={(productCategories.find((c) => c.id === activeProductTab) || productCategories[0]).href}
                              onClick={() => setActiveDropdown(null)}
                              className="text-[11.5px] font-medium text-blue-600 hover:text-blue-700 flex items-center gap-0.5"
                            >
                              Overview &rarr;
                            </Link>
                          </div>

                          <div className="space-y-1">
                            {(productCategories.find((c) => c.id === activeProductTab) || productCategories[0]).subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center justify-between px-3 py-2 rounded-lg text-[13px] text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 hover:border-blue-200/60 border border-transparent transition-all duration-150 group/subitem"
                              >
                                <span className="font-medium group-hover/subitem:text-blue-600 transition-colors">
                                  {sub.name}
                                </span>
                                <ChevronRight
                                  size={13}
                                  className="text-slate-400 opacity-0 group-hover/subitem:opacity-100 group-hover/subitem:translate-x-0.5 group-hover/subitem:text-blue-600 transition-all duration-150"
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/services"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[14px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                  isServicesActive || activeDropdown === "services"
                    ? "text-blue-600 font-semibold bg-blue-50 border border-blue-200/60 shadow-xs"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/80"
                }`}
                aria-expanded={activeDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </Link>

              {/* Services Clean Dropdown Menu */}
              {activeDropdown === "services" && (
                <div className="absolute top-full -left-6 pt-2 w-[280px] z-50">
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-2 animate-in fade-in zoom-in-95 duration-200 transform origin-top-left">
                    <div className="flex items-center justify-end pb-1.5 mb-1.5 border-b border-slate-200/80 px-1">
                      <Link
                        to="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[12px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                      >
                        All Services <ChevronRight size={13} />
                      </Link>
                    </div>

                    <div className="space-y-0.5">
                      {serviceItems.map((srv) => {
                        return (
                          <Link
                            key={srv.name}
                            to={srv.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-3 py-2 rounded-xl text-slate-700 hover:bg-blue-50/80 hover:text-blue-600 hover:translate-x-1 font-medium transition-all duration-150"
                          >
                            <div className="text-[13.5px]">
                              {srv.name}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Pricing (Preserves Pricing Icon) */}
            <Link
              to="/pricing"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[14px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                location.pathname === "/pricing"
                  ? "text-blue-600 font-semibold bg-blue-50 border border-blue-200/60 shadow-xs"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/80"
              }`}
            >
              <span>Pricing</span>
              <span className="inline-flex items-center gap-1 text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 shadow-xs">
                <InzovateFaviconIcon size={9} />
                <span>Trial</span>
              </span>
            </Link>

            {/* 5. Blogs */}
            <Link
              to="/blogs"
              className={`px-3.5 py-1.5 text-[14px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                location.pathname === "/blogs"
                  ? "text-blue-600 font-semibold bg-blue-50 border border-blue-200/60 shadow-xs"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/80"
              }`}
            >
              Blogs
            </Link>

            {/* 6. Careers */}
            <Link
              to="/careers"
              className={`px-3.5 py-1.5 text-[14px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                location.pathname === "/careers"
                  ? "text-blue-600 font-semibold bg-blue-50 border border-blue-200/60 shadow-xs"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/80"
              }`}
            >
              Careers
            </Link>

            {/* 7. Contact */}
            <Link
              to="/contact"
              className={`px-3.5 py-1.5 text-[14px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                location.pathname === "/contact"
                  ? "text-blue-600 font-semibold bg-blue-50 border border-blue-200/60 shadow-xs"
                  : "text-slate-700 hover:text-blue-600 hover:bg-slate-100/80"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* RIGHT — Liquid Metal CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LiquidMetalButton
              label="Book a meeting"
              onClick={() => {
                navigate("/contact#contact-form");
                const el = document.getElementById("contact-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden lg:inline-block"
            />

            {/* Mobile hamburger button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors pointer-events-auto"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (White theme card) */}
        {menuOpen && (
          <div className="lg:hidden w-full max-w-[1400px] mt-2.5 pointer-events-auto bg-white/98 backdrop-blur-2xl border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] max-h-[80vh] overflow-y-auto animate-in fade-in duration-200 text-slate-900">
            <div className="space-y-1">
              {/* Who We Are Mobile Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === "who" ? null : "who")
                  }
                  className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-semibold text-slate-900 rounded-xl hover:bg-slate-100"
                >
                  <span>Who we are?</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded === "who" ? "rotate-180 text-blue-600" : "text-slate-500"
                    }`}
                  />
                </button>
                {mobileExpanded === "who" && (
                  <div className="pl-4 pr-2 pb-2 space-y-1 bg-slate-50 rounded-2xl mt-1">
                    {whoWeAreItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 px-3 text-[13.5px] text-slate-600 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50/70"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Mobile Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === "products" ? null : "products")
                  }
                  className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-semibold text-slate-900 rounded-xl hover:bg-slate-100"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded === "products" ? "rotate-180 text-blue-600" : "text-slate-500"
                    }`}
                  />
                </button>
                {mobileExpanded === "products" && (
                  <div className="pl-4 pr-2 pb-2 space-y-1 bg-slate-50 rounded-2xl mt-1">
                    <Link
                      to="/products"
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 px-3 text-[13.5px] text-blue-600 font-bold rounded-lg hover:bg-blue-50/70"
                    >
                      View All Products &rarr;
                    </Link>
                    {productItems.map((prod) => (
                      <Link
                        key={prod.name}
                        to={prod.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 px-3 text-[13.5px] text-slate-600 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50/70"
                      >
                        {prod.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Mobile Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === "services" ? null : "services")
                  }
                  className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-semibold text-slate-900 rounded-xl hover:bg-slate-100"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileExpanded === "services" ? "rotate-180 text-blue-600" : "text-slate-500"
                    }`}
                  />
                </button>
                {mobileExpanded === "services" && (
                  <div className="pl-4 pr-2 pb-2 space-y-1 bg-slate-50 rounded-2xl mt-1">
                    <Link
                      to="/services"
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 px-3 text-[13.5px] text-blue-600 font-bold rounded-lg hover:bg-blue-50/70"
                    >
                      View All Services &rarr;
                    </Link>
                    {serviceItems.map((srv) => (
                      <Link
                        key={srv.name}
                        to={srv.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 px-3 text-[13.5px] text-slate-600 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50/70"
                      >
                        {srv.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Static Links */}
              <Link
                to="/pricing"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 text-[15px] font-semibold text-slate-900 rounded-xl hover:bg-slate-100"
              >
                <span>Pricing</span>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <InzovateFaviconIcon size={9} /> Free Trial
                </span>
              </Link>

              <Link
                to="/blogs"
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-3 text-[15px] font-semibold text-slate-900 rounded-xl hover:bg-slate-100"
              >
                Blogs
              </Link>

              <Link
                to="/careers"
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-3 text-[15px] font-semibold text-slate-900 rounded-xl hover:bg-slate-100"
              >
                Careers
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-3 text-[15px] font-semibold text-slate-900 rounded-xl hover:bg-slate-100"
              >
                Contact Us
              </Link>

              {/* Mobile CTA */}
              <div className="pt-3 pb-2 flex justify-center">
                <LiquidMetalButton
                  label="Book a meeting"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/contact#contact-form");
                    const el = document.getElementById("contact-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  width={220}
                />
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Fixed Navbar Spacer to reserve exact height in normal document flow */}
      <div className="h-[72px] w-full shrink-0 pointer-events-none" aria-hidden="true" />

      {/* Interactive Demo / Service Inquiry Modal */}
      <DemoModal
        open={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultProduct={demoModalConfig.defaultProduct}
        isServiceInquiry={demoModalConfig.isServiceInquiry}
      />
    </>
  );
}
