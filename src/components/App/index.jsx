import React from 'react';
import Oschen from '@components/App/Oschen';
import { GlobalProvider } from '@context/GlobalContext';

const App = () => {

  return (
    <>
    <GlobalProvider>
      <Oschen />
    </GlobalProvider>      
    </>
  );
}

export default App;