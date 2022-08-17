import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@context/GlobalContext';

const Videos = () => {
  const videoContext = useContext(GlobalContext);

  useEffect(() => {
    videoContext.getData();
  }, []);

  return (
    <div id="videos" data-id="6">
      {videoContext.data.map(item => (
        item.videos !== ''
        ? <div key={item.id} className="align_items">
            <img src={'assets/content/doc_video.svg'} alt={item.videos} />
            <span>{item.videos}</span>
          </div>
        : null
      ))}
    </div>
  );
}

export default Videos;