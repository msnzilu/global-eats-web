"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ArrowRight } from "lucide-react";

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Lost 15 lbs",
            avatar: "🌟",
            quote: "GlobalEats helped me discover healthy recipes I actually enjoy! I've lost weight without feeling deprived, and my energy levels have never been better.",
            rating: 5,
        },
        {
            name: "Michael Chen",
            role: "Fitness Enthusiast",
            avatar: "💪",
            quote: "Finally, an app that understands nutrition! The meal plans perfectly balance my macros while introducing me to delicious, healthy cuisines from around the world.",
            rating: 5,
        },
        {
            name: "Emma Rodriguez",
            role: "Busy Professional",
            avatar: "🥗",
            quote: "I used to eat out constantly. Now I cook nutritious meals at home, save money, and feel amazing. This app transformed my relationship with food!",
            rating: 5,
        },
    ];

    return (
        <section ref={ref} className="section-padding bg-white relative overflow-hidden">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.03)_0%,transparent_50%)]" />

            <div className="container-modern relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        Real People, Real{" "}
                        <span className="text-gradient-healthy">Results</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
                        Join thousands who've transformed their health with GlobalEats
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group"
                            whileHover={{ y: -4 }}
                        >
                            <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100">
                                {/* Quote Mark */}
                                <div className="absolute top-6 right-6 text-6xl text-emerald-200 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                    "
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-emerald-500 text-emerald-500"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-slate-700 leading-relaxed mb-6 relative z-10 text-lg">
                                    {testimonial.quote}
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-3xl shadow-md">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-emerald-600 font-semibold">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Health Stats */}
                <motion.div
                    className="mt-20 flex flex-wrap justify-center items-center gap-8 text-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="flex items-center gap-2">
                        <Star className="w-6 h-6 fill-emerald-500 text-emerald-500" />
                        <span className="font-bold text-lg">4.9/5 Rating</span>
                    </div>
                    <div className="w-px h-6 bg-emerald-300" />
                    <div className="font-bold text-lg">100,000+ Healthier Lives</div>
                    <div className="w-px h-6 bg-emerald-300" />
                    <div className="font-bold text-lg">Featured by Health Experts</div>
                </motion.div>
            </div>
        </section>
    );
}