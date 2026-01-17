'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Trash2, PiggyBank, ArrowRight } from 'lucide-react';

export default function WasteCalculator() {
    const [weeklyWaste, setWeeklyWaste] = useState(40);
    const yearlyWaste = weeklyWaste * 52;
    const savingsWithPrepzi = Math.round(yearlyWaste * 0.9);

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 skew-x-12 transform translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            How Much Money Are You <br />
                            <span className="text-emerald-500">Throwing in the Trash?</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-12 max-w-lg">
                            Most families waste $1,500+ every year on groceries they never eat. Use our calculator to see your potential savings.
                        </p>

                        <div className="space-y-8">
                            <div className="p-8 bg-slate-800/50 rounded-3xl border border-slate-700">
                                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                                    Weekly Grocery Waste ($)
                                </label>
                                <input
                                    type="range"
                                    min="10"
                                    max="200"
                                    step="5"
                                    value={weeklyWaste}
                                    onChange={(e) => setWeeklyWaste(parseInt(e.target.value))}
                                    className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-6"
                                />
                                <div className="flex justify-between text-2xl font-bold">
                                    <span>$10</span>
                                    <span className="text-emerald-500 text-4xl">${weeklyWaste}</span>
                                    <span>$200</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1 p-6 bg-red-500/10 rounded-2xl border border-red-500/20">
                                    <Trash2 className="w-6 h-6 text-red-500 mb-2" />
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Yearly Waste</p>
                                    <p className="text-2xl font-bold">${yearlyWaste}</p>
                                </div>
                                <div className="flex-1 p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                                    <PiggyBank className="w-6 h-6 text-emerald-500 mb-2" />
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Yearly Savings</p>
                                    <p className="text-2xl font-bold">${savingsWithPrepzi}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-gradient-to-br from-emerald-600 to-teal-700 p-12 rounded-[3rem] shadow-2xl text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

                            <h3 className="text-3xl font-bold mb-4 relative z-10">Your Potential Impact</h3>
                            <p className="text-emerald-100 mb-8 relative z-10">With Prepzi, you could save enough this year to pay for:</p>

                            <div className="space-y-4 mb-12 relative z-10">
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-between">
                                    <span className="text-lg">🌴 A Weekend Getaway</span>
                                    <span className="font-bold underline">Covered</span>
                                </div>
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-between">
                                    <span className="text-lg">📱 New Smartphone</span>
                                    <span className="font-bold underline">Covered</span>
                                </div>
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-between">
                                    <span className="text-lg">👟 5 Pairs of Sneakers</span>
                                    <span className="font-bold underline">Covered</span>
                                </div>
                            </div>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.prepzi.app&pcampaignid=web_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-5 bg-white text-emerald-700 rounded-2xl font-bold text-xl shadow-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 relative z-10">
                                Start Saving Now <ArrowRight className="w-6 h-6" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
