"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Apple and Google Play brand icons as SVG components
const AppleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
);

const GooglePlayIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
    </svg>
);

export default function Hero() {
    const stats = [
        { value: "50K+", label: "Healthy Recipes" },
        { value: "4.9★", label: "User Rating" },
        { value: "100K+", label: "Active Users" },
    ];

    const meals = [
        { emoji: '🥗', name: 'Mediterranean Bowl', cal: '420' },
        { emoji: '🍜', name: 'Veggie Ramen', cal: '380' },
        { emoji: '🥙', name: 'Quinoa Wrap', cal: '450' },
        { emoji: '🍲', name: 'Green Curry', cal: '390' },
    ];

    const floatingElements = [
        { emoji: "🥑", pos: "top-0 right-0", delay: 0 },
        { emoji: "🥗", pos: "bottom-10 left-0", delay: 0.2 },
        { emoji: "🍓", pos: "top-1/3 -left-8", delay: 0.4 },
    ];

    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.06)_0%,transparent_50%)] pointer-events-none" />

            <div className="container-modern relative z-10 py-20 lg:py-32">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 space-y-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-semibold text-emerald-700"
                        >
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            Join 100K+ healthy eaters
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 leading-[1.1]">
                            <span className="block mb-3">Eat Global.</span>
                            <span className="block mb-3">Waste Less.</span>
                            <span className="text-gradient-healthy block">Live Better.</span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                        >
                            {stats.map((stat, i) => (
                                <div key={stat.label} className="flex flex-col text-center sm:text-left">
                                    <div className="text-3xl lg:text-4xl font-bold text-slate-900">{stat.value}</div>
                                    <div className="text-sm text-slate-600 font-medium mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Download Buttons with Brand Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#"
                                className="group relative inline-flex items-center justify-center gap-3 bg-emerald-600 text-white px-10 py-6 rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                <div className="relative flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                        <AppleIcon />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs opacity-90 font-medium">Download on</div>
                                        <div className="text-xl font-bold">App Store</div>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="group relative inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-6 rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                <div className="relative flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                        <GooglePlayIcon />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs opacity-90 font-medium">Get it on</div>
                                        <div className="text-xl font-bold">Google Play</div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>

                        <a
                            href="#features"
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-semibold transition-colors duration-300 group"
                        >
                            <span>Learn more about features</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative max-w-md mx-auto lg:max-w-none">
                            {floatingElements.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute ${item.pos} w-20 h-20 bg-white rounded-2xl shadow-xl p-4 z-10 border border-slate-100 flex items-center justify-center`}
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    style={{ transitionDelay: `${item.delay}s` }}
                                >
                                    <div className="text-4xl">{item.emoji}</div>
                                </motion.div>
                            ))}

                            <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[3rem] p-2 shadow-2xl">
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-full z-20" />

                                <div className="bg-white rounded-[2.75rem] overflow-hidden aspect-[9/19] relative z-10">
                                    <div className="p-6 pt-14 bg-gradient-to-br from-slate-50 to-emerald-50/50 h-full flex flex-col">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">Today's Plan</h3>
                                            <p className="text-sm text-emerald-600 font-semibold">1,850 cal • Balanced</p>
                                        </div>

                                        <div className="space-y-3 flex-1">
                                            {meals.map((meal, i) => (
                                                <div
                                                    key={i}
                                                    className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 flex items-center gap-3"
                                                >
                                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-xl shadow-sm">
                                                        {meal.emoji}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="font-semibold text-slate-900 text-sm truncate">{meal.name}</div>
                                                        <div className="text-xs text-emerald-600 font-medium">{meal.cal} cal</div>
                                                    </div>
                                                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                                                        <span className="text-white text-xs">✓</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold shadow-lg mt-4">
                                            View Full Plan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}