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
    <header className="w-full sticky top-0 z-50 transition-colors">
      {/* Outer wrapper: Rounded bottom corners when mobile menu is open */}
      <div
        className={`w-full transition-all duration-300 ${
          mobileMenuOpen 
            ? 'rounded-b-2xl border-b border-x border-slate-200 dark:border-slate-800 shadow-xl' 
            : 'border-b border-slate-200 dark:border-slate-800'
        } ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
            : 'bg-white dark:bg-slate-900'
        }`}
      >
        {/* Inner Container */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 lg:h-24 flex items-center justify-between w-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image 
              src="/obbieLogo.png" 
              alt="Obbie Concepts Logo" 
              width={42} 
              height={42} 
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-xl text-brand-navy dark:text-white tracking-tight leading-none">
                OBBIE <span className="text-brand-orange">CONCEPTS</span>
              </span>
              <span className="text-[7.5px] sm:text-[9.5px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-1">
                Bringing Abstract To Reality
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive 
                      ? 'text-brand-orange bg-orange-50/85 dark:bg-slate-800 font-bold' 
                      : 'text-slate-700 dark:text-slate-300 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Controls */}
          <div className="hidden lg:flex items-center gap-3.5">
            <ThemeToggle />
            <Link
              href="/booking"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800/60 space-y-2.5 max-h-[60vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-b-2xl">
            <nav className="space-y-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                      isActive 
                        ? 'text-brand-orange bg-orange-50/90 dark:bg-slate-800 font-bold' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions: Theme Toggle (Far Left) & Slightly Reduced Booking Button (Far Right) */}
            <div className="pt-2.5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
              <div className="shrink-0">
                <ThemeToggle />
              </div>

              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center bg-brand-orange hover:bg-brand-orange-hover text-white text-[11px] sm:text-xs font-bold py-2.5 px-3 rounded-xl shadow-sm transition-all"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}