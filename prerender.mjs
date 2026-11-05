import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const SITE_URL = 'https://inzovate-technologies.com';

const SEO_KEYWORDS_RAW = JSON.parse(fs.readFileSync(path.join(__dirname, 'seo-keywords.json'), 'utf8'));
const ALL_KEYWORDS_LIST = Array.from(new Set(Object.values(SEO_KEYWORDS_RAW).flat()));
const MASTER_KEYWORDS_STR = ALL_KEYWORDS_LIST.join(', ');

const DEFAULT_METAS = {
  legalName: 'INZOVATE TECHNOLOGIES PRIVATE LIMITED',
  brandName: 'Inzovate Technologies',
  defaultTitle: 'Inzovate Technologies | Custom Enterprise Software & Web Development in Tamil Nadu',
  defaultDescription: 'INZOVATE TECHNOLOGIES PRIVATE LIMITED is an IT & software development company in Tamil Nadu. We build custom ERPs, CRMs, web applications, AWS cloud infrastructure, AI automation, and mobile apps across Bhavani, Erode, Salem, Tiruchengode, Namakkal, and Coimbatore.',
  keywords: MASTER_KEYWORDS_STR
};

const PRODUCTS = [
  {
    slug: 'erp',
    title: 'Custom Enterprise ERP Software | Inzovate Technologies',
    heading: 'Inzovate Enterprise Resource Planning (ERP) System',
    description: 'Unified ERP software connecting finance, inventory, sales, purchasing, and production in one intelligent, real-time enterprise platform.',
    features: ['Real-Time Multi-Location Inventory', 'Financial Accounting & Ledger', 'Purchase Order & Supplier Management', 'Production Scheduling', 'Custom Approval Workflows']
  },
  {
    slug: 'crm',
    title: 'Sales & Customer CRM Software | Inzovate Technologies',
    heading: 'Inzovate Customer Relationship Management (CRM) System',
    description: 'Empower your sales team with automated lead tracking, deal pipelines, customer 360° views, and WhatsApp/Email communication tools.',
    features: ['Visual Kanban Sales Pipeline', 'Automated Lead Capture', 'WhatsApp & Email Outreach', 'Call Logs & Meeting Notes', 'Sales Analytics']
  },
  {
    slug: 'scm',
    title: 'Supply Chain & Logistics Management Software | Inzovate Technologies',
    heading: 'Inzovate Supply Chain Management (SCM) Software',
    description: 'End-to-end supply chain visibility from raw material procurement to warehouse management, order fulfillment, and logistics tracking.',
    features: ['Warehouse Stock Tracking', 'Vendor Procurement Portal', 'Demand Forecasting', 'Logistics Management', 'Real-Time Dispatch Tracking']
  },
  {
    slug: 'billing',
    title: 'GST Billing & Invoicing Software | Inzovate Technologies',
    heading: 'Inzovate Enterprise Billing & Invoicing System',
    description: 'Fast, automated GST-compliant invoicing, recurring subscription billing, payment gateway integration, and financial ledger management.',
    features: ['Instant GST Invoice Generation', 'Payment Gateway Integration', 'Recurring Subscriptions', 'Multi-Branch Billing Sync', 'E-Way Bill Integration']
  },
  {
    slug: 'hrm',
    title: 'HRM & Payroll Management Software | Inzovate Technologies',
    heading: 'Inzovate Human Resource & Payroll Management (HRM) System',
    description: 'Automate employee attendance, biometric integration, leave management, salary calculations, tax deductions, and performance reviews.',
    features: ['Biometric & Geo-Attendance Sync', 'Automated Monthly Payroll', 'Leave Approval System', 'Employee Self-Service Portal', 'Form 16 & Tax Compliance']
  },
  {
    slug: 'bi',
    title: 'Business Intelligence & Executive Dashboards | Inzovate Technologies',
    heading: 'Inzovate Business Intelligence (BI) & Analytics Platform',
    description: 'Turn enterprise raw data into interactive visual dashboards, real-time KPI monitoring, sales trends, and executive predictive reports.',
    features: ['Interactive Executive Dashboards', 'Cross-Departmental Data Sync', 'Automated Daily Email Reports', 'Custom KPI Metrics', 'Predictive Sales Forecasting']
  }
];

