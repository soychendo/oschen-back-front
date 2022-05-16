import React from 'react';
import {useDataFetch} from '@hooks/useDataFetch';

const Documents = () => {
  const url = 'http://localhost:5000/documents';
  const data = useDataFetch(url);

  return (
    <div id="documents" data-id="2">
      {data.map(document => (
        <div key={document.name} className="align_items">
        <img src={`assets/content/${document.image}`} alt={document.name} />
        <span>{document.name}</span>
      </div>
      ))}
    </div>
  );
}

export default Documents;