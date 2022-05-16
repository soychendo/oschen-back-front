import React, { useState } from 'react';

import ThisPc from '@components/explorer/explorerInfo/ThisPc';
import Desktop from '@components/explorer/explorerInfo/Desktop';
import Documents from '@components/explorer/explorerInfo/Documents';
import Downloads from '@components/explorer/explorerInfo/Downloads';
import Music from '@components/explorer/explorerInfo/Music';
import Pictures from '@components/explorer/explorerInfo/Pictures';
import Videos from '@components/explorer/explorerInfo/Videos';

import DescriptionClose from '@components/explorer/DescriptionClose/DescriptionClose';
import MenuManage from '@components/explorer/MenuManage/MenuManage';
import InputExplorer from '@components/explorer/InputExplorer/InputExplorer';
import ItemExplorer from '@components/explorer/ItemExplorer/ItemExplorer';

import ExplorerList from '@components/explorer/ExplorerList/ExplorerList';

const initialPc = {
  desktop: false,
  documents: false,
  downloads: false,
  music: false,
  pictures: false,
  videos: false,
}

const Explorer = () => {

  const [computer, setComputer] = useState(true); 
  const [route, setRoute] = useState(initialPc);
  const [count, setCount] = useState(8);

  const handleComputer = () => {
    setComputer(true);
    setRoute(initialPc);
    setCount(8)
  }

  const handleRoutes = () => {
  const routes = document.querySelectorAll('.RoutesPc > li')
  routes.forEach(route => {
    route.addEventListener('click', () => {
      let option = route.getAttribute('data-id');
      setTimeout(() => {
        const items = document.querySelectorAll('.align_items').length;
        setCount(items);
      }, 350);

      switch(true) {
        case option == 1: 
          setComputer(false);
          setRoute({desktop: true});
          break;
        case option == 2:
          setComputer(false);
          setRoute({documents: true});
          break;
        case option == 3: 
          setComputer(false);
          setRoute({downloads: true});
          break;
        case option == 4:
          setComputer(false);
          setRoute({music: true});
          break;
        case option == 5: 
          setComputer(false);
          setRoute({pictures: true});
          break;
        case option == 6:
          setComputer(false);
          setRoute({videos: true});
          break;      
        default:
          setRoute(initialPc)
          break;
      };
    });
  });
};

  return (
    <div id="Explorer" data-id="1" className="explorer">
    <div className="container_explorer">
      <DescriptionClose />
      <MenuManage />
      <InputExplorer />
      <ul id="ContentPc">
        <ExplorerList handleRoutes={handleRoutes} handleComputer={handleComputer} />  
        <section className="ContainerPc">
          <span>Folder</span>
          {computer ? <ThisPc /> : null}
          {route.desktop ? <Desktop /> : null}
          {route.documents ? <Documents /> : null}
          {route.downloads ? <Downloads /> : null}
          {route.music ? <Music /> : null}
          {route.pictures ? <Pictures /> : null}
          {route.videos ? <Videos /> : null}
        </section>
      </ul>
      <ItemExplorer count={count} />
    </div>
    </div>
  );
}

export { Explorer };