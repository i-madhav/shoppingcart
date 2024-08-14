// page.jsx
'use client'

import React, { useEffect, useState } from 'react'
import Card from './_components/card';
import Shimmer from './_components/shimmer';
import { Navbar } from './_components/navbar';

const Page = () => {
    const [storeData, setStoreData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
       handleStoreApi();
    }, [])

    const handleStoreApi = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setStoreData(data);
        setFilteredData(data);
    }

    const handleSearch = (value) => {
        setSearchTerm(value);
        const filtered = storeData.filter((item) => 
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    }

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <div className="grid grid-cols-3 gap-8 p-5 mt-20">
                {filteredData.length === 0 
                    ? Array(10).fill().map((_, index) => <Shimmer key={index} />)
                    : filteredData.map((item) => <Card {...item} key={item.id} />)
                }
            </div>
        </>
    )
}

export default Page