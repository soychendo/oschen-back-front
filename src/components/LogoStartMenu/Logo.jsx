import React from 'react';
import logoStartMenu from '@images/logo_win.svg'

const Logo = () => {
  return (
    <div id="startmenu" className="hide_menu">
      <img className="logo_win" src={logoStartMenu} alt="Start Menu" />
    </div>
  );
}

export { Logo };