// app/_components/home/ProjectCalculator.tsx
'use client';

import { useState } from 'react';
import { 
  IconCalculator, 
  IconCheck, 
  IconBrandWhatsapp, 
  IconSparkles,
  IconRotateClockwise,
  IconInfoCircle
} from '@tabler/icons-react';

interface Option {
  id: string;
  label: string;
  priceEstimate: string;
}

const SERVICE_TYPES: Option[] = [
  { id: 'web', label: 'Web & Software Development', priceEstimate: 'KSh 35,000+' },
  { id: 'branding', label: 'Corporate Brand Identity', priceEstimate: 'KSh 15,000+' },
  { id: 'print', label: 'Large Format & Bulk Printing', priceEstimate: 'Custom Quote' },
  { id: 'marketing', label: 'Digital Marketing & Paid Ads', priceEstimate: 'KSh 25,000/mo' },
];

const SCOPE_OPTIONS: Record<string, Option[]> = {
  web: [
    { id: 'landing', label: 'Single Landing Page', priceEstimate: 'KSh 20,000 - 35,000' },
    { id: 'corporate', label: 'Multi-Page Corporate Website', priceEstimate: 'KSh 45,000 - 80,000' },
    { id: 'portal', label: 'Custom Web Application / Portal', priceEstimate: 'KSh 90,000+' },
  ],
  branding: [
    { id: 'starter', label: 'Logo & Basic Assets', priceEstimate: 'KSh 12,000 - 20,000' },
    { id: 'full', label: 'Complete Brand Identity Kit', priceEstimate: 'KSh 30,000 - 50,000' },
  ],
  print: [
    { id: 'small', label: 'Banners, Flyers & Stationery', priceEstimate: 'Per Unit Pricing' },
    { id: 'event', label: 'Full Event Branding Package', priceEstimate: 'Custom Scope' },
  ],
  marketing: [
    { id: 'setup', label: 'Campaign Setup & Pixel Audit', priceEstimate: 'KSh 20,000' },
    { id: 'retainer', label: 'Monthly Management & Content', priceEstimate: 'KSh 35,000 - 60,000/mo' },
  ],
};

export default function ProjectCalculator() {
  const [selectedService, setSelectedService] = useState<string>('web');
  const [selectedScope, setSelectedScope] = useState<string>('corporate');
  const [includeUrgent, setIncludeUrgent] = useState<boolean>(false);

  const WHATSAPP_NUMBER = '254735602433';

  const currentScopeList = SCOPE_OPTIONS[selectedService] || SCOPE_OPTIONS['web'];
  const activeScopeObj = currentScopeList.find((s) => s.id === selectedScope) || currentScopeList[0];

  const handleReset = () => {
    setSelectedService('web');
    setSelectedScope('corporate');
    setIncludeUrgent(false);
  };

  const handleSendEstimate = () => {
    const serviceLabel = SERVICE_TYPES.find((s) => s.id === selectedService)?.label;
    const message = encodeURIComponent(
      `Hello Obbie Concepts! I used your online cost estimator for:\n` +
      `• Service: *${serviceLabel}*\n` +
      `• Scope: *${activeScopeObj.label}*\n` +
      `• Estimated Range: *${activeScopeObj.priceEstimate}*\n` +
      `• Fast-Track Delivery: *${includeUrgent ? 'Yes' : 'Standard'}*\n\n` +
      `I would like to confirm project availability and get a formal invoice.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-slate-100 dark:bg-[#0E1420] border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <IconCalculator size={14} /> Instant Cost Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            Estimate Your Project Scope
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Select your requirements to calculate an estimated turnaround budget and dispatch pre-filled details to WhatsApp.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-white dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl relative">
          
          {/* Top Reset Action */}
          <div className="flex justify-end mb-4">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-brand-orange transition-colors cursor-pointer"
              title="Reset selections"
            >
              <IconRotateClockwise size={14} />
              <span>Reset Options</span>
            </button>
          </div>

          {/* Step 1: Service Type */}
          <div className="mb-8">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              1. Select Primary Capability
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SERVICE_TYPES.map((st) => (
                <button
                  key={st.id}
                  onClick={() => {
                    setSelectedService(st.id);
                    setSelectedScope(SCOPE_OPTIONS[st.id][0].id);
                  }}
                  className={`p-4 rounded-2xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    selectedService === st.id
                      ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/20'
                      : 'bg-slate-50 dark:bg-[#0B0F17] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-brand-orange/50'
                  }`}
                >
                  <div className="font-heading mb-1">{st.label}</div>
                  <div className={`text-[10px] ${selectedService === st.id ? 'text-white/80' : 'text-slate-400'}`}>
                    From {st.priceEstimate}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scope Level */}
          <div className="mb-8">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              2. Choose Scope & Complexity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentScopeList.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScope(sc.id)}
                  className={`p-4 rounded-2xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    selectedScope === sc.id
                      ? 'bg-slate-900 dark:bg-slate-800 text-white border-brand-orange'
                      : 'bg-slate-50 dark:bg-[#0B0F17] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span>{sc.label}</span>
                    {selectedScope === sc.id && <IconCheck size={16} className="text-brand-orange" />}
                  </div>
                  <div className="text-[11px] text-brand-orange font-semibold">{sc.priceEstimate}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Priority Delivery */}
          <div className="mb-8 p-4 rounded-2xl bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IconSparkles size={20} className="text-brand-orange shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Priority Fast-Track Delivery</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Request express completion within 48 to 72 hours.</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={includeUrgent}
              onChange={(e) => setIncludeUrgent(e.target.checked)}
              className="w-5 h-5 accent-brand-orange rounded cursor-pointer"
            />
          </div>

          {/* Estimate Display & WhatsApp Action */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#131B2A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange block">
                Estimated Investment
              </span>
              <div className="text-2xl font-bold font-heading text-white">
                {activeScopeObj.priceEstimate}
              </div>
            </div>

            <button
              onClick={handleSendEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3.5 rounded-xl font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              <IconBrandWhatsapp size={18} /> Send Scope to WhatsApp
            </button>
          </div>

          {/* Consultation Disclaimer Note */}
          <div className="flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400 px-1">
            <IconInfoCircle size={15} className="text-brand-orange shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Figures shown are baseline estimates for budgeting. Final quotes are confirmed after reviewing your exact project requirements during technical discovery.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}