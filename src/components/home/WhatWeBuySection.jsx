import React from 'react';
import { motion } from 'framer-motion';

export default function WhatWeBuySection() {
  const items = [
    {
      title: 'Land Buyers in Palm Beach County and Beyond',
      description:
        'We buy land of one acre or more in Palm Beach, Broward, Miami-Dade, Martin and St. Lucie counties. Parcels may be vacant, agricultural, or held within a family estate.'
    },
    {
      title: 'Equestrian Estate Buyers in Wellington',
      description:
        'We purchase equestrian estates and horse properties in and around Wellington and Loxahatchee. Each property is reviewed as a whole, with the owner’s timeline in mind.'
    },
    {
      title: 'Agricultural Acreage in South Florida',
      description:
        'We purchase agricultural acreage across South Florida, from working farmland to long-held groves and pasture.'
    },
    {
      title: 'Aviation and Industrial Land',
      description:
        'We also acquire aviation-adjacent and industrial parcels that require patient capital and a clear view of future use.'
    }
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
            What We Buy, and Where
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Titan Realty Investments is a private buyer of land and real assets in South Florida. We are not agents and we do not list properties. Every transaction is direct and off-market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#B8956A]"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
