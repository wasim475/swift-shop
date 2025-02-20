"use client"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCheckOutData } from '../../swift-shop/utility';




export const checkoutDataLoader = createAsyncThunk("wishlist",
    async()=>{
        const checkoutD = await getCheckOutData()
        return checkoutD
    }
)

const checkoutSlice = createSlice({
    name:"checkout",
    initialState:{
        checkoutData: [],
        isLoading: false,
        isError: false,
        errorMassage: null
    },
    extraReducers:(builder)=>{
        builder.addCase(checkoutDataLoader.pending, state=>{
            state.isLoading= true
        }).addCase(checkoutDataLoader.fulfilled, (state,action)=>{
            state.isLoading= false
            state.isError = false
            state.checkoutData = action.payload
        }).addCase(checkoutDataLoader.rejected, (state,action)=>{
            state.isLoading = false
            state.errorMassage = action.error?.message
        })
    }
})

export default checkoutSlice.reducer