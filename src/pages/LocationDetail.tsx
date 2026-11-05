import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, ArrowRight, CheckCircle2, Building2, HelpCircle, Phone, Mail, ExternalLink } from "lucide-react";
import SEO from "../components/SEO";
import DemoModal from "../components/DemoModal";
import { LOCATION_DATA } from "../data/locationData";

export default function LocationDetail() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  if (!citySlug || !LOCATION_DATA[citySlug.toLowerCase()]) {
    return <Navigate to="/locations" replace />;
  }

  const loc = LOCATION_DATA[citySlug.toLowerCase()];

  const openConsultation = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  return (
    <main className="bg-[#F8FAFC] text-slate-900 min-h-screen pt-16 sm:pt-20 pb-16 overflow-hidden">
      <SEO
        title={loc.metaTitle}
        description={loc.metaDescription}
        canonicalUrl={`https://inzovate-technologies.com/locations/${loc.slug}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: loc.cityName, url: `/locations/${loc.slug}` },
        ]}
        faqs={loc.faqs}
        locationSchema={{
          cityName: loc.cityName,
          address: loc.address,
          region: "Tamil Nadu",
        }}
      />

      <div className="sh-spacer" />

      {/* Hero Header */}
      <section className="relative max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 z-10 home-banner-animate animate">
        <div className="max-w-4xl">
          <div className="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[11px] font-extrabold tracking-widest uppercase mb-6 shadow-xs">
              <MapPin size={14} className="text-blue-600" />
              <span>IT SERVICES IN {loc.cityName.toUpperCase()}</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {loc.h1Title}
            </h1>
          </div>

          <div className="fade-right delay-1">
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
              {loc.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center fade-left delay-2">
            <button
              onClick={() => openConsultation(`IT Consultation in ${loc.cityName}`)}
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Request Consultation in {loc.cityName}</span>
              <ArrowRight size={16} />
            </button>
            <Link
              to="/services"
              className="px-7 py-4 rounded-full border border-slate-300 text-slate-700 font-bold text-sm bg-white hover:bg-slate-50 shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              Explore 15 Services
            </Link>
          </div>
        </div>
      </section>

      {/* Address & Verified Location Info */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10">
        <div className="p-8 rounded-[24px] border border-slate-200 bg-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
              <Building2 size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                Inzovate Technologies — {loc.cityName} Address
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">{loc.address}</p>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                Serving: {loc.serviceAreas.join(" • ")}
              </p>
            </div>
          </div>

          {loc.mapUrl && (
            <a
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 font-semibold text-xs hover:bg-blue-100 transition-colors flex-shrink-0"
            >
              <span>View on Google Maps</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </section>

      {/* Local Services Offered */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10">
        <div className="mb-12">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 mb-3 inline-block">
            SERVICES IN {loc.cityName.toUpperCase()}
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Technology &amp; Software Services Provided in {loc.cityName}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loc.localServices.map((service, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[20px] border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <Link
                  to={`/services/${service.linkSlug}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5"
                >
                  <span>Learn more about {service.title}</span>
                  <ArrowRight size={14} />
                </Link>
                <button
                  onClick={() => openConsultation(service.title)}
                  className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10">
        <div className="p-8 sm:p-12 rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Why Businesses in {loc.cityName} Choose Inzovate Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {loc.whyChooseUs.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/50 hover:border-blue-200 transition-colors">
                <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {loc.faqs && loc.faqs.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20 z-10">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <HelpCircle size={32} className="text-blue-600 mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions — {loc.cityName}
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {loc.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-[18px] border border-slate-200 bg-white shadow-sm hover:border-blue-200 transition-colors">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Consultation Modal */}
      <DemoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProduct={selectedService}
        isServiceInquiry={true}
      />
    </main>
  );
}
