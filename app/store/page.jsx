'use client'

import React, { useEffect, useState } from 'react'
import Card from './_components/card';
import Shimmer from './_components/shimmer';
import Link from 'next/link';
const page = () => {
    const[storeData , setStoreData] = useState([]);
    console.log(storeData);
    
    useEffect(() => {
       handleStoreApi();
    },[])

    const handleStoreApi = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setStoreData(data);
    }

  return (
    <Link className="grid grid-cols-3 gap-8 p-5 mt-20" href={`${storeData.length === 0 ? "/store" : "/cart"}`}>
    {storeData.length === 0 
      ? Array(10).fill().map((_, index) => <Shimmer key={index} />)
      : storeData.map((item) => <Card {...item} key={item.id} />)
    }
  </Link>
  )
}

export default page