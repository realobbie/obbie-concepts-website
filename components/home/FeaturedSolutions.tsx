'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { 
  IconEye, 
  IconX, 
  IconCheck, 
  IconBrandWhatsapp, 
  IconShare 
} from '@tabler/icons-react';

export interface FeaturedSolution {
  id: string;
  name: string;
  img: string;
  description: string;
  highlights: string[];
}

const featuredSolutions: FeaturedSolution[] = [
  {
    id: 'invoicing-saas',
    name: 'Custom Invoicing SaaS',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    description: 'Automate your billing, recurring client invoices, and payment tracking with a custom-built, white-label invoicing platform tailored to your workflow.',
    highlights: [
      'Automated recurring client billing & reminders',
      'Multi-currency & localized tax calculations',
      'PDF invoice generation & client portals',
      'Integration with Stripe, M-Pesa, or PayPal'
    ]
  },
  {
    id: 'seo-audits',
    name: 'Performance SEO Audits',
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=80',
    description: 'In-depth technical and content SEO analysis to identify ranking bottlenecks, improve speed metrics, and boost organic search traffic.',
    highlights: [
      'Core Web Vitals & technical health audit',
      'Keyword gap & competitor benchmarking',
      'Actionable on-page optimization roadmap',
      'Backlink profile & authority analysis'
    ]
  },
  {
    id: 'meta-ads',
    name: 'Full-Funnel Meta Ads',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80',
    description: 'High-converting ad campaigns across Facebook and Instagram designed to acquire low-cost leads and scale e-commerce revenue rapidly.',
    highlights: [
      'Ad creative production & copywriting',
      'Custom audience retargeting funnels',
      'Pixel & Conversions API (CAPI) setup',
      'Weekly transparent performance reporting'
    ]
  },
  {
    id: 'brand-guidelines',
    name: 'Corporate Brand Guidelines',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
    description: 'Establish a memorable corporate identity with comprehensive style guides, typography rules, logo usage, and digital media kits.',
    highlights: [
      'Primary & secondary logo variations',
      'Color palette & typography scale specifications',
      'Social media & marketing templates',
      'Print-ready stationery & presentation decks'
    ]
  },
  {
    id: 'web-portals',
    name: 'High-Speed Web Portals',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    description: 'Lightning-fast, dynamic corporate web portals built on Next.js to provide your clients with seamless self-service experiences.',
    highlights: [
      'Sub-second page load speeds & SEO optimization',
      'Secure user authentication & dashboard areas',
      'Headless CMS for effortless content updates',
      'Responsive design across mobile and desktop'
    ]
  },
  {
    id: 'social-media',
    name: 'Social Media Management',
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=80',
    description: 'End-to-end content production, scheduling, and community engagement to keep your brand top-of-mind across all major social networks.',
    highlights: [
      'Custom graphic design & video shorts',
      'Content calendar preparation & posting schedule',
      'Active comment & DM engagement handling',
      'Monthly audience growth analytics'
    ]
  },
];

export default function FeaturedSolutions() {
  const [selectedSolution, setSelectedSolution] = useState<FeaturedSolution | null>(null);
  const [copied, setCopied] = useState(false);

  const WHATSAPP_NUMBER = "254735602433";

  const closeModal = useCallback(() => {
    setSelectedSolution(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (selectedSolution) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedSolution, closeModal]);

  const handleRequestQuote = (solutionName: string) => {
    const message = encodeURIComponent(
      `Hello Obbie Concepts! I am interested in requesting a quote for: *${solutionName}*`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleShare = async (solution: FeaturedSolution) => {
    const currentUrl = window.location.href;
    const shareData = {
      title: `${solution.name} - Obbie Concepts`,
      text: solution.description,
      url: currentUrl,
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err: any) {
        if (err.name !== 'AbortError') copyToClipboard(currentUrl);
      }
    } else {
      copyToClipboard(currentUrl);
    }
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <section className="bg-slate-50 dark:bg-[#0E1420] py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white uppercase tracking-tight font-heading">
          Featured <span className="text-brand-orange">Solutions</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          Elite digital services delivered with fast turnaround times. Tap any solution to view full details.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredSolutions.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => setSelectedSolution(item)}
            className="group cursor-pointer bg-white dark:bg-[#161F2E] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-md hover:border-brand-orange dark:hover:border-brand-orange transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-brand-orange text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <IconEye size={16} /> View Solution
                  </span>
                </div>
              </div>
              <div className="p-5 text-center">
                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition text-base font-heading">
                  {item.name}
                </h4>
              </div>
            </div>

            <div className="pb-5 px-5 pt-0">
              <button
                type="button"
                className="w-full bg-slate-100 dark:bg-slate-800/80 group-hover:bg-brand-orange text-slate-700 dark:text-slate-200 group-hover:text-white font-semibold text-xs py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <IconEye size={15} />
                <span>View Details</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedSolution && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white dark:bg-[#161F2E] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden z-10 my-auto cursor-default"
          >
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <span className="hidden sm:inline-block text-[10px] font-bold text-slate-300 uppercase tracking-widest bg-slate-900/80 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-md">
                ESC
              </span>
              <button
                onClick={closeModal}
                className="w-9 h-9 bg-slate-900/80 hover:bg-brand-orange text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors shadow-md cursor-pointer"
              >
                <IconX size={18} />
              </button>
            </div>

            <div className="relative h-56 sm:h-64 w-full bg-slate-950">
              <Image
                src={selectedSolution.img}
                alt={selectedSolution.name}
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#161F2E] via-slate-950/20 to-black/40 flex items-end p-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                  {selectedSolution.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedSolution.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
                  Key Features &amp; Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSolution.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <IconCheck size={16} className="text-brand-orange shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleRequestQuote(selectedSolution.name)}
                  className="w-full sm:flex-1 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-brand-orange/20 cursor-pointer"
                >
                  <IconBrandWhatsapp size={20} />
                  <span>Request Quote on WhatsApp</span>
                </button>

                <button
                  onClick={() => handleShare(selectedSolution)}
                  className="w-full sm:w-auto border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shrink-0 cursor-pointer"
                >
                  {copied ? <IconCheck size={18} className="text-emerald-500" /> : <IconShare size={18} />}
                  <span>{copied ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}