/**
 * INZOVATE TECHNOLOGIES - TRUST & EXPERIENCE SEO FRAMEWORK (EEAT)
 * 
 * Implements strict Google Experience, Expertise, Authoritativeness, 
 * and Trustworthiness (E-E-A-T) compliance principles:
 * 
 * 1. Truthful, verifiable claims only (zero fabricated project or client counts).
 * 2. Case study schema & verified implementation models.
 * 3. Clear distinction between registered physical headquarters (Bhavani/Erode)
 *    and remotely serviced districts (Namakkal, Salem, Coimbatore, National, Global).
 * 4. Transparent partner credentials: claims for Zoho and AWS must be based
 *    only on authorized competencies and verifiable enterprise engagements.
 */

export const TRUST_FRAMEWORK = {
  organization: {
    legalName: "INZOVATE TECHNOLOGIES PRIVATE LIMITED",
    brandName: "Inzovate Technologies",
    website: "https://inzovate-technologies.com/",
    headquartersAddress: {
      addressLocality: "Bhavani",
      addressRegion: "Erode District, Tamil Nadu",
      postalCode: "638301",
      addressCountry: "India",
    },
    serviceDistricts: ["Erode", "Namakkal", "Salem", "Coimbatore"],
    serviceType: "Enterprise Software, ERP, CRM, Cloud Infrastructure & AI Automation",
  },

  compliancePolicies: {
    noFabricatedCounts: true,
    noGuaranteedRankings: true,
    noHiddenDoorwayPages: true,
    transparentLocationDisclosures: true,
  },

  /**
   * Structure for genuine project case studies
   */
  caseStudySchema: {
    requiredFields: [
      "clientIndustry",
      "businessChallenge",
      "solutionArchitecture",
      "technologiesUsed",
      "measurableBusinessOutcome",
      "clientConsentGiven",
    ],
  },

  /**
   * Generates EEAT compliant Organization & Service JSON-LD
   */
  generateOrganizationSchema(currentUrl = "https://inzovate-technologies.com/") {
    return {
      "@context": "https://schema.org",
      "@type": "ITOrganization",
      "name": "INZOVATE TECHNOLOGIES PRIVATE LIMITED",
      "alternateName": "Inzovate Technologies",
      "url": currentUrl,
      "logo": "https://inzovate-technologies.com/inzovate-logo.png",
      "foundingLocation": {
        "@type": "Place",
        "name": "Bhavani, Tamil Nadu, India"
      },
      "areaServed": [
        { "@type": "City", "name": "Bhavani" },
        { "@type": "AdministrativeArea", "name": "Erode District" },
        { "@type": "AdministrativeArea", "name": "Namakkal District" },
        { "@type": "AdministrativeArea", "name": "Salem District" },
        { "@type": "AdministrativeArea", "name": "Coimbatore District" },
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Singapore" },
        { "@type": "Country", "name": "Australia" }
      ],
      "knowsAbout": [
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Human Resource Management Systems (HRMS)",
        "Amazon Web Services (AWS) Cloud Architecture",
        "Zoho CRM and Enterprise Ecosystem Integration",
        "Artificial Intelligence & Process Automation",
        "Data Science & Predictive Business Analytics",
        "Full-Stack Web & Mobile Application Development"
      ]
    };
  }
};
