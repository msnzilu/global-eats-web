'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HowItWorks from '@/components/HowItWorks';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import { Search, Calendar, ShoppingBag, Box, Utensils, CheckCircle2, ArrowRight } from 'lucide-react';

const DetailedHowItWorksPage = () => {
    const detailedSteps = [
        {
            icon: Search,
            title: "Discover Your Next Meal",
            description: "Browse thousands of nutritionist-verified recipes from over 80 countries. Filter by dietary preference, spice level, or cook time.",
            subItems: ["Save favorites to your library", "Import recipes from the web", "Adjust serving sizes dynamically"]
        },
        {
            icon: Calendar,
            title: "Plan Your Week",
            description: "Drag and drop recipes into your weekly calendar. Our AI suggests meals that share common ingredients to maximize your budget.",
            subItems: ["Auto-balance your macro-nutrients", "Schedule cheat meals", "Copy previous successful weeks"]
        },
        {
            icon: ShoppingBag,
            title: "Smart Shopping List",
            description: "The app compiles every ingredient you need into a sorted list. It even checks your current inventory to avoid double-buying.",
            subItems: ["Sort by grocery aisle", "One-tap Amazon Fresh/Instacart order", "Add custom household items"]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <header>
                <Navbar />
            </header>

            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 skew-x-12 transform translate-x-20"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-bold mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Master Your Kitchen in <span className="text-emerald-400">Minutes</span>.
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                                From discovering new tastes to tracking your pantry, Prepzi simplifies every step of your culinary journey. Here is exactly how it transforms your life.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    <span className="font-medium text-sm">Save 5+ hours/week</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    <span className="font-medium text-sm">Reduce waste by 30%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The 5-Step Journey (Reusing component for core overview) */}
                <section aria-labelledby="how-it-works-heading">
                    <HowItWorks />
                </section>

                {/* Deep Dive into Process */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>A Deeper Look</h2>
                            <p className="text-lg text-slate-600">The technology and science behind your meal prep.</p>
                        </div>

                        <div className="space-y-32">
                            {detailedSteps.map((step, i) => (
                                <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className="lg:w-1/2">
                                        <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                                            <step.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-6">{step.title}</h3>
                                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">{step.description}</p>
                                        <div className="space-y-4">
                                            {step.subItems.map((item, j) => (
                                                <div key={j} className="flex items-center gap-3">
                                                    <ArrowRight className="w-4 h-4 text-emerald-600" />
                                                    <span className="text-slate-700 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full">
                                        <div className="aspect-video bg-white rounded-[2rem] shadow-2xl border-8 border-slate-100 overflow-hidden relative group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 group-hover:opacity-0 transition-opacity"></div>
                                            {/* Mock UI/Image Placeholder */}
                                            <div className="w-full h-full flex items-center justify-center text-slate-200">
                                                <step.icon className="w-32 h-32 opacity-10" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section specifically for process */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>Questions about the process?</h2>
                        <div className="space-y-8">
                            {[
                                { q: "Do I need to scan every item I buy?", a: "Not necessarily. You can auto-import your digital receipts from major retailers, or use our quick-add feature for common pantry staples." },
                                { q: "How accurate is the nutrition data?", a: "We use the gold-standard USDA database combined with verified regional databases to ensure +/- 5% accuracy on all macro calculations." },
                                { q: "Can I share my meal plan with my family?", a: "Yes! Prepzi Premium allows you to create a household account where everyone can see the plan, add items to the shared shopping list, and track their individual intake." }
                            ].map((faq, i) => (
                                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="text-lg font-bold text-slate-900 mb-3">Q: {faq.q}</h4>
                                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section aria-labelledby="download-heading">
                    <DownloadCTA />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default DetailedHowItWorksPage;
