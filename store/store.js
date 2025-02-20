"use client"
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "../Feature/cart slice/cartSlice"
import wishlistSlice from "../Feature/wishlist slice/wishlistSlice"
import checkoutSlice from "../Feature/checkoutSlice/checkoutSlice"

const store = configureStore({
    reducer:{
        cartData: cartSlice,
        wishlist: wishlistSlice,
        checkout: checkoutSlice
    }
})

export default store