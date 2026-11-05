import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  MapPin,
  Hash,
  Clock,
  Handshake,
  Share2,
  Layers,
  Building2,
  Shield,
} from 'lucide-react';

const NAV_COLS = [
  {
    heading: 'COMPANY',
    icon: Building2,
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Company Profile', href: '/company' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Partnerships', href: '/strategic-partnerships' },
      { label: 'Locations Hub', href: '/locations' },
    ],
  },
  {
    heading: 'SOLUTIONS',
    icon: Layers,
    links: [
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing Plans', href: '/pricing' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Software Engineering', href: '/services/software-development' },
      { label: 'AWS Cloud Services', href: '/services/aws-services' },
    ],
  },
  {
    heading: 'LOCATIONS',
    icon: MapPin,
    links: [
      { label: 'Bhavani HQ', href: '/locations/bhavani' },
      { label: 'Tiruchengode Hub', href: '/locations/tiruchengode' },
      { label: 'Salem Tech Park', href: '/locations/salem' },
      { label: 'View All Locations', href: '/locations' },
    ],
  },
  {
    heading: 'CONNECT',
    icon: Share2,
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/inzovate-technologies/', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/inzovate_technologies.pvt.ltd?igsi=MW44bmZneXI2c2p6Yg==&utm_source=ig_contact_invite', external: true },
      { label: 'General Enquiries', href: 'mailto:inzovatetechnologies@gmail.com', external: true, title: 'inzovatetechnologies@gmail.com' },
      { label: 'Careers Desk', href: 'mailto:inzovatetech@gmail.com', external: true, title: 'inzovatetech@gmail.com' },
      { label: 'Request Demo', href: '/contact#contact-form' },
    ],
  },
  {
    heading: 'LEGAL',
    icon: Shield,
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Legal Compliance', href: '/terms' },
      { label: 'Data Security', href: '/privacy-policy' },
    ],
  },
];



function LinkedinIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
    </svg>
  );
}

function InstagramIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XTwitterIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function AwsLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/aws-logo.png"
      alt="Amazon Web Services"
      className={className}
      style={{ objectFit: 'contain' }}
      onError={(e) => {
        (e.target as HTMLImageElement).src =
          'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg';
      }}
    />
  );
}

function ZohoLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/zoho-logo.png"
      alt="Zoho"
      className={className}
      style={{ objectFit: 'contain' }}
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/zoho-logo-nav.png';
      }}
    />
  );
}

