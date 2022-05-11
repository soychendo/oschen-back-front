import React, { useEffect, useState } from 'react';
import useMediaQuery from '@components/Hooks/useMediaQuery';
import network from '@images/pro/red.svg';
import notify from '@images/pro/notify.svg';
import Clock from '@components/Systems/Clock';

const Systems = () => { 
  const matches = useMediaQuery("(min-width: 769px)");
  const [hour, setHour] = useState( { date: new Date() } );

  useEffect(() => {

    (function() {
      setTimeout(
        () => setHour(
        { date: new Date() }), 1000
      )
    })();
    
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