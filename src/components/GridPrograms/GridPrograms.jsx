import React from 'react';
import programs from '@public/database/programs';
import useHover from '@components/Hooks/useHover';


const GridPrograms = () => {
  return (
    <div className="GridPrograms">
      {programs.map(icon => (
      <React.Fragment key={icon.id}>
      {icon.letter ? <span className="letter">{icon.letter}</span> : null}
      <div onClick={useHover} className="icon_open">
      <img src={`assets/pro/${icon.imagen}`} alt={icon.name} />
      <span>{icon.name}</span>
      </div>
      </React.Fragment>
      ))}
    </div>
  );
}

export default GridPrograms;