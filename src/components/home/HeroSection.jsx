import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background - Equestrian estate imagery */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
          alt="Private estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-gray-900/60" />
      </div>

      {/* Subtle pillar watermark decorations */}
      <div className="absolute inset-0 opacity-3">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68debb6b4d9580a38ee061b9/a45346f2a_Symbol_White_RGB.png"
          alt=""
          className="absolute top-10 right-10 w-32 h-32 opacity-5"
        />
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68debb6b4d9580a38ee061b9/a45346f2a_Symbol_White_RGB.png"
          alt=""
          className="absolute bottom-10 left-10 w-32 h-32 opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68debb6b4d9580a38ee061b9/6c13b4bbe_Titan_Logo_Full_Color_RGB.png"
            alt="Titan Realty Investments"
            className="h-16 mx-auto mb-4 filter brightness-0 invert"
          />
        </motion.div>

        <div className="flex justify-center">
          {/* Centered Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight tracking-wide"
            >
              Private Capital for
              <span className="block text-[#D4AF6A] mt-3 font-normal">
                Legacy Assets
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-100 mb-8 leading-relaxed font-light"
            >
              Serving South Florida, Titan Realty Investments acquires large-scale land and real assets through quiet, off-market transactions designed for owners who value discretion, structure, and long-term vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-2 mb-12 text-gray-200 font-light"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#D4AF6A]" />
                <span>1+ Acre Properties</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#D4AF6A]" />
                <span>Agricultural & Equestrian Estates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-[#D4AF6A]" />
                <span>Aviation & Industrial Land</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-gray-200 text-base font-light">
                Discreet inquiries welcome:
              </p>
              <a
                href="tel:+15614126929"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-[#D4AF6A]/30 rounded-lg px-8 py-3 text-base font-light text-white hover:bg-white/20 transition-all"
              >
                (561) 412-6929
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#D4AF6A] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#D4AF6A] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}