const SERVICES = [
  {
    slug: 'web-development',
    title: 'Web Development Company in Tamil Nadu | Web Applications',
    heading: 'Web & Web Application Development Services',
    description: 'Inzovate Technologies builds modern, responsive websites and enterprise web applications with React, Next.js, Node.js, and cloud backends across Erode, Salem, Bhavani, and Coimbatore.',
    features: ['Custom React & Next.js Development', 'Progressive Web Apps (PWA)', 'E-Commerce & Client Portals', 'Headless CMS Integration', 'SEO & Performance Optimization']
  },
  {
    slug: 'software-development',
    title: 'Custom Software Development Company in Erode & Salem',
    heading: 'Custom Software Engineering & Enterprise Solutions',
    description: 'Partner with Inzovate Technologies for custom software development. We design tailored ERPs, CRMs, automation systems, and scalable enterprise software solutions.',
    features: ['Enterprise Architecture Design', 'Legacy App Modernization', 'Database Architecture & Migration', 'Custom Workflow Automation', 'API Integration & Middleware']
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design Company in Coimbatore & Tamil Nadu',
    heading: 'UI/UX Design & User Experience Engineering',
    description: 'Elevate your product with Inzovate Technologies user-centered UI/UX design services. We craft intuitive wireframes, interactive prototypes, and modern design systems.',
    features: ['User Research & Journey Mapping', 'Wireframing & Prototyping', 'Design Systems & Component Libraries', 'Mobile & Web App UI Design', 'Usability Audits']
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing & Infrastructure Services | Inzovate Technologies',
    heading: 'Cloud Architecture & Infrastructure Solutions',
    description: 'Modernize your IT infrastructure with scalable cloud solutions. We design multi-cloud environments, automated backups, DevOps pipelines, and enterprise security.',
    features: ['Cloud Migration & Setup', 'Serverless Architecture', 'DevOps & CI/CD Pipelines', 'Disaster Recovery & Backups', 'Cost Optimization Audits']
  },
  {
    slug: 'aws-services',
    title: 'AWS Cloud Consulting Partner in Tamil Nadu | Inzovate',
    heading: 'Amazon Web Services (AWS) Consulting & Cloud Management',
    description: 'Certified AWS cloud engineers helping businesses build, secure, and optimize cloud infrastructure on EC2, S3, RDS, Lambda, ECS, and CloudFront.',
    features: ['AWS Architecture & Setup', 'Database Migration (RDS/DynamoDB)', 'Serverless App Development (Lambda)', 'AWS Security & IAM Policies', '24/7 Cloud Support']
  },
  {
    slug: 'ai-ml',
    title: 'AI & Machine Learning Solutions | Inzovate Technologies',
    heading: 'Artificial Intelligence & Machine Learning Engineering',
    description: 'Harness predictive AI models, natural language processing (NLP), automated computer vision, and intelligent AI chatbots to automate business tasks.',
    features: ['Custom AI Chatbot Agents', 'Predictive Data Analytics', 'Natural Language Processing (NLP)', 'Computer Vision & OCR', 'Process Automation']
  },
  {
    slug: 'automation',
    title: 'Business & Process Automation Services | Inzovate Technologies',
    heading: 'Workflow & Enterprise Process Automation',
    description: 'Eliminate repetitive manual tasks. We build automated workflow pipelines connecting web forms, CRMs, ERPs, emails, and accounting software.',
    features: ['No-Code & Custom Workflow Triggers', 'API Webhooks & Data Sync', 'Document Processing Automation', 'Email & SMS Notification Chains', 'Zoho Automation']
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Application Audit Services | Inzovate',
    heading: 'Cybersecurity & Application Security Audits',
    description: 'Protect your enterprise data with penetration testing, vulnerability assessments, HTTPS SSL enforcement, and secure role-based access control.',
    features: ['Web App Security Audits', 'OWASP Vulnerability Testing', 'Data Encryption Standards', 'Role-Based Access Control', 'Security Patch Management']
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & Data Warehouse Engineering | Inzovate',
    heading: 'Data Analytics & Big Data Engineering Services',
    description: 'Transform raw data into actionable insights with enterprise data warehouses, ETL pipelines, automated reporting, and interactive visualizations.',
    features: ['ETL Pipeline Engineering', 'Data Warehousing (PostgreSQL/Redshift)', 'Business Analytics Dashboards', 'Data Cleansing & Normalization', 'Real-Time Event Tracking']
  }
];

