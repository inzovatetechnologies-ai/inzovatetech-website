// Centralized Enterprise SEO Configuration for INZOVATE TECHNOLOGIES PRIVATE LIMITED
import {
  ALL_SEO_KEYWORDS,
  SEO_KEYWORDS_STRING,
  CATEGORIZED_SEO_KEYWORDS,
  CRM_KEYWORDS,
  ERP_KEYWORDS,
  HRMS_KEYWORDS,
  DATA_ANALYTICS_KEYWORDS,
  CLOUD_KEYWORDS,
  CUSTOM_SOFTWARE_KEYWORDS,
  AI_AUTOMATION_KEYWORDS,
  LOCALIZED_KEYWORDS,
  HIGH_INTENT_KEYWORDS,
} from "./seoKeywords";

export {
  ALL_SEO_KEYWORDS,
  SEO_KEYWORDS_STRING,
  CATEGORIZED_SEO_KEYWORDS,
  CRM_KEYWORDS,
  ERP_KEYWORDS,
  HRMS_KEYWORDS,
  DATA_ANALYTICS_KEYWORDS,
  CLOUD_KEYWORDS,
  CUSTOM_SOFTWARE_KEYWORDS,
  AI_AUTOMATION_KEYWORDS,
  LOCALIZED_KEYWORDS,
  HIGH_INTENT_KEYWORDS,
};

export const SEO_CONFIG = {
  legalName: "INZOVATE TECHNOLOGIES PRIVATE LIMITED",
  brandName: "Inzovate Technologies",
  siteUrl: "https://inzovate-technologies.com",
  defaultTitle: "Inzovate Technologies | IT Company & Software Development in Tamil Nadu",
  defaultDescription:
    "INZOVATE TECHNOLOGIES PRIVATE LIMITED is a technology and software development company providing custom software, web development, mobile apps, AWS cloud, UI/UX design, and IT consulting across Bhavani, Erode, Salem, Tiruchengode, Namakkal, and Coimbatore.",
  defaultKeywords: SEO_KEYWORDS_STRING,
  keywordsList: ALL_SEO_KEYWORDS,
  categorizedKeywords: CATEGORIZED_SEO_KEYWORDS,
  defaultOgImage: "https://inzovate-technologies.com/inzovate-logo.png",
  twitterHandle: "@inzovate_tech",

  // Primary Contact Details (Verified Records)
  phone: "+91 9342008797",
  email: "inzovatetechnologies@gmail.com",
  careersEmail: "inzovatetech@gmail.com",
  workingHours: "Mon - Fri: 9:00 AM - 6:00 PM IST",

  // Verified Business Locations (Primary HQ & Regional Delivery Hubs)
  locations: {
    bhavani: {
      name: "Bhavani Headquarters",
      city: "Bhavani",
      region: "Tamil Nadu",
      country: "India",
      address: "INZOVATE TECHNOLOGIES Pvt. Ltd., Rajalakshmi Complex, NH 47, Main Road, near New Bus Stand, Bhavani, Tamil Nadu 638301",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=INZOVATE+TECHNOLOGIES+Pvt.+Ltd.,+Rajalakshmi+Complex,+NH+47,+Main+Road,+near+New+Bus+Stand,+Bhavani,+Tamil+Nadu+638301",
      isHQ: true,
    },
    coimbatore: {
      name: "Coimbatore Operations Office",
      city: "Coimbatore",
      region: "Tamil Nadu",
      country: "India",
      address: "GRAND BRENTON, Bus Stop, 281, Avinashi Rd, next to Varadharaja Mills, Periyar Nagar, Coimbatore, Tamil Nadu 641004",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Brenton,+GRAND+BRENTON,+Bus+Stop,+281,+Avinashi+Rd,+next+to+Varadharaja+Mills,+Periyar+Nagar,+Coimbatore,+Tamil+Nadu+641004",
      isHQ: false,
    },
    tiruchengode: {
      name: "Tiruchengode Delivery Center",
      city: "Tiruchengode",
      region: "Namakkal, Tamil Nadu",
      country: "India",
      address: "INZOVATE TECHNOLOGIES Pvt. Ltd., NO:309, Mercury Block KSRCE Neo, Tiruchengode, Tamil Nadu 637215",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=INZOVATE+TECHNOLOGIES+Pvt.+Ltd.,+NO:309,+Mercury+Block+KSRCE+Neo,+R-NO:309,+Tiruchengode,+Tamil+Nadu+637215",
      isHQ: false,
    },
    salem: {
      name: "Salem Business Development Center",
      city: "Salem",
      region: "Tamil Nadu",
      country: "India",
      address: "Salem ELCO-SEZ IT Park, P424+76G, Dalmiya colony, Jagir Ammapalayam, Vellakalpatti, Salem, Tamil Nadu 636012",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Salem+ELCO-SEZ+IT+Park,+P424%2B76G,+Dalmiya+colony,+Jagir+Ammapalayam,+Vellakalpatti,+Salem,+Tamil+Nadu+636012",
      isHQ: false,
    },
    erode: {
      name: "Erode Service Hub",
      city: "Erode",
      region: "Tamil Nadu",
      country: "India",
      address: "Erode Region, Tamil Nadu, India",
      mapUrl: "",
      isHQ: false,
    },
    namakkal: {
      name: "Namakkal Service Hub",
      city: "Namakkal",
      region: "Tamil Nadu",
      country: "India",
      address: "Namakkal Region, Tamil Nadu, India",
      mapUrl: "",
      isHQ: false,
    },
  },

  // Verified Technology Partners
  partners: {
    aws: {
      name: "Amazon Web Services (AWS)",
      role: "AWS Cloud Solutions & Consulting Partner",
      description: "Building secure, scalable cloud infrastructure, serverless applications, DevOps pipelines, and cloud migration on AWS.",
    },
    zoho: {
      name: "Zoho",
      role: "Zoho Suite Implementation & Consulting Partner",
      description: "Custom implementation, workflow integration, and support for Zoho CRM, Zoho Books, Zoho People, Zoho Projects, and Zoho One.",
    },
  },

  // Verified Social Profiles
  socialProfiles: [
    "https://www.linkedin.com/company/inzovate-technologies/",
    "https://www.instagram.com/inzovate_technologies/",
    "https://www.facebook.com/inzovatetechnologies/",
    "https://www.youtube.com/@inzovatetechnologies",
  ],
};
