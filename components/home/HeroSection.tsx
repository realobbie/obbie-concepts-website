// app/_components/HeroSection.tsx (or your hero component path)
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

export default function HeroSection() {
  return (
    <section className="relative bg-slate-950 min-h-[80vh] md:min-h-[720px] flex items-center overflow-hidden pt-16 pb-36">
      <Image
        src="/assets/landin-collage.webp"
        alt="Obbie Concepts Creative Agency Eldoret"
        fill
        className="object-cover opacity-35 filter brightness-90"
        priority
      />
      
      {/* Uniform Overlay */}
      <div className="absolute inset-0 bg-slate-950/75 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-8 pb-16">
          <div className="max-w-3xl" data-aos="fade-right">
            <span className="text-brand-orange font-extrabold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 block">
              CREATIVE DIGITAL AGENCY
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] font-heading tracking-tight">
              We&apos;re a creative agency in Eldoret - Kenya focusing on <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">graphic design, web design, &amp; digital marketing.</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-200 border-l-4 border-brand-orange pl-4 mb-8 leading-relaxed max-w-2xl font-medium">
              Let us design stunning graphics, fast websites and digitally market your business to attract paying customers.
            </p>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Services
              <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}