import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContactButtons from "./components/FloatingContactButtons";
import EbixScrollAnimator from "./components/EbixScrollAnimator";
import Home from "./pages/Home";

// Route-based code splitting for ultra-fast initial page load & low INP/LCP
const About = lazy(() => import("./pages/About"));
const Company = lazy(() => import("./pages/Company"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Pricing = lazy(() => import("./pages/Pricing"));
const LocationsHub = lazy(() => import("./pages/LocationsHub"));
const LocationDetail = lazy(() => import("./pages/LocationDetail"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// CRM Industry Landing Pages
const CrmByIndustry = lazy(() => import("./pages/CrmByIndustry"));
const CrmPublishing = lazy(() => import("./pages/CrmPublishing"));
const CrmConstruction = lazy(() => import("./pages/CrmConstruction"));
const CrmTransportation = lazy(() => import("./pages/CrmTransportation"));
const CrmHr = lazy(() => import("./pages/CrmHr"));
const CrmTestManagement = lazy(() => import("./pages/CrmTestManagement"));

// ERP Module Landing Pages
const ErpFinancialManagement = lazy(() => import("./pages/ErpFinancialManagement"));
const ErpInventoryWarehouse = lazy(() => import("./pages/ErpInventoryWarehouse"));
const ErpProcurementPurchase = lazy(() => import("./pages/ErpProcurementPurchase"));
const ErpSalesDispatch = lazy(() => import("./pages/ErpSalesDispatch"));

// SCM Platform Landing Pages
const ScmSupplierVendorPortal = lazy(() => import("./pages/ScmSupplierVendorPortal"));
const ScmLogisticsFleetDispatch = lazy(() => import("./pages/ScmLogisticsFleetDispatch"));
const ScmDemandForecasting = lazy(() => import("./pages/ScmDemandForecasting"));
const ScmQualityAuditInspection = lazy(() => import("./pages/ScmQualityAuditInspection"));

// Billing & Invoicing Landing Pages
const BillingGstInvoicing = lazy(() => import("./pages/BillingGstInvoicing"));
const BillingPaymentGateway = lazy(() => import("./pages/BillingPaymentGateway"));
const BillingRecurringSubscriptions = lazy(() => import("./pages/BillingRecurringSubscriptions"));
const BillingTaxReports = lazy(() => import("./pages/BillingTaxReports"));

// HRM & Payroll Landing Pages
const HrmPayrollEngine = lazy(() => import("./pages/HrmPayrollEngine"));
const HrmBiometricAttendance = lazy(() => import("./pages/HrmBiometricAttendance"));
const HrmEmployeeSelfService = lazy(() => import("./pages/HrmEmployeeSelfService"));
const HrmLifecycleAppraisals = lazy(() => import("./pages/HrmLifecycleAppraisals"));

// Lazy load Legal components
const PrivacyPolicy = lazy(() => import("./pages/Legal").then((m) => ({ default: m.PrivacyPolicy })));
const Terms = lazy(() => import("./pages/Legal").then((m) => ({ default: m.Terms })));
const CookiePolicy = lazy(() => import("./pages/Legal").then((m) => ({ default: m.CookiePolicy })));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      // Temporarily override CSS smooth scroll to ensure instant, non-flashing jump to top
      const origStyle = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.documentElement.style.scrollBehavior = origStyle;
    }
  }, [pathname, hash]);

  return null;
}

function TrailingSlashHandler() {
  const { pathname, search, hash } = useLocation();

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const cleanPath = pathname.slice(0, -1) + search + hash;
    return <Navigate to={cleanPath} replace />;
  }
  return null;
}

