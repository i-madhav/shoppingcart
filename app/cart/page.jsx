import React from 'react'
import { useSelector } from 'react-redux'
const page = () => {
    const count = useSelector((store) => store.cart.cartItems);
  return (
    <div className=' bg-purple-300'>
        
    </div>
  )
}

export default page