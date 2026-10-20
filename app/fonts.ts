import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';

export const fontHeading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700'],
  display: 'swap',
});

export const fontBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});