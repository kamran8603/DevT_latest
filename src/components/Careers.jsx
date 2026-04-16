import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Careers() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setError('Please enter a valid email');
            return;
        }
        // Simulate API call (replace with actual endpoint later)
        setSubmitted(true);
        setEmail('');
        setError('');
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Join Our Team</h1>
                    <p className="text-gray-300 text-lg">
                        Help us build the future of developer networking.
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8">
                    <div className="text-center mb-8">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Currently No Openings</h2>
                        <p className="text-gray-300">
                            We're always looking for talented people, but we don't have any open positions right now.
                        </p>
                        <p className="text-gray-300 mt-2">
                            Leave your email, and we'll notify you when we start hiring!
                        </p>
                    </div>

                    {/* Notification Form */}
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                disabled={submitted}
                            />
                            <button
                                type="submit"
                                disabled={submitted}
                                className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-lg hover:from-red-600 hover:to-pink-600 transition transform hover:scale-105 duration-200 disabled:opacity-50"
                            >
                                {submitted ? 'Notified!' : 'Notify Me'}
                            </button>
                        </div>
                        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                    </form>

                    {/* Optional: Benefits Section */}
                    <div className="mt-10 pt-6 border-t border-white/20">
                        <h3 className="text-lg font-semibold text-white text-center mb-4">Why Work With Us?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl mb-2">🚀</div>
                                <p className="text-gray-300 text-sm">Work on impactful products</p>
                            </div>
                            <div>
                                <div className="text-2xl mb-2">💻</div>
                                <p className="text-gray-300 text-sm">Remote-friendly culture</p>
                            </div>
                            <div>
                                <div className="text-2xl mb-2">🌟</div>
                                <p className="text-gray-300 text-sm">Growth opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link to="/" className="text-pink-400 hover:underline">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Careers;