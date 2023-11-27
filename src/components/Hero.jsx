import React from 'react';
import bikeImage from '../assets/bike.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>we are coming soon</h1>
        <h5>Stay tuned for something amazing</h5>

        <div className="image">
          <img src={bikeImage} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
