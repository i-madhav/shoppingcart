"use client";

import { addItem } from "../../(slice)/slice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'

const Card = ({ image, title, price , id }) => {
  const count = useSelector((store) => store.cart.cartItems);
  const data = { image, title, price, quantity: 1 , id }
  const dispatch = useDispatch();
  const handleAddItemCart = () => {
    dispatch(addItem(data));
  };
  return (
    <div className="bg-white rounded-md border-black flex flex-col items-start p-5 shadow-xl space-x-5 space-y-2">
      <div className="w-24 m-auto">
        <Image
          src={image}
          alt="product image"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>

      <p className=" inline-block text-left text-xl font-semibold">{title}</p>

      <div className=" flex items-center space-x-3">
        <p className=" text-2xl">&#8377;{Math.floor(price)}</p>
        <button className=" bg-black text-white font-semibold rounded-md px-3 py-2" onClick={() => handleAddItemCart()}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
