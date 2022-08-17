import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@context/GlobalContext';
import OschenMouseDown from '@utils/OschenMouseDown';

import { useZindex } from '@hooks/useZindex';

import close from '@images/pro/close.svg';

const Audio = () => {

  const ca = document.querySelector('.ca')
  const { active, changeZindex } = useZindex(ca)

  const { 
    selectedSong, 
    closePlayer, 
    audioRef, 
    onPlay, 
    onToggle,
    autoPlay,
    volume,
    isPlaying 
  } = useContext(GlobalContext);

  useEffect(() => {
    changeZindex()
    console.log(selectedSong)
  }, [])

  return (
    <div
    onMouseMove={changeZindex()}
    onMouseDown={OschenMouseDown}
    onLoad={() => onPlay()} 
    onEnded={autoPlay} 
    id="Audio"
    className="audio ca"
    style={active}
    >
      <div className="mmc">
          <img onClick={() => closePlayer()} className="close" src={close} alt="close" />
      </div>
      <div className="AudioContainer">
        <div className="AudioDescription">
          {selectedSong 
            ?  (
            <div key={selectedSong.id}>
              <div className="AlbumImg">
                <img 
                  src={`assets/audioseven/album/${selectedSong.pictures}.jpg`} 
                  alt={selectedSong.music} 
                  style={{pointerEvents: 'none'}}
                />
              </div>
              <marquee 
              behavior="scroll" 
              direction="left" 
              width="100%" 
              bahaviur="alternate" 
              align="middle" 
              scrolldelay="5" 
              scrollamount="4" 
              loop="infinite" 
              hspace="10px" 
              vspace="5px"
              >
                  <p className="AudioText">{selectedSong.music}</p>
              </marquee>
              <audio ref={audioRef} src={`audio/${selectedSong.music_mp3}.mp3`}></audio>
            </div> // The End Unique Key
          ): (
            <p className="AudioText">Add To Song</p> 
          )}
        </div>
      </div>
      <div id="play">
        <div 
          onClick={onToggle} 
          className={isPlaying ? 'btn-stop' : 'btn-play'} 
          alt="play">
        </div>  
      </div>
      <div className="volumen">
        <input 
        onInput={volume}
        type="range" 
        name="volumen" 
        id="volumen" 
        min="0" 
        max="1" 
        step="0.01" 
        defaultValue="0.7"
        /> 
      </div>
    </div>
  );
}

export default Audio;