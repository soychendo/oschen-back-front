import React, {createContext, useReducer, useRef, useState} from 'react';
import { dataReducer } from '@context/dataReducer';

import { 
  GET_DATA, 
  GET_SONG,
  CLOSE_PLAYER, 
  ON_PLAYER, 
  OFF_PLAYER,
  START_MENU,
  OUT_START_MENU,
} from '@context/types';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const initialState = {
    data: [],
    selectedSong: null,
    activeSong: false,
    isPlaying: false,
    activeMenu: false,
  }
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [explorador, setExplorador] = useState(false);

  const API = `${process.env.BACKEND_URL}/api/v1/windows`;

  const getData = async () => {
    try {
      const response = await fetch(API);
      const json = await response.json();
      dispatch({type: GET_DATA, payload: json})
    } catch (error) {
      console.log(error);
    }
  }

  const getAudio = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`);
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
  // State Start Menu 
  const toogleMenu = () => {
    dispatch({type: START_MENU});
  }
  const outStartMenu = () => {
    const os = document.querySelector('.os_system');
    window.addEventListener('mousedown', e => {
      if(e.target !== os && !os?.contains(e.target)) {
        dispatch({type: OUT_START_MENU})
      }
    }) 
  }

  return(
    <GlobalContext.Provider value={{
      data: state.data,
      selectedSong: state.selectedSong,
      activeSong: state.activeSong,
      isPlaying: state.isPlaying,
      explorer: explorador,
      activeMenu: state.activeMenu,
      toogleMenu,
      outStartMenu,
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
      openExplorer,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};
export {GlobalContext};