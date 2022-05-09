import React from 'react';
import ai from '@images/pro/ai.svg' ;
import ps from '@images/pro/ps.svg' ;
import alarm from '@images/pro/alarm.svg' ;
import calculator from '@images/pro/calculator.svg' ;
import calendar from '@images/pro/calendar.svg' ;
import camera from '@images/pro/camera.svg' ;
import folder from '@images/pro/folder.svg' ;
import firefox from '@images/pro/firefox.svg' ;
import chrome from '@images/pro/chrome.svg' ;
import contact from '@images/pro/contact.svg' ;
import maps from '@images/pro/maps.svg' ;

const GridPrograms = () => {
  return (
    <div className="grid_programs">
      <span className="letter">A</span>
      <div className="icon_open">
        <img src={ai} alt="Adobe Illustrator" />
        <span>Adobe Illustrator 2021</span>
      </div>
      <div className="icon_open">
        <img src={ps} alt="Adobe Photoshop" />
        <span>Adobe Photoshop 2021</span>
      </div>
      <div className="icon_open">
        <img src={alarm} alt="Alarms" />
        <span>Alarms & Clock</span>
      </div>
      <span className="letter">C</span>
      <div className="icon_open">
        <img src={calculator} alt="Calculator" />
        <span>Calculator</span>
      </div>
      <div className="icon_open">
        <img src={calendar} alt="Calendar" />
        <span>Calendar</span>
      </div>
      <div className="icon_open">
        <img src={camera} alt="Camera" />
        <span>Camera</span>
      </div>
      <div className="icon_open">
        <img src={folder} alt="Chendito" />
        <span>Chendito</span>
      </div>
      <div className="icon_open">
        <img src={folder} alt="Chendo" />
        <span>Chendo</span>
      </div>
      <span className="letter">F</span>
      <div className="icon_open">
        <img src={firefox} alt="Firefox" />
        <span>Firefox</span>
      </div>
      <span className="letter">G</span>
      <div className="icon_open">
        <img src={chrome} alt="Google Chrome" />
        <span>Google Chrome</span>
      </div>
      <span className="letter">M</span>
      <div className="icon_open">
        <img src={contact} alt="Mail" />
        <span>Mail</span>
      </div>
      <div className="icon_open">
        <img className="maps" src={maps} alt="Maps" />
        <span>Maps</span>
      </div>
  </div>
  );
}

export default GridPrograms;