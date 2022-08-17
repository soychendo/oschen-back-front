import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@context/GlobalContext';

const Songs = () => {

  const audioContext = useContext(GlobalContext);

  useEffect(() => {
    audioContext.getData();
    console.log(audioContext.getData())
  }, []);

  return (
    <div id="music" data-id="4">
      {
      audioContext.data.length
        ? audioContext.data.map(audio => (
            audio.music !== ''
            ? <div 
            key={audio.id} 
            onClick={() => audioContext.getAudio(audio.id)} 
            className="align_items" 
            data-id={audio.id}
          >
            <img src={`assets/content/doc_music.svg`} alt={audio.pictures} />
            <span>{audio.music}</span>
          </div>
          : null
          
        ))
        : null 
      }
    </div>
  );
}

export default Songs;