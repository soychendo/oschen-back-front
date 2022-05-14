import React from 'react';
import explorerDB from '@public/database/explorer';

import pc from '@images/explorer/pc.svg';

const ExplorerList = ({handleRoutes, handleComputer}) => {
  return (
    <li className="ExplorerList">
      <div onClick={handleComputer} className="mipc">
        <img src={pc} alt="pc" />
        <span>Chendo</span>
      </div> 
      <ul className="RoutesPc">
        {explorerDB.map(route => (   
        <li 
          onLoad={handleRoutes} 
          key={route.name} 
          data-id={route.id} 
          className={route.name.toLowerCase()}
        >
          <img src={`assets/explorer/${route.image}`} alt={route.name} />
          <span>{route.name}</span>
        </li>
        ))}
      </ul>
  </li>
  );
}

export default ExplorerList;