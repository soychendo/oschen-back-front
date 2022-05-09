import React from 'react';
import network from '@images/pro/red.svg';
import sound from '@images/pro/sound.svg';
import notify from '@images/pro/notify.svg';

const Systems = () => {
  return (
    <div className="systems">
      <img src={network} alt="red" />
      <img src={sound} alt="sound" />
      <span>Esp</span>
      <span className="hour_ecuador"></span>
      <img src={notify} alt="Notifications" />
    </div>
  );
}

export default Systems;