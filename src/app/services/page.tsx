import Link from "next/link";

export default function BusinessServices() {
  return (
    <div className="py-8">
      <div className="mb-16 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(24,191,228,0.15),transparent_60%)] pointer-events-none"></div>
        <p className="text-brand-cyan font-mono uppercase tracking-widest text-sm font-bold mb-3 z-10 relative">Business Services</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white z-10 relative">
          Framework Readiness & Defense in Depth
        </h1>
        <div className="glass p-6 md:p-8 rounded-2xl inline-block max-w-3xl relative z-10 border-brand-purple/50 shadow-glow-purple">
          <p className="text-lg md:text-xl text-text-primary font-medium italic">
            "We don't just give you a checklist; we provide a roadmap to readiness and implementation guidance."
          </p>
        </div>
      </div>

      {/* Framework Readiness - Alternating Sections */}
      <div className="space-y-16">

        {/* NIST / RMF */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">NIST & RMF Alignment</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              Building your security program around the National Institute of Standards and Technology (NIST) Cybersecurity Framework (CSF) or Risk Management Framework (RMF) establishes a gold standard for defense in depth.
            </p>
            <p className="text-text-muted leading-relaxed">
              We help you identify critical assets, protect networks, detect threats, and establish robust response and recovery plans. Our team maps your current capabilities against NIST controls, closing the gaps with practical engineering.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="glass p-10 rounded-full shadow-glow-cyan border-brand-cyan/40">
              <svg className="w-20 h-20 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </section>

        {/* CMMC */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-1 md:order-1 flex justify-center">
            <div className="glass p-10 rounded-full shadow-glow-magenta border-brand-magenta/40">
              <svg className="w-20 h-20 text-brand-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">CMMC Compliance</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              If your business handles Controlled Unclassified Information (CUI) for the Department of Defense, the Cybersecurity Maturity Model Certification (CMMC) is mandatory.
            </p>
            <p className="text-text-muted leading-relaxed">
              We translate rigorous CMMC requirements into attainable technical implementations. From System Security Plans (SSP) to Plan of Action and Milestones (POA&M) remediation, we guide defense contractors through the compliance gauntlet.
            </p>
          </div>
        </section>

        {/* HIPAA */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">HIPAA Readiness</h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              Healthcare providers and business associates face steep penalties for non-compliance. A standard IT setup is rarely enough to protect electronic Protected Health Information (ePHI).
            </p>
            <p className="text-text-muted leading-relaxed">
              We conduct thorough Security Risk Assessments (SRA) to identify vulnerabilities. More importantly, we don't just hand you a failing grade—we engineer the solutions required to pass audits and secure patient data.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="glass p-10 rounded-full shadow-glow-purple border-brand-purple/40">
              <svg className="w-20 h-20 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* HIPAA Table */}
        <div className="glass rounded-2xl p-6 md:p-8 mt-8 border-brand-purple/40 shadow-glow-purple overflow-x-auto">
          <h3 className="text-xl font-bold mb-6 text-white">HIPAA Safeguards Mapping Example</h3>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/20 text-text-muted text-sm font-mono tracking-wider uppercase bg-white/5">
                <th className="py-4 px-4 font-semibold rounded-tl-lg">Safeguard Type</th>
                <th className="py-4 px-4 font-semibold">HIPAA Citation</th>
                <th className="py-4 px-4 font-semibold rounded-tr-lg">Example Implementation</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan"></span> Administrative
                </td>
                <td className="py-4 px-4 text-brand-cyan font-mono">§164.308(a)(1)</td>
                <td className="py-4 px-4 text-text-muted">Security Management Process (Risk Analysis & Management)</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-magenta"></span> Physical
                </td>
                <td className="py-4 px-4 text-brand-cyan font-mono">§164.310(a)(1)</td>
                <td className="py-4 px-4 text-text-muted">Facility Access Controls (Biometrics, Keycards, Logging)</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-purple"></span> Technical
                </td>
                <td className="py-4 px-4 text-brand-cyan font-mono">§164.312(a)(1)</td>
                <td className="py-4 px-4 text-text-muted">Access Control (Unique User IDs, Strict IAM)</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-purple"></span> Technical
                </td>
                <td className="py-4 px-4 text-brand-cyan font-mono">§164.312(e)(1)</td>
                <td className="py-4 px-4 text-text-muted">Transmission Security (End-to-End Encryption, VPNs)</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      {/* Endpoint Protection */}
      <section className="mt-24 glass rounded-2xl p-8 md:p-12 text-center border-brand-cyan/50 shadow-glow-cyan relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_100%,rgba(24,191,228,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-brand-cyan font-mono uppercase tracking-widest text-sm font-bold mb-3">Beyond Antivirus</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">Next-Generation Endpoint Protection</h2>
          <p className="text-text-muted mb-8 leading-relaxed text-lg">
            Legacy antivirus solutions rely on outdated signatures and fail to stop modern ransomware. We deploy and manage enterprise-grade Endpoint Detection and Response (EDR) solutions—like <strong className="text-white">SentinelOne</strong>, <strong className="text-white">Crowdstrike</strong> and <strong className="text-white">Microsoft Defender for Business</strong>—to provide AI-driven threat hunting, automated remediation, and zero-trust verification across your entire fleet.
          </p>
          <Link href="#" className="inline-block font-bold px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-deep-space shadow-glow-cyan transition-transform hover:scale-105 uppercase tracking-wider text-sm">
            Secure Your Endpoints
          </Link>
        </div>
      </section>

    </div>
  );
}
