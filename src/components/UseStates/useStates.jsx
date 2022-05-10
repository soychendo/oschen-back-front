import React, { useEffect, useState } from 'react';

const useDataBase = () => {

  const [datos, setDatos] = useState([]);
   
  useEffect(() => {
    
    fetch('./database/windows.json')
      .then(response => response.json())
      .then(data => {
        setDatos(data);
        console.log(data)
      })

  }, [])
  
  return datos;
}

const Datos = () => {

  const data = useDataBase();
  return (
    <div>
      {data.map(item => {
        let array = item.explorer
        array.forEach(element => {
          console.log(element.name)
        });
      })}
    </div>
  );
}

export default Datos;