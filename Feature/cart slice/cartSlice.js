"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCartData } from '../../swift-shop/utility';



export const cartDataLoader = createAsyncThunk("cart",
    async()=>{
        const cartData = await getCartData()
        return cartData
    }
)

const cartDataSlice = createSlice({
    name:"cartData",
    initialState:{
        cartInfo: [],
        isLoading: false,
        isError: false,
        errorMassage: null
    },
    extraReducers:(builder)=>{
        builder.addCase(cartDataLoader.pending, state=>{
            state.isLoading= true
            state.isError= false
        }).addCase(cartDataLoader.fulfilled, (state,action)=>{
            state.isLoading= false
            state.isError = false
            state.cartInfo = action.payload
        }).addCase(cartDataLoader.rejected, (state,action)=>{
            state.isLoading = false
            state.errorMassage = action.error?.message
        })
    }
})

export default cartDataSlice.reducer