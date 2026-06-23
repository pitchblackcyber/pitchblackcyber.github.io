"use client";

import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, CalendarPlus } from "@phosphor-icons/react";

const FORM_ID = "mykadjqk";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto glass-panel p-12 rounded-[2rem] text-center border-t-2 border-t-cyan relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(24,190,227,0.1),transparent_70%)] pointer-events-none"></div>
          
          <div className="w-20 h-20 mx-auto rounded-full bg-cyan/10 flex items-center justify-center mb-8 border border-cyan/20">
            <svg className="w-10 h-10 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-3xl font-bold mb-4 text-text-primary">Request Received</h3>
          <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            Thank you for reaching out. A member of our security team will review your inquiry and get back to you within 24 hours.
          </p>
          
          <div className="pt-8 border-t border-border">
            <p className="text-text-muted text-sm mb-4">Want to speak with us sooner?</p>
            {/* cal.com placeholder */}
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-cyan/50 hover:bg-cyan/5 transition-all text-text-secondary hover:text-cyan text-sm font-medium">
              <CalendarPlus size={18} weight="bold" />
              Schedule a Call via Cal.com (Coming Soon)
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto glass-panel rounded-[2rem] p-8 md:p-12 relative z-10">
        
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">Get a Free Security Consultation</h3>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you need a full penetration test, compliance guidance, or just want to discuss your current security posture, we&apos;re here to help.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-text-secondary">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required 
              disabled={state.submitting}
              className="bg-panel border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors disabled:opacity-50" 
              placeholder="Jane Doe" 
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-text-secondary">Work Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required 
              disabled={state.submitting}
              className="bg-panel border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors disabled:opacity-50" 
              placeholder="jane@company.com" 
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
          </div>
          
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="company" className="text-sm font-medium text-text-secondary">Company Name (Optional)</label>
            <input 
              type="text" 
              id="company" 
              name="company"
              disabled={state.submitting}
              className="bg-panel border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors disabled:opacity-50" 
              placeholder="Acme Corp" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="text-sm font-medium text-text-secondary">Service of Interest</label>
            <select 
              id="service" 
              name="service"
              required 
              defaultValue=""
              disabled={state.submitting}
              className="bg-panel border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors appearance-none cursor-pointer disabled:opacity-50"
            >
              <option value="" disabled>Select a primary need...</option>
              <option value="cmmc-compliance">CMMC & NIST 800-171</option>
              <option value="penetration-testing">Penetration Testing</option>
              <option value="vciso">vCISO & Security Program</option>
              <option value="incident-response">Incident Response</option>
              <option value="family-workshop">Family Safety Workshop</option>
              <option value="other">Other Inquiry</option>
            </select>
            <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-400 text-xs" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="urgency" className="text-sm font-medium text-text-secondary">How soon do you need help?</label>
            <select 
              id="urgency" 
              name="urgency"
              required 
              defaultValue=""
              disabled={state.submitting}
              className="bg-panel border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors appearance-none cursor-pointer disabled:opacity-50"
            >
              <option value="" disabled>Select timeline...</option>
              <option value="emergency">Immediate (Active Incident)</option>
              <option value="this-month">This month</option>
              <option value="this-quarter">This quarter</option>
              <option value="exploring">Just exploring options</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-text-secondary">How can we help?</label>
            <textarea 
              id="message" 
              name="message"
              rows={4} 
              required 
              disabled={state.submitting}
              className="bg-panel border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors resize-none disabled:opacity-50" 
              placeholder="Tell us about your current challenges or goals..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
          </div>

          {state.errors && (
            <div className="md:col-span-2 bg-red-900/30 border border-red-500/30 rounded-xl p-4 text-red-300 text-sm">
              Please check the highlighted fields above and try again.
            </div>
          )}
          
          <div className="md:col-span-2 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border mt-4">
            <p className="text-xs text-text-muted max-w-sm text-center md:text-left">
              By submitting this form, you agree to our privacy policy. We will never share your information.
            </p>
            
            <button 
              type="submit" 
              disabled={state.submitting}
              className="group flex items-center justify-center bg-cyan rounded-full pl-8 pr-3 py-3 text-void font-bold transition-all duration-300 hover:shadow-glow-cyan active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
            >
              {state.submitting ? "Submitting..." : "Request Consultation"}
              {!state.submitting && (
                <div className="ml-4 w-10 h-10 rounded-full bg-void/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight weight="bold" className="w-5 h-5" />
                </div>
              )}
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
           {/* cal.com placeholder */}
           <p className="text-text-muted text-sm mb-4">Prefer to schedule directly?</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-cyan/50 hover:bg-cyan/5 transition-all text-text-secondary hover:text-cyan text-sm font-medium">
              <CalendarPlus size={18} weight="bold" />
              Schedule a Call via Cal.com (Coming Soon)
            </button>
        </div>
      </div>
    </section>
  );
}
