import { createContext } from "react";
import { useState } from "react";

export const MyStore = createContext() ;

export const ContextProvider =({children})=>{


  const [cartOpen, setCartOpen] = useState(false)
  const [addCart, setAddCart] = useState([])

  const incrementQuantity = (id) => {
  setAddCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
  };


const decrementQuantity = (id) => {
  setAddCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
  );
  };


     return(
        <MyStore.Provider value={{addCart,cartOpen,setCartOpen,setAddCart,incrementQuantity,decrementQuantity}}>
            {children}
        </MyStore.Provider>)
}