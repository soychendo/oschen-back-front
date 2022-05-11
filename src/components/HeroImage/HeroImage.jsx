import React from 'react';
import heroImage from '@public/windows.jpg'

const HeroImage = () => {
  return (
    <header id="HeroImage">
      <img src={heroImage} alt="Windows 10 with React" />
    </header>
  );
}

export default HeroImage;