"use client"
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "../Feature/cart slice/cartSlice"
import wishlistSlice from "../Feature/wishlist slice/wishlistSlice"

const store = configureStore({
    reducer:{
        cartData: cartSlice,
        wishlist: wishlistSlice
    }
})

export default store