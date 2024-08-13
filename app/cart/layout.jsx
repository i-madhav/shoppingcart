"use client"

import React from "react";
import { Provider } from "react-redux";
import { store } from "../(reduxstore)";

const layout = ({ children }) => {
  return (
    <div className="">
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default layout;
