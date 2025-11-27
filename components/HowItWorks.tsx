"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Salad, UtensilsCrossed, ListChecks, ArrowRight } from "lucide-react";

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const steps = [
        {
            icon: Salad,
            title: "Add Your Ingredients",
            description: "Tell us what fresh ingredients you have in your fridge",
            color: "emerald",
        },
        {
            icon: UtensilsCrossed,
            title: "Choose Your Goals",
            description: "Select your dietary preferences and health objectives",
            color: "teal",
        },
        {
            icon: ListChecks,
            title: "Get Healthy Meals",
            description: "Receive nutritious, personalized meal plans instantly",
            color: "green",
        },
    ];

    const colorMap: Record<string, { gradient: string; bg: string; text: string }> = {
        emerald: {
            gradient: "from-emerald-500 to-green-600",
            bg: "bg-emerald-100",
            text: "text-emerald-600",
        },
        teal: {
            gradient: "from-teal-500 to-cyan-600",
            bg: "bg-teal-100",
            text: "text-teal-600",
        },
        green: {
            gradient: "from-green-500 to-emerald-600",
            bg: "bg-green-100",
            text: "text-green-600",
        },
    };

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-emerald-50/20">
            <div className="container-modern max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                        Your Path to{" "}
                        <span className="text-gradient-healthy">Healthier Eating</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-stone-600 max-w-3xl mx-auto">
                        Start your wellness journey in three simple steps
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) - Improved positioning and opacity */}
                    <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 opacity-40 z-0" />

                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const colors = colorMap[step.color];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative flex flex-col items-center text-center"
                                >
                                    {/* Step Number - Positioned better for overlap */}
                                    <motion.div
                                        className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg z-20`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {index + 1}
                                    </motion.div>

                                    {/* Icon Container - Added subtle ring on hover */}
                                    <motion.div
                                        className={`relative w-40 h-40 rounded-3xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-6 shadow-xl z-10`}
                                        whileHover={{
                                            scale: 1.05,
                                            rotate: 3,
                                            boxShadow: `0 20px 40px rgba(16, 185, 129, 0.3)` // Dynamic shadow based on color
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="absolute inset-2 bg-white rounded-2xl flex items-center justify-center shadow-inner">
                                            <Icon className={`w-16 h-16 ${colors.text}`} strokeWidth={2} />
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        className="text-2xl font-bold text-stone-900 mb-3"
                                        style={{ fontFamily: 'var(--font-outfit)' }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: (index * 0.2) + 0.3 }}
                                    >
                                        {step.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        className="text-stone-600 leading-relaxed max-w-xs text-lg"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: (index * 0.2) + 0.4 }}
                                    >
                                        {step.description}
                                    </motion.p>

                                    {/* Arrow (Desktop) - Improved positioning and animation */}
                                    {index < steps.length - 1 && (
                                        <motion.div
                                            className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-emerald-400 text-2xl"
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: (index * 0.2) + 0.5 }}
                                        >
                                            <ArrowRight className="w-6 h-6" />
                                        </motion.div>
                                    )}

                                    {/* Arrow (Mobile) - Stacked vertically with rotation */}
                                    {index < steps.length - 1 && (
                                        <motion.div
                                            className="lg:hidden flex justify-center my-8 text-emerald-400 text-2xl rotate-90"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.5, delay: (index * 0.2) + 0.5 }}
                                        >
                                            <ArrowRight className="w-6 h-6" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA - Enhanced with better spacing and icon */}
                <motion.div
                    className="text-center mt-20 lg:mt-32"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="text-lg text-stone-600 mb-6 max-w-2xl mx-auto">
                        Join the healthy eating revolution today
                    </p>
                    <motion.button
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Start Eating Healthier</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}