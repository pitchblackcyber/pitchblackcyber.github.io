import ContactForm from "@/components/ContactForm";

export default function BusinessServices() {
  const services = [
    {
      id: "pen-testing",
      title: "Penetration Testing",
      problem: "You don't know what you don't know. Hidden vulnerabilities in your external network, web applications, or internal systems can be exploited by attackers to steal data or deploy ransomware.",
      process: "Our certified ethical hackers simulate real-world attacks. We use a combination of automated scanning and manual exploitation to find the gaps before the bad guys do.",
      deliverables: "A comprehensive executive summary and a detailed technical report with proof-of-concept exploits, risk ratings, and step-by-step remediation guidance.",
      icon: (
        <svg className="w-12 h-12 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    },
    {
      id: "security-audits",
      title: "Security Audits & Compliance (HIPAA, CMMC, NIST)",
      problem: "Regulatory fines and lost contracts due to non-compliance can destroy a business. Navigating the complex requirements of HIPAA, CMMC, or NIST frameworks is overwhelming for most IT teams.",
      process: "We conduct a thorough Security Risk Assessment (SRA), mapping your current environment against the required framework controls. We interview stakeholders, review policies, and inspect configurations.",
      deliverables: "A Gap Analysis Report, a formal System Security Plan (SSP), and a prioritized Plan of Action and Milestones (POA&M) to achieve full compliance.",
      icon: (
        <svg className="w-12 h-12 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "cloud-security",
      title: "Network & Cloud Security",
      problem: "Misconfigured cloud environments (AWS, Azure, M365) are the leading cause of data breaches. Out-of-the-box settings are rarely secure enough for sensitive business data.",
      process: "We implement a Zero Trust Architecture. We harden your cloud tenants, deploy robust Identity and Access Management (IAM), secure edge firewalls, and establish segmented networks.",
      deliverables: "A hardened, resilient network architecture, documented security baselines, and implemented security controls (MFA, Conditional Access, Data Loss Prevention).",
      icon: (
        <svg className="w-12 h-12 text-brand-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: "incident-response",
      title: "Incident Response & EDR",
      problem: "When a breach occurs, every minute of downtime costs money. Traditional antivirus is blind to modern, fileless attacks and lateral movement.",
      process: "We deploy Next-Generation Endpoint Detection and Response (EDR) to monitor behavior in real-time. If an attack occurs, our Incident Response team isolates affected systems to stop the bleeding immediately.",
      deliverables: "Deployed EDR/MDR agents, 24/7 threat monitoring (optional), a post-incident forensic report, and a strategic recovery plan.",
      icon: (
        <svg className="w-12 h-12 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "security-training",
      title: "Security Awareness Training",
      problem: "Your employees are your biggest vulnerability. Phishing attacks and social engineering bypass technical controls by targeting human psychology.",
      process: "We conduct engaging, ongoing security awareness training tailored to your industry. We run simulated, unannounced phishing campaigns to test employee vigilance.",
      deliverables: "Monthly training modules, quarterly phishing campaign results, user risk profiles, and compliance training certificates for staff.",
      icon: (
        <svg className="w-12 h-12 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-8">
      <div className="mb-16 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(24,191,228,0.15),transparent_60%)] pointer-events-none"></div>
        <p className="text-brand-cyan font-mono uppercase tracking-widest text-sm font-bold mb-3 z-10 relative">Business Services</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white z-10 relative bg-gradient-to-r from-white via-brand-cyan to-brand-purple text-transparent bg-clip-text">
          Enterprise Security Solutions
        </h1>
        <div className="glass p-6 md:p-8 rounded-2xl inline-block max-w-3xl relative z-10 border-brand-cyan/50 shadow-glow-cyan">
          <p className="text-lg md:text-xl text-white font-medium">
            We don&apos;t sell fear. We deliver engineered solutions, clear roadmaps, and measurable risk reduction for your business.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-12 mb-24">
        {services.map((service) => (
          <div key={service.id} className="glass rounded-3xl overflow-hidden border border-border-glass transition-all hover:border-brand-purple/50 hover:shadow-glow-purple relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-bl-[100px] transition-transform group-hover:scale-110 pointer-events-none"></div>
            
            <div className="p-8 md:p-12 relative z-10">
              <div className="flex items-center gap-6 mb-8 border-b border-border-glass pb-6">
                <div className="bg-[#0e1018] p-4 rounded-2xl border border-border-glass shadow-inner">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#0e1018]/50 p-6 rounded-2xl border border-border-glass border-l-4 border-l-brand-magenta">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-brand-magenta">01.</span> The Problem
                  </h3>
                  <p className="text-text-muted leading-relaxed">{service.problem}</p>
                </div>
                
                <div className="bg-[#0e1018]/50 p-6 rounded-2xl border border-border-glass border-l-4 border-l-brand-cyan">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-brand-cyan">02.</span> The Process
                  </h3>
                  <p className="text-text-muted leading-relaxed">{service.process}</p>
                </div>

                <div className="bg-[#0e1018]/50 p-6 rounded-2xl border border-border-glass border-l-4 border-l-brand-purple">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-brand-purple">03.</span> The Deliverables
                  </h3>
                  <p className="text-text-muted leading-relaxed">{service.deliverables}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global Contact Form */}
      <div className="mb-16">
        <ContactForm />
      </div>
    </div>
  );
}
