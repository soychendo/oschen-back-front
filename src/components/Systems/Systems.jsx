import React, { useEffect, useState } from 'react';
import network from '@images/pro/red.svg';
import sound from '@images/pro/sound.svg';
import notify from '@images/pro/notify.svg';
import Clock from './Clock';

const Systems = () => { 

  const [hour, setHour] = useState({
    date: new Date()
  });

  useEffect(() => {

    (function() {
      setInterval(
        () => setHour({ date: new Date() }), 1000
      )
    })();
    
  }, [hour])
  
  return (
    
    <div className="systems">
      <img src={network} alt="red" />
      <img src={sound} alt="sound" />
      <span>Esp</span>
      <Clock hour={hour.date} />
      <img src={notify} alt="Notifications" />
    </div>
  );
}

export default Systems;