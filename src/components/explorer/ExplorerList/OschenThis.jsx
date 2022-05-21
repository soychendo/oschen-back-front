import React from 'react';
import OschenImage from '@images/explorer/folder/chendo_disk.svg';

const OschenThis = () => {
  return (
    <li data-id="8" className="chendo_disk">
      <img src={OschenImage} alt="chendo_disk" />
      <span>Chendo</span>
    </li>
  );
}

export default OschenThis;
