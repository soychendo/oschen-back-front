import React from 'react';
import DescriptionClose from '@components/descriptionClose/DescriptionClose';
import MenuManage from '@components/MenuManage/MenuManage';
import InputExplorer from '@components/InputExplorer/InputExplorer';
import ItemExplorer from '../../components/ItemExplorer/ItemExplorer';

const Explorer = () => {
  return (
    <div id="explorer" data-id="1" className="explorer">
      <div className="container_explorer">
        <DescriptionClose />
        <MenuManage />
        <InputExplorer />
        <ul id="this_pc">
          <li className="cont_pc">
              <div className="mipc">
                  <img src="../../src/assets/explorer/pc.svg" alt="pc" />
                  <span>Chendo</span>
              </div>
              <ul className="routes_pc">
                  <li className="" id="">
                      <img src="../../src/assets/explorer/.svg" alt="" />
                      <span></span>
                  </li>
              </ul>
          </li>
          <div className="container_pc">
              <span>Folder</span>
              <div id="thispc">
                  <div className="folder_pc">
                      <img src="../../src/assets/explorer/folder/" alt="" />
                      <span></span>
                  </div>
              </div>       
              <div id="desktop" data-id="1">
                  <div className="align_items">
                      <img src="../../src/assets/explorer/folder/default.svg" alt="" />
                      <span></span>
                  </div>
              </div>
              <div id="documents" data-id="2">
                  <div className="align_items">
                      <img src="../../src/assets/explorer/folder/default.svg" alt="" />
                      <span></span>
                  </div>
              </div>
              <div id="downloads" data-id="3">
                  <div className="align_items">
                      <img src="../../src/assets/explorer/folder/default.svg" alt="" />
                      <span></span>
                  </div>
              </div>
              <div id="music" data-id="4">
                  <div className="align_items" data-id="">
                      <img src="../../src/assets/explorer/doc_music.svg" alt="" />
                      <span></span>
                      <audio data-id="">
                          <source src="../../src/audioseven/audio/" />
                      </audio>
                  </div>
              </div>
              <div id="pictures" data-id="5">
                  <div className="align_items">
                      <img src="../../src/assets/explorer/doc_img.svg" alt="" />
                      <span data-id=""></span>
                  </div>
              </div>
              <div id="videos" data-id="6">
                  <div className="align_items">
                      <img src="../../src/assets/explorer/doc_video.svg" alt="" />
                      <span></span>
                  </div>
              </div>
              
          </div>
        </ul>
        <ItemExplorer />
      </div>
    </div>
  );
}

export { Explorer };