const LOCATIONS = [
  {
    slug: 'bhavani',
    cityName: 'Bhavani',
    title: 'IT Company in Bhavani | Software & Web Development | Inzovate',
    heading: 'IT Company & Software Development in Bhavani, Tamil Nadu',
    description: 'INZOVATE TECHNOLOGIES PRIVATE LIMITED is a software and IT company based in Bhavani, Tamil Nadu. Providing web development, mobile apps, AWS cloud, and custom software for local and global businesses.',
    address: 'INZOVATE TECHNOLOGIES Pvt. Ltd., Rajalakshmi Complex, NH 47, Main Road, near New Bus Stand, Bhavani, Tamil Nadu 638301'
  },
  {
    slug: 'erode',
    cityName: 'Erode',
    title: 'IT & Software Development Company in Erode | Inzovate Technologies',
    heading: 'IT & Software Development Company in Erode',
    description: 'Looking for a top software & web development company in Erode? Inzovate Technologies provides custom software, mobile apps, web design, and cloud solutions for Erode businesses.',
    address: 'Erode Region Service Hub, Tamil Nadu, India'
  },
  {
    slug: 'coimbatore',
    cityName: 'Coimbatore',
    title: 'Software Development Company in Coimbatore | Inzovate Technologies',
    heading: 'Software & Web Development Company in Coimbatore',
    description: 'Inzovate Technologies delivers enterprise software development, React web applications, AWS cloud infrastructure, and AI automation for companies in Coimbatore.',
    address: 'GRAND BRENTON, Bus Stop, 281, Avinashi Rd, next to Varadharaja Mills, Periyar Nagar, Coimbatore, Tamil Nadu 641004'
  },
  {
    slug: 'salem',
    cityName: 'Salem',
    title: 'IT & Software Company in Salem | Inzovate Technologies',
    heading: 'IT & Software Company in Salem, Tamil Nadu',
    description: 'Inzovate Technologies delivers custom ERP software, web development, mobile applications, and IT consulting for industrial enterprises in Salem.',
    address: 'Salem ELCO-SEZ IT Park, Vellakalpatti, Salem, Tamil Nadu 636012'
  },
  {
    slug: 'tiruchengode',
    cityName: 'Tiruchengode',
    title: 'Software & Web Development Company in Tiruchengode | Inzovate',
    heading: 'Software & Web Development Center in Tiruchengode',
    description: 'Inzovate Technologies provides software development, website design, and cloud solutions for educational institutions, textile units, and businesses in Tiruchengode.',
    address: 'INZOVATE TECHNOLOGIES Pvt. Ltd., NO:309, Mercury Block KSRCE Neo, Tiruchengode, Tamil Nadu 637215'
  },
  {
    slug: 'namakkal',
    cityName: 'Namakkal',
    title: 'IT Services & Software Company in Namakkal | Inzovate Technologies',
    heading: 'IT Services & Software Development in Namakkal',
    description: 'Inzovate Technologies provides custom software engineering, website development, and cloud services for poultry, logistics, and manufacturing businesses in Namakkal.',
    address: 'Namakkal Service Hub, Tamil Nadu, India'
  }
];

