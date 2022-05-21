import React, { useContext } from 'react';
import HeroImage from '@components/HeroImage/HeroImage';
import Taskbar from '@containers/Taskbar_System/Taskbar';
import Audio from '@components/explorer/Audio/Audio';

import { Explorer } from '@containers/Explorer/Explorer';
import { GlobalContext } from '@context/GlobalContext';
import { ExplorerProvider } from '@context/ExplorerContext';
import OsMenu from '@components/OsMenu/OsMenu';

import { contextMenuCustom } from '../../utils/OsContextMenu';


const Oschen = () => {

  const { explorer, activeSong } = useContext(GlobalContext);

  return (
    <div onLoad={contextMenuCustom} id="Oschen">
      <ExplorerProvider>
        { explorer ? <Explorer /> : null}
      </ExplorerProvider>
      <HeroImage />
      { activeSong ? <Audio /> : null }
      <Taskbar /> 
      <OsMenu />
    </div>
  );
}

export default Oschen;
