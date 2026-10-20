// app/_components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-50 lg:sticky lg:top-0 transition-colors">
      {/* Outer wrapper: Full-width sticky top on Desktop | Floating bottom capsule on Mobile */}
      <div
        className={`transition-all duration-300 ${
          /* Mobile Bottom Floating Capsule */
          'max-lg:fixed max-lg:bottom-4 max-lg:left-4 max-lg:right-4 max-lg:z-50 max-lg:rounded-2xl max-lg:border max-lg:border-white/20 dark:max-lg:border-slate-800/80 max-lg:shadow-2xl max-lg:px-4 max-lg:py-2.5'
        } ${
          /* Desktop Full-Width Sticky Header */
          'lg:w-full lg:border-b lg:border-slate-200/80 dark:lg:border-slate-800/80'
        } ${
          /* Frosty Glassmorphism Effect */
          isScrolled
            ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl backdrop-saturate-150 shadow-lg'
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md'
        }`}
      >
        {/* Mobile Upward Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden mb-3 pb-3 border-b border-slate-200/80 dark:border-slate-800/80 space-y-3 max-h-[60vh] overflow-y-auto animate-fadeIn">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive 
                        ? 'text-brand-orange bg-orange-50/80 dark:bg-slate-800/80 font-bold' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Switch Theme</span>
                <ThemeToggle />
              </div>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold py-3 rounded-lg shadow-sm transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Inner Container (Centered 7xl content area) */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:h-20 flex items-center justify-between w-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <Image 
              src="/obbieLogo.png" 
              alt="Obbie Concepts Logo" 
              width={40} 
              height={40} 
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-brand-navy dark:text-white tracking-tight leading-none">
                OBBIE <span className="text-brand-orange">CONCEPTS</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-1">
                Digital Agency &amp; SaaS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-brand-orange bg-orange-50/80 dark:bg-slate-800/80 font-bold' 
                      : 'text-slate-700 dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/about"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}