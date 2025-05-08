import { createSelector } from "@reduxjs/toolkit";

const selectContacts = (state) => state.contacts.items;
const selectFilter = (state) => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
