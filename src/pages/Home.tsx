import React from 'react';
import Hero from '../components/Hero';
import TrustPillars from '../components/TrustPillars';
import FeatureShowcase from '../components/FeatureShowcase';
import ServiceOverview from '../components/ServiceOverview';
import BrandSection from '../components/BrandSection';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <BrandSection />
      <TrustPillars />
      <FeatureShowcase />
      <ServiceOverview />
      <Testimonial />
    </div>
  );
}
