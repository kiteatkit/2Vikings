import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection'; 
import MediaSection from '@/components/MediaSection';
import BasketballGallerySection from '@/components/BasketballGallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <MediaSection />
      <BasketballGallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
