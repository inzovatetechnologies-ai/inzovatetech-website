import { writeFileSync } from 'fs';

// ── HOME ──────────────────────────────────────────────────────────────────
const home = `import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Code2, Cloud, Bot, Shield, Layers, Zap, ArrowRight, ChevronRight, Globe, Cpu, BarChart3, Lock, Workflow, CheckCircle } from "lucide-react";
import DemoModal from "../components/DemoModal";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function TechOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);
    type Pt = { x: number; y: number; vx: number; vy: number };
    const N = 48;
    const pts: Pt[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
    const draw = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = \`rgba(59,130,246,\${0.18 * (1 - dist / 130)})\`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96,165,250,0.45)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const capabilities = ["Software", "Cloud", "AI", "Automation", "Cybersecurity"];

const solutions = [
  { icon: Code2, title: "Software Development", desc: "Scalable custom software and enterprise applications built for longevity." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Modern cloud architecture, migration and deployment on leading platforms." },
  { icon: Bot, title: "AI & Automation", desc: "Intelligent automation and AI-powered business solutions." },
  { icon: Shield, title: "Cybersecurity", desc: "Security-focused technology and digital protection for critical systems." },
  { icon: Layers, title: "UI/UX Design", desc: "Human-centered digital experiences that engage and convert." },
  { icon: Globe, title: "Digital Transformation", desc: "Modernizing business processes through modern technology." },
];

const why = [
  { icon: Zap, title: "Innovation First", desc: "We continuously explore and adopt emerging technologies." },
  { icon: Globe, title: "Business-Focused", desc: "Technology solutions tightly aligned to business goals." },
  { icon: Cpu, title: "Scalable", desc: "Solutions architected to grow alongside your organization." },
  { icon: Lock, title: "Secure", desc: "Security-conscious architecture built into every layer." },
  { icon: Workflow, title: "Agile", desc: "Fast and flexible development approach for rapid delivery." },
  { icon: CheckCircle, title: "Long-Term Partnership", desc: "We focus on building lasting technology relationships." },
];

const process = [
  { n: "01", title: "Discover", desc: "Understand the business challenge and context." },
  { n: "02", title: "Strategize", desc: "Define the technology roadmap and solution approach." },
  { n: "03", title: "Design", desc: "Create the solution architecture and experience design." },
  { n: "04", title: "Develop", desc: "Build and integrate the solution with precision." },
  { n: "05", title: "Deploy", desc: "Launch securely and efficiently at scale." },
  { n: "06", title: "Optimize", desc: "Continuously improve performance and impact." },
];

const orbIcons = [Code2, Cloud, Bot, Shield];

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveStep((s) => (s + 1) % process.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern">
        <TechOrb />
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 pt-36 pb-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <div className="status-badge mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-glow" />
                Technology Solutions · Tamil Nadu, India
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[76px] font-black leading-[1.0] tracking-tight text-white mb-7"
                style={{ fontFamily: "var(--font-heading)" }}>
                Engineering{" "}
                <span className="gradient-text">Digital</span>
                <br />Futures.
              </h1>
              <p className="text-lg text-[#7a85a3] leading-relaxed max-w-[520px] mb-10">
                We build intelligent technology solutions that help businesses transform, scale and thrive in a connected world.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/services" className="btn-primary">
                  Explore Solutions <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Let's Talk <ChevronRight size={15} />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center justify-center">
              <div className="relative w-[420px] h-[420px]">
                <div className="absolute inset-0 rounded-full float-anim"
                  style={{ background: "radial-gradient(circle at 40% 40%, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.08) 50%, transparent 70%)" }} />
                <div className="absolute inset-8 rounded-full"
                  style={{ border: "1px solid rgba(59,130,246,0.12)", background: "rgba(8,14,32,0.6)", backdropFilter: "blur(20px)" }} />
                <div className="absolute inset-16 rounded-full"
                  style={{ border: "1px solid rgba(99,102,241,0.1)", background: "rgba(8,14,32,0.4)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.15))", border: "1px solid rgba(59,130,246,0.2)" }}>
                      <Zap size={28} className="text-blue-400" />
                    </div>
                    <p className="text-white font-black text-lg tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>INZOVATE</p>
                    <p className="text-blue-400/60 text-xs tracking-widest uppercase mt-1">Technologies</p>
                  </div>
                </div>
                {orbIcons.map((Icon, i) => {
                  const angle = (i * 90 - 45) * (Math.PI / 180);
                  const r = 170;
                  const x = 210 + r * Math.cos(angle);
                  const y = 210 + r * Math.sin(angle);
                  return (
                    <div key={i} className="absolute w-10 h-10 rounded-xl flex items-center justify-center float-anim"
                      style={{ left: x - 20, top: y - 20, animationDelay: i * 0.8 + "s",
                        background: "rgba(8,14,32,0.9)", border: "1px solid rgba(59,130,246,0.2)", backdropFilter: "blur(12px)" }}>
                      <Icon size={16} className="text-blue-400" />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a85a3]">Scroll to explore</span>
            <div className="w-px h-10 bg-gradient-to-b from-blue-400/60 to-transparent relative overflow-hidden">
              <div className="absolute top-0 w-full h-3 bg-blue-400 rounded-full scroll-dot" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* About */}
      <section className="py-32 section-light">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <p className="section-label">About Inzovate</p>
              <h2 className="text-4xl lg:text-[52px] font-black leading-[1.06] tracking-tight text-[#080d1a] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}>
                Technology With Purpose.<br />Innovation With Impact.
              </h2>
              <p className="text-[16px] text-[#5a6480] leading-relaxed mb-8">
                INZOVATE TECHNOLOGIES delivers modern technology solutions designed to solve real business challenges, improve efficiency and create sustainable digital growth.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-[14px] hover:gap-3 transition-all duration-200">
                Discover Inzovate <ArrowRight size={15} />
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Zap, title: "Innovation", desc: "Creating solutions around emerging technologies that redefine industries." },
                  { icon: Cpu, title: "Intelligence", desc: "Using AI, data and automation to improve decisions and drive outcomes." },
                  { icon: BarChart3, title: "Impact", desc: "Delivering technology that creates measurable, lasting business value." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="light-card flex gap-5 p-6 rounded-2xl">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.12)" }}>
                      <Icon size={19} className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[15px] text-[#080d1a] mb-1" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                      <p className="text-[13.5px] text-[#6b7280]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Solutions */}
      <section className="py-32 grid-pattern relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.05) 0%, transparent 60%)" }} />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <p className="section-label justify-center">What We Do</p>
            <h2 className="text-4xl lg:text-[52px] font-black text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              From Ideas to Intelligent Solutions
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <div className="premium-card gradient-border rounded-2xl p-7 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.15)" }}>
                    <Icon size={21} className="text-blue-400" />
                  </div>
                  <h3 className="font-bold text-[16px] text-white mb-2.5" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                  <p className="text-[13.5px] text-[#7a85a3] leading-relaxed mb-5 flex-1">{desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-[13px] text-blue-400 font-medium hover:gap-2.5 transition-all duration-200">
                    Learn more <ChevronRight size={13} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Technology */}
      <section className="py-28 section-light">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="section-label justify-center">Technology</p>
            <h2 className="text-3xl lg:text-[44px] font-black tracking-tight text-[#080d1a] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Built With Modern Technology
            </h2>
            <p className="text-[#6b7280] text-lg max-w-xl mx-auto mb-14">
              We deploy cutting-edge stacks across cloud, AI, development, data, security and automation.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Cloud, label: "Cloud" },
              { icon: Bot, label: "AI" },
              { icon: Code2, label: "Development" },
              { icon: BarChart3, label: "Data" },
              { icon: Shield, label: "Security" },
              { icon: Workflow, label: "Automation" },
            ].map(({ icon: Icon, label }) => (
              <FadeIn key={label}>
                <div className="light-card rounded-2xl p-6 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.1)" }}>
                    <Icon size={21} className="text-blue-500" />
                  </div>
                  <span className="text-[13px] font-semibold text-[#080d1a]">{label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Partnerships */}
      <section className="py-32 grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <p className="section-label justify-center">Strategic Partnerships</p>
            <h2 className="text-4xl lg:text-[52px] font-black text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Powered by Leading Ecosystems
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Amazon Web Services", short: "AWS", desc: "Cloud infrastructure, migration, serverless and DevOps solutions built on AWS.", color: "#FF9900" },
              { name: "Zoho", short: "ZOHO", desc: "CRM, ERP, HR, analytics and automation solutions across the Zoho ecosystem.", color: "#E42527" },
            ].map(({ name, short, desc, color }) => (
              <FadeIn key={name}>
                <div className="premium-card gradient-border rounded-2xl p-8 h-full">
                  <div className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-heading)", color }}>{short}</div>
                  <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-heading)" }}>{name}</h3>
                  <p className="text-[#7a85a3] text-[14px] leading-relaxed mb-6">{desc}</p>
                  <Link to="/strategic-partnerships" className="inline-flex items-center gap-1.5 text-[13px] text-blue-400 font-medium hover:gap-2.5 transition-all duration-200">
                    Learn more <ChevronRight size={13} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/strategic-partnerships" className="btn-secondary">
              Explore All Partnerships <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Why Inzovate */}
      <section className="py-32 section-light">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <p className="section-label justify-center">Why Us</p>
            <h2 className="text-4xl lg:text-[52px] font-black text-[#080d1a] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Why Businesses Choose Inzovate
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {why.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.06}>
                <div className="light-card p-7 rounded-2xl h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.1)" }}>
                    <Icon size={21} className="text-blue-500" />
                  </div>
                  <h3 className="font-bold text-[16px] text-[#080d1a] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
                  <p className="text-[14px] text-[#6b7280] leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Process */}
      <section className="py-32 grid-pattern">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16">
            <p className="section-label justify-center">How We Work</p>
            <h2 className="text-4xl lg:text-[52px] font-black text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Our Process
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {process.map((step, i) => (
              <motion.div key={step.n}
                className="premium-card gradient-border rounded-2xl p-5 cursor-pointer"
                animate={activeStep === i ? { borderColor: "rgba(59,130,246,0.4)", backgroundColor: "rgba(59,130,246,0.07)" } : {}}
                onClick={() => setActiveStep(i)}>
                <div className="step-number mb-3">{step.n}</div>
                <h3 className="font-bold text-[14px] text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                <p className="text-[12px] text-[#7a85a3] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Careers */}
      <section className="py-28 section-light">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="section-label justify-center">Careers</p>
            <h2 className="text-4xl lg:text-[52px] font-black text-[#080d1a] tracking-tight mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Build the Future With Us.
            </h2>
            <p className="text-[16px] text-[#6b7280] max-w-xl mx-auto mb-10">
              Join a technology team working on software, AI, cloud, cybersecurity and digital transformation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/careers" className="btn-primary">View Open Positions <ArrowRight size={15} /></Link>
              <Link to="/careers" className="btn-secondary">Apply Now</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-separator" />

      {/* Final CTA */}
      <section className="py-32 grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.1) 0%, transparent 60%)" }} />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-[64px] font-black text-white tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Let's Build What's Next.
            </h2>
            <p className="text-[17px] text-[#7a85a3] max-w-xl mx-auto mb-10">
              Have a technology challenge? Let's discuss how INZOVATE can help your business transform and grow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-[16px] py-4 px-8">Let's Talk <ArrowRight size={16} /></Link>
              <button onClick={() => setDemoOpen(true)} className="btn-secondary text-[16px] py-4 px-8">Request a Demo</button>
            </div>
          </FadeIn>
        </div>
      </section>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
`;

writeFileSync('src/pages/Home.tsx', home, 'utf8');
console.log('Home.tsx written');
