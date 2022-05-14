import React, {useState} from 'react';
import userArray from '@public/database/userArray';
import config from '@images/ism/start.svg';

const GridUser = () => {

  const [user, setUser] = useState(false);
  let className = 'GridUser';
  
  const handleUser = () => {
    setUser(!user);
  }
  user ? className = 'GridUser openUser' : null;

  const handleLeave = () => {
    setUser(false);
  }

  return (
    <div onMouseLeave={handleLeave} className={className}>
      <div onClick={handleUser} className="icon_open">
        <img src={config} alt="Open Config on/off" />
        {user 
        ? <span className="start">Start</span> 
        : <span style={{visibility: "hidden"}}>Chendo</span>}
      </div>
      <div className="icon_config">
        {userArray.map(item => (
        <div key={item.name} onClick={handleUser} style={{transition: "all .2s ease-in"}} className="icon_open">
          <img className={item.name} src={`assets/ism/${item.imagen}`} alt={item.name} />
          {user && <span style={{transition: "all .2s ease-in"}}>{item.name}</span> }
        </div>
        ))}
      </div>
    </div>
  );
}

export default GridUser;