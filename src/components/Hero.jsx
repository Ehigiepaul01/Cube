import React from 'react';
import houseImage from '../assets/house.jpg';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>we are coming soon</h1>
        <h5>Stay tuned for something amazing</h5>

        <div className="image">
          <img src={houseImage} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
