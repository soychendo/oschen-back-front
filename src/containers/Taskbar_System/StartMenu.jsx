import React from 'react';
import {Logo} from '@components/LogoStartMenu/Logo';
import GridUser from '@components/GridUser/GridUser';
import GridPrograms from '@components/GridPrograms/GridPrograms';
import GridApplications from '@components/GridApplications/GridApplications';

const StartMenu = () => {
  return(
    <React.Fragment> 
    <Logo />
    <div id="open_menu">
      <div className="grid">
        <GridUser />
        <GridPrograms />
        <GridApplications />
      </div>
    </div>
    </React.Fragment>
  );
}

export {StartMenu};