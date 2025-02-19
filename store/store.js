"use client"
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "../Feature/cart slice/cartSlice"

const store = configureStore({
    reducer:{
        cartData: cartSlice
    }
})

export default store