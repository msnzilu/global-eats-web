"use client";

import { motion } from "framer-motion";
import { Heart, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const footerLinks = {
    product: [
        { name: "Features", href: "#features" },
        { name: "Healthy Recipes", href: "#" },
        { name: "Nutrition Plans", href: "#" },
        { name: "FAQ", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Health Blog", href: "#" },
        { name: "Nutritionists", href: "#" },
        { name: "Contact", href: "#" },
    ],
    legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
    ],
};

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-white relative overflow-hidden">
            {/* Organic Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3
                                className="text-4xl font-bold mb-4 text-gradient-healthy"
                                style={{ fontFamily: 'var(--font-outfit)' }}
                            >
                                GlobalEats
                            </h3>
                            <p className="text-gray-300 mb-8 max-w-sm leading-relaxed text-lg">
                                Your partner in healthy eating. Transform your fridge into nutritious, delicious meals from around the world.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-12 h-12 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-600 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Product Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="font-bold text-xl mb-6 text-white">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-base"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="font-bold text-xl mb-6 text-white">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-base"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="font-bold text-xl mb-6 text-white">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-base"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-gray-400 text-base text-center md:text-left">
                        © {new Date().getFullYear()} GlobalEats. Empowering healthy eating worldwide.
                    </p>

                    <p className="text-gray-400 text-base flex items-center gap-2">
                        Made with <Heart className="w-5 h-5 text-emerald-500 fill-current" /> for your health
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
