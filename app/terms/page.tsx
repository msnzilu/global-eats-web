'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
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
                        Terms of Service
                    </h1>
                    <p className="text-slate-600 mb-8">
                        <strong>Effective Date:</strong> December 5, 2024
                    </p>

                    <div className="prose prose-slate max-w-none">
                        {/* Introduction */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
                            <p className="text-slate-700 mb-4">
                                Welcome to Prepzi! These Terms of Service ("Terms") govern your access to and use of the Prepzi mobile application and website (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms.
                            </p>
                            <p className="text-slate-700">
                                If you do not agree to these Terms, you may not access or use the Service. We reserve the right to modify these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.
                            </p>
                        </section>

                        {/* Eligibility */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
                            <p className="text-slate-700 mb-4">
                                You must be at least 13 years old to use our Service. By using the Service, you represent and warrant that:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li>You are at least 13 years of age</li>
                                <li>You have the legal capacity to enter into these Terms</li>
                                <li>You will comply with these Terms and all applicable laws and regulations</li>
                                <li>All information you provide is accurate and current</li>
                            </ul>
                        </section>

                        {/* Account Registration */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Account Registration and Security</h2>
                            <p className="text-slate-700 mb-4">
                                To access certain features of the Service, you may be required to create an account. You agree to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li>Provide accurate, current, and complete information during registration</li>
                                <li>Maintain and promptly update your account information</li>
                                <li>Maintain the security of your password and account</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                                <li>Accept responsibility for all activities that occur under your account</li>
                            </ul>
                            <p className="text-slate-700">
                                We reserve the right to suspend or terminate your account if any information provided is inaccurate, false, or violates these Terms.
                            </p>
                        </section>

                        {/* Subscriptions and Payments */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Subscriptions and Payments</h2>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.1 Subscription Plans</h3>
                            <p className="text-slate-700 mb-4">
                                Prepzi offers both free and premium subscription plans. Premium features may include AI-powered recipe generation, advanced meal planning, and ad-free experience. Subscription fees are charged on a recurring basis (monthly or annually) as selected during purchase.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.2 Payment Processing</h3>
                            <p className="text-slate-700 mb-4">
                                Payments are processed through third-party payment processors (Apple App Store, Google Play Store). By subscribing, you authorize us to charge your payment method for the subscription fees and any applicable taxes.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.3 Automatic Renewal</h3>
                            <p className="text-slate-700 mb-4">
                                Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date. You may cancel your subscription at any time through your account settings or the respective app store.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.4 Refunds</h3>
                            <p className="text-slate-700">
                                All subscription fees are non-refundable except as required by law. If you cancel your subscription, you will continue to have access to premium features until the end of your current billing period.
                            </p>
                        </section>

                        {/* User Content */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Content and Conduct</h2>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.1 Your Content</h3>
                            <p className="text-slate-700 mb-4">
                                You may submit, upload, or share content through the Service, including recipes, reviews, and inventory data ("User Content"). You retain ownership of your User Content, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display your User Content in connection with operating and improving the Service.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.2 Prohibited Conduct</h3>
                            <p className="text-slate-700 mb-4">You agree not to:</p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on the intellectual property rights of others</li>
                                <li>Upload harmful, offensive, or inappropriate content</li>
                                <li>Attempt to gain unauthorized access to the Service or other users' accounts</li>
                                <li>Use the Service for commercial purposes without our permission</li>
                                <li>Interfere with or disrupt the Service or servers</li>
                                <li>Use automated systems (bots, scrapers) to access the Service</li>
                                <li>Impersonate any person or entity</li>
                            </ul>
                        </section>

                        {/* Intellectual Property */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property Rights</h2>
                            <p className="text-slate-700 mb-4">
                                The Service and its original content (excluding User Content), features, and functionality are owned by Prepzi and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                            </p>
                            <p className="text-slate-700 mb-4">
                                Our trademarks, logos, and service marks ("Marks") may not be used without our prior written permission. All other trademarks, product names, and company names mentioned in the Service are the property of their respective owners.
                            </p>
                            <p className="text-slate-700">
                                You may not copy, modify, distribute, sell, or lease any part of our Service without our express written permission.
                            </p>
                        </section>

                        {/* Third-Party Services */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Services and Links</h2>
                            <p className="text-slate-700 mb-4">
                                The Service may contain links to third-party websites or services that are not owned or controlled by Prepzi. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                            </p>
                            <p className="text-slate-700">
                                You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services.
                            </p>
                        </section>

                        {/* Disclaimers */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Disclaimers</h2>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">8.1 Health and Nutrition Information</h3>
                            <p className="text-slate-700 mb-4">
                                The nutritional information, recipes, and meal plans provided through the Service are for informational purposes only and are not intended as medical advice. Always consult with a qualified healthcare professional before making dietary changes, especially if you have allergies, medical conditions, or specific dietary requirements.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">8.2 Service Availability</h3>
                            <p className="text-slate-700 mb-4">
                                The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">8.3 AI-Generated Content</h3>
                            <p className="text-slate-700">
                                Some recipes and meal plans may be generated using artificial intelligence. While we strive for accuracy, AI-generated content may contain errors or inaccuracies. Always verify nutritional information and cooking instructions before use.
                            </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
                            <p className="text-slate-700 mb-4">
                                To the maximum extent permitted by law, Prepzi and its affiliates, officers, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising from:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li>Your use or inability to use the Service</li>
                                <li>Any unauthorized access to or use of our servers and/or personal information</li>
                                <li>Any interruption or cessation of transmission to or from the Service</li>
                                <li>Any bugs, viruses, or harmful code transmitted through the Service</li>
                                <li>Any errors or omissions in content or for any loss or damage incurred from use of content</li>
                            </ul>
                            <p className="text-slate-700">
                                Our total liability to you for all claims arising from or relating to the Service shall not exceed the amount you paid us in the 12 months preceding the claim, or $100, whichever is greater.
                            </p>
                        </section>

                        {/* Indemnification */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Indemnification</h2>
                            <p className="text-slate-700">
                                You agree to indemnify, defend, and hold harmless Prepzi and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Service, your User Content, or your violation of these Terms.
                            </p>
                        </section>

                        {/* Termination */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Termination</h2>
                            <p className="text-slate-700 mb-4">
                                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
                            </p>
                            <p className="text-slate-700">
                                You may terminate your account at any time by contacting us or through your account settings. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Governing Law and Dispute Resolution</h2>
                            <p className="text-slate-700 mb-4">
                                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Prepzi operates, without regard to its conflict of law provisions.
                            </p>
                            <p className="text-slate-700">
                                Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration, except that either party may seek injunctive relief in court for intellectual property infringement or other urgent matters.
                            </p>
                        </section>

                        {/* Changes to Terms */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to Terms</h2>
                            <p className="text-slate-700">
                                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or through a notice on the Service. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.
                            </p>
                        </section>

                        {/* Severability */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Severability</h2>
                            <p className="text-slate-700">
                                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Contact Information</h2>
                            <p className="text-slate-700 mb-4">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <ul className="list-none text-slate-700 space-y-2">
                                <li><strong>Email:</strong> <a href="mailto:legal@prepzi.com" className="text-emerald-600 hover:text-emerald-700">legal@prepzi.com</a></li>
                                <li><strong>Website:</strong> <a href="https://prepzi.com" className="text-emerald-600 hover:text-emerald-700">prepzi.com</a></li>
                            </ul>
                        </section>

                        {/* Acknowledgment */}
                        <section className="mb-8">
                            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
                                <p className="text-slate-700 font-semibold">
                                    By using Prepzi, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                                </p>
                            </div>
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
