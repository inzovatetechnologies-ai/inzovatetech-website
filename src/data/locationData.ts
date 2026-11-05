export interface LocationDetailItem {
  slug: string;
  cityName: string;
  priority: number;
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  intro: string;
  address: string;
  mapUrl?: string;
  serviceAreas: string[];
  localServices: {
    title: string;
    description: string;
    linkSlug: string;
  }[];
  whyChooseUs: string[];
  faqs: { question: string; answer: string }[];
}

export const LOCATION_DATA: Record<string, LocationDetailItem> = {
  bhavani: {
    slug: "bhavani",
    cityName: "Bhavani",
    priority: 1,
    metaTitle: "IT Company in Bhavani | Software & Web Development | Inzovate",
    metaDescription: "INZOVATE TECHNOLOGIES PRIVATE LIMITED is a software and IT company based in Bhavani, Tamil Nadu. Providing web development, mobile apps, AWS cloud, and custom software for local and global businesses.",
    h1Title: "IT Company in Bhavani, Tamil Nadu",
    intro: "Inzovate Technologies Private Limited is headquartered in Bhavani, Tamil Nadu. We empower businesses with modern software development, responsive web design, mobile applications, cloud engineering, and digital transformation solutions.",
    address: "INZOVATE TECHNOLOGIES Pvt. Ltd., Rajalakshmi Complex, NH 47, Main Road, near New Bus Stand, Bhavani, Tamil Nadu 638301",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=INZOVATE+TECHNOLOGIES+Pvt.+Ltd.,+Rajalakshmi+Complex,+NH+47,+Main+Road,+near+New+Bus+Stand,+Bhavani,+Tamil+Nadu+638301",
    serviceAreas: ["Bhavani Town", "Komarapalayam", "Anthiyur", "Chithode", "Perundurai Road", "Erode District"],
    localServices: [
      {
        title: "Software Development in Bhavani",
        description: "Custom ERPs, CRMs, billing systems, and desktop-to-web conversions for local textile, manufacturing, and commercial enterprises.",
        linkSlug: "software-development",
      },
      {
        title: "Website Development in Bhavani",
        description: "High-performance websites, corporate web portals, and e-commerce platforms designed for local businesses and institutions.",
        linkSlug: "web-development",
      },
      {
        title: "Cloud & AWS Solutions in Bhavani",
        description: "Secure cloud hosting, AWS infrastructure setup, and automated data backups for business continuity.",
        linkSlug: "aws-services",
      },
      {
        title: "IT Consulting & Support in Bhavani",
        description: "Expert IT advisory, system maintenance, network configuration, and ongoing technical support.",
        linkSlug: "consulting",
      },
    ],
    whyChooseUs: [
      "Direct local presence and technical delivery team based in Bhavani.",
      "Custom software architecture tailored for textile, manufacturing, retail, and education sectors.",
      "Proven expertise in AWS Cloud and Zoho Suite integrations.",
      "Transparent communication, fast turnaround, and 24/7 ongoing technical support.",
    ],
    faqs: [
      {
        question: "Is Inzovate Technologies headquartered in Bhavani?",
        answer: "Yes, INZOVATE TECHNOLOGIES PRIVATE LIMITED has its primary corporate office located near the New Bus Stand in Bhavani, Tamil Nadu.",
      },
      {
        question: "What technology services does Inzovate provide for businesses in Bhavani?",
        answer: "We offer custom software development, web development, UI/UX design, mobile applications, AWS cloud consulting, business automation, and IT support.",
      },
      {
        question: "How can businesses in Bhavani get started with a technology consultation?",
        answer: "You can visit our Bhavani office, call us at +91 9342008797, or submit an online request form to schedule a consultation with our software engineering team.",
      },
    ],
  },

  erode: {
    slug: "erode",
    cityName: "Erode",
    priority: 2,
    metaTitle: "IT & Software Development Company in Erode | Inzovate Technologies",
    metaDescription: "Looking for a top software & web development company in Erode? Inzovate Technologies provides custom software, mobile apps, web design, and cloud solutions for Erode businesses.",
    h1Title: "IT & Software Company in Erode",
    intro: "Inzovate Technologies delivers enterprise IT solutions and custom software development for growing businesses across Erode district. From industrial automation to modern web portals, we help Erode enterprises scale digitally.",
    address: "Erode Region & Service Hub, Tamil Nadu, India",
    serviceAreas: ["Erode City", "Perundurai", "Bhavani Road", "Solar", "Chennimalai", "Modakurichi", "Thindal"],
    localServices: [
      {
        title: "Software Development in Erode",
        description: "Custom ERP, billing, inventory, and supply chain software for Erode's manufacturing, textile, and commercial industries.",
        linkSlug: "software-development",
      },
      {
        title: "Website Development & Design in Erode",
        description: "Responsive, mobile-optimized websites and web apps built to capture customers and build brand trust.",
        linkSlug: "web-development",
      },
      {
        title: "Mobile App Development in Erode",
        description: "Native and cross-platform iOS and Android apps for customer engagement and field sales teams.",
        linkSlug: "mobile-dev",
      },
      {
        title: "Digital Transformation in Erode",
        description: "Modernizing traditional paper processes and legacy tools into cloud-accessible digital tools.",
        linkSlug: "digital-transformation",
      },
    ],
    whyChooseUs: [
      "Deep understanding of Erode's textile, agricultural, and industrial business ecosystems.",
      "Proven track record delivering reliable web and mobile applications.",
      "Dedicated account managers and rapid technical support for Erode clients.",
      "Certified AWS and Zoho integration expertise.",
    ],
    faqs: [
      {
        question: "Does Inzovate Technologies provide software development services in Erode?",
        answer: "Yes, Inzovate Technologies provides complete software development, mobile app building, web design, and IT consulting services to clients in Erode.",
      },
      {
        question: "Can Inzovate build custom ERP systems for Erode textile and manufacturing companies?",
        answer: "Absolutely. We specialize in custom ERPs, stock management software, and automated billing tools built specifically for manufacturing and trade workflows.",
      },
    ],
  },

  salem: {
    slug: "salem",
    cityName: "Salem",
    priority: 3,
    metaTitle: "IT Company in Salem | Web Development & Software Services | Inzovate",
    metaDescription: "Inzovate Technologies is a premier IT company serving Salem businesses with custom software development, mobile apps, website design, and AWS cloud consulting.",
    h1Title: "IT & Software Development Company in Salem",
    intro: "Inzovate Technologies provides digital transformation, custom software, and website development services to organizations in Salem. Our engineering team builds high-performance technology that drives business growth.",
    address: "Salem ELCO-SEZ IT Park, P424+76G, Dalmiya colony, Jagir Ammapalayam, Vellakalpatti, Salem, Tamil Nadu 636012",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Salem+ELCO-SEZ+IT+Park,+P424%2B76G,+Dalmiya+colony,+Jagir+Ammapalayam,+Vellakalpatti,+Salem,+Tamil+Nadu+636012",
    serviceAreas: ["Salem City", "Jagir Ammapalayam", "Vellakalpatti", "Five Roads", "Fairlands", "Steel Plant Road", "Attur"],
    localServices: [
      {
        title: "Website Development in Salem",
        description: "Professional corporate websites, custom web apps, and modern UI/UX design engineered for high speed and conversion.",
        linkSlug: "web-development",
      },
      {
        title: "Custom Software Solutions in Salem",
        description: "Tailored enterprise management systems, CRM tools, and business automation platforms.",
        linkSlug: "software-development",
      },
      {
        title: "Cloud & AWS Consulting in Salem",
        description: "AWS cloud migration, server management, security audits, and infrastructure optimization.",
        linkSlug: "aws-services",
      },
      {
        title: "Mobile Application Development in Salem",
        description: "Intuitive Android and iOS apps designed for enterprise operations and retail customers.",
        linkSlug: "mobile-dev",
      },
    ],
    whyChooseUs: [
      "Physical presence at ELCO-SEZ IT Park region in Salem.",
      "Enterprise-grade coding standards, security, and cloud scalability.",
      "Comprehensive end-to-end service from UI design to production deployment.",
      "Dedicated technical support and clear milestone delivery.",
    ],
    faqs: [
      {
        question: "Does Inzovate Technologies have an office presence in Salem?",
        answer: "Yes, Inzovate operates a business development center at the ELCO-SEZ IT Park area in Salem, Tamil Nadu.",
      },
      {
        question: "What IT services are available for businesses in Salem?",
        answer: "We offer custom software, mobile app development, web design, cloud migration, AWS consulting, business automation, and IT advisory.",
      },
    ],
  },

  tiruchengode: {
    slug: "tiruchengode",
    cityName: "Tiruchengode",
    priority: 4,
    metaTitle: "IT Company in Tiruchengode | Web & Software Development | Inzovate",
    metaDescription: "Inzovate Technologies operates a dedicated Technology Delivery Center in Tiruchengode, providing software development, web applications, and IT consulting.",
    h1Title: "IT Company & Tech Delivery Center in Tiruchengode",
    intro: "With a dedicated Technology Delivery Center at KSRCE Neo in Tiruchengode, Inzovate Technologies Private Limited builds robust digital products, web applications, and enterprise software for regional and global enterprises.",
    address: "INZOVATE TECHNOLOGIES Pvt. Ltd., NO:309, Mercury Block KSRCE Neo, Tiruchengode, Tamil Nadu 637215",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=INZOVATE+TECHNOLOGIES+Pvt.+Ltd.,+NO:309,+Mercury+Block+KSRCE+Neo,+R-NO:309,+Tiruchengode,+Tamil+Nadu+637215",
    serviceAreas: ["Tiruchengode Town", "KSR Campus Region", "Sankari Road", "Namakkal Highway", "Velur"],
    localServices: [
      {
        title: "Software & Web Development in Tiruchengode",
        description: "Custom web software, educational portals, institutional systems, and business automation platforms.",
        linkSlug: "software-development",
      },
      {
        title: "UI/UX & Mobile App Design in Tiruchengode",
        description: "Engaging user interface design and Android/iOS app development built with React Native and Flutter.",
        linkSlug: "ui-ux-design",
      },
      {
        title: "AWS Cloud & DevOps in Tiruchengode",
        description: "Automated deployment pipelines, cloud hosting, server security, and backup infrastructure.",
        linkSlug: "aws-services",
      },
    ],
    whyChooseUs: [
      "Dedicated Technology Delivery Center located inside the KSRCE Neo tech facility.",
      "Skilled software engineers experienced in modern JavaScript, cloud, and AI frameworks.",
      "Ideal technology partner for educational institutions, businesses, and startups.",
    ],
    faqs: [
      {
        question: "Where is Inzovate's delivery center located in Tiruchengode?",
        answer: "Our delivery center is located at Room NO:309, Mercury Block, KSRCE Neo, Tiruchengode, Tamil Nadu.",
      },
    ],
  },

  namakkal: {
    slug: "namakkal",
    cityName: "Namakkal",
    priority: 5,
    metaTitle: "IT Company in Namakkal | Software Development & Web Design | Inzovate",
    metaDescription: "Inzovate Technologies serves Namakkal businesses with high-quality software development, website design, mobile apps, and cloud integration.",
    h1Title: "IT & Software Solutions Company in Namakkal",
    intro: "Inzovate Technologies brings enterprise software engineering and modern web development to businesses across Namakkal district. We help logistics, poultry, manufacturing, and commercial sectors modernize their software operations.",
    address: "Namakkal Region & Service Hub, Tamil Nadu, India",
    serviceAreas: ["Namakkal Town", "Tiruchengode", "Rasipuram", "Paramathi Velur", "Mohanur"],
    localServices: [
      {
        title: "Custom Software for Namakkal Businesses",
        description: "Tailored transport management, poultry farm software, billing tools, and operational ERPs.",
        linkSlug: "software-development",
      },
      {
        title: "Website Design & Web Apps in Namakkal",
        description: "Mobile-responsive website design and interactive web applications for local institutions and enterprises.",
        linkSlug: "web-development",
      },
      {
        title: "Cloud & Automation in Namakkal",
        description: "Automating routine office workflows and moving core files to secure AWS cloud hosting.",
        linkSlug: "automation",
      },
    ],
    whyChooseUs: [
      "Direct technical coverage across Namakkal district through our nearby Tiruchengode delivery center.",
      "Custom software designed for regional industry workflows (logistics, agriculture, retail).",
      "Reliable support and long-term tech partnership.",
    ],
    faqs: [
      {
        question: "Does Inzovate Technologies serve clients in Namakkal?",
        answer: "Yes, we serve companies and educational institutions throughout Namakkal district with software development, web applications, and cloud solutions.",
      },
    ],
  },

  coimbatore: {
    slug: "coimbatore",
    cityName: "Coimbatore",
    priority: 6,
    metaTitle: "IT & Software Company in Coimbatore | Inzovate Technologies",
    metaDescription: "Inzovate Technologies provides custom software development, web applications, AWS cloud consulting, and UI/UX design for businesses in Coimbatore.",
    h1Title: "IT & Enterprise Software Company in Coimbatore",
    intro: "Operating from Avinashi Road in Coimbatore, Inzovate Technologies delivers enterprise-grade software development, AWS cloud infrastructure, mobile application engineering, and digital consulting to businesses in Coimbatore.",
    address: "GRAND BRENTON, Bus Stop, 281, Avinashi Rd, next to Varadharaja Mills, Periyar Nagar, Coimbatore, Tamil Nadu 641004",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Brenton,+GRAND+BRENTON,+Bus+Stop,+281,+Avinashi+Rd,+next+to+Varadharaja+Mills,+Periyar+Nagar,+Coimbatore,+Tamil+Nadu+641004",
    serviceAreas: ["Avinashi Road", "Peelamedu", "TIDEL Park Region", "Gandhipuram", "Saravanampatti", "R.S. Puram"],
    localServices: [
      {
        title: "Enterprise Software Development in Coimbatore",
        description: "Scalable multi-tenant SaaS platforms, custom ERP systems, and microservices architecture.",
        linkSlug: "enterprise-apps",
      },
      {
        title: "AWS Cloud & DevOps in Coimbatore",
        description: "AWS architecture consulting, cloud security audits, Docker containerization, and CI/CD pipelines.",
        linkSlug: "aws-services",
      },
      {
        title: "UI/UX & Web Development in Coimbatore",
        description: "User-centric design systems and modern web applications built with React, Next.js, and Node.js.",
        linkSlug: "web-development",
      },
      {
        title: "AI & Data Analytics in Coimbatore",
        description: "Machine learning model integration, data warehouse setups, and executive BI reporting dashboards.",
        linkSlug: "ai-ml",
      },
    ],
    whyChooseUs: [
      "Regional office located on Avinashi Road, Coimbatore.",
      "Proven delivery experience with enterprise software and complex cloud architectures.",
      "Certified expertise in AWS Cloud and Zoho Enterprise integrations.",
      "Agile engineering practices, dedicated project management, and transparent code quality.",
    ],
    faqs: [
      {
        question: "Where is Inzovate's office located in Coimbatore?",
        answer: "Our office is located at Grand Brenton, 281 Avinashi Road (next to Varadharaja Mills), Periyar Nagar, Coimbatore, Tamil Nadu 641004.",
      },
      {
        question: "What software services does Inzovate offer to Coimbatore companies?",
        answer: "We offer enterprise software development, React web applications, native/cross-platform mobile apps, AWS cloud infrastructure, UI/UX design, and AI automation.",
      },
    ],
  },
};
