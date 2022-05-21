import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import Desktop from '@components/explorer/ExplorerList/Desktop';
import Document from '@components/explorer/ExplorerList/Document';
import Download from '@components/explorer/ExplorerList/Download';
import Music from '@components/explorer/ExplorerList/Music';
import Picture from '@components/explorer/ExplorerList/Picture';
import Video from '@components/explorer/ExplorerList/Video';
import OschenDrive from '@components/explorer/ExplorerList/OschenDrive';
import OschenThis from '@components/explorer/ExplorerList/OschenThis';

import pc from '@images/explorer/pc.svg';

const ExplorerList = () => {

  const { handleThis } = useContext(ExplorerContext);

  return (
    <li className="ExplorerList">
      <div onClick={handleThis} className="mipc">
        <img src={pc} alt="pc" />
        <span>Chendo</span>
      </div> 
      <ul className="RoutesPc">
        <Desktop />
        <Document />
        <Download />
        <Music />
        <Picture />
        <Video />
        <OschenDrive />
        <OschenThis />
      </ul>
  </li>
  );
}

export default ExplorerList;