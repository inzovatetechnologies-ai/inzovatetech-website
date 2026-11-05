export interface ProductModuleItem {
  title: string;
  desc: string;
  href?: string;
  badge?: string;
  iconName?: string;
}

export interface ProductDetailItem {
  id: string;
  slug: string;
  name: string;
  title: string;
  tagline?: string;
  metaTitle: string;
  metaDescription: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  iconName: string;
  accentColor: string;
  badge: string;
  features: string[];
  modules: ProductModuleItem[];
  technologies: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
}

export const PRODUCTS_DATA: Record<string, ProductDetailItem> = {
  erp: {
    id: "erp",
    slug: "erp",
    name: "ERP",
    title: "Inzovate Enterprise Resource Planning (ERP)",
    metaTitle: "Custom Enterprise ERP Software | Inzovate Technologies",
    metaDescription: "Unified ERP software connecting finance, inventory, sales, purchasing, and production in one intelligent, real-time enterprise platform.",
    shortDesc: "Integrated business management connecting finance, operations, inventory, and procurement in one real-time cloud platform.",
    fullDesc: "Inzovate ERP is a comprehensive, customizable enterprise resource planning system engineered to streamline complex business workflows. Eliminate data silos, track multi-branch operations, manage real-time inventory, and automate purchase-to-pay processes with enterprise-grade security and zero monthly licensing lock-ins.",
    category: "Operations & Enterprise",
    iconName: "Building2",
    accentColor: "#2563EB",
    badge: "Enterprise",
    features: [
      "Real-Time Multi-Location Inventory & Stock Tracking",
      "Automated Financial Accounting & Multi-Currency Ledger",
      "Purchase Order Management & Supplier Portal",
      "Production Planning & Work-Order Scheduling",
      "Custom Workflow Automation & Approval Chains",
      "Role-Based Access Control & Audit Trails",
    ],
    modules: [
      {
        title: "Financial Management",
        desc: "Automated general ledger, accounts payable/receivable, and GST compliance reporting.",
        href: "/erp-financial-management",
        badge: "Finance & GST",
        iconName: "Receipt",
      },
      {
        title: "Inventory & Warehouse",
        desc: "Batch/serial tracking, stock transfers, barcode scanning, and low-stock alerts.",
        href: "/erp-inventory-warehouse",
        badge: "Multi-Location",
        iconName: "Boxes",
      },
      {
        title: "Procurement & Purchase",
        desc: "Vendor RFQs, purchase orders, goods receipt notes (GRN), and invoice matching.",
        href: "/erp-procurement-purchase",
        badge: "3-Way Match",
        iconName: "Layers",
      },
      {
        title: "Sales & Dispatch",
        desc: "Quotations, sales orders, delivery challans, and order-to-cash tracking.",
        href: "/erp-sales-dispatch",
        badge: "Order-to-Cash",
        iconName: "Zap",
      },
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS Cloud"],
    useCases: ["Manufacturing & Textile Enterprises", "Multi-Branch Retail Chains", "Wholesale Distributors", "Engineering & Fabrication Companies"],
    faqs: [
      {
        question: "Is Inzovate ERP customizable for our specific business workflow?",
        answer: "Yes, unlike rigid SaaS ERPs, Inzovate ERP is fully customizable to match your exact inventory rules, approval hierarchies, and reporting needs.",
      },
      {
        question: "Can we integrate Inzovate ERP with existing software and hardware?",
        answer: "Yes, we support REST APIs for third-party integrations with payment gateways, CRM tools, barcode scanners, and weighing machines.",
      },
    ],
  },
  crm: {
    id: "crm",
    slug: "crm",
    name: "CRM",
    title: "Inzovate Customer Relationship Management (CRM)",
    metaTitle: "Sales & Customer CRM Software | Inzovate Technologies",
    metaDescription: "Empower your sales team with automated lead tracking, deal pipelines, customer 360° views, and WhatsApp/Email communication tools.",
    shortDesc: "Manage customer relationships, sales pipelines, lead follow-ups, and customer support in one centralized system.",
    fullDesc: "Inzovate CRM empowers sales teams to close deals faster and build long-lasting customer relationships. Track leads from initial inquiry to contract signing, automate follow-up reminders, visualize pipeline stages, and gain actionable sales forecasts with built-in communication tools.",
    category: "Sales & Marketing",
    iconName: "Users",
    accentColor: "#06B6D4",
    badge: "Automation",
    features: [
      "Visual Kanban Sales Pipeline & Deal Stages",
      "Automated Lead Capture & Round-Robin Assignment",
      "WhatsApp & Email Integration for One-Click Outreach",
      "Call Logs, Meeting Notes & Task Scheduling",
      "Sales Agent Performance Analytics & Revenue Forecasting",
      "Customer 360° Timeline & Order History",
    ],
    modules: [
      {
        title: "CRM for Publishing",
        desc: "Manage authors, advertisers, subscriptions, distributors, and publishing sales pipelines.",
        href: "/crm-for-publishing",
        badge: "Publishing",
        iconName: "BookOpen",
      },
      {
        title: "CRM for Construction",
        desc: "Track construction leads, site visits, quotations, contractor bids, and project conversions.",
        href: "/crm-for-construction",
        badge: "Construction",
        iconName: "HardHat",
      },
      {
        title: "CRM for Transportation",
        desc: "Manage fleet logistics clients, rate contracts, spot inquiries, and shipping consignments.",
        href: "/crm-for-transportation",
        badge: "Logistics",
        iconName: "Truck",
      },
      {
        title: "CRM for HR & Recruitment",
        desc: "Candidate sourcing, client vacancy agreements, resume tracking, and interview scheduling.",
        href: "/crm-for-hr",
        badge: "Recruitment",
        iconName: "Users",
      },
      {
        title: "CRM for Test Management",
        desc: "Candidate registrations, exam schedules, assessment records, scorecards, and batch tracking.",
        href: "/crm-for-test-management",
        badge: "Assessments",
        iconName: "GraduationCap",
      },
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB / PostgreSQL", "EmailJS", "AWS"],
    useCases: ["B2B Tech & Consulting Firms", "Real Estate Agencies", "Financial Services", "Education & Admission Offices"],
    faqs: [
      {
        question: "Can leads automatically sync into the CRM from our website contact form?",
        answer: "Yes! All website form submissions and live chatbot conversations automatically populate as new leads in your Inzovate CRM dashboard.",
      },
      {
        question: "Does the CRM support mobile devices for field sales reps?",
        answer: "Yes, Inzovate CRM is fully responsive and optimized for smartphones, enabling field sales representatives to log calls and update deal stages on the go.",
      },
    ],
  },
  scm: {
    id: "scm",
    slug: "scm",
    name: "SCM",
    title: "Inzovate Supply Chain Management (SCM)",
    metaTitle: "Supply Chain & Logistics Management System | Inzovate",
    metaDescription: "End-to-end supply chain visibility, vendor portals, warehouse tracking, and logistics optimization engineered by Inzovate Technologies.",
    shortDesc: "End-to-end supply chain visibility and logistics control from procurement to delivery.",
    fullDesc: "Inzovate SCM gives enterprises complete operational control over complex supply chains. Monitor supplier reliability, manage multi-warehouse stock allocations, track shipments in real time, and reduce supply chain friction with predictive inventory optimization.",
    category: "Operations & Logistics",
    iconName: "Truck",
    accentColor: "#7C3AED",
    badge: "Logistics",
    features: [
      "Vendor Management & Self-Service Portal",
      "Multi-Warehouse Inventory Allocation & Transfers",
      "Logistics Route Tracking & Dispatch Management",
      "Automated Reorder Thresholds & Safety Stock Alerts",
      "Supplier Performance Rating & Compliance Tracking",
      "Custom Export/Import Shipping Documentation",
    ],
    modules: [
      {
        title: "Supplier & Vendor Portal",
        desc: "Enable vendors to view POs, submit quotes, Advanced Shipping Notices (ASNs), and invoices.",
        href: "/scm-supplier-vendor-portal",
        badge: "Vendor Hub",
        iconName: "Building2",
      },
      {
        title: "Logistics & Fleet Dispatch",
        desc: "Multi-drop route optimization, vehicle tracking, consignment notes, and digital e-POD.",
        href: "/scm-logistics-fleet-dispatch",
        badge: "Fleet & Routes",
        iconName: "Truck",
      },
      {
        title: "Demand Forecasting",
        desc: "Predictive AI inventory ordering, seasonality curves, and safety stock optimization.",
        href: "/scm-demand-forecasting",
        badge: "AI Predictive",
        iconName: "Cpu",
      },
      {
        title: "Quality Audit & Inspection",
        desc: "Inbound gate inspection, AQL sampling standards, quarantine stock, and automated NCRs.",
        href: "/scm-quality-audit-inspection",
        badge: "AQL & QC",
        iconName: "ShieldCheck",
      },
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    useCases: ["Textile & Garment Manufacturers", "FMCG Distributors", "Logistics & Freight Carriers", "Export/Import Houses"],
    faqs: [
      {
        question: "Can external suppliers upload bills directly to the supplier portal?",
        answer: "Yes, suppliers get secure login credentials to view purchase orders, upload invoices, and update shipping details directly.",
      },
    ],
  },
  billing: {
    id: "billing",
    slug: "billing",
    name: "BILLING",
    title: "Inzovate Digital Billing & Invoicing Suite",
    metaTitle: "Digital Billing & GST Invoicing Software | Inzovate",
    metaDescription: "Fast, compliant billing software with GST tax reports, multi-currency invoicing, payment gateway integration, and client portals.",
    shortDesc: "Streamlined billing, automated GST invoicing, and payment tracking for modern enterprises.",
    fullDesc: "Inzovate Billing Suite automates financial transactions for businesses of all sizes. Generate professional GST-compliant invoices in seconds, collect payments online with instant receipts, track overdue invoices automatically, and generate one-click tax summaries.",
    category: "Finance & Accounting",
    iconName: "Receipt",
    accentColor: "#0284C7",
    badge: "Finance",
    features: [
      "Instant GST-Compliant Digital Invoice Generation",
      "Multi-Currency Billing & International Invoicing",
      "Integrated Payment Gateway (Razorpay, Stripe, UPI)",
      "Automated Overdue Payment Reminders via SMS & WhatsApp",
      "Recurring Invoicing & Subscription Billing",
      "Detailed Tax Reports & CA Export Formats",
    ],
    modules: [
      {
        title: "GST Invoicing",
        desc: "Instant GST-compliant invoice generation, e-invoicing IRN with QR codes, and e-way bills.",
        href: "/billing-gst-invoicing",
        badge: "E-Invoicing",
        iconName: "Receipt",
      },
      {
        title: "Payment Gateway Integration",
        desc: "Instant digital collections with dynamic UPI QR codes, Razorpay, and auto-reconciliation.",
        href: "/billing-payment-gateway",
        badge: "Instant UPI",
        iconName: "Zap",
      },
      {
        title: "Recurring Subscriptions",
        desc: "Automated recurring retainer invoices, UPI Autopay e-mandates, and smart dunning.",
        href: "/billing-recurring-subscriptions",
        badge: "MRR Retainers",
        iconName: "RefreshCw",
      },
      {
        title: "Financial Tax Reports",
        desc: "1-Click GSTR-1, GSTR-3B JSON exports, GSTR-2B ITC reconciliations, and P&L statements.",
        href: "/billing-tax-reports",
        badge: "GSTR & Audit",
        iconName: "BarChart3",
      },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Razorpay API", "EmailJS", "AWS"],
    useCases: ["Retail Shops & Showrooms", "Service Agencies & Freelancers", "IT Consultants", "E-Commerce Merchants"],
    faqs: [
      {
        question: "Does the billing software calculate GST automatically?",
        answer: "Yes, it automatically calculates CGST, SGST, and IGST based on the customer's state location and product HSN codes.",
      },
    ],
  },
  hrm: {
    id: "hrm",
    slug: "hrm",
    name: "HRM",
    title: "Inzovate Human Resource Management (HRM)",
    metaTitle: "Human Resource & Payroll Software | Inzovate Technologies",
    metaDescription: "Comprehensive HR platform covering employee onboarding, payroll processing, biometric attendance, leave requests, and performance management.",
    shortDesc: "A comprehensive HR & workforce platform covering employee records, payroll, attendance, and compliance.",
    fullDesc: "Inzovate HRM simplifies workforce management from recruitment to retirement. Automate monthly payroll calculations with PF/ESI deductions, track biometric employee attendance, manage leave applications seamlessly, and evaluate staff performance with interactive reviews.",
    category: "HR & People Ops",
    iconName: "UserCheck",
    accentColor: "#16A34A",
    badge: "HR Tech",
    features: [
      "Complete Employee Digital Profile & Document Storage",
      "Automated Monthly Payroll Calculation with Statutory Deductions",
      "Biometric & Mobile GPS Attendance Integration",
      "Leave Application Approval Chains & Leave Balance Tracking",
      "Employee Self-Service Portal (ESS)",
      "Performance Appraisal Reviews & Goal Setting",
    ],
    modules: [
      {
        title: "Automated Payroll Engine",
        desc: "One-click salary calculations, statutory PF/ESI/TDS tax deductions, and Form 16.",
        href: "/hrm-payroll-engine",
        badge: "Payroll & Tax",
        iconName: "UserCheck",
      },
      {
        title: "Biometric & Geo-Attendance",
        desc: "Hardware biometric sync, mobile GPS geofencing, shift rotations, and leave approvals.",
        href: "/hrm-biometric-attendance",
        badge: "Live Geo-Sync",
        iconName: "Globe",
      },
      {
        title: "Employee Self-Service Portal",
        desc: "Mobile-friendly ESS portal for digital pay slips, leave requests, and tax declarations.",
        href: "/hrm-employee-self-service",
        badge: "Digital ESS",
        iconName: "Users",
      },
      {
        title: "Lifecycle & Appraisals",
        desc: "Digital candidate onboarding, probation reviews, KPI scorecards, and performance appraisals.",
        href: "/hrm-lifecycle-appraisals",
        badge: "Reviews & OKR",
        iconName: "Sparkles",
      },
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    useCases: ["Corporate Offices", "Factories & Industrial Plants", "Educational Institutions", "Hospitals & Clinics"],
    faqs: [
      {
        question: "Can employees access their payslips on mobile phones?",
        answer: "Yes! Employees get personal credentials to log in from smartphones to view salary slips, request leave, and check attendance history.",
      },
    ],
  },
  bi: {
    id: "bi",
    slug: "bi",
    name: "BI",
    title: "Inzovate Business Intelligence & Analytics (BI)",
    metaTitle: "Business Intelligence & Dashboard Analytics | Inzovate",
    metaDescription: "Real-time executive dashboards, data warehousing, predictive analytics, and automated reporting engineered by Inzovate Technologies.",
    shortDesc: "Real-time executive dashboards and data analytics for data-driven strategic decisions.",
    fullDesc: "Inzovate BI connects scattered company data into high-impact executive dashboards. Discover hidden business trends, track real-time revenue KPIs, evaluate operational bottlenecks, and receive automated weekly summary reports directly in your inbox.",
    category: "Analytics & Data",
    iconName: "BrainCircuit",
    accentColor: "#F59E0B",
    badge: "AI Powered",
    features: [
      "Real-Time Executive Key Metric Visualizations",
      "Multi-Database Ingestion (PostgreSQL, MySQL, MongoDB, Excel)",
      "Custom Drag-and-Drop Chart & Graph Builder",
      "Automated Scheduled PDF Reports via Email & WhatsApp",
      "Role-Based Dashboard Views for Managers & Executives",
      "Predictive Revenue & Sales Trend Forecasting",
    ],
    modules: [
      {
        title: "Executive Command Center",
        desc: "Single-screen overview of revenue, expenses, leads, and orders.",
        badge: "Executive KPI",
        iconName: "BrainCircuit",
      },
      {
        title: "Custom Dashboard Builder",
        desc: "Create tailored charts, tables, and metric counters with drag-and-drop ease.",
        badge: "Custom Visuals",
        iconName: "Layers",
      },
      {
        title: "Automated PDF Scheduler",
        desc: "Schedule daily/weekly email reports for board members and department leaders.",
        badge: "Auto Reporting",
        iconName: "Send",
      },
      {
        title: "Predictive Analytics",
        desc: "Forecast future inventory demand, revenue projections, and sales targets.",
        badge: "AI Forecasting",
        iconName: "Cpu",
      },
    ],
    technologies: ["React", "TypeScript", "Recharts", "PostgreSQL", "Python Analytics", "AWS"],
    useCases: ["C-Suite Executives & Founders", "Financial Directors", "Sales Operations Managers", "Supply Chain Heads"],
    faqs: [
      {
        question: "Can Inzovate BI pull data from our existing ERP and CRM simultaneously?",
        answer: "Yes! Inzovate BI aggregates metrics from multiple databases and APIs into a unified dashboard.",
      },
    ],
  },
};
