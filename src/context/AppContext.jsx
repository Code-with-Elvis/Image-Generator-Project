import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const ContextProvider = ({ children }) => {
  let [searchTerm, setSearchTerm] = useState('monkey')
  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
