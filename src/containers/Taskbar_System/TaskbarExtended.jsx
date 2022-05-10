import React from 'react';
import close from '@images/pro/close.svg';

const TaskbarExtended = (props) => {
  return (
    <ul className="taskbar_extended">
    <li className="extended">
      <h1>{props.name}</h1>
      <img src={`assets/previews/${props.imagen}`}alt={props.name} />
      <a href="#" data-id={props.id}>
        <img className="close" src={close} alt="close" />
      </a>
    </li>
</ul>
  );
}

export default TaskbarExtended;