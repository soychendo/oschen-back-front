//button hover effect -> spotlight -> Oschen

const  spotlight = () => {

  let container = document.querySelectorAll('.containerIcon');
  let box = document.querySelectorAll('.box');

  container.forEach(content => content.addEventListener('mousemove', e => updateEffect(e, content)));
  const updateEffect = (e, content) => {
    box.forEach(effect => {
      let parentPosition = getPosition(content);
      let xPosition = e.clientX - parentPosition.x - (effect.offsetWidth / 2);
      let translate3dValue = "translate3d(" + xPosition + "px," + "0" + "px," + " 0)";
      effect.style.transform = translate3dValue;
    });
  };
  const getPosition = elem => {
    let xPosition = 0;
  
    while(elem) {
      xPosition += (elem.offsetLeft - elem.scrollLeft + elem.clientLeft);
      elem = elem.offsetParent;
    };
    return {
      x: xPosition
    };
  };
  container.forEach(c => c.addEventListener('mouseleave', () => {
    box.forEach(e => e.removeAttribute('style'))
  }))
};

export default spotlight;
