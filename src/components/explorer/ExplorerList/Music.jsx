import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import musicImage from '@images/explorer/music.svg';

const Music = () => {

  const { handleSongs } = useContext(ExplorerContext);

  return (
    <li onClick={handleSongs} data-id="4" className="music">
      <img src={musicImage} alt="music" />
      <span>Music</span>
    </li>
  );
}

export default Music;