const PAGES = [
  {
    route: '/',
    title: DEFAULT_METAS.defaultTitle,
    heading: 'Enterprise Software & Custom Web Development Partner',
    description: DEFAULT_METAS.defaultDescription
  },
  {
    route: '/about',
    title: 'About Us | Inzovate Technologies Private Limited',
    heading: 'Empowering Businesses with Scalable Enterprise Software',
    description: 'Learn about INZOVATE TECHNOLOGIES PRIVATE LIMITED, our core values, software engineering team, technology stack, and mission to deliver world-class digital solutions.'
  },
  {
    route: '/company',
    title: 'Company Profile & Leadership | Inzovate Technologies',
    heading: 'Inzovate Technologies Corporate Profile & Values',
    description: 'Discover the company profile, verified offices, technical capabilities, leadership vision, and software engineering standards of Inzovate Technologies.'
  },
  {
    route: '/products',
    title: 'Enterprise Software Products | Inzovate Technologies',
    heading: 'Custom Enterprise ERP, CRM, HRM & Billing Software',
    description: 'Explore Inzovate Technologies suite of enterprise software products including ERP, CRM, SCM, GST Billing, HRM Payroll, and Business Intelligence.'
  },
  {
    route: '/services',
    title: 'IT & Software Engineering Services | Inzovate Technologies',
    heading: 'End-to-End Technology & Cloud Engineering Services',
    description: 'Explore our full spectrum of software services: custom software development, React web applications, UI/UX design, AWS cloud consulting, AI automation, and cybersecurity.'
  },
  {
    route: '/locations',
    title: 'Service Locations & IT Centers | Inzovate Technologies',
    heading: 'Serving Businesses Across Tamil Nadu & Global Markets',
    description: 'Explore Inzovate Technologies offices and service hubs in Bhavani, Coimbatore, Erode, Salem, Tiruchengode, and Namakkal.'
  },
  {
    route: '/strategic-partnerships',
    title: 'Strategic Tech Partnerships | AWS & Zoho Partner | Inzovate',
    heading: 'Authorized AWS & Zoho Implementation Partner',
    description: 'Inzovate Technologies partners with Amazon Web Services (AWS) and Zoho to deliver certified cloud infrastructure and business management software.'
  },
  {
    route: '/careers',
    title: 'Careers & Job Opportunities | Join Inzovate Technologies',
    heading: 'Build the Future of Enterprise Software with Us',
    description: 'Explore job openings and career opportunities for software engineers, React developers, Node.js architects, and UI/UX designers at Inzovate Technologies.'
  },
  {
    route: '/blogs',
    title: 'Tech Insights & Business Strategy Blogs | Inzovate Technologies',
    heading: 'Engineering Insights, Zoho CRM Guides & Tech Blogs',
    description: 'Read expert technology articles, Zoho CRM implementation guides, cloud security tips, and software architecture blogs by Inzovate Technologies.'
  },
  {
    route: '/contact',
    title: 'Contact Us | Inzovate Technologies Private Limited',
    heading: 'Get in Touch with Our Software Engineering Team',
    description: 'Contact Inzovate Technologies for software project consultations, web development inquiries, AWS cloud advisory, or Zoho CRM implementation.'
  },
  {
    route: '/privacy-policy',
    title: 'Privacy Policy | Inzovate Technologies',
    heading: 'Inzovate Technologies Privacy Policy',
    description: 'Read the official privacy policy of INZOVATE TECHNOLOGIES PRIVATE LIMITED regarding customer data protection and web security.'
  },
  {
    route: '/terms',
    title: 'Terms of Service | Inzovate Technologies',
    heading: 'Inzovate Technologies Terms of Service',
    description: 'Review the terms of service and service level agreements for INZOVATE TECHNOLOGIES PRIVATE LIMITED.'
  },
  {
    route: '/cookie-policy',
    title: 'Cookie Policy | Inzovate Technologies',
    heading: 'Inzovate Technologies Cookie Policy',
    description: 'Learn how Inzovate Technologies uses cookies and tracking technologies to improve user experience.'
  },
  {
    route: '/crm-for-service-based-businesses',
    title: 'CRM for Service-Based Businesses: Complete Guide | Inzovate Technologies',
    heading: 'CRM for Service-Based Businesses: A Complete Guide',
    description: 'Discover how CRM software helps service-based businesses manage leads, automate sales, improve customer relationships and grow revenue.',
    image: '/crm-service-based-businesses.jpg',
    features: [
      'Centralized Customer Information Database',
      'Automated Lead Tracking & Sales Pipelines',
      'Smart Follow-Up Notifications & Reminders',
      'Service Appointment & Consultation Scheduling',
      'Custom CRM Implementation & Application Integration'
    ]
  },
  {
    route: '/10-essential-crm-features-every-growing-business-needs-in-2026',
    title: '10 Essential CRM Features Every Growing Business Needs in 2026 | Inzovate',
    heading: '10 Essential CRM Features Every Growing Business Needs in 2026',
    description: 'Explore the 10 essential CRM features every growing business needs in 2026, including lead tracking, sales pipelines, workflow automation, and custom CRM systems.',
    image: '/10-essential-crm-features-2026.jpg'
  },
  {
    route: '/how-to-implement-zoho-crm-for-a-small-business-a-practical-step-by-step-guide',
    title: 'How to Implement Zoho CRM for a Small Business: Practical Guide | Inzovate',
    heading: 'How to Implement Zoho CRM for a Small Business: A Practical Step-by-Step Guide',
    description: 'Learn how to implement Zoho CRM for a small business with this practical guide covering setup, customization, data migration, automation, integrations, reports, and employee training.'
  },
  {
    route: '/role-of-ai-in-crm-and-erp-the-future-of-small-businesses-in-2026',
    title: 'Role of AI in CRM and ERP: The Future of Small Businesses in 2026 | Inzovate',
    heading: 'Role of AI in CRM and ERP: The Future of Small Businesses in 2026',
    description: 'Discover how AI-powered CRM and ERP software is revolutionizing small business operations, sales automation, demand forecasting, inventory management, and agentic workflows in 2026.'
  },
  {
    route: '/ai-automation-small-business-2026',
    title: 'How AI Automation Can Help Businesses Save Time and Grow Faster in 2026 | Inzovate',
    heading: 'How AI Automation Can Help Businesses Save Time and Grow Faster in 2026',
    description: 'Learn how AI automation for small businesses can streamline workflows, automate leads and customer support, improve productivity, and drive business growth in 2026'
  },
  {
    route: '/crm-by-industry',
    title: 'CRM Solutions by Industry | Inzovate Technologies',
    heading: 'Industry-Specific CRM Solutions & Platform Engineering',
    description: 'Explore enterprise CRM solutions customized by industry for Publishing, Construction, Transportation, HR & Recruitment, and Test Management.'
  },
  {
    route: '/crm-for-publishing',
    title: 'CRM for Publishing Companies | Manage Leads, Authors & Subscriptions',
    heading: 'CRM Solutions Built for Publishing Companies',
    description: 'Streamline publishing sales, author relationships, subscriptions, enquiries and follow-ups with a powerful CRM solution designed for publishing businesses.'
  },
  {
    route: '/crm-for-construction',
    title: 'CRM for Construction Companies | Manage Leads, Projects & Clients',
    heading: 'CRM Software for Construction Companies & Builders',
    description: 'Manage construction leads, clients, projects, quotations, follow-ups and sales pipelines with a CRM built for construction companies and contractors.'
  },
  {
    route: '/crm-for-transportation',
    title: 'CRM for Transportation & Logistics | Manage Customers & Leads',
    heading: 'CRM Software for Transportation & Freight Logistics',
    description: 'Improve transportation and logistics sales with CRM software for managing customers, enquiries, quotations, follow-ups, accounts and business relationships.'
  },
  {
    route: '/crm-for-hr',
    title: 'CRM for HR & Recruitment | Candidate & Client Relationship Management',
    heading: 'CRM Software for HR Consultancies & Recruitment Agencies',
    description: 'Manage candidates, recruitment clients, job enquiries, interviews and follow-ups with CRM software designed for HR consultancies and recruitment agencies.'
  },
  {
    route: '/crm-for-test-management',
    title: 'CRM for Test Monitoring & Conducting | Manage Candidates & Assessments',
    heading: 'CRM for Examination & Assessment Conducting Organizations',
    description: 'Manage test registrations, candidates, schedules, assessments, attendance, results and follow-ups with a centralized CRM for test and examination management.'
  }
];

