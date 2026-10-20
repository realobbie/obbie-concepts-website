// app/products/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  PRODUCT_CATEGORIES, 
  PRODUCTS_DATA 
} from '../../lib/productsData';
import { 
  IconSearch, 
  IconDeviceLaptop, 
  IconArrowRight, 
  IconExternalLink, 
  IconBrandWhatsapp, 
  IconSparkles 
} from '@tabler/icons-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selectedCategory, searchQuery]);

  const whatsappNumber = "254735602433";
  const whatsappMsg = encodeURIComponent(
    "Hello Obbie Concepts! I am browsing your products catalog and would like to request a custom software/branding build."
  );

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-6 sm:pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div data-aos="fade-down" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
            <IconDeviceLaptop size={14} /> Product Portfolio & Demos
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading leading-tight mb-4 text-slate-900 dark:text-white">
            Software Products & Brand Systems
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Explore ready-to-deploy platforms, mobile applications, and visual identity systems engineered by Obbie Concepts. Click any product to view screenshots, live demos, and technical specifications.
          </p>
        </div>

        {/* Search & Horizontal Mobile Scroll Categories */}
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800"
        >
          {/* Horizontal Mobile Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                    : 'bg-slate-100 dark:bg-[#131B2A] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <IconSearch
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search products & apps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={(idx % 2) * 100}
                className="group rounded-2xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div>
                  {/* Image Cover Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <Image
                      src={product.coverImage}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category & Status Overlay Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-slate-900/80 backdrop-blur-md text-brand-orange border border-brand-orange/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className="bg-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
                        {product.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-1 group-hover:text-brand-orange transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-orange mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
                      {product.description}
                    </p>

                    {/* Quick Feature Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.features.slice(0, 2).map((feat, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium bg-slate-200/60 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md"
                        >
                          • {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link Button */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between mt-auto">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline"
                  >
                    View Product & Screenshots <IconArrowRight size={14} />
                  </Link>

                  {product.demoUrl && (
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="External Demo Link"
                    >
                      <IconExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            data-aos="fade-up"
            className="text-center py-16 bg-slate-50 dark:bg-[#131B2A] rounded-2xl border border-slate-200 dark:border-slate-800"
          >
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              No matching products found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-brand-orange hover:underline"
            >
              Clear search filters
            </button>
          </div>
        )}

        {/* Custom Solution WhatsApp CTA */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 to-[#131B2A] text-white p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <IconSparkles size={14} /> Bespoke Engineering
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading mb-2">
              Need a Custom Product Built for Your Brand?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We design and develop custom web applications, SaaS platforms, and digital brand identities tailored directly to your business specification.
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-brand-orange-hover active:scale-95 transition-all shadow-lg shrink-0"
          >
            <IconBrandWhatsapp size={18} /> Request Custom Build
          </a>
        </div>

      </div>
    </main>
  );
}