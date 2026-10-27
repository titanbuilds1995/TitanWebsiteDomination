import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// Paste your API address here (e.g. https://your-project.vercel.app/api/consent)
const CONSENT_ENDPOINT = 'https://YOUR-VERCEL-DOMAIN/api/consent';

const CONSENT_TEXT = 'By checking this box and submitting, I agree to receive SMS text messages from Titan Realty Investments at the mobile number above about properties I have listed or discussed with Titan. Message frequency varies (usually a few messages per conversation). Message and data rates may apply. Reply STOP at any time to opt out and HELP for help. Consent is not a condition of any purchase.';

export default function SmsConsent() {
  const [form, setForm] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      name: params.get('name') || '',
      phone: params.get('phone') || '',
      email: params.get('email') || '',
      property: params.get('property') || '',
      consent: false,
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const setField = (field) => (e) =>
    setForm({ ...form, [field]: field === 'consent' ? e.target.checked : e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const digits = form.phone.replace(/\D/g, '');
    const phone = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;

    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    const params = new URLSearchParams(window.location.search);

    try {
      const response = await fetch(CONSENT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone,
          email: form.email,
          property: form.property,
          consent: true,
          consent_text: CONSENT_TEXT,
          agent: params.get('agent') || '',
          ref: params.get('ref') || '',
          page: window.location.origin + window.location.pathname,
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
          website: '',
        }),
      });

      if (!response.ok) {
        let message = '';
        try {
          const data = await response.json();
          message = data.error;
        } catch {
          message = '';
        }
        setError(message || 'Something went wrong. Please try again or email Charles@titanrealtyinvestments.com.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email Charles@titanrealtyinvestments.com.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-light text-center"
          >
            OK to text you?
          </motion.h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {isSubmitted ? (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-800 leading-relaxed font-light">
                Thank you. You are opted in. Charles will text you from our office line. Reply STOP at any time to stop.
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-700 leading-relaxed font-light mb-8">
                Charles with Titan Realty Investments may be in touch about a property you have listed or discussed with us. If texting is easier than email, let us know here. Texting is optional; you can keep talking with us by email or phone without it.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-light">Your name *</Label>
                  <Input id="name" type="text" required value={form.name} onChange={setField('name')} className="h-12 text-base border-gray-300 focus:border-[#B8956A] focus:ring-[#B8956A]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-light">Mobile number *</Label>
                  <Input id="phone" type="tel" required value={form.phone} onChange={setField('phone')} className="h-12 text-base border-gray-300 focus:border-[#B8956A] focus:ring-[#B8956A]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-light">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={setField('email')} className="h-12 text-base border-gray-300 focus:border-[#B8956A] focus:ring-[#B8956A]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="property" className="text-gray-700 font-light">Property we are talking about</Label>
                  <Input id="property" type="text" value={form.property} onChange={setField('property')} className="h-12 text-base border-gray-300 focus:border-[#B8956A] focus:ring-[#B8956A]" />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={setField('consent')}
                    className="mt-1 h-5 w-5 flex-shrink-0 rounded border-gray-400 text-blue-900 focus:ring-[#B8956A]"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                    {CONSENT_TEXT}
                  </label>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Mobile information is never sold, rented or shared with third parties or affiliates for marketing or promotional purposes. See our{' '}
                  <Link to="/sms-terms" className="underline hover:text-gray-800">SMS terms</Link> and{' '}
                  <Link to="/PrivacyPolicy" className="underline hover:text-gray-800">privacy policy</Link>.
                </p>

                {error && (
                  <p className="text-sm text-red-600 leading-relaxed">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-light bg-gray-900 hover:bg-gray-800 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Yes, you can text me'}
                </Button>
              </form>
            </>
          )}

          <p className="text-xs text-gray-500 leading-relaxed mt-10 pt-6 border-t border-gray-200">
            Titan Realty Investments LLC · 13075 Marcella Blvd, Loxahatchee, FL · Office line +1 (561) 405-7379 · Charles@titanrealtyinvestments.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}