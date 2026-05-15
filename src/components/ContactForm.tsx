export default function ContactForm() {
  return (
    <section id="contact" className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border-t-4 border-t-brand-cyan shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative">
      <div className="text-center mb-10 relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get a Free Security Consultation</h3>
        <p className="text-text-muted max-w-2xl mx-auto">
          Whether you need a full penetration test, compliance guidance, or just want to discuss your current security posture, our team is ready to help. Fill out the form below and we&apos;ll be in touch.
        </p>
      </div>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-text-muted">Your Name</label>
          <input type="text" id="name" required className="bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="Jane Doe" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-text-muted">Email Address</label>
          <input type="email" id="email" required className="bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="jane@example.com" />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="company" className="text-sm font-medium text-text-muted">Company Name (Optional)</label>
          <input type="text" id="company" className="bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors" placeholder="Acme Corp" />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="service" className="text-sm font-medium text-text-muted">Service of Interest</label>
          <select id="service" required className="bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors appearance-none cursor-pointer">
            <option value="" disabled selected>Select a service...</option>
            <option value="penetration-testing">Penetration Testing & Security Audits</option>
            <option value="compliance">Compliance (HIPAA, CMMC, NIST)</option>
            <option value="incident-response">Incident Response & Recovery</option>
            <option value="endpoint-protection">Endpoint Protection (EDR/MDR)</option>
            <option value="family-workshop">Family Safety Workshop</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-text-muted">How can we help?</label>
          <textarea id="message" rows={4} required className="bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors resize-none" placeholder="Tell us about your current challenges or what you're looking for..."></textarea>
        </div>
        <div className="md:col-span-2 flex justify-center mt-4">
          <button type="submit" className="font-bold px-10 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-deep-space shadow-glow-cyan transition-transform hover:scale-105 w-full md:w-auto">
            Request Consultation
          </button>
        </div>
      </form>
    </section>
  );
}
