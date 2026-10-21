'use client';

import { IconStar, IconQuote } from '@tabler/icons-react';

const testimonials = [
  {
    quote: "Obbie Concepts completely transformed our brand identity and printed collateral for our regional tech expo. Deliverables were crisp, precise, and delivered on tight deadlines.",
    author: "Rono .H.",
    role: "Team Leader",
    company: "Horizon Rivers of Hope",
    rating: 5,
  },
  {
    quote: "Our new Next.js corporate portal is noticeably faster and easier for clients to navigate. Their team understood our exact workflow and executed seamlessly.",
    author: "Grace M.",
    role: "Managing Director",
    company: "Eldoret Logistics Ltd",
    rating: 5,
  },
  {
    quote: "The Meta ad campaigns scaled our local sales within weeks. Transparent weekly reporting and creative ad design made a huge difference to our revenue.",
    author: "David O.",
    role: "Founder",
    company: "Rift Apparel",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-[#0B0F17] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-down">
          <span className="text-brand-orange font-extrabold tracking-widest uppercase text-xs mb-2 block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Trusted by businesses in Eldoret and across Kenya for design, printing, and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <IconStar key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <IconQuote size={28} className="text-brand-orange/30 mb-2" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  {item.author}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {item.role} • <span className="text-brand-orange font-semibold">{item.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}