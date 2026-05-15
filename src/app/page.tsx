import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="glass rounded-2xl p-8 md:p-16 text-center mt-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-brand-cyan/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(24,191,228,0.2),transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* UVP Options:
              1. Engineered Security. Zero Compromise. (Selected)
              2. Military-Grade Protection Tailored for Small Businesses.
              3. Rapid Incident Response & Proactive Defense.
          */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand-cyan to-brand-purple text-transparent bg-clip-text leading-tight">
            Engineered Security. Zero Compromise.
          </h1>
          <h2 className="text-lg md:text-2xl text-text-muted font-mono tracking-wide mb-10 leading-relaxed">
            We deliver enterprise-grade cybersecurity and compliance solutions tailored for your business. Defend your assets, achieve compliance, and outpace threats.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#contact" className="font-bold px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-deep-space shadow-glow-cyan transition-transform hover:scale-105 text-lg">
              Get a Free Security Consultation
            </Link>
            <Link href="/services" className="font-bold px-8 py-4 rounded-xl bg-transparent border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-deep-space transition-colors text-lg">
              View Our Services
            </Link>
          </div>
        </div>
      </header>

      {/* Trust & Credibility: Certifications Bar */}
      <section className="py-10 border-b border-border-glass">
        <p className="text-center text-text-muted font-mono text-sm uppercase tracking-widest mb-6">Our Team Holds Industry-Leading Certifications</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="font-bold text-xl md:text-2xl text-white tracking-wider flex items-center gap-2">
            <span className="text-brand-cyan">CISSP</span>
          </div>
          <div className="font-bold text-xl md:text-2xl text-white tracking-wider flex items-center gap-2">
            <span className="text-brand-purple">CISM</span>
          </div>
          <div className="font-bold text-xl md:text-2xl text-white tracking-wider flex items-center gap-2">
            <span className="text-brand-magenta">CEH</span>
          </div>
          <div className="font-bold text-xl md:text-2xl text-white tracking-wider flex items-center gap-2">
            <span className="text-brand-cyan">OSCP</span>
          </div>
          <div className="font-bold text-xl md:text-2xl text-white tracking-wider flex items-center gap-2">
            <span className="text-text-muted">Security+</span>
          </div>
        </div>
      </section>

      {/* Trust & Credibility: Tech Stack / Implementations */}
      <section className="py-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2">Technologies We Implement & Secure</h3>
          <p className="text-text-muted max-w-2xl mx-auto">We architect defenses around the platforms you already rely on, deploying top-tier endpoint protection and cloud security controls.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
          <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border border-border-glass hover:border-brand-cyan transition-colors">
            <span className="text-lg font-bold text-white">Microsoft Azure</span>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border border-border-glass hover:border-brand-purple transition-colors">
            <span className="text-lg font-bold text-white">AWS</span>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border border-border-glass hover:border-brand-magenta transition-colors">
            <span className="text-lg font-bold text-white">CrowdStrike</span>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border border-border-glass hover:border-brand-cyan transition-colors">
            <span className="text-lg font-bold text-white">SentinelOne</span>
          </div>
        </div>
      </section>

      {/* Trust & Credibility: Social Proof */}
      {/* 
      <section className="mb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(113,46,255,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="glass rounded-3xl p-8 md:p-12 border-l-4 border-l-brand-purple shadow-glow-purple relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-brand-purple/20 flex items-center justify-center border-2 border-brand-purple">
              <svg className="w-12 h-12 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-brand-purple font-mono uppercase tracking-widest text-sm font-bold mb-3">Case Study</p>
            <h3 className="text-2xl font-bold mb-4 text-white">How We Saved a Mid-West Logistics Company from a Ransomware Attack</h3>
            <p className="text-text-muted italic mb-4 leading-relaxed text-lg">
              "Pitch Black Cyber deployed their proactive EDR solution just weeks before a coordinated ransomware attempt hit our network. Their monitoring caught the intrusion attempt at 2 AM, isolated the compromised machine instantly, and prevented lateral movement. We suffered zero downtime and zero data loss."
            </p>
            <p className="text-sm font-bold text-white">— CTO, Regional Logistics Provider</p>
          </div>
        </div>
      </section> 
      */}

      {/* Core Services Overview */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
        <p className="text-text-muted max-w-2xl mx-auto">Comprehensive security solutions covering the entire attack surface.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <section className="glass rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-glow-cyan relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <h3 className="text-2xl font-bold mb-3 z-10 relative text-white">Security Audits & Penetration Testing</h3>
          <p className="text-text-muted flex-grow z-10 relative mb-6">
            We identify your vulnerabilities before attackers do. From external network scans to deep-dive penetration testing, we provide actionable remediation reports.
          </p>
          <Link href="/services" className="font-bold text-brand-cyan hover:text-white transition-colors z-10 relative text-sm uppercase tracking-wider flex items-center gap-2">
            Explore Testing &rarr;
          </Link>
        </section>

        <section className="glass rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-glow-purple relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <h3 className="text-2xl font-bold mb-3 z-10 relative text-white">Compliance (HIPAA, CMMC, NIST)</h3>
          <p className="text-text-muted flex-grow z-10 relative mb-6">
            Navigating compliance frameworks is complex. We conduct comprehensive Security Risk Assessments (SRA) and build technical roadmaps to ensure you pass audits.
          </p>
          <Link href="/services" className="font-bold text-brand-purple hover:text-white transition-colors z-10 relative text-sm uppercase tracking-wider flex items-center gap-2">
            View Compliance Services &rarr;
          </Link>
        </section>

        <section className="glass rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-glow-magenta relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-magenta/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <h3 className="text-2xl font-bold mb-3 z-10 relative text-white">Incident Response & EDR</h3>
          <p className="text-text-muted flex-grow z-10 relative mb-6">
            When every second counts, our rapid response team and proactive Endpoint Detection and Response (EDR) solutions isolate threats and restore normal operations.
          </p>
          <Link href="/services" className="font-bold text-brand-magenta hover:text-white transition-colors z-10 relative text-sm uppercase tracking-wider flex items-center gap-2">
            Learn About EDR &rarr;
          </Link>
        </section>
      </div>

      {/* Lead Generation: Lead Magnet */}
      <section className="mb-24 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 rounded-3xl p-8 md:p-16 border border-border-glass shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-purple"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Get The 2026 SMB Ransomware Protection Checklist</h3>
            <p className="text-text-muted text-lg mb-6">
              Ransomware attacks against small and medium businesses are up 400% this year. Download our free, 10-point actionable checklist to harden your defenses today—before you become a statistic.
            </p>
            <ul className="space-y-3 mb-8">
               <li className="flex items-center gap-2 text-white/80"><span className="text-brand-cyan">✓</span> Identify critical vulnerabilities</li>
               <li className="flex items-center gap-2 text-white/80"><span className="text-brand-cyan">✓</span> Secure your remote workforce</li>
               <li className="flex items-center gap-2 text-white/80"><span className="text-brand-cyan">✓</span> Establish bulletproof backups</li>
            </ul>
          </div>
          <div className="glass p-8 rounded-2xl border-brand-cyan/30">
            <h4 className="text-xl font-bold text-white mb-4">Send Me The Free Guide</h4>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Your Name" required className="w-full bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1" />
              </div>
              <div>
                <input type="email" placeholder="Business Email" required className="w-full bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1" />
              </div>
              <button type="submit" className="w-full font-bold px-6 py-4 rounded-xl bg-brand-cyan text-deep-space hover:bg-white transition-colors">
                Download Now
              </button>
            </form>
            <p className="text-xs text-text-muted mt-4 text-center">We respect your privacy. No spam, ever.</p>
          </div>
        </div>
      </section>

      {/* Global Contact Form */}
      <div className="mb-16">
        <ContactForm />
      </div>
    </>
  );
}
