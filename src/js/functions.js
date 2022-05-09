
/*-----------------------------------------------------------------------------------

    Name: Windows 10 | chendo version
    Theme URI: @chendito
    Description: Windows 10 - Clone 70% | - Portfolio - Chendo
    Author: @chendito - chendo : developer and web designer
    Author URI: http://chendo.io
    Github: https://github.com/chendito
    Youtube: https://youtube.com/chendito

-----------------------------------------------------------------------------------*/
import { 
  // clear calc
  resultsCalc,
  taskbar_system_tray,
  selector_explorer,
  open_menu,
  grid_user_span,
  selector_calc, 
  img, 
  grid_user, 
  hour_ecuador,
  chendoCalc, 
  application,
  menu,
  extendedClose,
  taskbarExtended,
  showOp,
  showResult,
  explorer,
  contextMenu,
} from "@scripts/selectors.js";
// open menu - start menu
export function openMenu(e) {
  if(e.target == menu || menu.contains(e.target)) { 
    open_menu.classList.toggle('openMenu')
    explorer.style.zIndex = 0;
    chendoCalc.style.zIndex = 0;
  }
}
// Function, click outside the container
document.addEventListener('mousedown', e => {
  if (e.target !== taskbar_system_tray && !taskbar_system_tray.contains(e.target)) {
    open_menu.classList.remove('openMenu');
  }
});
// Close Explorer
export function closeExplorer() {
  explorer.removeAttribute('style');
  taskbarExtended.forEach(extend => {
    const idExplorer = Number(extend.querySelector('a').getAttribute('data-id'));
    if(idExplorer == 1) {
      extend.removeAttribute('style');
    }
  });
}
// Close Calculator - filter div
export function closeCalc() {
  chendoCalc.removeAttribute('style');
  taskbarExtended.forEach(extend => {
    const idExplorer = Number(extend.querySelector('a').getAttribute('data-id'));
    if(idExplorer == 2) {
      extend.removeAttribute('style');
    }
  });
  clearCalc();
}
// close extended for id | close
extendedClose.forEach(close => {
  close.addEventListener('click', e => {
    const clear = close.parentElement;
    const id = Number(close.querySelector('a').getAttribute('data-id'));
    const target = e.target.classList.contains('close');
    if(target && id === 1) {
      explorer.removeAttribute('style');
      clear.removeAttribute("style");
    } else if (target && id === 2) {
      chendoCalc.removeAttribute('style');
      clear.removeAttribute("style");
      closeCalc();
    } else {
      return;
    }
  });
});
// traverse to calculate
export function touring() {
  selector_explorer.forEach( selectorExplorer => selectorExplorer.style.position = 'absolute');
  selector_calc.forEach( selectorCalc => selectorCalc.style.position = 'absolute');
}
// Filter the px, and then give movement to the div...
export function filter(e) {
    let target = e.target;
    
    if (!target.classList.contains('container_explorer') && !target.classList.contains('calculators')) {
      return;
    }
    target.moving = true;
    //Check if Mouse events exist on users' device
    if (e.clientX) {
      target.oldX = e.clientX; // If they exist then use Mouse input
      target.oldY = e.clientY;
    } else {
      target.oldX = e.touches[0].clientX; // Otherwise use touch input
      target.oldY = e.touches[0].clientY;
    }
    //Since there can be multiple touches, you need to mention which touch to look for, we are using the first touch only in this case
  
    target.oldLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1;
    target.oldTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1;
   
    document.onmousemove = dr;
    document.ontouchmove = dr;

    function dr(event) {
      event.preventDefault();
      if (!target.moving) {
        return;
      }
      if (event.clientX) {
        target.distX = event.clientX - target.oldX;
        target.distY = event.clientY - target.oldY;
      } else {
        target.distX = event.touches[0].clientX - target.oldX;
        target.distY = event.touches[0].clientY - target.oldY;
      }
  
      target.style.left = target.oldLeft + target.distX + "px";
      target.style.top = target.oldTop + target.distY + "px";

    }
    function endDrag() {
      target.moving = false;
    }
    target.onmouseup = endDrag;
    target.ontouchend = endDrag;
}
// show image:hover | start menu
export function srcOver() {
  img.setAttribute('src', '../../src/img/logo_win-hover.svg');
}
export function srcOut() {
  img.setAttribute('src', '../../src/img/logo_win.svg');
}
export function gridOver() {
  grid_user.classList.add('grid-open');
  opa();
}
export function gridOut() {
  grid_user.classList.remove('grid-open');
  opa();
}
// style submenu | start menu
function opa() {
  grid_user_span.forEach( span => {
    if(grid_user.classList.contains('grid-open')){
      span.style.transitionDelay = '1.1s';
      span.style.visibility = 'visible';
    } else {
      span.style.transitionDelay = '0s';
      span.style.visibility = 'hidden';
    }
  })
}
// hour - Ecuador - taskbar
export function dateHour() {
  let d = new Date();

  let time  = d.toLocaleString('en-US', { timeZone: 'America/Guayaquil', hour: 'numeric', minute: 'numeric', second: 'numeric',hour12: true });
  let currenTime = `${time}`;

  hour_ecuador.innerText = currenTime;
  setTimeout(dateHour, '1000');
  return true;

}
//<---------- shows display and tumb ------->
export function showPreview() {
  let id_explorer = Number(explorer.getAttribute('data-id'));
  let id_chendoCalc = Number(chendoCalc.getAttribute('data-id'));

  application.forEach(taskbar => {
    taskbar.addEventListener('click', () => {
      detectedForZindexOver({ idE: id_explorer, idC: id_chendoCalc }); 
      detectedForZindexOut({ idE: id_explorer, idC: id_chendoCalc });
      const id_tumb = Number(taskbar.parentElement.parentElement.querySelector('a').getAttribute('data-id'));
      if(id_tumb == id_explorer){
        explorer.style.display = 'block';
        explorer.style.zIndex = 1;
        chendoCalc.style.zIndex = 0;
        open_menu.classList.remove('openMenu');
        uiExtended(id_explorer);
      } else if(id_tumb == id_chendoCalc) {
          chendoCalc.style.display = 'block';
          chendoCalc.style.zIndex = 1;
          explorer.style.zIndex = 0;
          open_menu.classList.remove('openMenu');
          uiExtended(id_chendoCalc);
        } else {
          document.removeAttribute('style');
        }  
    })
  })
}
// uiExtended 
function uiExtended(ids) {
  taskbarExtended.forEach( extend => {
    let id = Number(extend.querySelector('a').getAttribute('data-id'));
    if(id !== ids) return;
    if(!(extend.style.display == 'block')) { setTimeout(() => extend.style.display = 'block', 2000 );} 
  });
}
// Function Detected, for zIndex - mouse over
function detectedForZindexOver({ idE, idC }) {
  taskbarExtended.forEach(element => {
    const id = Number(element.querySelector('a').getAttribute('data-id'));
    element.parentElement.addEventListener('mouseover', () => {
      if(id == idE && element.style.display == 'block') { explorer.style.zIndex = 0; chendoCalc.style.zIndex = -1} 
      if(id == idC && element.style.display == 'block') { chendoCalc.style.zIndex = 0; explorer.style.zIndex = -1} 
    });
  });
}
// Function Detected, for zIndex - mouse out
function detectedForZindexOut({ idE, idC }) {
  taskbarExtended.forEach(element => {
    const id = Number(element.querySelector('a').getAttribute('data-id'));
    element.parentElement.addEventListener('mouseout', () => {
    if(id == idE) { explorer.style.zIndex = 1; chendoCalc.style.zIndex = 0;} 
    if(id == idC) { chendoCalc.style.zIndex = 1; explorer.style.zIndex = 0;}
    });
  });
}
// function mouse down default
export function defaultOver() {
  document.addEventListener('mousedown', e => {
    let targetExplorer = e.target.classList.contains('container_explorer');
    let targetCalc = e.target.classList.contains('calculators');
    if(targetExplorer) { explorer.style.zIndex = 1; chendoCalc.style.zIndex = 0; }
    if(targetCalc) { chendoCalc.style.zIndex = 1; explorer.style.zIndex = 0; }
  });
}
// Menu Chen | Context Menu, Customs
export function contextMenuCustom(e) {
  e.preventDefault();
  let x = e.offsetX, y = e.offsetY,
  winWidth = window.innerWidth,
  winHeight = window.innerHeight,
  cmWidth = contextMenu.offsetWidth,
  cmHeight = contextMenu.offsetHeight;

  x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
  
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
}
// Hidden Context Menu
export function clickContextMenu() {
  contextMenu.style.visibility = "hidden";
}
// Refresh Windows
export function refresh() {
  window.location.reload();
}
// Calculator windows functions
// show display --> top
export function addDisplay(input, character){
  showOp.textContent = input.value + character.trim();
  input.value == null || input.value == ""
  ?  input.value = character.trim()
  :  input.value += character.trim();
}
// back --> char --> del
export function delBack(button) {
  button.value = button.value.substring(0, button.value.length - 1)
} 
// change sign btn
export function changeSign(button){
  button.value.substring(0, 1) == "-"
  ? button.value = button.value.substring(1, button.value.length)
  : button.value = "-" + button.value
}
// show result 
export function showCalc(calc){
  showResult.textContent = eval(calc.value)
}
// check char and num
export function checkNum(str) {
  let i = 0;
  while(i < str.length ) {
    let char = str.substring(i, i+1);
    if (char < "0" || char > "9") {
      if (char != "/" && char != "*" && char != "+" && char != "-" && char != ".") {
        alert("invalid entry!")
        return false;
      }
    }
    i++;
  };
  return true;
}
// clear calc close
function clearCalc() {
  resultsCalc.value = '',
  showResult.textContent = '0';
  showOp.textContent = '';
}