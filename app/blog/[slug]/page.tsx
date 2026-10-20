import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, BlogPost } from '../../../lib/blogData';
import { 
  IconArrowLeft, 
  IconClock, 
  IconBrandWhatsapp, 
  IconArrowRight 
} from '@tabler/icons-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found | Obbie Concepts' };
  }

  return {
    title: `${post.title} | Obbie Concepts Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const whatsappNumber = "254735602433";
  const whatsappMsg = encodeURIComponent(
    `Hello Obbie Concepts! I just read your blog post "${post.title}" and would like to discuss working together.`
  );

  // Filter 2 related posts (preferring same category, excluding current post)
  const relatedPosts: BlogPost[] = BLOG_POSTS
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-6 sm:pt-10 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-orange transition-colors mb-6"
        >
          <IconArrowLeft size={16} /> Back to Journal
        </Link>

        {/* Category & Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-slate-500 text-xs flex items-center gap-1">
            <IconClock size={14} /> {post.readTime}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight mb-6 text-slate-900 dark:text-white">
          {post.title}
        </h1>

        {/* Author Details */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 mb-8">
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-brand-orange/30"
            />
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {post.author.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {post.author.role} • {post.publishedAt}
              </p>
            </div>
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-xl border border-slate-200 dark:border-slate-800">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-base">
          <p className="text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed border-l-4 border-brand-orange pl-4">
            {post.excerpt}
          </p>
          
          {post.content && post.content.length > 0 ? (
            post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          ) : (
            <p>
              Digital transformation requires balancing technical excellence with strategic business positioning. Building responsive platforms or launching targeted campaigns is only effective when backed by scalable code architectures and data-backed metrics.
            </p>
          )}
        </div>

        {/* Article Footer WhatsApp CTA */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs font-bold text-slate-500">
            Have questions or want to implement this for your business?
          </span>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-brand-orange-hover transition-colors shadow-lg"
          >
            <IconBrandWhatsapp size={16} /> Discuss via WhatsApp
          </a>
        </div>

        {/* ================= RECOMMENDED ARTICLES ================= */}
        {relatedPosts.length > 0 && (
          <section className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Recommended Articles
              </h3>
              <Link
                href="/blog"
                className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1"
              >
                View Journal <IconArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {relatedPosts.map((related) => (
                <div
                  key={related.id}
                  className="group rounded-2xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 overflow-hidden p-3 sm:p-4 hover:border-brand-orange/40 transition-all duration-300 flex flex-row items-center gap-4"
                >
                  {/* Left Small Thumbnail */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">
                        {related.category}
                      </span>
                      <span className="text-[10px] text-slate-400">• {related.readTime}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-heading leading-snug line-clamp-2 group-hover:text-brand-orange transition-colors mb-2">
                      <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                    </h4>

                    <Link
                      href={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-orange hover:text-brand-orange-hover transition-colors mt-auto"
                    >
                      Read Article <IconArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}