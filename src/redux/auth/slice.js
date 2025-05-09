import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:{
        name:null,
        email:null,
    },
    token: null,
    isLoggedIn:false,
    isRefreshing:false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>{
        builder
        
    }
})

export const authReducer =authSlice.reducer
