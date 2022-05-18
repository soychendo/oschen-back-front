import React, { useContext, useRef } from 'react';
import HeroImage from '@components/HeroImage/HeroImage';
import Taskbar from '@containers/Taskbar_System/Taskbar';
import Audio from '@components/explorer/Audio/Audio';

import { Explorer } from '@containers/Explorer/Explorer';
import { GlobalContext } from '@context/GlobalContext';

const Oschen = () => {

  const { explorer, activeSong } = useContext(GlobalContext);
  const toggleRef = useRef();

  const toggleOutMenu = () => {
    toggleRef.current.setMenuRef();
  }

  return (
    <div id="Oschen">
      { explorer ? <Explorer toggleOutMenu={toggleOutMenu} /> : null}
      <HeroImage toggleOutMenu={toggleOutMenu} />
      { activeSong ? <Audio toggleOutMenu={toggleOutMenu} /> : null }
      <Taskbar toggleOutMenu={toggleOutMenu} ref={toggleRef} /> 
    </div>
  );
}

export default Oschen;
