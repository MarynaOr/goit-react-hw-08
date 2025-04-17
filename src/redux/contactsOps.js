import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = 'https://67ef9d9b2a80b06b8894f93c.mockapi.io/'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(_, thunkAPI)=>{
try{
    const {data} = await axios.get(`contacts`)
    return data
} catch (e){
 return thunkAPI.rejectWithValue(e.message)
}
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(id, thunkAPI)=>{
    try{
        await axios.delete(`contacts/${id}`)
        return id
    } catch(e){ 
        return thunkAPI.rejectWithValue(e.message)
    }
})