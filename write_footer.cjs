const fs = require('fs');
const content = `import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, ArrowUp, Mail, MapPin, Hash, Clock, Share2, Globe, ExternalLink } from 'lucide-react';

const NAV_COLS = [
  { heading: 'Company', links: [{ label: 'About', href: '/about' },{ label: 'Company', href: '/company' },{ label: 'Careers', href: '/careers' },{ label: 'Strategic Partnerships', href: '/strategic-partnerships' }] },
  { heading: 'Solutions', links: [{ label: 'Products', href: '/products' },{ label: 'Services', href: '/services' },{ label: 'Cloud', href: '/services' },{ label: 'AI & Automation', href: '/services' },{ label: 'Cybersecurity', href: '/services' }] },
  { heading: 'Connect', links: [{ label: 'Contact', href: '/contact' },{ label: 'LinkedIn', href: 'https://linkedin.com', external: true },{ label: 'Social Media', href: '#' },{ label: 'Email', href: 'mailto:info@inzovate.com', external: true }] },
  { heading: 'Legal', links: [{ label: 'Privacy Policy', href: '/privacy-policy' },{ label: 'Terms & Conditions', href: '/terms' },{ label: 'Cookie Policy', href: '/cookie-policy' }] },
];

const ZOHO_PRODUCTS = ['Zoho CRM','Zoho Books','Zoho People','Zoho Recruit','Zoho Projects','Zoho Desk','Zoho Mail','Zoho Creator','Zoho Inventory','Zoho One'];
const AWS_COMPACT = ['AWS Cloud','Cloud Infrastructure','Cloud Migration','Cloud Security','Cloud Consulting'];
const SOCIALS = [
  { Icon: Globe, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: Share2, href: '#', label: 'Social' },
  { Icon: ExternalLink, href: '#', label: 'Instagram' },
  { Icon: Mail, href: 'mailto:info@inzovate.com', label: 'Email' },
];

function useISTClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(new Date()).toUpperCase() + ' IST');
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function AwsLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Amazon Web Services">
      <path d="M22.6 19.2c0 .8.1 1.4.2 1.8.2.4.4.8.8 1.3.1.2.2.4.2.5 0 .2-.1.4-.4.6l-1.3.9c-.2.1-.4.2-.5.2-.2 0-.4-.1-.6-.3-.3-.3-.5-.6-.7-1-.2-.4-.4-.8-.6-1.4-1.5 1.8-3.4 2.7-5.7 2.7-1.6 0-2.9-.5-3.8-1.4-.9-.9-1.4-2.2-1.4-3.7 0-1.6.6-2.9 1.7-3.9 1.1-1 2.6-1.5 4.5-1.5.6 0 1.3.1 2 .2.7.1 1.4.3 2.2.5v-1.4c0-1.4-.3-2.4-.9-3-.6-.6-1.6-.9-3-.9-.6 0-1.3.1-2 .3-.7.2-1.4.4-2 .7-.3.1-.5.2-.6.2-.2 0-.3-.1-.3-.4v-.9c0-.2 0-.4.1-.5.1-.1.3-.2.5-.3.6-.3 1.4-.6 2.2-.8.9-.2 1.8-.3 2.8-.3 2.1 0 3.7.5 4.7 1.5 1 1 1.5 2.5 1.5 4.5v5.9zm-7.9 3c.6 0 1.2-.1 1.9-.4.7-.3 1.3-.7 1.8-1.3.3-.4.5-.8.6-1.2.1-.5.2-1 .2-1.7v-.8c-.5-.1-1.1-.2-1.7-.3-.6-.1-1.2-.1-1.7-.1-1.2 0-2.1.2-2.7.7-.6.5-.9 1.2-.9 2.1 0 .8.2 1.5.7 1.9.4.7 1 1.1 1.8 1.1zm14.6 2c-.2 0-.4 0-.5-.1-.1-.1-.2-.3-.3-.6l-3.5-11.5c-.1-.3-.1-.5-.1-.6 0-.2.1-.4.4-.4h1.6c.2 0 .4 0 .5.1.1.1.2.3.3.6l2.5 9.8 2.3-9.8c.1-.3.2-.5.3-.6.1-.1.3-.1.5-.1h1.3c.2 0 .4 0 .5.1.1.1.2.3.3.6l2.3 9.9 2.6-9.9c.1-.3.2-.5.3-.6.1-.1.3-.1.5-.1h1.5c.2 0 .4.1.4.4 0 .1 0 .2-.1.4l-3.6 11.5c-.1.3-.2.5-.3.6-.1.1-.3.1-.5.1h-1.4c-.2 0-.4 0-.5-.1-.1-.1-.2-.3-.3-.6l-2.3-9.6-2.3 9.6c-.1.3-.2.5-.3.6-.1.1-.3.1-.5.1h-1.4zm19.3.4c-.9 0-1.7-.1-2.6-.3-.8-.2-1.5-.5-2-.8-.3-.2-.5-.4-.5-.6v-.9c0-.3.1-.4.3-.4.1 0 .2 0 .4.1.1.1.3.1.4.2.6.3 1.2.5 1.9.6.7.1 1.3.2 2 .2 1.1 0 1.9-.2 2.5-.6.6-.4.9-.9.9-1.6 0-.5-.1-.9-.4-1.2-.3-.3-.9-.6-1.7-.9l-2.4-.7c-1.2-.4-2.1-.9-2.7-1.7-.6-.7-.9-1.6-.9-2.5 0-.7.2-1.4.5-1.9.3-.6.8-1.1 1.3-1.5.6-.4 1.2-.7 1.9-.9.7-.2 1.5-.3 2.3-.3.4 0 .8 0 1.2.1.4.1.8.1 1.2.2.4.1.7.2 1 .3.3.1.5.2.7.3.2.1.4.3.5.4.1.1.1.3.1.5v.9c0 .3-.1.4-.3.4-.1 0-.4-.1-.7-.3-.9-.4-1.9-.6-3-.6-1 0-1.7.2-2.3.5-.5.3-.8.8-.8 1.5 0 .5.2.9.5 1.2.3.3 1 .6 1.9.9l2.4.7c1.2.4 2 .9 2.6 1.6.5.7.8 1.5.8 2.4 0 .7-.1 1.4-.4 2-.3.6-.7 1.1-1.3 1.5-.5.4-1.2.7-1.9.9-.8.3-1.6.4-2.5.4z" fill="#FF9900" />
      <path d="M67.2 35.6c-5.8 4.3-14.2 6.6-21.5 6.6-10.2 0-19.3-3.8-26.2-10-.5-.5-.1-1.1.6-.7 7.5 4.3 16.7 6.9 26.3 6.9 6.4 0 13.5-1.3 20-4.1.9-.5 1.8.6.8 1.3z" fill="#FF9900" />
      <path d="M69.7 32.7c-.7-.9-4.6-.4-6.4-.2-.5.1-.6-.4-.1-.7 3.1-2.2 8.2-1.6 8.8-.8.6.7-.2 5.9-3.1 8.3-.4.4-.9.2-.7-.3.7-1.7 2.2-5.4 1.5-6.3z" fill="#FF9900" />
    </svg>
  );
}

function ZohoLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Zoho">
      <path d="M0 22.4L11.2 5.6H1.1V2h15.5v2.8L5.4 21.6h11.2v3.6H0V22.4z" fill="#E42527" />
      <path d="M28.8 1.6c6.4 0 11.2 5 11.2 11.6S35.2 24.8 28.8 24.8 17.6 19.8 17.6 13.2 22.4 1.6 28.8 1.6zm0 3.6c-4.2 0-7.2 3.4-7.2 8s3 8 7.2 8 7.2-3.4 7.2-8-3-8-7.2-8z" fill="#E42527" />
      <path d="M42.4 2h4v9.2h9.6V2h4v22.8h-4v-10h-9.6v10h-4V2z" fill="#E42527" />
      <path d="M72 1.6c6.4 0 8 5 8 11.6S78.4 24.8 72 24.8s-8-5-8-11.6S65.6 1.6 72 1.6zm0 3.6c-2.8 0-4 3.4-4 8s1.2 8 4 8 4-3.4 4-8-1.2-8-4-8z" fill="#E42527" />
    </svg>
  );
}

function NavLink({ label, href, external }: { label: string; href: string; external?: boolean }) {
  const inner = (
    <span className="group flex items-center gap-1.5 text-[13px] text-[#7a85a3] hover:text-[#60a5fa] transition-all duration-200">
      <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
      {label}
    </span>
  );
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <Link to={href}>{inner}</Link>;
}

export default function Footer() {
  const navigate = useNavigate();
  const istTime = useISTClock();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#04070f] border-t border-white/5 overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[280px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center top, rgba(59,130,246,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* BRAND + NAV */}
        <div className="pt-14 pb-10 border-b border-white/5 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 w-fit group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{ background: 'linear-gradient(135deg,#3b82f6,#6366f1)' }}>
                <Zap size={15} className="text-white fill-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-[12px] tracking-[0.12em] text-white uppercase" style={{ fontFamily: 'var(--font-heading)' }}>INZOVATE</span>
                <span className="font-medium text-[8px] tracking-[0.2em] uppercase" style={{ color: 'rgba(96,165,250,0.65)' }}>TECHNOLOGIES</span>
              </div>
            </Link>
            <div>
              <p className="text-[12.5px] font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Engineering Digital Futures.</p>
              <p className="text-[11.5px] text-[#7a85a3] leading-relaxed">Building smarter businesses through technology, innovation, cloud, automation, and strategic partnerships.</p>
            </div>
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-7 h-7 rounded-lg glass flex items-center justify-center text-[#7a85a3] hover:text-[#60a5fa] transition-all duration-200">
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>

          {NAV_COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3b82f6] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => <li key={l.label}><NavLink {...l} /></li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* SINGLE HORIZONTAL PARTNERSHIP PANEL */}
        <div className="py-7 border-b border-white/5">
          <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(8,14,32,0.8)', border: '1px solid rgba(59,130,246,0.12)', backdropFilter: 'blur(20px)', boxShadow: '0 0 50px rgba(59,130,246,0.05)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>

              {/* LEFT */}
              <div className="p-5 flex flex-col gap-4">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#3b82f6]">Our Strategic Partnerships</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <AwsLogo className="h-5 w-auto flex-shrink-0" />
                    <div>
                      <p className="text-[11.5px] font-semibold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Amazon Web Services</p>
                      <span className="text-[9.5px] px-1.5 py-0.5 rounded-full inline-block mt-0.5" style={{ background: 'rgba(255,153,0,0.1)', color: '#FF9900', border: '1px solid rgba(255,153,0,0.2)' }}>Technology Partner</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ZohoLogo className="h-4 w-auto flex-shrink-0" />
                    <div>
                      <p className="text-[11.5px] font-semibold text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>Zoho</p>
                      <span className="text-[9.5px] px-1.5 py-0.5 rounded-full inline-block mt-0.5" style={{ background: 'rgba(228,37,39,0.1)', color: '#E42527', border: '1px solid rgba(228,37,39,0.2)' }}>Official Zoho Partner</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CENTER */}
              <div className="p-5 flex flex-col gap-3">
                <p className="text-[12.5px] font-bold text-white leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Strategic Partnership. Smarter Solutions. Stronger Impact.</p>
                <p className="text-[11.5px] text-[#7a85a3] leading-relaxed">Inzovate Technologies works with globally trusted technology platforms to deliver scalable, secure, and intelligent solutions for businesses.</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {['AWS Cloud','Zoho CRM','Zoho Books','Zoho People','Zoho One'].map((b) => (
                    <span key={b} className="tag-chip" style={{ fontSize: '10px', padding: '2px 8px' }}>{b}</span>
                  ))}
                  <span className="tag-chip" style={{ fontSize: '10px', padding: '2px 8px' }}>+ More</span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="p-5 flex flex-col gap-3">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#3b82f6]">Zoho Products We Deliver</p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                  {ZOHO_PRODUCTS.map((p) => (
                    <Link key={p} to="/strategic-partnerships" className="text-[11px] text-[#7a85a3] hover:text-[#60a5fa] transition-colors duration-200 truncate">{p}</Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA + CORPORATE INFO */}
        <div className="py-8 border-b border-white/5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
          <div>
            <p className="text-[14px] font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Need a technology partner?</p>
            <p className="text-[12px] text-[#7a85a3] mb-4">Let's build secure, scalable and intelligent solutions together.</p>
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/contact')} className="btn-primary text-[13px] py-2.5 px-5">
              Let's Build Together <ArrowRight size={13} />
            </motion.button>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
            <div className="flex flex-col gap-0.5">
              <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#3b82f6]"><Hash size={8} /> CIN Number</span>
              <span className="text-[11px] text-[#c8d0e8] font-mono">U62011TZ2025PTC036329</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#3b82f6]"><MapPin size={8} /> Registered Office</span>
              <span className="text-[11px] text-[#c8d0e8]">Coimbatore, Tamil Nadu, India</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#3b82f6]"><Clock size={8} /> Indian Standard Time</span>
              <span className="flex items-center gap-1.5 text-[11px] text-[#c8d0e8] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-glow flex-shrink-0" />
                {istTime || 'Loading…'}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[11px] text-[#4a5568]">© 2026 INZOVATE TECHNOLOGIES PRIVATE LIMITED. All Rights Reserved.</p>
          <p className="text-[11px] text-[#4a5568] hidden md:block">CIN: U62011TZ2025PTC036329 · Coimbatore, Tamil Nadu, India</p>
          <button onClick={scrollTop} className="flex items-center gap-1.5 text-[11px] text-[#60a5fa]/60 hover:text-[#60a5fa] transition-colors duration-200 w-fit">
            Back to Top <ArrowUp size={11} />
          </button>
        </div>

      </div>
    </footer>
  );
}
`;
fs.writeFileSync('src/components/Footer.tsx', content, 'utf8');
console.log('done');
