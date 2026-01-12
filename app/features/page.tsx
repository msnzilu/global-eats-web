'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import { Shield, Zap, Search, Globe, Heart, Clock, Smartphone, Database, RefreshCw, BarChart } from 'lucide-react';

const DetailedFeaturesPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <header>
                <Navbar />
            </header>

            <main className="pt-20">
                {/* Dedicated Features Hero */}
                <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Powerful Features for <br />
                                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Health-Conscious</span> Eaters.
                            </h1>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                Prepzi isn't just a recipe app. It's an intelligent culinary companion designed to streamline your nutrition, reduce waste, and expand your palate.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Primary Features (Reusing component) */}
                <section aria-labelledby="features-heading">
                    <Features />
                </section>

                {/* Deep Dive Section */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                            <div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    Smart Inventory & <span className="text-emerald-600">Waste Reduction</span>
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Never let an onion go bad again. Our intelligent inventory system tracks every ingredient you buy, alerts you before things expire, and suggests recipes specifically based on what's in your fridge right now.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Real-time expiration tracking",
                                        "Automated 'Use It Soon' alerts",
                                        "One-tap inventory deduction after cooking",
                                        "Smart replenishment suggestions"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 flex items-center justify-center">
                                    <Database className="w-48 h-48 text-emerald-600 opacity-20 absolute" />
                                    <div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl border border-emerald-100 transform -rotate-2">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-bold text-slate-800">Your Inventory</span>
                                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-bold">Live</span>
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                { label: "Spinach", qty: "200g", status: "Expires tomorrow", color: "rose" },
                                                { label: "Greek Yogurt", qty: "500g", status: "Fresh", color: "emerald" },
                                                { label: "Chicken Breast", qty: "450g", status: "Use soon", color: "amber" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                                    <div>
                                                        <div className="text-sm font-semibold">{item.label}</div>
                                                        <div className={`text-[10px] text-${item.color}-600 font-bold`}>{item.status}</div>
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-500">{item.qty}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <div className="aspect-square bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl p-8 flex items-center justify-center">
                                    <BarChart className="w-48 h-48 text-teal-600 opacity-20 absolute" />
                                    <div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl border border-teal-100 transform rotate-2">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="font-bold text-slate-800">Nutrition Stats</span>
                                            <RefreshCw className="w-4 h-4 text-slate-400" />
                                        </div>
                                        <div className="flex gap-4">
                                            {[
                                                { label: "Protein", val: "85%", color: "emerald" },
                                                { label: "Carbs", val: "40%", color: "teal" },
                                                { label: "Fats", val: "65%", color: "amber" }
                                            ].map((stat, i) => (
                                                <div key={i} className="flex-1 text-center">
                                                    <div className={`h-24 bg-slate-50 rounded-lg relative overflow-hidden mb-2 border border-slate-100`}>
                                                        <div
                                                            className={`absolute bottom-0 inset-x-0 bg-${stat.color}-500`}
                                                            style={{ height: stat.val }}
                                                        ></div>
                                                    </div>
                                                    <div className="text-[10px] font-bold text-slate-500">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    Precision <span className="text-teal-600">Nutrition</span> Tracking
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Go beyond just calorie counting. Prepzi breaks down micro and macro nutrients for every meal, giving you a complete picture of your health.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Automatic macro-nutrient calculation",
                                        "Personalized calorie recommendations",
                                        "Vitamins & Minerals breakdown",
                                        "Biometric data integration (Apple Health/Google Fit)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* More Features Grid */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Everything You Need</h2>
                            <p className="text-lg text-slate-600">Wait, there's even more to discover.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Smartphone, title: "Offline Mode", desc: "Access your recipes and shopping lists even without internet." },
                                { icon: RefreshCw, title: "Cloud Sync", desc: "Start planning on your tablet, finish cooking with your phone." },
                                { icon: Globe, title: "80+ Regional Cuisines", desc: "Explore thousands of authentic dishes from around the globe." },
                                { icon: Search, title: "Advanced Filters", desc: "Filter by dietary needs, cook time, difficulty, or ingredients." },
                                { icon: Heart, title: "Custom Goals", desc: "Set goals for weight loss, muscle gain, or specific diets like Keto." },
                                { icon: Clock, title: "Batch Cooking", desc: "Optimize your time with meal prep and batch cooking guides." }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <feature.icon className="w-10 h-10 text-emerald-600 mb-6" />
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
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

export default DetailedFeaturesPage;
