'use client';

import React, { useState, useEffect } from 'react';
import { Star, Play, Quote, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const [activity, setActivity] = useState({ name: "Sarah from Nairobi", saving: 43 });
    const activities = [
        { name: "Sarah from Nairobi", saving: 43 },
        { name: "Michael from London", saving: 28 },
        { name: "Elena from Madrid", saving: 35 },
        { name: "John from New York", saving: 52 },
        { name: "Amara from Lagos", saving: 31 }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const random = activities[Math.floor(Math.random() * activities.length)];
            setActivity(random);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Lost 15 lbs in 2 months",
            stats: "Saved $85/mo on groceries",
            comment: "Prepzi completely transformed my relationship with food. I'm saving money and eating better than ever.",
            avatar: "SJ",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Fitness Enthusiast",
            stats: "Cut food waste by 95%",
            comment: "Perfect for meal prep! The nutrition tracking helps me hit my macros every day while exploring new cuisines.",
            avatar: "MC",
            rating: 5
        },
        {
            name: "Emma Rodriguez",
            role: "Busy Professional",
            stats: "Saves 4 hours/week",
            comment: "Saves me so much time and money. No more wasted groceries, and I actually look forward to cooking now!",
            avatar: "ER",
            rating: 5
        }
    ];

    const pressLogos = [
        { name: "TechCrunch", icon: "🚀" },
        { name: "Healthline", icon: "🏥" },
        { name: "BBC Food", icon: "🍳" },
        { name: "Vogue", icon: "✨" },
        { name: "Wired", icon: "🔌" }
    ];

    return (
        <div id="testimonials" className="py-24 bg-white relative overflow-hidden">
            {/* Real-time Activity Feed Overlay */}
            <div className="fixed bottom-8 left-8 z-[100] hidden md:block">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activity.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-emerald-100 flex items-center gap-4 max-w-sm"
                    >
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-xl">
                            💰
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">{activity.name} just saved ${activity.saving} this week</p>
                            <p className="text-xs text-slate-500">Verified Prepzi User</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Press Logos */}
                <div className="mb-24 text-center">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">As Featured In</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {pressLogos.map((press) => (
                            <div key={press.name} className="flex items-center gap-2 transform hover:scale-110 transition-transform">
                                <span className="text-2xl">{press.icon}</span>
                                <span className="text-xl font-bold text-slate-900">{press.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                        Join <span className="text-emerald-600">100,000+</span> People Eating Smarter
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-xl text-slate-600">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <span className="font-semibold">4.9/5 Average Rating</span>
                    </div>
                </div>

                {/* Video Testimonials Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
                    <div className="relative group cursor-pointer">
                        <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                                alt="Video testimonial"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-lg font-bold">Watch David&apos;s Transformation</p>
                                <p className="text-sm opacity-80">&quot;Lost 20lbs while still eating pasta!&quot;</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-emerald-50 rounded-xl">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Scientifically Balanced Meals</h3>
                                <p className="text-slate-600">Every recipe is vetted by our team of 500+ dietitians for peak nutrition.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-emerald-50 rounded-xl">
                                <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Guesswork</h3>
                                <p className="text-slate-600">Get exact grocery lists so you only buy what you need. Zero waste.</p>
                            </div>
                        </div>
                        <div className="p-8 bg-emerald-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                            <Quote className="absolute top-4 right-4 w-24 h-24 text-white/10" />
                            <p className="text-xl font-medium mb-4 relative z-10">&quot;The most intuitive health app I&apos;ve ever used. The global recipes are a game changer.&quot;</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">JD</div>
                                <div>
                                    <p className="font-bold">Dr. Jane McLaughlin</p>
                                    <p className="text-sm opacity-80">Certified Dietitian (LDN)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-xl border-2 border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg uppercase tracking-wider">{testimonial.stats}</span>
                            </div>
                            <p className="text-slate-700 mb-6 italic leading-relaxed">&quot;{testimonial.comment}&quot;</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;