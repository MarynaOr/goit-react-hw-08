// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit"

const initialState = {contacts: [],}

const contactsSlice = createSlice({
    name:contacts,
    initialState,
    reducers: {
        addContact: (action,state) =>{
            state.items.push(action.payload)
        },
        deleteContact: (action,state) =>{
            state.items = state.items.filter(item=>item.id !== action.payload)
        }

    }
})


export const {addContact, deleteContact} = slice.actions

