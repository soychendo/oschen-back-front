// Context Menu -> Oschen -> @chendoio

const contextMenuCustom = () => {

  const contextMenu = document.querySelector('#chendomen')
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let cmWidth = contextMenu.offsetWidth;
    let cmHeight = contextMenu.offsetHeight;
  
    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
    
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = 'visible';
  });

  window.addEventListener('click', () => {
    contextMenu.style.visibility = 'hidden'
  })
 
}

export {contextMenuCustom};