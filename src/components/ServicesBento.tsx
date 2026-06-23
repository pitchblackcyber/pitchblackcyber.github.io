"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, Crosshair, Users, ChartBar, HardDrives, ArrowRight } from "@phosphor-icons/react";

const bentoItems = [
  {
    id: "cmmc",
    title: "CMMC & NIST 800-171",
    description: "End-to-end compliance readiness, assessment, and remediation for DoD contractors and sub-contractors.",
    icon: <ShieldCheck weight="duotone" className="w-8 h-8 text-cyan" />,
    className: "md:col-span-2 md:row-span-2 bg-[radial-gradient(ellipse_at_bottom_right,rgba(24,190,227,0.1),transparent_50%)]",
    link: "/services#cmmc",
    large: true
  },
  {
    id: "pentest",
    title: "Penetration Testing",
    description: "Identify vulnerabilities before attackers do with our rigorous, compliance-driven testing.",
    icon: <Crosshair weight="duotone" className="w-6 h-6 text-magenta" />,
    className: "md:col-span-1 md:row-span-1 bg-[radial-gradient(ellipse_at_top_right,rgba(236,25,144,0.05),transparent_50%)]",
    link: "/services#pentest"
  },
  {
    id: "vciso",
    title: "vCISO Services",
    description: "Executive security leadership to build, mature, and guide your security program.",
    icon: <Users weight="duotone" className="w-6 h-6 text-text-primary" />,
    className: "md:col-span-1 md:row-span-1",
    link: "/services#vciso"
  },
  {
    id: "assessments",
    title: "Security Assessments",
    description: "Comprehensive audits of your environment against industry frameworks.",
    icon: <ChartBar weight="duotone" className="w-6 h-6 text-text-primary" />,
    className: "md:col-span-1 md:row-span-1",
    link: "/services#assessments"
  },
  {
    id: "endpoint",
    title: "Managed Endpoint Protection",
    description: "Advanced EDR deployment, monitoring, and tuning to stop ransomware and advanced threats.",
    icon: <HardDrives weight="duotone" className="w-6 h-6 text-text-primary" />,
    className: "md:col-span-1 md:row-span-1",
    link: "/services#endpoint"
  }
];

export default function ServicesBento() {
  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Security operations, <span className="text-text-muted">simplified.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            We provide practical, defensible security solutions tailored to your operational needs—no unnecessary complexity, just outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6 auto-rows-fr">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group ${item.className}`}
            >
              <Link 
                href={item.link}
                className={`block h-full glass rounded-[2rem] border border-border p-8 md:p-10 transition-all duration-300 hover:bg-panel focus:outline-none focus:ring-2 focus:ring-cyan flex flex-col ${item.large ? 'justify-end min-h-[360px]' : 'justify-between min-h-[280px]'}`}
              >
                {!item.large && (
                  <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                )}
                
                <div className="relative z-10">
                  {item.large && (
                    <div className="w-16 h-16 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-8 shadow-glow-cyan">
                      {item.icon}
                    </div>
                  )}
                  <h3 className={`${item.large ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-text-primary mb-3 group-hover:text-cyan transition-colors`}>
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted group-hover:bg-cyan group-hover:border-cyan group-hover:text-void transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowRight weight="bold" className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
