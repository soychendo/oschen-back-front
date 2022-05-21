import React, { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';

import TaskbarExtended from '@components/taskbar/IconApplication/TaskbarExtended';
import application from '@public/database/application';

const IconApplication = () => {

  const { openExplorer, explorer, outStartMenu } = useContext(GlobalContext);

  return (
    <>
    {application.map(icon => ( 
    <div key={icon.name} className="icon_application">
      <ul>
      <li onMouseDown={outStartMenu}>
        <a onClick={openExplorer} className="btn-show" data-id={icon.id}>
          <img className="btn-show" src={`assets/pro/${icon.tumb}`} alt={icon.name} />
        </a>
        {
        explorer
          ? <TaskbarExtended name={icon.name} imagen={icon.imagen} id={icon.id} /> : null
        }
      </li>
      </ul>
    </div>
    ))}
    </>
    
  );
}

export default IconApplication;