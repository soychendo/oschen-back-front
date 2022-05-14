import React from 'react';
import {useData} from '@components/Data/useData';

const Videos = () => {

  const data = useData("videos");

  return (
    <div id="videos" data-id="6">
      {data.map(video => (
        <div key={video.name} className="align_items">
        <img src={`assets/content/${video.image}`} alt={video.name} />
        <span>{video.name}</span>
      </div>
      ))}
    </div>
  );
}

export default Videos;