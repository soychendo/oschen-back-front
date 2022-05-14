import React from 'react';
import Taskbar from '@containers/Taskbar_System/Taskbar';
import HeroImage from '@components/HeroImage/HeroImage';
import { Explorer } from '@containers/Explorer/Explorer';
const App = () => {
  return (
    <>
      <Explorer />
      <HeroImage />
      <Taskbar />
      
    </>
  );
}

export default App;