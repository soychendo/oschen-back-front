import React from 'react';
import programs from '@public/database/programs';
import SpotLight from '@utils/SpotLight';

const GridPrograms = () => {
  return (
    <div className="GridPrograms">
      {programs.map(icon => (
      <React.Fragment key={icon.id}>
      {icon.letter ? <span className="letter">{icon.letter}</span> : null}
      <div onLoad={SpotLight} className="containerIcon">
        <div className='box'></div>
        <div className="icon_open">
          <img src={`assets/pro/${icon.imagen}`} alt={icon.name} />
          <span>{icon.name}</span>
        </div>
      </div>
      </React.Fragment>
      ))}
    </div>
  );
}

export default GridPrograms;