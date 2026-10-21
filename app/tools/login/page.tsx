// app/tools/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { IconLock, IconLoader2, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

export default function GeneratorLoginPage() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/tools/invoice');
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || 'Invalid password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] flex flex-col items-center justify-center p-4 transition-colors relative">
      
      {/* Back to Home Link */}
      <div className="absolute top-6 left-6 sm:left-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
        >
          <IconArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="max-w-md w-full bg-slate-50 dark:bg-[#131B2A] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-3">
            <Image 
              src="/obbieLogo.png" 
              alt="Obbie Concepts" 
              width={40} 
              height={40} 
              className="w-10 h-10 object-contain"
            />
          </div>
          <h1 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
            Restricted Access
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Enter the admin password to access the Obbie Concepts Document Generator.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                <IconLock size={18} />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter generator password"
                required
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-orange transition-colors shadow-sm"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-red-500 dark:text-red-400 font-semibold text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <IconLoader2 size={18} className="animate-spin" /> Verifying...
              </>
            ) : (
              <>
                Access Generator <IconArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}