import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import videoImage from '@images/explorer/videos.svg';

const Video = () => {

  const { handleVideos } = useContext(ExplorerContext);

  return (
    <li onClick={handleVideos} data-id="6" className="video">
      <img src={videoImage} alt="video" />
      <span>Video</span>
    </li>
  );
}

export default Video;