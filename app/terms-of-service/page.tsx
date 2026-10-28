// app/terms-of-service/page.tsx
import Link from 'next/link';
import { 
  IconFileText, 
  IconArrowLeft, 
  IconMail, 
  IconPhone, 
  IconMapPin,
  IconCode,
  IconPalette,
  IconSpeakerphone,
  IconPrinter,
  IconBriefcase,
  IconArrowRight
} from '@tabler/icons-react';

export const metadata = {
  title: 'Terms of Service | Obbie Concepts',
  description: 'Read the terms and conditions governing the use of Obbie Concepts websites, digital tools, custom web applications, and printing/branding services.',
};

const coreServices = [
  {
    name: 'Web Design & Development',
    desc: 'High-speed Next.js portals and custom SaaS web apps',
    href: '/services/web-design-development',
    icon: IconCode,
  },
  {
    name: 'Graphic Design',
    desc: 'Stunning visual assets, flyers, and corporate branding',
    href: '/services/graphic-design',
    icon: IconPalette,
  },
  {
    name: 'Digital Marketing & Meta Ads',
    desc: 'Targeted campaigns and high-converting ad funnels',
    href: '/services/digital-marketing',
    icon: IconSpeakerphone,
  },
  {
    name: 'Large Format Printing',
    desc: 'Precision physical printing, banners, and merch',
    href: '/services/printing-services',
    icon: IconPrinter,
  },
  {
    name: 'Corporate Brand Identity',
    desc: 'Complete brand kits and professional styling',
    href: '/services/branding-identity',
    icon: IconBriefcase,
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-brand-orange transition-colors"
          >
            <IconArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <IconFileText size={16} /> Legal Guidelines
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Effective Date: January 1, 2026 | Obbie Concepts, Eldoret, Kenya
          </p>
        </div>

        {/* Main Grid Layout with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Legal Content (2 Columns) */}
          <div className="lg:col-span-2 space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>Obbie Concepts</strong>. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website (<code className="text-xs bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-brand-orange">obbieconcepts.com</code>), custom SaaS tools, web applications, and physical printing or design services (&quot;Services&quot;).
              </p>
              <p>
                By accessing or using any part of our Services, you agree to be bound by these Terms. If you do not agree, you may not access or use our platforms or agency offerings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                2. Use of Services & SaaS Tools
              </h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to access our web tools (such as our invoice generator) and engage our agency for business purposes. You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                <li>Use our tools or platforms for any illegal or unauthorized activities.</li>
                <li>Attempt to reverse-engineer, hack, or disrupt our secure server infrastructure and authentication gateways.</li>
                <li>Transmit malicious code, viruses, or spam through our contact forms or tool portals.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                3. Agency Projects, Payments & Revisions
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                <li><strong>Project Deposits:</strong> Custom web development, branding, and printing projects require an initial agreed-upon deposit before work commences.</li>
                <li><strong>Billing & Refunds:</strong> Fees for completed print runs, digital assets, and deployed software solutions are non-refundable unless specified in a distinct contract.</li>
                <li><strong>Client Approvals:</strong> Clients are responsible for reviewing proof drafts (for printing and graphics) before final production or deployment.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                4. Intellectual Property
              </h2>
              <p>
                All source code, custom UI designs, graphics, branding layouts, and platform content created by Obbie Concepts remain our intellectual property until full project settlement is complete, whereupon designated rights are transferred to the client.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                5. Limitation of Liability
              </h2>
              <p>
                Obbie Concepts shall not be held liable for any indirect, incidental, or consequential damages resulting from service interruptions, delayed print deliveries, or third-party hosting downtime (such as Vercel or database providers).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                6. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms shall be subject to the jurisdiction of courts located in Eldoret, Kenya.
              </p>
            </section>

            {/* Contact Box */}
            <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                7. Contact Information
              </h2>
              <p>
                For inquiries regarding these Terms of Service, reach out to us directly:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl">
                    <IconMail size={20} />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Email Us</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">hello@obbieconcepts.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl">
                    <IconPhone size={20} />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Call / WhatsApp</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">+254 735 602 433</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl">
                    <IconMapPin size={20} />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Eldoret, Kenya</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar: Great Services (1 Column) */}
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sticky top-24 shadow-sm">
              <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white uppercase tracking-wider mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                Great Services
              </h3>

              <div className="space-y-3">
                {coreServices.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group flex items-start gap-3 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-orange/50 transition-all shadow-xs"
                  >
                    <span className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl group-hover:scale-105 transition-transform shrink-0">
                      <service.icon size={18} />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                  href="/services"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-sm shadow-brand-orange/20"
                >
                  View All Services <IconArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}