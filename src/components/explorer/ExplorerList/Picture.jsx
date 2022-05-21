import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import pictureImage from '@images/explorer/pictures.svg';

const Picture = () => {

  const { handlePictures } = useContext(ExplorerContext);

  return (
    <li onClick={handlePictures} data-id="5" className="picture">
      <img src={pictureImage} alt="picture" />
      <span>Picture</span>
    </li>
  );
}

export default Picture;