import { pcRoutes, pcContainer } from '@scripts/selectors.js';

document.addEventListener('click', e => {
  const mipc = document.querySelector('.mipc');
  const idPc = document.querySelector('#thispc');

  pcContainer.forEach(elemento => {
  if(e.target === mipc || mipc.contains(e.target)) {
  elemento.style.display = 'none';
  idPc.style.display = 'flex';
  } 
  });
});

function arrayForExplorer() {
  pcRoutes.forEach(clase => {
  clase.addEventListener('click', () => {
  let id = Number(clase.getAttribute('id'));
  container(id);
  clase.classList.add('active');
  });
  });
}
function container(id) {
  pcContainer.forEach(elemento => {
  let elementId = Number(elemento.getAttribute('data-id'));
  pcRoutes.forEach(clase => {
  id === elementId ? (
    elemento.style.display = 'flex'
  ) : (
    elemento.style.display = 'none',
    clase.classList.remove('active')
  )
  });
  });
}

export { arrayForExplorer }; 