import React from 'react';
import config from '@images/ism/start.svg';
import userLogo from '@images/ism/user.jpg';
import documents from '@images/ism/documents.svg';
import pictures from '@images/ism/pictures.svg';
import settings from '@images/ism/settings.svg';
import on_off from '@images/ism/power.svg';

const GridUser = () => {
  return (
    <div className="grid_user">
      <div className="icon_open">
        <img src={config} alt="open config on/off" />
        <span className="start">Start</span>
      </div>
      <div className="icon_config">
        <div className="icon_open">
          <img className="user" src={userLogo} alt="user account" />
          <span>chendo</span>
        </div>
        <div className="icon_open">
          <img src={documents} alt="documents" />
          <span>Documents</span>
        </div>
        <div className="icon_open">
          <img src={pictures} alt="Pictures" />
          <span>Pictures</span>
        </div>
        <div className="icon_open">
          <img src={settings} alt="Config" />
          <span>Settings</span>
        </div>
        <div className="icon_open">
          <img src={on_off} alt="on/off" />
          <span>Power</span>
        </div>
      </div>
    </div>
  );
}

export default GridUser;