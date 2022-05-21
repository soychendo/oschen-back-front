import React, { useContext, useEffect } from 'react';
import OschenMouseDown from '@utils/OschenMouseDown';
import { ExplorerContext } from '@context/ExplorerContext';

import ThisPc from '@components/explorer/explorerInfo/ThisPc';
import Desktop from '@components/explorer/explorerInfo/Desktop';
import Documents from '@components/explorer/explorerInfo/Documents';
import Downloads from '@components/explorer/explorerInfo/Downloads';
import Songs from '@components/explorer/explorerInfo/Songs';
import Pictures from '@components/explorer/explorerInfo/Pictures';
import Videos from '@components/explorer/explorerInfo/Videos';

import DescriptionClose from '@components/explorer/DescriptionClose/DescriptionClose';
import MenuManage from '@components/explorer/MenuManage/MenuManage';
import InputExplorer from '@components/explorer/InputExplorer/InputExplorer';
import ItemExplorer from '@components/explorer/ItemExplorer/ItemExplorer';

import ExplorerList from '@components/explorer/ExplorerList/ExplorerList';
import useMediaQuery from '@hooks/useMediaQuery';
import { touring } from '@utils/OschenMouseDown';

import { useZindex } from '@hooks/useZindex';

const Explorer = () => {

  const matches = useMediaQuery("(min-width: 769px)");
  const ce = document.querySelector('.ce')
  const { active, changeZindex } = useZindex(ce)

  const { 
    explorer,
    desktop,
    documents,
    downloads,
    songs,
    pictures,
    videos 
  } = useContext(ExplorerContext);

  return (
    <>
    <div 
    onMouseDown={OschenMouseDown}
    onLoad={touring} 
    id="Explorer" 
    data-id="1" 
    className="explorer"
    >
    <div onMouseDown={changeZindex} style={active}  className="container_explorer ce">
      <DescriptionClose />
      <MenuManage />
      <InputExplorer />
      <ul id="ContentPc">
        { matches ? <ExplorerList/> : null }
        <section className="ContainerPc">
          <span>Folder</span>
          {explorer ? <ThisPc /> : null}
          {desktop ? <Desktop /> : null}
          {documents ? <Documents /> : null}
          {downloads ? <Downloads /> : null}
          {songs ? <Songs /> : null}
          {pictures ? <Pictures /> : null}
          {videos ? <Videos /> : null}
        </section>
      </ul>
      <ItemExplorer />
    </div>
    </div>
    </>
  );
}

export { Explorer };