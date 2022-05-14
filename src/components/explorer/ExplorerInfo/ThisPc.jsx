import React from 'react';
import explorerDB from '@public/database/explorer';

const ThisPc = () => {
  return (
    <div className="ThisPc">
      {explorerDB.map(route => (
        <div key={route.name} className="folder_pc">
          <img src={`assets/explorer/folder/${route.image}`} alt={route.name} />
          <span>{route.name}</span>
      </div>
      ))}
   </div>
  );
}

export default ThisPc;