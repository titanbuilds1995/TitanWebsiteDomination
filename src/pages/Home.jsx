import React, { useEffect } from 'react';
import { useSeo } from '@/lib/seo';
import HeroSection from '../components/home/HeroSection';
import CredibilitySection from '../components/home/CredibilitySection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';

export default function Home() {
  useSeo({ path: '/' });

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="credibility">
        <CredibilitySection />
      </div>
      
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
}