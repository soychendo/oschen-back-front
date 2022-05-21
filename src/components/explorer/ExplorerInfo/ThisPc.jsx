import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import explorerDB from '@public/database/explorer';

const ThisPc = () => {

  const { 
    handleDesktop,
    handleDocuments,
    handleDownloads,
    handleSongs,
    handlePictures,
    handleVideos
   } = useContext(ExplorerContext);

   const thisRoutes = (id) => {
    switch(true) {
      case id == 1:
        handleDesktop()
        break;
      case id == 2:
        handleDocuments()
        break;
      case id == 3:
        handleDownloads()
        break;
      case id == 4:
        handleSongs()
        break;
      case id == 5:
        handlePictures()
        break;
      case id == 6:
        handleVideos()
        break;
      default:
        break;
    }
   }  


  return (
    <div className="ThisPc">
      {explorerDB.map(route => (
        <div 
        key={route.name} 
        id={route.id} 
        className="folder_pc"
        onClick={() => thisRoutes(route.id)}
        >
          <img src={`assets/explorer/folder/${route.image}`} alt={route.name} />
          <span>{route.name}</span>
      </div>
      ))}
   </div>
  );
}

export default ThisPc;