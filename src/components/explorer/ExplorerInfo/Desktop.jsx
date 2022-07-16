import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@context/GlobalContext';

const Desktop = () => {
  const desktopContext = useContext(GlobalContext);

  useEffect(() => {
    desktopContext.getData();
  }, []);

  return (
    <div id="desktop" data-id="1">
      {desktopContext.data.map(item => (
        item.desktop !== null
        ?  <div key={item.id} className="align_items">
            <img src={`assets/content/default.svg`} alt={item.desktop} />
            <span>{item.desktop}</span>
          </div>
        : null  
      ))}
    </div>
  );
}

export default Desktop;