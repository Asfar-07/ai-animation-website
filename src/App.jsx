import React from 'react';
import HeroSection from './components/HeroSection';
import ExplodedViewMode from './components/ExplodedViewMode';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <ExplodedViewMode />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
