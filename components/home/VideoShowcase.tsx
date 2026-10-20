'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IconPlayerPlay, IconX, IconSparkles } from '@tabler/icons-react';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
            <IconSparkles size={14} /> Agency Reel & Production Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            See Our Creative Process In Action
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Watch how our printing machinery, UI designers, and content teams bring corporate projects to life.
          </p>
        </div>

        <div 
          className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group cursor-pointer" 
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src="/assets/landin-collage.webp"
            alt="Obbie Concepts Agency Reel Thumbnail"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
          />
          
          <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
            <button
              aria-label="Play Reel"
              className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer"
            >
              <IconPlayerPlay size={32} className="ml-1 fill-white" />
            </button>
          </div>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-bold text-white">
            30-Second Production Overview
          </div>
        </div>

      </div>

      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 text-white bg-slate-800 hover:bg-brand-orange p-2 rounded-full transition-colors cursor-pointer"
          >
            <IconX size={24} />
          </button>
          
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Obbie Concepts Agency Reel"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}