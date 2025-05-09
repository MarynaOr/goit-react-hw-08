import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const swaggerApi = axios.create({
    baseURL: 'https://connections-api.goit.global/'
})

export const fetchAuth= createAsyncThunk('auth/fetchAuth', async(body, thunkAPI)=>{
    try {
        const response = await swaggerApi.post('users/signup', body)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
})









