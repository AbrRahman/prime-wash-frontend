import { createSlice } from "@reduxjs/toolkit";

// searchTerm=wash&duration=30&maxPrice=30&sort=-price
type TServiceInitialState = {
  searchTerm: string;
  duration: string;
  maxPrice: string;
};

const initialState: TServiceInitialState = {
  searchTerm: "",
  duration: "",
  maxPrice: "",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: () => ({
    setSearchTerm: (state, actions) => {
      state.searchTerm = actions.payload;
    },
    setDuration: (state, actions) => {
      state.duration = actions.payload;
    },
    setMaxPrice: (state, actions) => {
      state.maxPrice = actions.payload;
    },
  }),
});

export const { setSearchTerm, setDuration, setMaxPrice } = serviceSlice.actions;

export default serviceSlice.reducer;
