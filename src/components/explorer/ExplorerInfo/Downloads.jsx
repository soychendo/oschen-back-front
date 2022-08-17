import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@context/GlobalContext';

const Downloads = () => {
  const downloadsContext = useContext(GlobalContext);

  useEffect(() => {
    downloadsContext.getData();
  }, [])

  return (
    <div id="downloads" data-id="3">
      {downloadsContext.data.map(item => (
        item.downloads !== ''
        ? <div key={item.id} className="align_items">
            <img src={'assets/content/default.svg'} alt={item.downloads} />
            <span>{item.downloads}</span>
          </div>
        : null
      ))}
    </div>
  );
}

export default Downloads;