import React, { useEffect, useState } from 'react';
import useMediaQuery from '@hooks/useMediaQuery';
import network from '@images/pro/red.svg';
import notify from '@images/pro/notify.svg';
import Clock from '@components/taskbar/Systems/Clock';

const Systems = () => { 
  const matches = useMediaQuery("(min-width: 769px)");
  const [hour, setHour] = useState( { date: new Date() } );

  useEffect(() => {
    let clear;
    (function() {
      clear = setInterval(
        () => setHour(
        { date: new Date() }), 1000
      )
    })();
    return () => clearInterval(clear)
  }, [hour])
  
  return (
    
    <div className="systems">
      {matches ? <img src={network} alt="red" /> : null}
      <Clock hour={hour.date} />
      {matches ?  <img src={notify} alt="Notifications" /> : null}
    </div>
  );
}

export default Systems;