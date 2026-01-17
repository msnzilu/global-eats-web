'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Target, Star, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Free",
            monthlyPrice: 0,
            yearlyPrice: 0,
            description: "Perfect for getting started with healthy eating.",
            features: [
                "Up to 7-day meal plans",
                "1 active meal plan at a time",
                "1 AI Recipe Trial",
                "Full recipe library access",
                "Basic inventory tracking",
                "Standard support"
            ],
            buttonText: "Start for Free",
            highlighted: false,
            tier: "free"
        },
        {
            name: "Premium",
            monthlyPrice: 7.99,
            yearlyPrice: 79.99,
            description: "Advanced tools to slash waste and optimize health.",
            features: [
                "Up to 14-day meal plans",
                "5 active meal plans at a time",
                "AI Recipes (20x/month)",
                "AI Ops: Merge/Cleanup (15x/month)",
                "Custom recipe creation (Unlimited)",
                "Priority support"
            ],
            buttonText: "Get Premium",
            highlighted: true,
            stars: true,
            tier: "premium"
        },
        {
            name: "VIP Premium",
            monthlyPrice: 19.99,
            yearlyPrice: 199.99,
            description: "The ultimate white-glove health experience.",
            features: [
                "Unlimited 30-day meal plans",
                "Unlimited active plans",
                "Unlimited AI Magic & Merges",
                "Advanced nutrition analytics",
                "Shopping list sharing",
                "Unlimited AI Recipes & operations",
                "Dedicated VIP support",
                "Everything in Premium"
            ],
            buttonText: "Join VIP",
            highlighted: false,
            tier: "vip"
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                        Investment in <span className="text-emerald-600">You</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-12">
                        Save <span className="text-emerald-600 font-bold">$480/year</span> on wasted food while eating the best meals of your life.
                    </p>

                    {/* Pricing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <span className={`text-lg font-bold ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-16 h-8 bg-slate-200 rounded-full p-1 transition-colors hover:bg-slate-300"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 32 : 0 }}
                                className="w-6 h-6 bg-emerald-600 rounded-full shadow-md"
                            />
                        </button>
                        <span className={`text-lg font-bold ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly</span>
                        <div className="flex flex-col items-start">
                            <span className="ml-2 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-black rounded-full uppercase tracking-tighter shadow-sm animate-pulse">Save 17%</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col p-8 rounded-[3rem] transition-all duration-500 ${plan.highlighted
                                ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10 ring-4 ring-emerald-500/20'
                                : 'bg-white text-slate-900 border border-slate-200 hover:shadow-xl'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
                                    Popular <Star className="w-3 h-3 fill-white" />
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold mb-2`}>{plan.name}</h3>
                                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black">
                                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                    <span className={`text-sm font-bold ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                                        /{isYearly ? 'year' : 'month'}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className={`mt-1 flex-shrink-0 ${plan.highlighted ? 'text-emerald-500' : 'text-emerald-600'}`}>
                                            <Check className="w-5 h-5 stroke-[3px]" />
                                        </div>
                                        <span className={`text-sm font-semibold ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.prepzi.app&pcampaignid=web_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${plan.highlighted
                                    ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                                    : 'bg-slate-900 text-white hover:bg-slate-800'
                                    }`}>
                                {plan.buttonText} <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Savings Callout */}
                <div className="mt-24 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <Target className="w-20 h-20 mx-auto mb-6 relative z-10" />
                    <h2 className="text-4xl font-bold mb-4 relative z-10">Stop the Bleed. Save $480/Year.</h2>
                    <p className="text-emerald-100 text-xl max-w-2xl mx-auto relative z-10 font-medium">
                        Join 100,000+ people who turned their kitchen from a money-pit into a health factory.
                    </p>
                </div>
            </div>
        </section>
    );
}
