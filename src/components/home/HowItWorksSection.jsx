import React from 'react';
import { motion } from 'framer-motion';
import { Phone, HandshakeIcon, Home } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Phone,
      number: '1',
      title: 'Discreet Initial Contact',
      description: 'Reach out directly. All conversations are confidential. We listen first, understand your objectives, and respect your timeline.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80'
    },
    {
      icon: HandshakeIcon,
      number: '2',
      title: 'Custom Structuring',
      description: 'We evaluate the property and your needs, then propose a tailored structure—whether that is a direct purchase, seller financing, or phased transition.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80'
    },
    {
      icon: Home,
      number: '3',
      title: 'Quiet Execution',
      description: 'We handle all documentation and coordination privately. Transactions close on your terms, with complete discretion from start to finish.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&q=80'
    }
  ];

  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
      {/* Removed subtle pillar decorations */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A straightforward, confidential approach designed for sophisticated sellers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#B8956A]">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                  
                  {/* Step Number Badge with consistent styling */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
                    <span className="text-3xl font-bold text-[#F5D896]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
                      <step.icon className="w-9 h-9 text-[#F5D896]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-blue-50 rounded-3xl p-8 max-w-3xl mx-auto border-t-4 border-[#B8956A]"
        >
          <p className="text-xl text-gray-900 font-light mb-2">
            Every transaction is unique. Every structure is customized.
          </p>
          <p className="text-lg text-gray-700 font-light">
            We work on your timeline—whether that's weeks, months, or years.
          </p>
        </motion.div>
      </div>
    </section>
  );
}