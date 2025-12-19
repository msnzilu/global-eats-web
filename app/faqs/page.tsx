'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ArrowLeft, Search, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: 'What is Prepzi?',
      answer: 'Prepzi is a comprehensive healthy eating app that helps you discover nutritious recipes from over 80 countries while minimizing food waste and achieving your health goals. We combine global culinary traditions with modern nutrition science.'
    },
    {
      category: 'General',
      question: 'How does Prepzi reduce food waste?',
      answer: 'Prepzi provides smart meal planning features that help you use ingredients efficiently, suggests recipes based on what you already have in your pantry, and tracks expiration dates to minimize waste. Our intelligent algorithms ensure you make the most of every ingredient.'
    },
    {
      category: 'Pricing',
      question: 'Is Prepzi free to use?',
      answer: 'Prepzi offers both free and premium plans. The free plan includes access to thousands of recipes, basic meal planning features, and nutrition tracking. Premium members get unlimited recipe access, advanced meal planning, personalized nutrition coaching, and priority support.'
    },
    {
      category: 'Features',
      question: 'What cuisines does Prepzi cover?',
      answer: 'Prepzi features authentic recipes from over 80 countries around the world, including popular cuisines from Asia (Japanese, Thai, Indian, Chinese), Europe (Italian, French, Greek), Africa (Ethiopian, Moroccan), Americas (Mexican, Brazilian, Caribbean), and Oceania (Australian fusion).'
    },
    {
      category: 'Features',
      question: 'Can I customize recipes for dietary restrictions?',
      answer: 'Yes! Prepzi allows you to filter and customize recipes based on various dietary needs including vegetarian, vegan, gluten-free, dairy-free, keto, paleo, and many more. You can also set allergen alerts and substitute ingredients automatically.'
    },
    {
      category: 'Features',
      question: 'Does Prepzi work offline?',
      answer: 'Yes, Prepzi offers offline functionality. Once you\'ve downloaded recipes, you can access them without an internet connection. Your meal plans and shopping lists are also available offline, making it perfect for grocery shopping.'
    },
    {
      category: 'Account',
      question: 'How do I create an account?',
      answer: 'You can create an account by downloading the Prepzi app from the App Store or Google Play Store. Simply open the app and sign up using your email address, or use quick sign-up with Google, Apple, or Facebook.'
    },
    {
      category: 'Account',
      question: 'Can I sync my account across devices?',
      answer: 'Absolutely! Your Prepzi account automatically syncs across all your devices. Start planning on your phone, continue on your tablet, and finish on your computer. All your saved recipes, meal plans, and preferences stay in sync.'
    },
    {
      category: 'Technical',
      question: 'What devices are supported?',
      answer: 'Prepzi is available on iOS (iPhone and iPad), Android phones and tablets, and through our web app at prepzi.app. We support iOS 14+ and Android 8.0+.'
    },
    {
      category: 'Technical',
      question: 'How do I report a bug or issue?',
      answer: 'If you encounter any issues, please use the "Report a Problem" feature in the app settings, or contact our support team at support@prepzi.app. We typically respond within 24 hours and appreciate detailed descriptions of the issue.'
    },
    {
      category: 'Nutrition',
      question: 'Are the nutrition facts accurate?',
      answer: 'Yes, all nutritional information in Prepzi is calculated using the USDA food database and verified by registered dietitians. We regularly update our database to ensure accuracy and compliance with the latest nutritional guidelines.'
    },
    {
      category: 'Nutrition',
      question: 'Can Prepzi help with weight loss goals?',
      answer: 'Yes! Prepzi offers personalized meal plans based on your health goals, including weight loss, muscle gain, or maintenance. Our app tracks your calories, macros, and provides portion guidance to help you reach your objectives sustainably.'
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions about Prepzi. Can't find what you're looking for? 
            <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium ml-1">
              Contact us
            </Link>
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
              <p className="text-gray-600 text-lg">No FAQs found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2 block">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-green-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-green-50 mb-6 text-lg">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default FAQPage;