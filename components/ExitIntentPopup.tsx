'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

export default function ExitIntentPopup() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);

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

    return (
        <AnimatePresence>
            {show && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleDismiss}
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={handleDismiss}
                            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="bg-emerald-600 p-12 text-center text-white relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-black/10 skew-y-6 transform translate-y-1/2"></div>
                            <Gift className="w-20 h-20 mx-auto mb-6 relative z-10" />
                            <h2 className="text-3xl font-bold mb-4 relative z-10">Wait! Don&apos;t Leave Empty-Handed</h2>
                            <p className="text-emerald-100 text-lg relative z-10">See how much money you&apos;re wasting on groceries before you go.</p>
                        </div>

                        <div className="p-12 text-center">
                            <p className="text-slate-600 mb-8 leading-relaxed">Join 100,000+ users saving an average of <span className="text-emerald-600 font-bold">$40/week</span> on food waste.</p>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.prepzi.app&pcampaignid=web_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleDismiss}
                                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 mb-4"
                            >
                                Use My Free Savings Calculator <ArrowRight className="w-5 h-5" />
                            </a>

                            <p className="text-xs text-slate-400">No credit card required. Cancel anytime.</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
