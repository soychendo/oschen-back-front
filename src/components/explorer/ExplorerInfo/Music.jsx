import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@context/GlobalContext';

const Music = () => {

  const audioContext = useContext(GlobalContext);

  useEffect(() => {
    audioContext.getData('music');
  }, [])

  return (
    <div id="music" data-id="4">
      {
      audioContext.data.length
        ? audioContext.data.map(audio => (
          <div 
            key={audio.name} 
            onDoubleClick={() => audioContext.getAudio(audio.id)} 
            className="align_items" 
            data-id={audio.id}
          >
            <img src={`assets/content/${audio.image}`} alt={audio.name} />
            <span>{audio.name}</span>
          </div>
        ))
        : null 
      }
    </div>
  );
}

export default Music;