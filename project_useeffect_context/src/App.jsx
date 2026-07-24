import React from 'react'
import axios from "axios"
import Navbar from './components/Navbar'
import ProductCard from './components/Productcard'
import { useState } from 'react'
import { useEffect } from 'react'
import Cart from './components/Cart'

const App = () => {

  const [productData, setProductsData] = useState([])

  const [cartOpen, setCartOpen] = useState(false)

  const [addCart, setAddCart] = useState([])

  console.log(addCart)

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
       <Navbar setCartOpen={setCartOpen} />
      
     

{
  cartOpen ? (
    <Cart addCart={addCart} />
  ) : (
    <div className="flex flex-wrap gap-6 p-5">
      {productData.map((elem) => (
        <ProductCard
          key={elem.id}
          product={elem}
          setAddCart = {setAddCart}
        />
      ))}
    </div>
  )
}






    </div>
  )
}

export default App
