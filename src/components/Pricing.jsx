import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    const plans = [
        {
            name: "Basic",
            price: "Free",
            description: "Perfect for getting started",
            features: ["Swipe up to 10 profiles/day", "Basic matching", "Profile visibility"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "Pro",
            price: "Coming Soon",
            description: "For serious networkers",
            features: ["Unlimited swipes", "Advanced filters", "Priority visibility", "Chat with anyone"],
            color: "from-purple-500 to-pink-500",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Coming Soon",
            description: "For teams and communities",
            features: ["Team accounts", "API access", "Dedicated support", "Custom branding"],
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Pricing Plans</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Choose the plan that fits your networking needs.
                    </p>
                    <div className="mt-4 inline-block bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-1 text-yellow-300 text-sm">
                        🚀 More plans coming soon!
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transition transform hover:scale-105 duration-300 ${
                                plan.popular ? 'shadow-2xl ring-2 ring-pink-500' : ''
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    POPULAR
                                </div>
                            )}
                            <div className="p-6 text-center">
                                <div className={`bg-gradient-to-r ${plan.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl`}>
                                    {plan.name === "Basic" ? "👤" : plan.name === "Pro" ? "⭐" : "🏢"}
                                </div>
                                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                <div className="mt-2">
                                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                                    {plan.price !== "Free" && <span className="text-gray-400 text-sm">/mo</span>}
                                </div>
                                <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                                <ul className="mt-4 space-y-2 text-left">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-200 text-sm">
                                            <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        to="/login"
                                        className={`block w-full py-2 px-4 rounded-full text-white font-medium ${
                                            plan.price === "Free"
                                                ? "bg-white/20 hover:bg-white/30"
                                                : "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                                        } transition`}
                                    >
                                        {plan.price === "Free" ? "Get Started" : "Notify Me"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ / Note */}
                <div className="mt-12 text-center text-gray-400 text-sm">
                    <p>✨ All plans include core features like matching, messaging, and profile customization. ✨</p>
                    <p className="mt-2">Questions? <a href="#" className="text-pink-400 hover:underline">Contact us</a></p>
                </div>

                {/* Coming Soon Banner */}
                <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">🚀 More Coming Soon</h2>
                    <p className="text-gray-300">
                        We're working on exciting new features like team plans, API access, and advanced analytics.
                        Stay tuned for updates!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;