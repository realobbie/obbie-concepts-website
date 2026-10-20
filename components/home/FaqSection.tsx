'use client';

import { useState } from 'react';
import { IconChevronDown, IconHelpCircle } from '@tabler/icons-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Where is Obbie Concepts located, and do you deliver print orders across Kenya?',
    answer: 'We are based in Eldoret, Kenya. While our studio handles local clients directly, we regularly ship physical print collateral, banners, and branded stationery across all major towns nationwide.',
  },
  {
    question: 'How fast can a custom website or web portal be launched?',
    answer: 'Standard landing pages and corporate websites are typically delivered within 5 to 10 working days. Custom web applications or complex portals with databases take between 2 to 4 weeks depending on scope.',
  },
  {
    question: 'Can we bundle graphic design, website development, and printing into one contract?',
    answer: 'Yes! We offer bundled retainers and integrated packages that combine logo design, web development, print collateral, and digital marketing under one unified quote.',
  },
  {
    question: 'What file formats do you provide for graphic design and branding projects?',
    answer: 'For branding projects, we deliver print-ready PDFs, high-resolution PNGs/JPEGs, and original fully editable vector source files (AI, SVG, EPS).',
  },
  {
    question: 'How do project quotes and payments work?',
    answer: 'We operate on a transparent deposit structure (typically 50% upfront to initiate work, and 50% upon final verification and launch). We accept M-Pesa, bank transfers, and direct invoices.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0E1420] border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <IconHelpCircle size={14} /> Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Everything you need to know about starting a project with Obbie Concepts.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-heading">
                    {faq.question}
                  </h3>
                  <IconChevronDown
                    size={20}
                    className={`text-brand-orange shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}