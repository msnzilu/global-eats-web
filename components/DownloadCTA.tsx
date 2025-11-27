"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

// Apple and Google Play brand icons
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

export default function DownloadCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />

            <div className="container-modern relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="text-center space-y-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white">
                            <Sparkles className="w-4 h-4" />
                            Start your journey
                        </div>

                        <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                            Ready to Transform
                            <br />
                            Your Eating Habits?
                        </h2>

                        <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            Join 100,000+ people who've discovered a healthier, more sustainable way to eat. Download now and get your first personalized meal plan free.
                        </p>

                        {/* Download Buttons with Brand Icons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <a
                                href="#"
                                className="group inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-8 py-5 rounded-2xl hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-[1.02]"
                            >
                                <AppleIcon />
                                <div className="text-left">
                                    <div className="text-xs text-emerald-600 font-medium">Download on</div>
                                    <div className="text-lg font-bold">App Store</div>
                                </div>
                                <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                            </a>

                            <a
                                href="#"
                                className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-[1.02]"
                            >
                                <GooglePlayIcon />
                                <div className="text-left">
                                    <div className="text-xs text-slate-400 font-medium">Get it on</div>
                                    <div className="text-lg font-bold">Google Play</div>
                                </div>
                                <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/90">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span className="font-semibold">Free to download</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span className="font-semibold">No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span className="font-semibold">Cancel anytime</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
