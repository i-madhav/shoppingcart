'use client'

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
    },
    reducers:{
        addItem:(state , action) => {
            const esistingEle = state.cartItems.find((item) => item.id === action.payload.id);
            if(esistingEle){
                esistingEle.quantity +=1;
            }else{
                state.cartItems.push(action.payload);
            }
        },
        removeItem:(state , action) => {
            state.cartItems = state.cartItems.filter((items) => items.id !== action.payload)
        },
        clearCart:(state) => {
            state.cartItems = []
        },
    }
});

export const{ addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;