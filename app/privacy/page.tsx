'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-semibold">Back to Home</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Privacy Policy
                    </h1>
                    <p className="text-slate-600 mb-8">
                        <strong>Effective Date:</strong> December 5, 2024
                    </p>

                    <div className="prose prose-slate max-w-none">
                        {/* Introduction */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                            <p className="text-slate-700 mb-4">
                                Welcome to Prepzi ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
                            </p>
                            <p className="text-slate-700">
                                By using Prepzi, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Personal Information</h3>
                            <p className="text-slate-700 mb-4">We may collect the following personal information:</p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li>Name and email address (when you create an account)</li>
                                <li>Profile information (dietary preferences, health goals, allergies)</li>
                                <li>Payment information (processed securely through third-party payment processors)</li>
                                <li>Communication data (when you contact our support team)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Usage Data</h3>
                            <p className="text-slate-700 mb-4">We automatically collect certain information when you use our Service:</p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li>Device information (device type, operating system, unique device identifiers)</li>
                                <li>Log data (IP address, browser type, pages visited, time spent)</li>
                                <li>Recipe interactions (recipes viewed, saved, or cooked)</li>
                                <li>Inventory data (ingredients you track in the app)</li>
                                <li>Analytics data (app usage patterns, feature engagement)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.3 Cookies and Tracking Technologies</h3>
                            <p className="text-slate-700">
                                We use cookies, beacons, and similar tracking technologies to track activity on our Service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>
                        </section>

                        {/* How We Use Your Information */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
                            <p className="text-slate-700 mb-4">We use the collected information for various purposes:</p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li>To provide, maintain, and improve our Service</li>
                                <li>To personalize your experience and provide tailored recipe recommendations</li>
                                <li>To process your transactions and manage subscriptions</li>
                                <li>To send you notifications, updates, and marketing communications (with your consent)</li>
                                <li>To respond to your inquiries and provide customer support</li>
                                <li>To monitor and analyze usage patterns and trends</li>
                                <li>To detect, prevent, and address technical issues and security threats</li>
                                <li>To comply with legal obligations and enforce our Terms of Service</li>
                            </ul>
                        </section>

                        {/* Information Sharing */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Information Sharing and Disclosure</h2>
                            <p className="text-slate-700 mb-4">We may share your information in the following circumstances:</p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.1 Service Providers</h3>
                            <p className="text-slate-700 mb-4">
                                We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.2 Legal Requirements</h3>
                            <p className="text-slate-700 mb-4">
                                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, government agencies).
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.3 Business Transfers</h3>
                            <p className="text-slate-700">
                                If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
                            </p>
                        </section>

                        {/* Data Security */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
                            <p className="text-slate-700">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Privacy Rights</h2>
                            <p className="text-slate-700 mb-4">Depending on your location, you may have the following rights:</p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li><strong>Access:</strong> Request access to your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
                                <li><strong>Opt-out:</strong> Opt-out of marketing communications at any time</li>
                                <li><strong>Withdraw consent:</strong> Withdraw consent where we rely on consent to process your data</li>
                            </ul>
                            <p className="text-slate-700">
                                To exercise these rights, please contact us at <a href="mailto:privacy@prepzi.com" className="text-emerald-600 hover:text-emerald-700">privacy@prepzi.com</a>.
                            </p>
                        </section>

                        {/* Data Retention */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
                            <p className="text-slate-700">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Children's Privacy</h2>
                            <p className="text-slate-700">
                                Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
                            </p>
                        </section>

                        {/* International Transfers */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. International Data Transfers</h2>
                            <p className="text-slate-700">
                                Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our Service, you consent to such transfers.
                            </p>
                        </section>

                        {/* Changes to Policy */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
                            <p className="text-slate-700">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                            <p className="text-slate-700 mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <ul className="list-none text-slate-700 space-y-2">
                                <li><strong>Email:</strong> <a href="mailto:privacy@prepzi.com" className="text-emerald-600 hover:text-emerald-700">privacy@prepzi.com</a></li>
                                <li><strong>Website:</strong> <a href="https://prepzi.com" className="text-emerald-600 hover:text-emerald-700">prepzi.com</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-8 mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm">© 2024 Prepzi. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
