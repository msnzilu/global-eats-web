'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Apple, Flame, Clock, Heart } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "How often do you cook at home?",
        options: [
            { text: "Every day", icon: <Apple className="w-5 h-5" /> },
            { text: "3-4 times a week", icon: <Flame className="w-5 h-5" /> },
            { text: "Rarely", icon: <Clock className="w-5 h-5" /> }
        ]
    },
    {
        id: 2,
        question: "What's your main health goal?",
        options: [
            { text: "Weight Loss", icon: <Heart className="w-5 h-5 text-red-500" /> },
            { text: "Muscle Gain", icon: <Flame className="w-5 h-5 text-orange-500" /> },
            { text: "Better Energy", icon: <Apple className="w-5 h-5 text-emerald-500" /> }
        ]
    }
];

export default function EatingStyleQuiz() {
    const [step, setStep] = useState(0); // 0: Start, 1-N: Questions, N+1: Result
    const [selections, setSelections] = useState<string[]>([]);

    const handleNext = (option: string) => {
        setSelections([...selections, option]);
        setStep(step + 1);
    };

    return (
        <section className="py-24 bg-emerald-50 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-emerald-100">
                    <div className="p-12 md:p-16 text-center">
                        <AnimatePresence mode="wait">
                            {step === 0 && (
                                <motion.div
                                    key="start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Apple className="w-10 h-10 text-emerald-600" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-slate-900 mb-4">What&apos;s Your Eating Style?</h2>
                                    <p className="text-xl text-slate-600 mb-12">Take our 60-second quiz to get your personalized meal strategy.</p>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="px-12 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 mx-auto"
                                    >
                                        Start Quiz <ChevronRight className="w-6 h-6" />
                                    </button>
                                </motion.div>
                            )}

                            {step > 0 && step <= questions.length && (
                                <motion.div
                                    key={`q-${step}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                >
                                    <p className="text-emerald-600 font-bold uppercase tracking-widest mb-4">Question {step} of {questions.length}</p>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-12">{questions[step - 1].question}</h2>
                                    <div className="grid gap-4 max-w-lg mx-auto">
                                        {questions[step - 1].options.map((option) => (
                                            <button
                                                key={option.text}
                                                onClick={() => handleNext(option.text)}
                                                className="p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl text-left font-bold text-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all flex items-center gap-4 group"
                                            >
                                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                    {option.icon}
                                                </div>
                                                {option.text}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step > questions.length && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Check className="w-12 h-12 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Analysis Complete!</h2>
                                    <p className="text-xl text-slate-600 mb-12">We&apos;ve designed a <span className="text-emerald-600 font-bold">Global Explorer</span> plan tailored for your {selections[1]} goal.</p>
                                    <div className="bg-slate-50 p-8 rounded-3xl mb-12 text-left">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                            <p className="text-slate-700">Recommended: <span className="font-bold">Mediterranean & Asian Fusion</span></p>
                                        </div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                            <p className="text-slate-700">Estimated Cost Savings: <span className="font-bold">$120/month</span></p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                            <p className="text-slate-700">Calorie Target: <span className="font-bold">1,850 kcal/day</span></p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.prepzi.app&pcampaignid=web_share"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-3"
                                    >
                                        Get Your Full Meal Plan Free
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
