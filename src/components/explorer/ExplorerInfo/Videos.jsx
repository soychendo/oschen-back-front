import React from 'react';
import {useDataFetch} from '@hooks/useDataFetch';

const Videos = () => {
  const url = 'http://localhost:5000/videos';
  const data = useDataFetch(url);

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