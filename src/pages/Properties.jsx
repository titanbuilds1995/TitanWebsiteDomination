import React from 'react';
import { useSeo } from '@/lib/seo';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Calendar } from 'lucide-react';

export default function Properties() {
  useSeo({
    title: 'Available Properties',
    description: 'Investment properties acquired by Titan Realty Investments in South Florida. Call or text (561) 412-6929 to learn more.',
    path: '/Properties',
    // Placeholder listings: keep out of search until real inventory is published.
    noindex: true,
  });

  const properties = [
    {
      id: 1,
      address: '123 Ocean Drive',
      city: 'Miami Beach, FL',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      price: '$450,000',
      bedrooms: 3,
      bathrooms: 2,
      sqft: '2,100',
      status: 'Available',
      dateAcquired: 'Nov 2024'
    },
    {
      id: 2,
      address: '456 Palm Avenue',
      city: 'Fort Lauderdale, FL',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
      price: '$375,000',
      bedrooms: 4,
      bathrooms: 2,
      sqft: '2,400',
      status: 'Under Contract',
      dateAcquired: 'Oct 2024'
    },
    {
      id: 3,
      address: '789 Sunset Boulevard',
      city: 'West Palm Beach, FL',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      price: '$520,000',
      bedrooms: 3,
      bathrooms: 3,
      sqft: '2,800',
      status: 'Available',
      dateAcquired: 'Dec 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68debb6b4d9580a38ee061b9/6c13b4bbe_Titan_Logo_Full_Color_RGB.png"
              alt="Titan Realty Investments"
              className="h-16 mx-auto mb-6 filter brightness-0 invert"
            />
            <h1 className="text-5xl font-bold mb-4">Available Properties</h1>
            <p className="text-xl text-blue-100">Investment opportunities in South Florida</p>
          </motion.div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-[#B8956A]"
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    property.status === 'Available' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-white'
                  }`}>
                    {property.status}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#B8956A] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{property.address}</h3>
                    <p className="text-gray-600">{property.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-[#B8956A]" />
                  <span className="text-2xl font-bold text-blue-900">{property.price}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">{property.bedrooms}</div>
                    <div className="text-xs text-gray-500">Beds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">{property.bathrooms}</div>
                    <div className="text-xs text-gray-500">Baths</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900">{property.sqft}</div>
                    <div className="text-xs text-gray-500">Sq Ft</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#B8956A]" />
                  <span>Acquired: {property.dateAcquired}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-white rounded-3xl p-12 shadow-xl border-t-4 border-[#B8956A]"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Interested in one of these properties?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Call or text us to learn more about investment opportunities
          </p>
          <a
            href="tel:+15614126929"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#B8956A] to-[#D4AF6A] rounded-2xl px-12 py-4 text-lg font-semibold text-blue-900 hover:from-[#D4AF6A] hover:to-[#E5C07B] transition-all shadow-lg hover:shadow-xl"
          >
            (561) 412-6929
          </a>
        </motion.div>
      </div>
    </div>
  );
}