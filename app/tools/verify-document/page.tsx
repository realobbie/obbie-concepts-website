// app/tools/verify-invoice/page.tsx
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  IconShieldCheck, 
  IconShieldX, 
  IconLoader2, 
  IconCheck, 
  IconArrowLeft 
} from '@tabler/icons-react';

interface DocumentRecord {
  doc_number: string;
  doc_type: string;
  client_name: string;
  grand_total: number;
  currency: string;
  issue_date: string;
  status: string;
}

function VerificationContent() {
  const searchParams = useSearchParams();
  const docNo = searchParams.get('no');

  const [loading, setLoading] = useState(true);
  const [doc, setDoc] = useState<DocumentRecord | null>(null);

  useEffect(() => {
    async function fetchDocument() {
      if (!docNo) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/verify-document?no=${encodeURIComponent(docNo)}`);
        if (res.ok) {
          const data = await res.json();
          setDoc(data);
        }
      } catch (err) {
        console.error('Error fetching document verification:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchDocument();
  }, [docNo]);

  const formatCurrency = (val: number, currency: string) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: currency || 'KES',
    }).format(val);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-500">
        <IconLoader2 size={36} className="animate-spin text-brand-orange mb-3" />
        <p className="text-sm font-semibold">Verifying document with Obbie Concepts records...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-[#131B2A] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
      {doc ? (
        <div className="text-center">
          {/* Authentic Badge */}
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200 dark:border-emerald-800">
            <IconShieldCheck size={36} />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-2">
            <IconCheck size={14} /> Official Verified Document
          </span>

          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
            Genuine {doc.doc_type}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
            Issued by Obbie Concepts Eldoret
          </p>

          {/* Record Details Card */}
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 text-left border border-slate-200 dark:border-slate-800 text-xs space-y-3 mb-6">
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <span className="text-slate-500 font-medium">Document Number</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{doc.doc_number}</span>
            </div>

            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <span className="text-slate-500 font-medium">Issued To</span>
              <span className="font-bold text-slate-900 dark:text-white">{doc.client_name}</span>
            </div>

            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <span className="text-slate-500 font-medium">Issue Date</span>
              <span className="font-medium text-slate-900 dark:text-white">
                {new Date(doc.issue_date).toLocaleDateString('en-GB')}
              </span>
            </div>

            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
              <span className="text-slate-500 font-medium">Total Amount</span>
              <span className="font-bold text-brand-orange">{formatCurrency(doc.grand_total, doc.currency)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500 font-medium">Status</span>
              <span className="font-bold uppercase text-emerald-600 dark:text-emerald-400">{doc.status}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          {/* Invalid Badge */}
          <div className="w-16 h-16 bg-red-100 dark:bg-red-950/50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200 dark:border-red-800">
            <IconShieldX size={36} />
          </div>

          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Unverified Document
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 mb-6">
            {docNo 
              ? `No record matching document "${docNo}" was found in our system.`
              : 'No document reference was provided in the link.'}
          </p>
        </div>
      )}

      <div className="text-center pt-2">
        <Link 
          href="/tools/invoice" 
          className="inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-brand-orange"
        >
          <IconArrowLeft size={16} /> Return to Generator
        </Link>
      </div>
    </div>
  );
}

export default function VerifyInvoicePage() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 py-12 px-4">
      <div className="max-w-xl mx-auto mb-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Image 
            src="/obbieLogo.png" 
            alt="Obbie Concepts" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain bg-slate-900 rounded-full p-1"
          />
          <span className="font-heading font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
            OBBIE <span className="text-brand-orange">CONCEPTS</span>
          </span>
        </div>
        <p className="text-xs text-slate-500">Official Document Verification System</p>
      </div>

      <Suspense fallback={<div className="text-center py-10 text-xs">Loading verification...</div>}>
        <VerificationContent />
      </Suspense>
    </main>
  );
}