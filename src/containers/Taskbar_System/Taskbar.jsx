import React, { useState } from 'react';
import IconApplication from '@components/taskbar/IconApplication/IconApplication';
import {Logo} from '@components/taskbar/LogoStartMenu/Logo';
import Systems from '@components/taskbar/Systems/Systems';
import {StartMenu} from '@containers/Taskbar_System/StartMenu';

const Taskbar = () => {

  const [start, setStart] = useState(false);

  const handleToggle = () => {
    setStart(!start);
  }

  return (
    <div id="taskbar_system_tray">
      <Logo toggle={handleToggle} />
      <div className="taskbar"></div>
      <div id="taskband">
        <div className="applications">
          <IconApplication />
        </div>
      </div>
      <div className="system_tray">
        <Systems />
      </div>
      { start ? <StartMenu /> : null }
    </div>
  );
}
export default Taskbar;