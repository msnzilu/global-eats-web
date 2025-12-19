import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h3 className="text-white font-bold text-2xl mb-3">Prepzi</h3>
                    <p className="text-slate-400 mb-6">
                        Eat Healthy. Waste Less. Live Better.
                    </p>
                    <div className="flex justify-center gap-6 text-sm">
                        <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                        <span className="text-slate-600">•</span>
                        <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
                        <span className="text-slate-600">•</span>
                        <Link href="/cookie-policy" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
                    <p>©2024 Prepzi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;