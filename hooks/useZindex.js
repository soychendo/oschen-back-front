// Zindex Global -> Oschen -> @chendoio
import { useState } from "react";
const  useZindex = (container) => {

  const [index, setIndex] = useState(false);
  
  const changeZindex = () => {
  window.addEventListener('mousedown', e => {
    if(e.target !== container && !container?.contains(e.target)) {
      setIndex(false)
    } else {
      setIndex(true)
    }
    })
  }
  const active = {
    zIndex: index ? "7" : "0"
  }

  return {
    changeZindex,
    active
  };
}
export {useZindex};