import React, { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';

import MiPc from '@images/explorer/pc.svg';
import documentView from '@images/explorer/document_view.svg';
import document from '@images/explorer/document.svg';

import minimize from '@images/pro/minimize.svg';
import maximize from '@images/pro/maximize.svg';
import close from '@images/pro/close.svg';

const DescriptionClose = () => {

  const { closeExplorer } = useContext(GlobalContext);

  return (
    <div className="description_close">
      <div className="description">
        <img src={MiPc} alt="computer" />
        <img src={documentView} alt="views" />
        <img src={document} alt="document" />
      </div>
      <div className="mmc">
        <img className="minimize" src={minimize} alt="minimize" />
        <img className="maximize" src={maximize} alt="maximize" />
        <img onClick={() => closeExplorer()} className="close" src={close} alt="close" />
      </div>
  </div>
  );
}

export default DescriptionClose;