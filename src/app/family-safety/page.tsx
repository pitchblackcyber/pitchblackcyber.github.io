import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function FamilySafety() {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <header className="glass rounded-2xl p-8 md:p-16 text-center mb-16 shadow-[0_10px_30px_rgba(237,24,144,0.2)] border border-brand-magenta/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(237,24,144,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10">
          <p className="text-brand-magenta font-mono uppercase tracking-widest text-sm font-bold mb-3">Community Education</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-white via-brand-magenta to-brand-purple text-transparent bg-clip-text">
            Family Cyber Safety Workshops
          </h1>
          <h2 className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Practical, approachable cybersecurity guidance for parents raising kids in a connected world. Available for schools, churches, and community groups across Northern Utah and the Cache Valley.
          </h2>
          <Link href="#contact" className="inline-block font-bold px-8 py-4 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-purple text-white shadow-glow-magenta transition-transform hover:scale-105">
            Bring This Workshop to Your Group
          </Link>
        </div>
      </header>

      {/* Workshop Topics - Icon Grid */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Workshop Topics</h3>
          <p className="text-text-muted max-w-2xl mx-auto">We cut through the confusing tech jargon to give parents clear, actionable steps for protecting their families.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Topic 1 */}
          <div className="glass p-8 rounded-2xl text-center hover:-translate-y-1 transition-transform border-t-2 border-t-brand-magenta/50">
            <div className="mx-auto w-16 h-16 bg-brand-magenta/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Smartphone Safety</h4>
            <p className="text-sm text-text-muted">Readiness, boundaries, and what to set up before handing over the device.</p>
          </div>
          
          {/* Topic 2 */}
          <div className="glass p-8 rounded-2xl text-center hover:-translate-y-1 transition-transform border-t-2 border-t-brand-magenta/50">
            <div className="mx-auto w-16 h-16 bg-brand-magenta/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Social Media</h4>
            <p className="text-sm text-text-muted">Navigating Snapchat, TikTok, and Instagram privacy, messaging, and algorithms.</p>
          </div>
          
          {/* Topic 3 */}
          <div className="glass p-8 rounded-2xl text-center hover:-translate-y-1 transition-transform border-t-2 border-t-brand-magenta/50">
            <div className="mx-auto w-16 h-16 bg-brand-magenta/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Gaming & Predators</h4>
            <p className="text-sm text-text-muted">Understanding risks in Roblox, Minecraft, voice chats, and recognizing manipulation.</p>
          </div>

          {/* Topic 4 */}
          <div className="glass p-8 rounded-2xl text-center hover:-translate-y-1 transition-transform border-t-2 border-t-brand-magenta/50">
            <div className="mx-auto w-16 h-16 bg-brand-magenta/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-brand-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Parental Controls</h4>
            <p className="text-sm text-text-muted">Practical setups for Apple Screen Time, Google Family Link, and home networks.</p>
          </div>
        </div>
      </section>

      {/* Service Package: Private Family Setup */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-elevated/40 rounded-3xl overflow-hidden border border-border-glass backdrop-blur-md">
        <div className="p-8 md:p-12 order-2 md:order-1">
          <p className="text-brand-magenta font-mono uppercase tracking-widest text-sm font-bold mb-3">Hands-On Help</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Private Family Cyber Safety Setup</h3>
          <p className="text-text-muted mb-6 leading-relaxed">
            Need more than just a workshop? We offer private, hands-on sessions for your family. We sit down with you to actively configure and harden your devices, set up robust parental controls, and establish a personalized Family Tech Agreement.
          </p>
          <ul className="text-text-muted list-none space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-brand-magenta mt-1 font-bold">✓</span>
              <span>Phone and tablet safety settings lockdown</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-magenta mt-1 font-bold">✓</span>
              <span>Apple Screen Time or Google Family Link setup</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-magenta mt-1 font-bold">✓</span>
              <span>App privacy reviews and content filter installation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-magenta mt-1 font-bold">✓</span>
              <span>Home Wi-Fi safety recommendations</span>
            </li>
          </ul>
          <Link href="#contact" className="inline-block font-bold px-6 py-3 rounded-xl bg-transparent border-2 border-brand-magenta text-brand-magenta transition-colors hover:bg-brand-magenta hover:text-white">
            Get a Custom Quote
          </Link>
        </div>
        <div className="order-1 md:order-2 h-64 md:h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-magenta/20 via-deep-space to-deep-space flex items-center justify-center p-8">
            <div className="glass w-full max-w-sm aspect-video rounded-2xl border-brand-magenta/30 shadow-[0_0_50px_rgba(237,24,144,0.15)] flex items-center justify-center">
              <svg className="w-16 h-16 text-brand-magenta/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
        </div>
      </section>

      {/* CTA / Contact Form */}
      <ContactForm />
    </div>
  );
}
