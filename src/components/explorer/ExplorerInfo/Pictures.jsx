import React from 'react';
import {useData} from '@components/Data/useData';

const Pictures = () => {

  const data = useData("pictures");

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