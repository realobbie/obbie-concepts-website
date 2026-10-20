// app/services/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  SERVICE_CATEGORIES, 
  SERVICES_DATA, 
  ServiceItem 
} from '../../lib/servicesData';
import { 
  IconPalette, 
  IconPrinter, 
  IconTrendingUp, 
  IconCode, 
  IconFileText, 
  IconSparkles, 
  IconCheck, 
  IconArrowRight, 
  IconBrandWhatsapp, 
  IconX, 
  IconLayersIntersect, 
  IconBulb,
  IconShare,
  IconPhoto,
  IconExternalLink
} from '@tabler/icons-react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [copied, setCopied] = useState(false);

  // Close modal helper
  const closeModal = useCallback(() => {
    setActiveModalService(null);
  }, []);

  // Handle ESC key listener & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (activeModalService) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalService, closeModal]);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [selectedCategory]);

  const whatsappNumber = "254735602433";

  // Share service logic with Web Share API and Clipboard fallback
  const handleShareService = async (service: ServiceItem) => {
    const shareUrl = `${window.location.origin}/services/${service.id}`;
    const shareData = {
      title: `${service.title} - Obbie Concepts`,
      text: service.summary,
      url: shareUrl,
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          copyToClipboard(shareUrl);
        }
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error('Failed to copy', err);
      }
      document.body.removeChild(textArea);
    }
  };

  // Filter Services
  const filteredServices = SERVICES_DATA.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  // Helper icon renderer
  const renderIcon = (name: string) => {
    switch (name) {
      case 'design': return <IconPalette size={22} />;
      case 'print': return <IconPrinter size={22} />;
      case 'marketing': return <IconTrendingUp size={22} />;
      case 'web': return <IconCode size={22} />;
      case 'content': return <IconFileText size={22} />;
      case 'branding': return <IconSparkles size={22} />;
      default: return <IconLayersIntersect size={22} />;
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-6 sm:pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div data-aos="fade-down" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
            <IconBulb size={16} /> End-To-End Agency Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading leading-tight mb-4 text-slate-900 dark:text-white">
            Services Built to Scale Your Brand
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            From the first idea to the final result, Obbie Concepts brings everything your business needs to grow under one roof. 
            From printing and brand identity to website development, custom software, digital marketing, and lead-generating campaigns, 
            we combine creativity, technology, and strategy to help your business stand out, reach the right audience, and turn opportunities 
            into growth.
          </p>
        </div>

        {/* Category Filter - Horizontal Scroll on Mobile */}
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center gap-2 overflow-x-auto w-full scrollbar-none mb-10 pb-4 border-b border-slate-200 dark:border-slate-800"
        >
          {SERVICE_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                  : 'bg-slate-100 dark:bg-[#131B2A] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="group rounded-2xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-200/80 dark:bg-slate-800 px-3 py-1 rounded-md">
                    {service.impactMetric}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white mb-1 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-orange mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-6">
                  {service.summary}
                </p>

                {/* Core Bullet Points Preview */}
                <ul className="space-y-2.5 mb-6">
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <IconCheck size={16} className="text-brand-orange shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Full Service Details Trigger */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 mt-auto flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange hover:underline cursor-pointer"
                >
                  Explore Capabilities <IconArrowRight size={16} />
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hello Obbie Concepts! I am interested in your ${service.title} services.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-500 transition-colors p-1"
                  title="Inquire via WhatsApp"
                >
                  <IconBrandWhatsapp size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Modal Popup */}
        {activeModalService && (
          <div 
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              data-aos="zoom-in"
              className="relative max-w-3xl w-full max-h-[90vh] flex flex-col bg-white dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl text-slate-900 dark:text-slate-100 cursor-default overflow-hidden"
            >
              {/* Sticky / Fixed Header */}
              <div className="flex items-center justify-between p-6 sm:px-8 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-white dark:bg-[#131B2A]">
                <div className="flex items-center gap-3.5 pr-10">
                  <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl">
                    {renderIcon(activeModalService.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                      {activeModalService.category}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                      {activeModalService.title}
                    </h2>
                  </div>
                </div>

                {/* ESC Key Badge & Close Button */}
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded-md">
                    ESC
                  </span>
                  <button
                    type="button"
                    onClick={closeModal}
                    aria-label="Close modal"
                    className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-brand-orange hover:text-white text-slate-600 dark:text-slate-300 rounded-full transition-colors cursor-pointer shadow-md"
                  >
                    <IconX size={20} />
                  </button>
                </div>
              </div>

              {/* Scrollable Body Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Cover Banner */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                  <Image
                    src={activeModalService.heroImage}
                    alt={activeModalService.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Full Description */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {activeModalService.description}
                </p>

                {/* Sub-Services Breakdown */}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Service Offerings & Sub-Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {activeModalService.subServices.map((sub, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800"
                      >
                        <h5 className="text-xs sm:text-sm font-bold text-brand-orange mb-1.5">
                          {sub.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables List */}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Key Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalService.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <IconCheck size={16} className="text-brand-orange shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CHECK OUT SAMPLE WORK BANNER */}
                <div className="p-4 sm:p-5 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-brand-orange text-white rounded-xl shrink-0 shadow-sm">
                      <IconPhoto size={22} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        Check Out Our Sample Work
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                        View real project samples, live links, and case studies for {activeModalService.title}.
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/samples`}
                    onClick={() => closeModal()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-all shrink-0 shadow-sm"
                  >
                    <span>View Samples</span>
                    <IconExternalLink size={16} />
                  </Link>
                </div>
              </div>

              {/* Sticky / Fixed Footer with Action Buttons */}
              <div className="p-4 sm:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F17] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                {/* Share Service Trigger */}
                <button
                  type="button"
                  onClick={() => handleShareService(activeModalService)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <IconShare size={18} />
                  <span>{copied ? 'Link Copied!' : 'Share Service'}</span>
                </button>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hello Obbie Concepts! I reviewed your ${activeModalService.title} capabilities and would like to request a quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-brand-orange-hover transition-colors shadow-lg cursor-pointer"
                >
                  <IconBrandWhatsapp size={18} /> Request Service Quote
                </a>
              </div>

            </div>
          </div>
        )}

        {/* Call to Action Banner */}
        <div 
          data-aos="fade-up"
          className="rounded-3xl bg-gradient-to-r from-slate-900 to-[#131B2A] text-white p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-brand-orange text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
              <IconSparkles size={16} /> Multi-Service Retainers
            </span>
            <h2 className="text-xl sm:text-3xl font-bold font-heading mb-2">
              Need an Integrated Design, Print & Digital Strategy?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Combine our graphic design, printing, and digital marketing capabilities under a unified monthly agency retainer.
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello Obbie Concepts! I am looking for a full agency retainer covering design, print, and digital marketing."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-brand-orange-hover active:scale-95 transition-all shadow-lg shrink-0 cursor-pointer"
          >
            <IconBrandWhatsapp size={18} /> Discuss Monthly Retainer
          </a>
        </div>

      </div>
    </main>
  );
}