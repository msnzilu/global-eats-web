import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

const Page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </div>
  );
};

export default Page;