// app/resources/page.tsx
'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  RESOURCE_CATEGORIES, 
  RESOURCES_DATA, 
  ResourceItem 
} from '../../lib/resourcesData';
import { 
  IconDownload, 
  IconFileText, 
  IconSearch, 
  IconBrandWhatsapp, 
  IconFolder, 
  IconSparkles 
} from '@tabler/icons-react';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Refresh AOS positioning when category or search changes
  useEffect(() => {
    AOS.refresh();
  }, [selectedCategory, searchQuery]);

  const whatsappNumber = "254735602433";
  const whatsappMsg = encodeURIComponent(
    "Hello Obbie Concepts! I downloaded your company profile/resources and would like to schedule a quick introduction."
  );

  // Filter items based on Category & Search Query
  const filteredResources = RESOURCES_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-6 sm:pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Page Header Fade-Down */}
        <div 
          data-aos="fade-down"
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
            <IconFolder size={14} /> Official Collateral
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading leading-tight mb-4 text-slate-900 dark:text-white">
            Resource Center & Downloads
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Access our latest company profiles, service brochures, pricing models, and brand guidelines in downloadable PDF & ZIP formats.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800"
        >
          {/* Categories Horizontal Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {RESOURCE_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                    : 'bg-slate-100 dark:bg-[#131B2A] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <IconSearch
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search downloads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange transition-colors"
            />
          </div>
        </div>

        {/* Resource Items Grid with Staggered AOS Animations */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className="group relative rounded-2xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div>
                  {/* Top Header Badge & File Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/10 border border-brand-orange/20 px-2.5 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {item.fileType} • {item.fileSize}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-brand-orange transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Download CTA Button */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <IconFileText size={16} className="text-brand-orange" />
                    <span className="font-medium text-[11px]">Ready for download</span>
                  </div>

                  <a
                    href={item.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 bg-brand-orange text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-brand-orange-hover active:scale-95 transition-all shadow-md"
                  >
                    <IconDownload size={14} /> Download
                  </a>
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
              No matching documents found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-brand-orange hover:underline"
            >
              Clear filters and search
            </button>
          </div>
        )}

        {/* AOS Banner */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 to-[#131B2A] text-white p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <IconSparkles size={14} /> Custom Proposals & Enquiries
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading mb-2">
              Need a Tailored Quote or Custom Presentation?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Have specific technical requirements or need an NDA before sharing scope? Reach out directly to discuss working together.
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-brand-orange-hover active:scale-95 transition-all shadow-lg shrink-0"
          >
            <IconBrandWhatsapp size={18} /> Connect on WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}