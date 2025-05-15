import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const swaggerApi = axios.create({
    baseURL: 'https://connections-api.goit.global/'
})


export const setAuthHeader = token => {
    swaggerApi.defaults.headers.common.Authorization = `Bearer ${token}`
} 

export const clearAuthHeader = () =>{
    swaggerApi.defaults.headers.common.Authorization = ``
}



export const fetchAuth= createAsyncThunk('auth/fetchAuth', async(body, thunkAPI)=>{
    try {
        const {data} = await swaggerApi.post('users/signup', body)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
})

export const fetchLogin = createAsyncThunk('login/fetchLogin', async (body, thunkAPI)=>{
    try {
        const {data} = await swaggerApi.post('users/login', body)
        console.log('Login payload:', body);
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
})


// anonimouszc
// ddggff@gdz.com



