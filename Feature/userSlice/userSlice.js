"use client"
import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from '../../swift-shop/utility';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: getUserData(),
  },
  reducers: {
    activeUser: (state,actions) => {
      state.value = actions.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { activeUser } = userSlice.actions;

export default userSlice.reducer;
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { getUserData } from '../../swift-shop/utility';


// // 

// export const userDataLoader = createAsyncThunk("wishlist",
//     async()=>{
//         const userData = await getUserDataData()
//         return userData
//     }
// )

// const userSlice = createSlice({
//     name:"user",
//     initialState:{
//         userData: [],
//         isLoading: false,
//         isError: false,
//         errorMassage: null
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(userDataLoader.pending, state=>{
//             state.isLoading= true
//         }).addCase(userDataLoader.fulfilled, (state,action)=>{
//             state.isLoading= false
//             state.isError = false
//             state.userData = action.payload
//         }).addCase(userDataLoader.rejected, (state,action)=>{
//             state.isLoading = false
//             state.errorMassage = action.error?.message
//         })
//     }
// })

// export default userSlice.reducer