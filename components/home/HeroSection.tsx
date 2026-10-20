'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

export default function HeroSection() {
  return (
    <section className="relative bg-slate-950 min-h-[75vh] md:min-h-[680px] flex items-center overflow-hidden pt-12 pb-32">
      <Image
        src="/assets/landin-collage.webp"
        alt="Obbie Concepts Creative Agency Eldoret"
        fill
        className="object-cover opacity-30 filter brightness-90"
        priority
      />
      
      {/* Uniform Overlay */}
      <div className="absolute inset-0 bg-slate-950/70 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-8 pb-16">
          <div className="max-w-2xl" data-aos="fade-right">
            <span className="text-brand-orange font-extrabold tracking-[0.2em] uppercase text-xs mb-3 block">
              CREATIVE DIGITAL AGENCY
            </span>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight font-heading tracking-tight">
              We&apos;re a creative agency in Eldoret - Kenya focusing on <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">graphic design, web design, &amp; digital marketing.</span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base text-slate-300 border-l-3 border-brand-orange pl-4 mb-6 leading-relaxed max-w-xl">
              Let us design stunning graphics, fast websites and digitally market your business to attract paying customers.
            </p>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-brand-orange/20 hover:-translate-y-0.5"
            >
              Explore Services
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}