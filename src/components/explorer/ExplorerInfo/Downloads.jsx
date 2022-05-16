import React from 'react';
import {useDataFetch} from '@hooks/useDataFetch';

const Downloads = () => {
  const url = 'http://localhost:5000/downloads';
  const data = useDataFetch(url);

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