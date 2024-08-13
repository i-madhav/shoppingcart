"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addItem , removeItem } from "../../(slice)/slice";

const Card = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();

  const handleQuantityIncrease = () => {
    dispatch(addItem({ id, image, title, price }));
  };

  const handleQuantityDecrease = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="border-b border-black w-full">
      <div className="bg-white rounded-md border-black flex flex-col items-start p-5 shadow-xl space-x-5 space-y-2 w-full">
        <div className="flex items-center">
          <div className="w-[50px] m-auto">
            <img
              src={image}
              alt="product image"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <p className="inline-block text-left text-xl font-semibold">
            {title.slice(0, 30)}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <p className="text-2xl">&#8377;{Math.floor(price)}</p>
          <div className="bg-black text-white font-semibold text-lg rounded-md px-3 py-2 space-x-3 flex items-center">
            <p
              className="border-r border-black cursor-pointer"
              onClick={handleQuantityIncrease}
            >
              +
            </p>
            <p>{quantity}</p>
            <p
              className="border-l border-black cursor-pointer"
              onClick={handleQuantityDecrease}
            >
              -
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
