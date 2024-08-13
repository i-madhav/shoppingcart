import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const count = useSelector((store) => store.cart.cartItems);
  return (
    <div className=' fixed top-0 left-0 opacity-75  h-20 bg-fuchsia-600 shadow-lg w-full flex items-center justify-evenly'>
        <Image src={"/logo.svg"} alt='this is my logo' width={50} height={50}/>

        <div className=' bg-white w-[30%] rounded-xl overflow-hidden'>
            <input type='text' placeholder='search' className=' p-2 outline-none border-none'/>
        </div>

        <div className='relative'>
            <Image src={"/cart.svg"} alt='cart' width={50} height={50}/>
            <div className='absolute bottom-[50%] right-[-25%] bg-white text-yellow-700 font-semibold text-base rounded-full text-center px-3 py-1'>
                {count.length === 0 ? 0 : count.length}
            </div>
        </div>
    </div>
  )
}
