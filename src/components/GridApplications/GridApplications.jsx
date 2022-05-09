import React from 'react';
import MicrosoftEdge from '@images/pro/edge.svg';
import Photos from '@images/pro/photos.svg';
import Mail from '@images/pro/mail.svg';
import Store from '@images/pro/store.svg';

const GridApplications = () => {
  return (
    <div className="grid_application">
      <div className="google">
        <img src={MicrosoftEdge} alt="Microsoft Edge" />
        <span>Microsoft Edge</span>
      </div>
      <div className="photos">
        <img src={Photos} alt="Photos" />
        <span>Photos</span>
      </div>
      <div className="mail">
        <img src={Mail} alt="Mail" />
        <span>Mail</span>
      </div>
      <div className="store">
        <img src={Store} alt="Microsoft Store" />
        <span>Microsoft Store</span>
      </div>
    </div>
  );
}

export default GridApplications;