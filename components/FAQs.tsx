'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Prepzi?",
    answer: "Prepzi is a comprehensive healthy eating app that helps you discover nutritious recipes from over 80 countries while minimizing food waste and achieving your health goals. We combine global culinary diversity with smart meal planning and nutrition tracking."
  },
  {
    question: "How does Prepzi help reduce food waste?",
    answer: "Prepzi provides intelligent meal planning features that help you use ingredients efficiently across multiple recipes. Our app suggests recipes based on ingredients you already have, tracks expiration dates, and provides portion guidance to minimize waste while maximizing nutrition."
  },
  {
    question: "Is Prepzi free to use?",
    answer: "Yes! Prepzi offers a free plan that includes access to thousands of recipes, basic meal planning features, and nutrition information. We also offer premium plans with advanced features like personalized meal plans, detailed nutrition tracking, and ad-free experience."
  },
  {
    question: "What cuisines and countries does Prepzi cover?",
    answer: "Prepzi features authentic recipes from over 80 countries across all continents. From Asian cuisines like Japanese, Thai, and Indian to European favorites like Italian and French, plus African, Middle Eastern, and Latin American dishes. New recipes are added weekly."
  },
  {
    question: "Can Prepzi accommodate dietary restrictions?",
    answer: "Absolutely! Prepzi supports various dietary preferences and restrictions including vegetarian, vegan, gluten-free, dairy-free, keto, paleo, and more. You can filter recipes based on your dietary needs and our app will suggest alternatives for ingredients you can't eat."
  },
  {
    question: "How accurate is the nutrition information?",
    answer: "All nutrition information in Prepzi is calculated using verified databases and reviewed by nutrition experts. We provide detailed breakdowns of calories, macronutrients, vitamins, and minerals for every recipe to help you make informed dietary choices."
  },
  {
    question: "Is Prepzi available on both iOS and Android?",
    answer: "Yes! Prepzi is available for download on both the Apple App Store for iOS devices and Google Play Store for Android devices. We also offer a web version accessible from any browser."
  },
  {
    question: "Can I create my own recipes in Prepzi?",
    answer: "Yes! Premium users can create, save, and share their own custom recipes. Our app will automatically calculate nutritional information for your recipes and you can organize them in personalized collections."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="faq-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Prepzi. Can't find the answer you're looking for? 
            <a href="/contact" className="text-green-600 hover:text-green-700 ml-1 underline">
              Contact our support team
            </a>
            .
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-green-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
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
    </section>
  );
};

export default FAQ;