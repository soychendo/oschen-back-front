import React, {createContext, useReducer, useRef} from 'react';
import { dataReducer } from '@context/dataReducer';
import { GET_SONGS, GET_SONG, CLOSE_PLAYER, ON_PLAYER, OFF_PLAYER } from '@context/types';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const initialState = {
    songs: [],
    selectedSong: null,
    activeSong: false,
    isPlaying: false
  }
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const getAudios = async () => {
    try {
      const response = await fetch('http://localhost:5000/music');
      const data = await response.json();
      dispatch({type: GET_SONGS, payload: data})
    } catch (error) {
      console.log(error);
    }
  }

  const getAudio = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/music/' + id);
      const data = await response.json();
      dispatch({type: GET_SONG, payload: data})
    } catch (error) {}
    
  }
  const audioRef = useRef();

  const onPlay = () => {
    const audio = audioRef.current;
    audio.play();
    dispatch({type: ON_PLAYER});
  }
  const onPause = () => {
    const audio = audioRef.current;
    audio.pause();
    dispatch({type: OFF_PLAYER});
  }
  const onToggle = async () => {
    const audio = audioRef.current;
    if( audio.paused ) { return onPlay(); } 
    else { if( !audio.paused ) { return onPause(); } }
  }
  const autoPlay = () => {
    const audio = audioRef.current;
    audio.load();
    audio.play();
  }
  const volume = (e) => {
    const volumen = e.target.value;
    const audio = audioRef.current;
    audio.volume = volumen;
  }
  const closePlayer = () => {
    dispatch({type: CLOSE_PLAYER});
  }

  return(
    <GlobalContext.Provider value={{
      songs: state.songs,
      selectedSong: state.selectedSong,
      activeSong: state.activeSong,
      isPlaying: state.isPlaying,
      onPlay,
      onPause,
      onToggle,
      audioRef,
      autoPlay,
      volume,
      closePlayer,
      getAudios,
      getAudio
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};
export {GlobalContext};