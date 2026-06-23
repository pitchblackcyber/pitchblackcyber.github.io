"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";
import { ArrowUpRight, ShieldCheck, FileText, TrendUp } from "@phosphor-icons/react";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 md:pt-40 lg:pt-0">
      {/* Background radial highlight behind hero */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_left_center,rgba(24,190,227,0.05),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Editorial Copy */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
              </span>
              Trusted by Northern Utah SMBs & Defense Contractors
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-[1.05]">
              Enterprise Security. <br />
              <span className="text-cyan">Local Partnership.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
              We bring the discipline and rigor of enterprise cybersecurity to local businesses, healthcare clinics, and DoD contractors—without the overwhelming technical jargon.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="#contact"
                className="group flex items-center justify-between sm:justify-center bg-cyan rounded-full pl-8 pr-3 py-3 sm:py-4 text-void font-bold text-lg transition-all duration-300 hover:shadow-glow-cyan active:scale-[0.98]"
              >
                <span>Request Consultation</span>
                <div className="ml-6 w-10 h-10 rounded-full bg-void/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight weight="bold" className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="/services"
                className="flex items-center justify-center rounded-full px-8 py-3 sm:py-4 border border-border hover:border-cyan/50 hover:bg-cyan/5 text-text-primary font-medium transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-border w-full flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-text-primary font-mono">100%</span>
                <span className="text-sm text-text-muted">Assessment Pass Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-text-primary font-mono">DoD</span>
                <span className="text-sm text-text-muted">Cleared Experts</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Abstract Graphic / Bento Preview */}
          <motion.div
            className="lg:col-span-5 relative z-10 w-full h-full min-h-[400px] lg:min-h-[500px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Complex Glass Panel Composition */}
              <div className="relative w-full max-w-md aspect-square">

                {/* Main panel */}
                <div className="absolute inset-4 glass-panel rounded-3xl border border-border p-6 flex flex-col shadow-2xl backdrop-blur-xl animate-float">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center border border-cyan/20">
                      <ShieldCheck weight="duotone" className="w-6 h-6 text-cyan" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-text-primary">System Integrity</div>
                      <div className="text-xs text-cyan">Secure</div>
                    </div>
                  </div>

                  <div className="flex-1 rounded-xl bg-void/50 border border-border/50 p-4 relative overflow-hidden">
                    {/* Decorative grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    <div className="relative z-10 h-full flex items-end justify-between gap-2">
                      <div className="w-full bg-cyan/20 rounded-t-md h-[40%] border-t border-cyan/30"></div>
                      <div className="w-full bg-cyan/20 rounded-t-md h-[50%] border-t border-cyan/30"></div>
                      <div className="w-full bg-cyan/20 rounded-t-md h-[60%] border-t border-cyan/30"></div>
                      <div className="w-full bg-cyan/20 rounded-t-md h-[70%] border-t border-cyan/30"></div>
                      <div className="w-full bg-cyan rounded-t-md h-[90%] shadow-[0_0_15px_rgba(24,190,227,0.4)] relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">Active</div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Floating pill 1 */}
                <div className="absolute -right-6 top-10 glass rounded-full pl-3 pr-5 py-3 border border-magenta/20 flex items-center gap-3 shadow-[0_8px_32px_rgba(236,25,144,0.15)] animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-8 h-8 rounded-full bg-magenta/10 flex items-center justify-center">
                    <TrendUp weight="bold" className="w-4 h-4 text-magenta" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-text-secondary leading-tight">Threats Blocked</span>
                    <span className="text-sm font-bold text-text-primary leading-tight">24,102</span>
                  </div>
                </div>

                {/* Floating pill 2 */}
                <div className="absolute -left-8 bottom-24 glass rounded-full pl-3 pr-5 py-3 border border-border flex items-center gap-3 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center">
                    <FileText weight="duotone" className="w-4 h-4 text-cyan" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-text-secondary leading-tight">Focused</span>
                    <span className="text-sm font-bold text-text-primary leading-tight">Solutions</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
