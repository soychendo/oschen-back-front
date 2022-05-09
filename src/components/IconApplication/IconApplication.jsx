import React from 'react';
import TaskbarExtended from '@containers/Taskbar_System/TaskbarExtended';

const IconApplication = () => {
  return (
    <div className="icon_application">
      <ul>
        <li>
          <img className="absolute" src="../../src/img/previews/" alt="" />
          <a href="#" className="btn-show" data-id="">
            <img className="btn-show" src="../../src/img/pro/" alt="" />
          </a>
          <TaskbarExtended />
        </li>
      </ul>
    </div>
  );
}

export default IconApplication;