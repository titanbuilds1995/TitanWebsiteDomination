import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { useSeo } from '@/lib/seo';
import Footer from '../components/home/Footer';

const steps = [
  {
    number: '1',
    title: 'Contact us directly',
    description:
      'Call, text or email. Tell us where the property is and what you would like to achieve. Conversations are private, and there is no obligation.'
  },
  {
    number: '2',
    title: 'We review the property',
    description:
      'We look at the land, its location and its future use. We then propose a structure that fits your goals, such as a direct purchase, seller financing or a phased transition.'
  },
  {
    number: '3',
    title: 'Close quietly, on your terms',
    description:
      'We coordinate the paperwork privately. The property is never listed, marketed or shown to the public.'
  }
];

const buys = [
  'Land of one acre or more',
  'Agricultural and equestrian estates',
  'Aviation and industrial land',
  'Family-held and long-held properties'
];

const counties = ['Palm Beach', 'Broward', 'Miami-Dade', 'Martin', 'St. Lucie'];

export default function SellYourLand() {
  useSeo({
    title: 'Sell Your Land in South Florida, Off-Market',
    description:
      'Sell land in South Florida privately and off-market. Titan Realty Investments is a direct buyer of land and estates of one acre or more. Call (561) 412-6929.',
    path: '/SellYourLand'
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-b from-blue-900 to-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Sell Your Land in South Florida, Off-Market
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed">
              Titan Realty Investments is a private buyer. We are not agents and we do not list
              properties. If you own land in South Florida and prefer a quiet, direct sale, we
              would be glad to talk.
            </p>
            <a
              href="tel:+15614126929"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#B8956A] hover:bg-[#D4AF6A] text-white font-medium rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call (561) 412-6929
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">How an Off-Market Sale Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              A straightforward, confidential process in three steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#B8956A]"
              >
                <div className="text-4xl font-light text-[#B8956A] mb-3">{step.number}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light mb-6">What We Buy</h2>
            <ul className="space-y-3 text-lg text-gray-600">
              {buys.map((item) => (
                <li key={item} className="border-l-4 border-[#B8956A] pl-4">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-light mb-6">Where We Buy</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We buy across South Florida, including these counties:
            </p>
            <ul className="space-y-3 text-lg text-gray-600">
              {counties.map((county) => (
                <li key={county} className="border-l-4 border-[#B8956A] pl-4">{county} County</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light mb-6">Start a Private Conversation</h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Tell us about your property. We will respond directly and keep everything confidential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15614126929"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              (561) 412-6929
            </a>
            <a
              href="mailto:rodrigo@titanrealtyinvestments.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-blue-900 text-blue-900 hover:bg-blue-50 font-medium rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Email Rodrigo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
