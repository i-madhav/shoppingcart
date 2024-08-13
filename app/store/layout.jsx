"use client";

import React from "react";
import { Navbar } from "./_components/navbar";
import { Provider, useSelector } from "react-redux";
import { store } from "../(reduxstore)";

const layout = ({ children }) => {
  return (
    <div className=" bg-purple-300">
      <Provider store={store}>
        <Navbar />
        {children}
      </Provider>
    </div>
  );
};

export default layout;
