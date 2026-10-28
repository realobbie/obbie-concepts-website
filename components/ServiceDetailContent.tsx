// components/ServiceDetailContent.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  IconArrowLeft, 
  IconCheck, 
  IconBrandWhatsapp, 
  IconPhoto,
  IconExternalLink
} from '@tabler/icons-react';
import { ServiceItem } from '@/lib/servicesData';

interface Props {
  service: ServiceItem;
}

export default function ServiceDetailContent({ service }: Props) {
  const whatsappNumber = "254735602433";

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-10 pb-20 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-orange mb-6 transition-colors"
        >
          <IconArrowLeft size={16} /> Back to All Services
        </Link>

        {/* Category & Title */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase text-brand-orange tracking-wider block mb-2">
            {service.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading mb-3 text-slate-900 dark:text-white">
            {service.title}
          </h1>
          <p className="text-sm sm:text-base text-brand-orange font-semibold">
            {service.tagline}
          </p>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-slate-200 dark:border-slate-800 shadow-xl">
          <Image 
            src={service.heroImage} 
            alt={service.title} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        {/* Main Description */}
        <div className="prose dark:prose-invert max-w-none mb-10">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Sub-Services / Modules Grid */}
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Service Capabilities & Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.subServices.map((sub, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-xs font-bold text-brand-orange mb-1">{sub.title}</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{sub.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Deliverables */}
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Key Deliverables Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 dark:bg-[#131B2A] p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <IconCheck size={16} className="text-brand-orange shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SAMPLE WORK SHOWCASE SECTION */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-slate-100 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-brand-orange text-white rounded-xl shrink-0">
              <IconPhoto size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                Sample Work & Client Highlights
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Real projects delivered under {service.title}.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 group">
              <Image 
                src={service.heroImage} 
                alt="Sample project 1" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-bold text-white">Recent Project Delivery</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-brand-orange uppercase tracking-wider block mb-1">
                  Featured Case Study
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Client Transformation
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  High-impact delivery driving measurable business results for local and international brands.
                </p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello! I saw the sample work for ${service.title} and would like to see more portfolio examples.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline"
              >
                <span>Request Portfolio PDF</span>
                <IconExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Direct WhatsApp Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#131B2A] text-white">
          <div>
            <h3 className="text-base font-bold font-heading mb-1">Ready to start your project?</h3>
            <p className="text-xs text-slate-300">Get an instant estimate and project roadmap over WhatsApp.</p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Obbie Concepts! I am interested in ordering ${service.title}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold text-xs shadow-lg hover:bg-brand-orange-hover transition-all shrink-0"
          >
            <IconBrandWhatsapp size={18} /> Request Dedicated Quote
          </a>
        </div>

      </div>
    </main>
  );
}