import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "5 Simple Ways to Harden Your Cloud Infrastructure",
      date: "May 10, 2026",
      excerpt: "Cloud misconfigurations are the leading cause of data breaches. Learn five practical steps to secure your AWS and Azure environments today.",
    },
    {
      title: "Why Penetration Testing is Crucial for Small Businesses",
      date: "April 22, 2026",
      excerpt: "Small businesses are increasingly targeted by ransomware. Discover how regular penetration testing can identify gaps before attackers exploit them.",
    },
    {
      title: "The Rise of AI-Powered Phishing Attacks",
      date: "March 15, 2026",
      excerpt: "Attackers are using AI to craft highly convincing spear-phishing emails. Here is how your employees can spot them.",
    }
  ];

  return (
    <div className="py-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-magenta to-brand-purple text-transparent bg-clip-text">
          Security Insights
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          The latest thoughts, strategies, and technical guides from the Pitch Black Cyber team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {posts.map((post, idx) => (
          <article key={idx} className="glass rounded-2xl p-6 md:col-span-4 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-glow-purple">
            <p className="text-brand-magenta text-xs font-mono mb-2 uppercase tracking-widest">{post.date}</p>
            <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
            <p className="text-text-muted text-sm mb-6 flex-grow">{post.excerpt}</p>
            <Link href="#" className="font-bold text-brand-cyan hover:text-white transition-colors text-sm uppercase tracking-wider">
              Read Article &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
