import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';
import close from '@images/pro/close.svg';


const TaskbarExtended = ({name, imagen, id}) => {
  
  const [timer, setTimer] = useState(false)

  const { closeExplorer } = useContext(GlobalContext)

  useEffect(() => {
    setTimeout(() => {
      setTimer(true)
    }, 2000);
  }, [closeExplorer])

  return (
    <>
    {timer ? (
     <ul className="taskbar_extended">
     <li className="extended">
       <h1>{name}</h1>
       <img src={`assets/previews/${imagen}`}alt={name} />
       <a href="#" data-id={id}>
         <img onClick={() => closeExplorer()} className="close" src={close} alt="close" />
       </a>
     </li>
   </ul>
    ): (null)}
    </>
 
  );
}

export default TaskbarExtended;