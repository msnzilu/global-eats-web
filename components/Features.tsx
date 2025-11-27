"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Globe, ArrowRight } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "Smart Inventory",
        description: "Track fresh ingredients and get personalized recipe suggestions to minimize waste.",
        gradient: "from-emerald-500 to-green-600",
        stat: "90% less waste",
    },
    {
        icon: Heart,
        title: "Nutrition First",
        description: "Every meal plan is balanced and tailored to your specific health goals.",
        gradient: "from-rose-500 to-pink-600",
        stat: "100% nutritionist-approved",
    },
    {
        icon: Globe,
        title: "Global Flavors",
        description: "Explore healthy dishes from 80+ countries without leaving your kitchen.",
        gradient: "from-teal-500 to-cyan-600",
        stat: "80+ cuisines",
    },
];

export default function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="container-modern relative z-10">
                {/* Header */}
                <motion.div
                    className="max-w-3xl mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-semibold text-emerald-700 mb-6">
                        Features
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        Everything for{" "}
                        <span className="text-gradient-healthy">Healthy Living</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Powerful tools designed to make healthy eating effortless and enjoyable
                    </p>
                </motion.div>

                {/* Features Grid - Modern Layout */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="card-modern h-full border border-slate-100 hover:border-emerald-200">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {feature.description}
                                    </p>

                                    {/* Stat Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full text-sm font-semibold text-slate-700">
                                        {feature.stat}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Benefits Bar */}
                <motion.div
                    className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {[
                        { emoji: "🥬", text: "Fresh & Organic" },
                        { emoji: "💪", text: "Fitness Focused" },
                        { emoji: "🌱", text: "Sustainable" },
                        { emoji: "⏱️", text: "Time Saving" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300"
                        >
                            <span className="text-3xl">{item.emoji}</span>
                            <span className="font-bold text-slate-900">{item.text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
