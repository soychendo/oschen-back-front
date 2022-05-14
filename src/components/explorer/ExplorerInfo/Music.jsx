import React from 'react';
import {useData} from '@components/Data/useData';

const Music = () => {

  const data = useData("music")

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