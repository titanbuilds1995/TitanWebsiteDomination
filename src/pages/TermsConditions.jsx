import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Phone } from 'lucide-react';

export default function TermsConditions() {
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
            <FileText className="w-16 h-16 mx-auto mb-6 text-[#D4AF6A]" />
            <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Titan Realty Investments ("Titan Realty," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website, services, and communications, including SMS text messaging.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing our website, submitting an inquiry form, providing your phone number, or engaging with our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website or services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of our services after any changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Titan Realty Investments is a real estate investment company operating in South Florida. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Purchasing residential properties for cash</li>
              <li>Providing fair cash offers for homes in any condition</li>
              <li>Real estate consulting and advisory services</li>
              <li>Property acquisition and investment services</li>
              <li>Facilitating real estate transactions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our services are provided on an "as-is" basis. We make no guarantees regarding specific outcomes, property valuations, or transaction timelines. All offers and transactions are subject to property evaluation, due diligence, and mutual agreement between parties.
            </p>
          </section>

          <section className="mb-12 bg-blue-50 rounded-2xl p-8 border-l-4 border-[#B8956A]">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">SMS Messaging Terms</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              By providing your mobile phone number to Titan Realty through our website, inquiry forms, or other means, you expressly consent to receive text messages (SMS) from us. These messages may include property offers, transaction updates, appointment reminders, and marketing communications.
            </p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">SMS Program Details:</h3>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Consent</h4>
                  <p>By submitting your phone number, you agree to receive automated and manual text messages from Titan Realty. Consent is not a condition of purchase or service engagement.</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Message Frequency</h4>
                  <p>Message frequency may vary based on your interactions and inquiries. You may receive multiple messages per week during active communications about your property.</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Message & Data Rates</h4>
                  <p>Standard message and data rates may apply based on your mobile carrier's plan. Please contact your carrier for details about your plan.</p>
                </div>

                <div className="bg-blue-50 rounded p-4 border-l-4 border-[#B8956A]">
                  <h4 className="font-bold text-blue-900 mb-2">How to Opt Out</h4>
                  <p className="mb-2">You may opt out of SMS communications at any time by:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Replying <strong>STOP</strong> to any text message from us</li>
                    <li>You will receive a confirmation message when you opt out</li>
                    <li>After opting out, you will no longer receive SMS messages from us unless you re-subscribe</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Get Help</h4>
                  <p>For assistance with SMS communications, reply <strong>HELP</strong> to any message or contact us at support@titanrealty.com or (561) 412-6929.</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Supported Carriers</h4>
                  <p>Our SMS program is compatible with major U.S. mobile carriers. Carriers are not liable for delayed or undelivered messages.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-4">
              <p className="text-sm text-gray-800">
                <strong>Important:</strong> We comply with the Telephone Consumer Protection Act (TCPA) and 10DLC messaging standards. Your phone number and consent information are never sold or shared with third parties for their marketing purposes.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our website and services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information about yourself and your property</li>
              <li>Maintain the confidentiality of any account credentials or sensitive information</li>
              <li>Notify us immediately of any unauthorized use of your information</li>
              <li>Use our services only for lawful purposes and in accordance with these Terms</li>
              <li>Not engage in any activity that could harm, disable, or impair our website or services</li>
              <li>Not use automated systems or software to extract data from our website</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You are responsible for ensuring that your contact information, including your phone number and email address, is accurate and up to date. We are not responsible for failed communications due to incorrect contact information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by applicable law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Titan Realty Investments provides services and information on an "as-is" and "as-available" basis without warranties of any kind, either express or implied.</li>
              <li>We make no representations or warranties regarding the accuracy, reliability, or completeness of any information provided through our website or services.</li>
              <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or any real estate transactions.</li>
              <li>Our total liability for any claims arising from your use of our services shall not exceed the amount you paid us for services, if any.</li>
              <li>We are not liable for delays or failures in performance resulting from circumstances beyond our reasonable control.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Real estate transactions involve inherent risks. You acknowledge that you are responsible for conducting your own due diligence and seeking independent legal, financial, and tax advice before entering into any transaction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of Titan Realty Investments and is protected by United States and international copyright and trademark laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms and Conditions are governed by and construed in accordance with the laws of the State of Florida and the United States of America, without regard to conflict of law principles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these Terms or your use of our services shall be resolved in the state or federal courts located in Florida. You agree to submit to the personal jurisdiction of these courts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Titan Realty Investments regarding your use of our website and services, superseding any prior agreements or understandings.
            </p>
          </section>

          <section className="mb-12 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              If you have any questions or concerns about these Terms and Conditions, please contact us:
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
                  South Florida, United States
                </p>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-[#B8956A]">
            <p className="text-sm text-gray-700">
              By using our website, submitting contact forms, or engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}