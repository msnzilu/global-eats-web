import React from 'react';
import { Salad, Utensils, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Salad,
            title: "Add Your Ingredients",
            description: "Tell us what's in your fridge and pantry",
            step: "01"
        },
        {
            icon: Utensils,
            title: "Choose Your Goals",
            description: "Select dietary preferences and health objectives",
            step: "02"
        },
        {
            icon: CheckCircle,
            title: "Get Healthy Meals",
            description: "Receive personalized meal plans and recipes",
            step: "03"
        }
    ];

    return (
        <div id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        How It <span className="text-emerald-600">Works</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        Get started in just 3 simple steps
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div key={i} className="relative">
                                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-slate-100 hover:border-emerald-200">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                        {step.step}
                                    </div>
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600">{step.description}</p>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-300 text-4xl">
                                        →
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