function NavLink({
  label,
  href,
  external,
  title,
}: {
  label: string;
  href: string;
  external?: boolean;
  title?: string;
}) {
  const inner = (
    <span className="group inline-flex items-center text-[13.5px] font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200 max-w-full">
      <span className="break-words leading-snug">{label}</span>
      <ArrowRight
        size={12}
        className="opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ml-1 text-blue-600 flex-shrink-0"
      />
    </span>
  );
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" title={title || label} className="inline-block max-w-full">
        {inner}
      </a>
    );
  return (
    <Link to={href} title={title || label} className="inline-block max-w-full">
      {inner}
    </Link>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [footerAnimated, setFooterAnimated] = useState(false);

  useEffect(() => {
    const currentRef = footerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterAnimated(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/inzovate-technologies/',
      icon: <LinkedinIcon size={15} />,
    },
    {
      label: 'X (Twitter)',
      href: 'https://x.com/INZOVATETECH',
      icon: <XTwitterIcon size={14} />,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/inzovate_technologies.pvt.ltd?igsi=MW44bmZneXI2c2p6Yg==&utm_source=ig_contact_invite',
      icon: <InstagramIcon size={15} />,
    },
    {
      label: 'Email',
      href: 'mailto:info@inzovate-technologies.com',
      icon: <Mail size={15} />,
    },
  ];

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden bg-[#F8FAFC] border-t border-slate-200 text-slate-900 font-sans ${footerAnimated ? 'footer-animate animate' : ''}`}
    >
      {/* Background Soft Gradients & Subtle Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[320px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 65%)',
        }}
      />

      <div className="relative max-w-[1360px] mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* ── 1. BRAND & 2. NAVIGATION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 pb-12 border-b border-slate-200">
          
          {/* BRAND BLOCK (Left 3 cols) - Ebix Smooth Left Reveal */}
          <div className="lg:col-span-3 flex flex-col space-y-4 footer-fade-left">
            <div className="space-y-3">
              <Link to="/" className="inline-flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2 shadow-sm border border-slate-200 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/pricing-icon.png"
                    alt="INZOVATE TECHNOLOGIES"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span
                    className="font-black text-[15px] tracking-[0.12em] text-slate-900 uppercase"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    INZOVATE
                  </span>
                  <span className="font-semibold text-[9px] tracking-[0.22em] text-blue-600 uppercase">
                    TECHNOLOGIES
                  </span>
                </div>
              </Link>

              <div className="space-y-1.5 max-w-xs">
                <p
                  className="text-sm font-bold text-slate-900"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Engineering Digital Futures.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Building smarter businesses through technology, innovation, cloud, automation, and strategic partnerships.
                </p>
              </div>
            </div>

            {/* Circular Frosted Social Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 xl:gap-5 min-w-0">
            {NAV_COLS.map((col, idx) => {
              const IconComp = col.icon;
              return (
                <div
                  key={col.heading}
                  className="space-y-4 footer-fade-down min-w-0"
                  style={{ animationDelay: `${0.18 + idx * 0.12}s` }}
                >
                  <div className="flex items-center gap-1.5 text-blue-600 min-w-0">
                    <IconComp size={13} strokeWidth={2.2} className="flex-shrink-0" />
                    <h4
                      className="text-[11px] font-extrabold uppercase tracking-[0.2em] font-mono text-slate-900 truncate"
                    >
                      {col.heading}
                    </h4>
                  </div>
                  <ul className="space-y-2.5 min-w-0">
                    {col.links.map((l) => (
                      <li key={l.label} className="min-w-0">
                        <NavLink {...l} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>

        {/* ── 3. STRATEGIC PARTNERSHIPS & ALLIANCES ── */}
        <div
          className={`relative rounded-[28px] sm:rounded-[36px] border border-slate-200/90 bg-white p-6 sm:p-7 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden whatareyou-animate ${footerAnimated ? 'animate' : ''}`}
          style={{ userSelect: 'none' }}
        >
          {/* Subtle Top Accent Hairline & Ambient Glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header Row */}
          <div className="fade-left relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3
                className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Certified Enterprise Technology Partners
              </h3>
            </div>

            <Link
              to="/strategic-partnerships"
              className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold text-white hover:bg-blue-700 bg-blue-600 border border-blue-600 shadow-sm transition-all flex-shrink-0 self-start sm:self-auto"
            >
              <span>Explore All Alliances</span>
            </Link>
          </div>

          {/* Two Balanced, Medium-Height Partner Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            
            {/* AWS Partner Card */}
            <Link
              to="/services/aws-services"
              className="fade-right delay-1 group flex flex-col justify-between p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <AwsLogo className="w-full h-full" />
                  </div>
                  <div>
                    <h4
                      className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Amazon Web Services
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-600 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Technology Partner
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Enterprise cloud architecture, serverless infrastructure, and high-availability DevOps workflows.
                </p>
              </div>

              {/* Capability Chips */}
              <div className="pt-2.5 border-t border-slate-200 flex items-center gap-1.5">
                {['Cloud Native', 'DevOps & CI/CD', 'Security'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>

            {/* Zoho Partner Card */}
            <Link
              to="/strategic-partnerships"
              className="fade-right delay-2 group flex flex-col justify-between p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <ZohoLogo className="w-full h-full" />
                  </div>
                  <div>
                    <h4
                      className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Zoho Enterprise Suite
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-rose-600 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      Official Zoho Partner
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Comprehensive CRM rollout, automated financial pipelines with Zoho Books, and low-code Creator apps.
                </p>
              </div>

              {/* Capability Chips */}
              <div className="pt-2.5 border-t border-slate-200 flex items-center gap-1.5">
                {['Zoho CRM', 'Zoho Books', 'Creator Apps'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>

          </div>
        </div>

        {/* ── 5. PREMIUM BOTTOM BAR ── */}
        <div
          className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium footer-fade-down"
          style={{ animationDelay: '0.65s' }}
        >
          {/* Left Copyright */}
          <div className="text-slate-600 font-medium">
            © 2026 INZOVATE TECHNOLOGIES PRIVATE LIMITED. All Rights Reserved.
          </div>

          {/* Center Details */}
          <div className="hidden lg:block text-slate-500 font-mono">
            CIN: U62011TZ2025PTC036329  •  Bhavani, Tamil Nadu, India
          </div>
        </div>

      </div>
    </footer>
  );
}
