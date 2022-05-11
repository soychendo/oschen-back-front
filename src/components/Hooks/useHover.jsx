

const useHover = () => {

  const icons = document.querySelectorAll('.icon_open');

  icons.forEach(move => {
    
    move.addEventListener('click', (e) => {
      const small = document.createElement('small');
      let x = e.clientX - e.target.offsetLeft
      let y = e.clientY - e.target.offsetTop

      small.style.left = x + 'px';
      small.style.top = y + 'px';

      move.appendChild(small)

    })
    
  });

}

export default useHover;