import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Program',
    body: 'Titan Realty Investments LLC ("Titan", "we") sends conversational text messages to real estate agents and property owners about specific properties they have listed, offered or discussed with us: questions about a listing, seller flexibility, scheduling a walkthrough, and the status of an offer. Messages come from a member of our acquisitions team and are written for you, not broadcast.',
  },
  {
    title: 'How you opt in',
    body: 'We only text people who have agreed to it. You can agree by submitting our text message opt-in form (link to /sms-consent), by replying to one of our emails or calls saying that texting is fine, or by texting our office line first. We keep a record of when and how you agreed.',
  },
  {
    title: 'Message frequency',
    body: 'Frequency varies with the conversation. A typical exchange about one property is a few messages over a couple of weeks. We do not send recurring alerts, newsletters or promotions by text.',
  },
  {
    title: 'Cost',
    body: 'Message and data rates may apply according to your mobile carrier plan. Titan does not charge for text messages.',
  },
  {
    title: 'How to stop',
    body: 'Reply STOP to any message and you will receive one confirmation text and nothing further. You can also email Charles@titanrealtyinvestments.com or call +1 (561) 405-7379 and ask us to stop. Opting out of texts does not affect email or phone contact unless you ask for that too.',
  },
  {
    title: 'Help',
    body: 'Reply HELP to any message, email Charles@titanrealtyinvestments.com or call +1 (561) 405-7379.',
  },
  {
    title: 'Carriers',
    body: 'Carriers are not liable for delayed or undelivered messages. Supported carriers include AT&T, T-Mobile, Verizon and most other US carriers.',
  },
];

export default function SmsTerms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-3xl sm:text-5xl font-light mb-3">Text message (SMS) terms</h1>
            <p className="text-blue-200 text-sm">Titan Realty Investments LLC</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl sm:text-3xl font-light text-blue-900 mb-3">{section.title}</h2>
              {section.title === 'How you opt in' ? (
                <p className="text-gray-700 leading-relaxed">
                  We only text people who have agreed to it. You can agree by submitting our{' '}
                  <Link to="/sms-consent" className="underline text-blue-800">text message opt-in form</Link>
                  , by replying to one of our emails or calls saying that texting is fine, or by texting our office line first. We keep a record of when and how you agreed.
                </p>
              ) : (
                <p className="text-gray-700 leading-relaxed">{section.body}</p>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-2xl sm:text-3xl font-light text-blue-900 mb-3">Your information</h2>
            <p className="text-gray-700 leading-relaxed">
              Mobile information collected for text messaging is never sold, rented or shared with third parties or affiliates for marketing or promotional purposes. See our{' '}
              <Link to="/PrivacyPolicy" className="underline text-blue-800">privacy policy</Link>.
            </p>
          </section>

          <p className="text-xs text-gray-500 leading-relaxed pt-6 border-t border-gray-200">
            Titan Realty Investments LLC · 13075 Marcella Blvd, Loxahatchee, FL · Office line +1 (561) 405-7379 · Charles@titanrealtyinvestments.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}