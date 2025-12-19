import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Prepzi - Eat Healthy. Waste Less. Live Better.',
  description: 'Discover nutritious recipes from 80+ countries while minimizing food waste and achieving your health goals.',
  keywords: ['healthy eating', 'global recipes', 'food waste', 'nutrition', 'meal planning'],
  authors: [{ name: 'Prepzi' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Prepzi - Eat Global. Waste Less. Live Better.',
    description: 'Discover nutritious recipes from 80+ countries while minimizing food waste.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}