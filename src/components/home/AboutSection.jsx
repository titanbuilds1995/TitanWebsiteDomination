import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Trees, Scale, Award } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Lock,
      title: 'Discretion First',
      description: 'Off-market transactions handled with complete confidentiality and professionalism.'
    },
    {
      icon: Trees,
      title: 'Long-Term Vision',
      description: 'We understand legacy assets and generational wealth. Patient capital for patient owners.'
    },
    {
      icon: Scale,
      title: 'Custom Structures',
      description: 'Seller financing, lease-backs, phased exits—we tailor solutions to your timeline.'
    },
    {
      icon: Award,
      title: 'Deep Expertise',
      description: 'Specialized knowledge in land use, zoning, and the future value of real assets.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Subtle pillar decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-[#B8956A] via-transparent to-[#B8956A]" />
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-[#B8956A] via-transparent to-[#B8956A]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Our Approach
              <span className="block text-[#D4AF6A] mt-3 font-normal">Relationship-Driven Acquisitions</span>
            </h2>

            <div className="space-y-5 text-blue-100 leading-relaxed text-lg font-light">
              <p>
                Based in South Florida, Titan Realty Investments operates outside the public market. We work directly with property owners—often families who have held land for decades—to facilitate quiet, customized transitions that respect the legacy of the asset.
              </p>
              <p>
                We specialize in properties others overlook: large parcels, agricultural estates, equestrian facilities, aviation-adjacent land, and commercial assemblies. Assets that require patient capital, long-term thinking, and an understanding of future value.
              </p>
              <p>
                Our transactions are structured for discretion and certainty. Whether you're planning an estate transition, exploring a phased exit, or seeking a clean off-market sale, we bring experience, patience, and respect to every conversation.
              </p>
              <p className="text-white text-xl font-normal">
                This is not a transaction. This is a partnership.
              </p>
            </div>
          </motion.div>

          {/* Right side - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/85 backdrop-blur-xl rounded-xl shadow-2xl p-6 border-l-4 border-[#B8956A] hover:shadow-3xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 mb-4 shadow-lg" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
                  <value.icon className="w-7 h-7 text-[#D4AF6A]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">{value.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}