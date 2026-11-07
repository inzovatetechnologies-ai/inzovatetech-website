/**
 * INZOVATE TECHNOLOGIES - SEO METADATA & SCHEMA GENERATOR
 * 
 * Generates verified, compliant meta titles, descriptions, OpenGraph,
 * and JSON-LD Structured Data (Schema.org) for Inzovate pages.
 * 
 * Strict Principle:
 * - Only legitimate, relevant metadata is rendered.
 * - Zero hidden text, zero keyword stuffing, zero spam tags.
 */

import { SEO_CONFIG } from "../config/seoConfig.mjs";

export function generatePageMetadata({ path = "/", pageTitle = "", primaryCluster = "", description = "", location = "" }) {
  const company = SEO_CONFIG.company;
  const canonicalUrl = `${company.websiteUrl}${path.startsWith("/") ? path : `/${path}`}`;

  // Title formatting (Clean, brand-anchored, under 65 chars)
  let title = pageTitle;
  if (!title.includes("Inzovate")) {
    title = `${pageTitle} | ${company.shortName}`;
  }
  if (title.length > 68) {
    title = title.substring(0, 65) + "...";
  }

  // Meta description formatting (145 - 160 chars)
  let metaDesc = description;
  if (!metaDesc) {
    metaDesc = `${company.shortName} delivers enterprise ${primaryCluster || "software"} solutions, cloud architecture, and business automation in Tamil Nadu and global markets.`;
  }
  if (metaDesc.length > 165) {
    metaDesc = metaDesc.substring(0, 157) + "...";
  }

  // JSON-LD Structured Data
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${company.websiteUrl}/#organization`,
        "name": company.legalName,
        "alternateName": company.shortName,
        "url": company.websiteUrl,
        "logo": `${company.websiteUrl}/inzovate-logo.png`,
        "email": company.primaryEmail,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhavani",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${company.websiteUrl}/#website`,
        "url": company.websiteUrl,
        "name": company.shortName,
        "publisher": { "@id": `${company.websiteUrl}/#organization` }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": title,
        "description": metaDesc,
        "isPartOf": { "@id": `${company.websiteUrl}/#website` }
      }
    ]
  };

  return {
    title,
    metaDescription: metaDesc,
    canonicalUrl,
    openGraph: {
      title,
      description: metaDesc,
      url: canonicalUrl,
      type: "website",
      siteName: company.shortName,
      image: `${company.websiteUrl}/inzovate-logo.png`,
    },
    schemaJson: JSON.stringify(schema, null, 2),
  };
}
