import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import arrowRight from '@images/explorer/arrow_right.svg'
import arrowLeft from '@images/explorer/arrow_left.svg'
import down from '@images/explorer/down.svg'
import refresh from '@images/explorer/refresh.svg'

const InputExplorer = () => {

  const { handleThis } = useContext(ExplorerContext)

  return (
    <div className="input_explorer">
      <div className="arrows">
        <img onClick={handleThis} src={arrowRight} alt="right" />
        <img src={arrowLeft} alt="left" />
      </div>
      <div className="pc_information">
        <input type="text" placeholder="This Pc" spellCheck="false" />
        <div className="arrow_refresh">
          <img src={down} alt="down" />
          <img src={refresh} alt="refresh" />
        </div>
      </div>
      <div className="search_chendo">
        <input type="search" placeholder="Search" spellCheck="false" />
      </div>
  </div>
  );
}

export default InputExplorer;