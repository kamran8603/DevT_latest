import React from 'react';
import { Link } from 'react-router-dom';

function TermsService() {
    const lastUpdated = "March 30, 2026";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-gray-300 text-lg">
                        Please read these terms carefully before using DevTinder.
                    </p>
                    <p className="text-gray-400 text-sm mt-2">Last updated: {lastUpdated}</p>
                </div>

                {/* Content */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 space-y-6">
                    
                    {/* Acceptance */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. Acceptance of Terms</h2>
                        <p className="text-gray-200 leading-relaxed">
                            By accessing or using DevTinder ("we," "our," "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use our services.
                        </p>
                    </section>

                    {/* Eligibility */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. Eligibility</h2>
                        <p className="text-gray-200 leading-relaxed">
                            You must be at least 18 years old to use DevTinder. By using our platform, you represent and warrant that you meet this requirement.
                        </p>
                    </section>

                    {/* User Accounts */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. User Accounts</h2>
                        <p className="text-gray-200 leading-relaxed">
                            You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use. We reserve the right to suspend or terminate accounts that violate these Terms.
                        </p>
                    </section>

                    {/* Content and Conduct */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">4. User Content and Conduct</h2>
                        <p className="text-gray-200 leading-relaxed">
                            You retain ownership of the content you post, but grant us a license to use it to provide our services. You agree not to:
                        </p>
                        <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4 mt-2">
                            <li>Post illegal, offensive, or harmful content.</li>
                            <li>Impersonate others or provide false information.</li>
                            <li>Harass, abuse, or threaten other users.</li>
                            <li>Use the platform for commercial purposes without authorization.</li>
                            <li>Attempt to disrupt or gain unauthorized access to the system.</li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">5. Intellectual Property</h2>
                        <p className="text-gray-200 leading-relaxed">
                            The DevTinder name, logo, and platform are our property. You may not copy, modify, or distribute our content without permission.
                        </p>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">6. Termination</h2>
                        <p className="text-gray-200 leading-relaxed">
                            We may suspend or terminate your account at any time for violation of these Terms. You may also delete your account at any time through your profile settings.
                        </p>
                    </section>

                    {/* Disclaimers */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">7. Disclaimer of Warranties</h2>
                        <p className="text-gray-200 leading-relaxed">
                            DevTinder is provided "as is" without warranties of any kind. We do not guarantee the accuracy, reliability, or availability of the service. Your use is at your own risk.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">8. Limitation of Liability</h2>
                        <p className="text-gray-200 leading-relaxed">
                            To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of DevTinder.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">9. Governing Law</h2>
                        <p className="text-gray-200 leading-relaxed">
                            These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.
                        </p>
                    </section>

                    {/* Changes */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">10. Changes to Terms</h2>
                        <p className="text-gray-200 leading-relaxed">
                            We may update these Terms from time to time. Continued use after changes constitutes acceptance. We will notify you of material changes via email or platform notice.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">11. Contact Us</h2>
                        <p className="text-gray-200 leading-relaxed">
                            If you have questions about these Terms, please contact us at:
                        </p>
                        <p className="text-gray-200 mt-2">
                            Email: <a href="mailto:legal@devtinder.com" className="text-pink-400 hover:underline">legal@devtinder.com</a><br />
                            Address: 123 Developer Street, Tech City, TC 12345
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center text-gray-400 text-sm">
                    <p>By using DevTinder, you agree to these Terms of Service.</p>
                    <Link to="/" className="text-pink-400 hover:underline mt-2 inline-block">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default TermsService;