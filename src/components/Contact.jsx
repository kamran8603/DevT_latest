import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, type: '', message: '' });

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setShowToast({ show: true, type: 'success', message: 'Message sent successfully!' });
                form.current.reset();
                setTimeout(() => setShowToast({ show: false, type: '', message: '' }), 3000);
            }, (error) => {
                setShowToast({ show: true, type: 'error', message: 'Failed to send. Try again later.' });
                setTimeout(() => setShowToast({ show: false, type: '', message: '' }), 3000);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have questions, feedback, or just want to say hi? We'd love to hear from you.
                    </p>
                </div>

                {/* Toast Notification */}
                {showToast.show && (
                    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInDown">
                        <div className={`px-6 py-3 rounded-full shadow-lg text-white font-semibold flex items-center space-x-2 ${
                            showToast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                            {showToast.type === 'success' && <span>✅</span>}
                            {showToast.type === 'error' && <span>❌</span>}
                            <span>{showToast.message}</span>
                        </div>
                    </div>
                )}

                {/* Contact Form */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">Your Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                required
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:from-red-600 hover:to-pink-600 transition transform hover:scale-105 duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Additional Contact Info */}
                <div className="mt-10 text-center text-gray-400 text-sm">
                    <p>Or reach us directly at: <a href="mailto:support@devtinder.com" className="text-pink-400 hover:underline">support@devtinder.com</a></p>
                    <p className="mt-2">We usually respond within 24 hours.</p>
                </div>
            </div>

            {/* Animation keyframes */}
            <style jsx>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -20px);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, 0);
                    }
                }
                .animate-fadeInDown {
                    animation: fadeInDown 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

export default Contact;