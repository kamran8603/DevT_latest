import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
    const featuresList = [
        {
            icon: "👋",
            title: "Swipe & Match",
            description: "Swipe right on developers you're interested in, left to pass. Get matched when both are interested!"
        },
        {
            icon: "💬",
            title: "Real-time Chat",
            description: "Connect with your matches instantly. Share code snippets, project ideas, and collaborate seamlessly."
        },
        {
            icon: "🛠️",
            title: "Tech Stack Matching",
            description: "Find developers who share your tech stack – from React to Python, Node to TypeScript."
        },
        {
            icon: "🔒",
            title: "Privacy First",
            description: "Your data is safe. Control what you share and who can see your profile."
        },
        {
            icon: "📱",
            title: "Responsive Design",
            description: "Experience DevTinder on any device – mobile, tablet, or desktop – with a smooth interface."
        },
        {
            icon: "🚀",
            title: "Community Events",
            description: "Join coding challenges, hackathons, and virtual meetups to grow together."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Features</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Everything you need to connect, collaborate, and grow with fellow developers.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresList.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition transform hover:scale-105 duration-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <Link
                        to="/login"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transition transform hover:scale-105 duration-200"
                    >
                        Get Started
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Features;