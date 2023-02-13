import { createSlice } from "@reduxjs/toolkit";

import { fetchCountries } from "./asyncActions";

const Status = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

const initialState = {
  items: [],
  status: Status.LOADING,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });

    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = countrySlice.actions;

export default countrySlice.reducer;