// Add Products
PRODUCTS.forEach((p) => {
  PAGES.push({
    route: `/products/${p.slug}`,
    title: p.title,
    heading: p.heading,
    description: p.description,
    features: p.features
  });
});

// Add Services
SERVICES.forEach((s) => {
  PAGES.push({
    route: `/services/${s.slug}`,
    title: s.title,
    heading: s.heading,
    description: s.description,
    features: s.features
  });
});

// Add Locations
LOCATIONS.forEach((l) => {
  PAGES.push({
    route: `/locations/${l.slug}`,
    title: l.title,
    heading: l.heading,
    description: l.description,
    address: l.address
  });
});

function generatePrerenderedHtml(baseTemplate, page) {
  const fullUrl = `${SITE_URL}${page.route === '/' ? '/' : page.route}`;
  let html = baseTemplate;

  // Title
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${page.title}</title>`);

  // Meta Description
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description" content=".*?" \/>/gi, `<meta name="description" content="${page.description}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${page.description}" />\n</head>`);
  }

  // Keywords
  const pageKeywords = page.keywords || DEFAULT_METAS.keywords;
  if (html.includes('<meta name="keywords"')) {
    html = html.replace(/<meta name="keywords" content=".*?" \/>/gi, `<meta name="keywords" content="${pageKeywords}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="keywords" content="${pageKeywords}" />\n</head>`);
  }

  // Canonical
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?" \/>/gi, `<link rel="canonical" href="${fullUrl}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${fullUrl}" />\n</head>`);
  }

  // Robots
  if (html.includes('<meta name="robots"')) {
    html = html.replace(/<meta name="robots" content=".*?" \/>/gi, `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`);
  } else {
    html = html.replace('</head>', `  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />\n</head>`);
  }

  // OpenGraph, Twitter & JSON-LD Schema
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "Corporation", "ITBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "INZOVATE TECHNOLOGIES PRIVATE LIMITED",
      alternateName: "Inzovate Technologies",
      url: SITE_URL,
      logo: `${SITE_URL}/inzovate-logo.png`,
      description: page.description,
      keywords: pageKeywords,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rajalakshmi Complex, NH 47, Main Road, near New Bus Stand",
        addressLocality: "Bhavani",
        addressRegion: "Tamil Nadu",
        postalCode: "638301",
        addressCountry: "IN"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": fullUrl,
      url: fullUrl,
      name: page.title,
      description: page.description,
      keywords: pageKeywords
    }
  ];
  const ogMetaTags = `
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="INZOVATE TECHNOLOGIES PRIVATE LIMITED" />
    <meta property="og:image" content="${page.image ? `${SITE_URL}${page.image}` : `${SITE_URL}/inzovate-logo.png`}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${page.image ? `${SITE_URL}${page.image}` : `${SITE_URL}/inzovate-logo.png`}" />
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  `;
  html = html.replace('</head>', `${ogMetaTags}\n</head>`);

  // Build semantic content for Googlebot & initial fallback render inside #root (Pure White Luxury Theme)
  let semanticBody = `
    <div style="font-family: 'Poppins', system-ui, -apple-system, sans-serif; max-width: 1200px; margin: 0 auto; padding: 40px 20px; color: #0f172a; background-color: #ffffff; min-height: 100vh;">
      <header>
        <nav style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 24px; font-size: 0.95rem;">
          <a href="/" style="color: #1746a2; text-decoration: none; font-weight: 600;">Home</a>
          <a href="/about" style="color: #1746a2; text-decoration: none; font-weight: 600;">About</a>
          <a href="/services" style="color: #1746a2; text-decoration: none; font-weight: 600;">Services</a>
          <a href="/products" style="color: #1746a2; text-decoration: none; font-weight: 600;">Products</a>
          <a href="/locations" style="color: #1746a2; text-decoration: none; font-weight: 600;">Locations</a>
          <a href="/blogs" style="color: #1746a2; text-decoration: none; font-weight: 600;">Blogs</a>
          <a href="/contact" style="color: #1746a2; text-decoration: none; font-weight: 600;">Contact</a>
        </nav>
        <h1 style="font-size: 2.2rem; font-weight: 800; color: #0f172a; margin-top: 20px; line-height: 1.2;">${page.heading}</h1>
      </header>
      <main>
        <p style="font-size: 1.15rem; line-height: 1.7; color: #475569; margin-top: 16px;">${page.description}</p>
  `;

  if (page.features && page.features.length > 0) {
    semanticBody += `
        <section style="margin-top: 30px;">
          <h2 style="font-size: 1.5rem; font-weight: 700; color: #0f172a;">Key Capabilities & Solutions</h2>
          <ul style="padding-left: 20px; color: #334155; margin-top: 12px;">
            ${page.features.map((f) => `<li style="font-size: 1rem; margin-bottom: 8px;">${f}</li>`).join('')}
          </ul>
        </section>
    `;
  }

  if (page.address) {
    semanticBody += `
        <section style="margin-top: 30px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
          <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a;">Office Address</h2>
          <p style="color: #475569; margin-top: 8px;">${page.address}</p>
        </section>
    `;
  }

  semanticBody += `
        <section style="margin-top: 40px; padding: 30px; background: #f8fafc; border: 1px solid #e2e8f0; color: #0f172a; border-radius: 12px;">
          <h2 style="color: #0f172a; font-size: 1.5rem; font-weight: 700;">Ready to Scale Your Business?</h2>
          <p style="color: #475569; margin-top: 8px;">Partner with INZOVATE TECHNOLOGIES PRIVATE LIMITED for custom software engineering, AWS cloud, and Zoho CRM automation.</p>
          <a href="/contact" style="display: inline-block; margin-top: 16px; background: #1746a2; color: #ffffff; padding: 12px 24px; border-radius: 6px; font-weight: 700; text-decoration: none;">Get Technical Consultation</a>
        </section>
      </main>
      <footer style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 0.9rem; color: #64748b;">
        <p>&copy; ${new Date().getFullYear()} INZOVATE TECHNOLOGIES PRIVATE LIMITED. All rights reserved. | Headquarters: Bhavani, Tamil Nadu, India.</p>
      </footer>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    <noscript>${semanticBody}</noscript>`);
  return html;
}

