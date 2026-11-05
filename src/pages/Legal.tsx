import { motion } from "framer-motion";
import SEO from "../components/SEO";

function LegalPage({ title, canonical, sections }: { title: string; canonical: string; sections: { heading: string; body: string }[] }) {
  const words = title.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <main className="bg-[#F8FAFC] text-slate-900 min-h-screen">
      <SEO
        title={`${title} | INZOVATE TECHNOLOGIES PRIVATE LIMITED`}
        description={`Read the official ${title} for INZOVATE TECHNOLOGIES PRIVATE LIMITED.`}
        canonical={canonical}
        pageType="website"
      />

      <div className="sh-spacer" />

      {/* Top Hero Section with sh-spacer opening animation & transitions */}
      <section className="relative pt-20 sm:pt-28 pb-14 sm:pb-20 bg-gradient-to-b from-blue-50/70 via-white to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
        {/* Soft background grid lines */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-4 home-banner-animate animate">
            <div className="fade-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 font-mono shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span>Legal &amp; Compliance Center</span>
              </div>
            </div>

            <div className="fade-right delay-1">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {restWords ? (
                  <>
                    <span className="text-slate-900">{firstWord} </span>
                    <span className="text-blue-600">{restWords}</span>
                  </>
                ) : (
                  <span className="text-slate-900">{title}</span>
                )}
              </h1>
            </div>

            <div className="fade-left delay-2">
              <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl mx-auto">
                Last updated: September 2026 · INZOVATE TECHNOLOGIES PRIVATE LIMITED
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[860px] mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            {sections.map(({ heading, body }) => (
              <div
                key={heading}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-blue-300 transition-colors"
              >
                <h2
                  className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                  <span className="text-slate-900">{heading}</span>
                </h2>
                <p className="text-[15px] text-slate-600 leading-relaxed font-normal">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" canonical="https://inzovate-technologies.com/privacy-policy" sections={[
      { heading: "1. Introduction", body: "INZOVATE TECHNOLOGIES PRIVATE LIMITED ('we', 'our', 'us') is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services." },
      { heading: "2. Information We Collect", body: "We collect information you provide directly to us, such as when you fill out a contact form or request a demo. This may include your name, email address, company name, and phone number. We also collect usage data through standard web analytics." },
      { heading: "3. How We Use Your Information", body: "We use the information we collect to respond to your inquiries, provide our services, improve our website, and communicate with you about our products and services. We do not sell your personal information to third parties." },
      { heading: "4. Data Security", body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
      { heading: "5. Contact Us", body: "If you have any questions about this Privacy Policy, please contact us through our website contact form. We are headquartered in Tamil Nadu, India." },
    ]} />
  );
}

export function Terms() {
  return (
    <LegalPage title="Terms & Conditions" canonical="https://inzovate-technologies.com/terms" sections={[
      { heading: "1. Acceptance of Terms", body: "By accessing and using the INZOVATE TECHNOLOGIES website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website." },
      { heading: "2. Use of Website", body: "You may use our website for lawful purposes only. You must not use our website in any way that causes or may cause damage to the website or impairment of the availability or accessibility of the website." },
      { heading: "3. Intellectual Property", body: "All content on this website, including text, graphics, logos, and software, is the property of INZOVATE TECHNOLOGIES PRIVATE LIMITED and is protected by applicable intellectual property laws." },
      { heading: "4. Limitation of Liability", body: "INZOVATE TECHNOLOGIES shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services." },
      { heading: "5. Governing Law", body: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Tamil Nadu, India." },
    ]} />
  );
}

export function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" canonical="https://inzovate-technologies.com/cookie-policy" sections={[
      { heading: "1. What Are Cookies", body: "Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how our website is used." },
      { heading: "2. How We Use Cookies", body: "We use cookies to understand how visitors interact with our website, to remember your preferences, and to improve site performance. We use both session cookies (which expire when you close your browser) and persistent cookies." },
      { heading: "3. Types of Cookies We Use", body: "We use strictly necessary cookies required for the website to function, analytics cookies to understand usage patterns, and preference cookies to remember your settings." },
      { heading: "4. Managing Cookies", body: "Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies, delete existing cookies, or be notified when new cookies are set. Note that disabling cookies may affect website functionality." },
      { heading: "5. Contact", body: "For questions about our Cookie Policy, please contact us through our website. We review and update this policy periodically." },
    ]} />
  );
}
