import { createSlice } from "@reduxjs/toolkit";
import {  addContacts, fetchContacts, deleteContact } from "./contactsOps";

const initialState = { 
  items: [],
   isLoading: false, 
   isError: null
   };

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
    // addContact: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
    // editContact: (state, action) => {
    //   const item = state.items.find((item) => item.id === action.payload.id);
    //   if (item) {
    //     item.contact = action.payload.contact;
    //   }
    // },
  // },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state, action) => {
     state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    })
    .addCase(addContacts.fulfilled, (state, action) =>{
      state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) =>{
        state.items = state.items.filter((item) => item.id !== action.payload);

   })
   },
   
});

// export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items
export const selectLoading  = state => state.contacts.isLoading
export const selectError  = state => state.contacts.isError

// (state, action) => {
  //   state.items = state.items.filter((item) => item.id !== action.payload);
  // },









  // export const selectFilteredContacts = createSelector(
  //   [selectContacts, filterNameContacts],
  //   (contacts, filter) =>
  //     contacts.filter((item) =>
  //       item.name.toLowerCase().includes(filter.toLowerCase().trim())
  //     )
  // );




