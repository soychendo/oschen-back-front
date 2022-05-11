import React from 'react';
import GridUser from '@components/GridUser/GridUser';
import GridPrograms from '@components/GridPrograms/GridPrograms';
import GridApplications from '@components/GridApplications/GridApplications';
import useMediaQuery from '@components/Hooks/useMediaQuery';

const StartMenu = () => {

  const matches = useMediaQuery("(min-width: 769px)");

  return(
    <React.Fragment> 
      <div id="open_menu">
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