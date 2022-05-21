import React from 'react';
import OschenImage from '@images/explorer/folder/chendo_disk.svg';

const OschenDrive = () => {
  return (
    <li data-id="7" className="chendo_disk">
      <img src={OschenImage} alt="chendo_disk" />
      <span>Oschen</span>
    </li>
  );
}

export default OschenDrive;
