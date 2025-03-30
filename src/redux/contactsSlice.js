import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    editContact: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.contact = action.payload.contact;
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
