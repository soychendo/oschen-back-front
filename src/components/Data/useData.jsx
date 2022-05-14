import { useEffect, useState } from 'react';

const useData = (option) => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const url = `http://localhost:5000/${option}`;

    const useDataBase = async () => {
      const response = await fetch(url);
      const json = await response.json();
      
      setData(json)
    }
    useDataBase()
  }, [])

  return data;
}

export {useData};