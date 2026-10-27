import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const lastUpdated = "January 27, 2026";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-[#D4AF6A]" />
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Titan Realty Investments
            </p>
            <p className="text-sm text-blue-200 mt-2">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Titan Realty Investments ("Titan Realty," "we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage with our services, or communicate with us via phone, email, or SMS text messaging.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following types of personal information from you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Contact Information:</strong> Including your full name, phone number, email address, and mailing address</li>
              <li><strong>Property Information:</strong> Property address, property details, ownership information, and related real estate data</li>
              <li><strong>Communication Records:</strong> Records of your communications with us, including phone calls, emails, and text messages</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and website usage data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To respond to your real estate inquiries and provide information about our services</li>
              <li>To evaluate properties and prepare cash offers</li>
              <li>To facilitate property transactions and communicate about real estate deals</li>
              <li>To send you property updates, market information, and transactional communications</li>
              <li>To send marketing communications about our services (with your consent)</li>
              <li>To improve our website, services, and customer experience</li>
              <li>To comply with legal obligations and protect our legal rights</li>
            </ul>
          </section>

          <section className="mb-12 bg-blue-50 rounded-2xl p-8 border-l-4 border-[#B8956A]">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">SMS Communication Disclosure</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>By providing your phone number to Titan Realty, you consent to receive text messages (SMS) from us.</strong> These messages may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Property offers and updates</li>
              <li>Appointment confirmations and reminders</li>
              <li>Transaction-related information</li>
              <li>Marketing and promotional messages about our services</li>
            </ul>

            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Important SMS Terms:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span><strong>Consent is Optional:</strong> You are not required to consent to receiving SMS messages as a condition of purchasing any property or service from us.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span><strong>Message Frequency:</strong> Message frequency may vary depending on your interactions with us.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span><strong>Rates:</strong> Message and data rates may apply based on your mobile carrier's plan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span><strong>Opt-Out:</strong> You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation message upon opting out.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8956A] font-bold">•</span>
                  <span><strong>Help:</strong> For assistance, reply <strong>HELP</strong> to any message or contact us at support@titanrealty.com</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              <strong>Your SMS consent and phone number are never sold or shared with third parties for their marketing purposes.</strong> We use SMS solely to communicate with you about our services and your property inquiries.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Text messaging</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We send text messages only to people who have agreed to receive them. Mobile information, including phone numbers and SMS opt-in consent, is never sold, rented or shared with third parties or affiliates for marketing or promotional purposes. Reply STOP to any text to opt out, or HELP for help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Read our <Link to="/sms-terms" className="text-blue-800 underline">SMS terms</Link>, or give us permission to text you on our <Link to="/sms-consent" className="text-blue-800 underline">text message opt-in form</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We respect your privacy and do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our business, such as SMS platform providers, email service providers, and website hosting services. These providers are contractually obligated to protect your information and use it only for the purposes we specify.</li>
              <li><strong>Legal Compliance:</strong> Government authorities, law enforcement, or legal entities when required by law or to protect our legal rights.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of all or part of our business.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> You may request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You may request that we correct or update inaccurate information.</li>
              <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to legal obligations.</li>
              <li><strong>Opt-Out:</strong> You may opt out of marketing communications at any time by replying STOP to SMS messages, clicking unsubscribe in emails, or contacting us directly.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last Updated" date at the top of this page indicates when the policy was last revised. We encourage you to review this Privacy Policy periodically. Your continued use of our services after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#D4AF6A] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:support@titanrealty.com" className="text-[#D4AF6A] hover:text-[#E5C07B] transition-colors">
                    support@titanrealty.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#D4AF6A] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:+15614126929" className="text-[#D4AF6A] hover:text-[#E5C07B] transition-colors">
                    (561) 412-6929
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#B8956A]/30">
                <p className="text-sm text-blue-200">
                  <strong>Titan Realty Investments</strong><br />
                  South Florida
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}