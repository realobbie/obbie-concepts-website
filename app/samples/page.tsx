// app/portfolio/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  IconSearch, 
  IconX, 
  IconBrandWhatsapp, 
  IconFilter,
  IconArrowLeft,
  IconCheck,
  IconPhoto,
  IconWorld,
  IconArrowUpRight
} from '@tabler/icons-react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Web Design' | 'Digital Marketing' | 'Printing & Branding';
  client: string;
  summary: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  deliverables: string[];
  liveUrl?: string;
}

const PORTFOLIO_SAMPLES: PortfolioItem[] = [
  {
    id: 'sample-1',
    title: 'Obbie Concepts Corporate Portal',
    category: 'Web Design',
    client: 'Internal Project',
    summary: 'High-speed Next.js 15 web application featuring dynamic services, document generation, and ambient UI.',
    description: 'Developed a blazingly fast corporate web application leveraging Next.js App Router, Tailwind CSS, and local PostgreSQL database integrations. Optimized for sub-second load times, dynamic invoice generation, and custom verification QR codes.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
    ],
    deliverables: ['Next.js 15 App Router', 'Tailwind CSS UI', 'PostgreSQL Database Integration', 'SEO Optimization'],
    liveUrl: 'https://obbieconcepts.com',
  },
  {
    id: 'sample-2',
    title: 'Eldoret Logistics Brand Kit',
    category: 'Graphic Design',
    client: 'Eldoret Logistics Ltd',
    summary: 'Corporate vector identity system, print-ready stationary, and heavy commercial vehicle livery mockups.',
    description: 'Designed an entire visual brand identity suite for a regional transport firm in Kenya. Deliverables included primary and secondary logo marks, scalable vector assets, brand style guides, employee badges, and high-resolution fleet branding.',
    coverImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
    ],
    deliverables: ['Primary & Secondary Logo Suite', 'Vector Guidelines', 'Stationery Design', 'Fleet Vehicle Livery'],
  },
  {
    id: 'sample-3',
    title: 'E-Commerce Growth Ads Campaign',
    category: 'Digital Marketing',
    client: 'Rift Apparel',
    summary: 'Full-funnel Meta ad campaign driving scaled revenues and low-cost customer acquisition.',
    description: 'Executed high-converting paid ad funnels across Facebook and Instagram with custom ad creative variations, Pixel Conversions API integration, retargeting logic, and weekly performance reporting.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80'
    ],
    deliverables: ['Meta Ads Funnel Setup', 'High-Converting Copywriting', 'Conversions API (CAPI)', 'ROAS Optimization'],
  },
  {
    id: 'sample-4',
    title: 'Large Format Event Signage & Banners',
    category: 'Printing & Branding',
    client: 'North Rift Tech Expo',
    summary: 'High-resolution vinyl banners, tear-drop flags, and corporate event media kits.',
    description: 'Produced large-format vinyl printing and event branding collateral. Ensured color calibration accuracy for physical media production, indoor/outdoor durability, and rapid turnaround times.',
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
    ],
    deliverables: ['Large Format Vinyl Printing', 'Teardrop & Roll-Up Banners', 'Event Directional Signage'],
  },
];

const CATEGORIES = ['All', 'Graphic Design', 'Web Design', 'Digital Marketing', 'Printing & Branding'];

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const WHATSAPP_NUMBER = "254735602433";

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  const filteredSamples = useMemo(() => {
    return PORTFOLIO_SAMPLES.filter((sample) => {
      const matchesCategory = selectedCategory === 'All' || sample.category === selectedCategory;
      const matchesSearch = 
        sample.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sample.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sample.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sample.client.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleInquireProject = (projectTitle: string) => {
    const message = encodeURIComponent(
      `Hello Obbie Concepts! I reviewed your project sample for *${projectTitle}* and would like to request a quote for a similar build.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-8 pb-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header Section */}
        <div className="mb-8" data-aos="fade-down">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-orange mb-4 transition-colors"
          >
            <IconArrowLeft size={16} /> Back to Services
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest block mb-1">
                OUR PROOF OF WORK
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                Project Samples & Portfolio
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Browse live website builds, graphic design showcases, ad campaign breakdowns, and print media executed for clients.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-10 shadow-lg" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            
            <div className="relative w-full lg:w-96 shrink-0">
              <IconSearch size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects by client, name, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-xs focus:outline-none focus:border-brand-orange transition-colors text-slate-900 dark:text-slate-100"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <IconX size={16} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full scrollbar-none py-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                      : 'bg-slate-100 dark:bg-[#0B0F17] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Portfolio Cards Grid */}
        {filteredSamples.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredSamples.map((sample, idx) => (
              <div
                key={sample.id}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
                className="group rounded-2xl bg-white dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setActiveProject(sample)}>
                    <Image
                      src={sample.coverImage}
                      alt={sample.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-bold text-brand-orange uppercase tracking-wider">
                      {sample.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Client: {sample.client}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading mb-2 group-hover:text-brand-orange transition-colors cursor-pointer" onClick={() => setActiveProject(sample)}>
                      {sample.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {sample.summary}
                    </p>
                  </div>
                </div>

                {/* Single Clean Action CTA */}
                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {sample.deliverables.length} Deliverables
                  </span>

                  <button
                    onClick={() => setActiveProject(sample)}
                    className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-brand-orange dark:hover:bg-brand-orange-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    <span>View Project</span>
                    <IconArrowUpRight size={15} />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-[#131B2A] rounded-2xl border border-slate-200 dark:border-slate-800 p-8 max-w-lg mx-auto">
            <IconFilter size={36} className="text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">No project samples found</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="bg-brand-orange text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-brand-orange-hover transition-colors"
            >
              Reset Search Filters
            </button>
          </div>
        )}

      </div>

      {/* Full Project Showcase Lightbox Modal */}
      {activeProject && (
        <div 
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col bg-white dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl text-slate-900 dark:text-slate-100 cursor-default overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 shrink-0">
              <div>
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider block">
                  {activeProject.category} • Client: {activeProject.client}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading">
                  {activeProject.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-brand-orange hover:text-white text-slate-600 dark:text-slate-300 rounded-full transition-colors cursor-pointer"
              >
                <IconX size={18} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <IconPhoto size={16} /> Image Samples & Visual Delivery
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProject.galleryImages.map((imgUrl, i) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                      <Image
                        src={imgUrl}
                        alt={`${activeProject.title} sample ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Scope & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <IconCheck size={16} className="text-brand-orange shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 sm:px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F17] flex items-center justify-between gap-4 shrink-0">
              {activeProject.liveUrl ? (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline"
                >
                  <IconWorld size={16} />
                  <span>Launch Live Site</span>
                </a>
              ) : <div />}

              <button
                onClick={() => handleInquireProject(activeProject.title)}
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <IconBrandWhatsapp size={16} />
                <span>Request Project Like This</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}