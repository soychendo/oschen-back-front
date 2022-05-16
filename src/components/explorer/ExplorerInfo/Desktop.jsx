import React from 'react';
import {useDataFetch} from '@hooks/useDataFetch';

const Desktop = () => {
  const url = 'http://localhost:5000/desktop';
  const data = useDataFetch(url);

  return (
    <div id="desktop" data-id="1">
      {data.map(desktop => (
        <div key={desktop.name} className="align_items">
          <img src={`assets/content/${desktop.image}`} alt={desktop.name} />
          <span>{desktop.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Desktop;