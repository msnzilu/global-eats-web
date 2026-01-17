'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight, Trash2, PiggyBank, RefreshCw } from 'lucide-react';

export default function ExitIntentPopup() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [mode, setMode] = useState<'offer' | 'calc'>('offer'); // 'offer' or 'calc'
    const [weeklyWaste, setWeeklyWaste] = useState(40);

    const yearlyWaste = weeklyWaste * 52;
    const savings = Math.round(yearlyWaste * 0.9);

    useEffect(() => {
        const handleMouseOut = (e: MouseEvent) => {
            if (e.clientY <= 0 && !dismissed) {
                setShow(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseOut);
        return () => document.removeEventListener('mouseleave', handleMouseOut);
    }, [dismissed]);

    const handleDismiss = () => {
        setShow(false);
        setDismissed(true);
    };

    const startCalculating = (e: React.MouseEvent) => {
        e.stopPropagation();
        setMode('calc');
    };

    return (
        <AnimatePresence>
            {show && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleDismiss}
                        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleDismiss}
                            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors z-[1001]"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <AnimatePresence mode="wait">
                            {mode === 'offer' ? (
                                <motion.div
                                    key="offer-screen"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <div className="bg-emerald-600 p-12 text-center text-white relative">
                                        <div className="absolute top-0 left-0 w-full h-full bg-black/10 skew-y-3 transform translate-y-1/2"></div>
                                        <Gift className="w-20 h-20 mx-auto mb-6 relative z-10" />
                                        <h2 className="text-3xl font-bold mb-4 relative z-10">Wait! Don&apos;t Leave Empty-Handed</h2>
                                        <p className="text-emerald-100 text-lg relative z-10">See how much money you&apos;re wasting on groceries before you go.</p>
                                    </div>

                                    <div className="p-12 text-center">
                                        <p className="text-slate-600 mb-8 leading-relaxed font-medium">Join 100,000+ users saving an average of <span className="text-emerald-600 font-bold">$40/week</span> on food waste.</p>

                                        <button
                                            onClick={startCalculating}
                                            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 mb-4 cursor-pointer active:scale-95"
                                        >
                                            Use My Free Savings Calculator <ArrowRight className="w-5 h-5 flex-shrink-0" />
                                        </button>

                                        <p className="text-xs text-slate-400 font-medium">It takes less than 30 seconds.</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="calc-screen"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="p-10"
                                >
                                    <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-2">
                                        <Trash2 className="w-6 h-6 text-emerald-600" />
                                        Savings Calculator
                                    </h2>

                                    <div className="space-y-8 mb-10">
                                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Weekly Waste ($)</label>
                                                <span className="text-3xl font-black text-emerald-600">${weeklyWaste}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="10"
                                                max="200"
                                                step="5"
                                                value={weeklyWaste}
                                                onChange={(e) => setWeeklyWaste(parseInt(e.target.value))}
                                                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-5 bg-red-50 rounded-2xl border border-red-100">
                                                <p className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Yearly Loss</p>
                                                <p className="text-xl font-black text-red-600">${yearlyWaste}</p>
                                            </div>
                                            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                                                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Your Savings</p>
                                                <p className="text-xl font-black text-emerald-600">${savings}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.prepzi.app&pcampaignid=web_share"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-emerald-500 transition-all flex items-center justify-center gap-3"
                                        >
                                            Save My ${savings} Now <ArrowRight className="w-5 h-5 font-bold" />
                                        </a>
                                        <button
                                            onClick={() => setMode('offer')}
                                            className="w-full py-3 text-slate-400 font-bold hover:text-slate-600 transition-colors flex items-center justify-center gap-2 text-sm"
                                        >
                                            <RefreshCw className="w-4 h-4" /> Go Back
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
