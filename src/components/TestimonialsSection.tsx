"use client";

import { motion } from "motion/react";
import { Quotes } from "@phosphor-icons/react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(24,190,227,0.03),transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="text-cyan mb-8 opacity-50">
            <Quotes weight="fill" className="w-16 h-16" />
          </div>
          
          {/* TODO: Add real client testimonial quote here once available */}
          <h3 className="text-2xl md:text-4xl font-medium text-text-primary leading-relaxed mb-8">
            &quot;They didn&apos;t just give us a checklist. They built a practical security program that our team actually understands and follows.&quot;
          </h3>
          
          <div className="flex flex-col items-center">
            {/* TODO: Add real client name/title here once available */}
            <p className="text-text-primary font-bold text-lg mb-1">— Defense Contractor Client</p>
            <p className="text-text-muted text-sm">Northern Utah</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
