import React from 'react';
import { BookOpen, Calendar, ShoppingBag, Package, Utensils, Video } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: BookOpen,
            title: "Find or Create Recipe",
            description: "Search our global recipe list or create your own",
            step: "01"
        },
        {
            icon: Calendar,
            title: "Create Meal Plan",
            description: "Build personalized meal plans using your recipes",
            step: "02"
        },
        {
            icon: ShoppingBag,
            title: "Generate Shopping List",
            description: "Automatically compile needed ingredients from your plan",
            step: "03"
        },
        {
            icon: Package,
            title: "Buy & Add to Inventory",
            description: "Purchase items and track them in your home inventory",
            step: "04"
        },
        {
            icon: Utensils,
            title: "Prepare the Meal",
            description: "Follow the recipe and deduct used ingredients",
            step: "05"
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
                        Get started in just 5 simple steps with Prepzi App
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Steps List Column */}
                    <div className="space-y-8 lg:space-y-10">
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Your 5-Step Journey</h3>
                        <ol className="space-y-6 lg:space-y-8">
                            {steps.map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <li key={i} className="flex items-start space-x-4 lg:space-x-6 group">
                                        <div className="flex-shrink-0 pt-1">
                                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base shadow-md">
                                                {step.step}
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <div className="flex items-center space-x-3 mb-2 lg:mb-3">
                                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center border border-emerald-200 group-hover:bg-emerald-100 transition-colors duration-300">
                                                    <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                                <h4 className="text-lg lg:text-xl font-semibold text-slate-900">{step.title}</h4>
                                            </div>
                                            <p className="text-slate-600 text-sm lg:text-base leading-relaxed">{step.description}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>

                    {/* Video Guide Column */}
                    <div className="lg:pt-0 lg:pl-8">
                        <div className="sticky top-24 lg:top-32 self-start">
                            <div className="text-center mb-6 lg:mb-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Watch Our Quick Tutorial</h3>
                                <p className="text-lg lg:text-xl text-slate-600 max-w-sm mx-auto lg:mx-0 leading-relaxed">
                                    Follow this video guide to see Prepzi App in action and get up and running in minutes.
                                </p>
                            </div>
                            <div className="relative bg-white rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-6 overflow-hidden border border-slate-200">
                                <div className="flex items-center justify-center mb-4 lg:mb-6">
                                    <Video className="w-6 h-6 lg:w-8 lg:h-8 text-emerald-600 mr-2 flex-shrink-0" />
                                    <span className="text-base lg:text-lg font-semibold text-slate-700">Prepzi App Tutorial</span>
                                </div>
                                <div className="aspect-video w-full bg-slate-100 rounded-xl overflow-hidden">
                                    <video
                                        className="w-full h-full object-cover"
                                        src="/tutorial.mp4"
                                        controls
                                        poster="/thumbnail.jpg"
                                        preload="metadata"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;