import { createSlice } from "@reduxjs/toolkit"
import { fetchAuth, fetchLogin, fetchLogout } from "./operations"

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
        .addCase(fetchAuth.fulfilled, (state, action) =>{
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn =true
        })
        .addCase(fetchLogin.fulfilled, (state, action) =>{
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn =true
        })
        .addCase(fetchLogout.fulfilled, ()=> initialState)
    }
})

export const authReducer =authSlice.reducer
