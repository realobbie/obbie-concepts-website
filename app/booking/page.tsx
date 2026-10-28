// app/booking/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  IconCalendar, 
  IconArrowLeft, 
  IconArrowRight, 
  IconCheck, 
  IconCode, 
  IconPrinter, 
  IconPalette, 
  IconSpeakerphone, 
  IconBrandWhatsapp, 
  IconSend
} from '@tabler/icons-react';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('Web Development');
  const [timeline, setTimeline] = useState('Standard (1-2 Weeks)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const whatsappNumber = "254735602433";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const submissionData = new FormData();
    submissionData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "1bde8b1a-a75c-4298-968b-aee623232da6");
    submissionData.append('subject', `New Booking/Consultation: ${serviceType}`);
    submissionData.append('name', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('phone', formData.phone);
    submissionData.append('service', serviceType);
    submissionData.append('timeline', timeline);
    submissionData.append('message', formData.notes);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network connection error. You can also book directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Obbie Concepts! I just completed your booking wizard.\n\n*Service:* ${serviceType}\n*Timeline:* ${timeline}\n*Name:* ${formData.name}\n*Details:* ${formData.notes}`
  )}`;

  return (
    <main className="min-h-[70vh] bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 py-6 sm:py-10 px-4 sm:px-6 transition-colors flex flex-col justify-center">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-brand-orange transition-colors"
          >
            <IconArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <div data-aos="fade-down" className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
            <IconCalendar size={16} /> Interactive Booking Suite
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight mb-2">
            Schedule Your Project Consultation
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Choose your service track, set your timeline, and lock in your project discovery session with Obbie Concepts in Eldoret.
          </p>
        </div>

        {/* Main Wizard Card */}
        <div data-aos="fade-up" className="bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          
          {submitted ? (
            /* Success State */
            <div className="py-6 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                <IconCheck size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  Booking Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  We have logged your request for <strong>{serviceType}</strong>. Our team will review your specs and reach out within 2 hours.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-2xl text-xs font-bold transition-all shadow-md"
                >
                  <IconBrandWhatsapp size={18} /> Send Details to WhatsApp Now
                </a>
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-3.5 rounded-2xl text-xs font-bold transition-all"
                >
                  Return Home
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {/* Step Progress Indicators */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-brand-orange text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                    1
                  </span>
                  <span className="text-xs font-bold hidden sm:inline text-slate-800 dark:text-slate-200">Service</span>
                </div>
                <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-800 mx-3"></div>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-brand-orange text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                    2
                  </span>
                  <span className="text-xs font-bold hidden sm:inline text-slate-800 dark:text-slate-200">Timeline</span>
                </div>
                <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-800 mx-3"></div>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? 'bg-brand-orange text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                    3
                  </span>
                  <span className="text-xs font-bold hidden sm:inline text-slate-800 dark:text-slate-200">Details</span>
                </div>
              </div>

              {errorMessage && (
                <div className="mb-5 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              {/* STEP 1: SELECT SERVICE */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-1">
                      What are you building or printing?
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Select the primary service track for your consultation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: 'Graphic Design & Branding', desc: 'Corporate identity, hoodies, mugs, flyers, Business Cards, Receipt Books, Wedding Cards, Posters, Brochures, Logos, Certificates, Funeral Programs ', icon: IconPalette },
                      { title: 'Web & App Development', desc: 'Next.js Websites, School Websites, Businesss Websites, Organizational Websites,SaaS apps, custom systems, Web Maintenance', icon: IconCode },                      
                      { title: 'Digital Marketing & SEO', desc: 'Meta ad funnels, GMB, SEO Optimization, Content Creation, local SEO growth', icon: IconSpeakerphone },
                      { title: 'Large Format Printing', desc: 'Banners, signage, campaign posters, Stickers, Reflective Stickers, Road Signs', icon: IconPrinter },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.title}
                        onClick={() => setServiceType(item.title)}
                        className={`text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                          serviceType === item.title
                            ? 'bg-brand-orange/10 border-brand-orange text-slate-900 dark:text-white'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className={`p-2 rounded-xl shrink-0 ${serviceType === item.title ? 'bg-brand-orange text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                          <item.icon size={18} />
                        </span>
                        <div>
                          <h3 className="text-xs font-bold">{item.title}</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
                    >
                      Next Step <IconArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: SELECT TIMELINE */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-1">
                      What is your expected timeline?
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Help us understand your urgency so we can allocate resources.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: 'Urgent / Express (Within 48 Hours)', desc: 'Priority print runs or rapid consultation dispatch' },
                      { title: 'Standard (1 - 2 Weeks)', desc: 'Standard turnaround for professional design & web projects' },
                      { title: 'Flexible / Planning Stage', desc: 'Long-term roadmap or custom software architecture' },
                    ].map((time) => (
                      <button
                        type="button"
                        key={time.title}
                        onClick={() => setTimeline(time.title)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                          timeline === time.title
                            ? 'bg-brand-orange/10 border-brand-orange text-slate-900 dark:text-white'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div>
                          <h3 className="text-xs font-bold">{time.title}</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">{time.desc}</p>
                        </div>
                        {timeline === time.title && <IconCheck size={18} className="text-brand-orange shrink-0" />}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      <IconArrowLeft size={16} /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
                    >
                      Next Step <IconArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT INFO & SUBMIT */}
              {step === 3 && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-1">
                      Finalize Your Booking
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Provide your contact details so our team can confirm your consultation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+254 700 000 000"
                      className="w-full px-3.5 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Project Notes / Specific Specs
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Briefly describe what you need..."
                      className="w-full px-3.5 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-orange resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      <IconArrowLeft size={16} /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? 'Submitting...' : <>Confirm & Book <IconSend size={16} /></>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}