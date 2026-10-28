// app/privacy-policy/page.tsx
import Link from 'next/link';
import { IconShieldLock, IconArrowLeft, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

export const metadata = {
  title: 'Privacy Policy | Obbie Concepts',
  description: 'Read the Obbie Concepts privacy policy to understand how we collect, use, and protect your personal and business data across our web apps and agency services.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 transition-colors">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-brand-orange transition-colors"
          >
            <IconArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        {/* Header Badge & Title */}
        <div className="mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <IconShieldLock size={16} /> Data Protection
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Effective Date: January 1, 2026 | Obbie Concepts, Eldoret, Kenya
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              Introduction
            </h2>
            <p>
              At <strong>Obbie Concepts</strong>, we respect your privacy and are committed to protecting the personal and business information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website (<code className="text-xs bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-brand-orange">obbieconcepts.com</code>), utilize our custom SaaS tools (such as our invoice generator), or engage our agency services for web development, graphic design, digital marketing, and large-format printing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              1. Information We Collect
            </h2>
            <p>We may collect and process the following information:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business details when you fill out contact forms or reach out via WhatsApp.</li>
              <li><strong>Project & Design Assets:</strong> Brand logos, content briefs, images, and technical specifications provided for printing or web development projects.</li>
              <li><strong>Tool & SaaS Data:</strong> Input data required for document generation (e.g., client names and billing figures entered into our secure invoice generator).</li>
              <li><strong>Technical Usage Data:</strong> IP addresses, browser types, device information, and site analytics collected via Vercel Analytics and cookies to improve site performance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              2. How We Use Your Information
            </h2>
            <p>We utilize the collected information for purposes including:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Delivering and executing web development, branding, marketing, and printing services.</li>
              <li>Generating and processing secure invoices, quotations, and digital documents.</li>
              <li>Responding to customer support inquiries and project consultations.</li>
              <li>Monitoring and analyzing traffic patterns to enhance user experience and site security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              3. Data Security & Protection
            </h2>
            <p>
              We implement industry-standard security protocols—including HTTPS encryption, secure database controls, and password-protected administrative routing—to protect your information. However, no digital transmission over the internet is completely foolproof, and we advise caution when sharing sensitive credentials online.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal or business data to third parties. We only share information with trusted infrastructure partners (such as Vercel for hosting and Supabase for secure cloud storage) required to keep our platforms operational, or when required by Kenyan law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              5. Your Rights
            </h2>
            <p>You reserve the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or deletion of your project files and personal records.</li>
              <li>Opt-out of marketing communications at any time.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              6. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please get in touch with the Obbie Concepts team:
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
      </div>
    </main>
  );
}