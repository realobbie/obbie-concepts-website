// app/not-found.tsx
'use client';

import Link from 'next/link';
import { IconHome, IconArrowLeft, IconSearch, IconBrandWhatsapp } from '@tabler/icons-react';

export default function NotFound() {
  const whatsappNumber = "254735602433";

  return (
    <main className="min-h-[70vh] bg-white dark:bg-[#0B0F17] flex items-center justify-center px-4 py-16 transition-colors">
      <div className="max-w-xl w-full text-center">
        
        {/* Large Badge Accent */}
        <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
          <IconSearch size={16} /> Page Not Found
        </div>

        {/* 404 Graphic Heading */}
        <h1 className="text-7xl sm:text-9xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-4">
          4<span className="text-brand-orange">0</span>4
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
          Looks like you&apos;ve wandered off the grid.
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          The page or product you are looking for doesn&apos;t exist, has been moved, or the link might be broken.
        </p>

        {/* Quick Recovery Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-2xl text-xs font-bold hover:bg-brand-orange-hover active:scale-95 transition-all shadow-lg shadow-brand-orange/20"
          >
            <IconHome size={18} /> Back to Homepage
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-2xl text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
          >
            <IconArrowLeft size={18} /> Browse Products
          </Link>
        </div>

        {/* Need Help WhatsApp Callout */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            Looking for a specific service or print quote?
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello Obbie Concepts! I hit a missing page on your website and need help finding a service."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:underline"
          >
            <IconBrandWhatsapp size={16} /> Contact Support on WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}