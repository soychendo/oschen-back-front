import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import desktopImage from '@images/explorer/desktop.svg';

const Desktop = () => {

  const { handleDesktop } = useContext(ExplorerContext);

  return (
    <li onClick={handleDesktop} data-id="1" className="desktop">
      <img src={desktopImage} alt="desktop" />
      <span>Desktop</span>
    </li>
  );
}

export default Desktop;