'use client';

import React, { useState, useEffect } from 'react';
{ name: "Green Curry", cal: "480 cal", emoji: "🍛" }
    ];

return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">🥬</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-pulse">🥑</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>🍅</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-8 border border-emerald-100">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-slate-700">Join 100K+ healthy eaters</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight">
                    Eat Global.<br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Waste Less.</span><br />
                    Live Better.
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
                    Discover nutritious recipes from 80+ countries while minimizing food waste and achieving your health goals.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-600">50K+</div>
                        <div className="text-sm text-slate-600">Recipes</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-3xl font-bold text-emerald-600">4.9</span>
                            <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                        </div>
                        <div className="text-sm text-slate-600">Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-600">100K+</div>
                        <div className="text-sm text-slate-600">Users</div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <Apple className="w-5 h-5" />
                        Download on App Store
                    </button>
                    <button className="group px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 border border-slate-200">
                        <Download className="w-5 h-5" />
                        Get it on Google Play
                    </button>
                </div>

                {/* Floating Food Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {foodCards.map((food, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-4 shadow-xl border border-slate-100 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="text-4xl mb-2">{food.emoji}</div>
                            <div className="font-semibold text-slate-800 text-sm">{food.name}</div>
                            <div className="text-xs text-emerald-600 font-medium">{food.cal}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
}