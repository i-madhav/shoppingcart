import React from 'react'
import { useSelector } from 'react-redux'

const card = () => {
    const count = useSelector((store) => store.cart.cartItems);
  return (
    <div>
        <div>

        </div>
        <div>
            
        </div>
    </div>
    
  )
}

export default card