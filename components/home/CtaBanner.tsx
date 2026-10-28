// app/_components/CtaBanner.tsx
'use client';

import Link from 'next/link';
import { IconBrandWhatsapp } from '@tabler/icons-react';

export default function CtaBanner() {
  const WHATSAPP_NUMBER = "254735602433";

  const handleInquiry = () => {
    const message = encodeURIComponent(
      `Hello Obbie Concepts! I would like to schedule a general consultation for my business.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Client Logos Row */}
      <section className="py-14 border-t border-slate-200 dark:border-slate-800/60 bg-slate-50 dark:bg-[#0E1420]">
        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
          <p className="text-center text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-8">
            Trusted By Growing Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-xl font-black text-slate-700 dark:text-slate-300">BELES ARTISTRY</span>
            <span className="text-xl font-black text-slate-700 dark:text-slate-300">ROSE & ROSES</span>
            <span className="text-xl font-black text-slate-700 dark:text-slate-300">HORIZON RIVERS OF HOPE</span>
            <span className="text-xl font-black text-slate-700 dark:text-slate-300">LILO GLAM</span>
          </div>
        </div>
      </section>

      {/* Main Call To Action - Curved top on mobile to match the footer */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800 max-md:rounded-t-3xl" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight font-heading">
            Ready to Take Your Digital Business to the Next Level?
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Whether you need custom performance marketing or powerful web applications, we build solutions that scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-orange/20"
            >
              Start A Project
            </Link>
            <button
              onClick={handleInquiry}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-3.5 rounded-xl border border-slate-700 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <IconBrandWhatsapp size={18} />
              Chat On WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}