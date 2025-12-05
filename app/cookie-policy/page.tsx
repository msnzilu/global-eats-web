'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CookiePolicy() {
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
                        Cookie Policy
                    </h1>
                    <p className="text-slate-600 mb-8">
                        <strong>Effective Date:</strong> December 5, 2024
                    </p>

                    <div className="prose prose-slate max-w-none">
                        {/* Introduction */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h2>
                            <p className="text-slate-700 mb-4">
                                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                            </p>
                            <p className="text-slate-700">
                                This Cookie Policy explains how Prepzi ("we," "our," or "us") uses cookies and similar tracking technologies on our website and mobile application (collectively, the "Service").
                            </p>
                        </section>

                        {/* Types of Cookies */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Cookies We Use</h2>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Essential Cookies</h3>
                            <p className="text-slate-700 mb-4">
                                These cookies are necessary for the Service to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li><strong>Authentication cookies:</strong> Keep you logged in to your account</li>
                                <li><strong>Security cookies:</strong> Protect against fraudulent activity and enhance security</li>
                                <li><strong>Session cookies:</strong> Remember your preferences during your browsing session</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Performance and Analytics Cookies</h3>
                            <p className="text-slate-700 mb-4">
                                These cookies help us understand how visitors interact with our Service by collecting and reporting information anonymously. This helps us improve our Service.
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li><strong>Google Analytics:</strong> Tracks page views, user behavior, and traffic sources</li>
                                <li><strong>Performance monitoring:</strong> Identifies technical issues and page load times</li>
                                <li><strong>Usage statistics:</strong> Helps us understand which features are most popular</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.3 Functionality Cookies</h3>
                            <p className="text-slate-700 mb-4">
                                These cookies allow the Service to remember choices you make (such as your language preference or dietary restrictions) and provide enhanced, personalized features.
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                                <li><strong>Personalization cookies:</strong> Customize content based on your interests</li>
                                <li><strong>Language cookies:</strong> Remember your language selection</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.4 Advertising and Marketing Cookies</h3>
                            <p className="text-slate-700 mb-4">
                                These cookies are used to deliver advertisements that are relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li><strong>Targeting cookies:</strong> Track your browsing habits to show relevant ads</li>
                                <li><strong>Social media cookies:</strong> Enable sharing content on social platforms</li>
                                <li><strong>Retargeting cookies:</strong> Show you ads for products you've viewed</li>
                            </ul>
                        </section>

                        {/* Third-Party Cookies */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Third-Party Cookies</h2>
                            <p className="text-slate-700 mb-4">
                                We may use third-party service providers who set cookies on our Service. These third parties include:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                                <li><strong>Firebase:</strong> For authentication and app functionality</li>
                                <li><strong>Payment processors:</strong> For secure payment processing (Apple Pay, Google Pay)</li>
                                <li><strong>Social media platforms:</strong> For social sharing features</li>
                                <li><strong>Advertising networks:</strong> For targeted advertising</li>
                            </ul>
                            <p className="text-slate-700">
                                These third parties have their own privacy policies, and we have no control over their cookies. We recommend reviewing their privacy policies for more information.
                            </p>
                        </section>

                        {/* Cookie Duration */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How Long Do Cookies Last?</h2>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.1 Session Cookies</h3>
                            <p className="text-slate-700 mb-4">
                                These are temporary cookies that expire when you close your browser. They are used to maintain your session while you navigate through the Service.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.2 Persistent Cookies</h3>
                            <p className="text-slate-700">
                                These cookies remain on your device for a set period (ranging from days to years) or until you manually delete them. They are used to remember your preferences and settings across multiple sessions.
                            </p>
                        </section>

                        {/* Managing Cookies */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. How to Manage Cookies</h2>
                            <p className="text-slate-700 mb-4">
                                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through:
                            </p>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.1 Browser Settings</h3>
                            <p className="text-slate-700 mb-4">
                                Most web browsers allow you to control cookies through their settings. You can set your browser to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li>Block all cookies</li>
                                <li>Accept only first-party cookies</li>
                                <li>Delete cookies when you close your browser</li>
                                <li>Receive notifications when cookies are set</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.2 Browser-Specific Instructions</h3>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.3 Mobile Devices</h3>
                            <p className="text-slate-700 mb-4">
                                For mobile apps, you can manage tracking preferences through your device settings:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li><strong>iOS:</strong> Settings → Privacy → Tracking</li>
                                <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.4 Opt-Out Tools</h3>
                            <p className="text-slate-700">
                                You can also opt-out of certain cookies using these tools:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-emerald-600 hover:text-emerald-700">Google Analytics Opt-out Browser Add-on</a></li>
                                <li><strong>Network Advertising Initiative:</strong> <a href="http://www.networkadvertising.org/choices/" className="text-emerald-600 hover:text-emerald-700">NAI Opt-Out Tool</a></li>
                                <li><strong>Digital Advertising Alliance:</strong> <a href="http://www.aboutads.info/choices/" className="text-emerald-600 hover:text-emerald-700">DAA Opt-Out Tool</a></li>
                            </ul>
                        </section>

                        {/* Impact of Blocking Cookies */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Impact of Blocking Cookies</h2>
                            <p className="text-slate-700 mb-4">
                                Please note that if you choose to block or delete cookies, some features of our Service may not function properly. Specifically:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-slate-700 space-y-2">
                                <li>You may not be able to stay logged in to your account</li>
                                <li>Your preferences and settings may not be saved</li>
                                <li>Some personalized features may not work correctly</li>
                                <li>You may see less relevant content and advertisements</li>
                            </ul>
                        </section>

                        {/* Do Not Track */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Do Not Track Signals</h2>
                            <p className="text-slate-700">
                                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activities tracked. Currently, there is no industry standard for how to respond to DNT signals. At this time, our Service does not respond to DNT signals, but we are committed to providing you with meaningful choices about the information collected on our Service.
                            </p>
                        </section>

                        {/* Updates to Policy */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Updates to This Cookie Policy</h2>
                            <p className="text-slate-700">
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page with a new "Effective Date."
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
                            <p className="text-slate-700 mb-4">
                                If you have any questions about our use of cookies, please contact us:
                            </p>
                            <ul className="list-none text-slate-700 space-y-2">
                                <li><strong>Email:</strong> <a href="mailto:privacy@prepzi.com" className="text-emerald-600 hover:text-emerald-700">privacy@prepzi.com</a></li>
                                <li><strong>Website:</strong> <a href="https://prepzi.com" className="text-emerald-600 hover:text-emerald-700">prepzi.com</a></li>
                            </ul>
                        </section>

                        {/* Summary Table */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Cookie Summary Table</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse border border-slate-300">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">Cookie Type</th>
                                            <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">Purpose</th>
                                            <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">Essential</td>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">Authentication, security, core functionality</td>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">Session / 1 year</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">Analytics</td>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">Usage tracking, performance monitoring</td>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">2 years</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">Functionality</td>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">Preferences, personalization</td>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">1 year</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">Advertising</td>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">Targeted ads, marketing campaigns</td>
                                            <td className="border border-slate-300 px-4 py-2 text-slate-700">1-2 years</td>
                                        </tr>
                                    </tbody>
                                </table>
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