function BlogPostRedirect() {
  const { postSlug } = useParams<{ postSlug?: string }>();
  if (
    postSlug === "zoho-crm-small-business" ||
    postSlug === "how-to-implement-zoho-crm-for-a-small-business-a-practical-step-by-step-guide"
  ) {
    return (
      <Navigate
        to="/how-to-implement-zoho-crm-for-a-small-business-a-practical-step-by-step-guide"
        replace
      />
    );
  }
  if (
    postSlug === "ai-crm-erp-small-business-2026" ||
    postSlug === "role-of-ai-in-crm-and-erp-the-future-of-small-businesses-in-2026"
  ) {
    return (
      <Navigate
        to="/role-of-ai-in-crm-and-erp-the-future-of-small-businesses-in-2026"
        replace
      />
    );
  }
  if (
    postSlug === "ai-automation-small-business-2026" ||
    postSlug === "how-ai-automation-can-help-businesses-save-time-and-grow-faster-in-2026"
  ) {
    return (
      <Navigate
        to="/ai-automation-small-business-2026"
        replace
      />
    );
  }
  if (
    postSlug === "10-essential-crm-features-2026" ||
    postSlug === "10-essential-crm-features-every-growing-business-needs-in-2026"
  ) {
    return (
      <Navigate
        to="/10-essential-crm-features-every-growing-business-needs-in-2026"
        replace
      />
    );
  }
  if (
    postSlug === "crm-software-growing-businesses-2026" ||
    postSlug === "crm-software-for-growing-businesses-complete-guide-2026" ||
    postSlug === "crm-software-growing-businesses-construction-transport-publishing"
  ) {
    return (
      <Navigate
        to="/crm-software-growing-businesses-construction-transport-publishing"
        replace
      />
    );
  }
  if (postSlug === "crm-for-service-based-businesses") {
    return (
      <Navigate
        to="/crm-for-service-based-businesses"
        replace
      />
    );
  }
  return <Blog />;
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-slate-900 overflow-x-hidden relative">
      <TrailingSlashHandler />
      <ScrollToTop />
      <EbixScrollAnimator />
      <Navbar />
      <main className="flex-grow min-h-screen w-full bg-[#FFFFFF]">
        <Suspense fallback={<div className="min-h-screen bg-[#FFFFFF]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/company" element={<Company />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productSlug" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/locations" element={<LocationsHub />} />
            <Route path="/locations/:citySlug" element={<LocationDetail />} />
            <Route path="/strategic-partnerships" element={<Partnerships />} />
            <Route path="/partnerships" element={<Navigate to="/strategic-partnerships" replace />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/career" element={<Navigate to="/careers" replace />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog" element={<Navigate to="/blogs" replace />} />
            <Route path="/blogs/:postSlug" element={<BlogPostRedirect />} />
            <Route path="/blog/:postSlug" element={<BlogPostRedirect />} />
            <Route path="/crm-for-service-based-businesses" element={<Blog />} />
            <Route path="/10-essential-crm-features-every-growing-business-needs-in-2026" element={<Blog />} />
            <Route path="/10-essential-crm-features-2026" element={<Navigate to="/10-essential-crm-features-every-growing-business-needs-in-2026" replace />} />
            <Route path="/crm-software-growing-businesses-construction-transport-publishing" element={<Blog />} />
            <Route path="/crm-software-for-growing-businesses-complete-guide-2026" element={<Navigate to="/crm-software-growing-businesses-construction-transport-publishing" replace />} />
            <Route path="/crm-software-growing-businesses-2026" element={<Navigate to="/crm-software-growing-businesses-construction-transport-publishing" replace />} />
            <Route path="/how-to-implement-zoho-crm-for-a-small-business-a-practical-step-by-step-guide" element={<Blog />} />
            <Route path="/role-of-ai-in-crm-and-erp-the-future-of-small-businesses-in-2026" element={<Blog />} />
            <Route path="/ai-automation-small-business-2026" element={<Blog />} />
            <Route path="/how-ai-automation-can-help-businesses-save-time-and-grow-faster-in-2026" element={<Navigate to="/ai-automation-small-business-2026" replace />} />
            {/* CRM Industry Landing Pages */}
            <Route path="/crm-by-industry" element={<CrmByIndustry />} />
            <Route path="/crm-for-publishing" element={<CrmPublishing />} />
            <Route path="/crm-for-construction" element={<CrmConstruction />} />
            <Route path="/crm-for-transportation" element={<CrmTransportation />} />
            <Route path="/crm-for-hr" element={<CrmHr />} />
            <Route path="/crm-for-test-management" element={<CrmTestManagement />} />

            {/* ERP Module Landing Pages */}
            <Route path="/erp-financial-management" element={<ErpFinancialManagement />} />
            <Route path="/products/erp/financial-management" element={<Navigate to="/erp-financial-management" replace />} />
            <Route path="/erp-inventory-warehouse" element={<ErpInventoryWarehouse />} />
            <Route path="/products/erp/inventory-warehouse" element={<Navigate to="/erp-inventory-warehouse" replace />} />
            <Route path="/erp-procurement-purchase" element={<ErpProcurementPurchase />} />
            <Route path="/products/erp/procurement-purchase" element={<Navigate to="/erp-procurement-purchase" replace />} />
            <Route path="/erp-sales-dispatch" element={<ErpSalesDispatch />} />
            <Route path="/products/erp/sales-dispatch" element={<Navigate to="/erp-sales-dispatch" replace />} />

            {/* SCM Platform Landing Pages */}
            <Route path="/scm-supplier-vendor-portal" element={<ScmSupplierVendorPortal />} />
            <Route path="/products/scm/supplier-vendor-portal" element={<Navigate to="/scm-supplier-vendor-portal" replace />} />
            <Route path="/scm-logistics-fleet-dispatch" element={<ScmLogisticsFleetDispatch />} />
            <Route path="/products/scm/logistics-fleet-dispatch" element={<Navigate to="/scm-logistics-fleet-dispatch" replace />} />
            <Route path="/scm-demand-forecasting" element={<ScmDemandForecasting />} />
            <Route path="/products/scm/demand-forecasting" element={<Navigate to="/scm-demand-forecasting" replace />} />
            <Route path="/scm-quality-audit-inspection" element={<ScmQualityAuditInspection />} />
            <Route path="/products/scm/quality-audit-inspection" element={<Navigate to="/scm-quality-audit-inspection" replace />} />

            {/* Billing & Invoicing Landing Pages */}
            <Route path="/billing-gst-invoicing" element={<BillingGstInvoicing />} />
            <Route path="/products/billing/gst-invoicing" element={<Navigate to="/billing-gst-invoicing" replace />} />
            <Route path="/billing-payment-gateway" element={<BillingPaymentGateway />} />
            <Route path="/products/billing/payment-gateway" element={<Navigate to="/billing-payment-gateway" replace />} />
            <Route path="/billing-recurring-subscriptions" element={<BillingRecurringSubscriptions />} />
            <Route path="/products/billing/recurring-subscriptions" element={<Navigate to="/billing-recurring-subscriptions" replace />} />
            <Route path="/billing-tax-reports" element={<BillingTaxReports />} />
            <Route path="/products/billing/tax-reports" element={<Navigate to="/billing-tax-reports" replace />} />

            {/* HRM & Payroll Landing Pages */}
            <Route path="/hrm-payroll-engine" element={<HrmPayrollEngine />} />
            <Route path="/products/hrm/payroll-engine" element={<Navigate to="/hrm-payroll-engine" replace />} />
            <Route path="/hrm-biometric-attendance" element={<HrmBiometricAttendance />} />
            <Route path="/products/hrm/biometric-attendance" element={<Navigate to="/hrm-biometric-attendance" replace />} />
            <Route path="/hrm-employee-self-service" element={<HrmEmployeeSelfService />} />
            <Route path="/products/hrm/employee-self-service" element={<Navigate to="/hrm-employee-self-service" replace />} />
            <Route path="/hrm-lifecycle-appraisals" element={<HrmLifecycleAppraisals />} />
            <Route path="/products/hrm/lifecycle-appraisals" element={<Navigate to="/hrm-lifecycle-appraisals" replace />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
