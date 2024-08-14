// navbar.jsx
`use client`

import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

export const Navbar = ({ onSearch }) => {
  const count = useSelector((store) => store.cart.cartItems);
  const totalQuantity = count.reduce((sum , item) => sum + item.quantity , 0);
 
  return (
    <div className='fixed top-0 left-0 opacity-75 h-20 bg-fuchsia-600 shadow-lg w-full flex items-center justify-evenly'>
        <Image src={"/logo.svg"} alt='this is my logo' width={50} height={50}/>

        <div className='bg-white w-[30%] rounded-xl overflow-hidden'>
            <input 
              type='text' 
              placeholder='search' 
              className='p-2 outline-none border-none' 
              onChange={(e) => onSearch(e.target.value)}
            />
        </div>

        <Link className='relative' href={`${totalQuantity === 0 ? "/store" : "/cart"}`}>
            <Image src={"/cart.svg"} alt='cart' width={50} height={50}/>
            <div className='absolute bottom-[50%] right-[-25%] bg-white text-yellow-700 font-semibold text-base rounded-full text-center px-3 py-1'>
                {totalQuantity}
            </div>
        </Link>
    </div>
  )
}