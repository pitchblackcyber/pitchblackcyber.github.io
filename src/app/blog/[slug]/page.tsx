import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       {/* Breadcrumbs and back button */}
       <div className="mb-8">
         <Link href="/blog" className="text-brand-cyan hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
           &larr; Back to Insights
         </Link>
       </div>

       {/* Article Header */}
       <header className="mb-12">
         <div className="flex items-center gap-3 mb-6">
            <span className="text-brand-cyan text-xs font-mono uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/30">{post.category}</span>
            <span className="text-text-muted text-xs font-mono">{post.date}</span>
         </div>
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
           {post.title}
         </h1>
         <p className="text-xl text-text-muted leading-relaxed border-l-4 border-brand-purple pl-6 py-2 italic">
           {post.excerpt}
         </p>
       </header>

       {/* Article Content (Prose) */}
       {/* Note: We use custom tailwind classes for the prose styling since typography plugin might not be installed */}
       <div 
         className="mb-16 text-lg leading-loose text-text-muted space-y-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-2 [&>strong]:text-white [&>strong]:font-bold"
         dangerouslySetInnerHTML={{ __html: post.content }}
       />

       {/* Unique CTA Section */}
       <div className="glass rounded-3xl p-8 md:p-12 text-center border-t-4 border-brand-magenta shadow-glow-magenta relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-magenta/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">{post.ctaTitle}</h2>
            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              {post.ctaText}
            </p>
            <Link href={post.ctaLink} className="inline-block font-bold px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-magenta text-white shadow-glow-purple transition-transform hover:scale-105">
              {post.ctaButtonText}
            </Link>
          </div>
       </div>
    </article>
  );
}
