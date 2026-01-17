import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import WasteCalculator from '@/components/WasteCalculator';
import EatingStyleQuiz from '@/components/EatingStyleQuiz';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQs';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import ExitIntentPopup from '@/components/ExitIntentPopup';

const Page = () => {
  return (
    <>
      <ExitIntentPopup />
      {/* Skip to main content for accessibility and SEO */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-green-600 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      <div className="min-h-screen">
        {/* Header with proper semantic HTML */}
        <header>
          <Navbar />
        </header>

        {/* Main content with semantic structure */}
        <main id="main-content">
          {/* Hero Section - Primary content */}
          <section aria-labelledby="hero-heading">
            <Hero />
          </section>

          {/* Interactive - Waste Calculator */}
          <section id="waste-calculator">
            <WasteCalculator />
          </section>

          {/* Features Section */}
          <section aria-labelledby="features-heading">
            <Features />
          </section>

          {/* Eating Style Quiz */}
          <section id="quiz">
            <EatingStyleQuiz />
          </section>

          {/* How It Works Section */}
          <section aria-labelledby="how-it-works-heading">
            <HowItWorks />
          </section>

          {/* Testimonials Section */}
          <section aria-labelledby="testimonials-heading">
            <Testimonials />
          </section>

          {/* Pricing Section */}
          <section id="pricing">
            <Pricing />
          </section>

          {/* FAQ Section */}
          <section aria-labelledby="faq-heading">
            <FAQ />
          </section>

          {/* Contact Section */}
          <section aria-labelledby="contact-heading">
            <ContactUs />
          </section>

          {/* Download CTA Section */}
          <section aria-labelledby="download-heading">
            <DownloadCTA />
          </section>
        </main>

        {/* Footer with proper semantic HTML */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Page;