"use client";

import ContactForm from "@/components/ContactForm";
import { ShieldCheck, Crosshair, CloudArrowUp, Lightning, Users } from "@phosphor-icons/react";

export default function BusinessServices() {
  const services = [
    {
      id: "cmmc",
      title: "CMMC & NIST Compliance",
      problem: "Regulatory fines and lost DoD contracts due to non-compliance can destroy a business. Navigating the complex requirements of NIST 800-171 is overwhelming.",
      process: "We conduct a thorough assessment mapping your environment against the required controls. We interview stakeholders, review policies, and inspect configurations.",
      deliverables: "A Gap Analysis Report, a formal System Security Plan (SSP), and a prioritized Plan of Action and Milestones (POA&M).",
      icon: <ShieldCheck weight="duotone" className="w-10 h-10 text-cyan" />,
      featured: true
    },
    {
      id: "pentest",
      title: "Penetration Testing",
      problem: "Hidden vulnerabilities in your external network or internal systems can be exploited by attackers to steal data or deploy ransomware.",
      process: "Our ethical hackers simulate real-world attacks. We use a combination of automated scanning and manual exploitation to find gaps.",
      deliverables: "An executive summary and technical report with proof-of-concept exploits, risk ratings, and step-by-step remediation.",
      icon: <Crosshair weight="duotone" className="w-8 h-8 text-magenta" />,
      featured: false
    },
    {
      id: "cloud-security",
      title: "Cloud & Network Security",
      problem: "Misconfigured cloud environments (AWS, Azure, M365) are the leading cause of data breaches. Out-of-the-box settings are rarely secure.",
      process: "We implement a Zero Trust Architecture, harden your cloud tenants, deploy robust IAM, and establish segmented networks.",
      deliverables: "A hardened network architecture, documented security baselines, and implemented controls like MFA and Conditional Access.",
      icon: <CloudArrowUp weight="duotone" className="w-8 h-8 text-cyan" />,
      featured: false
    },
    {
      id: "incident-response",
      title: "Incident Response & EDR",
      problem: "When a breach occurs, downtime costs money. Traditional antivirus is blind to modern, fileless attacks and lateral movement.",
      process: "We deploy Next-Gen EDR to monitor behavior in real-time. If an attack occurs, we isolate affected systems to stop the bleeding immediately.",
      deliverables: "Deployed EDR agents, 24/7 threat monitoring options, post-incident forensics, and a strategic recovery plan.",
      icon: <Lightning weight="duotone" className="w-8 h-8 text-magenta" />,
      featured: false
    },
    {
      id: "vciso",
      title: "vCISO & Security Leadership",
      problem: "Organizations without dedicated security leadership struggle to align IT operations with business risk management goals.",
      process: "We embed an executive security leader into your organization to steer strategy, manage vendor risk, and report to the board.",
      deliverables: "Quarterly security roadmaps, board-level reporting, risk register management, and vendor security assessments.",
      icon: <Users weight="duotone" className="w-8 h-8 text-text-primary" />,
      featured: false
    }
  ];

  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-sm font-medium mb-6">
            Enterprise Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
            Engineered <span className="text-cyan">Defense.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            We don&apos;t sell fear. We deliver engineered solutions, clear roadmaps, and measurable risk reduction tailored to your operational reality.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12 md:space-y-24 mb-32">
        {services.map((service) => (
          <div 
            key={service.id} 
            id={service.id}
            className={`glass-panel rounded-[2rem] border overflow-hidden ${
              service.featured ? "border-cyan/40 shadow-glow-cyan" : "border-border"
            }`}
          >
            <div className={`p-8 md:p-12 ${service.featured ? "bg-[radial-gradient(ellipse_at_top_right,rgba(24,190,227,0.05),transparent_50%)]" : ""}`}>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24">
                {/* Left side: Icon & Title */}
                <div className="md:w-1/3 flex flex-col items-start">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.featured ? "bg-cyan/10 border border-cyan/20 shadow-[0_0_15px_rgba(24,190,227,0.3)]" : "bg-panel border border-border"
                  }`}>
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">
                    {service.title}
                  </h2>
                  {service.featured && (
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan">Primary Practice Area</span>
                  )}
                </div>
                
                {/* Right side: Problem/Process/Deliverables */}
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-text-primary font-mono opacity-50">01. Challenge</span>
                    <p className="text-text-secondary leading-relaxed">{service.problem}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-text-primary font-mono opacity-50">02. Approach</span>
                    <p className="text-text-secondary leading-relaxed">{service.process}</p>
                  </div>
                  
                  <div className="md:col-span-2 pt-6 mt-2 border-t border-border flex flex-col md:flex-row gap-4 md:items-center">
                    <span className="text-sm font-bold text-text-primary font-mono w-24">Outcome:</span>
                    <p className="text-text-primary font-medium">{service.deliverables}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <ContactForm />
    </div>
  );
}
