import React from 'react';
import GridUser from '@components/taskbar/GridUser/GridUser';
import GridPrograms from '@components/taskbar/GridPrograms/GridPrograms';
import GridApplications from '@components/taskbar/GridApplications/GridApplications';
import useMediaQuery from '@hooks/useMediaQuery';

const StartMenu = () => {

  const matches = useMediaQuery("(min-width: 769px)");

  return(
    <React.Fragment> 
      <div id="StartMenu">
      <div className="grid">
        <GridUser />
        <GridPrograms />
        {matches ? <GridApplications /> : null }
      </div>
      </div>
    </React.Fragment>
  );
}

export {StartMenu};