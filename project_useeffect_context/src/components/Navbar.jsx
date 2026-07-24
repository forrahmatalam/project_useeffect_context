import React from 'react'
import { MyStore } from '../context/MyContext';
import { useContext } from "react";





const Navbar = () => {

let {setCartOpen} = useContext(MyStore);

  return (
    <div className=" rounded-xl flex justify-between items-center bg-black p-4">
      <div>Logo</div>
      <div className='flex gap-4'>
<p onClick={()=>setCartOpen(false)}>Home</p>
<p onClick={() => setCartOpen(true)} >Cart</p>

      </div>
      <button></button>
    </div>
  )
}

export default Navbar