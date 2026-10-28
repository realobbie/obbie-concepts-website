// components/BlogListingContent.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  IconSearch, 
  IconClock, 
  IconArrowRight, 
  IconTag 
} from '@tabler/icons-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blogData';

export default function BlogListingContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-quad',
    });
  }, []);

  const featuredArticle = useMemo(() => {
    return BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* ================= HEADER HERO ================= */}
      <section className="bg-slate-950 text-white pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/10 via-transparent to-[#0B0F17] opacity-60 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center" data-aos="fade-down">
          <span className="text-brand-orange font-extrabold tracking-[0.2em] uppercase text-xs mb-3 block">
            Insights &amp; Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-heading mb-4">
            Our <span className="text-brand-orange">Journal</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
            Expert commentary on SaaS development, performance marketing, and design.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <IconSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange text-sm shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div 
          data-aos="fade-up"
          className="flex items-center gap-2 overflow-x-auto w-full scrollbar-none mb-10 pb-4 border-b border-slate-200 dark:border-slate-800"
        >
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
                  : 'bg-slate-100 dark:bg-[#161F2E] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Banner */}
        {selectedCategory === 'All' && !searchQuery && featuredArticle && (
          <section className="mb-16" data-aos="fade-up">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4">
              Featured Article
            </h2>
            <div className="group rounded-3xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl hover:border-brand-orange/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12">
              <div className="relative lg:col-span-7 min-h-[320px] lg:min-h-[420px] overflow-hidden">
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="p-8 lg:p-12 lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand-orange/10 backdrop-blur-md text-brand-orange border border-brand-orange/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <IconClock size={14} /> {featuredArticle.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white font-heading mb-4 group-hover:text-brand-orange transition-colors">
                    <Link href={`/blog/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {featuredArticle.author.name} • {featuredArticle.publishedAt}
                  </span>
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
                  >
                    Read Article <IconArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="group bg-white dark:bg-[#161F2E] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-orange/10 backdrop-blur-md text-brand-orange px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 border border-brand-orange/20 shadow-sm">
                    <IconTag size={12} /> {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-2 font-medium">
                    {post.publishedAt} • {post.readTime}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading mb-3 group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {post.author.name}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
                >
                  Read Article <IconArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}