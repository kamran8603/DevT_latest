import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
    const teamMembers = [
        {
            name: "Akshay Kumar",
            role: "Founder & Lead Developer",
            bio: "Full-stack developer passionate about building communities for developers.",
            icon: "👨‍💻"
        },
        {
            name: "Priya Sharma",
            role: "Product Designer",
            bio: "Creates intuitive and beautiful experiences for developers worldwide.",
            icon: "🎨"
        },
        {
            name: "Rahul Verma",
            role: "Community Manager",
            bio: "Ensures developers connect and collaborate effectively.",
            icon: "🤝"
        }
    ];

    const features = [
        {
            title: "For Developers",
            description: "Connect with like-minded coders, share projects, and find collaboration opportunities."
        },
        {
            title: "Safe & Secure",
            description: "Your data is protected. We prioritize privacy and create a respectful environment."
        },
        {
            title: "Tech-Focused",
            description: "Match based on your tech stack, interests, and coding style."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About DevTinder</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Where developers find their perfect coding partner.
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-16">
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Our Mission</h2>
                    <p className="text-gray-200 text-center max-w-3xl mx-auto leading-relaxed">
                        DevTinder was created to solve the loneliness of coding alone. We believe that developers thrive when they collaborate, share knowledge, and build together. Our platform connects you with peers who share your passion for code, helping you grow professionally and personally.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h2 className="text-xl font-bold text-white mb-3">The Story</h2>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            It started with a simple idea: why should developers code alone? We realized that the best innovations come from collaboration. So we built a platform that makes finding your coding soulmate as easy as swiping right.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <h2 className="text-xl font-bold text-white mb-3">What We Believe</h2>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            Great code is written by great teams. We believe in fostering genuine connections based on shared interests, tech stacks, and coding philosophies. Everyone deserves a partner to debug with.
                        </p>
                    </div>
                </div>

                {/* Features */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Why DevTinder?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 text-center">
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section (optional) */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Meet the Team</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mb-3">
                                    {member.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                <p className="text-gray-300 text-sm">{member.role}</p>
                                <p className="text-gray-400 text-xs mt-2">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Link
                        to="/login"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transition transform hover:scale-105 duration-200"
                    >
                        Join the Community
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;