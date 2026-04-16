import React from 'react';
import { Link } from 'react-router-dom';

function Privacy() {
    const lastUpdated = "March 30, 2026";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-gray-300 text-lg">
                        Your privacy matters to us. Here's how we handle your information.
                    </p>
                    <p className="text-gray-400 text-sm mt-2">Last updated: {lastUpdated}</p>
                </div>

                {/* Content */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 space-y-6">
                    
                    {/* Introduction */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. Introduction</h2>
                        <p className="text-gray-200 leading-relaxed">
                            Welcome to DevTinder ("we," "our," "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. Information We Collect</h2>
                        <p className="text-gray-200 leading-relaxed mb-2">
                            We collect information that you voluntarily provide to us when you register, update your profile, or communicate with us:
                        </p>
                        <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                            <li><strong>Personal Identifiers:</strong> Name, email address, age, gender, and profile photo.</li>
                            <li><strong>Professional Details:</strong> Tech stack, bio, and other information you choose to share.</li>
                            <li><strong>Usage Data:</strong> How you interact with the platform (swipes, messages, connections).</li>
                            <li><strong>Device Information:</strong> IP address, browser type, and operating system.</li>
                        </ul>
                    </section>

                    {/* How We Use Information */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. How We Use Your Information</h2>
                        <p className="text-gray-200 leading-relaxed mb-2">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
                            <li>Provide, operate, and maintain our services.</li>
                            <li>Improve and personalize your experience.</li>
                            <li>Facilitate connections and communication between users.</li>
                            <li>Send you technical notices and support messages.</li>
                            <li>Detect and prevent fraud, abuse, or security issues.</li>
                        </ul>
                    </section>

                    {/* Sharing Information */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">4. Sharing Your Information</h2>
                        <p className="text-gray-200 leading-relaxed">
                            We do not sell your personal information. We may share your information with:
                        </p>
                        <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4 mt-2">
                            <li><strong>Other users:</strong> Your profile (name, photo, tech stack, etc.) is visible to other members as part of the matching experience.</li>
                            <li><strong>Service providers:</strong> Third parties that help us operate our platform (e.g., hosting, analytics).</li>
                            <li><strong>Legal requirements:</strong> If required by law or to protect our rights.</li>
                        </ul>
                    </section>

                    {/* Security */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">5. Security of Your Information</h2>
                        <p className="text-gray-200 leading-relaxed">
                            We use industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">6. Your Rights and Choices</h2>
                        <p className="text-gray-200 leading-relaxed">
                            Depending on your location, you may have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4 mt-2">
                            <li>Access, update, or delete your personal information.</li>
                            <li>Object to or restrict certain processing.</li>
                            <li>Withdraw consent at any time.</li>
                        </ul>
                        <p className="text-gray-200 leading-relaxed mt-2">
                            To exercise these rights, contact us at <a href="mailto:privacy@devtinder.com" className="text-pink-400 hover:underline">privacy@devtinder.com</a>.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">7. Cookies and Tracking Technologies</h2>
                        <p className="text-gray-200 leading-relaxed">
                            We use cookies to enhance your experience. You can set your browser to refuse cookies, but some features may not function properly.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">8. Children's Privacy</h2>
                        <p className="text-gray-200 leading-relaxed">
                            Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
                        </p>
                    </section>

                    {/* Changes to This Policy */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">9. Changes to This Privacy Policy</h2>
                        <p className="text-gray-200 leading-relaxed">
                            We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last updated" date.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">10. Contact Us</h2>
                        <p className="text-gray-200 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="text-gray-200 mt-2">
                            Email: <a href="mailto:privacy@devtinder.com" className="text-pink-400 hover:underline">privacy@devtinder.com</a><br />
                            Address: 123 Developer Street, Tech City, TC 12345
                        </p>
                    </section>
                </div>

                {/* Footer note */}
                <div className="mt-6 text-center text-gray-400 text-sm">
                    <p>By using DevTinder, you agree to this Privacy Policy.</p>
                    <Link to="/" className="text-pink-400 hover:underline mt-2 inline-block">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Privacy;