import React from 'react';
import down from '@images/explorer/down.svg';
import help from '@images/explorer/help.svg';

const MenuManage = () => {
  return (
    <div className="menu_manage">
      <ul className="menu_help">
        <li>File</li>
        <li>Computer</li>
        <li>View</li>
      </ul>
      <div className="row_help">
        <img src={down} alt="row" />
        <img src={help} alt="help" />
      </div>
  </div>
  );
}

export default MenuManage;