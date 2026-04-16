import React from 'react';
import { Link } from 'react-router-dom';

function CookiePolicy() {
    const lastUpdated = "March 30, 2026";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
                    <p className="text-gray-300 text-lg">
                        How we use cookies to enhance your experience.
                    </p>
                    <p className="text-gray-400 text-sm mt-2">Last updated: {lastUpdated}</p>
                </div>

                {/* Content */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 space-y-6">
                    
                    {/* What are cookies */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. What Are Cookies?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences, improve functionality, and provide analytics.
                        </p>
                    </section>

                    {/* How We Use Cookies */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. How We Use Cookies</h2>
                        <p className="text-gray-200 leading-relaxed">
                            We use cookies for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4 mt-2">
                            <li><strong>Essential Cookies:</strong> Necessary for the website to function (e.g., login sessions, security).</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings and preferences (e.g., language, theme).</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how you use the site to improve performance.</li>
                            <li><strong>Functionality Cookies:</strong> Enable features like swiping, messaging, and profile updates.</li>
                        </ul>
                    </section>

                    {/* Types of Cookies */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. Types of Cookies We Use</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-gray-200">
                                <thead className="bg-white/20">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Cookie</th>
                                        <th className="px-4 py-2 text-left">Purpose</th>
                                        <th className="px-4 py-2 text-left">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-2">session_id</td>
                                        <td className="px-4 py-2">Maintains your logged-in session</td>
                                        <td className="px-4 py-2">Session</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-2">preferences</td>
                                        <td className="px-4 py-2">Stores your user preferences</td>
                                        <td className="px-4 py-2">1 year</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-4 py-2">_ga</td>
                                        <td className="px-4 py-2">Google Analytics tracking</td>
                                        <td className="px-4 py-2">2 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-400 text-xs mt-2">Note: Third-party cookies may also be placed by services we use (e.g., analytics providers).</p>
                    </section>

                    {/* Managing Cookies */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">4. Managing Cookies</h2>
                        <p className="text-gray-200 leading-relaxed">
                            Most browsers allow you to control cookies through their settings. You can:
                        </p>
                        <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4 mt-2">
                            <li>View cookies stored on your device.</li>
                            <li>Block all or certain cookies.</li>
                            <li>Delete cookies when you close your browser.</li>
                        </ul>
                        <p className="text-gray-200 leading-relaxed mt-2">
                            Please note that disabling essential cookies may affect the functionality of our platform (e.g., you may not be able to log in).
                        </p>
                        <p className="text-gray-200 leading-relaxed mt-2">
                            To learn more about managing cookies, visit your browser's help section or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">AllAboutCookies.org</a>.
                        </p>
                    </section>

                    {/* Changes to Policy */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">5. Changes to This Cookie Policy</h2>
                        <p className="text-gray-200 leading-relaxed">
                            We may update this policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">6. Contact Us</h2>
                        <p className="text-gray-200 leading-relaxed">
                            If you have any questions about our use of cookies, please contact us:
                        </p>
                        <p className="text-gray-200 mt-2">
                            Email: <a href="mailto:privacy@devtinder.com" className="text-pink-400 hover:underline">privacy@devtinder.com</a><br />
                            Address: 123 Developer Street, Tech City, TC 12345
                        </p>
                    </section>
                </div>

                {/* Footer note */}
                <div className="mt-6 text-center text-gray-400 text-sm">
                    <p>By continuing to use DevTinder, you consent to our use of cookies as described in this policy.</p>
                    <Link to="/" className="text-pink-400 hover:underline mt-2 inline-block">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default CookiePolicy;