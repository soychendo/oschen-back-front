import React, { useState, useImperativeHandle, forwardRef } from 'react';
import IconApplication from '@components/taskbar/IconApplication/IconApplication';
import {Logo} from '@components/taskbar/LogoStartMenu/Logo';
import Systems from '@components/taskbar/Systems/Systems';
import {StartMenu} from '@containers/Taskbar_System/StartMenu';

const Taskbar = forwardRef(({toggleOutMenu}, ref) => {

  const [start, setStart] = useState(false);

  const handleToggle = () => {
    setStart(!start);
  }

  const setMenuRef = () => setStart(false);

  useImperativeHandle(ref, () => {
    return {
      setMenuRef
    }
  })
  
  return (
    <div id="taskbar_system_tray">
      <Logo toggle={handleToggle} />
      <div className="taskbar"></div>
      <div onMouseDown={toggleOutMenu} id="taskband">
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
})
export default Taskbar;