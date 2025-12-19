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

// Enhanced SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://prepzi.app'), // Replace with your actual domain
  title: {
    default: 'Prepzi - Eat Healthy. Waste Less. Live Better.',
    template: '%s | Prepzi'
  },
  description: 'Discover nutritious recipes from 80+ countries while minimizing food waste and achieving your health goals. Smart meal planning with AI-powered nutrition tracking.',
  keywords: [
    'healthy eating',
    'global recipes',
    'food waste reduction',
    'nutrition tracker',
    'meal planning app',
    'international cuisine',
    'healthy recipes',
    'diet planning',
    'food sustainability',
    'recipe app',
    'meal prep',
    'nutrition app'
  ],
  authors: [{ name: 'Prepzi', url: 'https://prepzi.app' }],
  creator: 'Prepzi',
  publisher: 'Prepzi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prepzi.app',
    title: 'Prepzi - Eat Healthy. Waste Less. Live Better.',
    description: 'Discover nutritious recipes from 80+ countries while minimizing food waste and achieving your health goals.',
    siteName: 'Prepzi',
    images: [
      {
        url: '/og-image.png', // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Prepzi - Healthy Eating Made Easy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prepzi - Eat Healthy. Waste Less. Live Better.',
    description: 'Discover nutritious recipes from 80+ countries while minimizing food waste.',
    images: ['/twitter-image.png'], // Create this image (1200x675px)
    creator: '@prepziapp', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://prepzi.app',
  },
  category: 'Food & Health',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://prepzi.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Prepzi',
              url: 'https://prepzi.app',
              logo: 'https://prepzi.com/logo.png',
              description: 'Discover nutritious recipes from 80+ countries while minimizing food waste.',
              sameAs: [
                'https://twitter.com/prepziapp',
                'https://facebook.com/prepziapp',
                'https://instagram.com/prepziapp',
                'https://linkedin.com/company/prepziapp'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'support@prepzi.app'
              }
            })
          }}
        />

        {/* Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Prepzi',
              applicationCategory: 'HealthApplication',
              operatingSystem: 'iOS, Android',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '1250'
              },
              description: 'Discover nutritious recipes from 80+ countries while minimizing food waste and achieving your health goals.'
            })
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Prepzi',
              url: 'https://prepzi.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://prepzi.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}