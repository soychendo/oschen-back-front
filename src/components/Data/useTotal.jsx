import  {useEffect, useState} from 'react';

  const useTotal = (totalItem) => {
    const [total, setTotal] = useState(0);
   
    useEffect(() => {
      
      setTotal(totalItem)
      
    }, [])

    return total
  }

export default useTotal;