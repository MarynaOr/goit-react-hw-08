import { createSlice } from "@reduxjs/toolkit";
import { addContacts, fetchContacts, deleteContact } from "./operations";
import { fetchLogout } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};
const handlePending = (state) => {
  state.isLoading = true;
};

const HandleRejected = (state, action) => {
  isLoading = true;
  state.isError = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, HandleRejected)

      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, HandleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, HandleRejected)

      .addCase(fetchLogout.fulfilled, () => initialState);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.isError;
