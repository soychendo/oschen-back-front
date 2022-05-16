import React from 'react';
import {useDataFetch} from '@hooks/useDataFetch';

const Pictures = () => {
  const url = 'http://localhost:5000/pictures';
  const data = useDataFetch(url);

  return (
    <div id="pictures" data-id="5">
      {data.map(picture => (
        <div key={picture.name} className="align_items">
        <img src={`assets/content/${picture.image}`} alt={picture.name} />
        <span>{picture.name}</span>
      </div>
      ))}
    </div>
  );
}

export default Pictures;