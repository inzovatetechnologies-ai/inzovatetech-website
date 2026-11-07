/**
 * INZOVATE TECHNOLOGIES - KEYWORD CLUSTERING & CANNIBALIZATION DEFENSE ENGINE
 * 
 * Organizes keywords into semantic clusters and prevents keyword cannibalization.
 * Enforces strict single-canonical landing page mapping per sub-cluster.
 */

import { INZOVATE_CANONICAL_PAGES } from "./pageMapper.mjs";

export const CLUSTER_DEFINITIONS = [
  {
    clusterId: "CL_ERP_FINANCE",
    category: "ERP",
    clusterName: "ERP Financial Management & General Ledger",
    canonicalUrl: "/erp-financial-management",
    matchPatterns: ["finance", "financial", "accounting", "general ledger", "audit trail"],
  },
  {
    clusterId: "CL_ERP_INVENTORY",
    category: "ERP",
    clusterName: "ERP Inventory, Warehouse & Barcode Management",
    canonicalUrl: "/erp-inventory-warehouse",
    matchPatterns: ["inventory", "warehouse", "stock", "barcode", "batch tracking"],
  },
  {
    clusterId: "CL_ERP_PROCUREMENT",
    category: "ERP",
    clusterName: "ERP Procurement & Vendor Purchase Workflow",
    canonicalUrl: "/erp-procurement-purchase",
    matchPatterns: ["procurement", "purchase order", "po approval", "vendor quote"],
  },
  {
    clusterId: "CL_ERP_SALES",
    category: "ERP",
    clusterName: "ERP Sales Orders & Dispatch Management",
    canonicalUrl: "/erp-sales-dispatch",
    matchPatterns: ["sales order", "dispatch management", "distribution erp", "order fulfillment"],
  },
  {
    clusterId: "CL_SCM_SUPPLIER",
    category: "SCM",
    clusterName: "Supplier & Vendor Collaboration Portal",
    canonicalUrl: "/scm-supplier-vendor-portal",
    matchPatterns: ["supplier portal", "vendor portal", "supply chain collaboration", "vendor onboarding"],
  },
  {
    clusterId: "CL_SCM_LOGISTICS",
    category: "SCM",
    clusterName: "Logistics, Fleet & Real-Time Dispatch",
    canonicalUrl: "/scm-logistics-fleet-dispatch",
    matchPatterns: ["logistics", "fleet", "route optimization", "cargo dispatch", "vehicle tracking"],
  },
  {
    clusterId: "CL_SCM_DEMAND",
    category: "SCM",
    clusterName: "AI Demand Forecasting & Predictive Planning",
    canonicalUrl: "/scm-demand-forecasting",
    matchPatterns: ["demand forecasting", "predictive inventory", "demand planning", "stock replenishment"],
  },
  {
    clusterId: "CL_SCM_QUALITY",
    category: "SCM",
    clusterName: "Supply Chain Quality Audit & Compliance",
    canonicalUrl: "/scm-quality-audit-inspection",
    matchPatterns: ["quality audit", "inspection checklist", "iso compliance", "supplier quality"],
  },
  {
    clusterId: "CL_BILLING_GST",
    category: "BILLING",
    clusterName: "GST E-Invoicing & Automated Filing",
    canonicalUrl: "/billing-gst-invoicing",
    matchPatterns: ["gst billing", "e-invoicing", "e-way bill", "tax invoice", "automated billing"],
  },
  {
    clusterId: "CL_BILLING_PAYMENT",
    category: "BILLING",
    clusterName: "Multi-Gateway Payment Integration & UPI",
    canonicalUrl: "/billing-payment-gateway",
    matchPatterns: ["payment gateway", "upi autopay", "checkout integration", "npci mandate"],
  },
  {
    clusterId: "CL_BILLING_SUBSCRIPTIONS",
    category: "BILLING",
    clusterName: "Recurring Billing & SaaS Subscriptions",
    canonicalUrl: "/billing-recurring-subscriptions",
    matchPatterns: ["recurring billing", "subscription management", "dunning", "saas billing"],
  },
  {
    clusterId: "CL_BILLING_TAX",
    category: "BILLING",
    clusterName: "Financial Compliance & Automated Tax Reporting",
    canonicalUrl: "/billing-tax-reports",
    matchPatterns: ["tax reports", "gstr-1", "gstr-3b", "tax balance sheet", "financial audit"],
  },
  {
    clusterId: "CL_HRM_PAYROLL",
    category: "HRM",
    clusterName: "Automated HRM Payroll Engine & Salary System",
    canonicalUrl: "/hrm-payroll-engine",
    matchPatterns: ["payroll", "salary processing", "payslip", "pf esi", "tds payroll"],
  },
  {
    clusterId: "CL_HRM_ATTENDANCE",
    category: "HRM",
    clusterName: "Biometric Attendance & Shift Rosters",
    canonicalUrl: "/hrm-biometric-attendance",
    matchPatterns: ["biometric attendance", "shift roster", "geofencing attendance", "punch clock"],
  },
  {
    clusterId: "CL_HRM_ESS",
    category: "HRM",
    clusterName: "Employee Self-Service (ESS) Portal",
    canonicalUrl: "/hrm-employee-self-service",
    matchPatterns: ["employee self service", "ess portal", "leave application", "employee portal"],
  },
  {
    clusterId: "CL_HRM_APPRAISALS",
    category: "HRM",
    clusterName: "Performance Appraisals & Lifecycle Tracking",
    canonicalUrl: "/hrm-lifecycle-appraisals",
    matchPatterns: ["appraisal", "performance review", "okr", "employee onboarding", "talent management"],
  },
  {
    clusterId: "CL_CRM_INDUSTRY",
    category: "CRM",
    clusterName: "Custom B2B Sales CRM & Pipeline Management",
    canonicalUrl: "/crm-by-industry",
    matchPatterns: ["crm software", "sales crm", "lead management", "pipeline automation", "client crm"],
  },
  {
    clusterId: "CL_CRM_PUBLISHING",
    category: "CRM",
    clusterName: "Specialized Publishing & Media CRM",
    canonicalUrl: "/crm-for-publishing",
    matchPatterns: ["publishing crm", "media house crm", "author royalty", "magazine subscriptions"],
  },
  {
    clusterId: "CL_CRM_CONSTRUCTION",
    category: "CRM",
    clusterName: "Construction & Real Estate CRM",
    canonicalUrl: "/crm-for-construction",
    matchPatterns: ["construction crm", "contractor crm", "real estate leads", "builder crm"],
  },
  {
    clusterId: "CL_CRM_TRANSPORT",
    category: "CRM",
    clusterName: "Transportation, Cargo & Logistics CRM",
    canonicalUrl: "/crm-for-transportation",
    matchPatterns: ["transportation crm", "cargo crm", "freight crm", "shipper portal"],
  },
  {
    clusterId: "CL_CRM_HR",
    category: "CRM",
    clusterName: "Recruitment & Candidate Tracking CRM",
    canonicalUrl: "/crm-for-hr",
    matchPatterns: ["recruitment crm", "applicant tracking", "placement crm", "candidate pipeline"],
  },
  {
    clusterId: "CL_CRM_QA",
    category: "CRM",
    clusterName: "QA Test Management & Defect Workflow CRM",
    canonicalUrl: "/crm-for-test-management",
    matchPatterns: ["test management", "qa crm", "defect tracking", "sla audit"],
  },
  {
    clusterId: "CL_AI_AUTOMATION",
    category: "AI",
    clusterName: "Enterprise AI & Business Workflow Automation",
    canonicalUrl: "/ai-automation-small-business-2026",
    matchPatterns: ["ai development", "generative ai", "ai automation", "ai chatbot", "machine learning"],
  },
  {
    clusterId: "CL_CLOUD_AWS",
    category: "Cloud and AWS",
    clusterName: "AWS Cloud Consulting, Architecture & DevOps",
    canonicalUrl: "/services",
    matchPatterns: ["aws", "cloud consulting", "devops", "cloud migration", "serverless"],
  },
  {
    clusterId: "CL_ZOHO",
    category: "Zoho",
    clusterName: "Zoho Implementation & Ecosystem Consulting",
    canonicalUrl: "/strategic-partnerships",
    matchPatterns: ["zoho", "zoho crm", "zoho books", "zoho people", "zoho one"],
  },
  {
    clusterId: "CL_SOFTWARE_DEV",
    category: "Software Development",
    clusterName: "Custom Enterprise Software & Web Development",
    canonicalUrl: "/products",
    matchPatterns: ["software development", "web application", "saas development", "custom software"],
  },
];

/**
 * Assigns a keyword to its best semantic cluster
 */
export function assignCluster(keyword = "") {
  const norm = keyword.toLowerCase();

  for (const def of CLUSTER_DEFINITIONS) {
    if (def.matchPatterns.some(p => norm.includes(p))) {
      return {
        clusterId: def.clusterId,
        clusterName: def.clusterName,
        category: def.category,
        canonicalUrl: def.canonicalUrl,
      };
    }
  }

  // Fallback to Software Dev
  return {
    clusterId: "CL_SOFTWARE_DEV",
    clusterName: "Custom Enterprise Software & Web Development",
    category: "Software Development",
    canonicalUrl: "/products",
  };
}
