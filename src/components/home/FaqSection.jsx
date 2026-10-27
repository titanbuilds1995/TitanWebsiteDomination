import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQS = [
  {
    question: 'How does an off-market sale work?',
    answer:
      'You contact us directly and the conversation stays private. We learn your objectives, review the property, and propose a structure. Documentation is handled quietly, with no public listing.'
  },
  {
    question: 'Who do you buy from?',
    answer:
      'We work directly with property owners, often families who have held land for decades. We do not work through listings.'
  },
  {
    question: 'What types of property do you buy?',
    answer:
      'We buy land of one acre or more, agricultural and equestrian estates, and aviation and industrial land in South Florida.'
  },
  {
    question: 'Is there a minimum acreage?',
    answer:
      'Our preferred property size is one acre or more. If your property is smaller, you are welcome to call and ask.'
  },
  {
    question: 'Which areas do you cover?',
    answer:
      'We buy in Palm Beach, Broward, Miami-Dade, Martin and St. Lucie counties.'
  },
  {
    question: 'How long does a sale take?',
    answer:
      'Timing is set with the owner. We can structure a purchase around your schedule, including a phased transition.'
  },
  {
    question: 'Can the sale be structured around my needs?',
    answer:
      'Yes. Options include a direct purchase, seller financing, a lease-back, or a phased exit. We tailor the structure to your situation.'
  },
  {
    question: 'Is the conversation confidential?',
    answer:
      'Yes. All conversations are confidential. Call (561) 412-6929 or email rodrigo@titanrealtyinvestments.com to begin.'
  }
];

export default function FaqSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  return (
    <section className="py-24 bg-gray-50 text-gray-900">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Plain answers about selling land to a private buyer.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white rounded-xl shadow-md border-l-4 border-[#B8956A] p-6"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none text-xl font-bold text-blue-900">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-[#B8956A] transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
