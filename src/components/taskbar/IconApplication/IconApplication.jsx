import React from 'react';

import TaskbarExtended from '@containers/Taskbar_System/TaskbarExtended';
import application from '@public/database/application';

const IconApplication = () => {

  return (
    <>
    {application.map(icon => ( 
    <div key={icon.name} className="icon_application">
      <ul>
      <li>
        <a href="#" className="btn-show" data-id={icon.id}>
          <img className="btn-show" src={`assets/pro/${icon.tumb}`} alt={icon.name} />
        </a>
        <TaskbarExtended name={icon.name} imagen={icon.imagen} id={icon.id} />
      </li>
      </ul>
    </div>
    ))}
    </>
    
  );
}

export default IconApplication;