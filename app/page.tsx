import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Curved Divider */}
      <div className="relative h-24 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-emerald-50/30" style={{
          clipPath: 'ellipse(100% 100% at 50% 0%)'
        }} />
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <HowItWorks />
      </div>

      {/* Curved Divider */}
      <div className="relative h-24 bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="absolute inset-0 bg-white" style={{
          clipPath: 'ellipse(100% 100% at 50% 100%)'
        }} />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Gradient Transition */}
      <div className="h-32 bg-gradient-to-b from-white to-emerald-600" />

      {/* Download CTA Section */}
      <DownloadCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
