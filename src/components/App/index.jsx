import React from 'react';
import Taskbar from '@containers/Taskbar_System/Taskbar';
import HeroImage from '@components/HeroImage/HeroImage';
import { Explorer } from '@containers/Explorer/Explorer';
import { GlobalProvider } from '../../context/GlobalContext';

const App = () => {

  return (
    <>
    <GlobalProvider>
      <Explorer />
    </GlobalProvider> 
    <HeroImage />
    <Taskbar />     
    
    </>
  );
}

export default App;