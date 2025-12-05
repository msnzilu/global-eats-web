import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Lost 15 lbs in 2 months",
            comment: "Prepzi completely transformed my relationship with food. The recipes are delicious and I've never felt healthier!",
            avatar: "SJ",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Fitness Enthusiast",
            comment: "Perfect for meal prep! The nutrition tracking helps me hit my macros every day while exploring new cuisines.",
            avatar: "MC",
            rating: 5
        },
        {
            name: "Emma Rodriguez",
            role: "Busy Professional",
            comment: "Saves me so much time and money. No more wasted groceries, and I actually look forward to cooking now!",
            avatar: "ER",
            rating: 5
        }
    ];

    return (
        <div id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Loved by <span className="text-emerald-600">100K+</span> Users
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-xl text-slate-600">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <span className="font-semibold">4.9/5 Average Rating</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-xl border-2 border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 mb-6 italic">&quot;{testimonial.comment}&quot;</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Proof */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-100">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-600">100,000+</div>
                            <div className="text-sm text-slate-600">Healthier Lives</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-600">Featured</div>
                            <div className="text-sm text-slate-600">App of the Day</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;