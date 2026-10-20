// app/about/page.tsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  IconTarget, 
  IconEye, 
  IconHeartHandshake, 
  IconTrophy, 
  IconSparkles, 
  IconBrandWhatsapp, 
  IconRocket, 
  IconQuote, 
  IconStar, 
  IconShieldCheck, 
  IconDeviceLaptop, 
  IconPrinter, 
  IconChartBar 
} from '@tabler/icons-react';

export default function AboutPage() {
  const whatsappNumber = "254735602433";

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // 6 Team Members Data
  const teamMembers = [
    {
      name: "Kemboi",
      role: "Creative Director",
      bio: "Spearheading creative strategy and brand transformations with 8+ years of expertise in design and digital growth.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Kiplimo",
      role: "Lead Full-Stack Engineer",
      bio: "Architecting lightning-fast web applications, enterprise software, and scalable e-commerce infrastructure.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Koech",
      role: "Print Production Lead",
      bio: "Mastering large-format print technology, color accuracy, and premium physical signage deliverables.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Shifoko",
      role: "Head of Digital Marketing",
      bio: "Crafting data-driven PPC campaigns, lead generation funnels, and organic growth strategies.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Jerop",
      role: "Marketing",
      bio: "Translating complex customer identities into striking visual systems and intuitive digital product interfaces.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Mooh",
      role: "Social Media & Operations",
      bio: "Ensuring seamless project execution, transparent timelines, and maximum return on investment for our clients.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Obbie Concepts completely revamped our brand identity and launched our web portal within 3 weeks. Our lead conversion jumped by 140% in the first month alone.",
      name: "Michael Kiprop",
      company: "Apex Logistics Kenya",
      rating: 5
    },
    {
      quote: "Finding a team that excels at both physical large-format printing and high-end software development under one roof is rare. Their print quality for our event was unmatched.",
      name: "Jane Muthoni",
      company: "Innovate East Africa",
      rating: 5
    },
    {
      quote: "Their digital marketing team turned our ad campaigns around. Every shilling spent was backed by clear analytics and direct WhatsApp sales leads.",
      name: "Brian Njuguna",
      company: "Nairobi Retail Outlets",
      rating: 5
    }
  ];

  // Awards & Recognition Data
  const awards = [
    { year: "2025", title: "Best Integrated Branding & Tech Agency", issuer: "East Africa Digital Excellence Awards" },
    { year: "2024", title: "Top Rated Print Production Provider", issuer: "Nairobi Business Tech Forum" },
    { year: "2023", title: "Excellence in Web & Software UX", issuer: "Creative Tech Guild" }
  ];

  // What Makes Us Stand Out Features
  const differentiators = [
    {
      icon: <IconRocket size={24} className="text-brand-orange" />,
      title: "Built for Revenue, Not Just Aesthetics",
      description: "We don't design graphics or build software just to look good. Every pixel and line of code is engineered to drive customer retention and business growth."
    },
    {
      icon: <IconPrinter size={24} className="text-brand-orange" />,
      title: "Unified Physical & Digital Capabilities",
      description: "Eliminate agency fragmentation. We seamlessly bridge physical print & merchandise with web platforms, mobile apps, and paid advertising."
    },
    {
      icon: <IconShieldCheck size={24} className="text-brand-orange" />,
      title: "Agile Turnaround & Zero Delays",
      description: "We treat your deadlines like our own. Our internal production workflows guarantee rapid iteration without compromising output quality."
    },
    {
      icon: <IconChartBar size={24} className="text-brand-orange" />,
      title: "Transparent & Trackable Results",
      description: "From print proofs to Google Analytics reports and ROI tracking, you always have complete visibility into what we build for you."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-6 sm:pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* 1. HERO SECTION & OUR STORY */}
        <div data-aos="fade-down" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
            <IconSparkles size={14} /> Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading leading-tight mb-6 text-slate-900 dark:text-white">
            We Build, Brand & Develop Things That Help Your Business Win
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            At Obbie Concepts, we believe growth happens at the intersection of creative storytelling, precision printing, and scalable software. We exist to help ambitious companies project authority, attract more clients, and streamline their revenue operations.
          </p>
        </div>

        {/* 2. THE STORY / FOUNDING PHILOSOPHY */}
        <div 
          data-aos="fade-up"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 p-6 sm:p-10 mb-20 shadow-sm"
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase text-brand-orange tracking-wider">
              Our Journey & Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
              Why We Built Obbie Concepts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              In a crowded market, businesses often struggle with fragmented vendor relationships — hiring one agency for graphic design, another for printing, and a separate developer for web apps. The result? Inconsistent branding, lost revenue, and communication friction.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We built <strong>Obbie Concepts</strong> to solve this exact problem. By combining end-to-end design, heavy-duty printing, digital marketing, and custom software development under one roof, we empower businesses to present a cohesive, authoritative brand across every channel.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Obbie Concepts Team Collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. MISSION, VISION & VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div data-aos="fade-up" data-aos-delay="0" className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800">
            <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-2xl w-fit mb-4">
              <IconTarget size={24} />
            </div>
            <h3 className="text-lg font-bold font-heading mb-2 text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              To deliver transformative branding, high-grade printing, and intuitive digital tools that give businesses a undeniable competitive advantage and predictable growth.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800">
            <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-2xl w-fit mb-4">
              <IconEye size={24} />
            </div>
            <h3 className="text-lg font-bold font-heading mb-2 text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              To be East Africa’s premier integrated creative and technology agency, recognized for building brands that scale seamless from physical print to software ecosystems.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800">
            <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-2xl w-fit mb-4">
              <IconHeartHandshake size={24} />
            </div>
            <h3 className="text-lg font-bold font-heading mb-2 text-slate-900 dark:text-white">Our Core Values</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Uncompromising Quality, Transparency, Data-Backed Strategy, Continuous Innovation, and Client ROI as our primary metric for success.
            </p>
          </div>
        </div>

        {/* 4. WHAT MAKES US STAND OUT */}
        <div data-aos="fade-up" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase text-brand-orange tracking-wider block mb-2">
              The Obbie Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading">
              What Makes Us Stand Out
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((diff, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-brand-orange/40 transition-colors"
              >
                <div className="p-3 bg-brand-orange/10 rounded-xl shrink-0">
                  {diff.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. OUR TEAM SECTION (6 CARDS) */}
        <div data-aos="fade-up" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase text-brand-orange tracking-wider block mb-2">
              Meet The Experts
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading mb-3">
              The Minds Behind Your Growth
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              A passionate team of designers, engineers, print specialists, and strategists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className="group rounded-3xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-brand-orange/40 transition-all duration-300 shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-brand-orange block mb-2">
                    {member.role}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. WHAT CUSTOMERS SAY ABOUT US */}
        <div data-aos="fade-up" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase text-brand-orange tracking-wider block mb-2">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading">
              What Customers Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, index) => (
              <div 
                key={index}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <IconStar key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <IconQuote size={28} className="text-brand-orange/30 mb-2" />
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {test.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {test.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. AWARDS & RECOGNITION */}
        <div data-aos="fade-up" className="mb-20 p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase text-brand-orange tracking-wider block mb-1">
                Industry Recognition
              </span>
              <h2 className="text-xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                Awards & Accolades
              </h2>
            </div>
            <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-2xl">
              <IconTrophy size={32} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {awards.map((award, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <span className="px-2.5 py-1 rounded-lg bg-brand-orange text-white text-xs font-bold shrink-0">
                  {award.year}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                    {award.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {award.issuer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. CALL TO ACTION BANNER */}
        <div 
          data-aos="fade-up"
          className="rounded-3xl bg-gradient-to-r from-slate-900 to-[#131B2A] text-white p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
              <IconSparkles size={14} /> Ready To Elevate Your Brand?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-2">
              Let's Build Something Impactful Together
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Get in touch with our team today for a free project consultation or custom quote.
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello Obbie Concepts! I visited your About page and would like to discuss a project."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3.5 rounded-xl font-bold text-xs hover:bg-brand-orange-hover active:scale-95 transition-all shadow-lg shrink-0"
          >
            <IconBrandWhatsapp size={18} /> Start a Conversation
          </a>
        </div>

      </div>
    </main>
  );
}