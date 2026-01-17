'use client';

import React from 'react';
import { Smartphone, Target, ChefHat, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Smartphone,
            title: "Download",
            description: "Install Prepzi on iOS or Android in seconds.",
            step: "01"
        },
        {
            icon: Target,
            title: "Pick 3 Cuisines",
            description: "Choose what you love: Mediterranean, Japanese, Thai...",
            step: "02"
        },
        {
            icon: ChefHat,
            title: "Get Meal Plan",
            description: "Receive your scientifically balanced plan in 60 seconds.",
            step: "03"
        }
    ];

    return (
        <div id="how-it-works" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                        Done in <span className="text-emerald-600">60 Seconds</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium">
                        Stop overcomplicating healthy eating. It&apos;s really this simple.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div key={i} className="relative group p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-emerald-200 transition-all duration-300">
                                <div className="absolute -top-6 left-8 w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    {step.step}
                                </div>
                                <div className="pt-4">
                                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                                        <Icon className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">{step.description}</p>
                                </div>
                                {i < 2 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-8 h-8 text-emerald-200" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;