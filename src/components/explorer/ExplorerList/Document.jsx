import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import documentImage from '@images/explorer/documents.svg';

const Documents = () => {

  const { handleDocuments } = useContext(ExplorerContext);

  return (
    <li onClick={handleDocuments} data-id="2" className="documents">
      <img src={documentImage} alt="documents" />
      <span>Documents</span>
    </li>
  );
}

export default Documents;