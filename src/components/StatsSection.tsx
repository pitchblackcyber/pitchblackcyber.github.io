"use client";

import { motion } from "motion/react";

const stats = [
  { label: "DoD Cleared", value: "100%", description: "All engineers hold active clearances." },
  { label: "Assessment Pass Rate", value: "100%", description: "Client success in formal compliance audits." },
  { label: "Years Experience", value: "15+", description: "Defending highly regulated environments." },
];

export default function StatsSection() {
  return (
    <section className="py-20 relative border-y border-border bg-surface overflow-hidden">
      {/* Background grain/texture for the section */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Why Pitch Black?</h2>
            <p className="text-text-secondary text-sm">We don&apos;t just sell tools. We work with you to build defensible security programs that pass rigorous audits.</p>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col relative"
                >
                  <div className="text-4xl lg:text-5xl font-bold font-mono text-cyan mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base font-bold text-text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-text-muted">
                    {stat.description}
                  </div>

                  {/* Divider for mobile, or vertical divider for desktop */}
                  {index !== stats.length - 1 && (
                    <>
                      <div className="h-[1px] w-full bg-border mt-8 md:hidden"></div>
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-border"></div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
