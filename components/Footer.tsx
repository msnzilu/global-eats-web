import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-4">GlobalEats</h3>
                        <p className="text-sm text-slate-400">
                            Eat Global. Waste Less. Live Better.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Recipes</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Meal Plans</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
                    <p>© 2024 GlobalEats. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;