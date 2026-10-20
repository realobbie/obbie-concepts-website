'use client';

import Link from 'next/link';
import { 
  IconRocket, 
  IconChartBar, 
  IconCode, 
  IconBrandAppstore, 
  IconCheck, 
  IconArrowRight 
} from '@tabler/icons-react';

const coreServices = [
  {
    icon: IconChartBar,
    title: 'Printing',
    items: ['Digital Printing', 'Large Format Printing', 'Bulk Printing', 'Brochure & Fliers', 'Calendars', 'Notebooks', 'Seasonal Cards'],
  },
  
  {
    icon: IconBrandAppstore,
    title: 'Branding',
    items: ['Custom Tshirts', 'Reflector Jackets', 'Mugs, Cups, Stanley Cups', 'Hoodies', 'Signages', '3D & 2D Signs'],
  },

  {
    icon: IconCode,
    title: 'Web & App Design',
    items: ['Web Design', 'Redesigning Websites', 'E-Commerce Solutions', 'Speed & Performance', 'Technical Consultancy', 'Speed Tests'],
  },
  
  {
    icon: IconRocket,
    title: 'Digital Marketing',
    items: ['Social Media Management', 'Search Engine Optimization (SEO)', 'Analytics & Performance Reporting', 'Content Marketing'],
  },
];

export default function CoreServices() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-12 sm:-mt-16 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white dark:bg-[#111827] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 bg-orange-500/10 border border-brand-orange/20 rounded-xl mb-4 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2.5 tracking-tight font-heading">
                  {service.title}
                </h3>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2 text-xs leading-relaxed mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <IconCheck size={14} className="text-brand-orange shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange group-hover:underline"
                >
                  <span>Explore Category</span>
                  <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}