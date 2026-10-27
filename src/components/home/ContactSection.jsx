import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { LeadSubmission } from '@/entities/LeadSubmission';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    property_address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await LeadSubmission.create({
        ...formData,
        source: 'contact_form'
      });
      setIsSubmitted(true);
      setFormData({
        full_name: '',
        email: '',
        property_address: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8956A] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Explore a Custom Exit
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Discreet conversations. Tailored solutions. Complete confidentiality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-10 text-white border-t-4 border-[#B8956A] shadow-xl">
              <h3 className="text-3xl font-light mb-8">Private Inquiries</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#B8956A]/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#D4AF6A]" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Direct Line</div>
                    <a href="tel:+15614126929" className="text-xl font-semibold hover:text-[#D4AF6A] transition-colors">
                      (561) 412-6929
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#B8956A]/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#D4AF6A]" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Email Us</div>
                    <a href="mailto:rodrigo@titanrealtyinvestments.com" className="text-xl font-semibold hover:text-[#D4AF6A] transition-colors">
                      rodrigo@titanrealtyinvestments.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#B8956A]/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#D4AF6A]" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Markets</div>
                    <div className="text-xl font-semibold">
                      South Florida
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-[#B8956A]/30">
                <p className="text-blue-100 leading-relaxed font-light">
                  All inquiries are handled personally and confidentially. We respond within one business day.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50/50 rounded-3xl p-10 border-t-4 border-[#B8956A] shadow-lg"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[#B8956A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  Got It!
                </h3>
                <p className="text-gray-600 text-lg">
                  Thanks for reaching out. We'll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    placeholder="Your name"
                    className="h-12 text-base border-gray-300 focus:border-[#B8956A] focus:ring-[#B8956A] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="h-12 text-base border-gray-300 focus:border-[#B8956A] focus:ring-[#B8956A] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    Property Address *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.property_address}
                    onChange={(e) => setFormData({ ...formData, property_address: e.target.value })}
                    placeholder="123 Main St, City, State 12345"
                    className="h-12 text-base border-gray-300 focus:border-[#B8956A] focus:ring-[#B8956A] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    Tell Us About Your Situation
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="When do you need to sell? What's your situation? (Optional, but helpful)"
                    rows={4}
                    className="text-base border-gray-300 focus:border-[#B8956A] focus:ring-[#B8956A] bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-light bg-gray-900 text-white transition-all duration-300 hover:bg-gray-800"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}