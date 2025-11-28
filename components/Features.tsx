import React from 'react';
import { Leaf, Heart, Globe } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Leaf,
            title: "Smart Inventory",
            description: "Track fresh ingredients and get personalized recipe suggestions",
            stat: "90% less waste",
            color: "emerald"
        },
        {
            icon: Heart,
            title: "Nutrition First",
            description: "Every meal plan is balanced and tailored to your health goals",
            stat: "100% nutritionist-approved",
            color: "rose"
        },
        {
            icon: Globe,
            title: "Global Flavors",
            description: "Explore healthy dishes from cuisines around the world",
            stat: "80+ cuisines",
            color: "teal"
        }
    ];

    const benefits = [
        { emoji: "🥬", label: "Fresh & Organic" },
        { emoji: "💪", label: "Fitness Focused" },
        { emoji: "🌱", label: "Sustainable" },
        { emoji: "⏱️", label: "Time Saving" }
    ];

    return (
        <div className="py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Why Choose <span className="text-emerald-600">GlobalEats</span>?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        The smartest way to eat healthy, reduce waste, and explore world cuisines
                    </p>
                </div>

                {/* Main Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={i}
                                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 mb-4">{feature.description}</p>
                                <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                                    {feature.stat}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl mb-3">{benefit.emoji}</div>
                                <div className="text-white font-semibold">{benefit.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;