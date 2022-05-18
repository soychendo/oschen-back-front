/*-----------------------------------------------------------------------------------

    Name: Windows 10 | chendo version
    Theme URI: @chendoio
    Description: Windows 10 React.js | - Portfolio - Chendo
    Author: @chendoio - chendo : developer and web designer
    Author URI: http://chendo.io
    Github: https://github.com/chendoio
    Youtube: https://youtube.com/chendoio

-----------------------------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@components/App/index';
import '@styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
