'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import { Star, Quote, CheckCircle, Users, Award } from 'lucide-react';

const DetailedTestimonialsPage = () => {
    const successStories = [
        {
            name: "David Miller",
            title: "Overcame 5 years of unhealthy eating",
            content: "Before Prepzi, I was ordering takeout 4 nights a week. I didn't know how to cook and hated grocery shopping. The step-by-step guides and the shopping list automation removed all the friction. 6 months later, I've lost 25 lbs and actually enjoy my time in the kitchen.",
            image: "DM",
            metrics: ["-25 lbs weight loss", "Saved $300/mo", "Blood pressure normalized"]
        },
        {
            name: "The Peterson Family",
            title: "Stress-free dinners for a family of 5",
            content: "Meal planning was a nightmare. Prepzi's family account changed everything. We now have a weekly menu that the kids actually like, and we've reduced our food waste to almost zero. The inventory tracker is a lifesaver for making sure we never run out of the essentials.",
            image: "PF",
            metrics: ["90% less food waste", "Zero dinner arguments", "3+ hours saved weekly"]
        }
    ];

    const wallOfLove = [
        { name: "John D.", text: "The best health app I've used. Periodic updates keep it fresh.", rating: 5 },
        { name: "Sarah K.", text: "Love the global recipes. The Thai curry is amazing!", rating: 5 },
        { name: "Alex R.", text: "Inventory tracking is a game changer. No more rotten veggies.", rating: 5 },
        { name: "Maria S.", text: "Saved so much money on groceries this month.", rating: 5 },
        { name: "Kim L.", text: "Clean UI and very intuitive. Highly recommend.", rating: 5 },
        { name: "Zack T.", text: "The nutrition breakdown is so detailed. Perfect for my keto diet.", rating: 5 }
    ];

    return (
        <div className="min-h-screen bg-white">
            <header>
                <Navbar />
            </header>

            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-24 bg-emerald-600 text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-8 border border-white/30 backdrop-blur-sm">
                                <Award className="w-5 h-4" />
                                <span className="text-sm font-bold">App of the Year 2025 Runner Up</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Real Stories, <span className="text-emerald-200">Real Results</span>.
                            </h1>
                            <p className="text-xl text-emerald-50 max-w-3xl mx-auto leading-relaxed">
                                Join over 100,000 people who have redefined their relationship with food. From weight loss to sustainable living, see how Prepzi makes an impact.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Testimonials (Reusing component for consistency) */}
                <section aria-labelledby="testimonials-heading">
                    <Testimonials />
                </section>

                {/* Long-form Success Stories */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Success Stories</h2>
                            <p className="text-lg text-slate-600">Going deeper into how Prepzi changes lives.</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {successStories.map((story, i) => (
                                <div key={i} className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 flex flex-col h-full">
                                    <Quote className="w-12 h-12 text-emerald-100 mb-8" />
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{story.title}</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow italic">
                                        &quot;{story.content}&quot;
                                    </p>
                                    <div className="border-t border-slate-100 pt-8 mt-auto">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                                {story.image}
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900 text-lg">{story.name}</div>
                                                <div className="text-emerald-600 font-semibold text-sm">Verified User</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-2">
                                            {story.metrics.map((metric, j) => (
                                                <div key={j} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                                                    {metric}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Wall of Love Grid */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>The Wall of Love</h2>
                            <p className="text-lg text-slate-600">Quick shoutouts from our amazing community.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {wallOfLove.map((item, i) => (
                                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(item.rating)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 font-medium mb-4 italic">&quot;{item.text}&quot;</p>
                                    <div className="text-sm font-bold text-slate-900">— {item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Meta Social Proof */}
                <section className="py-24 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <div>
                                <Users className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                                <div className="text-4xl font-bold mb-2">100K+</div>
                                <div className="text-slate-400 font-medium">Active Users</div>
                            </div>
                            <div>
                                <Award className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                                <div className="text-4xl font-bold mb-2">4.9/5</div>
                                <div className="text-slate-400 font-medium">App Store Rating</div>
                            </div>
                            <div>
                                <Quote className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                                <div className="text-4xl font-bold mb-2">50M+</div>
                                <div className="text-slate-400 font-medium">Meals Logged</div>
                            </div>
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

export default DetailedTestimonialsPage;
