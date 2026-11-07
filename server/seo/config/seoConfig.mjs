/**
 * INZOVATE TECHNOLOGIES - 500,000 KEYWORD SEO INTELLIGENCE ENGINE
 * Configuration Module
 * 
 * Company: INZOVATE TECHNOLOGIES PRIVATE LIMITED
 * Official Site: https://inzovate-technologies.com/
 * 
 * Strict Principle: Never promise guaranteed first position on Google.
 * Focus on intent alignment, organic relevance, genuine pages, and zero keyword stuffing.
 */

export const SEO_CONFIG = {
  company: {
    legalName: "INZOVATE TECHNOLOGIES PRIVATE LIMITED",
    shortName: "Inzovate Technologies",
    websiteUrl: "https://inzovate-technologies.com",
    headquarters: "Bhavani, Tamil Nadu, India",
    primaryEmail: "inzovatetechnologies@gmail.com",
    supportEmail: "inzovatetech@gmail.com",
  },

  database: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/inzovate_seo",
    dbName: process.env.MONGODB_DB_NAME || "inzovate_seo",
    fallbackStorageDir: "./server/seo/data_store",
    batchSize: 5000,
    targetRecordCount: 500000,
  },

  collections: {
    keywords: "seo_keywords",
    clusters: "seo_clusters",
    pages: "seo_pages",
    metadata: "seo_metadata",
    rankTracking: "seo_rank_tracking",
    competitors: "seo_competitors",
    searchConsole: "seo_search_console",
    contentOpportunities: "seo_content_opportunities",
    auditLogs: "seo_audit_logs",
  },

  security: {
    adminApiKey: process.env.SEO_ADMIN_API_KEY || "inzovate-seo-secret-auth-key-2026",
    sessionSecret: process.env.SEO_SESSION_SECRET || "inzovate-enterprise-seo-guard-token-9988",
    rateLimitWindowMs: 15 * 60 * 1000, // 15 mins
    rateLimitMax: 300,
  },

  scoringWeights: {
    intent: {
      Commercial: 0.95,
      Transactional: 0.90,
      Informational: 0.65,
      Navigational: 0.40,
    },
    funnel: {
      BOFU: 0.95,
      MOFU: 0.75,
      TOFU: 0.55,
    },
    locationTier: {
      hyperlocal: 0.95, // Bhavani, Erode, Coimbatore, Salem, Tiruchengode
      metro: 0.85,      // Chennai, Bengaluru, Hyderabad, Mumbai, Delhi
      state: 0.80,      // Tamil Nadu
      national: 0.75,   // India
      global: 0.85,     // USA, UK, UAE, Singapore, Australia
    },
  },

  apis: {
    gsc: {
      clientEmail: process.env.GSC_CLIENT_EMAIL || "",
      privateKey: process.env.GSC_PRIVATE_KEY || "",
      siteUrl: process.env.GSC_SITE_URL || "sc-domain:inzovate-technologies.com",
    },
    ga4: {
      propertyId: process.env.GA4_PROPERTY_ID || "",
    },
  },

  privacy: {
    exposePublicEndpoints: false,
    maxPublicSampleKeywords: 0,
    injectHiddenHtmlKeywords: false,
  },
};
