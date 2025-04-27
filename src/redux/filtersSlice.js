import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
// export const selectNameFilter = createSelector(
  // (state) => state.filter.filter, // перший вхідний селектор
  // (filter) => filter               // функція, яка повертає результат
// );
  // const filter = useSelector((state) => state.filter.filter);
  export const selectNameFilter = state => state.filter.name;
  // export const selectNameFilter = createSelector(
  //   state=> state.filter.filter
  // )

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
