"use client";

import { motion } from "motion/react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We evaluate your current posture, identify critical gaps, and map your environment against required frameworks."
  },
  {
    number: "02",
    title: "Strategic Roadmap",
    description: "You receive a prioritized, actionable plan focused on reducing maximum risk with practical investments."
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our engineers deploy controls, harden systems, and build the required documentation and policies."
  },
  {
    number: "04",
    title: "Continuous Defense",
    description: "Ongoing monitoring, executive reporting, and vCISO guidance to maintain compliance as your business scales."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            How we <span className="text-cyan">operate.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            A methodical, no-nonsense approach to securing your environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-6 right-6 h-[1px] bg-border z-0">
            <motion.div 
              className="h-full bg-cyan w-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.15), ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-panel border border-border flex items-center justify-center mb-6 shadow-xl relative group">
                {/* Node active state highlight */}
                <div className="absolute inset-0 rounded-2xl bg-cyan opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute inset-[-1px] rounded-2xl border border-cyan opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <span className="text-lg font-bold font-mono text-text-primary group-hover:text-cyan transition-colors">{step.number}</span>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
