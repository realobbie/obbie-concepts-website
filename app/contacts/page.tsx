// app/contact/page.tsx
'use client';

import { useState, useEffect, FormEvent } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconBrandWhatsapp, 
  IconSend, 
  IconCheck, 
  IconStarFilled, 
  IconMessageDots, 
  IconClock,
  IconShieldCheck,
  //IconZap,
  IconHeartHandshake,
  IconZeppelin
} from '@tabler/icons-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Douglas M..',
    role: 'Managing Director',
    company: 'Gulf Audio',
    comment: 'Having worked with Obbie Concepts for over 5 years, we can comfortably say they are the best in the services they offer. We loved the website and the marketing materials definitely 5 Stars',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Isaac . K.',
    role: 'Head of Marketing',
    company: 'Olemiss Consortium',
    comment: 'You guys are a treasure to have as a business partner. We value all the work you have done for us. We will always refer your services. Best experience.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Belinda M.',
    role: 'Founder',
    company: 'Robevin Safaris',
    comment: 'Warm recommendations for Obbie Concepts.I contacted Kemboi to do some design work for me and he delivered within the shortest time possible. Within the same day actually. Communication was quick and efficient, am so impressed with the work and I look forward to using his services again.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const whatsappNumber = "254735602433";
  const whatsappMsg = encodeURIComponent(
    "Hello Obbie Concepts! I would like to make an inquiry about your services."
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append(
      'access_key',
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "1bde8b1a-a75c-4298-968b-aee623232da6"
    );

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try sending via WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 pt-6 sm:pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header with Google Rating Badge */}
        <div data-aos="fade-down" className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 dark:text-slate-200 mb-4 shadow-xs">
            <div className="flex items-center gap-1 text-amber-400">
              <IconStarFilled size={14} />
              <IconStarFilled size={14} />
              <IconStarFilled size={14} />
              <IconStarFilled size={14} />
              <IconStarFilled size={14} />
            </div>
            <span>4.9 Rating Verified Client Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading leading-tight mb-4 text-slate-900 dark:text-white">
            Let’s Build Something Great Together
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a project in mind, need a technical consultation, or want to explore working with Obbie Concepts? Send us a message below or connect directly.
          </p>
        </div>

        {/* Why Choose Us Trust Pillars */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-start gap-4">
            <span className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
              <IconZeppelin size={22} />
            </span>
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Fast Turnaround</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                We deliver high-speed web portals and rapid print runs efficiently without sacrificing quality.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-start gap-4">
            <span className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
              <IconShieldCheck size={22} />
            </span>
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Proven Expertise</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Years of experience scaling brands across Kenya with custom software and precision branding.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-start gap-4">
            <span className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
              <IconHeartHandshake size={22} />
            </span>
            <div>
              <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Dedicated Support</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Direct communication channels and dedicated project guidance from start to launch.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          
          {/* Left Column: Contact Cards */}
          <div data-aos="fade-right" className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                Contact Information
              </h3>

              {/* Direct Details */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
                    <IconMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400">Eldoret, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
                    <IconPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Talk to us</h4>
                    <a href="tel:+254735602433" className="text-slate-600 dark:text-slate-400 hover:text-brand-orange transition-colors">
                      +254 735 602 433
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
                    <IconMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Email Address</h4>
                    <a href="mailto:hello@obbieconcepts.com" className="text-slate-600 dark:text-slate-400 hover:text-brand-orange transition-colors">
                      hello@obbieconcepts.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
                    <IconClock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Business Hours</h4>
                    <p className="text-slate-600 dark:text-slate-400">Monday – Friday: 8:00 AM – 6:00 PM (EAT)</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise Card */}
              <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1">
                <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Quick Response Promise
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  We respond to all inquiries and quote requests within 2 hours during business hours.
                </p>
              </div>

              {/* Instant WhatsApp CTA */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-500 mb-3">Prefer instant messaging?</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs transition-colors shadow-md"
                >
                  <IconBrandWhatsapp size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Functional Contact Form */}
          <div data-aos="fade-left" className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                    <IconCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Obbie Concepts. A member of our team will review your inquiry and respond within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:underline pt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
                    Send Us a Message
                  </h3>

                  {errorMessage && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-2.5 bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        className="w-full px-4 py-2.5 bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange transition-colors"
                      >
                        <option value="Web Development">Web & App Development</option>
                        <option value="SaaS Solutions">SaaS / Enterprise Software</option>
                        <option value="UI/UX Design">UI/UX Design & Branding</option>
                        <option value="Digital Marketing">Digital Marketing & SEO</option>
                        <option value="Consulting">Technical Consultation</option>
                        <option value="Sales & Marketing">Sales & Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your project goals, timeline, and requirements..."
                      className="w-full px-4 py-2.5 bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange text-white py-3 rounded-xl font-bold text-xs hover:bg-brand-orange-hover active:scale-98 transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        <IconSend size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

       {/* Customer Reviews / Testimonials Section */}
       <section data-aos="fade-up" className="mb-20 pt-10 border-t border-slate-200 dark:border-slate-800">
         {/* Header Section */}
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
           <div>
             <span className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2 block">
               Client Feedback
             </span>
             <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
               What Our Partners Say
             </h2>
           </div>

           {/* Desktop Only Google Review Button */}
           <div className="hidden md:block">
             <a
               href="https://g.page/r/CZnExPd2fxmkEAI/review"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-slate-100 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 hover:border-brand-orange/50 text-slate-800 dark:text-slate-200 px-5 py-3 rounded-2xl text-xs font-bold transition-all shadow-sm group"
             >
               <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                 <path
                   fill="#4285F4"
                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                 />
                 <path
                   fill="#34A853"
                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                 />
                 <path
                   fill="#FBBC05"
                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                 />
                 <path
                   fill="#EA4335"
                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                 />
               </svg>
               <span>Leave a Google Review</span>
             </a>
           </div>
         </div>

         {/* Testimonial Cards Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           {TESTIMONIALS.map((t, idx) => (
             <div
               key={t.id}
               data-aos="fade-up"
               data-aos-delay={idx * 100}
               className="rounded-2xl bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between"
             >
               <div>
                 {/* Rating Stars */}
                 <div className="flex items-center gap-1 text-amber-400 mb-4">
                   {[...Array(t.rating)].map((_, i) => (
                     <IconStarFilled key={i} size={14} />
                   ))}
                 </div>
                 <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic mb-6">
                   "{t.comment}"
                 </p>
               </div>

               {/* Author Info */}
               <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                 <img
                   src={t.avatar}
                   alt={t.name}
                   className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-orange/30"
                 />
                 <div>
                   <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                     {t.name}
                   </h4>
                   <p className="text-[11px] text-slate-500 dark:text-slate-400">
                     {t.role}, {t.company}
                   </p>
                 </div>
               </div>
             </div>
           ))}
         </div>

         {/* Mobile Only Google Review Button */}
         <div className="block md:hidden text-center pt-2">
           <a
             href="https://g.page/r/CZnExPd2fxmkEAI/review"
             target="_blank"
             rel="noopener noreferrer"
             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 hover:border-brand-orange/50 text-slate-800 dark:text-slate-200 px-5 py-3.5 rounded-2xl text-xs font-bold transition-all shadow-sm"
           >
             <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
               <path
                 fill="#4285F4"
                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
               />
               <path
                 fill="#34A853"
                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
               />
               <path
                 fill="#FBBC05"
                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
               />
               <path
                 fill="#EA4335"
                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
               />
             </svg>
             <span>Leave a Google Review</span>
           </a>
         </div>
       </section>

        {/* Map Location Section */}
        <section data-aos="fade-up" className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2 block">
              Our Location
            </span>
            <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
              Visit Our Office in Eldoret
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-80 sm:h-96 shadow-lg relative bg-slate-100 dark:bg-[#131B2A]">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6555227413896!2d35.278072099999996!3d0.5175908000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a2323f7a0b%3A0xa4197f76f7c4c499!2sObbie%20Concepts!5e0!3m2!1sen!2ske!4v1790718691949!5m2!1sen!2ske" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>

      </div>
    </main>
  );
}