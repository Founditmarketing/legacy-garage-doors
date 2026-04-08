import React from 'react';
import Hero from '../components/Hero';
import BrandSection from '../components/BrandSection';
import TrustPillars from '../components/TrustPillars';
import FeatureShowcase from '../components/FeatureShowcase';
import ServiceOverview from '../components/ServiceOverview';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandSection />
      <TrustPillars />
      <FeatureShowcase />
      <ServiceOverview />
      <Testimonial />
    </div>
  );
}
