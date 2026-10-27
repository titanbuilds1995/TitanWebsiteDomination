import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, MapPin, Headset, Shield, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CredibilitySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stats = [
    { icon: Clock, value: 'Patient Capital', label: 'Long-Term Vision' },
    { icon: MapPin, value: '1+ Acres', label: 'Preferred Property Size' },
    { icon: Headset, value: 'Direct Access', label: 'Principal-Level Conversations' },
    { icon: Shield, value: 'Discretion', label: 'Off-Market Only' }
  ];

  const testimonials = [
    {
      name: 'Mark Countryman',
      rating: 5,
      text: 'Rodrigo did a great job selling our rental home when we were out of state. We did everything online and over the phone. They took care of everything and we received the funds immediately after the sale. I would not hesitate to use them again. Great company!'
    },
    {
      name: 'Garet Lee',
      rating: 5,
      text: 'I dealt with Rodrigo and he was amazing!! Highly recommend and hope to have the opportunity to do business with him again. Always answered any time I needed him and helped me every step of the way. Thanks Rodrigo!'
    },
    {
      name: 'Steve B.',
      rating: 5,
      text: 'I had the pleasure of working with Rodrigo, and I can confidently say it was an exceptional experience from start to finish. He did what he said he would and made a cash offer on my house that was flooded from Helene and closed quickly with no cost to me. He and his team were professional, responsive, and truly dedicated to delivering outstanding results.'
    },
    {
      name: 'Buck n Doe',
      rating: 5,
      text: 'Rodrigo and his team made the process of selling our childhood home amazing, seamless and very efficient. From beginning to end, everything was explained clearly and consistently, as promised. Our closing went smooth and it is exciting to see what they are doing with the homestead and knowing it would make our parents proud.'
    },
    {
      name: 'Jackie Frias',
      rating: 5,
      text: 'Working with Rodrigo was a dream…a dream come true!! I wanted to sell my house and buy a house he had listed. We talked a bit, and we were able to come to a mutually agreeable deal. The process went so smooth, from communication with him to the title company closing the deals. Rodrigo and the title company were so patient with me and walked me through every step of the process.'
    },
    {
      name: 'Maria Hess',
      rating: 5,
      text: 'I so appreciated Rodrigo\'s help with a property we recently inherited that was simply just too much for us to handle. He was prompt, informative, professional, and communicative at every step. All details were handled promptly, and he even sent a gracious local contact to meet with me so that I would feel more comfortable with the process. Easy!'
    },
    {
      name: 'Fee Millsaps',
      rating: 5,
      text: 'Rodrigo did a wonderful job helping us sell our church property in TN. He was always very helpful, energetic, and ready to assist us with any issue that would arise. The team that assisted was always very nice and courteous as well. On closing, everything went very smoothly and the funds was in the bank within 48 hours. We appreciate them greatly.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
                <stat.icon className="w-9 h-9 text-[#F5D896]" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rodrigo's Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-12 shadow-xl border-t-4 border-[#B8956A] relative">
            
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B8956A] to-[#D4AF6A] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">R</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="font-normal text-gray-900 text-xl mb-1">Rodrigo</div>
                <div className="text-[#B8956A] text-sm font-light mb-4">Principal, Titan Realty Investments</div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                  "Titan Realty Investments was founded on the principle that legacy assets deserve patient capital and thoughtful stewardship. We work with families and estates navigating complex property transitions—offering certainty, discretion, and structures that honor both the past and the future of these holdings."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Client Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-3 font-light">
            Testimonials from property owners we've worked with
          </p>
          <p className="text-sm text-gray-500 font-light max-w-3xl mx-auto">
            These reviews reflect our principal's track record of discretion, professionalism, and tailored transaction structures across diverse property types through his previous venture, Exor Holdings.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-t-4 border-[#B8956A] min-h-[320px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#B8956A] text-[#B8956A]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-8">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl text-blue-900">
                    {testimonials[currentIndex].name}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors border-2 border-[#B8956A]"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors border-2 border-[#B8956A]"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#B8956A] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Link to Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=exor+holdings&oq=Exor&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhAIARAuGIMBGNQCGLEDGIAEMgYIAhBFGEAyBggDEEUYOTIQCAQQLhiDARjUAhixAxiABDITCAUQLhiDARjHARixAxjRAxiABDIGCAYQRRg8MgYIBxBFGD3SAQgxNzM2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x88d9b7536475f9eb:0xef196137f029fb57,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="inline-flex flex-col items-center gap-2">
              <Button
                variant="outline"
                className="gap-2 border-2 border-[#B8956A] text-blue-900 hover:bg-[#B8956A] hover:text-white px-8 py-6 text-lg font-semibold transition-all rounded-full"
              >
                See All Reviews on Google
                <ExternalLink className="w-5 h-5" />
              </Button>
              <p className="text-xs text-gray-500 font-light">
                Reviews from Exor Holdings, our principal's previous company
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}