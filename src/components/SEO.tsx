import { useEffect } from "react";
import { SEO_CONFIG } from "../config/seoConfig";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  canonical?: string;
  keywordString?: string;
  keywords?: string;
  pageType?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "business.business";
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  serviceSchema?: {
    name: string;
    description: string;
    serviceType?: string;
    providerName?: string;
    areaServed?: string[];
  };
  locationSchema?: {
    cityName: string;
    address: string;
    region: string;
  };
  articleSchema?: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    authorName?: string;
  };
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  canonical,
  keywordString,
  keywords,
  ogImage,
  ogType = "website",
  noIndex = false,
  breadcrumbs,
  faqs,
  serviceSchema,
  locationSchema,
  articleSchema,
}: SEOProps) {
  const fullTitle = title
    ? (title.toLowerCase().includes("inzovate") ? title : `${title} | ${SEO_CONFIG.brandName}`)
    : SEO_CONFIG.defaultTitle;

  const fullDescription = description || SEO_CONFIG.defaultDescription;
  const rawPath = typeof window !== "undefined" ? window.location.pathname : "";
  const cleanPath = rawPath.length > 1 && rawPath.endsWith("/") ? rawPath.slice(0, -1) : rawPath;
  let currentCanonical = canonicalUrl || canonical || `${SEO_CONFIG.siteUrl}${cleanPath}`;
  if (currentCanonical.endsWith("/") && currentCanonical !== `${SEO_CONFIG.siteUrl}/`) {
    currentCanonical = currentCanonical.slice(0, -1);
  }
  const image = ogImage || SEO_CONFIG.defaultOgImage;

  const rawKeywords = keywordString || keywords || "";
  const defaultKeywords = SEO_CONFIG.defaultKeywords;
  const finalKeywords = rawKeywords ? `${rawKeywords}, ${defaultKeywords}` : defaultKeywords;

  useEffect(() => {
    // 1. Title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentVal);
    };

    // Helper to update link tag
    const setLinkTag = (rel: string, hrefVal: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", hrefVal);
    };

    // 2. Standard Meta
    setMetaTag('meta[name="description"]', "name", "description", fullDescription);
    setMetaTag('meta[name="keywords"]', "name", "keywords", finalKeywords);
    setMetaTag('meta[name="robots"]', "name", "robots", noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 3. Canonical
    setLinkTag("canonical", currentCanonical);

    // 4. Open Graph Meta
    setMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", fullDescription);
    setMetaTag('meta[property="og:url"]', "property", "og:url", currentCanonical);
    setMetaTag('meta[property="og:image"]', "property", "og:image", image);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", SEO_CONFIG.legalName);

    // 5. Twitter Meta
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", fullDescription);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", image);
    setMetaTag('meta[name="twitter:site"]', "name", "twitter:site", SEO_CONFIG.twitterHandle);

    // 6. JSON-LD Schemas injection
    const scriptId = "inzovate-jsonld-schemas";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const schemas: any[] = [];

    // Organization & Primary LocalBusiness Schema
    const orgSchema: any = {
      "@context": "https://schema.org",
      "@type": ["Organization", "Corporation", "ITBusiness"],
      "@id": `${SEO_CONFIG.siteUrl}/#organization`,
      name: SEO_CONFIG.legalName,
      alternateName: SEO_CONFIG.brandName,
      url: SEO_CONFIG.siteUrl,
      logo: `${SEO_CONFIG.siteUrl}/inzovate-logo.png`,
      image: `${SEO_CONFIG.siteUrl}/inzovate-logo.png`,
      description: SEO_CONFIG.defaultDescription,
      telephone: SEO_CONFIG.phone,
      email: SEO_CONFIG.email,
      sameAs: SEO_CONFIG.socialProfiles,
      address: {
        "@type": "PostalAddress",
        streetAddress: SEO_CONFIG.locations.bhavani.address,
        addressLocality: "Bhavani",
        addressRegion: "Tamil Nadu",
        postalCode: "638301",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "11.4468",
        longitude: "77.6826",
      },
      areaServed: [
        { "@type": "City", name: "Bhavani" },
        { "@type": "City", name: "Erode" },
        { "@type": "City", name: "Salem" },
        { "@type": "City", name: "Tiruchengode" },
        { "@type": "City", name: "Namakkal" },
        { "@type": "City", name: "Coimbatore" },
        { "@type": "State", name: "Tamil Nadu" },
      ],
      knowsAbout: [
        "Zoho CRM Partner",
        "Best Software Development Company in Erode",
        "CRM Services",
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development",
        "UI/UX Design",
        "Cloud Computing",
        "AWS Cloud Consulting Partner",
        "Zoho CRM Consulting and Implementation",
        "Custom ERP Systems",
        "Digital Transformation",
        "IT Infrastructure Support",
      ],
    };
    schemas.push(orgSchema);

    // WebSite Schema for Google Search Sitelinks
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SEO_CONFIG.siteUrl}/#website`,
      url: SEO_CONFIG.siteUrl,
      name: SEO_CONFIG.brandName,
      alternateName: SEO_CONFIG.legalName,
      publisher: {
        "@id": `${SEO_CONFIG.siteUrl}/#organization`,
      },
    };
    schemas.push(websiteSchema);

    // Location Schema if specific location page
    if (locationSchema) {
      const locSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: `Inzovate Technologies - IT & Software Services in ${locationSchema.cityName}`,
        url: currentCanonical,
        telephone: SEO_CONFIG.phone,
        email: SEO_CONFIG.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: locationSchema.address,
          addressLocality: locationSchema.cityName,
          addressRegion: locationSchema.region,
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: locationSchema.cityName,
        },
      };
      schemas.push(locSchema);
    }

    // Service Schema if service page
    if (serviceSchema) {
      const servSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceSchema.name,
        description: serviceSchema.description,
        serviceType: serviceSchema.serviceType || serviceSchema.name,
        provider: {
          "@type": "Organization",
          name: SEO_CONFIG.legalName,
          url: SEO_CONFIG.siteUrl,
        },
        areaServed: (serviceSchema.areaServed || [
          "Bhavani",
          "Erode",
          "Salem",
          "Tiruchengode",
          "Namakkal",
          "Coimbatore",
          "Tamil Nadu",
        ]).map((city) => ({ "@type": "City", name: city })),
      };
      schemas.push(servSchema);
    }

    // Breadcrumbs Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: b.name,
          item: b.url.startsWith("http") ? b.url : `${SEO_CONFIG.siteUrl}${b.url}`,
        })),
      };
      schemas.push(breadcrumbSchema);
    }

    // FAQ Schema
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
      schemas.push(faqSchema);
    }

    // BlogPosting / Article Schema
    if (articleSchema) {
      const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: articleSchema.headline,
        description: articleSchema.description,
        image: [articleSchema.image.startsWith("http") ? articleSchema.image : `${SEO_CONFIG.siteUrl}${articleSchema.image}`],
        datePublished: articleSchema.datePublished,
        dateModified: articleSchema.datePublished,
        author: {
          "@type": "Organization",
          name: articleSchema.authorName || SEO_CONFIG.brandName,
          url: SEO_CONFIG.siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: SEO_CONFIG.legalName,
          logo: {
            "@type": "ImageObject",
            url: `${SEO_CONFIG.siteUrl}/inzovate-logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": currentCanonical,
        },
      };
      schemas.push(blogPostingSchema);
    }

    scriptTag.textContent = JSON.stringify(schemas, null, 2);
  }, [fullTitle, fullDescription, currentCanonical, image, ogType, noIndex, breadcrumbs, faqs, serviceSchema, locationSchema, articleSchema]);

  return null;
}
