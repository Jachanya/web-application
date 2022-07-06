import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import JoinSection from '../../components/JoinSection';
import FooterSection from '../../components/FooterSection';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <JoinSection />
      <FooterSection />
    </div>
  )
}

export default LandingPage
