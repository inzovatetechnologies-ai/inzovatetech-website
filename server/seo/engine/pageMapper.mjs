/**
 * INZOVATE TECHNOLOGIES - AUTOMATIC SEO PAGE MAPPING ENGINE
 * 
 * Maps keyword clusters to authentic, high-quality existing landing pages.
 * Enforces canonical mapping to eliminate keyword cannibalization.
 * Never creates low-quality doorway pages.
 */

export const INZOVATE_CANONICAL_PAGES = [
  // ── ERP Platform ────────────────────────────────────────────────────────────
  {
    path: "/erp-financial-management",
    cluster: "ERP",
    subCluster: "ERP_FINANCE",
    title: "Enterprise ERP Financial Management Software | Inzovate Technologies",
    primaryTopic: "ERP Financial Management, Multi-currency, General Ledger, Audit Trails",
  },
  {
    path: "/erp-inventory-warehouse",
    cluster: "ERP",
    subCluster: "ERP_INVENTORY",
    title: "Enterprise Inventory & Warehouse Management ERP | Inzovate Technologies",
    primaryTopic: "Inventory tracking, stock audits, warehouse barcode management",
  },
  {
    path: "/erp-procurement-purchase",
    cluster: "ERP",
    subCluster: "ERP_PROCUREMENT",
    title: "ERP Procurement & Vendor Purchase Workflow | Inzovate Technologies",
    primaryTopic: "Vendor purchase orders, PO approvals, procurement lifecycle",
  },
  {
    path: "/erp-sales-dispatch",
    cluster: "ERP",
    subCluster: "ERP_SALES",
    title: "ERP Sales Orders & Dispatch Management Platform | Inzovate Technologies",
    primaryTopic: "Sales distribution, order processing, delivery tracking",
  },

  // ── SCM Platform ────────────────────────────────────────────────────────────
  {
    path: "/scm-supplier-vendor-portal",
    cluster: "SCM",
    subCluster: "SCM_SUPPLIER",
    title: "Supplier & Vendor Collaboration Portal | Inzovate Technologies",
    primaryTopic: "Supply chain portal, supplier quotes, vendor onboarding",
  },
  {
    path: "/scm-logistics-fleet-dispatch",
    cluster: "SCM",
    subCluster: "SCM_LOGISTICS",
    title: "Logistics, Fleet & Real-Time Dispatch System | Inzovate Technologies",
    primaryTopic: "Fleet tracking, route optimization, logistics dispatch",
  },
  {
    path: "/scm-demand-forecasting",
    cluster: "SCM",
    subCluster: "SCM_FORECASTING",
    title: "AI-Powered SCM Demand Forecasting & Planning | Inzovate Technologies",
    primaryTopic: "Predictive demand planning, seasonal forecasting, buffer inventory",
  },
  {
    path: "/scm-quality-audit-inspection",
    cluster: "SCM",
    subCluster: "SCM_QUALITY",
    title: "Supply Chain Quality Audit & Compliance System | Inzovate Technologies",
    primaryTopic: "Inspection checklists, ISO compliance, supplier quality",
  },

  // ── Billing & Invoicing ─────────────────────────────────────────────────────
  {
    path: "/billing-gst-invoicing",
    cluster: "BILLING",
    subCluster: "BILLING_GST",
    title: "GST Invoicing & Automated Tax Filing Software | Inzovate Technologies",
    primaryTopic: "GST e-invoicing, e-way bills, automated invoice dispatch",
  },
  {
    path: "/billing-payment-gateway",
    cluster: "BILLING",
    subCluster: "BILLING_GATEWAYS",
    title: "Multi-Gateway Payment Integration & Processing | Inzovate Technologies",
    primaryTopic: "UPI, Cards, NetBanking, recurring autopay integration",
  },
  {
    path: "/billing-recurring-subscriptions",
    cluster: "BILLING",
    subCluster: "BILLING_SUBSCRIPTIONS",
    title: "Recurring Billing & Subscription Management Platform | Inzovate Technologies",
    primaryTopic: "SaaS subscription management, automated dunning, customer tiers",
  },
  {
    path: "/billing-tax-reports",
    cluster: "BILLING",
    subCluster: "BILLING_TAX",
    title: "Automated Tax Reports & Financial Compliance Engine | Inzovate Technologies",
    primaryTopic: "Audit reporting, GSTR-1, GSTR-3B compliance, tax balance sheets",
  },

  // ── HRM & Payroll ───────────────────────────────────────────────────────────
  {
    path: "/hrm-payroll-engine",
    cluster: "HRM",
    subCluster: "HRM_PAYROLL",
    title: "Automated HRM Payroll Engine & Salary Processing | Inzovate Technologies",
    primaryTopic: "Payroll calculation, PF, ESI, TDS, pay slips generation",
  },
  {
    path: "/hrm-biometric-attendance",
    cluster: "HRM",
    subCluster: "HRM_ATTENDANCE",
    title: "Biometric Attendance & Shift Tracking HRMS | Inzovate Technologies",
    primaryTopic: "Biometric device sync, shift roasters, geofencing attendance",
  },
  {
    path: "/hrm-employee-self-service",
    cluster: "HRM",
    subCluster: "HRM_ESS",
    title: "Employee Self-Service (ESS) Mobile & Web Portal | Inzovate Technologies",
    primaryTopic: "Leave applications, expense reimbursements, profile management",
  },
  {
    path: "/hrm-lifecycle-appraisals",
    cluster: "HRM",
    subCluster: "HRM_PERFORMANCE",
    title: "Employee Lifecycle & Performance Appraisal System | Inzovate Technologies",
    primaryTopic: "Onboarding, 360 performance reviews, OKRs, exit workflows",
  },

  // ── CRM Systems & Industry Solutions ────────────────────────────────────────
  {
    path: "/crm-by-industry",
    cluster: "CRM",
    subCluster: "CRM_GENERAL",
    title: "Enterprise Custom CRM Software Solutions | Inzovate Technologies",
    primaryTopic: "Custom CRM development, lead scoring, pipeline automation",
  },
  {
    path: "/crm-for-publishing",
    cluster: "CRM",
    subCluster: "CRM_PUBLISHING",
    title: "Specialized CRM for Publishing & Media Houses | Inzovate Technologies",
    primaryTopic: "Subscription renewals, author royalty tracking, media CRM",
  },
  {
    path: "/crm-for-construction",
    cluster: "CRM",
    subCluster: "CRM_CONSTRUCTION",
    title: "CRM for Construction, Real Estate & Contractors | Inzovate Technologies",
    primaryTopic: "Subcontractor management, site leads, project milestones",
  },
  {
    path: "/crm-for-transportation",
    cluster: "CRM",
    subCluster: "CRM_TRANSPORT",
    title: "CRM for Transportation, Logistics & Cargo Fleets | Inzovate Technologies",
    primaryTopic: "Consignment tracking, shipper portal, fleet CRM",
  },
  {
    path: "/crm-for-hr",
    cluster: "CRM",
    subCluster: "CRM_RECRUITMENT",
    title: "Applicant Tracking & Recruitment CRM Platform | Inzovate Technologies",
    primaryTopic: "Candidate pipelines, client placement management",
  },
  {
    path: "/crm-for-test-management",
    cluster: "CRM",
    subCluster: "CRM_QA",
    title: "Quality Assurance & QA Test Management CRM | Inzovate Technologies",
    primaryTopic: "Audit logs, defect workflows, SLA tracking",
  },

  // ── AI & Business Automation ────────────────────────────────────────────────
  {
    path: "/ai-automation-small-business-2026",
    cluster: "AI",
    subCluster: "AI_AUTOMATION",
    title: "AI Automation Solutions for Businesses 2026 | Inzovate Technologies",
    primaryTopic: "Generative AI, workflow bots, automated document processing",
  },
  {
    path: "/role-of-ai-in-crm-and-erp-the-future-of-small-businesses-in-2026",
    cluster: "AI",
    subCluster: "AI_ENTERPRISE",
    title: "Role of AI in CRM and ERP Enterprise Systems | Inzovate Technologies",
    primaryTopic: "Predictive analytics, AI-assisted decision making, intelligent ERP",
  },

  // ── Cloud, AWS & Zoho Ecosystems ───────────────────────────────────────────
  {
    path: "/services",
    cluster: "CLOUD_AWS",
    subCluster: "AWS_INFRASTRUCTURE",
    title: "AWS Cloud Consulting & DevOps Engineering | Inzovate Technologies",
    primaryTopic: "AWS migration, serverless architecture, cloud security audits",
  },
  {
    path: "/strategic-partnerships",
    cluster: "ZOHO",
    subCluster: "ZOHO_INTEGRATION",
    title: "Zoho Implementation & Ecosystem Consulting | Inzovate Technologies",
    primaryTopic: "Zoho CRM, Zoho Books, Zoho People, Zoho One integration",
  },

  // ── Software Development & Services ─────────────────────────────────────────
  {
    path: "/products",
    cluster: "SOFTWARE_DEV",
    subCluster: "SAAS_PRODUCTS",
    title: "Enterprise Digital Products & SaaS Platforms | Inzovate Technologies",
    primaryTopic: "Proprietary enterprise platforms, cloud solutions, customizable software",
  },

  // ── Local Hubs ──────────────────────────────────────────────────────────────
  {
    path: "/locations",
    cluster: "LOCATIONS",
    subCluster: "LOCATIONS_HUB",
    title: "Technology Consulting Across Tamil Nadu & India | Inzovate Technologies",
    primaryTopic: "Bhavani, Erode, Coimbatore, Salem, Tiruchengode, Chennai hubs",
  },

  // ── Conversion / Contact ────────────────────────────────────────────────────
  {
    path: "/contact",
    cluster: "CONTACT",
    subCluster: "CONSULTATION",
    title: "Contact Inzovate Technologies | Software Consultation & Free Demo",
    primaryTopic: "Software inquiry, project quotation, technical consultation",
  },
];

