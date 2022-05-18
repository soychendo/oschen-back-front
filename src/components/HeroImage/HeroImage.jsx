import React from 'react';
import heroImage from '@public/windows.jpg'

const HeroImage = ({toggleOutMenu}) => {
  return (
    <header id="HeroImage">
      <img onMouseDown={toggleOutMenu} src={heroImage} alt="Windows 10 with React" />
    </header>
  );
}

export default HeroImage;