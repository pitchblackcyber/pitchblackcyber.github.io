"use client";

import ContactForm from "@/components/ContactForm";
import { ShieldCheck, Crosshair, MapPin } from "@phosphor-icons/react";

export default function About() {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-sm font-medium mb-6">
            <MapPin weight="fill" className="w-4 h-4" />
            Logan, Utah
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
            Enterprise expertise.<br />
            <span className="text-cyan">Local commitment.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            Pitch Black Cyber was founded on a simple premise: local businesses, healthcare organizations, and defense contractors in Northern Utah deserve access to the same caliber of security expertise as Fortune 500 companies.
          </p>
          <div className="flex gap-8 border-t border-border pt-8">
            <div>
              <div className="text-2xl font-bold text-text-primary font-mono mb-1">DoD</div>
              <div className="text-sm text-text-muted">Cleared Experts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-text-primary font-mono mb-1">15+</div>
              <div className="text-sm text-text-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-text-primary font-mono mb-1">100%</div>
              <div className="text-sm text-text-muted">Audit Pass Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary">Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Devin Bio */}
          <div className="glass-panel rounded-[2rem] p-8 md:p-12 border border-border">
            <div className="w-24 h-24 rounded-full bg-cyan/10 border border-cyan/30 mb-6 flex items-center justify-center overflow-hidden">
              {/* Optional: <Image src="/path/to/devin.jpg" /> */}
              <ShieldCheck weight="duotone" className="w-10 h-10 text-cyan" />
            </div>
            
            <h3 className="text-2xl font-bold text-text-primary mb-1">Devin Erickson</h3>
            <p className="text-cyan font-mono text-sm uppercase tracking-wide mb-6">CTO & Cybersecurity & Compliance Lead</p>
            
            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                Devin Erickson is a cybersecurity and compliance leader based in Logan, Utah. He brings the discipline and rigor of enterprise security to local businesses, healthcare organizations, and families in Cache Valley—without the overwhelming technical jargon.
              </p>
              <p>
                With an extensive background defending highly regulated Department of Defense (DoD) environments, Devin knows what it takes to protect sensitive data against advanced threats. Throughout his career, he has served in critical roles, including Information Systems Security Manager (ISSM) and Senior Security Engineer. In these positions, he has directed security operations, managed vulnerabilities, and led incident response initiatives to protect customer information.
              </p>
              <p>
                While he is an expert in complex frameworks like CMMC, NIST 800-171, and the Risk Management Framework (RMF), Devin&apos;s true strength is his ability to translate strict technical requirements into actionable, plain-English business strategies. He partners with leadership teams to assess their security posture, implement practical system hardening, and build clear remediation roadmaps.
              </p>
              <p>
                At Pitch Black Cyber, Devin focuses on bringing clarity to compliance and IT security. He believes that protecting your organization shouldn&apos;t require fearmongering—it requires a practical, grounded approach tailored to your specific operational needs.
              </p>
            </div>
            
            <div className="pt-6 border-t border-border">
              <h4 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-wider">Credentials</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-cyan font-bold">•</span>
                  <span><strong className="text-text-primary">Education:</strong> B.S. in Computer Information Technology from Brigham Young University.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan font-bold">•</span>
                  <span><strong className="text-text-primary">Certifications:</strong> CompTIA Security+.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan font-bold">•</span>
                  <span><strong className="text-text-primary">Expertise:</strong> Security program development, network segmentation, continuous monitoring, and identity management.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan font-bold">•</span>
                  <span><strong className="text-text-primary">Clearance:</strong> Held and maintained a DoD Security Clearance throughout his career supporting organizations like the Space Dynamics Laboratory and Spartronics.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Co-founder Placeholder */}
          <div className="glass-panel rounded-[2rem] p-8 md:p-12 border border-border">
            <div className="w-24 h-24 rounded-full bg-panel border border-border mb-6 flex items-center justify-center overflow-hidden">
              <Crosshair weight="duotone" className="w-10 h-10 text-text-muted" />
            </div>
            
            <h3 className="text-2xl font-bold text-text-primary mb-1">Co-Founder Name</h3>
            <p className="text-text-muted font-mono text-sm uppercase tracking-wide mb-6">CEO / Title Placeholder</p>
            
            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                Biography placeholder for Devin&apos;s brother and co-founder. This section will be updated with full background, expertise, and credentials.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

        </div>
      </div>

      <ContactForm />
    </div>
  );
}
