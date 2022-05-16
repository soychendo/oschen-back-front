import React, {createContext} from 'react'

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  
  return(
    <GlobalContext.Provider value='5'>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};
export {GlobalContext};