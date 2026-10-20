// components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  IconBrandTwitter, 
  IconBrandTiktok, 
  IconBrandInstagram,
  IconBrandWhatsapp, 
  IconMail, 
  IconPhone, 
  IconMapPin 
} from '@tabler/icons-react';

export default function Footer() {
  const whatsappNumber = "254735602433";

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image 
              src="/obbieLogo.png" 
              alt="Obbie Concepts Logo" 
              width={36} 
              height={36} 
              className="w-9 h-9 object-contain bg-white rounded-full p-1"
            />
            <span className="font-heading font-extrabold text-xl text-white tracking-tight">
              OBBIE <span className="text-brand-orange">CONCEPTS</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Your integrated creative and tech partner. We build brands, handle large format printing, execute digital marketing campaigns, and develop custom software solutions.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <IconBrandWhatsapp size={18} />
            </a>
            <a 
              href="https://instagram.com/obbieconcepts" 
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-orange flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <IconBrandInstagram size={18} />
            </a>
            <a 
              href="https://x.com/obbieconcepts" 
              aria-label="Twitter"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-orange flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <IconBrandTwitter size={18} />
            </a>
            <a 
              href="https://tiktok.com/@obbieconcepts" 
              aria-label="TikTok"
              className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-orange flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <IconBrandTiktok size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-white text-base mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-brand-orange transition-colors">Services &amp; Capabilities</Link></li>
            <li><Link href="/products" className="hover:text-brand-orange transition-colors">Products &amp; Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-brand-orange transition-colors">Latest Insights</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-heading font-bold text-white text-base mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/resources" className="hover:text-brand-orange transition-colors">Agency Brochure</Link></li>
            <li><Link href="/resources" className="hover:text-brand-orange transition-colors">Services &amp; Rate Cards</Link></li>
            <li><Link href="/resources" className="hover:text-brand-orange transition-colors">Large Format Print Samples</Link></li>
            <li><Link href="/resources" className="hover:text-brand-orange transition-colors">Case Studies &amp; ROI</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-heading font-bold text-white text-base mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2.5">
              <IconMail size={16} className="text-brand-orange shrink-0" />
              <a href="mailto:hello@obbieconcepts.com" className="hover:text-slate-200 transition-colors">
                hello@obbieconcepts.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone size={16} className="text-brand-orange shrink-0" />
              <a href="tel:+254735602433" className="hover:text-slate-200 transition-colors">
                +254 735 602 433
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
              <span>Zion Mall Building, off Malaba Rd, Eldoret, Kenya</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Obbie Concepts. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}