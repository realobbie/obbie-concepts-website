'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className="h-11 w-11 rounded-full border border-slate-200/80 bg-white/70 dark:border-white/10 dark:bg-slate-900/70"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="
        group
        grid
        h-11
        w-11
        place-items-center
        rounded-full
        border
        border-slate-200/80
        bg-white/70
        text-slate-700
        shadow-sm
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-brand-orange/40
        hover:shadow-md
        dark:border-white/10
        dark:bg-slate-900/70
        dark:text-slate-200
        dark:hover:border-brand-orange/40
      "
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <IconSun
          size={19}
          stroke={1.8}
          className="
            text-amber-400
            transition-transform
            duration-300
            group-hover:rotate-45
          "
        />
      ) : (
        <IconMoon
          size={19}
          stroke={1.8}
          className="
            text-brand-navy
            transition-transform
            duration-300
            group-hover:-rotate-12
            dark:text-slate-200
          "
        />
      )}
    </button>
  );
}