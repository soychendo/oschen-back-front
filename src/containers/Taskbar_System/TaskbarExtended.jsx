import React from 'react';

const TaskbarExtended = () => {
  return (
    <ul className="taskbar_extended">
    <li className="extended">
        <h1></h1>
        <img src="../../src/img/previews/" alt="" />
        <a href="#" data-id="">
            <img className="close" src="../../src/img/pro/close.svg" alt="close" />
        </a>
    </li>
</ul>
  );
}

export default TaskbarExtended;