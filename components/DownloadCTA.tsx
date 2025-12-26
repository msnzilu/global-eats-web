import React from 'react';
import { Apple, Download } from 'lucide-react';

const DownloadCTA = () => {
    return (
        <div id="pricing" className="py-24 bg-gradient-to-br from-emerald-600 to-teal-600 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-10 left-10 text-6xl opacity-10">🥗</div>
            <div className="absolute bottom-10 right-10 text-6xl opacity-10">🍜</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Ready to Start Your<br />Healthy Journey?
                </h2>
                <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto">
                    Join 100,000+ users who are eating better, wasting less, and living healthier lives with Prepzi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* <a 
                        href="https://apps.apple.com/app/your-app-id" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 no-underline"
                    >
                        <Apple className="w-5 h-5" />
                        Download on App Store
                    </a> */}
                    <a
                        href="https://play.google.com/apps/testing/com.prepzi.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-3 bg-white text-slate-900 rounded-xl font-medium shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 no-underline"
                    >
                        <svg viewBox="0 0 512 512" className="w-8 h-8">
                            <path d="M7,29.9c-0.2,0.7-0.3,1.6-0.3,2.7v446.8c0,1.1,0.1,2,0.3,2.7l0.1,0.1L256,256L7.1,29.8L7,29.9z" fill="#4285F4" />
                            <path d="M331.6,331.9L256,256L7.1,504.9c0.8,0.7,2.1,0.8,3.5,0.1l321-173.1L331.6,331.9z" fill="#34A853" />
                            <path d="M504.6,229l-88.7-47.8l-84.3,84.3l84.3,84.3l88.7-47.8c10.4-5.6,10.4-14.8,0-20.4C504.6,237.5,504.6,229,504.6,229z" fill="#FBBC05" />
                            <path d="M331.6,180.1L10.6,7.1c-1.4-0.7-2.7-0.6-3.5,0.1L256,256L331.6,180.1z" fill="#EA4335" />
                        </svg>
                        <div className="text-left">
                            <div className="text-[10px] uppercase tracking-tighter leading-none mb-0.5 font-bold text-slate-500">GET IT ON</div>
                            <div className="text-xl leading-none font-bold">Google Play</div>
                        </div>
                    </a>
                </div>

                <div className="mt-12 text-emerald-50 text-sm">
                    Free to download • No credit card required • Start in 2 minutes
                </div>
            </div>
        </div>
    );
};

export default DownloadCTA;