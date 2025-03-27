import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    filter: ''
}

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        changeFilter: (state, action) =>{
            state.filter() = action.payload
        }
    }
})

export const {changeFilter} = slice.action