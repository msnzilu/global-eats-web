import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GlobalEats - Meal Planning & Recipe Discovery",
  description: "The AI-powered meal planner that turns your fridge inventory into delicious global cuisine. Minimize food waste, eat healthier, and explore world flavors.",
  keywords: ["meal planning", "recipe discovery", "AI meal planner", "food waste reduction", "global cuisine", "smart inventory"],
  authors: [{ name: "GlobalEats Team" }],
  openGraph: {
    title: "GlobalEats - Eat Global. Waste Less. Live Better.",
    description: "The AI-powered meal planner that turns your fridge inventory into delicious global cuisine.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalEats - AI-Powered Meal Planning",
    description: "Turn your fridge inventory into delicious global cuisine.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#10B981",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-inter)' }}>
        {children}
      </body>
    </html>
  );
}
