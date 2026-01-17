'use client';

import React from 'react';
import { Leaf, Heart, Globe, TrendingDown, Target } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Leaf,
            title: "Keep Money in Your Pocket",
            description: "Stop throwing away food you bought. Our smart inventory tells you exactly what to cook before it spoils.",
            stat: "Keep $40/month instead of your trash",
            color: "emerald"
        },
        {
            icon: Target,
            title: "Zero Guesswork",
            description: "Every meal is scientifically balanced. No more wondering if you're eating the right calories or macros.",
            stat: "Scientifically Balanced",
            color: "orange"
        },
        {
            icon: Globe,
            title: "Never Get Bored",
            description: "Access 50,000+ recipes from 80+ countries. Eat healthy without ever eating the same thing twice.",
            stat: "50,000+ Global Recipes",
            color: "teal"
        }
    ];

    const benefits = [
        { emoji: "🥬", label: "90% Less Waste" },
        { emoji: "💍", label: "Premium Access" },
        { emoji: "🌱", label: "Eco-Friendly" },
        { emoji: "⏱️", label: "60s Setup" }
    ];

    return (
        <div className="py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-4">
                        <Heart className="w-4 h-4 fill-emerald-700" />
                        Recommended by 500+ dietitians
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                        Outcome-Focused <span className="text-emerald-600">Health</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        Stop focusing on features. Start focusing on the version of you that saves more, wastes less, and feels better every single day.
                    </p>
                </div>

                {/* Main Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={i}
                                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-[2rem] border-2 border-slate-100 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl"
                            >
                                <div className={`w-16 h-16 bg-${feature.color}-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-${feature.color}-500/20`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                                <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold">
                                    {feature.stat}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Banner */}
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl mb-3">{benefit.emoji}</div>
                                <div className="text-white font-bold tracking-tight uppercase text-sm">{benefit.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;