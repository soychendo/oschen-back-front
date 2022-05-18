import React, {createContext, useReducer, useRef, useState} from 'react';
import { dataReducer } from '@context/dataReducer';

import { 
  GET_DATA, 
  GET_SONG,
  CLOSE_PLAYER, 
  ON_PLAYER, 
  OFF_PLAYER, 
} from '@context/types';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const initialState = {
    data: [],
    selectedSong: null,
    activeSong: false,
    isPlaying: false,
  }
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [explorador, setExplorador] = useState(false);

  const getData = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/' + id);
      const json = await response.json();
      dispatch({type: GET_DATA, payload: json})
    } catch (error) {
      console.log(error);
    }
  }

  const getAudio = async (id) => {
    try {
      const response = await fetch('http://localhost:5000/music/' + id);
      const json = await response.json();
      dispatch({type: GET_SONG, payload: json})
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
  // State Explorer 
  const openExplorer = () => {
    setExplorador(!explorador);
  }
  const closeExplorer = () => {
    setExplorador(false);
  }

  return(
    <GlobalContext.Provider value={{
      data: state.data,
      selectedSong: state.selectedSong,
      activeSong: state.activeSong,
      isPlaying: state.isPlaying,
      explorer: explorador,
      onPlay,
      onPause,
      onToggle,
      audioRef,
      autoPlay,
      volume,
      closePlayer,
      getData,
      getAudio,
      closeExplorer,
      openExplorer
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};
export {GlobalContext};