/**
 * Determines the ideal canonical landing page for any keyword
 */
export function mapKeywordToLandingPage(keyword = "", category = "", subCategory = "", targetLocation = "") {
  const norm = keyword.toLowerCase();

  // 1. Check for specific ERP modules
  if (norm.includes("inventory") || norm.includes("warehouse")) return "/erp-inventory-warehouse";
  if (norm.includes("finance") || norm.includes("accounting") || norm.includes("ledger")) return "/erp-financial-management";
  if (norm.includes("procurement") || norm.includes("purchase order") || norm.includes("vendor po")) return "/erp-procurement-purchase";
  if (norm.includes("dispatch") || norm.includes("sales order")) return "/erp-sales-dispatch";

  // 2. Check for specific SCM modules
  if (norm.includes("supplier") || norm.includes("vendor portal")) return "/scm-supplier-vendor-portal";
  if (norm.includes("fleet") || norm.includes("logistics")) return "/scm-logistics-fleet-dispatch";
  if (norm.includes("demand") || norm.includes("forecasting")) return "/scm-demand-forecasting";
  if (norm.includes("quality") || norm.includes("audit") || norm.includes("inspection")) return "/scm-quality-audit-inspection";

  // 3. Check for Billing modules
  if (norm.includes("gst") || norm.includes("e-invoice") || norm.includes("tax")) return "/billing-gst-invoicing";
  if (norm.includes("payment gateway") || norm.includes("upi") || norm.includes("checkout")) return "/billing-payment-gateway";
  if (norm.includes("subscription") || norm.includes("recurring")) return "/billing-recurring-subscriptions";

  // 4. Check for HRM modules
  if (norm.includes("payroll") || norm.includes("salary")) return "/hrm-payroll-engine";
  if (norm.includes("biometric") || norm.includes("attendance") || norm.includes("punch")) return "/hrm-biometric-attendance";
  if (norm.includes("self service") || norm.includes("leave management")) return "/hrm-employee-self-service";
  if (norm.includes("appraisal") || norm.includes("performance review")) return "/hrm-lifecycle-appraisals";

  // 5. Check for CRM vertical modules
  if (norm.includes("publishing") || norm.includes("media") || norm.includes("author")) return "/crm-for-publishing";
  if (norm.includes("construction") || norm.includes("contractor") || norm.includes("builder")) return "/crm-for-construction";
  if (norm.includes("transport") || norm.includes("cargo") || norm.includes("freight")) return "/crm-for-transportation";
  if (norm.includes("recruitment") || norm.includes("talent acquisition")) return "/crm-for-hr";

  // 6. Check for Zoho & Cloud
  if (norm.includes("zoho")) return "/strategic-partnerships";
  if (norm.includes("aws") || norm.includes("cloud") || norm.includes("devops")) return "/services";

  // 7. Check for AI & Machine Learning
  if (norm.includes("ai") || norm.includes("machine learning") || norm.includes("generative") || norm.includes("automation")) {
    return "/ai-automation-small-business-2026";
  }

  // 8. General Category Fallbacks
  const cat = String(category).toUpperCase();
  if (cat.includes("ERP")) return "/erp-financial-management";
  if (cat.includes("CRM")) return "/crm-by-industry";
  if (cat.includes("HRM") || cat.includes("HRMS")) return "/hrm-payroll-engine";
  if (cat.includes("SCM")) return "/scm-supplier-vendor-portal";
  if (cat.includes("BILLING")) return "/billing-gst-invoicing";
  if (cat.includes("ZOHO")) return "/strategic-partnerships";
  if (cat.includes("CLOUD") || cat.includes("AWS")) return "/services";

  // 9. Transactional quote / hire keywords -> /contact
  if (norm.includes("quote") || norm.includes("hire") || norm.includes("pricing") || norm.includes("demo")) {
    return "/contact";
  }

  return "/products";
}