async function runPrerender() {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(indexPath, 'utf-8');
  console.log(`🚀 Starting static HTML pre-renderer for ${PAGES.length} routes...`);

  let count = 0;
  for (const page of PAGES) {
    const prerenderedHtml = generatePrerenderedHtml(baseTemplate, page);

    if (page.route === '/') {
      fs.writeFileSync(indexPath, prerenderedHtml, 'utf-8');
      count++;
      continue;
    }

    const routeDir = path.join(DIST_DIR, page.route.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    const pageFilePath = path.join(routeDir, 'index.html');
    fs.writeFileSync(pageFilePath, prerenderedHtml, 'utf-8');
    count++;
  }

  console.log(`✅ Static HTML pre-rendering completed! Successfully generated ${count} route HTML files in dist/`);

  // Generate dynamic sitemap.xml for 100% route indexing coverage
  generateSitemap(PAGES);
}

function generateSitemap(pages) {
  const currentDate = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  pages.forEach((p) => {
    const loc = `${SITE_URL}${p.route === '/' ? '/' : p.route}`;
    let priority = '0.85';
    let changefreq = 'weekly';

    if (p.route === '/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (['/about', '/products', '/services', '/contact', '/blogs', '/company', '/careers', '/strategic-partnerships', '/locations', '/crm-by-industry'].includes(p.route)) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (p.route.startsWith('/privacy-policy') || p.route.startsWith('/terms') || p.route.startsWith('/cookie-policy')) {
      priority = '0.5';
      changefreq = 'monthly';
    } else if (p.route.startsWith('/locations/')) {
      priority = '0.8';
      changefreq = 'monthly';
    } else if (p.route.startsWith('/how-to-implement') || p.route.startsWith('/role-of-ai') || p.route.startsWith('/ai-automation') || p.route.startsWith('/crm-for-service-based-businesses') || p.route.startsWith('/10-essential-crm-features')) {
      priority = '0.95';
      changefreq = 'weekly';
    }

    xml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  });

  xml += `</urlset>\n`;

  const publicSitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  const distSitemapPath = path.join(DIST_DIR, 'sitemap.xml');

  fs.writeFileSync(publicSitemapPath, xml, 'utf-8');
  fs.writeFileSync(distSitemapPath, xml, 'utf-8');
  console.log(`🗺️ Updated sitemap.xml with ${pages.length} routes in public/ and dist/!`);
}

runPrerender();

