import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="glass rounded-2xl p-8 md:p-12 text-center mt-8 shadow-[0_10px_30px_rgba(0,0,0,0.45)] border border-border-glass relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(255,59,127,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-brand-cyan to-brand-purple text-transparent bg-clip-text">
            Practical Cybersecurity for Local Businesses & Families
          </h1>
          <h2 className="text-lg md:text-xl text-text-muted font-mono tracking-wide max-w-3xl mx-auto mb-8">
            We translate complex threats into clear, actionable protection. Proudly serving Northern Utah and the Cache Valley.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="font-bold px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-purple text-deep-space shadow-glow-cyan transition-transform hover:scale-105">
              Compliance Frameworks
            </Link>
            <Link href="/family-safety" className="font-bold px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-magenta text-white shadow-glow-purple transition-transform hover:scale-105">
              Family Workshops
            </Link>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-8 mb-16">
        <section className="glass rounded-2xl p-6 md:col-span-4 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-glow-cyan relative overflow-hidden">
          <h3 className="text-xl font-bold mb-3 z-10 relative text-white">Small Business Protection</h3>
          <p className="text-text-muted flex-grow z-10 relative">
            We provide clear, actionable IT hardening and security assessments tailored to local businesses. We'll identify your vulnerabilities and help you fix them without the confusing tech jargon or unnecessary up-selling.
          </p>
          <Link href="/services" className="mt-6 inline-block font-bold text-brand-cyan hover:text-white transition-colors z-10 relative text-sm uppercase tracking-wider">
            Learn More &rarr;
          </Link>
        </section>

        <section className="glass rounded-2xl p-6 md:col-span-4 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-glow-purple relative overflow-hidden">
          <h3 className="text-xl font-bold mb-3 z-10 relative text-white">HIPAA Readiness</h3>
          <p className="text-text-muted flex-grow z-10 relative">
            Navigating healthcare compliance is overwhelming. We conduct comprehensive Security Risk Assessments (SRA) and provide direct compliance mapping so your practice stays secure and audit-ready.
          </p>
          <Link href="/services" className="mt-6 inline-block font-bold text-brand-cyan hover:text-white transition-colors z-10 relative text-sm uppercase tracking-wider">
            View Compliance Services &rarr;
          </Link>
        </section>

        <section className="glass rounded-2xl p-6 md:col-span-4 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-glow-cyan relative overflow-hidden">
          <h3 className="text-xl font-bold mb-3 z-10 relative text-white">Family Safety</h3>
          <p className="text-text-muted flex-grow z-10 relative">
            Parents are navigating a digital world they were never trained for. Our community workshops provide practical guidance on smartphones, apps, and online safety for kids—no scare tactics, just straightforward advice.
          </p>
          <Link href="/family-safety" className="mt-6 inline-block font-bold text-brand-cyan hover:text-white transition-colors z-10 relative text-sm uppercase tracking-wider">
            Find a Workshop &rarr;
          </Link>
        </section>
      </div>
    </>
  );
}
