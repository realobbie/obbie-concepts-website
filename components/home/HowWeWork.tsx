'use client';

import { 
  IconMessageChatbot, 
  IconPencilShare, 
  IconPrinter, 
  IconRocket 
} from '@tabler/icons-react';

const STEPS = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    icon: IconMessageChatbot,
    description: 'We review your goals, target market, and technical specifications over WhatsApp or a brief discovery call.',
  },
  {
    step: '02',
    title: 'Strategy & Visual Concept',
    icon: IconPencilShare,
    description: 'Our team crafts vector logo concepts, UI wireframes, or digital strategy blueprints tailored for approval.',
  },
  {
    step: '03',
    title: 'Production & Development',
    icon: IconPrinter,
    description: 'We write clean, high-speed code or execute precision large-format print calibration with quality checks.',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    icon: IconRocket,
    description: 'Your project goes live or physical goods are delivered directly to your doorstep in Eldoret and across Kenya.',
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 bg-white dark:bg-[#0B0F17] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-orange font-extrabold tracking-widest uppercase text-xs mb-2 block">
            STREAMLINED WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            How We Execute Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            A clear, transparent four-stage pipeline designed for rapid turnaround times and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl">
                      <Icon size={22} />
                    </div>
                    <span className="text-2xl font-black font-heading text-slate-300 dark:text-slate-700">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}