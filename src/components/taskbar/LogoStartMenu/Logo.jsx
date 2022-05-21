import React, { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';

import logoStartMenu from '@images/logo_win.svg'

const Logo = () => {

  const { toogleMenu } = useContext(GlobalContext)

  return (
    <div onClick={toogleMenu} id="startmenu" className="hide_menu">
      <img className="logo_win" src={logoStartMenu} alt="Start Menu" />
    </div>
  );
}

export { Logo };