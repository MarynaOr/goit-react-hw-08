import { createSlice } from "@reduxjs/toolkit";

const initialState = {  items: [] };

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (action, state) => {
      state.items.push(action.payload);
    },
    deleteContact: (action, state) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
