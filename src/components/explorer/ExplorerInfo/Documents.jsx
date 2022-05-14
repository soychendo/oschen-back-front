import React from 'react';
import {useData} from '@components/Data/useData';

const Documents = () => {

  const data = useData("documents");

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