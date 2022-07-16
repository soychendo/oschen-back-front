import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@context/GlobalContext';

const Documents = () => {
  const documentContext = useContext(GlobalContext);

  useEffect(() => {
    documentContext.getData();
  }, []);

  return (
    <div id="documents" data-id="2">
      {documentContext.data.map(item => (
        item.documents !== null
        ? <div key={item.id} className="align_items">
            <img src={`assets/content/default.svg`} alt={item.documents} />
            <span>{item.documents}</span>
          </div>
        : null
      ))}
    </div>
  );
}

export default Documents;