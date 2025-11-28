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
                    Join 100,000+ users who are eating better, wasting less, and living healthier lives with GlobalEats.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <Apple className="w-5 h-5" />
                        Download on App Store
                    </button>
                    <button className="group px-8 py-4 bg-emerald-800 text-white rounded-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-emerald-700">
                        <Download className="w-5 h-5" />
                        Get it on Google Play
                    </button>
                </div>

                <div className="mt-12 text-emerald-50 text-sm">
                    Free to download • No credit card required • Start in 2 minutes
                </div>
            </div>
        </div>
    );
};

export default DownloadCTA;