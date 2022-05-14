import React from 'react';
import {useData} from '@components/Data/useData';
// import useTotal from '../../Data/useTotal';

const Desktop = () => {

  const data = useData("desktop");

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