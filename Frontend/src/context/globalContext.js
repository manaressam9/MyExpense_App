import { createContext } from "react";
import axios from 'axios';
const GlobalContext = createContext()
export const GlobalProvider = (({children})=>{
  return(
    <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
  )  
})