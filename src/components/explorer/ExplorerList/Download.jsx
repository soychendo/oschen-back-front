import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import downloadImage from '@images/explorer/downloads.svg';

const Downloads = () => {

  const { handleDownloads } = useContext(ExplorerContext);

  return (
    <li onClick={handleDownloads} data-id="3" className="download">
      <img src={downloadImage} alt="download" />
      <span>Downloads</span>
    </li>
  );
}

export default Downloads;