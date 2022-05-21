
// Only Computer // No touch -> Oschen -> @chendoio

function touring() {
  const parentPositionExplorer = document.querySelectorAll('.container_explorer');
  const parentPositionAudio = document.querySelectorAll('.audio');
  parentPositionExplorer.forEach(change => change.style.position = 'absolute');
  parentPositionAudio.forEach(change => change.style.position = 'absolute');
}
const OschenMouseDown = (e) => {

  let target = e.target
  if(!target.classList.contains('audio') && !target.classList.contains('container_explorer') ) return;

  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);

  target.prevX = e.clientX;
  target.prevY = e.clientY;

  function mousemove(e) {

    target.newX = target.prevX - e.clientX;
    target.newY = target.prevY - e.clientY;

    target.docuLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1;
    target.docuTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1;

    target.style.left = target.docuLeft - target.newX + "px";
    target.style.top = target.docuTop - target.newY + "px";

    target.prevX = e.clientX;
    target.prevY = e.clientY;

  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }

}
export {touring};
export default OschenMouseDown;