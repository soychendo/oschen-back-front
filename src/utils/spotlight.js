//button hover effect -> spotlight

const spotlight = () => {

  const container = document.querySelectorAll('.icon_open');
  let spotlightSize = 'transparent 100px, rgba(27, 25, 27, .4) 200px)';

  container.forEach(effect => {
    effect.addEventListener('mousemove', e => updateSpotlight(e));
    function updateSpotlight(e) {
      effect.style.backgroundImage = `
      radial-gradient(
        circle at 
        ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, 
        ${spotlightSize}`;
      effect.style.borderImage = `
      radial-gradient(
        20% 75% at ${e.pageX}px ${e.pageY}px, 
        rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)) 1 / 1px / 0px stretch
      `;    
    }
  });
  container.forEach(effect => {
    effect.addEventListener('mouseleave', () => effect.removeAttribute('style'));
  });
  
}

export default spotlight;
