import React from 'react';
import logoImage from '../assets/logo1.jpg';

const LogoSection = () => {
  return (
    <section>
      <div className="logo">
        <img src={logoImage} alt="logo" />
      </div>
    </section>
  );
};

export default LogoSection;
