'use client';

import React, { useState, useEffect } from 'react';
import { Star, Download, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 overflow-hidden min-h-[90vh] flex items-center">
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
                            Eat Healthy.<br />
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Waste Less.</span><br />
                            Live Better.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                            Discover nutritious recipes from 80+ countries while minimizing food waste and achieving your health goals with Global Eats.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a
                                href="https://play.google.com/apps/testing/com.prepzi.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-6 py-2 bg-white text-slate-900 rounded-xl font-medium shadow-lg hover:shadow-xl border border-slate-100 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <svg viewBox="0 0 512 512" className="w-8 h-8">
                                    <path d="M7,29.9c-0.2,0.7-0.3,1.6-0.3,2.7v446.8c0,1.1,0.1,2,0.3,2.7l0.1,0.1L256,256L7.1,29.8L7,29.9z" fill="#4285F4" />
                                    <path d="M331.6,331.9L256,256L7.1,504.9c0.8,0.7,2.1,0.8,3.5,0.1l321-173.1L331.6,331.9z" fill="#34A853" />
                                    <path d="M504.6,229l-88.7-47.8l-84.3,84.3l84.3,84.3l88.7-47.8c10.4-5.6,10.4-14.8,0-20.4C504.6,237.5,504.6,229,504.6,229z" fill="#FBBC05" />
                                    <path d="M331.6,180.1L10.6,7.1c-1.4-0.7-2.7-0.6-3.5,0.1L256,256L331.6,180.1z" fill="#EA4335" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-tighter leading-none mb-0.5 font-bold text-slate-500">GET IT ON</div>
                                    <div className="text-xl leading-none font-bold">Google Play</div>
                                </div>
                            </a>

                            <button
                                onClick={() => setShowVideoModal(true)}
                                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-md"
                            >
                                <Play className="w-6 h-6 fill-slate-700" />
                                Watch Demo
                            </button>
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
    );
}

// Add Custom Animations in a separate component or global CSS
// For this view, we'll use a style tag for simplicity in the demo
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes scroll-vertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(50%); }
        }
        .animate-scroll-vertical {
            animation: scroll-vertical 20s linear infinite;
        }
    `;
    document.head.appendChild(style);
}