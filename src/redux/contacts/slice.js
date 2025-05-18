import { createSlice } from "@reduxjs/toolkit";
import { addContacts, fetchContacts, deleteContact } from "./operations";
import { fetchLogout } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    //     cleanContacts(state) {
    //   state.items = [];
    //   state.isLoading = false;
    //   state.isError = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
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
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(fetchLogout.fulfilled, () => initialState);
  },
});

export const { cleanContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.isError;
