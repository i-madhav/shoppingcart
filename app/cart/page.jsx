"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./_components/card";
import Link from "next/link";
import { clearCart } from "../(slice)/slice";
const page = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.cart.cartItems);
  let totalPrice = count.reduce(
    (sum, item) => sum + Math.floor(item.price) * item.quantity,
    0
  );
  const handleCleanCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" bg-purple-300 p-5 h-screen">
      <div className=" w-full">
        {count.map((item) => (
          <Card {...item} />
        ))}
      </div>

      <div className=" w-full p-5 border-black flex flex-col items-center">
        <p className=" text-2xl text-center">Total Price : {totalPrice}</p>
        <Link
          className="bg-black text-white text-lg font-semibold px-3 py-2 rounded-lg w-full text-center"
          href={`${totalPrice ? "/checkout" : "/cart"}`}
          onClick={totalPrice ?  () => handleCleanCart() : ""}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default page;
