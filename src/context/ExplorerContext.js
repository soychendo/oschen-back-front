import React, { createContext, useReducer } from 'react';
import { routeReducer } from '@context/routeReducer';

import { 
  SET_EXPLORER,
  SET_DESKTOP, 
  DOCUMENTS,
  DOWNLOADS, 
  PICTURES, 
  SONGS,
  VIDEOS 
} from "@context/types";;

const ExplorerContext = createContext();

const ExplorerProvider = ({children}) => {

  const initialState = {
    desktop: false,
    documents: false,
    downloads: false,
    songs: false,
    pictures: false,
    videos: false,
    explorer: true
  }

  const [state, dispatch] = useReducer(routeReducer, initialState);

  const handleThis = () => dispatch({type: SET_EXPLORER})
  const handleDesktop = () => dispatch({type: SET_DESKTOP})
  const handleDocuments = () =>dispatch({type: DOCUMENTS})
  const handleDownloads = () => dispatch({type: DOWNLOADS})
  const handleSongs = () => dispatch({type: SONGS})
  const handlePictures = () => dispatch({type: PICTURES})
  const handleVideos = () => dispatch({type: VIDEOS})

  return (
    <ExplorerContext.Provider value={{
      handleThis,
      handleDesktop,
      handleDocuments,
      handleDownloads,
      handleSongs,
      handlePictures,
      handleVideos,
      explorer: state.explorer,
      desktop: state.desktop,
      documents: state.documents,
      downloads: state.downloads,
      songs: state.songs,
      pictures: state.pictures,
      videos: state.videos
    }}>
      {children}
    </ExplorerContext.Provider>
  );
} 

export {ExplorerContext};
export {ExplorerProvider};