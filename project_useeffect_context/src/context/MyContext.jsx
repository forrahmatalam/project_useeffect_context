import { createContext } from "react";
import { useState } from "react";

export const MyStore = createContext() ;

export const ContextProvider =({children})=>{


  const [cartOpen, setCartOpen] = useState(false)
  const [addCart, setAddCart] = useState([])

     return(
        <MyStore.Provider value={{addCart,cartOpen,setCartOpen,setAddCart}}>
            {children}
        </MyStore.Provider>)
}