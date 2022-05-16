import React from 'react';
import {useDataFetch} from '@hooks/useDataFetch';

const Music = () => {
  const url = 'http://localhost:5000/music';
  const data = useDataFetch(url);

  return (
    <div id="music" data-id="4">
      {data.map(music => (
        <div key={music.name} className="align_items" data-id={music.id}>
          <img src={`assets/content/${music.image}`} alt={music.name} />
          <span>{music.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Music;