import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Pillar watermark */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68debb6b4d9580a38ee061b9/a45346f2a_Symbol_White_RGB.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68debb6b4d9580a38ee061b9/6c13b4bbe_Titan_Logo_Full_Color_RGB.png"
              alt="Titan Realty Investments"
              className="h-12 mb-4 filter brightness-0 invert"
            />
            <p className="text-blue-200 leading-relaxed font-light">
              Private capital for legacy assets. Discreet, relationship-driven acquisitions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-light mb-4 text-[#D4AF6A]">Navigation</h4>
            <ul className="space-y-2 text-blue-200 font-light">
              <li><a href="#hero" className="hover:text-[#D4AF6A] transition-colors">Asset Focus</a></li>
              <li><a href="#how-it-works" className="hover:text-[#D4AF6A] transition-colors">Our Process</a></li>
              <li><a href="#about" className="hover:text-[#D4AF6A] transition-colors">Our Approach</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF6A] transition-colors">Private Inquiries</a></li>
              <li>
                <Link to="/sms-consent" className="hover:text-[#D4AF6A] transition-colors">
                  SMS Consent
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-[#B8956A]">Contact Us</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="tel:+15614126929" className="hover:text-[#B8956A] transition-colors">
                  (561) 412-6929
                </a>
              </li>
              <li>
                <a href="mailto:rodrigo@titanrealtyinvestments.com" className="hover:text-[#B8956A] transition-colors">
                  rodrigo@titanrealtyinvestments.com
                </a>
              </li>
              <li>Texas & Surrounding Areas</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-[#B8956A]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-blue-200 text-sm">
                © {new Date().getFullYear()} Titan Real Estate Investments. All rights reserved.
              </p>
              <Link to="/sms-consent" className="text-sm text-blue-300 hover:text-[#D4AF6A] transition-colors underline underline-offset-4">
                OK to text me
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-200">
              <Link to="/sms-terms" className="hover:text-[#D4AF6A] transition-colors">SMS terms</Link>
              <Link to={createPageUrl('PrivacyPolicy')} className="hover:text-[#D4AF6A] transition-colors">Privacy</Link>
              <Link to={createPageUrl('TermsConditions')} className="hover:text-[#D4AF6A] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}