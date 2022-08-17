import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@context/GlobalContext';

const Pictures = () => {
  const pictureContext = useContext(GlobalContext);

  useEffect(()=> {
    pictureContext.getData();
  }, []);

  return (
    <div id="pictures" data-id="5">
      {pictureContext.data.map(item => (
        item.pictures !== ''
        ? <div key={item.id} className="align_items">
            <img src={'assets/content/doc_image.svg'} alt={item.pictures} />
            <span>{item.pictures}</span>
          </div>
        : null
      ))}
    </div>
  );
}

export default Pictures;