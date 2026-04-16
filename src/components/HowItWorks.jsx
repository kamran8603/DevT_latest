import React from 'react';
import { Link } from 'react-router-dom';

function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Create Your Profile",
            description: "Sign up and build your developer profile – add your tech stack, bio, and preferences.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Swipe Through Developers",
            description: "Swipe right if you're interested, left to pass. Find developers who share your passion.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Get Matched",
            description: "When you both swipe right, it's a match! Start chatting and build connections.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Chat & Collaborate",
            description: "Message your matches, share code, and collaborate on projects.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">How DevTinder Works</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Find your perfect coding partner in four simple steps.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {steps.map((step, idx) => (
                        <div
                            key={step.id}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transition transform hover:scale-105 duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-4 text-white">
                                    {step.icon}
                                </div>
                                <div className="text-3xl font-bold text-white/30 mb-2">0{step.id}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
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

                {/* Optional: Additional info */}
                <div className="mt-16 text-center text-white/60 text-sm">
                    <p>✨ Swipe, match, and connect with developers who share your passion for code ✨</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;