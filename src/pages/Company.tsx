import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2, Calendar, CheckCircle2, Cpu, Globe, Hash, Lightbulb, MapPin, Rocket, Shield, Sparkles, Target, Users } from "lucide-react";
import CompanyProfileSection from "../components/CompanyProfileSection";
import OurImpactSection from "../components/OurImpactSection";
import OurValuesSection from "../components/OurValuesSection";
import LetsBuildFutureSection from "../components/LetsBuildFutureSection";
import SEO from "../components/SEO";
import { ShaderMetal } from "@/components/ui/shader-metal";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const positioning = [
  { icon: Cpu, label: "Technology Solutions Company" },
  { icon: Building2, label: "Software Product Company" },
  { icon: Target, label: "Digital Transformation Partner" },
  { icon: Shield, label: "Cloud Solutions Provider" },
  { icon: Sparkles, label: "AI & Automation Company" },
  { icon: Building2, label: "Enterprise Technology Partner" },
  { icon: Target, label: "Business Technology Solutions Provider" },
];

const profileDetails = [
  { icon: Building2, label: "Legal Name", value: "INZOVATE TECHNOLOGIES PRIVATE LIMITED" },
  { icon: Hash, label: "CIN", value: "U62099TZ2023PTC032559" },
  { icon: Calendar, label: "Established", value: "June 2023" },
  { icon: MapPin, label: "Registered Location", value: "Tamil Nadu, India" },
];

const impactStats = [
  { value: "150+", label: "Happy Clients", detail: "Trusted by startups to enterprises worldwide.", icon: Users },
  { value: "600+", label: "Projects Delivered", detail: "Successful digital solutions delivered across industries.", icon: Rocket },
  { value: "15+", label: "Expert Team", detail: "Passionate professionals driving innovation.", icon: Sparkles },
  { value: "2+", label: "Years of Excellence", detail: "Building solutions that create lasting impact.", icon: Target },
];

const values = [
  { label: "INNOVATION", description: "We constantly explore new ideas and technologies to build smarter solutions.", icon: Lightbulb },
  { label: "INTEGRITY", description: "We believe in transparency, honesty and doing the right thing always.", icon: Shield },
  { label: "CUSTOMER FIRST", description: "Our customers’ success is our success. We listen, understand and deliver value.", icon: Users },
  { label: "EXCELLENCE", description: "We are committed to quality, performance and continuous improvement.", icon: Target },
  { label: "IMPACT", description: "We build technology that creates positive change for businesses and communities.", icon: Globe },
];

export default function Company() {
  return (
    <main className="company-page">
      <SEO
        title="Company Profile | INZOVATE TECHNOLOGIES PRIVATE LIMITED"
        description="Official company profile of INZOVATE TECHNOLOGIES PRIVATE LIMITED (CIN: U62099TZ2023PTC032559). Leading IT solutions, software engineering, AWS & Zoho consulting."
        canonical="https://inzovate-technologies.com/company"
        keywordString="INZOVATE TECHNOLOGIES PRIVATE LIMITED, CIN U62099TZ2023PTC032559, IT company profile, software development company registration Tamil Nadu"
        pageType="website"
      />

      <div className="sh-spacer" />

      <section className="company-hero relative overflow-hidden bg-white" aria-labelledby="company-hero-heading">
        {/* Liquid Metal Ribbon Background Layer with Smooth Radial Mask */}
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_80%_75%_at_50%_50%,black_30%,transparent_90%)]">
          <ShaderMetal
            metal="chrome"
            color="#F2F3F5"
            ribbons={3}
            speed={0.25}
            iridescence={0.2}
            interactive={true}
            theme="light"
            className="opacity-40"
          />
        </div>

        {/* 4-Edge & Corner Seamless White Blending Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#FFFFFF_90%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="company-container company-hero__inner relative z-10 !flex !flex-col !items-center !text-center !max-w-5xl !min-h-0 !py-20 sm:!py-24 lg:!py-28">
          <div className="company-hero__copy flex flex-col items-center text-center w-full home-banner-animate animate">
            {/* Eyebrow Pill Badge */}
            <div className="fade-left inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white/90 shadow-xs mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-blue-700 font-mono">
                COMPANY PROFILE &amp; IDENTITY
              </span>
            </div>

            {/* High-Impact Headline */}
            <div className="fade-right delay-1">
              <h1
                id="company-hero-heading"
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.08] max-w-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Built for the{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Future of Business.
                </span>
              </h1>
            </div>

            {/* Subtitle with High Legibility */}
            <div className="fade-left delay-2">
              <p className="company-hero__lede text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mt-6 !mx-auto font-normal">
                We build intelligent, scalable, and future-ready digital solutions that empower businesses to innovate, grow, and lead in a digital world.
              </p>
            </div>

            {/* Premium CTA Button */}
            <div className="fade-right delay-3 company-hero__actions mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#company-profile"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-extrabold text-white text-sm bg-gradient-to-r from-[#1746A2] to-[#2563EB] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <span>Explore Company Profile</span>
                <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upgraded Premium Company Profile Section */}
      <CompanyProfileSection />

      {/* Upgraded Premium Our Impact Section */}
      <OurImpactSection />

      {/* Upgraded Premium Our Values Section */}
      <OurValuesSection />

      {/* Upgraded Premium Let's Build the Future Together CTA Banner Section */}
      <LetsBuildFutureSection />
    </main>
  );
}
