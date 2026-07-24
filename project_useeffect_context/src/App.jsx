import React, { useContext } from 'react'
import axios from "axios"
import Navbar from './components/Navbar'
import ProductCard from './components/Productcard'
import { useState } from 'react'
import { useEffect } from 'react'
import Cart from './components/Cart'
import { MyStore } from './context/MyContext'

const App = () => {

  const [productData, setProductsData] = useState([])
 
 
let {cartOpen,addCart} = useContext(MyStore)
  
console.log("addCart",addCart)

const getProductData =async () => {
  try{

    let res = await axios.get("https://fakestoreapi.com/products")
    setProductsData(res.data);

  } catch (error){
    console.log("error in api",error)
  }
}

useEffect(() => {
getProductData()
}, [])



  return (
    <div>
       <Navbar />
      
     

{
  cartOpen ? (
    <Cart/>
  ) : (
    <div className="flex flex-wrap gap-6 p-5">
      {productData.map((elem) => {

let isInCard = addCart.find((val) => val.id === elem.id)
       return <ProductCard
          key={elem.id}
          product={elem}
          isInCard={isInCard}
          
        />
      })}
    </div>
  )
}






    </div>
  )
}

export default App
