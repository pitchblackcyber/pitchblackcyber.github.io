import HeroSection from "@/components/HeroSection";
import ServicesBento from "@/components/ServicesBento";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import LeadMagnetForm from "@/components/LeadMagnetForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <StatsSection />
      
      <ServicesBento />
      
      <ProcessSection />
      
      <div className="bg-surface border-y border-border">
        <TestimonialsSection />
      </div>

      {/* CTA / Contact Section */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent"></div>
        <ContactForm />
      </div>
      
      {/* Lead Magnet Section */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-magenta/30 bg-magenta/5 text-magenta text-sm font-medium mb-6">
                Free Resource
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
                The 2026 SMB Ransomware Checklist
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-lg leading-relaxed">
                Ransomware actors are targeting small businesses at an unprecedented rate. Download our free, actionable checklist to see if your defenses are up to date.
              </p>
              <ul className="flex flex-col gap-3 text-text-secondary mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-cyan/20 flex items-center justify-center border border-cyan/30 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-cyan"></div>
                  </div>
                  <span>Identify the top 3 entry points attackers use today</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-cyan/20 flex items-center justify-center border border-cyan/30 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-cyan"></div>
                  </div>
                  <span>Review practical controls you can implement this week</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-cyan/20 flex items-center justify-center border border-cyan/30 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-cyan"></div>
                  </div>
                  <span>Learn how to prepare for recovery before an incident happens</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
