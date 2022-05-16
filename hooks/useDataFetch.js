
import {useState, useEffect} from 'react';

const useDataFetch = (url) => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const database = async () => {
      
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };

    database();
  }, [url]);
    
    return data;
}

export {useDataFetch};