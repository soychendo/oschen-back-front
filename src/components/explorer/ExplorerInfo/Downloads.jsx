import React from 'react';
import {useData} from '@components/Data/useData';

const Downloads = () => {

  const data = useData("downloads");

  return (
    <div id="downloads" data-id="3">
      {data.map(download => (
        <div key={download.name} className="align_items">
        <img src={`assets/content/${download.image}`} alt={download.name} />
        <span>{download.name}</span>
      </div>
      ))}
    </div>
  );
}

export default Downloads;