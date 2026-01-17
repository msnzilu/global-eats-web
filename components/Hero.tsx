'use client';

import React, { useState, useEffect } from 'react';
import { Star, Download, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [liveJoins, setLiveJoins] = useState(2347);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setLiveJoins(prev => prev + Math.floor(Math.random() * 2));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 overflow-hidden min-h-[95vh] flex flex-col">
            {/* Urgency Banner */}
            <div className="w-full bg-orange-600 text-white py-2 text-center text-sm font-bold z-50">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2"
                >
                    🔥 New Users This Week: Get 30-day Premium Free (247 spots left)
                </motion.p>
            </div>

            <div className="relative flex-grow flex items-center">
                {/* Animated Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>

                {/* Floating Organic Elements */}
                <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce hidden lg:block">🥬</div>
                <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse hidden lg:block">🥑</div>
                <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-bounce hidden lg:block" style={{ animationDelay: '1s' }}>🍅</div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
                        {/* Left Column: Content */}
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-8 border border-emerald-100">
                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                <span className="text-sm font-semibold text-slate-700">Join 100K+ healthy eaters</span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                                Stop Wasting <br />
                                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">$480/Year</span><br />
                                on Food You Throw Away
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                                Join <span className="text-emerald-600 font-bold">100,000+ people</span> eating healthier global cuisine while <span className="text-emerald-600 font-bold">cutting waste by 90%</span>.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.prepzi.app&pcampaignid=web_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white rounded-2xl font-bold shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg border-2 border-emerald-500/20"
                                >
                                    Get Your Free Personalized Meal Plan
                                </a>
                            </div>

                            {/* Live Counter */}
                            <div className="flex items-center gap-2 mb-12 text-slate-600 font-medium">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm">
                                    <span className="text-emerald-600 font-bold">⚡ {liveJoins.toLocaleString()}</span> people joined today
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex gap-8 border-t border-slate-200 pt-8">
                                <div>
                                    <div className="text-3xl font-bold text-emerald-600">50K+</div>
                                    <div className="text-sm text-slate-500">Global Recipes</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-3xl font-bold text-emerald-600">4.9</span>
                                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                    </div>
                                    <div className="text-sm text-slate-500">App Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Visual Mockup */}
                        <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                            {/* Device Mockup Shell */}
                            <div className="relative mx-auto w-[280px] md:w-[320px] lg:w-[340px] aspect-[9/19.5] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
                                {/* Notch Area */}
                                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 flex justify-center items-end pb-1 z-20">
                                    <div className="w-20 h-1 bg-slate-700/50 rounded-full"></div>
                                </div>

                                {/* Screen Content Container */}
                                <div className="absolute inset-0 bg-white overflow-hidden">
                                    <div className="relative w-full h-full bg-slate-50">
                                        {/* Scrolling Screenshots Strip */}
                                        <div className="absolute inset-x-0 bottom-0 animate-scroll-vertical space-y-4 p-4">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-full aspect-[9/16] bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                                                    <img
                                                        src={`/screenshots/app-screen-${i}.jpg`}
                                                        alt={`App Screen ${i}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                            {/* Duplicate for seamless infinite loop */}
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={`dup-${i}`} className="w-full aspect-[9/16] bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                                                    <img
                                                        src={`/screenshots/app-screen-${i}.jpg`}
                                                        alt={`App Screen ${i} Duplicate`}
                                                        className="w-full h-full object-cover text-[0px]"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Overlay Gradient for depth */}
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white opacity-40"></div>
                                    </div>
                                </div>

                                {/* Home Indicator */}
                                <div className="absolute bottom-2 inset-x-0 flex justify-center items-center z-20">
                                    <div className="w-32 h-1 bg-slate-800/20 rounded-full"></div>
                                </div>
                            </div>

                            {/* Floating Cards (Outside the phone) */}
                            <div className="absolute -left-4 top-1/4 bg-white/80 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl hidden md:block transform -rotate-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl">🥗</div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-800">Buddha Bowl</div>
                                        <div className="text-[10px] text-emerald-600 font-medium">380 kcal</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-8 bottom-1/4 bg-white/80 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl hidden md:block transform rotate-6" style={{ transitionDelay: '1.5s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl">🍱</div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-800">Sushi Rolls</div>
                                        <div className="text-[10px] text-emerald-600 font-medium">320 kcal</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Modal Overlay */}
                <AnimatePresence>
                    {showVideoModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowVideoModal(false)}
                                className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            >
                                <button
                                    onClick={() => setShowVideoModal(false)}
                                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Actual Video Player */}
                                <div className="w-full h-full bg-slate-900">
                                    <video
                                        src="/demo.mp4"
                                        className="w-full h-full"
                                        controls
                                        autoPlay
                                        playsInline
                                    />
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
            <style jsx global>{`
                @keyframes scroll-vertical {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-scroll-vertical {
                    animation: scroll-vertical 20s linear infinite;
                }
            `}</style>
        </div>
    );
}