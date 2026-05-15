import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "5 Simple Ways to Harden Your Cloud Infrastructure",
      date: "May 10, 2026",
      category: "Cloud Security",
      excerpt: "Cloud misconfigurations are the leading cause of data breaches. Learn five practical steps to secure your AWS and Azure environments today.",
    },
    {
      title: "Why Penetration Testing is Crucial for Small Businesses",
      date: "April 22, 2026",
      category: "Penetration Testing",
      excerpt: "Small businesses are increasingly targeted by ransomware. Discover how regular penetration testing can identify gaps before attackers exploit them.",
    },
    {
      title: "The Rise of AI-Powered Phishing Attacks",
      date: "March 15, 2026",
      category: "Threat Intelligence",
      excerpt: "Attackers are using AI to craft highly convincing spear-phishing emails. Here is how your employees can spot them.",
    },
    {
      title: "Navigating CMMC 2.0: What DoD Contractors Need to Know",
      date: "February 28, 2026",
      category: "Compliance",
      excerpt: "The Cybersecurity Maturity Model Certification (CMMC) 2.0 is here. Understand the key changes and how to prepare your organization for the upcoming assessments.",
    },
    {
      title: "Zero Trust Architecture: Moving Beyond the Perimeter",
      date: "February 10, 2026",
      category: "Architecture",
      excerpt: "The traditional network perimeter is dead. Learn why implementing a Zero Trust Architecture is essential for modern businesses and how to get started.",
    },
    {
      title: "Critical Patch Update: What You Need to Know About the Latest Windows Vulnerability",
      date: "January 15, 2026",
      category: "Patch Management",
      excerpt: "A critical zero-day vulnerability has been discovered in Windows. Find out if your systems are affected and how to apply the emergency patch immediately.",
    }
  ];

  const categories = [
    "All Insights",
    "Cloud Security",
    "Penetration Testing",
    "Threat Intelligence",
    "Compliance",
    "Architecture",
    "Patch Management"
  ];

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-16 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(113,46,255,0.15),transparent_60%)] pointer-events-none"></div>
        <p className="text-brand-purple font-mono uppercase tracking-widest text-sm font-bold mb-3 z-10 relative">Latest Insights</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white z-10 relative bg-gradient-to-r from-white via-brand-purple to-brand-magenta text-transparent bg-clip-text">
          Security Intelligence & News
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto text-lg">
          Expert analysis, actionable threat intelligence, and compliance updates to keep you ahead of the curve.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Insight</h2>
        <div className="glass rounded-3xl p-8 md:p-12 border border-brand-purple/40 shadow-glow-purple relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent pointer-events-none"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <span className="bg-brand-purple/20 text-brand-purple px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Emergency Alert</span>
                 <p className="text-text-muted font-mono text-sm">May 14, 2026</p>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Massive Ransomware Campaign Targets US Logistics Firms</h3>
              <p className="text-text-muted leading-relaxed mb-6">
                A highly coordinated ransomware campaign, dubbed &quot;NightOwl,&quot; is actively exploiting unpatched VPN gateways. Learn about the indicators of compromise (IoCs) and the immediate steps your organization must take to secure its perimeter.
              </p>
              <Link href="#" className="inline-block font-bold px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-magenta text-white shadow-glow-purple transition-transform hover:scale-105">
                Read Full Advisory
              </Link>
            </div>
            <div className="h-64 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-deep-space to-deep-space rounded-2xl flex items-center justify-center border border-border-glass">
              <svg className="w-24 h-24 text-brand-purple/40 group-hover:text-brand-purple/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter (Wireframe only) */}
      <div className="mb-10 overflow-x-auto pb-4">
        <ul className="flex flex-wrap gap-3 whitespace-nowrap">
           {categories.map((cat, idx) => (
             <li key={idx}>
               <button className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-white text-deep-space' : 'bg-[#0e1018] text-text-muted border border-border-glass hover:bg-white/10 hover:text-white'}`}>
                 {cat}
               </button>
             </li>
           ))}
        </ul>
      </div>

      {/* Grid of Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {posts.map((post, idx) => (
          <article key={idx} className="glass rounded-2xl flex flex-col transition-transform hover:-translate-y-2 hover:shadow-glow-cyan border border-border-glass group">
            <div className="h-48 w-full bg-gradient-to-br from-[#0e1018] to-[#1a1c23] rounded-t-2xl border-b border-border-glass flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,191,228,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
               {/* Placeholder for post image */}
               <svg className="w-16 h-16 text-text-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
               </svg>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                 <p className="text-brand-cyan text-xs font-mono uppercase tracking-widest">{post.category}</p>
                 <p className="text-text-muted text-xs font-mono">{post.date}</p>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-cyan transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-text-muted text-sm mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
              <Link href="#" className="font-bold text-white hover:text-brand-cyan transition-colors text-sm flex items-center gap-2 mt-auto">
                Read Article <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      {/* Newsletter Signup */}
      <div className="glass rounded-3xl p-8 text-center max-w-3xl mx-auto border-t-4 border-t-brand-cyan">
         <h3 className="text-2xl font-bold text-white mb-2">Never Miss a Critical Update</h3>
         <p className="text-text-muted mb-6">Subscribe to our threat intelligence newsletter.</p>
         <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Email Address" required className="flex-grow bg-[#0e1018] border border-border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1" />
            <button type="submit" className="font-bold px-6 py-3 rounded-xl bg-brand-cyan text-deep-space hover:bg-white transition-colors">
              Subscribe
            </button>
         </form>
      </div>
    </div>
  );
}
