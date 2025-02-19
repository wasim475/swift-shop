"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getwishlistData } from '../../swift-shop/utility';




export const wishlistDataLoader = createAsyncThunk("wishlist",
    async()=>{
        const wishData = await getwishlistData()
        return wishData
    }
)

const wishlistDataSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishlistData: [],
        isLoading: false,
        isError: false,
        errorMassage: null
    },
    extraReducers:(builder)=>{
        builder.addCase(wishlistDataLoader.pending, state=>{
            state.isLoading= true
        }).addCase(wishlistDataLoader.fulfilled, (state,action)=>{
            state.isLoading= false
            state.isError = false
            state.wishlistData = action.payload
        }).addCase(wishlistDataLoader.rejected, (state,action)=>{
            state.isLoading = false
            state.errorMassage = action.error?.message
        })
    }
})

export default wishlistDataSlice.reducer